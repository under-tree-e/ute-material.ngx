import { Component, Type, inject } from "@angular/core";
import { CdkPortalOutlet, TemplatePortal } from "@angular/cdk/portal";
import { ActivatedRoute } from "@angular/router";
import { PageItem } from "src/app/shared/page-manager/page-manager";
import { AsyncPipe, NgComponentOutlet } from "@angular/common";
import { ComponentsService } from "src/app/components/components";

@Component({
    selector: "app-example",
    templateUrl: "./example.html",
    standalone: true,
    imports: [NgComponentOutlet, AsyncPipe, CdkPortalOutlet],
})
export class Example {
    public componentPortal: TemplatePortal | null = null;
    public pageItem: PageItem | undefined;
    public compItem: Type<any> | null = null;

    private compService: any[] = inject(ComponentsService).getComps();

    constructor(private route: ActivatedRoute) {
        this.route.parent?.params.subscribe((p: any) => {
            if (p.id) {
                this.pageItem = p;
            }
        });
    }

    get getComp() {
        return this.pageItem && this.pageItem.id ? this.compService.find((cm) => cm.id === this.pageItem!.id) : null;
    }
}
