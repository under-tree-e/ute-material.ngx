import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { Footer } from "../../shared/footer/footer";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { PageHeader } from "src/app/shared/page-header/page-header";
import { SideBar } from "src/app/shared/sidebar/sidebar";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { BreakpointObserver } from "@angular/cdk/layout";
import { Observable, map } from "rxjs";
import { _constants } from "src/app/_constants";
import { MatTabsModule } from "@angular/material/tabs";
import { PageItem, PageManager } from "src/app/shared/page-manager/page-manager";
import { PageSEO } from "src/app/shared/page-seo/page-seo";

@Component({
    selector: "app-layout",
    templateUrl: "./layout.html",
    styleUrls: ["./layout.scss"],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [NgIf, Footer, MatIconModule, MatButtonModule, PageHeader, SideBar, RouterModule, MatSidenavModule, AsyncPipe, MatTabsModule, NgForOf],
})
export class Layout {
    public isScreenSmall: Observable<boolean>;
    public sections: Set<string> = new Set(["overview", "example"]);
    public pageItem: PageItem | undefined;
    public soloSection: boolean = false;

    @ViewChild(MatSidenav) sidenav!: MatSidenav;

    constructor(private route: ActivatedRoute, private breakpoints: BreakpointObserver, public pageManager: PageManager, private pageSeo: PageSEO) {
        this.isScreenSmall = breakpoints.observe(`(max-width: ${_constants["small-breakpoint-width"]}px)`).pipe(map((breakpoint) => breakpoint.matches));
        this.soloSection = false;

        if (route.snapshot.data && route.snapshot.data["page"]) {
            this.soloSection = true;
            this.updatePage(route.snapshot.data);
        } else {
            route.params.subscribe((p) => {
                this.updatePage(p);
            });
        }
    }

    private updatePage(value: any) {
        this.pageItem = this.pageManager.getItemById(value["id"]);
        if (this.pageItem) {
            this.pageSeo.title = this.pageItem.name;
            this.pageSeo.desk = this.pageItem.desk;
            this.pageSeo.keys = this.pageItem.keys;
        }
    }
}
