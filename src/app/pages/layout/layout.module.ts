import { NgModule } from "@angular/core";
import { Layout } from "./layout";
import { RouterModule, Routes, UrlSegment } from "@angular/router";
import { CanActivateLayout } from "./layout-guard";

const LayoutRoutes: Routes = [
    {
        path: "",
        canActivate: [CanActivateLayout],
        component: Layout,
        children: [
            {
                matcher: (url: UrlSegment[]): any => {
                    let type: number = 0;
                    if (url.length && url[0].path === "overview") {
                        type = 2;
                    } else if (!url.length) {
                        type = 1;
                    }
                    return type !== 0 ? { consumed: url } : null;
                },
                loadComponent: () => import("../overview").then((m) => m.Overview),
            },
            {
                path: "example",
                pathMatch: "full",
                loadComponent: () => import("../example").then((m) => m.Example),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(LayoutRoutes), Layout],
    exports: [Layout],
})
export class LayoutModule {}
