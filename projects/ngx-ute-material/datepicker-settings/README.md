## UTE Material - Datepicker Settings

Datepicker Settings is an additional params to make default `Mat Datepicker` more customizable as date input format, week header names format, start day of week & more classes for your custom style.

## About US

We are a small group of enthusiasts, so if you want to improve the development of these modules, any help would be greatly appreciated.

-   Contact us if you have any question or suggestion.
-   Feel free to open the [issues]() or provide a PR.
-   If you like this project, support by starring⭐.

<a href="https://www.buymeacoffee.com" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

Live demo with all settings, [HERE](https://under-tree-e.github.io/ute-material.ngx/components/datepicker-settings)

## Getting started

Install the main package:

```shell
npm i ngx-ute-material
```

Import `UteDatepickerTime` into your `app.module.ts`:

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UteDatepickerSettings } from "ngx-ute-material/datepicker-settings";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, UteDatepickerSettings],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
```

Add directive `uteDateSettings` to your `mat-datepicker` component:

```html
<mat-form-field>
    <mat-label>Choose a datetime</mat-label>
    <input matInput [matDatepicker]="picker" />
    <mat-hint>MM/DD/YYYY, HH:mm:ss</mat-hint>
    <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker uteDateSettings></mat-datepicker>
</mat-form-field>
```

## Input Properties

| Property        |               Input type               | Default value | Description                                                                                                                                 |
| --------------- | :------------------------------------: | :-----------: | ------------------------------------------------------------------------------------------------------------------------------------------- |
| format          |                 string                 |      ''       | Custom date format for date input. Support `NativeDateAdaper` and `MomentDateAdapter`.                                                      |
| weekStart       |           number:<br>0 \| 1            |       0       | Change first day of week in `MatCalendar`. 0 - Sunday; 1 - Monday.                                                                          |
| overlayClass    |                 string                 |      ''       | Add custom class to DOM with class `cdk-overlay-pane`.                                                                                      |
| backdropClass   |                 string                 |      ''       | Add custom class to DOM with class `cdk-overlay-backdrop`.                                                                                  |
| contentClass    |                 string                 |      ''       | Add custom class to DOM with class `mat-datepicker-content`.                                                                                |
| weekdaysSymbols | number \| null:<br>1 \| 2 \| 3 \| null |       1       | Change number of symbols in `MatCalendar` table header for days of week. 1 - 'S', 2 - 'Su', 3 - 'Sun'.                                      |
| dynamicTouchUI  |                boolean                 |     false     | Dynamically adds the `touchUi` to `mat-datepicker` parameter depending on the current device. Set (`false`) if you are modifying `touchUi`. |

## Additional Info

-   Module automatic integrate with default installed `DateAdapter` such as `NativeDateAdapter` or `MomentDateAdapter`.
-   Custom date format can be used at any `DateAdapter`.
-   All settings from this module works only with `mat-datepicker` component to which this directive is connected.
-   Don't forget use specific format syntax [Angular](https://angular.io/api/common/DatePipe#custom-format-options) or [Moment](https://momentjs.com/docs/#/parsing/string/)
-   `MatDateRange` supported

## Planned Improvements

| Improvement                        | Priority | Status |
| ---------------------------------- | :------: | :----: |
| Settings for all Datepicker in app |   Low    |  Wait  |
