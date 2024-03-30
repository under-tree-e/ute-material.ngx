import { Component, HostBinding } from "@angular/core";
import { Footer } from "../../shared/footer/footer";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";

@Component({
    selector: "app-home",
    templateUrl: "./home.html",
    styleUrls: ["home.scss"],
    standalone: true,
    imports: [Footer, MatIconModule, MatButtonModule, RouterModule],
})
export class HomePage {
    @HostBinding("class.main-content") readonly mainContentClass = true;
}
