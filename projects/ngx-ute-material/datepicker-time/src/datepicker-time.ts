import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { TemplatePortal, PortalModule } from "@angular/cdk/portal";
import { CommonModule } from "@angular/common";
import { TimeWheel } from "./wheel-container/wheel";
import { MatButtonModule } from "@angular/material/button";
import { DatepickerTimeLocale } from "./datepicker-time-locale";
import { MatIconModule } from "@angular/material/icon";
import { Subscription } from "rxjs";
import { TimeButton } from "./button-container/button";

/**
 * List of field names
 */
enum TimeType {
    hours = "hours",
    minutes = "minutes",
    seconds = "seconds",
    period = "period",
}

/**
 * List of interface types
 */
enum DisplayStyle {
    wheel = "wheel",
    button = "button",
}

/**
 * List of field values
 */
interface TimeIndex {
    hours: number;
    minutes: number;
    seconds: number;
    period: number;
}

/**
 * Meridian period indexes
 */
enum PeriodIndex {
    AM = 0,
    PM = 1,
}

@Component({
    selector: "ute-datepicker-time",
    standalone: true,
    imports: [CommonModule, TimeWheel, TimeButton, PortalModule, MatButtonModule, MatIconModule],
    styleUrls: ["datepicker-time.scss"],
    templateUrl: "datepicker-time.html",
    host: {
        class: "ute-datepicker-time",
    },
    exportAs: "uteDatepickerTime",
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UteDatepickerTime implements OnInit {
    @Input("matDatepicker") public matDatepicker: any;
    @Input() public desktopStyle: DisplayStyle = DisplayStyle.button;
    @Input() public mobileStyle: DisplayStyle = DisplayStyle.wheel;
    @Input() public infiniteScroll: boolean = true;
    @Input() public visibleItemsCount: 1 | 3 | 5 = 5;
    @Input() public hourFormat: 24 | 12 = 24;
    @Input() public hourStep: 1 | 2 | 3 | 4 = 1;
    @Input() public minuteStep: 1 | 5 | 10 | 15 | 20 | 30 = 1;
    @Input() public secondStep: 1 | 5 | 10 | 15 | 20 | 30 = 1;
    @Input() public decoratorStyle: "outline" | "underline" | "none" = "outline";
    @Input() public showSeconds: boolean = true;
    @Input() public showToday: boolean = true;
    @Input() public showIcon: boolean = false;
    @Input() public showDiviner: boolean = true;
    @Input() public customButtons: { today: ""; cancel: ""; apply: "" } | null = null;
    @Input() public dynamicTouchUI: boolean = false;
    @ViewChild(TemplateRef) private _template: TemplateRef<unknown> = {} as TemplateRef<unknown>;

    public timeStyle: DisplayStyle = this.desktopStyle;
    public _matDatepickerActions: TemplatePortal | null = null;
    public isActions: boolean = false;
    public timeType = TimeType;
    public selectedIndex: TimeIndex = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        period: PeriodIndex.AM,
    };
    public hourValues: string[] = [];
    public minuteValues: string[] = [];
    public secondValues: string[] = [];
    public dayPeriods: string[] = ["AM", "PM"];
    public hourBlocks: string[] = [];
    public minuteBlocks: string[] = [];
    public secondBlocks: string[] = [];
    public locale: any;
    public view: "multi-year" | "year" | "month" = "month";

    private _portal: TemplatePortal = null!;
    private locales: any = DatepickerTimeLocale;
    private isOpen: boolean = false;

    constructor(private _viewContainerRef: ViewContainerRef, private changeDetectorRef: ChangeDetectorRef) {}

    /**
     * Generate time value arrays
     */
    ngOnInit() {
        this.mobileAdopt();
        this.setLocale();

        const isPeriod: boolean = this.hourFormat === 12 ? true : false;
        for (let i = isPeriod ? 1 : 0; i <= this.hourFormat - (isPeriod ? 0 : 1); i++) {
            this.hourValues.push(i < 10 && !isPeriod ? `0${i}` : `${i}`);
        }
        if (isPeriod) {
            this.hourValues.unshift(this.hourValues.pop()!);
        }
        this.hourValues = this.hourValues.filter((value) => Number(value) % this.hourStep === 0);

        for (let i = 0; i < 60; i++) {
            this.minuteValues.push(i < 10 ? `0${i}` : `${i}`);
        }
        if (this.showSeconds) {
            this.secondValues = [...this.minuteValues];
            this.secondValues = this.secondValues.filter((value) => Number(value) % this.secondStep === 0);
        }
        this.minuteValues = this.minuteValues.filter((value) => Number(value) % this.minuteStep === 0);
    }

    /**
     * Generate default data and add timepicker as actions to matDatepicker
     */
    ngAfterViewInit() {
        this.view = this.matDatepicker.startView;

        // Create subscriber to detect when locale will be updated
        this.matDatepicker._dateAdapter.localeChanges.subscribe(() => {
            this.setLocale();
        });

        let viewSub: Subscription = null!;
        let changeSub: Subscription = null!;

        // Create subscriber to detect when matDatepicker will be opened
        this.matDatepicker.openedStream.subscribe(() => {
            this.initPicker(this.matDatepicker.datepickerInput._model.selection);

            // Create subscriber to detect when matCalendar value will be changed
            changeSub = this.matDatepicker._componentRef.changeDetectorRef.context._model.selectionChanged.subscribe(() => {
                this.setDate();
            });

            // Create subscriber to detect when matDatepicker view will be changed
            viewSub = this.matDatepicker.viewChanged.subscribe((view: any) => {
                this.view = view;
                this.changeDetectorRef.detectChanges();
            });

            // Create subscriber to detect when matDatepickerInput will be changed
            this.matDatepicker.datepickerInput.dateInput.subscribe(() => {
                let date: Date = this.matDatepicker.datepickerInput.value;
                try {
                    if (date.getTime() < this.matDatepicker.datepickerInput.min.getTime()) {
                        this.matDatepicker.datepickerInput.value = new Date(this.matDatepicker.datepickerInput.min);
                        this.onToday(new Date(this.matDatepicker.datepickerInput.min));
                    } else if (date.getTime() > this.matDatepicker.datepickerInput.max.getTime()) {
                        this.matDatepicker.datepickerInput.value = new Date(this.matDatepicker.datepickerInput.max);
                        this.onToday(new Date(this.matDatepicker.datepickerInput.max));
                    }
                } catch {}
            });

            setTimeout(() => {
                this.isOpen = true;
            }, 250);
        });

        // Create subscriber to detect when matDatepicker will be closed
        this.matDatepicker.closedStream.subscribe(() => {
            this.view = this.matDatepicker.startView;

            // Remove subscribers
            changeSub.unsubscribe();
            viewSub.unsubscribe();
        });

        let dateInput: any = { year: "numeric", month: "numeric", day: "numeric", hour12: this.hourFormat === 12 ? true : false, hour: "2-digit", minute: "2-digit" };
        if (this.showSeconds) dateInput.second = "2-digit";

        this.matDatepicker.datepickerInput._dateFormats.parse.dateInput = dateInput;
        this.matDatepicker.datepickerInput._dateFormats.display.dateInput = dateInput;

        if (this.matDatepicker.datepickerInput.value) {
            this.matDatepicker.datepickerInput.value = this.matDatepicker.datepickerInput._model.selection;

            this.initPicker(this.matDatepicker.datepickerInput.value);
        }

        // Add or replace actions with UteDatepickerTime
        if (this.matDatepicker._actionsPortal) {
            this.isActions = true;
            this._matDatepickerActions = this.matDatepicker._actionsPortal;
            this.matDatepicker.removeActions(this.matDatepicker._actionsPortal);
        }

        // Register actions
        this._portal = new TemplatePortal(this._template, this._viewContainerRef);
        this.matDatepicker.registerActions(this._portal);
    }

    /**
     * Remove timepicker as actions from matDatepicker
     */
    ngOnDestroy() {
        this.matDatepicker.removeActions(this._portal);

        if (this._portal && this._portal.isAttached) {
            this._portal?.detach();
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
        if (this.isMobile()) {
            this.timeStyle = this.mobileStyle;
        }

        if (this.dynamicTouchUI) {
            if (this.isMobile()) {
                if (!this.matDatepicker.touchUi) this.matDatepicker.touchUi = true;
            } else {
                if (this.matDatepicker.touchUi) this.matDatepicker.touchUi = false;
            }
        }
    }

    /**
     * Update current time indexes
     * @param value - New index value
     * @param type - Name of time part that will be updated
     */
    public onChange(value: any, type: TimeType) {
        if (this.isOpen) {
            this.selectedIndex[type] = value;
            this.setDate();
        }
    }

    /**
     * Set new date to UteDatepickerTime and check it for valid values
     * @param newDate - Rewrite date for custom value
     */
    private setDate(newDate?: Date) {
        try {
            let date: Date = this.matDatepicker._componentRef.changeDetectorRef.context._model.selection;

            if (newDate) {
                this.matDatepicker._componentRef.changeDetectorRef.context._model.selection = newDate;
            } else {
                let hours: number = parseInt(this.hourValues[this.selectedIndex[TimeType.hours]]);
                hours = this.hourFormat === 12 && this.selectedIndex[TimeType.period] === 1 ? (hours === 12 ? 0 : hours) + 12 : hours;
                let minutes: number = parseInt(this.minuteValues[this.selectedIndex[TimeType.minutes]]);
                let seconds: number = parseInt(this.secondValues[this.selectedIndex[TimeType.seconds]]) || 0;

                date.setHours(hours, minutes, seconds);
                this.matDatepicker._componentRef.changeDetectorRef.context._model.selection = date;
            }

            this.blockCheck(TimeType.hours, this.matDatepicker._componentRef.changeDetectorRef.context._model.selection);
        } catch {}
    }

    /**
     * Check UteDatepickerTime for valid values
     * @param type - Name of time part that will be checked
     * @param date - Current date
     */
    private blockCheck(type: TimeType, date: Date) {
        let min: Date = new Date(this.matDatepicker.datepickerInput.min);
        let max: Date = new Date(this.matDatepicker.datepickerInput.max);

        switch (type) {
            case TimeType.hours:
                this.hourBlocks = this.hourValues.filter((hv: string) => {
                    let ch: number = parseInt(hv);
                    if (this.hourFormat === 12 && this.selectedIndex[TimeType.period] === 1) {
                        if (ch != 12) ch += 12;
                    }
                    return (date.getDate() === min.getDate() && ch < min.getHours()) || (date.getDate() === max.getDate() && ch > max.getHours());
                });
                this.blockCheck(TimeType.minutes, date);
                break;
            case TimeType.minutes:
                this.minuteBlocks = this.minuteValues.filter(
                    (mv: string) =>
                        (date.getDate() === min.getDate() && date.getHours() === min.getHours() && parseInt(mv) < min.getMinutes()) ||
                        (date.getDate() === min.getDate() && date.getHours() < min.getHours()) ||
                        (date.getDate() === max.getDate() && date.getHours() === max.getHours() && parseInt(mv) > max.getMinutes()) ||
                        (date.getDate() === max.getDate() && date.getHours() > max.getHours())
                );
                if (this.showSeconds) this.blockCheck(TimeType.seconds, date);
                break;
            case TimeType.seconds:
                this.secondBlocks = this.secondValues.filter(
                    (sv: string) =>
                        (date.getDate() === min.getDate() && date.getHours() < min.getHours()) ||
                        (date.getDate() === min.getDate() && date.getHours() === min.getHours() && date.getMinutes() < min.getMinutes()) ||
                        (date.getDate() === min.getDate() && date.getHours() === min.getHours() && date.getMinutes() === min.getMinutes() && parseInt(sv) < min.getSeconds()) ||
                        (date.getDate() === max.getDate() && date.getHours() > max.getHours()) ||
                        (date.getDate() === max.getDate() && date.getHours() === max.getHours() && date.getMinutes() > max.getMinutes()) ||
                        (date.getDate() === max.getDate() && date.getHours() === max.getHours() && date.getMinutes() === max.getMinutes() && parseInt(sv) > max.getSeconds())
                );
                break;
        }
    }

    /**
     * Update UteDatepickerTime locale (buttons locale)
     */
    private setLocale() {
        if (this.customButtons) {
            this.locale = this.customButtons;
        } else {
            try {
                this.locale = this.locales[this.matDatepicker._dateAdapter.locale].split("-")[0];
            } catch {
                this.locale = this.locales["en"];
            }
        }
    }

    /**
     * Get current date & time or Set custom date
     * @param custom - Custom date
     */
    public onToday(custom?: Date) {
        let newDate = custom ? custom : new Date();

        this.initPicker(newDate);

        if (!custom) this.setDate(newDate);
    }

    /**
     * Default MatCalendar Apply function
     */
    public onApply() {
        this.matDatepicker._applyPendingSelection();
        // Call close event
        this.onClose();
    }

    /**
     * Default MatCalendar Close function
     */
    public onClose() {
        this.matDatepicker.close();
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

    /**
     * Change values on time pickers
     * @param date - income date
     */
    private initPicker(date: Date) {
        if (!date) date = new Date();

        let hours: number = date.getHours();
        hours = this.hourFormat === 12 ? ((hours + 11) % 12) + 1 : hours;
        let minutes: number = date.getMinutes();
        let seconds: number = date.getSeconds();
        this.selectedIndex = {
            hours: this.hourStep > 1 ? this.hourValues.map((vl: string) => parseInt(vl)).indexOf(Math.floor(hours / this.hourStep) * this.hourStep) : hours,
            minutes: this.minuteStep > 1 ? this.minuteValues.map((vl: string) => parseInt(vl)).indexOf(Math.floor(minutes / this.minuteStep) * this.minuteStep) : minutes,
            seconds: this.secondStep > 1 ? this.secondValues.map((vl: string) => parseInt(vl)).indexOf(Math.floor(seconds / this.secondStep) * this.secondStep) : seconds,
            period: date.getHours() >= 12 ? PeriodIndex.PM : PeriodIndex.AM,
        };
    }
}
