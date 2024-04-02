import { Component } from "@angular/core";
import { provideNativeDateAdapter } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { UteDatepickerTime } from "projects/ngx-ute-material/datepicker-time/src/datepicker-time";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";

@Component({
    templateUrl: "./datepicker-time.html",
    styleUrl: "./datepicker-time.scss",
    standalone: true,
    imports: [MatFormFieldModule, MatDatepickerModule, UteDatepickerTime, FormsModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatButtonModule, MatCheckboxModule, MatCardModule],
    providers: [provideNativeDateAdapter()],
})
export class DatepickerTimeComponent {
    public desktopStyle: "button" | "wheel" = "button";
    public mobileStyle: "button" | "wheel" = "wheel";
    public infiniteScroll: boolean = true;
    public visibleItemsCount: 1 | 3 | 5 = 5;
    public hourFormat: 24 | 12 = 24;
    public hourStep: 1 | 2 | 3 | 4 = 1;
    public minuteStep: 1 | 5 | 10 | 15 | 20 | 30 = 1;
    public secondStep: 1 | 5 | 10 | 15 | 20 | 30 = 1;
    public decoratorStyle: "outline" | "underline" | "none" = "outline";
    public showSeconds: boolean = true;
    public showToday: boolean = true;
    public showIcon: boolean = false;
    public showDiviner: boolean = true;
    public customButtons: { today: ""; cancel: ""; apply: "" } | null = null;
    public dynamicTouchUI: boolean = false;

    ////////////////////
    public currentDate: Date = new Date();
    public initDate: Date = new Date();
    public startDate: Date = new Date();
    public endDate: Date = new Date();
    public minDate: Date = new Date(new Date().setDate(new Date().getDate() - 1));
    public maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 2));

    constructor() {}

    public dateChange(event: any) {
        // console.log(event);
        this.currentDate = event;
    }

    public filter = (d: Date | null): boolean => {
        const day = (d || new Date()).getDay();
        // Prevent Saturday and Sunday from being selected.
        return day !== 0 && day !== 6;
    };
    // //////////////////////////////////////
    public addActions() {}
}
