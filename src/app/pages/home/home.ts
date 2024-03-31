import { ANIMATION_MODULE_TYPE, Component, HostBinding, Inject, OnInit, Optional } from "@angular/core";
import { Footer } from "../../shared/footer/footer";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { PageTitle } from "src/app/shared/page-title/page-title";

@Component({
    selector: "app-home",
    templateUrl: "./home.html",
    styleUrls: ["home.scss"],
    standalone: true,
    imports: [Footer, MatIconModule, MatButtonModule, RouterModule],
})
export class HomePage implements OnInit {
    @HostBinding("class.main-content") readonly mainContentClass = true;
    @HostBinding("class.animations-disabled") readonly animationsDisabled: boolean;

    constructor(public pageTitle: PageTitle, @Optional() @Inject(ANIMATION_MODULE_TYPE) animationsModule?: string) {
        this.animationsDisabled = animationsModule === "NoopAnimations";
    }

    ngOnInit(): void {
        this.pageTitle.title = "";
    }
}
