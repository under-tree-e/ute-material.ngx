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
        path: "get-started",
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

    public getItemById(id: string): PageItem | undefined {
        let pageItem: PageItem | undefined = PAGES.find((item) => item.id === id);
        if (!pageItem) {
            pageItem = COMPONENTS.find((item) => item.id === id);
        }
        return pageItem;
    }

    public getDefault(page: boolean = false): string {
        return (page ? PAGES : COMPONENTS)[0].id;
    }
}
