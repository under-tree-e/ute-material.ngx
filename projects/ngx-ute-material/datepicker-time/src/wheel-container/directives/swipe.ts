import { Directive, ElementRef, EventEmitter, HostBinding, Input, NgZone, OnDestroy, OnInit, Output } from "@angular/core";
import { fromEvent, merge, Observable, race, Subscription } from "rxjs";
import { elementAt, map, switchMap, takeUntil, tap } from "rxjs/operators";

interface SwipeCoordinates {
    x: number;
    y: number;
}

enum SwipeDirection {
    "up" = "up",
    "down" = "down",
    "left" = "left",
    "right" = "right",
}

enum SwipeScroll {
    "vertical" = "vertical",
    "horizontal" = "horizontal",
    "both" = "both",
}

const SwipeDirectionConst = {
    up: "y",
    down: "y",
    left: "x",
    right: "x",
};

enum SwipePhase {
    "start" = "start",
    "move" = "move",
    "end" = "end",
    "cancel" = "cancel",
}

interface SwipeStartEvent {
    x: number;
    y: number;
    direction: SwipeDirection;
}

interface SwipeEvent {
    phase: SwipePhase;
    direction: SwipeDirection | null;
    distance: number;
}

interface SwipeOptions {
    triggerOnTouchEnd?: boolean;
    allowPageScroll?: "vertical" | "horizontal" | "both";
}

interface SwipeSubscriptionConfig {
    domElement: HTMLElement;
    onSwipe?: (event: SwipeEvent) => void;
}

@Directive({
    selector: "[uteSwipe]",
    standalone: true,
})
export class SwipeDirective implements OnInit, OnDestroy {
    @HostBinding("style.user-select") userSelect: string = "none";

    private swipeSubscription: Subscription | undefined;
    private swipeDirection: typeof SwipeDirectionConst = SwipeDirectionConst;

    @Input() swipeOptions: SwipeOptions = {} as SwipeOptions;
    @Output() swipe: EventEmitter<SwipeEvent> = new EventEmitter<SwipeEvent>();

    constructor(private elementRef: ElementRef, private ngZone: NgZone) {}

    ngOnInit() {
        if (!this.swipeOptions.allowPageScroll) this.swipeOptions.allowPageScroll = "both";
        if (!this.swipeOptions.triggerOnTouchEnd) this.swipeOptions.triggerOnTouchEnd = true;

        this.ngZone.runOutsideAngular(() => {
            this.swipeSubscription = this.createSwipeSubscription({
                domElement: this.elementRef.nativeElement,
                onSwipe: (swipeEvent: SwipeEvent) => this.swipe.emit(swipeEvent),
            });
        });
    }

    ngOnDestroy() {
        this.swipeSubscription?.unsubscribe?.();
    }

    private createSwipeSubscription({ domElement, onSwipe }: SwipeSubscriptionConfig): Subscription {
        if (!(domElement instanceof HTMLElement)) {
            throw new Error("Provided domElement should be an instance of HTMLElement");
        }

        if (typeof onSwipe !== "function") {
            throw new Error("At swipe event handler functions should be provided: onSwipe");
        }

        const touchStarts = fromEvent<TouchEvent>(domElement, "touchstart").pipe(map(this.getCoordinates));
        const touchMoves = fromEvent<TouchEvent>(domElement, "touchmove").pipe(map(this.getCoordinates));
        const touchEnds = fromEvent<TouchEvent>(domElement, "touchend").pipe(map(this.getCoordinates));
        const touchCancels = fromEvent<TouchEvent>(domElement, "touchcancel").pipe(map(this.getCoordinates));

        const mouseStarts = fromEvent<MouseEvent>(domElement, "mousedown").pipe(map(this.getCoordinates));
        const mouseMoves = fromEvent<MouseEvent>(domElement, "mousemove").pipe(map(this.getCoordinates));
        const mouseEnds = fromEvent<MouseEvent>(domElement, "mouseup").pipe(map(this.getCoordinates));
        const mouseCancels = fromEvent<MouseEvent>(domElement, "mouseout").pipe(map(this.getCoordinates));

        const allStarts = merge(touchStarts, mouseStarts);
        const allMoves = merge(touchMoves, mouseMoves);
        const allEnds = merge(touchEnds, mouseEnds);
        const allCancels = merge(touchCancels, mouseCancels);

        const touchStartsWithDirection: Observable<SwipeStartEvent> = allStarts.pipe(
            tap((coordinates: SwipeCoordinates) => {
                onSwipe(this.getSwipeEvent(SwipePhase.start, null, coordinates));
            }),
            switchMap((touchStartEvent: SwipeCoordinates) =>
                allMoves.pipe(
                    elementAt(3),
                    map((touchMoveEvent: SwipeCoordinates) => ({
                        x: touchStartEvent.x,
                        y: touchStartEvent.y,
                        direction: this.getDirection(touchStartEvent, touchMoveEvent),
                    }))
                )
            )
        );

        return touchStartsWithDirection
            .pipe(
                switchMap((touchStartEvent) =>
                    allMoves.pipe(
                        map((touchMoveEvent) => this.getDistance(touchStartEvent, touchMoveEvent)),
                        tap((coordinates: SwipeCoordinates) => {
                            onSwipe(this.getSwipeEvent(SwipePhase.move, touchStartEvent, coordinates));
                        }),
                        takeUntil(
                            race(
                                allEnds.pipe(
                                    map((touchEndEvent) => this.getDistance(touchStartEvent, touchEndEvent)),
                                    tap((coordinates: SwipeCoordinates) => {
                                        if (this.swipeOptions.triggerOnTouchEnd) onSwipe(this.getSwipeEvent(SwipePhase.end, touchStartEvent, coordinates));
                                    })
                                ),
                                allCancels.pipe(
                                    map((touchCancelEvent) => this.getDistance(touchStartEvent, touchCancelEvent)),
                                    tap((coordinates: SwipeCoordinates) => {
                                        if (this.swipeOptions.triggerOnTouchEnd) onSwipe(this.getSwipeEvent(SwipePhase.cancel, touchStartEvent, coordinates));
                                    })
                                )
                            )
                        )
                    )
                )
            )
            .subscribe();
    }

    private getCoordinates(event: TouchEvent | MouseEvent): SwipeCoordinates {
        if (event instanceof TouchEvent) {
            return {
                x: event.changedTouches[0].clientX,
                y: event.changedTouches[0].clientY,
            };
        } else {
            return {
                x: event.clientX,
                y: event.clientY,
            };
        }
    }

    private getDistance(startCoordinates: SwipeCoordinates, moveCoordinates: SwipeCoordinates): SwipeCoordinates {
        return {
            x: moveCoordinates.x - startCoordinates.x,
            y: moveCoordinates.y - startCoordinates.y,
        };
    }

    private getDirection(startCoordinates: SwipeCoordinates, moveCoordinates: SwipeCoordinates): SwipeDirection {
        const { x, y } = this.getDistance(startCoordinates, moveCoordinates);
        if ((Math.abs(x) < Math.abs(y) && this.swipeOptions.allowPageScroll === SwipeScroll.both) || this.swipeOptions.allowPageScroll === SwipeScroll.vertical) {
            return Math.abs(startCoordinates.y) < Math.abs(moveCoordinates.y) ? SwipeDirection.down : SwipeDirection.up;
        } else {
            return Math.abs(startCoordinates.x) < Math.abs(moveCoordinates.x) ? SwipeDirection.right : SwipeDirection.left;
        }
    }

    private getSwipeEvent(phase: SwipePhase, touchStartEvent: SwipeStartEvent | null, coordinates: SwipeCoordinates): SwipeEvent {
        return {
            phase: phase,
            direction: touchStartEvent ? touchStartEvent.direction : null,
            distance: touchStartEvent ? coordinates[this.swipeDirection[touchStartEvent.direction] as "x" | "y"] : 0,
        };
    }
}
