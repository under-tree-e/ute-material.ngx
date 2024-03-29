import { Component, HostBinding } from "@angular/core";
import { Footer } from "../../shared/footer/footer";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: "app-get-started",
    templateUrl: "./get-started.html",
    styleUrls: ["get-started.scss"],
    standalone: true,
    imports: [Footer, MatIconModule, MatButtonModule],
})
export class GetStartedPage {
    @HostBinding("class.main-content") readonly mainContentClass = true;
}
