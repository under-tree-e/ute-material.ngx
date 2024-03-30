import { AppComponent } from "./app/app";
import { bootstrapApplication } from "@angular/platform-browser";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideRouter, withDebugTracing, withInMemoryScrolling } from "@angular/router";
import { AppRoutes } from "./app/routing";
import { provideAnimations, provideNoopAnimations } from "@angular/platform-browser/animations";

const prefersReducedMotion = typeof matchMedia === "function" ? matchMedia("(prefers-reduced-motion)").matches : false;

bootstrapApplication(AppComponent, {
    providers: [
        prefersReducedMotion ? provideNoopAnimations() : provideAnimations(),
        { provide: LocationStrategy, useClass: PathLocationStrategy },

        provideRouter(
            AppRoutes,
            // withDebugTracing(),
            withInMemoryScrolling({
                scrollPositionRestoration: "enabled",
                anchorScrolling: "enabled",
            })
        ),
        provideHttpClient(withFetch()),
    ],
}).catch((err) => console.error(err));
