import { Injectable } from "@angular/core";

export interface PageItem {
    id: string;
    name: string;
    desk: string;
    keys: string;
    page?: boolean;
}

const PAGES: PageItem[] = [
    {
        id: "get-started",
        name: "Get Started",
        desk: "The UTE Material library extends default Angular Material components to make the functionality more adaptable to a variety of needs.",
        keys: "angular, material design, material, angular material, web, ui, install, open source",
    },
    {
        id: "about-us",
        name: "About us",
        desk: "Under Tree Entertainment is a community of creators who create content to entertain, inspire and simplify life.",
        keys: "angular, material design, material, angular material, web, ui, help, about us",
    },
];

const COMPONENTS: PageItem[] = [
    {
        id: "datepicker-time",
        name: "Datepicker Time",
        desk: "Mat Datepicker Time add datepicker-time (datetimepicker) for Angular Material Datepicker.",
        keys: "mat-datetimepicker, timepicker, datetimepicker, mat-datetime, mat-datepicker, angular, material design, material, angular material, web, ui, components, addon, typescript, css, mobile web, open source",
    },
    {
        id: "datepicker-settings",
        name: "Datepicker Settings",
        desk: "Mat Datepicker Settings make default 'Mat Datepicker' more customizable: date input format, week header names format, start day of week, cusomt classes.",
        keys: "date format, first day of week, mat-datepicker custom class, angular, material design, material, angular material, web, ui, components, addon, typescript, css, mobile web, open source",
    },
];

@Injectable({ providedIn: "root" })
export class PageManager {
    public getItems(page: boolean = false): PageItem[] {
        return page
            ? PAGES.map((p) => {
                  p.page = true;
                  return p;
              })
            : COMPONENTS;
    }

    public getItemById(id: string): PageItem | undefined {
        let pageItem: PageItem | undefined = PAGES.find((item) => item.id === id);
        if (!pageItem) {
            pageItem = COMPONENTS.find((item) => item.id === id);
        } else {
            pageItem.page = true;
        }
        return pageItem;
    }

    public getDefault(page: boolean = false): string {
        return (page ? PAGES : COMPONENTS)[0].id;
    }
}
