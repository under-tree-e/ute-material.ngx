import { ApplicationRef, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, Injector, OnInit, SecurityContext, ViewChild, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { DocFetcher } from "src/app/shared/doc-fetcher/doc-fetcher";
import { PageItem } from "src/app/shared/page-manager/page-manager";
import { AsyncPipe, NgIf } from "@angular/common";
import { TableOfContents } from "src/app/shared/table-of-contents/table-of-contents";
import { Observable, map } from "rxjs";
import { BreakpointObserver } from "@angular/cdk/layout";
import { HeaderLink } from "src/app/shared/header-link/header-link";
import { ComponentPortal, DomPortalOutlet } from "@angular/cdk/portal";
import { CodeParser } from "src/app/shared/code-parser/code-parser";

@Component({
    selector: "app-overview",
    templateUrl: "./overview.html",
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [NgIf, TableOfContents, AsyncPipe],
})
export class Overview implements OnInit {
    public pageItem: PageItem | undefined;
    public showToc: Observable<boolean>;
    public docContent: string = "Loading document...";

    private docItem: HTMLElement | undefined;

    @ViewChild("toc") tableOfContents!: TableOfContents;

    constructor(
        private appRef: ApplicationRef,
        public elementRef: ElementRef,
        private domSanitizer: DomSanitizer,
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef,
        private injector: Injector,
        private docFetcher: DocFetcher,
        private route: ActivatedRoute,
        private breakpointObserver: BreakpointObserver,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        this.showToc = breakpointObserver.observe("(max-width: 1200px)").pipe(
            map((result) => {
                this.changeDetectorRef.detectChanges();
                return !result.matches;
            })
        );
    }

    ngOnInit(): void {
        this.route.parent?.params.subscribe((p: any) => {
            if (p.id) {
                this.pageItem = p;
                this.loadDoc();
            }
        });
        this.route.parent?.data.subscribe((d: any) => {
            if (d.id) {
                this.pageItem = d;
                this.loadDoc();
            }
        });
    }

    private loadDoc() {
        this.docContent = "Loading document...";
        if (this.pageItem) {
            const url: string = this.pageItem.page ? `assets/docs/${this.pageItem.id}.html` : `assets/docs/components/${this.pageItem.id}.html`;
            this.docFetcher.fetchDocument(url).subscribe({
                next: (d) => this.updateDocument(d),
                error: (e) => (this.docContent = `Failed to load document: ${this.pageItem!.id}. Error: ${e.statusText}`),
            });
        } else {
            this.docContent = `Incorrect Url`;
        }
    }

    private updateDocument(rawDocument: string) {
        rawDocument = rawDocument.replace(/href="#([^"]*)"/g, (_m: string, fragmentUrl: string) => {
            const absoluteUrl = `${location.pathname}#${fragmentUrl}`;
            return `href="${this.domSanitizer.sanitize(SecurityContext.URL, absoluteUrl)}"`;
        });

        this.docContent = "";
        this.docItem = [...this.elementRef.nativeElement.children].find((cd: any) => cd.classList.contains("docs-component-overview")) as HTMLElement;
        this.docItem.innerHTML = rawDocument;

        setTimeout(() => {
            this.updateTableOfContents();
            this.loadLinks();
            this.loadCodes();
        }, 0);
    }

    private updateTableOfContents() {
        if (this.tableOfContents) {
            this.tableOfContents.addHeaders("Overview Content", this.elementRef.nativeElement, 0);
            this.tableOfContents.updateScrollPosition();
        }
    }

    private loadLinks() {
        const exampleElements = this.elementRef.nativeElement.querySelectorAll(`span[header-link]`);

        [...exampleElements].forEach((element: Element) => {
            const portalHost = new DomPortalOutlet(element, this.componentFactoryResolver, this.appRef, this.injector);
            const examplePortal = new ComponentPortal(HeaderLink, this.viewContainerRef);
            const exampleViewer = portalHost.attach(examplePortal);

            const exampleViewerComponent = exampleViewer.instance as HeaderLink;
            exampleViewerComponent.example = element.getAttribute("header-link")!;
        });
    }

    private loadCodes() {
        const exampleElements = this.elementRef.nativeElement.querySelectorAll(`pre code`);

        [...exampleElements].forEach((element: Element) => {
            const exampleViewerDiv = document.createElement("div");
            exampleViewerDiv.classList.add("docs-example-viewer-source");
            element.parentElement!.parentNode!.replaceChild(exampleViewerDiv, element.parentElement!);

            const portalHost = new DomPortalOutlet(exampleViewerDiv, this.componentFactoryResolver, this.appRef, this.injector);
            const examplePortal = new ComponentPortal(CodeParser, this.viewContainerRef);
            const exampleViewer = portalHost.attach(examplePortal);

            const exampleViewerComponent = exampleViewer.instance as CodeParser;
            exampleViewerComponent.text = element.textContent!;
            exampleViewerComponent.addCode(element.parentElement!);
        });
    }
}
