import { NgModule } from "@angular/core";
import { Layout } from "./layout";
import { Route, RouterModule, Routes, UrlSegment, UrlSegmentGroup } from "@angular/router";
import { CanActivateLayout } from "./layout-guard";

const LayoutRoutes: Routes = [
    {
        path: "",
        canActivate: [CanActivateLayout],
        component: Layout,
        children: [
            {
                matcher: (url: UrlSegment[], group: UrlSegmentGroup, route: Route): any => {
                    // console.log(url);
                    // console.log(group.segments);
                    // console.log(route);
                    let type: number = 0;
                    if (url.length && url[0].path === "overview") {
                        type = 2;
                    } else if (!url.length) {
                        type = 1;
                    }
                    // const isPage: boolean =  && ;
                    // const isPage: boolean = url.length === 1 && url[0].path === "" && group.segments.length === 1;

                    return type !== 0 ? { consumed: url } : null;
                },
                // data: {redirect: type},
                loadComponent: () => import("../overview").then((m) => m.Overview),
            },
            // {
            //     path: "",
            //     pathMatch: "full",
            //     data: { page: true },
            //     loadComponent: () => import("../overview").then((m) => m.Overview),
            // },
            // {
            //     path: "overview",
            //     pathMatch: "full",
            //     loadComponent: () => import("../overview").then((m) => m.Overview),
            // },
            {
                path: "example",
                pathMatch: "full",
                loadComponent: () => import("../example").then((m) => m.Example),
            },
            // { path: "**", redirectTo: "/404" },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(LayoutRoutes), Layout],
    exports: [Layout],
})
export class LayoutModule {}
