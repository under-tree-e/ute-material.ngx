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
import { NgClass, NgIf } from "@angular/common";

@Component({
    templateUrl: "./datepicker-time.html",
    styleUrl: "./datepicker-time.scss",
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatDatepickerModule,
        UteDatepickerTime,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        NgIf,
        NgClass,
    ],
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
    public currentDate: Date = new Date();
    public isAction: boolean = false;
    public isLoad: boolean = true;

    public dateChange(event: any) {
        this.currentDate = new Date(event.value);
    }

    public toggleActions() {
        this.reloadDatepicker();
        this.isAction = !this.isAction;
    }

    public reloadDatepicker() {
        this.isLoad = false;
        setTimeout(() => {
            this.isLoad = true;
        }, 250);
    }
}
