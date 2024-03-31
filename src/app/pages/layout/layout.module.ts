import { NgModule } from "@angular/core";
import { Layout } from "./layout";
import { RouterModule, Routes } from "@angular/router";
import { CanActivateLayout } from "./layout-guard";

const LayoutRoutes: Routes = [
    {
        path: "",
        canActivate: [CanActivateLayout],
        component: Layout,
        children: [
            { path: "", pathMatch: "full", redirectTo: "overview" },
            {
                path: "overview",
                pathMatch: "full",
                // data: Layout.
                loadComponent: () => import("../overview").then((m) => m.Overview),
            },
            {
                path: "example",
                pathMatch: "full",
                loadComponent: () => import("../example").then((m) => m.Example),
            },
            { path: "**", redirectTo: "/404" },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(LayoutRoutes), Layout],
    exports: [Layout],
})
export class LayoutModule {}
