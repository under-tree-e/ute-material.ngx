import { importProvidersFrom } from "@angular/core";
import { AppComponent } from "./app/app";
import { AppRoutingModule } from "./app/routing";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";

bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, AppRoutingModule), { provide: LocationStrategy, useClass: PathLocationStrategy }],
}).catch((err) => console.error(err));
