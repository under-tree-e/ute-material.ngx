import { ApplicationConfig } from "@angular/core";
import { provideRouter, withInMemoryScrolling, withRouterConfig } from "@angular/router";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { provideHttpClient } from "@angular/common/http";

import { AppRoutes } from "./routes";
import { provideNativeDateAdapter } from "@angular/material/core";

export const appConfig: ApplicationConfig = {
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        provideRouter(
            AppRoutes,
            withInMemoryScrolling({
                scrollPositionRestoration: "enabled",
                anchorScrolling: "enabled",
            }),
            withRouterConfig({
                onSameUrlNavigation: "reload",
            }),
        ),
        provideHttpClient(),
        provideNativeDateAdapter(),
    ],
};
