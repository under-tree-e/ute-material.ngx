import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import packageJson from "../../../../projects/ngx-ute-material/package.json";

@Component({
    selector: "app-footer",
    templateUrl: "footer.html",
    styleUrls: ["footer.scss"],
    standalone: true,
    imports: [DatePipe],
})
export class Footer {
    public year: number = new Date().getFullYear();
    public version: string = packageJson.version;
}
