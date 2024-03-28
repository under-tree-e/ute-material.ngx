import { Component } from "@angular/core";
import { Footer } from "../../shared/footer/footer";

@Component({
    templateUrl: "./home.html",
    standalone: true,
    imports: [Footer],
})
export class HomePage {}
