import { formatDate } from "@angular/common";
import { Directive, Inject, Input } from "@angular/core";
import { DateAdapter, NativeDateAdapter } from "@angular/material/core";
import { MatDatepicker } from "@angular/material/datepicker";

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
export class UteDatepickerSettings {
    @Input() public format: string = "";
    @Input() public weekStart: 0 | 1 = 0;
    @Input() public overlayClass: string = "";
    @Input() public backdropClass: string = "";
    @Input() public contentClass: string = "";
    @Input() public weekdaysSymbols: 1 | 2 | 3 | null = null;

    private nativeDateAdapter: NativeDateAdapter = new NativeDateAdapter();
    private isMoment: boolean = false;
    private copyCurrentAdapter: any;

    constructor(@Inject(MatDatepicker) private readonly matDatepicker: any, @Inject(DateAdapter) public dateAdapter: DateAdapter<any>) {
        this.isMoment = (this.dateAdapter as any).useUtcForDisplay === undefined ? true : false;
    }

    ngAfterViewInit() {
        // Generate dublicate for instance
        function duplicateInstance(instance: any): any {
            const instanceCopy = Object.create(Object.getPrototypeOf(instance));
            Object.assign(instanceCopy, instance);
            return instanceCopy;
        }

        this.copyCurrentAdapter = duplicateInstance(this.dateAdapter);

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
        });

        // Restore default values
        this.matDatepicker.closedStream.subscribe(() => {
            this.dateAdapter.getFirstDayOfWeek = () => this.nativeDateAdapter.getFirstDayOfWeek();
            this.dateAdapter.getDayOfWeekNames = () =>
                this.isMoment ? this.nativeDateAdapter.getDayOfWeekNames("long").map((nr: string) => nr.slice(0, 2)) : this.nativeDateAdapter.getDayOfWeekNames("narrow");
        });

        if (this.isMoment) {
            UteDateFormat.display.dateInput = UteDateFormat.display.dateInput = this.format || "LL";
            this.matDatepicker.datepickerInput._dateFormats = UteDateFormat;

            this.matDatepicker.openedStream.subscribe(() => {
                UteDateFormat.display.dateInput = UteDateFormat.display.dateInput = this.format || "LL";
                this.matDatepicker.datepickerInput._dateFormats = UteDateFormat;
            });
        } else {
            if (this.format) {
                const dubAdapter = duplicateInstance(this.dateAdapter);
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
                this.matDatepicker.datepickerInput._dateFormats = UteDateFormat;
            }
        }

        // Refresh current dateinput display
        if (this.matDatepicker.datepickerInput.value && this.format) {
            this.matDatepicker.datepickerInput.value = this.matDatepicker.datepickerInput._model.selection;
        }
    }
}
