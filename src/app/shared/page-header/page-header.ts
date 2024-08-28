import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PageSEO } from "../page-seo/page-seo";

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
    constructor(public pageSeo: PageSEO) {}

    @Output() public toggleSidenav: EventEmitter<void> = new EventEmitter<void>();

    public getTitle() {
        return this.pageSeo.title;
    }
}
