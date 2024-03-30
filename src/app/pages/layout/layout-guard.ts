import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { PageManager } from "src/app/shared/page-manager/page-manager";

/**
 * Guard to determine if the sidenav can load, based on whether the section exists in documentation
 * items.
 */
@Injectable({ providedIn: "root" })
export class CanActivateLayout {
    constructor(private router: Router, private pageManager: PageManager) {}

    canActivate(route: ActivatedRouteSnapshot) {
        // Searches if the section defined in the base UrlSegment is a valid section from the
        // documentation items. If found, returns true to allow activation, otherwise blocks activation
        // and navigates to '/'.
        if (route.params && route.params["id"] === "default") {
            this.router.navigateByUrl(`/components/${this.pageManager.getDefault()}`);
            return false;
        }

        return true;
    }
}
