import { Injectable } from "@angular/core";

export interface PageItem {
    id: string;
    name: string;
    page?: boolean;
}

const PAGES: PageItem[] = [
    {
        id: "get-started",
        name: "Get Started",
    },
    {
        id: "support",
        name: "Support",
    },
];

const COMPONENTS: PageItem[] = [
    {
        id: "datepicker-time",
        name: "Datepicker Time",
    },
    {
        id: "datepicker-settings",
        name: "Datepicker Settings",
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
