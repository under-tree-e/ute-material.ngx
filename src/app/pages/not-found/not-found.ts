import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { Footer } from "src/app/shared/footer/footer";

@Component({
    selector: "app-not-found",
    templateUrl: "./not-found.html",
    styleUrls: ["./not-found.scss"],
    standalone: true,
    imports: [MatButtonModule, RouterLink, Footer],
})
export class NotFound {}
