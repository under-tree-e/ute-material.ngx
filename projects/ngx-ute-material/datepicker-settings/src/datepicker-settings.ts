import { formatDate } from "@angular/common";
import { Directive, EventEmitter, HostListener, Inject, Input, OnInit, Output, inject } from "@angular/core";
import { DateAdapter, NativeDateAdapter } from "@angular/material/core";
import { MatDateRangePicker, MatDatepicker } from "@angular/material/datepicker";
import { Subscription } from "rxjs";

export const UteDateFormat = {
    parse: { dateInput: "input" },
    display: {
        dateInput: "input",
        monthYearLabel: "MMMM YYYY",
        dateA11yLabel: "LL",
        monthYearA11yLabel: "MMMM YYYY",
    },
};

@Directive({
    selector: "[uteDateSettings]",
    standalone: true,
    providers: [NativeDateAdapter],
})
export class UteDatepickerSettings implements OnInit {
    @Input() public format: string = "";
    @Input() public weekStart: 0 | 1 = 0;
    @Input() public overlayClass: string = "";
    @Input() public backdropClass: string = "";
    @Input() public contentClass: string = "";
    @Input() public weekdaysSymbols: 1 | 2 | 3 | null = null;
    @Input() public dynamicTouchUI: boolean = false;
    @Output() public dateSelected: EventEmitter<void> = new EventEmitter<void>();

    private nativeDateAdapter: NativeDateAdapter = new NativeDateAdapter();
    private isMoment: boolean = false;
    private copyCurrentAdapter: any;
    private matDatepicker: any = null;
    private isRange: boolean = false;
    private subscriptions = new Subscription();

    constructor(@Inject(DateAdapter) public dateAdapter: DateAdapter<any>) {
        try {
            this.matDatepicker = inject(MatDatepicker);
        } catch {
            try {
                this.matDatepicker = inject(MatDateRangePicker);
                this.isRange = true;
            } catch {
                throw "Datepicker not found!";
            }
        }

        this.isMoment = (this.dateAdapter as any).useUtcForDisplay === undefined ? true : false;
    }

    ngOnInit(): void {
        this.mobileAdopt();
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    ngAfterViewInit() {
        // Generate dublicate for instance
        function duplicateInstance(instance: any): any {
            const instanceCopy = Object.create(Object.getPrototypeOf(instance));
            Object.assign(instanceCopy, instance);
            return instanceCopy;
        }

        this.copyCurrentAdapter = duplicateInstance(this.dateAdapter);

        this.subscriptions.add(
            this.matDatepicker.openedStream.subscribe(() => {
                // Custom classes
                if (this.overlayClass || this.contentClass || this.backdropClass) {
                    let content: HTMLElement = this.matDatepicker._componentRef.location.nativeElement;

                    if (this.contentClass && content) content.classList.add(this.contentClass);

                    if (this.overlayClass && content) {
                        content.parentElement!.classList.add(this.overlayClass);
                    }

                    if (this.backdropClass && content) {
                        content.parentElement!.parentElement!.parentElement!.children[0].classList.add(this.backdropClass);
                    }
                }

                // First day of week
                this.dateAdapter.getFirstDayOfWeek = () => this.weekStart || this.nativeDateAdapter.getFirstDayOfWeek();

                // Weekdays header format
                this.dateAdapter.getDayOfWeekNames = (style: "long" | "short" | "narrow") =>
                    this.weekdaysSymbols ? this.nativeDateAdapter.getDayOfWeekNames("long").map((nr: string) => nr.slice(0, this.weekdaysSymbols!)) : this.copyCurrentAdapter.getDayOfWeekNames(style);

                // Create subscriber to detect when matCalendar value will be changed
                this.subscriptions.add(
                    this.matDatepicker._componentRef.changeDetectorRef.context._model.selectionChanged.subscribe((event: any) => {
                        this.dateSelected.emit(event.selection);
                    })
                );
            })
        );

        // Restore default values
        this.subscriptions.add(
            this.matDatepicker.closedStream.subscribe(() => {
                this.dateAdapter.getFirstDayOfWeek = () => this.nativeDateAdapter.getFirstDayOfWeek();
                this.dateAdapter.getDayOfWeekNames = () =>
                    this.isMoment ? this.nativeDateAdapter.getDayOfWeekNames("long").map((nr: string) => nr.slice(0, 2)) : this.nativeDateAdapter.getDayOfWeekNames("narrow");
            })
        );

        // Check date string
        this.subscriptions.add(
            this.matDatepicker.datepickerInput._model.selectionChanged.subscribe(() => {
                const input: string = this.matDatepicker.datepickerInput._elementRef.nativeElement.value;
                if (input) {
                    const timestamp: number = Date.parse(input);
                    if (isNaN(timestamp)) {
                        try {
                            const dateRegx: RegExp = /(\d{2})(\W{0,1})(\d{2})\2(\d{4})?(.+)/gi;
                            let date: Date = new Date(input.replace(dateRegx, "$3$2$1$2$4$5"));
                            this.matDatepicker.datepickerInput._model.selection = date;
                        } catch (error) {
                            console.error(error);
                        }
                    }
                }
            })
        );

        if (this.isMoment) {
            UteDateFormat.display.dateInput = UteDateFormat.display.dateInput = this.format || "LL";
            this.matDatepicker.datepickerInput._dateFormats = UteDateFormat;

            this.subscriptions.add(
                this.matDatepicker.openedStream.subscribe(() => {
                    UteDateFormat.display.dateInput = UteDateFormat.display.dateInput = this.format || "LL";
                    this.matDatepicker.datepickerInput._dateFormats = UteDateFormat;
                })
            );
        } else {
            if (this.format) {
                const dubAdapter = duplicateInstance(this.dateAdapter);
                dubAdapter.locale = "uk-UA";
                dubAdapter.format = (date: Date, displayFormat: Object) => {
                    if (this.format) {
                        if (displayFormat === "input") {
                            return formatDate(date, this.format, (this.dateAdapter as any).locale);
                        } else {
                            return this.nativeDateAdapter.format(date, displayFormat);
                        }
                    } else {
                        return this.nativeDateAdapter.format(date, displayFormat);
                    }
                };

                this.matDatepicker.datepickerInput._dateAdapter = dubAdapter;
                if (this.isRange) {
                    this.matDatepicker.datepickerInput._startInput._dateAdapter = dubAdapter;
                    this.matDatepicker.datepickerInput._startInput._dateFormats = UteDateFormat;
                    this.matDatepicker.datepickerInput._endInput._dateAdapter = dubAdapter;
                    this.matDatepicker.datepickerInput._endInput._dateFormats = UteDateFormat;
                } else {
                    this.matDatepicker.datepickerInput._dateFormats = UteDateFormat;
                }
            }
        }

        // Refresh current dateinput display
        if (this.matDatepicker.datepickerInput.value && this.format) {
            if (this.isRange) {
                this.matDatepicker.datepickerInput.value.start = this.matDatepicker.datepickerInput._model.selection.start;
                this.matDatepicker.datepickerInput.value.end = this.matDatepicker.datepickerInput._model.selection.end;
            } else {
                this.matDatepicker.datepickerInput.value = this.matDatepicker.datepickerInput._model.selection;
            }
        }
    }

    /**
     * Datect window resize
     */
    @HostListener("window:resize", ["$event"])
    onResize() {
        this.mobileAdopt();
    }

    /**
     * Get current device type and adopt matDatepicker interface
     */
    private mobileAdopt() {
        if (this.dynamicTouchUI) {
            const status: boolean = this.isMobile();
            if (this.matDatepicker.touchUi !== status) this.matDatepicker.touchUi = status;
        }
    }

    /**
     * Check if platfrom or screen is for mobile usage
     * @returns boolean status
     */
    public isMobile(): boolean {
        if (typeof navigator === "object" && typeof navigator.userAgent === "string") {
            if (
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                    navigator.userAgent
                )
            ) {
                return true;
            }
        }
        if (screen.orientation.type === ("portrait-primary" || "portrait") && window.screen.width <= 920) {
            return true;
        }
        return false;
    }
}
