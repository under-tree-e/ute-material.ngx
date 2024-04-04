"use strict";
(self["webpackChunkngx_ute_material_app"] = self["webpackChunkngx_ute_material_app"] || []).push([["src_app_pages_home_index_ts"],{

/***/ 4068:
/*!************************************!*\
  !*** ./src/app/pages/home/home.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _shared_footer_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/footer/footer */ 1984);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 2328);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4672);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var src_app_shared_page_seo_page_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/page-seo/page-seo */ 8372);









class HomePage {
  constructor(pageSeo, animationsModule) {
    this.pageSeo = pageSeo;
    this.mainContentClass = true;
    this.animationsDisabled = animationsModule === "NoopAnimations";
  }
  ngOnInit() {
    this.pageSeo.title = "";
    this.pageSeo.desk = "";
    this.pageSeo.keys = "";
  }
  static #_ = this.ɵfac = function HomePage_Factory(t) {
    return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_page_seo_page_seo__WEBPACK_IMPORTED_MODULE_1__.PageSEO), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ANIMATION_MODULE_TYPE, 8));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HomePage,
    selectors: [["app-home"]],
    hostVars: 4,
    hostBindings: function HomePage_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("main-content", ctx.mainContentClass)("animations-disabled", ctx.animationsDisabled);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 36,
    vars: 0,
    consts: [["focusOnNavigation", "", "aria-label", "Get started", "id", "homepage-header", 1, "docs-header-background"], [1, "docs-header-section"], [1, "docs-header-headline"], [1, "mat-h1"], [1, "docs-header-start"], ["mat-raised-button", "", "routerLink", "get-started", 1, "docs-button"], ["mat-raised-button", "", "color", "accent", "routerLink", "/components/default", 1, "docs-button"], [1, "docs-homepage-promo"], [1, "docs-homepage-row", "docs-introduction"], [1, "docs-homepage-row-column"]],
    template: function HomePage_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "UTE Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "The UTE Material library extends default Angular Material components to make the functionality more adaptable to a variety of needs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Get started");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "main", 7)(13, "div", 8)(14, "div", 9)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "High quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Internationalized and accessible components for everyone. Well tested to ensure performance and reliability.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Straightforward APIs with consistent cross platform behaviour.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9)(22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Just addon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Modules do not replace default Angular Material components, but complement them with additional elements and functionality.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Customizable within the bounds of the Material Design specification.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 9)(29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Simple & Power");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "You can add modules to an existing project in just a few clicks without the need to connect additional libraries.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Advanced settings allow you to make the functionality exactly the way you need it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "app-footer");
      }
    },
    dependencies: [_shared_footer_footer__WEBPACK_IMPORTED_MODULE_0__.Footer, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
    styles: [".markdown[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n}\n.markdown[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  display: block;\n  margin: 16px auto;\n  padding: 20px;\n  white-space: normal;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n}\n.markdown[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 0;\n  font-size: 100%;\n}\n\n.docs-header-background[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  height: 420px;\n  min-height: calc(100vh - 32.55rem);\n}\n\n.docs-header-background[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  background-image: url('ute-white-transparent.svg');\n  background-size: 600px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-repeat: no-repeat;\n  background-position: 80% 50%;\n  opacity: 0.2;\n}\n\n.docs-header-section[_ngcontent-%COMP%] {\n  width: 90%;\n  position: absolute;\n  z-index: 0;\n  text-align: center;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.docs-header-headline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: bold;\n  line-height: 56px;\n  margin: 15px 5px;\n}\n.docs-header-headline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 28px;\n  margin: 15px auto 25px auto;\n  max-width: 35%;\n}\n\n.docs-homepage-promo[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  width: 75%;\n  max-width: 1080px;\n  margin: auto;\n}\n.docs-homepage-promo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.docs-homepage-promo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 400;\n  margin: 0 0 16px;\n  padding: 0;\n}\n.docs-homepage-promo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 28px;\n  margin: 0 0 24px 0;\n  padding: 0;\n}\n.docs-homepage-promo[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.docs-homepage-promo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n  width: 48%;\n}\n.carousel-item[_ngcontent-%COMP%]    + .carousel-item[_ngcontent-%COMP%] {\n  margin-left: 2%;\n}\n@media (min-width: 1020px) {\n  .carousel-item[_ngcontent-%COMP%] {\n    max-width: 32%;\n  }\n}\n\n.docs-homepage-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 50px 0;\n}\n\n.docs-homepage-carousel-row[_ngcontent-%COMP%] {\n  margin: 50px 0;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.docs-homepage-carousel-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.docs-homepage-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.docs-homepage-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.docs-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n}\n\n.docs-homepage-environment-support[_ngcontent-%COMP%]   .docs-environment-support-carousel-item[_ngcontent-%COMP%] {\n  text-align: center;\n  box-sizing: border-box;\n  font-size: 18px;\n}\n.docs-homepage-environment-support[_ngcontent-%COMP%]   .docs-environment-support-carousel-item[_ngcontent-%COMP%]   .docs-homepage-img-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin-bottom: 16px;\n  max-height: 200px;\n}\n.docs-homepage-environment-support[_ngcontent-%COMP%]   .docs-environment-support-carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: 0.3s ease-in-out;\n  width: 100%;\n}\n.animations-disabled[_nghost-%COMP%]   .docs-homepage-environment-support[_ngcontent-%COMP%]   .docs-environment-support-carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: none;\n}\n.docs-homepage-environment-support[_ngcontent-%COMP%]   .docs-environment-support-carousel-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], .docs-homepage-environment-support[_ngcontent-%COMP%]   .docs-environment-support-carousel-item[_ngcontent-%COMP%]:focus   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.docs-homepage-featured-components[_ngcontent-%COMP%]   .docs-featured-components-carousel-item[_ngcontent-%COMP%] {\n  text-align: center;\n  box-sizing: border-box;\n  font-size: 18px;\n}\n.docs-homepage-featured-components[_ngcontent-%COMP%]   .docs-featured-components-carousel-item[_ngcontent-%COMP%]   .docs-homepage-img-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin-bottom: 16px;\n  max-height: 200px;\n}\n.docs-homepage-featured-components[_ngcontent-%COMP%]   .docs-featured-components-carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: 0.3s ease-in-out;\n  width: 100%;\n}\n.animations-disabled[_nghost-%COMP%]   .docs-homepage-featured-components[_ngcontent-%COMP%]   .docs-featured-components-carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: none;\n}\n.docs-homepage-featured-components[_ngcontent-%COMP%]   .docs-featured-components-carousel-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], .docs-homepage-featured-components[_ngcontent-%COMP%]   .docs-featured-components-carousel-item[_ngcontent-%COMP%]:focus   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.docs-homepage-row-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 32%;\n}\n.docs-homepage-row-column[_ngcontent-%COMP%]    + .docs-homepage-row-column[_ngcontent-%COMP%] {\n  margin-left: 2%;\n}\n\n.docs-header-start[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  justify-content: center;\n  margin: 50px 0 0 0;\n}\n.docs-header-start[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n@media (max-width: 1200px) {\n  .docs-header-background[_ngcontent-%COMP%] {\n    height: 330px;\n  }\n  .docs-header-background[_ngcontent-%COMP%]:before {\n    background-image: none;\n  }\n}\n@media (max-width: 850px) {\n  .docs-header-background[_ngcontent-%COMP%]:before {\n    background-image: none;\n  }\n  .docs-introduction[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .docs-homepage-row-column[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .docs-homepage-row-column[_ngcontent-%COMP%]    + .docs-homepage-row-column[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .docs-header-headline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n\n\n\n\n@media (max-width: 720px) {\n  .docs-header-start[_ngcontent-%COMP%] {\n    margin: 15px 0 0 0;\n  }\n  .docs-homepage-row[_ngcontent-%COMP%], .docs-homepage-carousel-row[_ngcontent-%COMP%] {\n    margin: 15px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtBQUhKO0FBSUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFGUjtBQUdRO0VBQ0ksdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQURaOztBQU1BO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxzQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUhKOztBQU9JO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUpSO0FBTUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQUpSOztBQVFBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUxKO0FBT0k7RUFDSSxxQkFBQTtBQUxSO0FBUUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFOUjtBQVNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFQUjtBQVVJO0VBQ0ksV0FBQTtBQVJSO0FBV0k7RUFDSSxzQkFBQTtBQVRSOztBQWFBO0VBQ0ksVUFBQTtBQVZKO0FBWUk7RUFDSSxlQUFBO0FBVlI7QUFhSTtFQVBKO0lBUVEsY0FBQTtFQVZOO0FBQ0Y7O0FBYUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBVko7O0FBYUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQVZKO0FBWUk7RUFDSSxhQUFBO0FBVlI7O0FBY0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVhKO0FBYUk7RUFDSSxTQUFBO0FBWFI7O0FBZUE7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0FBWko7O0FBZ0JJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFiUjtBQWVRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBYlo7QUFnQlE7RUFDSSw0QkFBQTtFQUNBLFdBQUE7QUFkWjtBQWdCWTtFQUNJLGdCQUFBO0FBZGhCO0FBb0JZO0VBQ0kscUJBQUE7QUFsQmhCOztBQXlCSTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBdEJSO0FBd0JRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBdEJaO0FBeUJRO0VBQ0ksNEJBQUE7RUFDQSxXQUFBO0FBdkJaO0FBeUJZO0VBQ0ksZ0JBQUE7QUF2QmhCO0FBNkJZO0VBQ0kscUJBQUE7QUEzQmhCOztBQWlDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUE5Qko7QUFnQ0k7RUFDSSxlQUFBO0FBOUJSOztBQWtDQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQS9CSjtBQWlDSTtFQUNJLGVBQUE7QUEvQlI7O0FBbUNBO0VBQ0k7SUFDSSxhQUFBO0VBaENOO0VBa0NFO0lBQ0ksc0JBQUE7RUFoQ047QUFDRjtBQW1DQTtFQUNJO0lBQ0ksc0JBQUE7RUFqQ047RUFtQ0U7SUFDSSxzQkFBQTtFQWpDTjtFQW9DRTtJQUNJLFdBQUE7RUFsQ047RUFvQ007SUFDSSxjQUFBO0VBbENWO0VBdUNNO0lBQ0ksZUFBQTtFQXJDVjtBQUNGO0FBeUNBOztHQUFBO0FBR0E7RUFDSTtJQUNJLGtCQUFBO0VBdkNOO0VBMENFOztJQUVJLGNBQUE7RUF4Q047QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtYXJnaW4gYmV0d2VlbiB0d28gc2VjdGlvbnNcbiRtYXJnaW4tcHJvbW90aW9uLXNlY3Rpb25zOiA1MHB4O1xuJG1hcmdpbi1wcm9tb3Rpb24tc2VjdGlvbnMtc21hbGw6IDE1cHg7XG5cbi5tYXJrZG93biB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHByZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMTZweCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBjb2RlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRvY3MtaGVhZGVyLWJhY2tncm91bmQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNDIwcHg7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDMyLjU1cmVtKTtcbn1cblxuLmRvY3MtaGVhZGVyLWJhY2tncm91bmQ6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvaW1nL2hvbWVwYWdlL3V0ZS13aGl0ZS10cmFuc3BhcmVudC5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiA2MDBweDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4MCUgNTAlO1xuICAgIG9wYWNpdHk6IDAuMjtcbn1cblxuLmRvY3MtaGVhZGVyLXNlY3Rpb24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmRvY3MtaGVhZGVyLWhlYWRsaW5lIHtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICAgICAgICBtYXJnaW46IDE1cHggNXB4O1xuICAgIH1cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIG1hcmdpbjogMTVweCBhdXRvIDI1cHggYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiAzNSU7XG4gICAgfVxufVxuXG4uZG9jcy1ob21lcGFnZS1wcm9tbyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1heC13aWR0aDogMTA4MHB4O1xuICAgIG1hcmdpbjogYXV0bztcblxuICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIG1hcmdpbjogMCAwIDI0cHggMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICBtYXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIG1hdC1pY29uIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG59XG5cbi5jYXJvdXNlbC1pdGVtIHtcbiAgICB3aWR0aDogNDglO1xuXG4gICAgJiArICYge1xuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjBweCkge1xuICAgICAgICBtYXgtd2lkdGg6IDMyJTtcbiAgICB9XG59XG5cbi5kb2NzLWhvbWVwYWdlLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbjogJG1hcmdpbi1wcm9tb3Rpb24tc2VjdGlvbnMgMDtcbn1cblxuLmRvY3MtaG9tZXBhZ2UtY2Fyb3VzZWwtcm93IHtcbiAgICBtYXJnaW46ICRtYXJnaW4tcHJvbW90aW9uLXNlY3Rpb25zIDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgaDIge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbn1cblxuLmRvY3MtaG9tZXBhZ2UtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG5cbi5kb2NzLWxpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kb2NzLWhvbWVwYWdlLWVudmlyb25tZW50LXN1cHBvcnQge1xuICAgIC5kb2NzLWVudmlyb25tZW50LXN1cHBvcnQtY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuXG4gICAgICAgIC5kb2NzLWhvbWVwYWdlLWltZy1jb250YWluZXIge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIDpob3N0KC5hbmltYXRpb25zLWRpc2FibGVkKSAmIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRvY3MtaG9tZXBhZ2UtZmVhdHVyZWQtY29tcG9uZW50cyB7XG4gICAgLmRvY3MtZmVhdHVyZWQtY29tcG9uZW50cy1jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG5cbiAgICAgICAgLmRvY3MtaG9tZXBhZ2UtaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgOmhvc3QoLmFuaW1hdGlvbnMtZGlzYWJsZWQpICYge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZG9jcy1ob21lcGFnZS1yb3ctY29sdW1uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDMyJTtcblxuICAgICYgKyAmIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIH1cbn1cblxuLmRvY3MtaGVhZGVyLXN0YXJ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMnJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46ICRtYXJnaW4tcHJvbW90aW9uLXNlY3Rpb25zIDAgMCAwO1xuXG4gICAgLm1hdC1tZGMtcmFpc2VkLWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuZG9jcy1oZWFkZXItYmFja2dyb3VuZCB7XG4gICAgICAgIGhlaWdodDogMzMwcHg7XG4gICAgfVxuICAgIC5kb2NzLWhlYWRlci1iYWNrZ3JvdW5kOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcbiAgICAuZG9jcy1oZWFkZXItYmFja2dyb3VuZDpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIH1cbiAgICAuZG9jcy1pbnRyb2R1Y3Rpb24ge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5kb2NzLWhvbWVwYWdlLXJvdy1jb2x1bW4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmICsgJiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kb2NzLWhlYWRlci1oZWFkbGluZSB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gICogUnVsZXMgZm9yIHdoZW4gdGhlIGRldmljZSBpcyBkZXRlY3RlZCB0byBiZSBhIHNtYWxsIHNjcmVlbi5cbiAgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgIC5kb2NzLWhlYWRlci1zdGFydCB7XG4gICAgICAgIG1hcmdpbjogJG1hcmdpbi1wcm9tb3Rpb24tc2VjdGlvbnMtc21hbGwgMCAwIDA7XG4gICAgfVxuXG4gICAgLmRvY3MtaG9tZXBhZ2Utcm93LFxuICAgIC5kb2NzLWhvbWVwYWdlLWNhcm91c2VsLXJvdyB7XG4gICAgICAgIG1hcmdpbjogJG1hcmdpbi1wcm9tb3Rpb24tc2VjdGlvbnMtc21hbGwgMDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4144:
/*!*************************************!*\
  !*** ./src/app/pages/home/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_0__.HomePage)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ 4068);


/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_index_ts.js.map