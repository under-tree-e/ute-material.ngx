import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import packageJson from "../../../../projects/ngx-ute-material/package.json";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.html",
    styleUrls: ["./footer.scss"],
    standalone: true,
    imports: [DatePipe],
})
export class Footer {
    public now: number = new Date().getFullYear();
    public update: Date = new Date("2024-03-28T21:21:18");
    public version: string = packageJson.version;
}
