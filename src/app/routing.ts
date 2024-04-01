import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
    {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./pages/home").then((m) => m.HomePage),
    },
    {
        path: "get-started",
        data: { id: "get-started", page: true },
        loadChildren: () => import("./pages/layout").then((m) => m.LayoutModule),
    },
    { path: "components", pathMatch: "full", redirectTo: "components/default" },
    {
        path: "components/:id",
        loadChildren: () => import("./pages/layout").then((m) => m.LayoutModule),
    },
    {
        path: "404",
        loadComponent: () => import("./pages/not-found").then((m) => m.NotFound),
    },
    { path: "**", redirectTo: "/404" },
];
