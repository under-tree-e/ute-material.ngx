import { CommonModule } from "@angular/common";
import { Component, ElementRef, EventEmitter, Input, NgZone, OnChanges, Output, SimpleChanges, ViewChild } from "@angular/core";
import { SwipeDirective } from "./directives/swipe";

/**
 * List of item styles
 */
interface ItemStyles {
    duration: string;
    transform: string;
    opacity: number;
    fontSize: string;
}

@Component({
    selector: "time-wheel",
    standalone: true,
    imports: [CommonModule, SwipeDirective],
    templateUrl: "wheel.html",
    styleUrls: ["wheel.scss"],
})
export class TimeWheel implements OnChanges {
    @Input() public block: string[] = [];
    @Input() public array: string[] = [];
    @Input() public underline: boolean = false;
    @Input() public visibleItemsCount: 1 | 3 | 5 = 5;
    @Input() public currentIndex: number = 0;
    @Input() public infiniteScroll: boolean = true;
    @Output() public onChange: EventEmitter<number> = new EventEmitter<number>();

    public contH: number = 0;
    public blockH: number = 0;
    public itemStyles: ItemStyles[] = [];

    private itemSize: number = 30;
    private speed: number = 500;
    private positionZero: number[] = [];
    private positionBase: number[] = [];
    private positionChange: number[] = [];
    private positionClose: number[] = [];
    private items: any[] = [];
    private itemsDuration: string[] = [];
    private itemsTranslate: string[] = [];
    private scrollClose: any = null;

    constructor(private ngZone: NgZone) {}

    /**
     * Init items & positions
     */
    ngAfterViewInit(): void {
        this.contH = this.itemSize * this.visibleItemsCount;
        this.blockH = this.itemSize + (this.visibleItemsCount === 5 ? this.itemSize : this.visibleItemsCount === 3 ? 0 : this.itemSize * -1);

        this.items = Array(this.array.length).fill("");

        this.items.map((item: any, index: number) => {
            this.positionBase.push((index - this.currentIndex) * this.itemSize);
            this.positionZero.push(index * this.itemSize);
        });
        this.positionClose = [...this.positionChange] = [...this.positionBase];
        this.itemsTranslate = [...this.itemsDuration] = Array(this.items.length).fill("");

        this.onScroll(0, 0, true);
    }

    /**
     * Reculculate position when change index at UteDatepickerTime
     * @param changes - SimpleChanges interface
     */
    ngOnChanges(changes: SimpleChanges) {
        if (changes && Object.keys(changes).some((change: any) => change === "currentIndex")) {
            this.onScroll(this.positionChange[this.currentIndex], 0, true);
            this.closeIndex();
            this.onScroll(this.positionChange[this.currentIndex], 0, true);
        }
    }

    /**
     * Detect swipe action
     * @param event - Dom event
     */
    public onSwipe(event: any) {
        if (event.phase === "move" && (event.direction === "up" || event.direction === "down")) {
            let duration = 0;
            let distance = event.distance * -1;

            if (event.direction === "up") {
                this.onScroll(distance, duration);
            } else if (event.direction === "down") {
                this.onScroll(distance, duration);
            }
        } else {
            if (event.direction == "up") {
                this.onClose();
            } else if (event.direction === "down") {
                this.onClose();
            }
        }
    }

    /**
     * Detect scroll action
     * @param event - Dom event
     */
    public onWheel(event: any) {
        if (event.deltaY > 0) {
            if (this.currentIndex != this.items.length - 1) {
                this.currentIndex += 1;
            } else if (this.infiniteScroll) {
                this.currentIndex = 0;
            }
            this.onScroll(this.itemSize, this.speed, true);
        } else {
            if (this.currentIndex != 0) {
                this.currentIndex -= 1;
            } else if (this.infiniteScroll) {
                this.currentIndex = this.items.length - 1;
            }
            this.onScroll(this.itemSize * -1, this.speed, true);
        }
        clearInterval(this.scrollClose);
        this.scrollClose = null;
        this.scrollClose = setTimeout(() => {
            clearInterval(this.scrollClose);
            this.scrollClose = null;

            this.closeIndex();
            this.onChange.emit(this.currentIndex);
            this.positionClose = [...this.positionChange];
        }, 500);
    }

    /**
     * Recalculate items position
     * @param distance - Distance from event start to end (px)
     * @param duration - Speed time between values
     * @param close - Update finish data
     */
    private onScroll(distance: number, duration: number, close: boolean = false) {
        this.closeIndex();

        this.ngZone.run(() => {
            let value: number = parseInt((distance < 0 ? "" : "-") + Math.abs(distance).toString());

            this.items.map((item: any, index: number) => {
                this.itemsDuration[index] = (duration / 1000).toFixed(1) + "s";

                if (this.infiniteScroll) {
                    this.positionChange[index] = this.positionClose[index] + value;
                    if (this.positionChange[index] > this.items.length * Math.floor(this.itemSize / 2)) {
                        this.positionChange[index] -= this.items.length * this.itemSize;
                    } else if (this.positionChange[index] < this.items.length * (Math.floor(this.itemSize / 2) * -1)) {
                        this.positionChange[index] += this.items.length * this.itemSize;
                    }
                } else {
                    this.positionChange[index] = this.positionClose[index] + value;

                    let positionReverse = [...this.positionZero];
                    positionReverse.reverse();

                    if (this.positionChange[index] > this.positionZero[index]) {
                        this.positionChange[index] = this.positionZero[index];
                    } else if (this.positionChange[index] < positionReverse[index] * -1) {
                        this.positionChange[index] = positionReverse[index] * -1;
                    }
                }

                let translate: string = `translateY(${this.positionChange[index]}px)`;
                if (this.itemsTranslate[index] != translate) {
                    this.itemsTranslate[index] = translate;
                }

                this.genStyle(index);
            });

            if (close) {
                this.onChange.emit(this.currentIndex);
                this.positionClose = [...this.positionChange];
            }
        });
    }

    /**
     * Get closest value to last change position & move item to it
     */
    private onClose() {
        this.positionClose = [...this.positionChange];

        this.closeIndex();

        this.onScroll(this.positionChange[this.currentIndex], this.speed, true);
    }

    /**
     * Get Closest index
     */
    private closeIndex() {
        if (this.positionChange.length) {
            let closestValue = this.positionChange.reduce((prev: number, curr: number) => {
                return Math.abs(curr) < Math.abs(prev) ? curr : prev;
            });
            let closeIndex: number = this.positionChange.map((item: number) => item).indexOf(closestValue);
            if (closeIndex != this.currentIndex) this.currentIndex = closeIndex;
        }
    }

    /**
     * Calculate styles for items
     * @param index - Index of item from list
     */
    public genStyle(index: number): any {
        let end: number = Math.round(this.visibleItemsCount / 2) + this.currentIndex;
        let start: number = this.currentIndex - Math.ceil(this.visibleItemsCount / 2);
        let range: number[] = Array.from({ length: end - start + 1 }, (_, i) => start + i);

        let endBig: number = 6 + this.currentIndex;
        let startBig: number = this.currentIndex - 6;
        let rangeBig: number[] = Array.from({ length: endBig - startBig + 1 }, (_, i) => startBig + i);

        const adjustArray = (numbersArray: number[], minAllowedValue: number, maxAllowedValue: number) => {
            const resultArray = numbersArray.map((num) => {
                const adjustedNum = num + minAllowedValue;
                if (adjustedNum > maxAllowedValue) {
                    return adjustedNum - (maxAllowedValue + 1);
                } else if (adjustedNum < minAllowedValue) {
                    return adjustedNum + (maxAllowedValue + 1);
                } else {
                    return adjustedNum;
                }
            });

            return resultArray;
        };
        range = adjustArray(range, 0, this.items.length - 1);

        const findSide = (numbersArray: number[], currentNumber: number, searchNumber: number) => {
            const currentIndex = numbersArray.indexOf(currentNumber);
            const searchIndex = numbersArray.indexOf(searchNumber);

            if (currentIndex === -1 || searchIndex === -1) {
                return 1;
            }

            const arrayLength = numbersArray.length;

            const rotatedCurrentIndex = (currentIndex + arrayLength) % arrayLength;
            const rotatedSearchIndex = (searchIndex + arrayLength) % arrayLength;

            if (rotatedSearchIndex < rotatedCurrentIndex) {
                return -1;
            } else if (rotatedSearchIndex > rotatedCurrentIndex) {
                return 1;
            } else {
                return 1;
            }
        };

        let display: boolean = range.some((r) => r === index);
        let displaySide: number = findSide(rangeBig, this.currentIndex, index);

        let opacity: { min: number; val: number; max: number } = { min: 0, val: 0, max: 1 };
        let fontSize: { min: number; val: number; max: number } = { min: 0.75, val: 0.75, max: 1.25 };

        if (this.itemsTranslate[index] && display) {
            let pose: number = parseInt(this.itemsTranslate[index].split("(")[1].split("px")[0]);
            if (pose < 0) +pose * -1;

            let limit: number = Math.round((this.itemSize * this.visibleItemsCount) / 2);

            if (limit - pose < 0) {
                opacity.val = opacity.min;
                fontSize.val = fontSize.min;
            } else if (pose === 0) {
                opacity.val = opacity.max;
                fontSize.val = fontSize.max;
            } else {
                opacity.val = opacity.max - Math.abs(pose) / limit;
                fontSize.val = fontSize.min + 0.5 * opacity.val;
            }
        }

        if (display) {
            let values: ItemStyles = {
                duration: this.itemsDuration[index],
                transform: this.itemsTranslate[index],
                opacity: +opacity.val.toFixed(2),
                fontSize: +fontSize.val.toFixed(2) + "em",
            };

            if (!this.itemStyles[index]) {
                this.itemStyles.push(values);
            } else {
                this.itemStyles[index] = values;
            }
        } else {
            let values: ItemStyles = {
                duration: "0s",
                transform: `translateY(${displaySide * this.itemSize * 3}px)`,
                opacity: opacity.min,
                fontSize: `${fontSize.min}em`,
            };

            if (!this.itemStyles[index]) {
                this.itemStyles.push(values);
            } else {
                if (values.transform != this.itemStyles[index].transform) {
                    this.itemStyles[index] = values;
                }
            }
        }
    }

    /**
     * Check if value is allow to select
     * @param index - Index of item from list
     * @returns - boolean status
     */
    public getDisabled(index: number): boolean {
        return this.block.some((bl: string) => bl === this.array[index]) ? true : false;
    }
}
