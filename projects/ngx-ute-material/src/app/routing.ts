import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app";
import { DatepickerTimeComponent } from "./app/components/datepicker-time/datepicker-time";
import { DatepickerSettingsComponent } from "./app/components/datepicker-settings/datepicker-settings";

const routes: Routes = [
    { path: "datepicker-time", component: DatepickerSettingsComponent },
    { path: "datepicker-settings", component: DatepickerTimeComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            onSameUrlNavigation: "reload",
            scrollPositionRestoration: "enabled",
            enableTracing: false,
        }),
    ],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {}
