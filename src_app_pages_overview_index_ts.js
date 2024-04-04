"use strict";
(self["webpackChunkngx_ute_material_app"] = self["webpackChunkngx_ute_material_app"] || []).push([["src_app_pages_overview_index_ts"],{

/***/ 292:
/*!*****************************************!*\
  !*** ./src/app/pages/overview/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Overview: () => (/* reexport safe */ _overview__WEBPACK_IMPORTED_MODULE_0__.Overview)
/* harmony export */ });
/* harmony import */ var _overview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview */ 3924);


/***/ }),

/***/ 3924:
/*!********************************************!*\
  !*** ./src/app/pages/overview/overview.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Overview: () => (/* binding */ Overview)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var src_app_shared_table_of_contents_table_of_contents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/table-of-contents/table-of-contents */ 1607);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 604);
/* harmony import */ var src_app_shared_header_link_header_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/header-link/header-link */ 7876);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ 336);
/* harmony import */ var src_app_shared_code_parser_code_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/code-parser/code-parser */ 3564);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 168);
/* harmony import */ var src_app_shared_doc_fetcher_doc_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/doc-fetcher/doc-fetcher */ 7676);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ 812);












const _c0 = ["toc"];
function Overview_table_of_contents_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "table-of-contents", 3, 4);
  }
}
class Overview {
  constructor(appRef, elementRef, domSanitizer, componentFactoryResolver, viewContainerRef, injector, docFetcher, route, breakpointObserver, changeDetectorRef) {
    this.appRef = appRef;
    this.elementRef = elementRef;
    this.domSanitizer = domSanitizer;
    this.componentFactoryResolver = componentFactoryResolver;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.docFetcher = docFetcher;
    this.route = route;
    this.breakpointObserver = breakpointObserver;
    this.changeDetectorRef = changeDetectorRef;
    this.docContent = "Loading document...";
    this.showToc = breakpointObserver.observe("(max-width: 1200px)").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(result => {
      this.changeDetectorRef.detectChanges();
      return !result.matches;
    }));
  }
  ngOnInit() {
    this.route.parent?.params.subscribe(p => {
      if (p.id) {
        this.pageItem = p;
        this.loadDoc();
      }
    });
    this.route.parent?.data.subscribe(d => {
      if (d.id) {
        this.pageItem = d;
        this.loadDoc();
      }
    });
  }
  loadDoc() {
    this.docContent = "Loading document...";
    if (this.pageItem) {
      const url = this.pageItem.page ? `assets/docs/${this.pageItem.id}.html` : `assets/docs/components/${this.pageItem.id}.html`;
      this.docFetcher.fetchDocument(url).subscribe({
        next: d => this.updateDocument(d),
        error: e => this.docContent = `Failed to load document: ${this.pageItem.id}. Error: ${e.statusText}`
      });
    } else {
      this.docContent = `Incorrect Url`;
    }
  }
  updateDocument(rawDocument) {
    rawDocument = rawDocument.replace(/href="#([^"]*)"/g, (_m, fragmentUrl) => {
      const absoluteUrl = `${location.pathname}#${fragmentUrl}`;
      return `href="${this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_4__.SecurityContext.URL, absoluteUrl)}"`;
    });
    this.docContent = "";
    this.docItem = [...this.elementRef.nativeElement.children].find(cd => cd.classList.contains("docs-component-overview"));
    this.docItem.innerHTML = rawDocument;
    setTimeout(() => {
      this.updateTableOfContents();
      this.loadLinks();
      this.loadCodes();
    }, 0);
  }
  updateTableOfContents() {
    if (this.tableOfContents) {
      this.tableOfContents.addHeaders("Overview Content", this.elementRef.nativeElement, 0);
      this.tableOfContents.updateScrollPosition();
    }
  }
  loadLinks() {
    const exampleElements = this.elementRef.nativeElement.querySelectorAll(`span[header-link]`);
    [...exampleElements].forEach(element => {
      const portalHost = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__.DomPortalOutlet(element, this.componentFactoryResolver, this.appRef, this.injector);
      const examplePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__.ComponentPortal(src_app_shared_header_link_header_link__WEBPACK_IMPORTED_MODULE_1__.HeaderLink, this.viewContainerRef);
      const exampleViewer = portalHost.attach(examplePortal);
      const exampleViewerComponent = exampleViewer.instance;
      exampleViewerComponent.example = element.getAttribute("header-link");
    });
  }
  loadCodes() {
    const exampleElements = this.elementRef.nativeElement.querySelectorAll(`pre code`);
    [...exampleElements].forEach(element => {
      const exampleViewerDiv = document.createElement("div");
      exampleViewerDiv.classList.add("docs-example-viewer-source");
      element.parentElement.parentNode.replaceChild(exampleViewerDiv, element.parentElement);
      const portalHost = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__.DomPortalOutlet(exampleViewerDiv, this.componentFactoryResolver, this.appRef, this.injector);
      const examplePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__.ComponentPortal(src_app_shared_code_parser_code_parser__WEBPACK_IMPORTED_MODULE_2__.CodeParser, this.viewContainerRef);
      const exampleViewer = portalHost.attach(examplePortal);
      const exampleViewerComponent = exampleViewer.instance;
      exampleViewerComponent.text = element.textContent;
      exampleViewerComponent.addCode(element.parentElement);
    });
  }
  static #_ = this.ɵfac = function Overview_Factory(t) {
    return new (t || Overview)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_doc_fetcher_doc_fetcher__WEBPACK_IMPORTED_MODULE_3__.DocFetcher), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: Overview,
    selectors: [["app-overview"]],
    viewQuery: function Overview_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tableOfContents = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 5,
    consts: [["tabindex", "-1", 1, "cdk-visually-hidden"], [1, "docs-component-view-text-content", "docs-component-overview"], ["container", ".mat-drawer-content", 4, "ngIf"], ["container", ".mat-drawer-content"], ["toc", ""]],
    template: function Overview_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, Overview_table_of_contents_4_Template, 2, 0, "table-of-contents", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Overview for ", ctx.pageItem ? ctx.pageItem.id : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.docContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 3, ctx.showToc));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, src_app_shared_table_of_contents_table_of_contents__WEBPACK_IMPORTED_MODULE_0__.TableOfContents, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3564:
/*!***************************************************!*\
  !*** ./src/app/shared/code-parser/code-parser.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeParser: () => (/* binding */ CodeParser)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 2328);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4672);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 7000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 4648);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ 8800);









class CodeParser {
  constructor(snackbar, clipboard, elementRef) {
    this.snackbar = snackbar;
    this.clipboard = clipboard;
    this.elementRef = elementRef;
  }
  addCode(source) {
    this.elementRef.nativeElement.appendChild(source);
  }
  copySource() {
    if (this.clipboard.copy(this.text)) {
      this.snackbar.open("Code copied", "", {
        duration: 2500
      });
    } else {
      this.snackbar.open("Copy failed. Please try again!", "", {
        duration: 2500
      });
    }
  }
  static #_ = this.ɵfac = function CodeParser_Factory(t) {
    return new (t || CodeParser)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__.Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CodeParser,
    selectors: [["code-parser"]],
    inputs: {
      text: "text"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 0,
    consts: [["mat-icon-button", "", "type", "button", "matTooltip", "Copy example source", "title", "Copy example source", "aria-label", "Copy example source to clipboard", 1, "docs-example-source-copy", "docs-example-button", 3, "click"]],
    template: function CodeParser_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodeParser_Template_button_click_0_listener() {
          return ctx.copySource();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "content_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7676:
/*!***************************************************!*\
  !*** ./src/app/shared/doc-fetcher/doc-fetcher.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocFetcher: () => (/* binding */ DocFetcher)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 7488);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1332);



class DocFetcher {
  constructor(http) {
    this.http = http;
    this.cache = {};
  }
  fetchDocument(url) {
    if (this.cache[url]) {
      return this.cache[url];
    }
    const stream = this.http.get(url, {
      responseType: "text"
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.shareReplay)(1));
    return stream.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(() => this.cache[url] = stream));
  }
  static #_ = this.ɵfac = function DocFetcher_Factory(t) {
    return new (t || DocFetcher)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: DocFetcher,
    factory: DocFetcher.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 7876:
/*!***************************************************!*\
  !*** ./src/app/shared/header-link/header-link.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderLink: () => (/* binding */ HeaderLink)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 2328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 4648);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ 8800);






/**
 * Header link is a component that handles normalizing
 * the anchor jump tags with the current route url.
 *
 * For example:
 *
 *    <a href="#foo">Foo</a>
 *
 * would result in the wrong url, this component
 * combines the current route with that jump link:
 *
 *    <a href="/guide#foo">Foo</a>
 */
class HeaderLink {
  constructor(router, snackbar, clipboard) {
    this.snackbar = snackbar;
    this.clipboard = clipboard;
    this._baseUrl = router.url.split("#")[0];
  }
  getFragmentUrl() {
    return `${this._baseUrl}#${this.example}`;
  }
  copyLink() {
    // Reconstruct the URL using `origin + pathname` so we drop any pre-existing hash.
    const fullUrl = location.origin + location.pathname + "#" + this.example;
    if (this.clipboard.copy(fullUrl)) {
      this.snackbar.open("Link copied", "", {
        duration: 2500
      });
    } else {
      this.snackbar.open("Link copy failed. Please try again!", "", {
        duration: 2500
      });
    }
  }
  static #_ = this.ɵfac = function HeaderLink_Factory(t) {
    return new (t || HeaderLink)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.Clipboard));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderLink,
    selectors: [["header-link"]],
    inputs: {
      example: "example"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 2,
    consts: [["aria-label", "Link to this heading", 1, "docs-markdown-a", 3, "href", "click"]],
    template: function HeaderLink_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderLink_Template_a_click_0_listener() {
          return ctx.copyLink();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.getFragmentUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-describedby", ctx.example);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
    encapsulation: 2
  });
}

/***/ }),

/***/ 1607:
/*!***************************************************************!*\
  !*** ./src/app/shared/table-of-contents/table-of-contents.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableOfContents: () => (/* binding */ TableOfContents)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8688);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3244);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4040);





function TableOfContents_div_0_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("docs-level-", link_r3.type, " docs-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("docs-active", link_r3.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2._rootUrl + "#" + link_r3.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r3.name, " ");
  }
}
function TableOfContents_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableOfContents_div_0_a_4_Template, 2, 7, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const linkSection_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](linkSection_r1 == null ? null : linkSection_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", (linkSection_r1 == null ? null : linkSection_r1.name) + " Table of Contents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", linkSection_r1 == null ? null : linkSection_r1.links);
  }
}
class TableOfContents {
  constructor(_router, _route, _element, _document, _ngZone, _changeDetectorRef) {
    this._router = _router;
    this._route = _route;
    this._element = _element;
    this._document = _document;
    this._ngZone = _ngZone;
    this._changeDetectorRef = _changeDetectorRef;
    this._linkSections = [];
    this._links = [];
    this._rootUrl = this._router.url.split("#")[0];
    this._scrollContainer = null;
    this._urlFragment = "";
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
    this.subscriptions.add(this._route.fragment.subscribe(fragment => {
      if (fragment != null) {
        this._urlFragment = fragment;
        const target = document.getElementById(this._urlFragment);
        if (target) {
          target.scrollIntoView();
        }
      }
    }));
  }
  ngOnInit() {
    // On init, the sidenav content element doesn't yet exist, so it's not possible
    // to subscribe to its scroll event until next tick (when it does exist).
    this._ngZone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        this._scrollContainer = this.container ? this._document.querySelector(this.container) : window;
        if (this._scrollContainer) {
          this.subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this._scrollContainer, "scroll").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(10)).subscribe(() => this.onScroll()));
        }
      });
    });
  }
  ngAfterViewInit() {
    this.updateScrollPosition();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  updateScrollPosition() {
    this._document.getElementById(this._urlFragment)?.scrollIntoView();
  }
  resetHeaders() {
    this._linkSections = [];
    this._links = [];
  }
  addHeaders(sectionName, docViewerContent, sectionIndex = 0) {
    const links = Array.from(docViewerContent.querySelectorAll("h3, h4"), header => {
      // remove the 'link' icon name from the inner text
      const name = header.innerText.trim().replace(/^link/, "");
      const {
        top
      } = header.getBoundingClientRect();
      return {
        name,
        type: header.tagName.toLowerCase(),
        top: top,
        id: header.id,
        active: false
      };
    });
    this._linkSections[sectionIndex] = {
      name: sectionName,
      links
    };
    this._links.push(...links);
  }
  /** Gets the scroll offset of the scroll container */
  getScrollOffset() {
    const {
      top
    } = this._element.nativeElement.getBoundingClientRect();
    const container = this._scrollContainer;
    if (container instanceof HTMLElement) {
      return container.scrollTop + top;
    }
    if (container) {
      return container.pageYOffset + top;
    }
  }
  onScroll() {
    const scrollOffset = this.getScrollOffset();
    let hasChanged = false;
    if (scrollOffset == null) {
      return;
    }
    for (let i = 0; i < this._links.length; i++) {
      // A link is considered active if the page is scrolled past the
      // anchor without also being scrolled passed the next link.
      const currentLink = this._links[i];
      const nextLink = this._links[i + 1];
      const isActive = scrollOffset >= currentLink.top && (!nextLink || nextLink.top >= scrollOffset);
      if (isActive !== currentLink.active) {
        currentLink.active = isActive;
        hasChanged = true;
      }
    }
    if (hasChanged) {
      // The scroll listener runs outside of the Angular zone so
      // we need to bring it back in only when something has changed.
      this._ngZone.run(() => this._changeDetectorRef.markForCheck());
    }
  }
  static #_ = this.ɵfac = function TableOfContents_Factory(t) {
    return new (t || TableOfContents)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TableOfContents,
    selectors: [["table-of-contents"]],
    inputs: {
      container: "container"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "docs-toc-container", 4, "ngFor", "ngForOf"], [1, "docs-toc-container"], [1, "docs-toc-heading"], [3, "href", "class", "docs-active", 4, "ngFor", "ngForOf"], [3, "href"]],
    template: function TableOfContents_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableOfContents_div_0_Template, 5, 3, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._linkSections);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgFor],
    styles: ["[_nghost-%COMP%] {\n  font-size: 13px;\n  width: 19%;\n  position: sticky;\n  top: 0;\n  padding-left: 25px;\n  box-sizing: border-box;\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.docs-toc-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 0 10px 10px;\n}\n.docs-toc-container[_ngcontent-%COMP%]    + .docs-toc-container[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n\n.docs-toc-heading[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 13px;\n  font-weight: bold;\n  text-transform: capitalize;\n}\n\na[_ngcontent-%COMP%] {\n  line-height: 16px;\n  margin: 8px 0 0;\n  position: relative;\n  text-decoration: none;\n  display: block;\n  text-overflow: ellipsis;\n  width: 100%;\n  overflow: hidden;\n}\n\n.docs-level-h4[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3RhYmxlLW9mLWNvbnRlbnRzL3RhYmxlLW9mLWNvbnRlbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBRUEsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7QUFBRjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSjs7QUFJQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0FBREYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLy8gV2lkdGggaXMgY29udGFpbmVyIHdpZHRoIG1pbnVzIGNvbnRlbnQgd2lkdGhcbiAgd2lkdGg6IDE5JTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZG9jcy10b2MtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAwIDEwcHggMTBweDtcblxuICAmICsgLmRvY3MtdG9jLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgfVxufVxuXG4uZG9jcy10b2MtaGVhZGluZyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbmEge1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbWFyZ2luOiA4cHggMCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRvY3MtbGV2ZWwtaDQge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8800:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/clipboard.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDK_COPY_TO_CLIPBOARD_CONFIG: () => (/* binding */ CDK_COPY_TO_CLIPBOARD_CONFIG),
/* harmony export */   CdkCopyToClipboard: () => (/* binding */ CdkCopyToClipboard),
/* harmony export */   Clipboard: () => (/* binding */ Clipboard),
/* harmony export */   ClipboardModule: () => (/* binding */ ClipboardModule),
/* harmony export */   PendingCopy: () => (/* binding */ PendingCopy)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);




/**
 * A pending copy-to-clipboard operation.
 *
 * The implementation of copying text to the clipboard modifies the DOM and
 * forces a re-layout. This re-layout can take too long if the string is large,
 * causing the execCommand('copy') to happen too long after the user clicked.
 * This results in the browser refusing to copy. This object lets the
 * re-layout happen in a separate tick from copying by providing a copy function
 * that can be called later.
 *
 * Destroy must be called when no longer in use, regardless of whether `copy` is
 * called.
 */
class PendingCopy {
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement('textarea');
    const styles = textarea.style;
    // Hide the element for display and accessibility. Set a fixed position so the page layout
    // isn't affected. We use `fixed` with `top: 0`, because focus is moved into the textarea
    // for a split second and if it's off-screen, some browsers will attempt to scroll it into view.
    styles.position = 'fixed';
    styles.top = styles.opacity = '0';
    styles.left = '-999em';
    textarea.setAttribute('aria-hidden', 'true');
    textarea.value = text;
    // Making the textarea `readonly` prevents the screen from jumping on iOS Safari (see #25169).
    textarea.readOnly = true;
    // The element needs to be inserted into the fullscreen container, if the page
    // is in fullscreen mode, otherwise the browser won't execute the copy command.
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  /** Finishes copying the text. */
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      // Older browsers could throw if copy is not supported.
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand('copy');
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
      // Discard error.
      // Initial setting of {@code successful} will represent failure here.
    }
    return successful;
  }
  /** Cleans up DOM changes used to perform the copy operation. */
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = undefined;
    }
  }
}

/**
 * A service for copying text to the clipboard.
 */
class Clipboard {
  constructor(document) {
    this._document = document;
  }
  /**
   * Copies the provided text into the user's clipboard.
   *
   * @param text The string to copy.
   * @returns Whether the operation was successful.
   */
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  /**
   * Prepares a string to be copied later. This is useful for large strings
   * which take too long to successfully render and be copied in the same tick.
   *
   * The caller must call `destroy` on the returned `PendingCopy`.
   *
   * @param text The string to copy.
   * @returns the pending copy operation.
   */
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
  static #_ = this.ɵfac = function Clipboard_Factory(t) {
    return new (t || Clipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: Clipboard,
    factory: Clipboard.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Clipboard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();

/** Injection token that can be used to provide the default options to `CdkCopyToClipboard`. */
const CDK_COPY_TO_CLIPBOARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CDK_COPY_TO_CLIPBOARD_CONFIG');
/**
 * Provides behavior for a button that when clicked copies content into user's
 * clipboard.
 */
class CdkCopyToClipboard {
  constructor(_clipboard, _ngZone, config) {
    this._clipboard = _clipboard;
    this._ngZone = _ngZone;
    /** Content to be copied. */
    this.text = '';
    /**
     * How many times to attempt to copy the text. This may be necessary for longer text, because
     * the browser needs time to fill an intermediate textarea element and copy the content.
     */
    this.attempts = 1;
    /**
     * Emits when some text is copied to the clipboard. The
     * emitted value indicates whether copying was successful.
     */
    this.copied = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Copies that are currently being attempted. */
    this._pending = new Set();
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  /** Copies the current text to the clipboard. */
  copy(attempts = this.attempts) {
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          // We use 1 for the timeout since it's more predictable when flushing in unit tests.
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach(copy => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
  static #_ = this.ɵfac = function CdkCopyToClipboard_Factory(t) {
    return new (t || CdkCopyToClipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_COPY_TO_CLIPBOARD_CONFIG, 8));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CdkCopyToClipboard,
    selectors: [["", "cdkCopyToClipboard", ""]],
    hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkCopyToClipboard_click_HostBindingHandler() {
          return ctx.copy();
        });
      }
    },
    inputs: {
      text: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "cdkCopyToClipboard", "text"],
      attempts: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "cdkCopyToClipboardAttempts", "attempts"]
    },
    outputs: {
      copied: "cdkCopyToClipboardCopied"
    },
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkCopyToClipboard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkCopyToClipboard]',
      host: {
        '(click)': 'copy()'
      },
      standalone: true
    }]
  }], () => [{
    type: Clipboard
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [CDK_COPY_TO_CLIPBOARD_CONFIG]
    }]
  }], {
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkCopyToClipboard']
    }],
    attempts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkCopyToClipboardAttempts']
    }],
    copied: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['cdkCopyToClipboardCopied']
    }]
  });
})();
class ClipboardModule {
  static #_ = this.ɵfac = function ClipboardModule_Factory(t) {
    return new (t || ClipboardModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: ClipboardModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClipboardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4648:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/snack-bar.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_SNACK_BAR_DATA: () => (/* binding */ MAT_SNACK_BAR_DATA),
/* harmony export */   MAT_SNACK_BAR_DEFAULT_OPTIONS: () => (/* binding */ MAT_SNACK_BAR_DEFAULT_OPTIONS),
/* harmony export */   MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   MatSnackBar: () => (/* binding */ MatSnackBar),
/* harmony export */   MatSnackBarAction: () => (/* binding */ MatSnackBarAction),
/* harmony export */   MatSnackBarActions: () => (/* binding */ MatSnackBarActions),
/* harmony export */   MatSnackBarConfig: () => (/* binding */ MatSnackBarConfig),
/* harmony export */   MatSnackBarContainer: () => (/* binding */ MatSnackBarContainer),
/* harmony export */   MatSnackBarLabel: () => (/* binding */ MatSnackBarLabel),
/* harmony export */   MatSnackBarModule: () => (/* binding */ MatSnackBarModule),
/* harmony export */   MatSnackBarRef: () => (/* binding */ MatSnackBarRef),
/* harmony export */   SimpleSnackBar: () => (/* binding */ SimpleSnackBar),
/* harmony export */   matSnackBarAnimations: () => (/* binding */ matSnackBarAnimations)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4672);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5100);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 3291);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ 336);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ 9664);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ 2664);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ 812);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ 768);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 4364);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 2544);
















/** Maximum amount of milliseconds that can be passed into setTimeout. */
function SimpleSnackBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleSnackBar_Conditional_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.action());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.action, " ");
  }
}
const _c0 = ["label"];
function MatSnackBarContainer_ng_template_4_Template(rf, ctx) {}
const MAX_TIMEOUT = Math.pow(2, 31) - 1;
/**
 * Reference to a snack bar dispatched from the snack bar service.
 */
class MatSnackBarRef {
  constructor(containerInstance, _overlayRef) {
    this._overlayRef = _overlayRef;
    /** Subject for notifying the user that the snack bar has been dismissed. */
    this._afterDismissed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subject for notifying the user that the snack bar has opened and appeared. */
    this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subject for notifying the user that the snack bar action was called. */
    this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Whether the snack bar was dismissed using the action button. */
    this._dismissedByAction = false;
    this.containerInstance = containerInstance;
    containerInstance._onExit.subscribe(() => this._finishDismiss());
  }
  /** Dismisses the snack bar. */
  dismiss() {
    if (!this._afterDismissed.closed) {
      this.containerInstance.exit();
    }
    clearTimeout(this._durationTimeoutId);
  }
  /** Marks the snackbar action clicked. */
  dismissWithAction() {
    if (!this._onAction.closed) {
      this._dismissedByAction = true;
      this._onAction.next();
      this._onAction.complete();
      this.dismiss();
    }
    clearTimeout(this._durationTimeoutId);
  }
  /**
   * Marks the snackbar action clicked.
   * @deprecated Use `dismissWithAction` instead.
   * @breaking-change 8.0.0
   */
  closeWithAction() {
    this.dismissWithAction();
  }
  /** Dismisses the snack bar after some duration */
  _dismissAfter(duration) {
    // Note that we need to cap the duration to the maximum value for setTimeout, because
    // it'll revert to 1 if somebody passes in something greater (e.g. `Infinity`). See #17234.
    this._durationTimeoutId = setTimeout(() => this.dismiss(), Math.min(duration, MAX_TIMEOUT));
  }
  /** Marks the snackbar as opened */
  _open() {
    if (!this._afterOpened.closed) {
      this._afterOpened.next();
      this._afterOpened.complete();
    }
  }
  /** Cleans up the DOM after closing. */
  _finishDismiss() {
    this._overlayRef.dispose();
    if (!this._onAction.closed) {
      this._onAction.complete();
    }
    this._afterDismissed.next({
      dismissedByAction: this._dismissedByAction
    });
    this._afterDismissed.complete();
    this._dismissedByAction = false;
  }
  /** Gets an observable that is notified when the snack bar is finished closing. */
  afterDismissed() {
    return this._afterDismissed;
  }
  /** Gets an observable that is notified when the snack bar has opened and appeared. */
  afterOpened() {
    return this.containerInstance._onEnter;
  }
  /** Gets an observable that is notified when the snack bar action is called. */
  onAction() {
    return this._onAction;
  }
}

/** Injection token that can be used to access the data that was passed in to a snack bar. */
const MAT_SNACK_BAR_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatSnackBarData');
/**
 * Configuration used when opening a snack-bar.
 */
class MatSnackBarConfig {
  constructor() {
    /** The politeness level for the MatAriaLiveAnnouncer announcement. */
    this.politeness = 'assertive';
    /**
     * Message to be announced by the LiveAnnouncer. When opening a snackbar without a custom
     * component or template, the announcement message will default to the specified message.
     */
    this.announcementMessage = '';
    /** The length of time in milliseconds to wait before automatically dismissing the snack bar. */
    this.duration = 0;
    /** Data being injected into the child component. */
    this.data = null;
    /** The horizontal position to place the snack bar. */
    this.horizontalPosition = 'center';
    /** The vertical position to place the snack bar. */
    this.verticalPosition = 'bottom';
  }
}

/** Directive that should be applied to the text element to be rendered in the snack bar. */
class MatSnackBarLabel {
  static #_ = this.ɵfac = function MatSnackBarLabel_Factory(t) {
    return new (t || MatSnackBarLabel)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatSnackBarLabel,
    selectors: [["", "matSnackBarLabel", ""]],
    hostAttrs: [1, "mat-mdc-snack-bar-label", "mdc-snackbar__label"],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSnackBarLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `[matSnackBarLabel]`,
      standalone: true,
      host: {
        'class': 'mat-mdc-snack-bar-label mdc-snackbar__label'
      }
    }]
  }], null, null);
})();
/** Directive that should be applied to the element containing the snack bar's action buttons. */
class MatSnackBarActions {
  static #_ = this.ɵfac = function MatSnackBarActions_Factory(t) {
    return new (t || MatSnackBarActions)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatSnackBarActions,
    selectors: [["", "matSnackBarActions", ""]],
    hostAttrs: [1, "mat-mdc-snack-bar-actions", "mdc-snackbar__actions"],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSnackBarActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `[matSnackBarActions]`,
      standalone: true,
      host: {
        'class': 'mat-mdc-snack-bar-actions mdc-snackbar__actions'
      }
    }]
  }], null, null);
})();
/** Directive that should be applied to each of the snack bar's action buttons. */
class MatSnackBarAction {
  static #_ = this.ɵfac = function MatSnackBarAction_Factory(t) {
    return new (t || MatSnackBarAction)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatSnackBarAction,
    selectors: [["", "matSnackBarAction", ""]],
    hostAttrs: [1, "mat-mdc-snack-bar-action", "mdc-snackbar__action"],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSnackBarAction, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `[matSnackBarAction]`,
      standalone: true,
      host: {
        'class': 'mat-mdc-snack-bar-action mdc-snackbar__action'
      }
    }]
  }], null, null);
})();
class SimpleSnackBar {
  constructor(snackBarRef, data) {
    this.snackBarRef = snackBarRef;
    this.data = data;
  }
  /** Performs the action on the snack bar. */
  action() {
    this.snackBarRef.dismissWithAction();
  }
  /** If the action button should be shown. */
  get hasAction() {
    return !!this.data.action;
  }
  static #_ = this.ɵfac = function SimpleSnackBar_Factory(t) {
    return new (t || SimpleSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SNACK_BAR_DATA));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SimpleSnackBar,
    selectors: [["simple-snack-bar"]],
    hostAttrs: [1, "mat-mdc-simple-snack-bar"],
    exportAs: ["matSnackBar"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 2,
    consts: [["matSnackBarLabel", ""], ["matSnackBarActions", ""], ["mat-button", "", "matSnackBarAction", "", 3, "click"]],
    template: function SimpleSnackBar_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimpleSnackBar_Conditional_2_Template, 3, 1, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.message, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, ctx.hasAction ? 2 : -1);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
    styles: [".mat-mdc-simple-snack-bar{display:flex}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleSnackBar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'simple-snack-bar',
      exportAs: 'matSnackBar',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
      standalone: true,
      host: {
        'class': 'mat-mdc-simple-snack-bar'
      },
      template: "<div matSnackBarLabel>\n  {{data.message}}\n</div>\n\n@if (hasAction) {\n  <div matSnackBarActions>\n    <button mat-button matSnackBarAction (click)=\"action()\">\n      {{data.action}}\n    </button>\n  </div>\n}\n",
      styles: [".mat-mdc-simple-snack-bar{display:flex}"]
    }]
  }], () => [{
    type: MatSnackBarRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_SNACK_BAR_DATA]
    }]
  }], null);
})();

/**
 * Animations used by the Material snack bar.
 * @docs-private
 */
const matSnackBarAnimations = {
  /** Animation that shows and hides a snack bar. */
  snackBarState: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('state', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('void, hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
    transform: 'scale(0.8)',
    opacity: 0
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
    transform: 'scale(1)',
    opacity: 1
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('* => visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('* => void, * => hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('75ms cubic-bezier(0.4, 0.0, 1, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
    opacity: 0
  })))])
};
let uniqueId = 0;
/**
 * Internal component that wraps user-provided snack bar content.
 * @docs-private
 */
class MatSnackBarContainer extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.BasePortalOutlet {
  constructor(_ngZone, _elementRef, _changeDetectorRef, _platform, /** The snack bar configuration. */
  snackBarConfig) {
    super();
    this._ngZone = _ngZone;
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._platform = _platform;
    this.snackBarConfig = snackBarConfig;
    this._document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT);
    this._trackedModals = new Set();
    /** The number of milliseconds to wait before announcing the snack bar's content. */
    this._announceDelay = 150;
    /** Whether the component has been destroyed. */
    this._destroyed = false;
    /** Subject for notifying that the snack bar has announced to screen readers. */
    this._onAnnounce = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subject for notifying that the snack bar has exited from view. */
    this._onExit = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subject for notifying that the snack bar has finished entering the view. */
    this._onEnter = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** The state of the snack bar animations. */
    this._animationState = 'void';
    /** Unique ID of the aria-live element. */
    this._liveElementId = `mat-snack-bar-container-live-${uniqueId++}`;
    /**
     * Attaches a DOM portal to the snack bar container.
     * @deprecated To be turned into a method.
     * @breaking-change 10.0.0
     */
    this.attachDomPortal = portal => {
      this._assertNotAttached();
      const result = this._portalOutlet.attachDomPortal(portal);
      this._afterPortalAttached();
      return result;
    };
    // Use aria-live rather than a live role like 'alert' or 'status'
    // because NVDA and JAWS have show inconsistent behavior with live roles.
    if (snackBarConfig.politeness === 'assertive' && !snackBarConfig.announcementMessage) {
      this._live = 'assertive';
    } else if (snackBarConfig.politeness === 'off') {
      this._live = 'off';
    } else {
      this._live = 'polite';
    }
    // Only set role for Firefox. Set role based on aria-live because setting role="alert" implies
    // aria-live="assertive" which may cause issues if aria-live is set to "polite" above.
    if (this._platform.FIREFOX) {
      if (this._live === 'polite') {
        this._role = 'status';
      }
      if (this._live === 'assertive') {
        this._role = 'alert';
      }
    }
  }
  /** Attach a component portal as content to this snack bar container. */
  attachComponentPortal(portal) {
    this._assertNotAttached();
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._afterPortalAttached();
    return result;
  }
  /** Attach a template portal as content to this snack bar container. */
  attachTemplatePortal(portal) {
    this._assertNotAttached();
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._afterPortalAttached();
    return result;
  }
  /** Handle end of animations, updating the state of the snackbar. */
  onAnimationEnd(event) {
    const {
      fromState,
      toState
    } = event;
    if (toState === 'void' && fromState !== 'void' || toState === 'hidden') {
      this._completeExit();
    }
    if (toState === 'visible') {
      // Note: we shouldn't use `this` inside the zone callback,
      // because it can cause a memory leak.
      const onEnter = this._onEnter;
      this._ngZone.run(() => {
        onEnter.next();
        onEnter.complete();
      });
    }
  }
  /** Begin animation of snack bar entrance into view. */
  enter() {
    if (!this._destroyed) {
      this._animationState = 'visible';
      // _animationState lives in host bindings and `detectChanges` does not refresh host bindings
      // so we have to call `markForCheck` to ensure the host view is refreshed eventually.
      this._changeDetectorRef.markForCheck();
      this._changeDetectorRef.detectChanges();
      this._screenReaderAnnounce();
    }
  }
  /** Begin animation of the snack bar exiting from view. */
  exit() {
    // It's common for snack bars to be opened by random outside calls like HTTP requests or
    // errors. Run inside the NgZone to ensure that it functions correctly.
    this._ngZone.run(() => {
      // Note: this one transitions to `hidden`, rather than `void`, in order to handle the case
      // where multiple snack bars are opened in quick succession (e.g. two consecutive calls to
      // `MatSnackBar.open`).
      this._animationState = 'hidden';
      this._changeDetectorRef.markForCheck();
      // Mark this element with an 'exit' attribute to indicate that the snackbar has
      // been dismissed and will soon be removed from the DOM. This is used by the snackbar
      // test harness.
      this._elementRef.nativeElement.setAttribute('mat-exit', '');
      // If the snack bar hasn't been announced by the time it exits it wouldn't have been open
      // long enough to visually read it either, so clear the timeout for announcing.
      clearTimeout(this._announceTimeoutId);
    });
    return this._onExit;
  }
  /** Makes sure the exit callbacks have been invoked when the element is destroyed. */
  ngOnDestroy() {
    this._destroyed = true;
    this._clearFromModals();
    this._completeExit();
  }
  /**
   * Removes the element in a microtask. Helps prevent errors where we end up
   * removing an element which is in the middle of an animation.
   */
  _completeExit() {
    queueMicrotask(() => {
      this._onExit.next();
      this._onExit.complete();
    });
  }
  /**
   * Called after the portal contents have been attached. Can be
   * used to modify the DOM once it's guaranteed to be in place.
   */
  _afterPortalAttached() {
    const element = this._elementRef.nativeElement;
    const panelClasses = this.snackBarConfig.panelClass;
    if (panelClasses) {
      if (Array.isArray(panelClasses)) {
        // Note that we can't use a spread here, because IE doesn't support multiple arguments.
        panelClasses.forEach(cssClass => element.classList.add(cssClass));
      } else {
        element.classList.add(panelClasses);
      }
    }
    this._exposeToModals();
    // Check to see if the attached component or template uses the MDC template structure,
    // specifically the MDC label. If not, the container should apply the MDC label class to this
    // component's label container, which will apply MDC's label styles to the attached view.
    const label = this._label.nativeElement;
    const labelClass = 'mdc-snackbar__label';
    label.classList.toggle(labelClass, !label.querySelector(`.${labelClass}`));
  }
  /**
   * Some browsers won't expose the accessibility node of the live element if there is an
   * `aria-modal` and the live element is outside of it. This method works around the issue by
   * pointing the `aria-owns` of all modals to the live element.
   */
  _exposeToModals() {
    // TODO(http://github.com/angular/components/issues/26853): consider de-duplicating this with the
    // `LiveAnnouncer` and any other usages.
    //
    // Note that the selector here is limited to CDK overlays at the moment in order to reduce the
    // section of the DOM we need to look through. This should cover all the cases we support, but
    // the selector can be expanded if it turns out to be too narrow.
    const id = this._liveElementId;
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i];
      const ariaOwns = modal.getAttribute('aria-owns');
      this._trackedModals.add(modal);
      if (!ariaOwns) {
        modal.setAttribute('aria-owns', id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute('aria-owns', ariaOwns + ' ' + id);
      }
    }
  }
  /** Clears the references to the live element from any modals it was added to. */
  _clearFromModals() {
    this._trackedModals.forEach(modal => {
      const ariaOwns = modal.getAttribute('aria-owns');
      if (ariaOwns) {
        const newValue = ariaOwns.replace(this._liveElementId, '').trim();
        if (newValue.length > 0) {
          modal.setAttribute('aria-owns', newValue);
        } else {
          modal.removeAttribute('aria-owns');
        }
      }
    });
    this._trackedModals.clear();
  }
  /** Asserts that no content is already attached to the container. */
  _assertNotAttached() {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('Attempting to attach snack bar content after content is already attached');
    }
  }
  /**
   * Starts a timeout to move the snack bar content to the live region so screen readers will
   * announce it.
   */
  _screenReaderAnnounce() {
    if (!this._announceTimeoutId) {
      this._ngZone.runOutsideAngular(() => {
        this._announceTimeoutId = setTimeout(() => {
          const inertElement = this._elementRef.nativeElement.querySelector('[aria-hidden]');
          const liveElement = this._elementRef.nativeElement.querySelector('[aria-live]');
          if (inertElement && liveElement) {
            // If an element in the snack bar content is focused before being moved
            // track it and restore focus after moving to the live region.
            let focusedElement = null;
            if (this._platform.isBrowser && document.activeElement instanceof HTMLElement && inertElement.contains(document.activeElement)) {
              focusedElement = document.activeElement;
            }
            inertElement.removeAttribute('aria-hidden');
            liveElement.appendChild(inertElement);
            focusedElement?.focus();
            this._onAnnounce.next();
            this._onAnnounce.complete();
          }
        }, this._announceDelay);
      });
    }
  }
  static #_ = this.ɵfac = function MatSnackBarContainer_Factory(t) {
    return new (t || MatSnackBarContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSnackBarConfig));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatSnackBarContainer,
    selectors: [["mat-snack-bar-container"]],
    viewQuery: function MatSnackBarContainer_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortalOutlet, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
      }
    },
    hostAttrs: [1, "mdc-snackbar", "mat-mdc-snack-bar-container", "mdc-snackbar--open"],
    hostVars: 1,
    hostBindings: function MatSnackBarContainer_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostListener"]("@state.done", function MatSnackBarContainer_animation_state_done_HostBindingHandler($event) {
          return ctx.onAnimationEnd($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@state", ctx._animationState);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 3,
    consts: [[1, "mdc-snackbar__surface"], [1, "mat-mdc-snack-bar-label"], ["label", ""], ["aria-hidden", "true"], ["cdkPortalOutlet", ""]],
    template: function MatSnackBarContainer_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1, 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatSnackBarContainer_ng_template_4_Template, 0, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-live", ctx._live)("role", ctx._role)("id", ctx._liveElementId);
      }
    },
    dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortalOutlet],
    styles: [".mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape)}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size);font-family:var(--mdc-snackbar-supporting-text-font);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}"],
    encapsulation: 2,
    data: {
      animation: [matSnackBarAnimations.snackBarState]
    }
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSnackBarContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-snack-bar-container',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      animations: [matSnackBarAnimations.snackBarState],
      standalone: true,
      imports: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortalOutlet],
      host: {
        'class': 'mdc-snackbar mat-mdc-snack-bar-container mdc-snackbar--open',
        '[@state]': '_animationState',
        '(@state.done)': 'onAnimationEnd($event)'
      },
      template: "<div class=\"mdc-snackbar__surface\">\n  <!--\n    This outer label wrapper will have the class `mdc-snackbar__label` applied if\n    the attached template/component does not contain it.\n  -->\n  <div class=\"mat-mdc-snack-bar-label\" #label>\n    <!-- Initialy holds the snack bar content, will be empty after announcing to screen readers. -->\n    <div aria-hidden=\"true\">\n      <ng-template cdkPortalOutlet />\n    </div>\n\n    <!-- Will receive the snack bar content from the non-live div, move will happen a short delay after opening -->\n    <div [attr.aria-live]=\"_live\" [attr.role]=\"_role\" [attr.id]=\"_liveElementId\"></div>\n  </div>\n</div>\n",
      styles: [".mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape)}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size);font-family:var(--mdc-snackbar-supporting-text-font);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform
  }, {
    type: MatSnackBarConfig
  }], {
    _portalOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortalOutlet, {
        static: true
      }]
    }],
    _label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['label', {
        static: true
      }]
    }]
  });
})();

/** @docs-private */
function MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY() {
  return new MatSnackBarConfig();
}
/** Injection token that can be used to specify default snack bar. */
const MAT_SNACK_BAR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-snack-bar-default-options', {
  providedIn: 'root',
  factory: MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY
});
/**
 * Service to dispatch Material Design snack bar messages.
 */
class MatSnackBar {
  /** Reference to the currently opened snackbar at *any* level. */
  get _openedSnackBarRef() {
    const parent = this._parentSnackBar;
    return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
  }
  set _openedSnackBarRef(value) {
    if (this._parentSnackBar) {
      this._parentSnackBar._openedSnackBarRef = value;
    } else {
      this._snackBarRefAtThisLevel = value;
    }
  }
  constructor(_overlay, _live, _injector, _breakpointObserver, _parentSnackBar, _defaultConfig) {
    this._overlay = _overlay;
    this._live = _live;
    this._injector = _injector;
    this._breakpointObserver = _breakpointObserver;
    this._parentSnackBar = _parentSnackBar;
    this._defaultConfig = _defaultConfig;
    /**
     * Reference to the current snack bar in the view *at this level* (in the Angular injector tree).
     * If there is a parent snack-bar service, all operations should delegate to that parent
     * via `_openedSnackBarRef`.
     */
    this._snackBarRefAtThisLevel = null;
    /** The component that should be rendered as the snack bar's simple component. */
    this.simpleSnackBarComponent = SimpleSnackBar;
    /** The container component that attaches the provided template or component. */
    this.snackBarContainerComponent = MatSnackBarContainer;
    /** The CSS class to apply for handset mode. */
    this.handsetCssClass = 'mat-mdc-snack-bar-handset';
  }
  /**
   * Creates and dispatches a snack bar with a custom component for the content, removing any
   * currently opened snack bars.
   *
   * @param component Component to be instantiated.
   * @param config Extra configuration for the snack bar.
   */
  openFromComponent(component, config) {
    return this._attach(component, config);
  }
  /**
   * Creates and dispatches a snack bar with a custom template for the content, removing any
   * currently opened snack bars.
   *
   * @param template Template to be instantiated.
   * @param config Extra configuration for the snack bar.
   */
  openFromTemplate(template, config) {
    return this._attach(template, config);
  }
  /**
   * Opens a snackbar with a message and an optional action.
   * @param message The message to show in the snackbar.
   * @param action The label for the snackbar action.
   * @param config Additional configuration options for the snackbar.
   */
  open(message, action = '', config) {
    const _config = {
      ...this._defaultConfig,
      ...config
    };
    // Since the user doesn't have access to the component, we can
    // override the data to pass in our own message and action.
    _config.data = {
      message,
      action
    };
    // Since the snack bar has `role="alert"`, we don't
    // want to announce the same message twice.
    if (_config.announcementMessage === message) {
      _config.announcementMessage = undefined;
    }
    return this.openFromComponent(this.simpleSnackBarComponent, _config);
  }
  /**
   * Dismisses the currently-visible snack bar.
   */
  dismiss() {
    if (this._openedSnackBarRef) {
      this._openedSnackBarRef.dismiss();
    }
  }
  ngOnDestroy() {
    // Only dismiss the snack bar at the current level on destroy.
    if (this._snackBarRefAtThisLevel) {
      this._snackBarRefAtThisLevel.dismiss();
    }
  }
  /**
   * Attaches the snack bar container component to the overlay.
   */
  _attachSnackBarContainer(overlayRef, config) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
      parent: userInjector || this._injector,
      providers: [{
        provide: MatSnackBarConfig,
        useValue: config
      }]
    });
    const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.ComponentPortal(this.snackBarContainerComponent, config.viewContainerRef, injector);
    const containerRef = overlayRef.attach(containerPortal);
    containerRef.instance.snackBarConfig = config;
    return containerRef.instance;
  }
  /**
   * Places a new component or a template as the content of the snack bar container.
   */
  _attach(content, userConfig) {
    const config = {
      ...new MatSnackBarConfig(),
      ...this._defaultConfig,
      ...userConfig
    };
    const overlayRef = this._createOverlay(config);
    const container = this._attachSnackBarContainer(overlayRef, config);
    const snackBarRef = new MatSnackBarRef(container, overlayRef);
    if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef) {
      const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.TemplatePortal(content, null, {
        $implicit: config.data,
        snackBarRef
      });
      snackBarRef.instance = container.attachTemplatePortal(portal);
    } else {
      const injector = this._createInjector(config, snackBarRef);
      const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.ComponentPortal(content, undefined, injector);
      const contentRef = container.attachComponentPortal(portal);
      // We can't pass this via the injector, because the injector is created earlier.
      snackBarRef.instance = contentRef.instance;
    }
    // Subscribe to the breakpoint observer and attach the mat-snack-bar-handset class as
    // appropriate. This class is applied to the overlay element because the overlay must expand to
    // fill the width of the screen for full width snackbars.
    this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.Breakpoints.HandsetPortrait).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(overlayRef.detachments())).subscribe(state => {
      overlayRef.overlayElement.classList.toggle(this.handsetCssClass, state.matches);
    });
    if (config.announcementMessage) {
      // Wait until the snack bar contents have been announced then deliver this message.
      container._onAnnounce.subscribe(() => {
        this._live.announce(config.announcementMessage, config.politeness);
      });
    }
    this._animateSnackBar(snackBarRef, config);
    this._openedSnackBarRef = snackBarRef;
    return this._openedSnackBarRef;
  }
  /** Animates the old snack bar out and the new one in. */
  _animateSnackBar(snackBarRef, config) {
    // When the snackbar is dismissed, clear the reference to it.
    snackBarRef.afterDismissed().subscribe(() => {
      // Clear the snackbar ref if it hasn't already been replaced by a newer snackbar.
      if (this._openedSnackBarRef == snackBarRef) {
        this._openedSnackBarRef = null;
      }
      if (config.announcementMessage) {
        this._live.clear();
      }
    });
    if (this._openedSnackBarRef) {
      // If a snack bar is already in view, dismiss it and enter the
      // new snack bar after exit animation is complete.
      this._openedSnackBarRef.afterDismissed().subscribe(() => {
        snackBarRef.containerInstance.enter();
      });
      this._openedSnackBarRef.dismiss();
    } else {
      // If no snack bar is in view, enter the new snack bar.
      snackBarRef.containerInstance.enter();
    }
    // If a dismiss timeout is provided, set up dismiss based on after the snackbar is opened.
    if (config.duration && config.duration > 0) {
      snackBarRef.afterOpened().subscribe(() => snackBarRef._dismissAfter(config.duration));
    }
  }
  /**
   * Creates a new overlay and places it in the correct location.
   * @param config The user-specified snack bar config.
   */
  _createOverlay(config) {
    const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayConfig();
    overlayConfig.direction = config.direction;
    let positionStrategy = this._overlay.position().global();
    // Set horizontal position.
    const isRtl = config.direction === 'rtl';
    const isLeft = config.horizontalPosition === 'left' || config.horizontalPosition === 'start' && !isRtl || config.horizontalPosition === 'end' && isRtl;
    const isRight = !isLeft && config.horizontalPosition !== 'center';
    if (isLeft) {
      positionStrategy.left('0');
    } else if (isRight) {
      positionStrategy.right('0');
    } else {
      positionStrategy.centerHorizontally();
    }
    // Set horizontal position.
    if (config.verticalPosition === 'top') {
      positionStrategy.top('0');
    } else {
      positionStrategy.bottom('0');
    }
    overlayConfig.positionStrategy = positionStrategy;
    return this._overlay.create(overlayConfig);
  }
  /**
   * Creates an injector to be used inside of a snack bar component.
   * @param config Config that was used to create the snack bar.
   * @param snackBarRef Reference to the snack bar.
   */
  _createInjector(config, snackBarRef) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
      parent: userInjector || this._injector,
      providers: [{
        provide: MatSnackBarRef,
        useValue: snackBarRef
      }, {
        provide: MAT_SNACK_BAR_DATA,
        useValue: config.data
      }]
    });
  }
  static #_ = this.ɵfac = function MatSnackBar_Factory(t) {
    return new (t || MatSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatSnackBar, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_SNACK_BAR_DEFAULT_OPTIONS));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MatSnackBar,
    factory: MatSnackBar.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSnackBar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.Overlay
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.LiveAnnouncer
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
  }, {
    type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.BreakpointObserver
  }, {
    type: MatSnackBar,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
    }]
  }, {
    type: MatSnackBarConfig,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_SNACK_BAR_DEFAULT_OPTIONS]
    }]
  }], null);
})();
const DIRECTIVES = [MatSnackBarContainer, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction];
class MatSnackBarModule {
  static #_ = this.ɵfac = function MatSnackBarModule_Factory(t) {
    return new (t || MatSnackBarModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatSnackBarModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [MatSnackBar],
    imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.PortalModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule, SimpleSnackBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSnackBarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.PortalModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule, SimpleSnackBar, ...DIRECTIVES],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule, ...DIRECTIVES],
      providers: [MatSnackBar]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_pages_overview_index_ts.js.map