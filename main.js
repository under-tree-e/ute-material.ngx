"use strict";
(self["webpackChunkngx_ute_material_app"] = self["webpackChunkngx_ute_material_app"] || []).push([["main"],{

/***/ 6516:
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _shared_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/navbar */ 6012);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4280);





// import { AnalyticsService } from "./shared/analytics/analytics";
class AppComponent {
  constructor(
  // private analytics: AnalyticsService,
  router) {
    this.router = router;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
    this.subscriptions.add(this.router.events.subscribe(data => {
      if (data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivationEnd) {
        // analytics.locationChanged(toUrl);
      }
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 0,
    consts: [[1, "mat-elevation-z6"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar", 0)(1, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_navbar__WEBPACK_IMPORTED_MODULE_0__.NavBar],
    styles: ["/* For desktop, the content should be aligned with the page title. */\napp-root {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\napp-navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n\napp-root > app-layout {\n  flex: 1;\n}\n\napp-root > router-outlet + .main-content,\napp-root > router-outlet + app-layout {\n  margin-top: 56px;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX2NvbnN0YW50cy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9hcHAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQSxvRUFBQTtBQ1JBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFBSjs7QUFHQTtFQUNJLE9BQUE7QUFBSjs7QUFHQTs7RUFFSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSB2YWx1ZXMgd2VyZSBkZXRlcm1pbmVkIHRocm91Z2ggdGhlIGNvbWJpbmF0aW9uIG9mIE1hdGVyaWFsIERlc2lnbiBicmVha3BvaW50cyBhbmQgY2FyZWZ1bFxuLy8gdGVzdGluZyBvZiB0aGUgYXBwbGljYXRpb24gYWNyb3NzIGEgcmFuZ2Ugb2YgY29tbW9uIGRldmljZSB3aWR0aHMgKDM2MHB4KykuXG4vLyBUaGVzZSBicmVha3BvaW50IHZhbHVlcyBuZWVkIHRvIHN0YXkgaW4gc3luYyB3aXRoIHRoZSByZWxhdGVkIGNvbnN0YW50cyBpblxuLy8gc3JjL2FwcC9wYWdlcy9jb21wb25lbnQtc2lkZW5hdi9jb21wb25lbnQtc2lkZW5hdi50cy5cbi8vIFRoZSBleHRyYSBzbWFsbCBicmVha3BvaW50IGlzIHVzZWQgZm9yIHN0eWxpbmcgdGhlIGd1aWRlcyBhbmQgY2VydGFpbiBhc3BlY3RzIG9mIHRoZSB0YWJsZXMuXG4kZXh0cmEtc21hbGwtYnJlYWtwb2ludC13aWR0aDogNzIwcHg7XG4vLyBUaGUgc21hbGwgYnJlYWtwb2ludCBpcyB1c2VkIGZvciB0aGUgY29tcG9uZW50IGNhdGVnb3J5IGFuZCBjb21wb25lbnQgbGlzdCBwYWdlcywgdGhlIGNvbXBvbmVudFxuLy8gcGFnZXMsIHRoZSBjb21wb25lbnQgc2lkZW5hdiwgYW5kIGNlcnRhaW4gYXNwZWN0cyBvZiB0aGUgdGFibGVzLlxuJHNtYWxsLWJyZWFrcG9pbnQtd2lkdGg6IDk1OXB4O1xuXG4vKiBGb3IgZGVza3RvcCwgdGhlIGNvbnRlbnQgc2hvdWxkIGJlIGFsaWduZWQgd2l0aCB0aGUgcGFnZSB0aXRsZS4gKi9cbiRjb250ZW50LXBhZGRpbmctZ3VpZGVzLXNpZGU6IDcwcHg7XG4kY29udGVudC1wYWRkaW5nLXNpZGVuYXY6IDUwcHg7XG4kY29udGVudC1wYWRkaW5nLXNpZGUteHM6IDE1cHg7XG5cbiRzaWRlbmF2LXdpZHRoOiAyNDBweDtcbiIsIkB1c2UgXCIuLi9zdHlsZXMvY29uc3RhbnRzXCI7XG5cbmFwcC1yb290IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYXBwLW5hdmJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbmFwcC1yb290ID4gYXBwLWxheW91dCB7XG4gICAgZmxleDogMTtcbn1cblxuYXBwLXJvb3QgPiByb3V0ZXItb3V0bGV0ICsgLm1haW4tY29udGVudCxcbmFwcC1yb290ID4gcm91dGVyLW91dGxldCArIGFwcC1sYXlvdXQge1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3852:
/*!****************************!*\
  !*** ./src/app/routing.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutes: () => (/* binding */ AppRoutes)
/* harmony export */ });
const AppRoutes = [{
  path: "",
  pathMatch: "full",
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_footer_footer_ts-src_app_shared_page-seo_page-seo_ts"), __webpack_require__.e("src_app_pages_home_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home */ 4144)).then(m => m.HomePage)
}, {
  path: "get-started",
  data: {
    id: "get-started",
    page: true
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_footer_footer_ts-src_app_shared_page-seo_page-seo_ts"), __webpack_require__.e("src_app_pages_layout_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/layout */ 8188)).then(m => m.LayoutModule)
}, {
  path: "about-us",
  data: {
    id: "about-us",
    page: true
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_footer_footer_ts-src_app_shared_page-seo_page-seo_ts"), __webpack_require__.e("src_app_pages_layout_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/layout */ 8188)).then(m => m.LayoutModule)
}, {
  path: "components",
  pathMatch: "full",
  redirectTo: "components/default"
}, {
  path: "components/:id",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_footer_footer_ts-src_app_shared_page-seo_page-seo_ts"), __webpack_require__.e("src_app_pages_layout_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/layout */ 8188)).then(m => m.LayoutModule)
}, {
  path: "404",
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_not-found_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/not-found */ 9656)).then(m => m.NotFound)
}, {
  path: "**",
  redirectTo: "/404"
}];

/***/ }),

/***/ 6012:
/*!****************************************!*\
  !*** ./src/app/shared/navbar/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBar: () => (/* reexport safe */ _navbar__WEBPACK_IMPORTED_MODULE_0__.NavBar)
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ 5388);


/***/ }),

/***/ 5388:
/*!*****************************************!*\
  !*** ./src/app/shared/navbar/navbar.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBar: () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4672);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _theme_picker_theme_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme-picker/theme-picker */ 472);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../package.json */ 6604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);



// import { NavigationFocusService } from "../navigation-focus/navigation-focus.service";




function NavBar_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function NavBar_div_1_Template_a_focus_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.skipLinkHidden = false);
    })("blur", function NavBar_div_1_Template_a_blur_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.skipLinkHidden = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Skip to main content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cdk-visually-hidden", ctx_r0.skipLinkHidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r0.skipLinkHref, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
class NavBar {
  constructor() {
    this.version = _package_json__WEBPACK_IMPORTED_MODULE_1__.version;
    this.skipLinkHidden = true;
  }
  static #_ = this.ɵfac = function NavBar_Factory(t) {
    return new (t || NavBar)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NavBar,
    selectors: [["app-navbar"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 17,
    vars: 2,
    consts: [["aria-label", "Top Toolbar", 1, "docs-navbar-header"], ["class", "skip-link-wrapper", 3, "cdk-visually-hidden", 4, "ngIf"], ["mat-button", "", "routerLink", "/", "aria-label", "UTE Material", 1, "docs-button", "docs-navbar-hide-small"], ["matButtonIcon", "", "src", "assets/img/homepage/ute-white-transparent.svg", "alt", "ute", "aria-hidden", "true", 1, "logo"], ["mat-button", "", "routerLink", "/", "aria-label", "UTE Material", 1, "docs-button", "docs-navbar-show-small"], [1, "flex-spacer"], [1, "version"], ["mat-button", "", "href", "https://github.com/under-tree-e/ute-material.ngx", "aria-label", "GitHub Repository", "rel", "nofollow", "target", "_blank", 1, "docs-button", "docs-navbar-hide-small"], ["matButtonIcon", "", "src", "assets/img/homepage/github-circle-white-transparent.svg", "alt", "ute", "aria-hidden", "true", 1, "logo"], ["mat-icon-button", "", "href", "https://github.com/under-tree-e/ute-material", "aria-label", "GitHub Repository", "rel", "nofollow", "target", "_blank", 1, "docs-button", "docs-navbar-show-small"], ["matButtonIcon", "", "src", "assets/img/homepage/github-circle-white-transparent.svg", "alt", "ute", "aria-hidden", "true", 1, "logo", "docs-navbar--github-logo"], [1, "skip-link-wrapper"], ["mat-raised-button", "", "color", "accent", 3, "href", "focus", "blur"]],
    template: function NavBar_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavBar_div_1_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "UTE Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "theme-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " GitHub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.skipLinkHref);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("v", ctx.version, "");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _theme_picker_theme_picker__WEBPACK_IMPORTED_MODULE_0__.ThemePicker],
    styles: [".docs-navbar-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 4px 16px;\n}\n.docs-navbar-header[_ngcontent-%COMP%]    > .mat-mdc-button[_ngcontent-%COMP%]:last-child {\n  margin-left: auto;\n}\n\n.mat-mdc-button-base[_ngcontent-%COMP%]:not(:disabled) {\n  color: inherit;\n}\n\n.flex-spacer[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: 26px;\n  margin-right: 6px;\n}\n\n.version[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  font-family: var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));\n  font-size: var(--mdc-typography-button-font-size, 14px);\n  line-height: var(--mdc-typography-button-line-height, 36px);\n  font-weight: var(--mdc-typography-button-font-weight, 500);\n  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);\n}\n\n.docs-navbar-link[_ngcontent-%COMP%] {\n  text-decoration: inherit;\n  flex: 1;\n}\n\n.docs-navbar[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.docs-navbar-show-small[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.skip-link-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 5px;\n}\n\n\n\n\n\n\n@media (max-width: 720px) {\n  .docs-navbar-hide-small[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .docs-navbar-show-small[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .docs-navbar[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .docs-navbar--github-logo[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\ntheme-picker[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 328px) {\n  theme-picker[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRVE7RUFDSSxpQkFBQTtBQUFaOztBQUtBO0VBQ0ksY0FBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsNEdBQUE7RUFDQSx1REFBQTtFQUNBLDJEQUFBO0VBQ0EsMERBQUE7RUFDQSwyRUFBQTtBQUZKOztBQUtBO0VBQ0ksd0JBQUE7RUFDQSxPQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtBOzs7R0FBQTtBQUlBO0VBQ0k7SUFDSSxhQUFBO0VBRk47RUFLRTtJQUNJLGNBQUE7RUFITjtFQU1FO0lBQ0ksYUFBQTtFQUpOO0VBT0U7SUFDSSxTQUFBO0VBTE47QUFDRjtBQVFBO0VBQ0ksYUFBQTtBQU5KO0FBUUk7RUFISjtJQUlRLGNBQUE7RUFMTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3MtbmF2YmFyLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcblxuICAgID4gLm1hdC1tZGMtYnV0dG9uIHtcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWF0LW1kYy1idXR0b24tYmFzZTpub3QoOmRpc2FibGVkKSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5mbGV4LXNwYWNlciB7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4ubG9nbyB7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4udmVyc2lvbiB7XG4gICAgcGFkZGluZzogMCA4cHg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1mb250LWZhbWlseSwgdmFyKC0tbWRjLXR5cG9ncmFwaHktZm9udC1mYW1pbHksIFJvYm90bywgc2Fucy1zZXJpZikpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLWZvbnQtc2l6ZSwgMTRweCk7XG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1saW5lLWhlaWdodCwgMzZweCk7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLW1kYy10eXBvZ3JhcGh5LWJ1dHRvbi1mb250LXdlaWdodCwgNTAwKTtcbiAgICBsZXR0ZXItc3BhY2luZzogdmFyKC0tbWRjLXR5cG9ncmFwaHktYnV0dG9uLWxldHRlci1zcGFjaW5nLCAwLjA4OTI4NTcxNDNlbSk7XG59XG5cbi5kb2NzLW5hdmJhci1saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gICAgZmxleDogMTtcbn1cblxuLmRvY3MtbmF2YmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uZG9jcy1uYXZiYXItc2hvdy1zbWFsbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNraXAtbGluay13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4vKipcbiAgKiBSdWxlcyBmb3Igd2hlbiB0aGUgZGV2aWNlIGlzIGRldGVjdGVkIHRvIGJlIGEgc21hbGwgc2NyZWVuLlxuICAqIE1vdmVzIGNvbnRlbnQgdHdvIHJvd3MgaW5zdGVhZCBvZiBvbmUuXG4gICovXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAuZG9jcy1uYXZiYXItaGlkZS1zbWFsbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmRvY3MtbmF2YmFyLXNob3ctc21hbGwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuZG9jcy1uYXZiYXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5kb2NzLW5hdmJhci0tZ2l0aHViLWxvZ28ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufVxuXG50aGVtZS1waWNrZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMzI4cHgpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7512:
/*!***********************************************!*\
  !*** ./src/app/shared/style-manager/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyleManager: () => (/* reexport safe */ _style_manager__WEBPACK_IMPORTED_MODULE_0__.StyleManager)
/* harmony export */ });
/* harmony import */ var _style_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style-manager */ 7216);


/***/ }),

/***/ 7216:
/*!*******************************************************!*\
  !*** ./src/app/shared/style-manager/style-manager.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyleManager: () => (/* binding */ StyleManager)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

/**
 * Class for managing stylesheets. Stylesheets are loaded into named slots so that they can be
 * removed or changed later.
 */
class StyleManager {
  /**
   * Set the stylesheet with the specified key.
   */
  setStyle(key, href) {
    getLinkElementForKey(key).setAttribute('href', href);
  }
  /**
   * Remove the stylesheet with the specified key.
   */
  removeStyle(key) {
    const existingLinkElement = getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }
  static #_ = this.ɵfac = function StyleManager_Factory(t) {
    return new (t || StyleManager)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: StyleManager,
    factory: StyleManager.ɵfac,
    providedIn: 'root'
  });
}
function getLinkElementForKey(key) {
  return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}
function getExistingLinkElementByKey(key) {
  return document.head.querySelector(`link[rel="stylesheet"].${getClassNameForKey(key)}`);
}
function createLinkElementWithKey(key) {
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', 'stylesheet');
  linkEl.classList.add(getClassNameForKey(key));
  document.head.appendChild(linkEl);
  return linkEl;
}
function getClassNameForKey(key) {
  return `style-manager-${key}`;
}

/***/ }),

/***/ 472:
/*!*****************************************************!*\
  !*** ./src/app/shared/theme-picker/theme-picker.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemePicker: () => (/* binding */ ThemePicker)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4672);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 2328);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 7848);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 7000);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8688);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _style_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style-manager */ 7512);
/* harmony import */ var _theme_storage_theme_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-storage/theme-storage */ 400);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ 2664);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 168);

















function ThemePicker_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ThemePicker_button_5_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const theme_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.selectTheme(theme_r2.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const theme_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("docs-theme-selected-icon", ctx_r1.currentTheme === theme_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r1.currentTheme === theme_r2 ? "accent" : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.currentTheme === theme_r2 ? "radio_button_checked" : "radio_button_unchecked", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](theme_r2.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("theme-example-icon " + theme_r2.name);
  }
}
class ThemePicker {
  constructor(styleManager, _themeStorage, _activatedRoute, liveAnnouncer, iconRegistry, sanitizer) {
    this.styleManager = styleManager;
    this._themeStorage = _themeStorage;
    this._activatedRoute = _activatedRoute;
    this.liveAnnouncer = liveAnnouncer;
    this._queryParamSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    // The below colors need to align with the themes defined in theme-picker.scss
    this.themes = [{
      primary: '#673AB7',
      accent: '#FFC107',
      displayName: 'Deep Purple & Amber',
      name: 'deeppurple-amber',
      isDark: false
    }, {
      primary: '#3F51B5',
      accent: '#E91E63',
      displayName: 'Indigo & Pink',
      name: 'indigo-pink',
      isDark: false,
      isDefault: true
    }, {
      primary: '#E91E63',
      accent: '#607D8B',
      displayName: 'Pink & Blue-grey',
      name: 'pink-bluegrey',
      isDark: true
    }, {
      primary: '#9C27B0',
      accent: '#4CAF50',
      displayName: 'Purple & Green',
      name: 'purple-green',
      isDark: true
    }];
    iconRegistry.addSvgIcon('theme-example', sanitizer.bypassSecurityTrustResourceUrl('assets/img/theme-demo-icon.svg'));
    const themeName = this._themeStorage.getStoredThemeName();
    if (themeName) {
      this.selectTheme(themeName);
    } else {
      this.themes.find(themes => {
        if (themes.isDefault === true) {
          this.selectTheme(themes.name);
        }
      });
    }
  }
  ngOnInit() {
    this._queryParamSubscription = this._activatedRoute.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(params => params.get('theme'))).subscribe(themeName => {
      if (themeName) {
        this.selectTheme(themeName);
      }
    });
  }
  ngOnDestroy() {
    this._queryParamSubscription.unsubscribe();
  }
  selectTheme(themeName) {
    const theme = this.themes.find(currentTheme => currentTheme.name === themeName);
    if (!theme) {
      return;
    }
    this.currentTheme = theme;
    if (theme.isDefault) {
      this.styleManager.removeStyle('theme');
    } else {
      this.styleManager.setStyle('theme', `${theme.name}.css`);
    }
    if (this.currentTheme) {
      this.liveAnnouncer.announce(`${theme.displayName} theme selected.`, 'polite', 3000);
      this._themeStorage.storeTheme(this.currentTheme);
    }
  }
  static #_ = this.ɵfac = function ThemePicker_Factory(t) {
    return new (t || ThemePicker)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_style_manager__WEBPACK_IMPORTED_MODULE_0__.StyleManager), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_theme_storage_theme_storage__WEBPACK_IMPORTED_MODULE_1__.ThemeStorage), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ThemePicker,
    selectors: [["theme-picker"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 2,
    consts: [["mat-icon-button", "", "aria-label", "Select a theme", "matTooltip", "Select a theme for the documentation", 3, "mat-menu-trigger-for"], ["xPosition", "before", 1, "docs-theme-picker-menu"], ["themeMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"], [3, "color"], ["svgIcon", "theme-example"]],
    template: function ThemePicker_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0)(1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "format_color_fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-menu", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ThemePicker_button_5_Template, 6, 7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-menu-trigger-for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.themes);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor],
    styles: [".docs-theme-picker-menu .mat-mdc-menu-item .mat-icon.theme-example-icon {\n  margin-right: 0;\n  margin-left: auto;\n  padding-left: 8px;\n  order: 1;\n}\n.docs-theme-picker-menu .mat-mdc-menu-item .mat-icon.theme-example-icon svg {\n  vertical-align: middle;\n}\n.docs-theme-picker-menu .mat-mdc-menu-item .mat-icon.theme-example-icon.deeppurple-amber svg .docs-theme-icon-background {\n  fill: #fafafa;\n}\n.docs-theme-picker-menu .mat-mdc-menu-item .mat-icon.theme-example-icon.deeppurple-amber svg .docs-theme-icon-button {\n  fill: #FFC107;\n}\n.docs-theme-picker-menu .mat-mdc-menu-item .mat-icon.theme-example-icon.deeppurple-amber svg .docs-theme-icon-toolbar {\n  fill: #673AB7;\n}\n.docs-theme-picker-menu .mat-mdc-menu-item .mat-icon.theme-example-icon.indigo-pink svg .docs-theme-icon-background {\n  fill: #fafafa;\n}\n.docs-theme-picker-menu .mat-mdc-menu-item .mat-icon.theme-example-icon.indigo-pink svg .docs-theme-icon-button {\n  fill: #E91E63;\n}\n.docs-theme-picker-menu .mat-mdc-menu-item .mat-icon.theme-example-icon.indigo-pink svg .docs-theme-icon-toolbar {\n  fill: #3F51B5;\n}\n.docs-theme-picker-menu .mat-mdc-menu-item .mat-icon.theme-example-icon.pink-bluegrey svg .docs-theme-icon-background {\n  fill: #303030;\n}\n.docs-theme-picker-menu .mat-mdc-menu-item .mat-icon.theme-example-icon.pink-bluegrey svg .docs-theme-icon-button {\n  fill: #607D8B;\n}\n.docs-theme-picker-menu .mat-mdc-menu-item .mat-icon.theme-example-icon.pink-bluegrey svg .docs-theme-icon-toolbar {\n  fill: #E91E63;\n}\n.docs-theme-picker-menu .mat-mdc-menu-item .mat-icon.theme-example-icon.purple-green svg .docs-theme-icon-background {\n  fill: #303030;\n}\n.docs-theme-picker-menu .mat-mdc-menu-item .mat-icon.theme-example-icon.purple-green svg .docs-theme-icon-button {\n  fill: #4CAF50;\n}\n.docs-theme-picker-menu .mat-mdc-menu-item .mat-icon.theme-example-icon.purple-green svg .docs-theme-icon-toolbar {\n  fill: #9C27B0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3RoZW1lLXBpY2tlci90aGVtZS1waWNrZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtBQUROO0FBR007RUFDRSxzQkFBQTtBQURSO0FBTVE7RUFDRSxhQUFBO0FBSlY7QUFNUTtFQUNFLGFBQUE7QUFKVjtBQU1RO0VBQ0UsYUFBQTtBQUpWO0FBU1E7RUFDRSxhQUFBO0FBUFY7QUFTUTtFQUNFLGFBQUE7QUFQVjtBQVNRO0VBQ0UsYUFBQTtBQVBWO0FBWVE7RUFDRSxhQUFBO0FBVlY7QUFZUTtFQUNFLGFBQUE7QUFWVjtBQVlRO0VBQ0UsYUFBQTtBQVZWO0FBZVE7RUFDRSxhQUFBO0FBYlY7QUFlUTtFQUNFLGFBQUE7QUFiVjtBQWVRO0VBQ0UsYUFBQTtBQWJWIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3MtdGhlbWUtcGlja2VyLW1lbnUge1xuICAubWF0LW1kYy1tZW51LWl0ZW0ge1xuICAgIC5tYXQtaWNvbi50aGVtZS1leGFtcGxlLWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgIG9yZGVyOiAxO1xuXG4gICAgICBzdmcge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgYmVsb3cgY29sb3JzIG5lZWQgdG8gYWxpZ24gd2l0aCB0aGUgdGhlbWVzIGRlZmluZWQgaW4gVGhlbWVQaWNrZXJcbiAgICAgICYuZGVlcHB1cnBsZS1hbWJlciBzdmcge1xuICAgICAgICAuZG9jcy10aGVtZS1pY29uLWJhY2tncm91bmQge1xuICAgICAgICAgIGZpbGw6ICNmYWZhZmE7XG4gICAgICAgIH1cbiAgICAgICAgLmRvY3MtdGhlbWUtaWNvbi1idXR0b24ge1xuICAgICAgICAgIGZpbGw6ICNGRkMxMDc7XG4gICAgICAgIH1cbiAgICAgICAgLmRvY3MtdGhlbWUtaWNvbi10b29sYmFyIHtcbiAgICAgICAgICBmaWxsOiAjNjczQUI3O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuaW5kaWdvLXBpbmsgc3ZnIHtcbiAgICAgICAgLmRvY3MtdGhlbWUtaWNvbi1iYWNrZ3JvdW5kIHtcbiAgICAgICAgICBmaWxsOiAjZmFmYWZhO1xuICAgICAgICB9XG4gICAgICAgIC5kb2NzLXRoZW1lLWljb24tYnV0dG9uIHtcbiAgICAgICAgICBmaWxsOiAjRTkxRTYzO1xuICAgICAgICB9XG4gICAgICAgIC5kb2NzLXRoZW1lLWljb24tdG9vbGJhciB7XG4gICAgICAgICAgZmlsbDogIzNGNTFCNTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnBpbmstYmx1ZWdyZXkgc3ZnIHtcbiAgICAgICAgLmRvY3MtdGhlbWUtaWNvbi1iYWNrZ3JvdW5kIHtcbiAgICAgICAgICBmaWxsOiAjMzAzMDMwO1xuICAgICAgICB9XG4gICAgICAgIC5kb2NzLXRoZW1lLWljb24tYnV0dG9uIHtcbiAgICAgICAgICBmaWxsOiAjNjA3RDhCO1xuICAgICAgICB9XG4gICAgICAgIC5kb2NzLXRoZW1lLWljb24tdG9vbGJhciB7XG4gICAgICAgICAgZmlsbDogI0U5MUU2MztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnB1cnBsZS1ncmVlbiBzdmcge1xuICAgICAgICAuZG9jcy10aGVtZS1pY29uLWJhY2tncm91bmQge1xuICAgICAgICAgIGZpbGw6ICMzMDMwMzA7XG4gICAgICAgIH1cbiAgICAgICAgLmRvY3MtdGhlbWUtaWNvbi1idXR0b24ge1xuICAgICAgICAgIGZpbGw6ICM0Q0FGNTA7XG4gICAgICAgIH1cbiAgICAgICAgLmRvY3MtdGhlbWUtaWNvbi10b29sYmFyIHtcbiAgICAgICAgICBmaWxsOiAjOUMyN0IwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 400:
/*!********************************************************************!*\
  !*** ./src/app/shared/theme-picker/theme-storage/theme-storage.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeStorage: () => (/* binding */ ThemeStorage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);


class ThemeStorage {
  constructor() {
    this.onThemeUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  static #_ = this.storageKey = 'docs-theme-storage-current-name';
  storeTheme(theme) {
    try {
      window.localStorage[ThemeStorage.storageKey] = theme.name;
    } catch {}
    this.onThemeUpdate.emit(theme);
  }
  getStoredThemeName() {
    try {
      return window.localStorage[ThemeStorage.storageKey] || null;
    } catch {
      return null;
    }
  }
  clearStorage() {
    try {
      window.localStorage.removeItem(ThemeStorage.storageKey);
    } catch {}
  }
  static #_2 = this.ɵfac = function ThemeStorage_Factory(t) {
    return new (t || ThemeStorage)();
  };
  static #_3 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ThemeStorage,
    factory: ThemeStorage.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7460:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app */ 6516);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/routing */ 3852);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ 381);







const prefersReducedMotion = typeof matchMedia === "function" ? matchMedia("(prefers-reduced-motion)").matches : false;
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [prefersReducedMotion ? (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.provideNoopAnimations)() : (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.provideAnimations)(), {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__.PathLocationStrategy
  }, (0,_angular_router__WEBPACK_IMPORTED_MODULE_5__.provideRouter)(_app_routing__WEBPACK_IMPORTED_MODULE_1__.AppRoutes,
  // withDebugTracing(),
  (0,_angular_router__WEBPACK_IMPORTED_MODULE_5__.withInMemoryScrolling)({
    scrollPositionRestoration: "enabled",
    anchorScrolling: "enabled"
  })), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.withFetch)())]
}).catch(err => console.error(err));

/***/ }),

/***/ 6604:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"ngx-ute-material","version":"1.1.3","description":"Ute material addon for Angular material library","scripts":{"start":"ng serve","watch":"ng build --watch","---":"","load":"npm i --force","fix":"npm audit fix --force","update":"ncu --upgrade && npm run install && npm run fix","----":"","build":"npx ts-node node_scripts --build","publish":"npx ts-node node_scripts --publish","npm-publish":"cd dist/ngx-ute-material/ && npm publish","-----":"","major-update":"npm version major --no-git-tag-version","minor-update":"npm version minor --no-git-tag-version","patch-update":"npm version patch --no-git-tag-version","dev-update":"npm version prerelease --preid=dev --no-git-tag-version && git add . && git commit -m \'dev_update_\'$npm_package_version && git push --all"},"keywords":["angular","material","typescript","es5","datepicker-time","datetime","timepicker"],"author":{"name":"Under Tree Entertainment","url":"https://under-tree-e.com"},"repository":{"type":"git","url":"https://github.com/under-tree-e/ute-material.ngx"},"license":"MIT","bugs":{"url":"https://github.com/under-tree-e/ute-material.ngx/issues"},"homepage":"https://github.com/under-tree-e/ute-material.ngx#readme","private":false,"dependencies":{"@angular/animations":"^17.2.3","@angular/common":"^17.2.3","@angular/compiler":"^17.2.3","@angular/core":"^17.2.3","@angular/material":"^17.2.1","@angular/platform-browser-dynamic":"^17.2.3","@angular/router":"^17.2.3","rxjs":"~7.8.1","tslib":"^2.6.2","zone.js":"~0.14.4"},"devDependencies":{"@angular-devkit/build-angular":"^17.2.2","@angular/cli":"~17.2.2","@angular/compiler-cli":"^17.2.3","@types/jasmine":"~5.1.4","@types/node":"^20.11.24","angular-cli-ghpages":"^2.0.0-beta.2","clear-folder":"^5.0.0","jasmine-core":"~5.1.2","karma":"~6.4.3","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.1","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.1.0","ng-packagr":"^17.2.1","npm-check-updates":"^16.14.15","typescript":"~5.3.3"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(7460)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map