import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

/**
 * Service responsible for setting the title that appears above the components and guide pages.
 */
@Injectable({ providedIn: "root" })
export class PageTitle {
    _title = "";
    _originalTitle = "UTE Material for Angular Material";

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
        if (title !== "") {
            title = `${title} | UTE Material`;
        } else {
            title = this._originalTitle;
        }
        this.bodyTitle.setTitle(title);
    }

    constructor(private bodyTitle: Title) {}
}
