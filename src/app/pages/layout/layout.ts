import { Component, NgModule } from "@angular/core";
import { Footer } from "../../shared/footer/footer";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule, Routes } from "@angular/router";

@Component({
    selector: "app-layout",
    templateUrl: "./layout.html",
    styleUrls: ["layout.scss"],
    standalone: true,
    imports: [Footer, MatIconModule, MatButtonModule],
})
export class Layout {}

const LayoutRoutes: Routes = [
    {
        path: "",
        component: Layout,
        children: [
            //   {path: 'component/:id', redirectTo: ':id', pathMatch: 'full'},
            //   {path: 'category/:id', redirectTo: '/categories/:id', pathMatch: 'full'},
            //   {
            //     path: 'categories',
            //     children: [
            //       {path: '', component: ComponentCategoryList},
            //     ],
            //   },
            //   {
            //     path: ':id',
            //     component: ComponentViewer,
            //     children: [
            //       {path: '', redirectTo: 'overview', pathMatch: 'full'},
            //       {path: 'overview', component: ComponentOverview, pathMatch: 'full'},
            //       {path: 'api', component: ComponentApi, pathMatch: 'full'},
            //       {path: 'examples', component: ComponentExamples, pathMatch: 'full'}
            //     ],
            //   },
            { path: "**", redirectTo: "/404" },
        ],
    },
];

@NgModule({
    imports: [
        //   MatSidenavModule,
        //   MatListModule,
        RouterModule,
        //   CommonModule,
        //   ComponentCategoryListModule,
        //   ComponentViewerModule,
        //   DocViewerModule,
        //   FormsModule,
        //   HttpClientModule,
        //   CdkAccordionModule,
        //   MatIconModule,
        RouterModule.forChild(LayoutRoutes),
        Layout,
    ],
    exports: [Layout],
})
export class LayoutModule {}
