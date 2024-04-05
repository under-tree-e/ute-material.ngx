import { Component } from "@angular/core";
import { provideNativeDateAdapter } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { UteDatepickerSettings } from "projects/ngx-ute-material/datepicker-settings/src/datepicker-settings";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { NgClass, NgIf } from "@angular/common";

@Component({
    templateUrl: "./datepicker-settings.html",
    styleUrl: "./datepicker-settings.scss",
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatDatepickerModule,
        UteDatepickerSettings,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        NgIf,
        NgClass,
        MatInputModule,
    ],
    providers: [provideNativeDateAdapter()],
})
export class DatepickerSettingsComponent {
    public format: string = "";
    public weekStart: 0 | 1 = 0;
    public overlayClass: string = "";
    public backdropClass: string = "";
    public contentClass: string = "";
    public weekdaysSymbols: 1 | 2 | 3 | null = null;
    public currentDate: Date = new Date();
    public rangeDate: { start: Date; end: Date } = { start: new Date(), end: new Date() };
    public isAction: boolean = false;
    public isLoad: boolean = true;
    public isRange: boolean = false;

    public dateChange(event: any) {
        if (this.isRange) {
            let start: Date = event.dateRangeStart.value;
            let end: Date = event.dateRangeEnd.value;
            if (end) {
                this.rangeDate = { start: new Date(start), end: new Date(end) };
            }
        } else {
            this.currentDate = new Date(event.value);
        }
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
