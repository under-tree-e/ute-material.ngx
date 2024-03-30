import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { Footer } from "../../shared/footer/footer";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { PageHeader } from "src/app/shared/page-header/page-header";
import { SideBar } from "src/app/shared/sidebar/sidebar";
import { RouterModule } from "@angular/router";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { BreakpointObserver } from "@angular/cdk/layout";
import { Observable, map } from "rxjs";
import { _constants } from "src/app/_constants";
import { MatTabsModule } from "@angular/material/tabs";

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

    @ViewChild(MatSidenav) sidenav!: MatSidenav;

    constructor(private breakpoints: BreakpointObserver) {
        this.isScreenSmall = breakpoints.observe(`(max-width: ${_constants["small-breakpoint-width"]}px)`).pipe(map((breakpoint) => breakpoint.matches));
    }
}
