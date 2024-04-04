"use strict";
(self["webpackChunkngx_ute_material_app"] = self["webpackChunkngx_ute_material_app"] || []).push([["default-src_app_shared_footer_footer_ts-src_app_shared_page-seo_page-seo_ts"],{

/***/ 1984:
/*!*****************************************!*\
  !*** ./src/app/shared/footer/footer.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _projects_ngx_ute_material_package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../projects/ngx-ute-material/package.json */ 6502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);


class Footer {
  constructor() {
    this.year = new Date().getFullYear();
    this.version = _projects_ngx_ute_material_package_json__WEBPACK_IMPORTED_MODULE_0__.version;
  }
  static #_ = this.ɵfac = function Footer_Factory(t) {
    return new (t || Footer)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: Footer,
    selectors: [["app-footer"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 27,
    vars: 2,
    consts: [[1, "docs-footer"], [1, "docs-footer-list"], [1, "docs-footer-logo"], [1, "footer-logo"], ["src", "assets/img/homepage/angular-white-transparent.svg", "alt", "Angular icon", 1, "docs-footer-angular-logo"], ["href", "https://angular.io"], [1, "docs-footer-version"], ["target", "_blank", "rel", "nofollow", "href", "https://github.com/under-tree-e/ute-material.ngx"], ["src", "assets/img/homepage/ute-white-transparent.svg", "alt", "Angular Material icon", 1, "angular-material-logo"], [1, "version"], [1, "docs-footer-copyright"], ["target", "_blank", "rel", "nofollow", "href", "https://under-tree-e.com"], ["href", "https://github.com/under-tree-e/ute-material.ngx/blob/master/LICENSE"]],
    template: function Footer_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span")(6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Learn Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "UTE Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10)(17, "div")(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Under Tree Entertainment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Code licensed under an MIT-style License.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Documentation licensed under CC BY 4.0.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Current Version: ", ctx.version, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u00A92020-", ctx.year, ".");
      }
    },
    styles: [".docs-footer[_ngcontent-%COMP%] {\n  padding: 12px;\n  font-size: 12px;\n}\n\n.docs-footer-list[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  padding: 8px;\n}\n\n.docs-footer-logo[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.docs-footer-angular-logo[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.docs-footer-version[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n}\n.docs-footer-version[_ngcontent-%COMP%]   .angular-material-logo[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: 10px 0 10px 16px;\n}\n.docs-footer-version[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 40px;\n}\n\n.docs-footer-copyright[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n  flex-direction: column;\n  min-width: 225px;\n  margin-top: 16px;\n}\n.docs-footer-copyright[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-self: flex-end;\n  text-align: center;\n}\n@media (min-width: 885px) {\n  .docs-footer-copyright[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n\n.docs-footer-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 50px;\n  margin: 0 40px;\n  vertical-align: bottom;\n}\n.docs-footer-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 0;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus {\n  text-decoration: underline;\n}\n\n@media screen and (max-width: 884px) {\n  .docs-footer-list[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLE9BQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtBQUNKO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBQ1I7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQUNSOztBQUdBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQVI7QUFHSTtFQWZKO0lBZ0JRLGFBQUE7RUFBTjtBQUNGOztBQUdBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQUFKO0FBRUk7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQUFSOztBQUlBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBREo7QUFHSTtFQUVJLDBCQUFBO0FBRlI7O0FBTUE7RUFDSTtJQUNJLHNCQUFBO0VBSE47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5kb2NzLWZvb3RlciB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kb2NzLWZvb3Rlci1saXN0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBwYWRkaW5nOiA4cHg7XG59XG5cbi5kb2NzLWZvb3Rlci1sb2dvIHtcbiAgICBmbGV4OiAxO1xufVxuXG4uZG9jcy1mb290ZXItYW5ndWxhci1sb2dvIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5kb2NzLWZvb3Rlci12ZXJzaW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleDogMTtcblxuICAgIC5hbmd1bGFyLW1hdGVyaWFsLWxvZ28ge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDE2cHg7XG4gICAgfVxuICAgIC52ZXJzaW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDAgNDBweDtcbiAgICB9XG59XG5cbi5kb2NzLWZvb3Rlci1jb3B5cmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLXdpZHRoOiAyMjVweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuXG4gICAgPiBkaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA4ODVweCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbn1cblxuLmRvY3MtZm9vdGVyLWxvZ28gc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogMCA0MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG5cbiAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODRweCkge1xuICAgIC5kb2NzLWZvb3Rlci1saXN0IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8372:
/*!*********************************************!*\
  !*** ./src/app/shared/page-seo/page-seo.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageSEO: () => (/* binding */ PageSEO)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 168);


/**
 * Service responsible for setting the title that appears above the components and guide pages.
 */
class PageSEO {
  get title() {
    return this._title;
  }
  set title(title) {
    this._title = title;
    if (title !== "") {
      title = `${title} | UTE Material`;
    } else {
      title = this._originalTitle;
    }
    this.bodyTitle.setTitle(title);
  }
  get desk() {
    return this._title;
  }
  set desk(desk) {
    this._desk = desk;
    if (desk === "") {
      desk = this._originalDesk;
    }
    this.metaService.updateTag({
      name: "description",
      content: desk
    });
    this.metaService.updateTag({
      name: "twitter:description",
      content: desk
    });
    this.metaService.updateTag({
      name: "og:description",
      content: desk
    });
  }
  get keys() {
    return this._title;
  }
  set keys(keys) {
    this._keywords = keys;
    if (keys === "") {
      keys = this._originalKeywords;
    }
    this.metaService.updateTag({
      name: "keywords",
      content: keys
    });
  }
  constructor(bodyTitle, metaService) {
    this.bodyTitle = bodyTitle;
    this.metaService = metaService;
    this._title = "";
    this._desk = "";
    this._keywords = "";
    this._originalTitle = "UTE Material for Angular Material";
    this._originalDesk = "UTE Material library extends Angular Material Design components for mobile and desktop Angular web applications.";
    this._originalKeywords = "angular, material design, material, angular material, web, ui, components, responsive, accessibility, typescript, css, mobile web, open source";
  }
  static #_ = this.ɵfac = function PageSEO_Factory(t) {
    return new (t || PageSEO)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Meta));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PageSEO,
    factory: PageSEO.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 6502:
/*!************************************************!*\
  !*** ./projects/ngx-ute-material/package.json ***!
  \************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"ngx-ute-material","version":"1.1.0","description":"Ute material addon for Angular material library","scripts":{"build":"ng build","---":"","major-update":"npm version major --no-git-tag-version","minor-update":"npm version minor --no-git-tag-version","patch-update":"npm version patch --no-git-tag-version"},"keywords":["angular","material","typescript","es5","datepicker-time","datetime","timepicker","datepicker format","datepicker settings"],"author":{"name":"Under Tree Entertainment","url":"https://under-tree-e.com"},"repository":{"type":"git","url":"https://github.com/under-tree-e/ute-material.ngx"},"license":"MIT","bugs":{"url":"https://github.com/under-tree-e/ute-material.ngx/issues"},"homepage":"https://github.com/under-tree-e/ute-material.ngx#readme","private":false,"peerDependencies":{"@angular/common":">=16.0.0","@angular/core":">=16.0.0","@angular/material":">=16.0.0","rxjs":">=7.0.0"},"dependencies":{"tslib":"^2.6.2"},"sideEffects":false}');

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_footer_footer_ts-src_app_shared_page-seo_page-seo_ts.js.map