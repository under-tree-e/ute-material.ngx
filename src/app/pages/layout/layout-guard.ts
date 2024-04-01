import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { PageManager } from "src/app/shared/page-manager/page-manager";

@Injectable({ providedIn: "root" })
export class CanActivateLayout {
    constructor(private router: Router, private pageManager: PageManager) {}

    canActivate(route: ActivatedRouteSnapshot) {
        if (route.params && route.params["id"]) {
            console.log(111);

            // console.log(route.parent!.url);
            // console.log(this.router.url);
            // console.log(route.parent!.url);
            // console.log(route.parent!.url.length);
            // console.log(this.router);

            // console.log(route.params);
            // console.log(route.data);
            // console.log(route.parent!.url);
            console.log(route.firstChild);
            try {
                console.log(route.firstChild!.url);
                console.log(route.firstChild!.url[0]);
                console.log(route.firstChild!.url[0].path);
            } catch {}
            console.log(route.params);

            if (route.params["id"] === "default") {
                // console.log(222);
                this.router.navigateByUrl(`/components/${this.pageManager.getDefault()}/overview`);
                return false;
            } else if (!route.firstChild!.url.length) {
                // console.log(333);
                // console.log();

                this.router.navigateByUrl(`/components/${route.params["id"]}/overview`);
                return false;
            }
        }

        return true;
    }
}
