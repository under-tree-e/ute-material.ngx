import { Injectable } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

/**
 * Service responsible for setting the title that appears above the components and guide pages.
 */
@Injectable({ providedIn: "root" })
export class PageSEO {
    public _title = "";
    public _desk = "";
    public _keywords = "";

    private _originalTitle = "UTE Material for Angular Material";
    private _originalDesk = "UTE Material library extends Angular Material Design components for mobile and desktop Angular web applications.";
    private _originalKeywords = "angular, material design, material, angular material, web, ui, components, responsive, accessibility, typescript, css, mobile web, open source";

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

    get desk(): string {
        return this._desk;
    }

    set desk(desk: string) {
        this._desk = desk;
        if (desk === "") {
            desk = this._originalDesk;
        }
        this.metaService.updateTag({ name: "description", content: desk });
        this.metaService.updateTag({ name: "twitter:description", content: desk });
        this.metaService.updateTag({ name: "og:description", content: desk });
    }

    get keys(): string {
        return this._keywords;
    }

    set keys(keys: string) {
        this._keywords = keys;
        if (keys === "") {
            keys = this._originalKeywords;
        }
        this.metaService.updateTag({ name: "keywords", content: keys });
    }

    constructor(private bodyTitle: Title, private metaService: Meta) {}
}
