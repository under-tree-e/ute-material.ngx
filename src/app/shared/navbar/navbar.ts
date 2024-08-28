import { Component } from "@angular/core";
import { NgIf, NgFor } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ThemePicker } from "../theme-picker/theme-picker";
import packageJson from "../../../../package.json";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.html",
    styleUrls: ["./navbar.scss"],
    standalone: true,
    imports: [NgIf, MatButtonModule, RouterLink, NgFor, RouterLinkActive, ThemePicker],
})
export class NavBar {
    public version: string = packageJson.version;
    skipLinkHref: string | null | undefined;
    skipLinkHidden = true;
}
