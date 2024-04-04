import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Clipboard } from "@angular/cdk/clipboard";

/**
 * Header link is a component that handles normalizing
 * the anchor jump tags with the current route url.
 *
 * For example:
 *
 *    <a href="#foo">Foo</a>
 *
 * would result in the wrong url, this component
 * combines the current route with that jump link:
 *
 *    <a href="/guide#foo">Foo</a>
 */
@Component({
    selector: "header-link",
    template: `
        <a aria-label="Link to this heading" class="docs-markdown-a" [attr.aria-describedby]="example" [href]="getFragmentUrl()" (click)="copyLink()">
            <mat-icon>link</mat-icon>
        </a>
    `,
    standalone: true,
    imports: [MatIconModule],
})
export class HeaderLink {
    /**
     * Id of the anchor element. Note that is uses "example" because we instantiate the
     * header link components through the ComponentPortal.
     */
    @Input() example: string | undefined;

    /** Base URL that is used to build an absolute fragment URL. */
    private _baseUrl: string;

    constructor(router: Router, private readonly snackbar: MatSnackBar, private readonly clipboard: Clipboard) {
        this._baseUrl = router.url.split("#")[0];
    }

    public getFragmentUrl(): string {
        return `${this._baseUrl}#${this.example}`;
    }

    public copyLink() {
        // Reconstruct the URL using `origin + pathname` so we drop any pre-existing hash.
        const fullUrl = location.origin + location.pathname + "#" + this.example;

        if (this.clipboard.copy(fullUrl)) {
            this.snackbar.open("Link copied", "", { duration: 2500 });
        } else {
            this.snackbar.open("Link copy failed. Please try again!", "", { duration: 2500 });
        }
    }
}
