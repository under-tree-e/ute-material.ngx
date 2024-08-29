"use strict";
(self["webpackChunkngx_ute_material_app"] = self["webpackChunkngx_ute_material_app"] || []).push([["src_app_pages_not-found_index_ts"],{

/***/ 9656:
/*!******************************************!*\
  !*** ./src/app/pages/not-found/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFound: () => (/* reexport safe */ _not_found__WEBPACK_IMPORTED_MODULE_0__.NotFound)
/* harmony export */ });
/* harmony import */ var _not_found__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found */ 9652);


/***/ }),

/***/ 9652:
/*!**********************************************!*\
  !*** ./src/app/pages/not-found/not-found.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFound: () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4672);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var src_app_shared_footer_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/footer/footer */ 1984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);





class NotFound {
  static #_ = this.ɵfac = function NotFound_Factory(t) {
    return new (t || NotFound)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NotFound,
    selectors: [["app-not-found"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 16,
    vars: 0,
    consts: [[1, "wrapper"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 200 200", 0, "xml", "space", "preserve"], ["d", "M5.7,33.2L98.8,0l95.5,32.6l-15.4,123.1L98.8,200L20,156.3L5.7,33.2z", 1, "shield-left"], ["d", "M194.3,32.6L98.8,0v200l80.1-44.3L194.3,32.6L194.3,32.6z", 1, "shield-right"], ["cx", "61.7", "cy", "80", "r", "10.7", 1, "eye"], ["cx", "138.3", "cy", "80", "r", "10.7", 1, "eye"], ["stroke-width", "10", "stroke-linecap", "round", "fill", "none", "d", "M138,130.6c0,0-33.5-42.5-76,0", 1, "frown"], ["routerLink", "/", "mat-raised-button", "", "color", "primary"]],
    template: function NotFound_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 2)(4, "path", 3)(5, "circle", 4)(6, "circle", 5)(7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div")(9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "We're sorry. The page you are looking for cannot be found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Go Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-footer");
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, src_app_shared_footer_footer__WEBPACK_IMPORTED_MODULE_0__.Footer],
    styles: ["main[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  font-size: 1.25rem;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 64px;\n}\n\nsvg[_ngcontent-%COMP%] {\n  height: 300px;\n  max-width: 100%;\n  margin-right: 32px;\n}\n\na[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n\n@media (max-width: 720px) {\n  .wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  svg[_ngcontent-%COMP%] {\n    height: auto;\n    max-height: 300px;\n    margin-right: 0;\n    margin-bottom: 64px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQVppQjtBQVVuQjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBakJtQjtBQWVyQjs7QUFLQTtFQUNFLGlCQUFBO0FBRkY7O0FBS0E7RUFDRTtJQUNFLHNCQUFBO0VBRkY7RUFLQTtJQUNFLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFsQ2U7RUErQmpCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIkdmVydGljYWwtc3BhY2luZzogNjRweDtcbiRob3Jpem9udGFsLXNwYWNpbmc6IDMycHg7XG5cbm1haW4ge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAkdmVydGljYWwtc3BhY2luZztcbn1cblxuc3ZnIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6ICRob3Jpem9udGFsLXNwYWNpbmc7XG59XG5cbmEgKyBhIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAud3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAkdmVydGljYWwtc3BhY2luZztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_not-found_index_ts.js.map