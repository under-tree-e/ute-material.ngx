import { Injectable } from "@angular/core";

export interface PageItem {
    /** Id of the item. Used in the URL for linking to the item. */
    id: string;
    /** Display name of the item. */
    name: string;
    /** Package which contains the item. */
    path?: string;
}

const PAGES: PageItem[] = [
    {
        id: "get-started",
        name: "Get Started",
        path: "datepicker-time",
    },
];

const COMPONENTS: PageItem[] = [
    {
        id: "date-time",
        name: "Datepicker Time",
        path: "datepicker-time",
    },
    {
        id: "date-settings",
        name: "Datepicker Settings",
        path: "datepicker-settings",
    },
];

@Injectable({ providedIn: "root" })
export class PageManager {
    public getItems(page: boolean = false): PageItem[] {
        return page ? PAGES : COMPONENTS;
    }

    public getItemById(id: string, page: boolean = false): PageItem | undefined {
        return (page ? PAGES : COMPONENTS).find((item) => item.id === id);
    }

    public getDefault(page: boolean = false): string {
        return (page ? PAGES : COMPONENTS)[0].id;
    }
}
