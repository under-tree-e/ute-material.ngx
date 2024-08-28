import { Component, ElementRef, Input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Clipboard } from "@angular/cdk/clipboard";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";

@Component({
    selector: "code-parser",
    template: `
        <button
            mat-icon-button
            type="button"
            (click)="copySource()"
            class="docs-example-source-copy docs-example-button"
            matTooltip="Copy example source"
            title="Copy example source"
            aria-label="Copy example source to clipboard"
        >
            <mat-icon>content_copy</mat-icon>
        </button>
    `,
    standalone: true,
    imports: [MatIconModule, MatButtonModule, MatTooltipModule],
})
export class CodeParser {
    @Input() text: string | undefined;

    constructor(private readonly snackbar: MatSnackBar, private readonly clipboard: Clipboard, private elementRef: ElementRef) {}

    public addCode(source: Element) {
        this.elementRef.nativeElement.appendChild(source);
    }

    public copySource() {
        if (this.clipboard.copy(this.text!)) {
            this.snackbar.open("Code copied", "", { duration: 2500 });
        } else {
            this.snackbar.open("Copy failed. Please try again!", "", { duration: 2500 });
        }
    }
}
