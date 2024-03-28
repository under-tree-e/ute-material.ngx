import { Component, OnDestroy, ViewEncapsulation } from "@angular/core";
import { ActivationEnd, Router, RouterModule } from "@angular/router";
import { NavBar } from "./shared/navbar";
import { Subscription } from "rxjs";
import { AnalyticsService } from "./shared/analytics/analytics";

@Component({
    selector: "app-root",
    templateUrl: "./app.html",
    styleUrls: ["app.scss"],
    standalone: true,
    imports: [RouterModule, NavBar],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnDestroy {
    private subscriptions = new Subscription();

    constructor(private analytics: AnalyticsService, private router: Router) {
        this.subscriptions.add(
            this.router.events.subscribe((data) => {
                if (data instanceof ActivationEnd) {
                    // analytics.locationChanged(toUrl);
                }
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
