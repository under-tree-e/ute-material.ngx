import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { PageManager } from "../page-manager/page-manager";

@Component({
    selector: "app-sidebar",
    templateUrl: "sidebar.html",
    animations: [
        trigger("bodyExpansion", [
            state("collapsed", style({ height: "0px", display: "none" })),
            state("expanded", style({ height: "*", display: "block" })),
            transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4,0.0,0.2,1)")),
        ]),
    ],
    standalone: true,
    imports: [NgIf, MatListModule, NgFor, RouterLinkActive, RouterLink, AsyncPipe],
})
export class SideBar {
    constructor(public pageManager: PageManager) {}
}
