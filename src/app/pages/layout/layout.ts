import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { Footer } from "../../shared/footer/footer";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { PageHeader } from "src/app/shared/page-header/page-header";
import { SideBar } from "src/app/shared/sidebar/sidebar";
import { ActivatedRoute, Params, RouterModule } from "@angular/router";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { BreakpointObserver } from "@angular/cdk/layout";
import { Observable, map } from "rxjs";
import { _constants } from "src/app/_constants";
import { MatTabsModule } from "@angular/material/tabs";
import { PageItem, PageManager } from "src/app/shared/page-manager/page-manager";
import { PageTitle } from "src/app/shared/page-title/page-title";

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
    // public params: Observable<Params> | undefined;
    public pageItem: PageItem | undefined;

    @ViewChild(MatSidenav) sidenav!: MatSidenav;

    constructor(private route: ActivatedRoute, private breakpoints: BreakpointObserver, public pageManager: PageManager, private pageTitle: PageTitle) {
        this.isScreenSmall = breakpoints.observe(`(max-width: ${_constants["small-breakpoint-width"]}px)`).pipe(map((breakpoint) => breakpoint.matches));
        route.params.subscribe((p) => {
            this.pageItem = this.pageManager.getItemById(p["id"]);
            if (this.pageItem) {
                this.pageTitle.title = this.pageItem.name;
            }
        });

        route.url.subscribe(() => {
            console.log(route.snapshot.firstChild!.data);
        });
    }
}
