import { Injectable, Type } from "@angular/core";
import { DatepickerTimeComponent } from "./datepicker-time/datepicker-time";
import { DatepickerSettingsComponent } from "./datepicker-settings/datepicker-settings";

@Injectable({ providedIn: "root" })
export class ComponentsService {
    getComps() {
        return [
            {
                id: "datepicker-time",
                component: DatepickerTimeComponent,
            },
            {
                id: "datepicker-settings",
                component: DatepickerSettingsComponent,
            },
        ] as { component: Type<any>; id: string }[];
    }
}
