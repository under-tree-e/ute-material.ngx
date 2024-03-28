import { AppComponent } from "./app/app";
import { bootstrapApplication } from "@angular/platform-browser";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { provideHttpClient } from "@angular/common/http";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import { AppRoutes } from "./app/routing";

bootstrapApplication(AppComponent, {
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },

        provideRouter(
            AppRoutes,
            withInMemoryScrolling({
                scrollPositionRestoration: "enabled",
                anchorScrolling: "enabled",
            })
        ),
        provideHttpClient(),
    ],
}).catch((err) => console.error(err));
