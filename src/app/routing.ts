import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
    {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./pages/home").then((m) => m.HomePage),
    },
    { path: "components", redirectTo: "/components/datepicker-time" },
    { path: "datepicker-time", redirectTo: "/components/datepicker-time" },
    { path: "datepicker-settings", redirectTo: "/components/datepicker-settings" },
    {
        path: "components/datepicker-time",
        loadComponent: () => import("./components/datepicker-time").then((m) => m.DatepickerTimeComponent),
    },
    {
        path: "datepicker-settings",
        loadComponent: () => import("./components/datepicker-settings").then((m) => m.DatepickerSettingsComponent),
    },
    {
        path: "404",
        loadComponent: () => import("./pages/not-found").then((m) => m.NotFound),
    },
    { path: "**", redirectTo: "/404" },
];
