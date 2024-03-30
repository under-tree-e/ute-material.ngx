import { Component, EventEmitter, Output } from "@angular/core";
import { PageTitle } from "../page-title/page-title";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: "page-header",
    templateUrl: "page-header.html",
    styleUrls: ["page-header.scss"],
    standalone: true,
    imports: [MatButtonModule, MatIconModule],
})
export class PageHeader {
    constructor(public pageTitle: PageTitle) {}

    @Output() public toggleSidenav: EventEmitter<void> = new EventEmitter<void>();

    public getTitle() {
        return this.pageTitle.title;
    }
}
