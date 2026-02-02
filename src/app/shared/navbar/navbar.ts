import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { ThemePicker } from "../theme-picker/theme-picker";
import packageJson from "../../../../package.json";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.html",
    styleUrls: ["./navbar.scss"],
    standalone: true,
    imports: [MatButtonModule, RouterLink, ThemePicker],
})
export class NavBar {
    public version: string = packageJson.version;
    skipLinkHref: string | null | undefined;
    skipLinkHidden = true;
}
