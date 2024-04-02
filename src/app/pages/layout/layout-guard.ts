import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { PageManager } from "src/app/shared/page-manager/page-manager";

@Injectable({ providedIn: "root" })
export class CanActivateLayout {
    constructor(private router: Router, private pageManager: PageManager) {}

    canActivate(route: ActivatedRouteSnapshot) {
        if (route.params && route.params["id"]) {
            if (route.params["id"] === "default") {
                this.router.navigateByUrl(`/components/${this.pageManager.getDefault()}/overview`);
                return false;
            } else if (!route.firstChild!.url.length) {
                this.router.navigateByUrl(`/components/${route.params["id"]}/overview`);
                return false;
            }
        }

        return true;
    }
}
