"use strict";
(self["webpackChunkngx_ute_material_app"] = self["webpackChunkngx_ute_material_app"] || []).push([["src_app_pages_example_index_ts"],{

/***/ 6100:
/*!**********************************************************************************!*\
  !*** ./projects/ngx-ute-material/datepicker-settings/src/datepicker-settings.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UteDateFormat: () => (/* binding */ UteDateFormat),
/* harmony export */   UteDatepickerSettings: () => (/* binding */ UteDatepickerSettings)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 2544);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ 4392);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8688);







const UteDateFormat = {
  parse: {
    dateInput: "input"
  },
  display: {
    dateInput: "input",
    monthYearLabel: "MMMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};
class UteDatepickerSettings {
  constructor(dateAdapter) {
    this.dateAdapter = dateAdapter;
    this.format = "";
    this.weekStart = 0;
    this.overlayClass = "";
    this.backdropClass = "";
    this.contentClass = "";
    this.weekdaysSymbols = null;
    this.dynamicTouchUI = false;
    this.nativeDateAdapter = new _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.NativeDateAdapter();
    this.isMoment = false;
    this.matDatepicker = null;
    this.isRange = false;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
    try {
      this.matDatepicker = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepicker);
    } catch {
      try {
        this.matDatepicker = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDateRangePicker);
        this.isRange = true;
      } catch {
        throw "Datepicker not found!";
      }
    }
    this.isMoment = this.dateAdapter.useUtcForDisplay === undefined ? true : false;
  }
  ngOnInit() {
    this.mobileAdopt();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngAfterViewInit() {
    // Generate dublicate for instance
    function duplicateInstance(instance) {
      const instanceCopy = Object.create(Object.getPrototypeOf(instance));
      Object.assign(instanceCopy, instance);
      return instanceCopy;
    }
    this.copyCurrentAdapter = duplicateInstance(this.dateAdapter);
    this.subscriptions.add(this.matDatepicker.openedStream.subscribe(() => {
      // Custom classes
      if (this.overlayClass || this.contentClass || this.backdropClass) {
        let content = this.matDatepicker._componentRef.location.nativeElement;
        if (this.contentClass && content) content.classList.add(this.contentClass);
        if (this.overlayClass && content) {
          content.parentElement.classList.add(this.overlayClass);
        }
        if (this.backdropClass && content) {
          content.parentElement.parentElement.parentElement.children[0].classList.add(this.backdropClass);
        }
      }
      // First day of week
      this.dateAdapter.getFirstDayOfWeek = () => this.weekStart || this.nativeDateAdapter.getFirstDayOfWeek();
      // Weekdays header format
      this.dateAdapter.getDayOfWeekNames = style => this.weekdaysSymbols ? this.nativeDateAdapter.getDayOfWeekNames("long").map(nr => nr.slice(0, this.weekdaysSymbols)) : this.copyCurrentAdapter.getDayOfWeekNames(style);
    }));
    // Restore default values
    this.subscriptions.add(this.matDatepicker.closedStream.subscribe(() => {
      this.dateAdapter.getFirstDayOfWeek = () => this.nativeDateAdapter.getFirstDayOfWeek();
      this.dateAdapter.getDayOfWeekNames = () => this.isMoment ? this.nativeDateAdapter.getDayOfWeekNames("long").map(nr => nr.slice(0, 2)) : this.nativeDateAdapter.getDayOfWeekNames("narrow");
    }));
    if (this.isMoment) {
      UteDateFormat.display.dateInput = UteDateFormat.display.dateInput = this.format || "LL";
      this.matDatepicker.datepickerInput._dateFormats = UteDateFormat;
      this.subscriptions.add(this.matDatepicker.openedStream.subscribe(() => {
        UteDateFormat.display.dateInput = UteDateFormat.display.dateInput = this.format || "LL";
        this.matDatepicker.datepickerInput._dateFormats = UteDateFormat;
      }));
    } else {
      if (this.format) {
        const dubAdapter = duplicateInstance(this.dateAdapter);
        dubAdapter.format = (date, displayFormat) => {
          if (this.format) {
            if (displayFormat === "input") {
              return (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(date, this.format, this.dateAdapter.locale);
            } else {
              return this.nativeDateAdapter.format(date, displayFormat);
            }
          } else {
            return this.nativeDateAdapter.format(date, displayFormat);
          }
        };
        this.matDatepicker.datepickerInput._dateAdapter = dubAdapter;
        if (this.isRange) {
          this.matDatepicker.datepickerInput._startInput._dateAdapter = dubAdapter;
          this.matDatepicker.datepickerInput._startInput._dateFormats = UteDateFormat;
          this.matDatepicker.datepickerInput._endInput._dateAdapter = dubAdapter;
          this.matDatepicker.datepickerInput._endInput._dateFormats = UteDateFormat;
        } else {
          this.matDatepicker.datepickerInput._dateFormats = UteDateFormat;
        }
      }
    }
    // Refresh current dateinput display
    if (this.matDatepicker.datepickerInput.value && this.format) {
      if (this.isRange) {
        this.matDatepicker.datepickerInput.value.start = this.matDatepicker.datepickerInput._model.selection.start;
        this.matDatepicker.datepickerInput.value.end = this.matDatepicker.datepickerInput._model.selection.end;
      } else {
        this.matDatepicker.datepickerInput.value = this.matDatepicker.datepickerInput._model.selection;
      }
    }
  }
  /**
   * Datect window resize
   */
  onResize() {
    this.mobileAdopt();
  }
  /**
   * Get current device type and adopt matDatepicker interface
   */
  mobileAdopt() {
    if (this.dynamicTouchUI) {
      const status = this.isMobile();
      if (this.matDatepicker.touchUi !== status) this.matDatepicker.touchUi = status;
    }
  }
  /**
   * Check if platfrom or screen is for mobile usage
   * @returns boolean status
   */
  isMobile() {
    if (typeof navigator === "object" && typeof navigator.userAgent === "string") {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent)) {
        return true;
      }
    }
    if (screen.orientation.type === ("portrait-primary" || 0) && window.screen.width <= 920) {
      return true;
    }
    return false;
  }
  static #_ = this.ɵfac = function UteDatepickerSettings_Factory(t) {
    return new (t || UteDatepickerSettings)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.DateAdapter));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: UteDatepickerSettings,
    selectors: [["", "uteDateSettings", ""]],
    hostBindings: function UteDatepickerSettings_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function UteDatepickerSettings_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      format: "format",
      weekStart: "weekStart",
      overlayClass: "overlayClass",
      backdropClass: "backdropClass",
      contentClass: "contentClass",
      weekdaysSymbols: "weekdaysSymbols",
      dynamicTouchUI: "dynamicTouchUI"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.NativeDateAdapter])]
  });
}

/***/ }),

/***/ 1172:
/*!**********************************************************************************!*\
  !*** ./projects/ngx-ute-material/datepicker-time/src/button-container/button.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeButton: () => (/* binding */ TimeButton)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 1267);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 2307);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4672);










const _c0 = (a0, a1) => ({
  disabled: a0,
  underline: a1
});
const _c1 = a0 => ({
  block: a0
});
class TimeButton {
  constructor() {
    this.block = [];
    this.array = [];
    this.underline = false;
    this.step = 1;
    this.currentIndex = 0;
    this.infiniteScroll = true;
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.inputblock = false;
    this.currentValue = "";
  }
  /**
   * Init items
   */
  ngAfterViewInit() {
    this.currentValue = this.array[this.currentIndex];
    this.inputblock = this.array.length === 2 ? true : false;
  }
  /**
   * Reculculate position when change index at UteDatepickerTime
   * @param changes - SimpleChanges interface
   */
  ngOnChanges(changes) {
    if (changes && Object.keys(changes).some(change => change === "currentIndex")) {
      this.currentValue = this.array[this.currentIndex];
    }
  }
  /**
   * Detect scroll action
   * @param event - Dom event
   */
  onWheel(event) {
    this.onClick(event.deltaY > 0 ? false : true);
  }
  /**
   * Detect click action
   * @param side - Button side
   */
  onClick(side) {
    if (side) {
      if (this.currentIndex != this.array.length - 1) {
        this.currentIndex += 1;
      } else if (this.infiniteScroll) {
        this.currentIndex = 0;
      }
    } else {
      if (this.currentIndex != 0) {
        this.currentIndex -= 1;
      } else if (this.infiniteScroll) {
        this.currentIndex = this.array.length - 1;
      }
    }
    this.currentValue = this.array[this.currentIndex];
    this.onChange.emit(this.currentIndex);
  }
  /**
   * Detect input change action
   * @param event - Dom event
   */
  onInput(event) {
    this.currentIndex = this.array.map(item => parseInt(item)).indexOf(Math.floor(parseInt(event.target.value) / this.step) * this.step);
    this.currentValue = this.array[this.currentIndex];
    this.onChange.emit(this.currentIndex);
  }
  /**
   * Check if value is allow to select
   * @returns boolean status
   */
  checkValue() {
    return this.block.some(bl => bl === this.array[this.currentIndex]) ? true : false;
  }
  /**
   * Check if button can be clicked
   * @param side - Button side
   * @returns boolean status
   */
  getDisabled(side) {
    if (!this.infiniteScroll) {
      if (side) {
        if (this.currentIndex === this.array.length - 1) {
          return true;
        } else if (this.infiniteScroll) {
          return false;
        }
      } else {
        if (this.currentIndex === 0) {
          return true;
        } else if (this.infiniteScroll) {
          return false;
        }
      }
    }
    return false;
  }
  static #_ = this.ɵfac = function TimeButton_Factory(t) {
    return new (t || TimeButton)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TimeButton,
    selectors: [["time-button"]],
    inputs: {
      block: "block",
      array: "array",
      underline: "underline",
      step: "step",
      currentIndex: "currentIndex",
      infiniteScroll: "infiniteScroll"
    },
    outputs: {
      onChange: "onChange"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 11,
    consts: [[1, "button-container"], ["type", "button", "mat-icon-button", "", "aria-label", "expand_less icon", 1, "button-up", 3, "disabled", "click"], ["appearance", "fill", 3, "ngClass"], ["type", "text", "matInput", "", "maxlength", "2", 3, "value", "ngClass", "readonly", "change", "wheel"], ["type", "button", "mat-icon-button", "", "aria-label", "expand_more icon", 1, "button-down", 3, "disabled", "click"]],
    template: function TimeButton_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeButton_Template_button_click_1_listener() {
          return ctx.onClick(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2)(3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TimeButton_Template_input_change_3_listener($event) {
          return ctx.onInput($event);
        })("wheel", function TimeButton_Template_input_wheel_3_listener($event) {
          return ctx.onWheel($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeButton_Template_button_click_4_listener() {
          return ctx.onClick(false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.getDisabled(true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx.inputblock, ctx.underline));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.currentValue)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.checkValue()))("readonly", ctx.inputblock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.getDisabled(false));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton],
    styles: [".button-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 1.875rem;\n}\n.button-container[_ngcontent-%COMP%]   .mdc-icon-button[_ngcontent-%COMP%]:after {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  content: \"\";\n  margin: 19.5px;\n  border: 0 solid currentColor;\n  border-right-width: 2px;\n}\n.button-container[_ngcontent-%COMP%]   .mdc-icon-button.button-up[_ngcontent-%COMP%]:after {\n  border-top-width: 2px;\n  transform: translateX(0) rotate(-45deg);\n}\n.button-container[_ngcontent-%COMP%]   .mdc-icon-button.button-down[_ngcontent-%COMP%]:after {\n  border-bottom-width: 2px;\n  transform: translateX(0) rotate(45deg);\n}\n.button-container[_ngcontent-%COMP%]     .mat-mdc-form-field {\n  width: 1.875rem;\n  max-width: 1.875rem;\n  text-align: center;\n  margin: 4px 0;\n}\n.button-container[_ngcontent-%COMP%]     .mat-mdc-form-field.disabled .mat-mdc-form-field-focus-overlay {\n  opacity: 0;\n}\n.button-container[_ngcontent-%COMP%]     .mat-mdc-form-field.disabled .mat-mdc-input-element {\n  cursor: default;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.button-container[_ngcontent-%COMP%]     .mat-mdc-form-field:not(.underline) .mdc-line-ripple {\n  opacity: 0;\n}\n.button-container[_ngcontent-%COMP%]     .mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field {\n  background-color: transparent;\n  padding: 0;\n}\n.button-container[_ngcontent-%COMP%]     .mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mat-mdc-form-field-infix {\n  padding-top: 0;\n  padding-bottom: 0;\n  min-height: 1.875rem;\n}\n.button-container[_ngcontent-%COMP%]     .mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mat-mdc-form-field-infix .mat-mdc-input-element {\n  text-align: center;\n  height: 1.875rem;\n}\n.button-container[_ngcontent-%COMP%]     .mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mat-mdc-form-field-infix .mat-mdc-input-element.block {\n  color: red;\n}\n.button-container[_ngcontent-%COMP%]     .mat-mdc-form-field .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25neC11dGUtbWF0ZXJpYWwvZGF0ZXBpY2tlci10aW1lL3NyYy9idXR0b24tY29udGFpbmVyL2J1dHRvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ1E7RUFDSSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7QUFDWjtBQUNRO0VBQ0kscUJBQUE7RUFDQSx1Q0FBQTtBQUNaO0FBQ1E7RUFDSSx3QkFBQTtFQUNBLHNDQUFBO0FBQ1o7QUFFSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUFSO0FBRVk7RUFDSSxVQUFBO0FBQWhCO0FBRVk7RUFDSSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUFoQjtBQUlZO0VBQ0ksVUFBQTtBQUZoQjtBQUtRO0VBQ0ksNkJBQUE7RUFDQSxVQUFBO0FBSFo7QUFJWTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBRmhCO0FBR2dCO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQURwQjtBQUVvQjtFQUNJLFVBQUE7QUFBeEI7QUFLUTtFQUNJLGFBQUE7QUFIWiIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDEuODc1cmVtO1xuICAgIC5tZGMtaWNvbi1idXR0b24ge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBtYXJnaW46IDE5LjVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDJweDtcbiAgICAgICAgfVxuICAgICAgICAmLmJ1dHRvbi11cDphZnRlciB7XG4gICAgICAgICAgICBib3JkZXItdG9wLXdpZHRoOiAycHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgJi5idXR0b24tZG93bjphZnRlciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA6Om5nLWRlZXAgLm1hdC1tZGMtZm9ybS1maWVsZCB7XG4gICAgICAgIHdpZHRoOiAxLjg3NXJlbTtcbiAgICAgICAgbWF4LXdpZHRoOiAxLjg3NXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDRweCAwO1xuICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgIC5tYXQtbWRjLWZvcm0tZmllbGQtZm9jdXMtb3ZlcmxheSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tYXQtbWRjLWlucHV0LWVsZW1lbnQge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOm5vdCgudW5kZXJsaW5lKSB7XG4gICAgICAgICAgICAubWRjLWxpbmUtcmlwcGxlIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlci5tZGMtdGV4dC1maWVsZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAubWF0LW1kYy1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxLjg3NXJlbTtcbiAgICAgICAgICAgICAgICAubWF0LW1kYy1pbnB1dC1lbGVtZW50IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuODc1cmVtO1xuICAgICAgICAgICAgICAgICAgICAmLmJsb2NrIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm1hdC1tZGMtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1292:
/*!*********************************************************************************!*\
  !*** ./projects/ngx-ute-material/datepicker-time/src/datepicker-time-locale.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatepickerTimeLocale: () => (/* binding */ DatepickerTimeLocale)
/* harmony export */ });
const DatepickerTimeLocale = {
  en: {
    today: "Today",
    cancel: "Cancel",
    apply: "Apply"
  },
  ar: {
    today: "اليوم",
    cancel: "يلغي",
    apply: "يتقدم"
  },
  zh: {
    today: "今天",
    cancel: "取消",
    apply: "申请"
  },
  cs: {
    today: "Dnes",
    cancel: "Zrušení",
    apply: "Aplikovat"
  },
  da: {
    today: "I dag",
    cancel: "Afbestille",
    apply: "Ansøge"
  },
  fr: {
    today: "Aujourd'hui",
    cancel: "Annuler",
    apply: "Appliquer"
  },
  de: {
    today: "Heute",
    cancel: "Stornieren",
    apply: "Anwenden"
  },
  it: {
    today: "Oggi",
    cancel: "Annulla",
    apply: "Applicare"
  },
  ja: {
    today: "今日",
    cancel: "キャンセル",
    apply: "適用する"
  },
  ko: {
    today: "오늘",
    cancel: "취소",
    apply: "적용하다"
  },
  pl: {
    today: "Dzisiaj",
    cancel: "Anulować",
    apply: "Stosować"
  },
  pt: {
    today: "Hoje",
    cancel: "Cancelar",
    apply: "Aplicar"
  },
  ro: {
    today: "Astăzi",
    cancel: "Anulare",
    apply: "Aplica"
  },
  es: {
    today: "Hoy",
    cancel: "Cancelar",
    apply: "Aplicar"
  },
  sv: {
    today: "I dag",
    cancel: "Annullera",
    apply: "Tillämpa"
  },
  uk: {
    today: "Сьогодні",
    cancel: "Скасувати",
    apply: "Застосувати"
  }
};

/***/ }),

/***/ 7132:
/*!**************************************************************************!*\
  !*** ./projects/ngx-ute-material/datepicker-time/src/datepicker-time.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UteDatepickerTime: () => (/* binding */ UteDatepickerTime)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ 336);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _wheel_container_wheel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wheel-container/wheel */ 6580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4672);
/* harmony import */ var _datepicker_time_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datepicker-time-locale */ 1292);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8688);
/* harmony import */ var _button_container_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button-container/button */ 1172);












function UteDatepickerTime_ng_template_0_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function UteDatepickerTime_ng_template_0_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function UteDatepickerTime_ng_template_0_ng_container_1_time_wheel_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "time-wheel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function UteDatepickerTime_ng_template_0_ng_container_1_time_wheel_6_Template_time_wheel_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onChange($event, ctx_r10.timeType.seconds));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("block", ctx_r7.secondBlocks)("array", ctx_r7.secondValues)("underline", ctx_r7.decoratorStyle === "underline" ? true : false)("visibleItemsCount", ctx_r7.visibleItemsCount)("currentIndex", ctx_r7.selectedIndex.seconds)("infiniteScroll", ctx_r7.infiniteScroll);
  }
}
function UteDatepickerTime_ng_template_0_ng_container_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function UteDatepickerTime_ng_template_0_ng_container_1_time_wheel_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "time-wheel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function UteDatepickerTime_ng_template_0_ng_container_1_time_wheel_8_Template_time_wheel_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onChange($event, ctx_r12.timeType.period));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("array", ctx_r9.dayPeriods)("infiniteScroll", false)("currentIndex", ctx_r9.selectedIndex.period);
  }
}
const _c0 = (a0, a1) => ({
  outline: a0,
  diviner: a1
});
function UteDatepickerTime_ng_template_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2)(2, "time-wheel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function UteDatepickerTime_ng_template_0_ng_container_1_Template_time_wheel_onChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.onChange($event, ctx_r14.timeType.hours));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UteDatepickerTime_ng_template_0_ng_container_1_div_3_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "time-wheel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function UteDatepickerTime_ng_template_0_ng_container_1_Template_time_wheel_onChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.onChange($event, ctx_r16.timeType.minutes));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UteDatepickerTime_ng_template_0_ng_container_1_div_5_Template, 2, 0, "div", 4)(6, UteDatepickerTime_ng_template_0_ng_container_1_time_wheel_6_Template, 1, 6, "time-wheel", 5)(7, UteDatepickerTime_ng_template_0_ng_container_1_div_7_Template, 2, 0, "div", 4)(8, UteDatepickerTime_ng_template_0_ng_container_1_time_wheel_8_Template, 1, 3, "time-wheel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx_r1.decoratorStyle === "outline", ctx_r1.showDiviner));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("block", ctx_r1.hourBlocks)("array", ctx_r1.hourValues)("underline", ctx_r1.decoratorStyle === "underline" ? true : false)("visibleItemsCount", ctx_r1.visibleItemsCount)("infiniteScroll", ctx_r1.infiniteScroll)("currentIndex", ctx_r1.selectedIndex.hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showDiviner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("block", ctx_r1.minuteBlocks)("array", ctx_r1.minuteValues)("underline", ctx_r1.decoratorStyle === "underline" ? true : false)("visibleItemsCount", ctx_r1.visibleItemsCount)("infiniteScroll", ctx_r1.infiniteScroll)("currentIndex", ctx_r1.selectedIndex.minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showDiviner && ctx_r1.showSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showDiviner && ctx_r1.hourFormat === 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hourFormat === 12);
  }
}
function UteDatepickerTime_ng_template_0_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function UteDatepickerTime_ng_template_0_ng_container_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function UteDatepickerTime_ng_template_0_ng_container_2_time_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "time-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function UteDatepickerTime_ng_template_0_ng_container_2_time_button_6_Template_time_button_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.onChange($event, ctx_r22.timeType.seconds));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("block", ctx_r19.secondBlocks)("array", ctx_r19.secondValues)("underline", ctx_r19.decoratorStyle === "underline" ? true : false)("step", ctx_r19.secondStep)("infiniteScroll", ctx_r19.infiniteScroll)("currentIndex", ctx_r19.selectedIndex.seconds);
  }
}
function UteDatepickerTime_ng_template_0_ng_container_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function UteDatepickerTime_ng_template_0_ng_container_2_time_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "time-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function UteDatepickerTime_ng_template_0_ng_container_2_time_button_8_Template_time_button_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r24.onChange($event, ctx_r24.timeType.period));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("array", ctx_r21.dayPeriods)("infiniteScroll", false)("currentIndex", ctx_r21.selectedIndex.period);
  }
}
function UteDatepickerTime_ng_template_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2)(2, "time-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function UteDatepickerTime_ng_template_0_ng_container_2_Template_time_button_onChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r26.onChange($event, ctx_r26.timeType.hours));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UteDatepickerTime_ng_template_0_ng_container_2_div_3_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "time-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function UteDatepickerTime_ng_template_0_ng_container_2_Template_time_button_onChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r28.onChange($event, ctx_r28.timeType.minutes));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UteDatepickerTime_ng_template_0_ng_container_2_div_5_Template, 2, 0, "div", 4)(6, UteDatepickerTime_ng_template_0_ng_container_2_time_button_6_Template, 1, 6, "time-button", 11)(7, UteDatepickerTime_ng_template_0_ng_container_2_div_7_Template, 2, 0, "div", 4)(8, UteDatepickerTime_ng_template_0_ng_container_2_time_button_8_Template, 1, 3, "time-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx_r2.decoratorStyle === "outline", ctx_r2.showDiviner));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("block", ctx_r2.hourBlocks)("array", ctx_r2.hourValues)("underline", ctx_r2.decoratorStyle === "underline" ? true : false)("step", ctx_r2.hourStep)("infiniteScroll", ctx_r2.infiniteScroll)("currentIndex", ctx_r2.selectedIndex.hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showDiviner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("block", ctx_r2.minuteBlocks)("array", ctx_r2.minuteValues)("underline", ctx_r2.decoratorStyle === "underline" ? true : false)("step", ctx_r2.minuteStep)("infiniteScroll", ctx_r2.infiniteScroll)("currentIndex", ctx_r2.selectedIndex.minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showDiviner && ctx_r2.showSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showDiviner && ctx_r2.hourFormat === 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.hourFormat === 12);
  }
}
function UteDatepickerTime_ng_template_0_ng_container_3_ng_template_1_Template(rf, ctx) {}
function UteDatepickerTime_ng_template_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UteDatepickerTime_ng_template_0_ng_container_3_ng_template_1_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx_r3._matDatepickerActions);
  }
}
function UteDatepickerTime_ng_template_0_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UteDatepickerTime_ng_template_0_ng_container_4_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r32.onClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 17)(4, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UteDatepickerTime_ng_template_0_ng_container_4_div_1_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r34.onApply());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 17)(9, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r30.locale["cancel"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r30.locale["apply"], " ");
  }
}
function UteDatepickerTime_ng_template_0_ng_container_4_div_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UteDatepickerTime_ng_template_0_ng_container_4_div_2_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r36.onToday());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 17)(3, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r35.locale["today"], " ");
  }
}
function UteDatepickerTime_ng_template_0_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UteDatepickerTime_ng_template_0_ng_container_4_div_2_button_1_Template, 5, 1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UteDatepickerTime_ng_template_0_ng_container_4_div_2_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r38.onClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 17)(5, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UteDatepickerTime_ng_template_0_ng_container_4_div_2_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r40.onApply());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 17)(9, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.showToday);
  }
}
function UteDatepickerTime_ng_template_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UteDatepickerTime_ng_template_0_ng_container_4_div_1_Template, 11, 2, "div", 13)(2, UteDatepickerTime_ng_template_0_ng_container_4_div_2_Template, 10, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.showToday);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showToday);
  }
}
const _c1 = a0 => ({
  view: a0
});
function UteDatepickerTime_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UteDatepickerTime_ng_template_0_ng_container_1_Template, 9, 21, "ng-container", 1)(2, UteDatepickerTime_ng_template_0_ng_container_2_Template, 9, 21, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UteDatepickerTime_ng_template_0_ng_container_3_Template, 2, 1, "ng-container", 1)(4, UteDatepickerTime_ng_template_0_ng_container_4_Template, 3, 2, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r0.view != "month"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.timeStyle === "wheel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.timeStyle === "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isActions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isActions);
  }
}
/**
 * List of field names
 */
var TimeType;
(function (TimeType) {
  TimeType["hours"] = "hours";
  TimeType["minutes"] = "minutes";
  TimeType["seconds"] = "seconds";
  TimeType["period"] = "period";
})(TimeType || (TimeType = {}));
/**
 * Meridian period indexes
 */
var PeriodIndex;
(function (PeriodIndex) {
  PeriodIndex[PeriodIndex["AM"] = 0] = "AM";
  PeriodIndex[PeriodIndex["PM"] = 1] = "PM";
})(PeriodIndex || (PeriodIndex = {}));
class UteDatepickerTime {
  constructor(_viewContainerRef, changeDetectorRef) {
    this._viewContainerRef = _viewContainerRef;
    this.changeDetectorRef = changeDetectorRef;
    this.desktopStyle = "button";
    this.mobileStyle = "wheel";
    this.infiniteScroll = true;
    this.visibleItemsCount = 5;
    this.hourFormat = 24;
    this.hourStep = 1;
    this.minuteStep = 1;
    this.secondStep = 1;
    this.decoratorStyle = "outline";
    this.showSeconds = true;
    this.showToday = false;
    this.showDiviner = true;
    this.dynamicTouchUI = false;
    this._template = {};
    this.timeStyle = this.desktopStyle;
    this._matDatepickerActions = null;
    this.isActions = false;
    this.timeType = TimeType;
    this.selectedIndex = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      period: PeriodIndex.AM
    };
    this.hourValues = [];
    this.minuteValues = [];
    this.secondValues = [];
    this.dayPeriods = ["AM", "PM"];
    this.hourBlocks = [];
    this.minuteBlocks = [];
    this.secondBlocks = [];
    this.view = "month";
    this._portal = null;
    this.locales = _datepicker_time_locale__WEBPACK_IMPORTED_MODULE_1__.DatepickerTimeLocale;
    this.isOpen = false;
    this.isMoment = false;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
  }
  /**
   * Generate time value arrays
   */
  ngOnInit() {
    this.mobileAdopt();
    this.setLocale();
    const isPeriod = this.hourFormat === 12 ? true : false;
    for (let i = isPeriod ? 1 : 0; i <= this.hourFormat - (isPeriod ? 0 : 1); i++) {
      this.hourValues.push(i < 10 && !isPeriod ? `0${i}` : `${i}`);
    }
    if (isPeriod) {
      this.hourValues.unshift(this.hourValues.pop());
    }
    this.hourValues = this.hourValues.filter(value => Number(value) % this.hourStep === 0);
    for (let i = 0; i < 60; i++) {
      this.minuteValues.push(i < 10 ? `0${i}` : `${i}`);
    }
    if (this.showSeconds) {
      this.secondValues = [...this.minuteValues];
      this.secondValues = this.secondValues.filter(value => Number(value) % this.secondStep === 0);
    }
    this.minuteValues = this.minuteValues.filter(value => Number(value) % this.minuteStep === 0);
  }
  /**
   * Generate default data and add timepicker as actions to matDatepicker
   */
  ngAfterViewInit() {
    this.view = this.matDatepicker.startView;
    this.isMoment = this.matDatepicker.datepickerInput._dateAdapter.useUtcForDisplay === undefined ? true : false;
    // Create subscriber to detect when locale will be updated
    this.subscriptions.add(this.matDatepicker._dateAdapter.localeChanges.subscribe(() => {
      this.setLocale();
    }));
    let viewSub = null;
    let changeSub = null;
    // Create subscriber to detect when matDatepicker will be opened
    this.subscriptions.add(this.matDatepicker.openedStream.subscribe(() => {
      this.initPicker(this.matDatepicker.datepickerInput._model.selection);
      // Create subscriber to detect when matCalendar value will be changed
      this.subscriptions.add(changeSub = this.matDatepicker._componentRef.changeDetectorRef.context._model.selectionChanged.subscribe(() => {
        this.setDate();
      }));
      // Create subscriber to detect when matDatepicker view will be changed
      viewSub = this.matDatepicker.viewChanged.subscribe(view => {
        this.view = view;
        this.changeDetectorRef.detectChanges();
      });
      // Create subscriber to detect when matDatepickerInput will be changed
      this.subscriptions.add(this.matDatepicker.datepickerInput.dateInput.subscribe(() => {
        let date = this.matDatepicker.datepickerInput.value;
        try {
          if (date.getTime() < this.matDatepicker.datepickerInput.min.getTime()) {
            this.matDatepicker.datepickerInput.value = new Date(this.matDatepicker.datepickerInput.min);
            this.onToday(new Date(this.matDatepicker.datepickerInput.min));
          } else if (date.getTime() > this.matDatepicker.datepickerInput.max.getTime()) {
            this.matDatepicker.datepickerInput.value = new Date(this.matDatepicker.datepickerInput.max);
            this.onToday(new Date(this.matDatepicker.datepickerInput.max));
          }
        } catch {}
      }));
      setTimeout(() => {
        this.isOpen = true;
      }, 250);
    }));
    // Create subscriber to detect when matDatepicker will be closed
    this.subscriptions.add(this.matDatepicker.closedStream.subscribe(() => {
      this.view = this.matDatepicker.startView;
      // Remove subscribers
      changeSub.unsubscribe();
      viewSub.unsubscribe();
    }));
    if (!this.isMoment && this.matDatepicker.datepickerInput._dateFormats.parse.dateInput != "input") {
      let dateInput = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour12: this.hourFormat === 12 ? true : false,
        hour: "2-digit",
        minute: "2-digit"
      };
      if (this.showSeconds) dateInput.second = "2-digit";
      this.matDatepicker.datepickerInput._dateFormats.parse.dateInput = dateInput;
      this.matDatepicker.datepickerInput._dateFormats.display.dateInput = dateInput;
    }
    if (this.matDatepicker.datepickerInput.value) {
      this.matDatepicker.datepickerInput.value = this.matDatepicker.datepickerInput._model.selection;
      this.initPicker(this.matDatepicker.datepickerInput.value);
    }
    // Add or replace actions with UteDatepickerTime
    if (this.matDatepicker._actionsPortal) {
      this.isActions = true;
      this._matDatepickerActions = this.matDatepicker._actionsPortal;
      this.matDatepicker.removeActions(this.matDatepicker._actionsPortal);
    }
    // Register actions
    this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.TemplatePortal(this._template, this._viewContainerRef);
    this.matDatepicker.registerActions(this._portal);
  }
  /**
   * Remove timepicker as actions from matDatepicker
   */
  ngOnDestroy() {
    this.matDatepicker.removeActions(this._portal);
    if (this._portal && this._portal.isAttached) {
      this._portal?.detach();
    }
    this.subscriptions.unsubscribe();
  }
  /**
   * Datect window resize
   */
  onResize() {
    this.mobileAdopt();
  }
  /**
   * Get current device type and adopt matDatepicker interface
   */
  mobileAdopt() {
    if (this.isMobile()) {
      this.timeStyle = this.mobileStyle;
    } else {
      this.timeStyle = this.desktopStyle;
    }
    if (this.dynamicTouchUI) {
      const status = this.isMobile();
      if (this.matDatepicker.touchUi !== status) this.matDatepicker.touchUi = status;
    }
  }
  /**
   * Update current time indexes
   * @param value - New index value
   * @param type - Name of time part that will be updated
   */
  onChange(value, type) {
    if (this.isOpen) {
      this.selectedIndex[type] = value;
      this.setDate();
    }
  }
  /**
   * Set new date to UteDatepickerTime and check it for valid values
   * @param newDate - Rewrite date for custom value
   */
  setDate(newDate) {
    try {
      let date = this.matDatepicker._componentRef.changeDetectorRef.context._model.selection;
      if (this.isMoment) {
        date = date._d;
      }
      if (newDate) {
        this.matDatepicker._componentRef.changeDetectorRef.context._model.selection = newDate;
      } else {
        let hours = parseInt(this.hourValues[this.selectedIndex[TimeType.hours]]);
        hours = this.hourFormat === 12 && this.selectedIndex[TimeType.period] === 1 ? (hours === 12 ? 0 : hours) + 12 : hours;
        let minutes = parseInt(this.minuteValues[this.selectedIndex[TimeType.minutes]]);
        let seconds = parseInt(this.secondValues[this.selectedIndex[TimeType.seconds]]) || 0;
        date.setHours(hours, minutes, seconds);
        if (this.isMoment) {
          this.matDatepicker._componentRef.changeDetectorRef.context._model.selection._d = date;
        } else {
          this.matDatepicker._componentRef.changeDetectorRef.context._model.selection = date;
        }
      }
      this.blockCheck(TimeType.hours, this.matDatepicker._componentRef.changeDetectorRef.context._model.selection);
    } catch {}
  }
  /**
   * Check UteDatepickerTime for valid values
   * @param type - Name of time part that will be checked
   * @param date - Current date
   */
  blockCheck(type, date) {
    if (this.isMoment) date = date._d;
    let min = new Date(this.matDatepicker.datepickerInput.min);
    let max = new Date(this.matDatepicker.datepickerInput.max);
    switch (type) {
      case TimeType.hours:
        this.hourBlocks = this.hourValues.filter(hv => {
          let ch = parseInt(hv);
          if (this.hourFormat === 12 && this.selectedIndex[TimeType.period] === 1) {
            if (ch != 12) ch += 12;
          }
          return date.getDate() === min.getDate() && ch < min.getHours() || date.getDate() === max.getDate() && ch > max.getHours();
        });
        this.blockCheck(TimeType.minutes, date);
        break;
      case TimeType.minutes:
        this.minuteBlocks = this.minuteValues.filter(mv => date.getDate() === min.getDate() && date.getHours() === min.getHours() && parseInt(mv) < min.getMinutes() || date.getDate() === min.getDate() && date.getHours() < min.getHours() || date.getDate() === max.getDate() && date.getHours() === max.getHours() && parseInt(mv) > max.getMinutes() || date.getDate() === max.getDate() && date.getHours() > max.getHours());
        if (this.showSeconds) this.blockCheck(TimeType.seconds, date);
        break;
      case TimeType.seconds:
        this.secondBlocks = this.secondValues.filter(sv => date.getDate() === min.getDate() && date.getHours() < min.getHours() || date.getDate() === min.getDate() && date.getHours() === min.getHours() && date.getMinutes() < min.getMinutes() || date.getDate() === min.getDate() && date.getHours() === min.getHours() && date.getMinutes() === min.getMinutes() && parseInt(sv) < min.getSeconds() || date.getDate() === max.getDate() && date.getHours() > max.getHours() || date.getDate() === max.getDate() && date.getHours() === max.getHours() && date.getMinutes() > max.getMinutes() || date.getDate() === max.getDate() && date.getHours() === max.getHours() && date.getMinutes() === max.getMinutes() && parseInt(sv) > max.getSeconds());
        break;
    }
  }
  /**
   * Update UteDatepickerTime locale (buttons locale)
   */
  setLocale() {
    try {
      this.locale = this.locales[this.matDatepicker._dateAdapter.locale.split("-")[0]];
    } catch (error) {
      console.error(error);
      this.locale = this.locales["en"];
    }
  }
  /**
   * Get current date & time or Set custom date
   * @param custom - Custom date
   */
  onToday(custom) {
    let newDate = custom ? custom : new Date();
    this.initPicker(newDate);
    if (!custom) this.setDate(newDate);
  }
  /**
   * Default MatCalendar Apply function
   */
  onApply() {
    this.matDatepicker._applyPendingSelection();
    // Call close event
    this.onClose();
  }
  /**
   * Default MatCalendar Close function
   */
  onClose() {
    this.matDatepicker.close();
  }
  /**
   * Check if platfrom or screen is for mobile usage
   * @returns boolean status
   */
  isMobile() {
    if (typeof navigator === "object" && typeof navigator.userAgent === "string") {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent)) {
        return true;
      }
    }
    if (screen.orientation.type === ("portrait-primary" || 0) && window.screen.width <= 920) {
      return true;
    }
    return false;
  }
  /**
   * Change values on time pickers
   * @param date - income date
   */
  initPicker(date) {
    if (!date) {
      date = new Date();
    } else if (date && date._d) {
      date = date._d;
    }
    let hours = date.getHours();
    hours = this.hourFormat === 12 ? (hours + 11) % 12 + 1 : hours;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    this.selectedIndex = {
      hours: this.hourStep > 1 ? this.hourValues.map(vl => parseInt(vl)).indexOf(Math.floor(hours / this.hourStep) * this.hourStep) : hours,
      minutes: this.minuteStep > 1 ? this.minuteValues.map(vl => parseInt(vl)).indexOf(Math.floor(minutes / this.minuteStep) * this.minuteStep) : minutes,
      seconds: this.secondStep > 1 ? this.secondValues.map(vl => parseInt(vl)).indexOf(Math.floor(seconds / this.secondStep) * this.secondStep) : seconds,
      period: date.getHours() >= 12 ? PeriodIndex.PM : PeriodIndex.AM
    };
  }
  static #_ = this.ɵfac = function UteDatepickerTime_Factory(t) {
    return new (t || UteDatepickerTime)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UteDatepickerTime,
    selectors: [["ute-datepicker-time"]],
    viewQuery: function UteDatepickerTime_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._template = _t.first);
      }
    },
    hostAttrs: [1, "ute-datepicker-time"],
    hostBindings: function UteDatepickerTime_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function UteDatepickerTime_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      matDatepicker: "matDatepicker",
      desktopStyle: "desktopStyle",
      mobileStyle: "mobileStyle",
      infiniteScroll: "infiniteScroll",
      visibleItemsCount: "visibleItemsCount",
      hourFormat: "hourFormat",
      hourStep: "hourStep",
      minuteStep: "minuteStep",
      secondStep: "secondStep",
      decoratorStyle: "decoratorStyle",
      showSeconds: "showSeconds",
      showToday: "showToday",
      showDiviner: "showDiviner",
      dynamicTouchUI: "dynamicTouchUI"
    },
    exportAs: ["uteDatepickerTime"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "datepicker-time", 3, "ngClass"], [4, "ngIf"], [1, "time-container", 3, "ngClass"], [3, "block", "array", "underline", "visibleItemsCount", "infiniteScroll", "currentIndex", "onChange"], ["class", "diviner", 4, "ngIf"], [3, "block", "array", "underline", "visibleItemsCount", "currentIndex", "infiniteScroll", "onChange", 4, "ngIf"], [3, "array", "infiniteScroll", "currentIndex", "onChange", 4, "ngIf"], [1, "diviner"], [3, "block", "array", "underline", "visibleItemsCount", "currentIndex", "infiniteScroll", "onChange"], [3, "array", "infiniteScroll", "currentIndex", "onChange"], [3, "block", "array", "underline", "step", "infiniteScroll", "currentIndex", "onChange"], [3, "block", "array", "underline", "step", "infiniteScroll", "currentIndex", "onChange", 4, "ngIf"], [3, "cdkPortalOutlet"], ["class", "ute-datepicker-actions", 4, "ngIf"], [1, "ute-datepicker-actions"], ["mat-button", "", 1, "recolor", 3, "click"], ["height", "18px", "viewBox", "0 0 24 24", "width", "18px", "fill", "black"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["height", "18px", "viewBox", "0 0 24 24", "width", "18px", "fill", "white"], ["d", "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"], ["class", "recolor", "mat-button", "", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", 1, "icon", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "icon", 3, "click"], ["height", "18px", "viewBox", "0 0 24 24", "width", "18px"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zM7 11h5v5H7z"]],
    template: function UteDatepickerTime_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UteDatepickerTime_ng_template_0_Template, 5, 7, "ng-template");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _wheel_container_wheel__WEBPACK_IMPORTED_MODULE_5__.TimeWheel, _button_container_button__WEBPACK_IMPORTED_MODULE_6__.TimeButton, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.PortalModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.CdkPortalOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton],
    styles: [".datepicker-time {\n  border-top: 1px solid var(--mat-datepicker-calendar-header-divider-color);\n  box-sizing: border-box;\n  padding: 1rem;\n  margin-bottom: 0.25rem;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n  max-height: 200px;\n}\n.datepicker-time.view {\n  overflow: hidden;\n  max-height: 0;\n  padding: 0;\n  border-width: 0;\n  opacity: 0;\n  margin-bottom: 0;\n}\n.datepicker-time .time-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n  padding: 0 0.75rem;\n}\n.datepicker-time .time-container.test {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.datepicker-time .time-container.diviner {\n  gap: 0.25rem;\n}\n.datepicker-time .time-container.outline:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 1.875rem;\n  width: 100%;\n  border: 1px solid var(--mat-datepicker-calendar-date-today-outline-color);\n  border-radius: 10px;\n  box-sizing: border-box;\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.datepicker-time .time-container .diviner {\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.875rem;\n  padding-bottom: 0.125rem;\n  box-sizing: border-box;\n}\n.datepicker-time time-wheel * {\n  font-family: var(--mat-datepicker-calendar-text-font);\n}\n\n.ute-datepicker-actions {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0 8px 8px 8px;\n  gap: 8px;\n}\n.ute-datepicker-actions button:first-child {\n  margin-right: auto;\n}\n.ute-datepicker-actions button svg:not(.icon) {\n  margin-right: 0.25rem;\n  vertical-align: bottom;\n}\n.ute-datepicker-actions button.recolor svg {\n  fill: var(--mdc-text-button-label-text-color);\n}\n\n.mat-datepicker-dialog .mat-datepicker-content-touch .mat-datepicker-content-container {\n  max-height: 100%;\n}\n\n@media (orientation: portrait) {\n  .mat-datepicker-dialog .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25neC11dGUtbWF0ZXJpYWwvZGF0ZXBpY2tlci10aW1lL3NyYy9kYXRlcGlja2VyLXRpbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlFQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRVI7QUFEUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUdaO0FBRFE7RUFDSSxZQUFBO0FBR1o7QUFEUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlFQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUdaO0FBRFE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FBR1o7QUFBSTtFQUNJLHFEQUFBO0FBRVI7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQUVKO0FBQVE7RUFDSSxrQkFBQTtBQUVaO0FBQVE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0FBRVo7QUFDWTtFQUNJLDZDQUFBO0FBQ2hCOztBQUtBO0VBQ0ksZ0JBQUE7QUFGSjs7QUFLQTtFQUNJO0lBQ0ksWUFBQTtFQUZOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZXBpY2tlci10aW1lIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbWF0LWRhdGVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWRpdmlkZXItY29sb3IpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAmLnZpZXcge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIC50aW1lLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogMC43NXJlbTtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogMCAwLjc1cmVtO1xuICAgICAgICAmLnRlc3Qge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgfVxuICAgICAgICAmLmRpdmluZXIge1xuICAgICAgICAgICAgZ2FwOiAwLjI1cmVtO1xuICAgICAgICB9XG4gICAgICAgICYub3V0bGluZTphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICBoZWlnaHQ6IDEuODc1cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYXQtZGF0ZXBpY2tlci1jYWxlbmRhci1kYXRlLXRvZGF5LW91dGxpbmUtY29sb3IpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5kaXZpbmVyIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMS44NzVyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4xMjVyZW07XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgfVxuICAgIHRpbWUtd2hlZWwgKiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYXQtZGF0ZXBpY2tlci1jYWxlbmRhci10ZXh0LWZvbnQpO1xuICAgIH1cbn1cbi51dGUtZGF0ZXBpY2tlci1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDhweCA4cHggOHB4O1xuICAgIGdhcDogOHB4O1xuICAgIGJ1dHRvbiB7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIHN2Zzpub3QoLmljb24pIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgIH1cbiAgICAgICAgJi5yZWNvbG9yIHtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyKC0tbWRjLXRleHQtYnV0dG9uLWxhYmVsLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWF0LWRhdGVwaWNrZXItZGlhbG9nIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAubWF0LWRhdGVwaWNrZXItZGlhbG9nIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50LWNvbnRhaW5lci13aXRoLWFjdGlvbnMge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 276:
/*!*******************************************************************************************!*\
  !*** ./projects/ngx-ute-material/datepicker-time/src/wheel-container/directives/swipe.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwipeDirective: () => (/* binding */ SwipeDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3244);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 728);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6544);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 604);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8600);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9432);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4364);




var SwipeDirection;
(function (SwipeDirection) {
  SwipeDirection["up"] = "up";
  SwipeDirection["down"] = "down";
  SwipeDirection["left"] = "left";
  SwipeDirection["right"] = "right";
})(SwipeDirection || (SwipeDirection = {}));
var SwipeScroll;
(function (SwipeScroll) {
  SwipeScroll["vertical"] = "vertical";
  SwipeScroll["horizontal"] = "horizontal";
  SwipeScroll["both"] = "both";
})(SwipeScroll || (SwipeScroll = {}));
const SwipeDirectionConst = {
  up: "y",
  down: "y",
  left: "x",
  right: "x"
};
var SwipePhase;
(function (SwipePhase) {
  SwipePhase["start"] = "start";
  SwipePhase["move"] = "move";
  SwipePhase["end"] = "end";
  SwipePhase["cancel"] = "cancel";
})(SwipePhase || (SwipePhase = {}));
class SwipeDirective {
  constructor(elementRef, ngZone) {
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.userSelect = "none";
    this.swipeDirection = SwipeDirectionConst;
    this.swipeOptions = {};
    this.swipe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    if (!this.swipeOptions.allowPageScroll) this.swipeOptions.allowPageScroll = "both";
    if (!this.swipeOptions.triggerOnTouchEnd) this.swipeOptions.triggerOnTouchEnd = true;
    this.ngZone.runOutsideAngular(() => {
      this.swipeSubscription = this.createSwipeSubscription({
        domElement: this.elementRef.nativeElement,
        onSwipe: swipeEvent => this.swipe.emit(swipeEvent)
      });
    });
  }
  ngOnDestroy() {
    this.swipeSubscription?.unsubscribe?.();
  }
  createSwipeSubscription({
    domElement,
    onSwipe
  }) {
    if (!(domElement instanceof HTMLElement)) {
      throw new Error("Provided domElement should be an instance of HTMLElement");
    }
    if (typeof onSwipe !== "function") {
      throw new Error("At swipe event handler functions should be provided: onSwipe");
    }
    const touchStarts = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(domElement, "touchstart").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.getCoordinates));
    const touchMoves = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(domElement, "touchmove").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.getCoordinates));
    const touchEnds = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(domElement, "touchend").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.getCoordinates));
    const touchCancels = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(domElement, "touchcancel").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.getCoordinates));
    const mouseStarts = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(domElement, "mousedown").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.getCoordinates));
    const mouseMoves = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(domElement, "mousemove").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.getCoordinates));
    const mouseEnds = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(domElement, "mouseup").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.getCoordinates));
    const mouseCancels = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(domElement, "mouseout").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.getCoordinates));
    const allStarts = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)(touchStarts, mouseStarts);
    const allMoves = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)(touchMoves, mouseMoves);
    const allEnds = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)(touchEnds, mouseEnds);
    const allCancels = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)(touchCancels, mouseCancels);
    const touchStartsWithDirection = allStarts.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(coordinates => {
      onSwipe(this.getSwipeEvent(SwipePhase.start, null, coordinates));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(touchStartEvent => allMoves.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.elementAt)(3), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(touchMoveEvent => ({
      x: touchStartEvent.x,
      y: touchStartEvent.y,
      direction: this.getDirection(touchStartEvent, touchMoveEvent)
    })))));
    return touchStartsWithDirection.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(touchStartEvent => allMoves.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(touchMoveEvent => this.getDistance(touchStartEvent, touchMoveEvent)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(coordinates => {
      onSwipe(this.getSwipeEvent(SwipePhase.move, touchStartEvent, coordinates));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.race)(allEnds.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(touchEndEvent => this.getDistance(touchStartEvent, touchEndEvent)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(coordinates => {
      if (this.swipeOptions.triggerOnTouchEnd) onSwipe(this.getSwipeEvent(SwipePhase.end, touchStartEvent, coordinates));
    })), allCancels.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(touchCancelEvent => this.getDistance(touchStartEvent, touchCancelEvent)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(coordinates => {
      if (this.swipeOptions.triggerOnTouchEnd) onSwipe(this.getSwipeEvent(SwipePhase.cancel, touchStartEvent, coordinates));
    }))))))).subscribe();
  }
  getCoordinates(event) {
    if (event instanceof TouchEvent) {
      return {
        x: event.changedTouches[0].clientX,
        y: event.changedTouches[0].clientY
      };
    } else {
      return {
        x: event.clientX,
        y: event.clientY
      };
    }
  }
  getDistance(startCoordinates, moveCoordinates) {
    return {
      x: moveCoordinates.x - startCoordinates.x,
      y: moveCoordinates.y - startCoordinates.y
    };
  }
  getDirection(startCoordinates, moveCoordinates) {
    const {
      x,
      y
    } = this.getDistance(startCoordinates, moveCoordinates);
    if (Math.abs(x) < Math.abs(y) && this.swipeOptions.allowPageScroll === SwipeScroll.both || this.swipeOptions.allowPageScroll === SwipeScroll.vertical) {
      return Math.abs(startCoordinates.y) < Math.abs(moveCoordinates.y) ? SwipeDirection.down : SwipeDirection.up;
    } else {
      return Math.abs(startCoordinates.x) < Math.abs(moveCoordinates.x) ? SwipeDirection.right : SwipeDirection.left;
    }
  }
  getSwipeEvent(phase, touchStartEvent, coordinates) {
    return {
      phase: phase,
      direction: touchStartEvent ? touchStartEvent.direction : null,
      distance: touchStartEvent ? coordinates[this.swipeDirection[touchStartEvent.direction]] : 0
    };
  }
  static #_ = this.ɵfac = function SwipeDirective_Factory(t) {
    return new (t || SwipeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: SwipeDirective,
    selectors: [["", "uteSwipe", ""]],
    hostVars: 2,
    hostBindings: function SwipeDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("user-select", ctx.userSelect);
      }
    },
    inputs: {
      swipeOptions: "swipeOptions"
    },
    outputs: {
      swipe: "swipe"
    },
    standalone: true
  });
}

/***/ }),

/***/ 6580:
/*!********************************************************************************!*\
  !*** ./projects/ngx-ute-material/datepicker-time/src/wheel-container/wheel.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeWheel: () => (/* binding */ TimeWheel)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _directives_swipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/swipe */ 276);





const _c0 = (a0, a1, a2, a3) => ({
  "transform": a0,
  "transition-duration": a1,
  "font-size": a2,
  "opacity": a3
});
const _c1 = a0 => ({
  block: a0
});
function TimeWheel_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const value_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](4, _c0, (ctx_r0.itemStyles[i_r2] == null ? null : ctx_r0.itemStyles[i_r2].transform) || "none", (ctx_r0.itemStyles[i_r2] == null ? null : ctx_r0.itemStyles[i_r2].duration) || "0s", (ctx_r0.itemStyles[i_r2] == null ? null : ctx_r0.itemStyles[i_r2].fontSize) || "1rem", (ctx_r0.itemStyles[i_r2] == null ? null : ctx_r0.itemStyles[i_r2].opacity) || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r0.getDisabled(i_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r1, " ");
  }
}
const _c2 = a0 => ({
  height: a0
});
const _c3 = a0 => ({
  underline: a0
});
const _c4 = () => ({
  allowPageScroll: "vertical"
});
const _c5 = a0 => ({
  top: a0
});
class TimeWheel {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.block = [];
    this.array = [];
    this.underline = false;
    this.visibleItemsCount = 5;
    this.currentIndex = 0;
    this.infiniteScroll = true;
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.contH = 0;
    this.blockH = 0;
    this.itemStyles = [];
    this.itemSize = 30;
    this.speed = 500;
    this.positionZero = [];
    this.positionBase = [];
    this.positionChange = [];
    this.positionClose = [];
    this.items = [];
    this.itemsDuration = [];
    this.itemsTranslate = [];
    this.scrollClose = null;
  }
  /**
   * Init items & positions
   */
  ngAfterViewInit() {
    this.contH = this.itemSize * this.visibleItemsCount;
    this.blockH = this.itemSize + (this.visibleItemsCount === 5 ? this.itemSize : this.visibleItemsCount === 3 ? 0 : this.itemSize * -1);
    this.items = Array(this.array.length).fill("");
    this.items.map((item, index) => {
      this.positionBase.push((index - this.currentIndex) * this.itemSize);
      this.positionZero.push(index * this.itemSize);
    });
    this.positionClose = [...this.positionChange] = [...this.positionBase];
    this.itemsTranslate = [...this.itemsDuration] = Array(this.items.length).fill("");
    this.onScroll(0, 0, true);
  }
  /**
   * Reculculate position when change index at UteDatepickerTime
   * @param changes - SimpleChanges interface
   */
  ngOnChanges(changes) {
    if (changes && Object.keys(changes).some(change => change === "currentIndex")) {
      this.onScroll(this.positionChange[this.currentIndex], 0, true);
      this.closeIndex();
      this.onScroll(this.positionChange[this.currentIndex], 0, true);
    }
  }
  /**
   * Detect swipe action
   * @param event - Dom event
   */
  onSwipe(event) {
    if (event.phase === "move" && (event.direction === "up" || event.direction === "down")) {
      let duration = 0;
      let distance = event.distance * -1;
      if (event.direction === "up") {
        this.onScroll(distance, duration);
      } else if (event.direction === "down") {
        this.onScroll(distance, duration);
      }
    } else {
      if (event.direction == "up") {
        this.onClose();
      } else if (event.direction === "down") {
        this.onClose();
      }
    }
  }
  /**
   * Detect scroll action
   * @param event - Dom event
   */
  onWheel(event) {
    if (event.deltaY > 0) {
      if (this.currentIndex != this.items.length - 1) {
        this.currentIndex += 1;
      } else if (this.infiniteScroll) {
        this.currentIndex = 0;
      }
      this.onScroll(this.itemSize, this.speed, true);
    } else {
      if (this.currentIndex != 0) {
        this.currentIndex -= 1;
      } else if (this.infiniteScroll) {
        this.currentIndex = this.items.length - 1;
      }
      this.onScroll(this.itemSize * -1, this.speed, true);
    }
    clearInterval(this.scrollClose);
    this.scrollClose = null;
    this.scrollClose = setTimeout(() => {
      clearInterval(this.scrollClose);
      this.scrollClose = null;
      this.closeIndex();
      this.onChange.emit(this.currentIndex);
      this.positionClose = [...this.positionChange];
    }, 500);
  }
  /**
   * Recalculate items position
   * @param distance - Distance from event start to end (px)
   * @param duration - Speed time between values
   * @param close - Update finish data
   */
  onScroll(distance, duration, close = false) {
    this.closeIndex();
    this.ngZone.run(() => {
      let value = parseInt((distance < 0 ? "" : "-") + Math.abs(distance).toString());
      this.items.map((item, index) => {
        this.itemsDuration[index] = (duration / 1000).toFixed(1) + "s";
        if (this.infiniteScroll) {
          this.positionChange[index] = this.positionClose[index] + value;
          if (this.positionChange[index] > this.items.length * Math.floor(this.itemSize / 2)) {
            this.positionChange[index] -= this.items.length * this.itemSize;
          } else if (this.positionChange[index] < this.items.length * (Math.floor(this.itemSize / 2) * -1)) {
            this.positionChange[index] += this.items.length * this.itemSize;
          }
        } else {
          this.positionChange[index] = this.positionClose[index] + value;
          let positionReverse = [...this.positionZero];
          positionReverse.reverse();
          if (this.positionChange[index] > this.positionZero[index]) {
            this.positionChange[index] = this.positionZero[index];
          } else if (this.positionChange[index] < positionReverse[index] * -1) {
            this.positionChange[index] = positionReverse[index] * -1;
          }
        }
        let translate = `translateY(${this.positionChange[index]}px)`;
        if (this.itemsTranslate[index] != translate) {
          this.itemsTranslate[index] = translate;
        }
        this.genStyle(index);
      });
      if (close) {
        this.onChange.emit(this.currentIndex);
        this.positionClose = [...this.positionChange];
      }
    });
  }
  /**
   * Get closest value to last change position & move item to it
   */
  onClose() {
    this.positionClose = [...this.positionChange];
    this.closeIndex();
    this.onScroll(this.positionChange[this.currentIndex], this.speed, true);
  }
  /**
   * Get Closest index
   */
  closeIndex() {
    if (this.positionChange.length) {
      let closestValue = this.positionChange.reduce((prev, curr) => {
        return Math.abs(curr) < Math.abs(prev) ? curr : prev;
      });
      let closeIndex = this.positionChange.map(item => item).indexOf(closestValue);
      if (closeIndex != this.currentIndex) this.currentIndex = closeIndex;
    }
  }
  /**
   * Calculate styles for items
   * @param index - Index of item from list
   */
  genStyle(index) {
    let end = Math.round(this.visibleItemsCount / 2) + this.currentIndex;
    let start = this.currentIndex - Math.ceil(this.visibleItemsCount / 2);
    let range = Array.from({
      length: end - start + 1
    }, (_, i) => start + i);
    let endBig = 6 + this.currentIndex;
    let startBig = this.currentIndex - 6;
    let rangeBig = Array.from({
      length: endBig - startBig + 1
    }, (_, i) => startBig + i);
    const adjustArray = (numbersArray, minAllowedValue, maxAllowedValue) => {
      const resultArray = numbersArray.map(num => {
        const adjustedNum = num + minAllowedValue;
        if (adjustedNum > maxAllowedValue) {
          return adjustedNum - (maxAllowedValue + 1);
        } else if (adjustedNum < minAllowedValue) {
          return adjustedNum + (maxAllowedValue + 1);
        } else {
          return adjustedNum;
        }
      });
      return resultArray;
    };
    range = adjustArray(range, 0, this.items.length - 1);
    const findSide = (numbersArray, currentNumber, searchNumber) => {
      const currentIndex = numbersArray.indexOf(currentNumber);
      const searchIndex = numbersArray.indexOf(searchNumber);
      if (currentIndex === -1 || searchIndex === -1) {
        return 1;
      }
      const arrayLength = numbersArray.length;
      const rotatedCurrentIndex = (currentIndex + arrayLength) % arrayLength;
      const rotatedSearchIndex = (searchIndex + arrayLength) % arrayLength;
      if (rotatedSearchIndex < rotatedCurrentIndex) {
        return -1;
      } else if (rotatedSearchIndex > rotatedCurrentIndex) {
        return 1;
      } else {
        return 1;
      }
    };
    let display = range.some(r => r === index);
    let displaySide = findSide(rangeBig, this.currentIndex, index);
    let opacity = {
      min: 0,
      val: 0,
      max: 1
    };
    let fontSize = {
      min: 0.75,
      val: 0.75,
      max: 1.25
    };
    if (this.itemsTranslate[index] && display) {
      let pose = parseInt(this.itemsTranslate[index].split("(")[1].split("px")[0]);
      if (pose < 0) +pose * -1;
      let limit = Math.round(this.itemSize * this.visibleItemsCount / 2);
      if (limit - pose < 0) {
        opacity.val = opacity.min;
        fontSize.val = fontSize.min;
      } else if (pose === 0) {
        opacity.val = opacity.max;
        fontSize.val = fontSize.max;
      } else {
        opacity.val = opacity.max - Math.abs(pose) / limit;
        fontSize.val = fontSize.min + 0.5 * opacity.val;
      }
    }
    if (display) {
      let values = {
        duration: this.itemsDuration[index],
        transform: this.itemsTranslate[index],
        opacity: +opacity.val.toFixed(2),
        fontSize: +fontSize.val.toFixed(2) + "em"
      };
      if (!this.itemStyles[index]) {
        this.itemStyles.push(values);
      } else {
        this.itemStyles[index] = values;
      }
    } else {
      let values = {
        duration: "0s",
        transform: `translateY(${displaySide * this.itemSize * 3}px)`,
        opacity: opacity.min,
        fontSize: `${fontSize.min}em`
      };
      if (!this.itemStyles[index]) {
        this.itemStyles.push(values);
      } else {
        if (values.transform != this.itemStyles[index].transform) {
          this.itemStyles[index] = values;
        }
      }
    }
  }
  /**
   * Check if value is allow to select
   * @param index - Index of item from list
   * @returns - boolean status
   */
  getDisabled(index) {
    return this.block.some(bl => bl === this.array[index]) ? true : false;
  }
  static #_ = this.ɵfac = function TimeWheel_Factory(t) {
    return new (t || TimeWheel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TimeWheel,
    selectors: [["time-wheel"]],
    inputs: {
      block: "block",
      array: "array",
      underline: "underline",
      visibleItemsCount: "visibleItemsCount",
      currentIndex: "currentIndex",
      infiniteScroll: "infiniteScroll"
    },
    outputs: {
      onChange: "onChange"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 12,
    consts: [["uteSwipe", "", 1, "wheel-container", 3, "ngStyle", "ngClass", "swipeOptions", "swipe", "wheel"], [1, "wheel", 3, "ngStyle"], [4, "ngFor", "ngForOf"], [1, "wheel-item", 3, "ngClass"]],
    template: function TimeWheel_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipe", function TimeWheel_Template_div_swipe_0_listener($event) {
          return ctx.onSwipe($event);
        })("wheel", function TimeWheel_Template_div_wheel_0_listener($event) {
          return ctx.onWheel($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimeWheel_ng_container_2_Template, 3, 11, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx.contH + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, ctx.underline))("swipeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c5, ctx.blockH + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.array);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _directives_swipe__WEBPACK_IMPORTED_MODULE_2__.SwipeDirective],
    styles: [".wheel-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.wheel-container.underline[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translateY(calc(-50% + 0.9375rem));\n  height: 1px;\n  width: 100%;\n  background-color: var(--mat-datepicker-calendar-date-today-outline-color);\n}\n.wheel-container[_ngcontent-%COMP%]   .wheel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  width: 1.875rem;\n  position: relative;\n  font-size: var(--mat-datepicker-calendar-text-size);\n}\n.wheel-container[_ngcontent-%COMP%]   .wheel[_ngcontent-%COMP%]   .wheel-item[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0;\n  margin: 0;\n  width: 1.875rem;\n  height: 1.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all;\n}\n.wheel-container[_ngcontent-%COMP%]   .wheel[_ngcontent-%COMP%]   .wheel-item.block[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25neC11dGUtbWF0ZXJpYWwvZGF0ZXBpY2tlci10aW1lL3NyYy93aGVlbC1jb250YWluZXIvd2hlZWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSw2Q0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUVBQUE7QUFFUjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7QUFFUjtBQURRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBR1o7QUFGWTtFQUNJLFVBQUE7QUFJaEIiLCJzb3VyY2VzQ29udGVudCI6WyIud2hlZWwtY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmLnVuZGVybGluZTpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygtNTAlICsgMC45Mzc1cmVtKSk7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWF0LWRhdGVwaWNrZXItY2FsZW5kYXItZGF0ZS10b2RheS1vdXRsaW5lLWNvbG9yKTtcbiAgICB9XG4gICAgLndoZWVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxLjg3NXJlbTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW1hdC1kYXRlcGlja2VyLWNhbGVuZGFyLXRleHQtc2l6ZSk7XG4gICAgICAgIC53aGVlbC1pdGVtIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEuODc1cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjg3NXJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGw7XG4gICAgICAgICAgICAmLmJsb2NrIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4440:
/*!******************************************!*\
  !*** ./src/app/components/components.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentsService: () => (/* binding */ ComponentsService)
/* harmony export */ });
/* harmony import */ var _datepicker_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datepicker-time */ 8024);
/* harmony import */ var _datepicker_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datepicker-settings */ 5084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);



class ComponentsService {
  getComps() {
    return [{
      id: "datepicker-time",
      component: _datepicker_time__WEBPACK_IMPORTED_MODULE_0__.DatepickerTimeComponent
    }, {
      id: "datepicker-settings",
      component: _datepicker_settings__WEBPACK_IMPORTED_MODULE_1__.DatepickerSettingsComponent
    }];
  }
  static #_ = this.ɵfac = function ComponentsService_Factory(t) {
    return new (t || ComponentsService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ComponentsService,
    factory: ComponentsService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 6971:
/*!***********************************************************************!*\
  !*** ./src/app/components/datepicker-settings/datepicker-settings.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatepickerSettingsComponent: () => (/* binding */ DatepickerSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 2544);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ 4392);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 1267);
/* harmony import */ var projects_ngx_ute_material_datepicker_settings_src_datepicker_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/ngx-ute-material/datepicker-settings/src/datepicker-settings */ 6100);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 2307);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 7872);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4672);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 8539);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 8512);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);




















function DatepickerSettingsComponent_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose a datetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function DatepickerSettingsComponent_mat_form_field_2_Template_input_dateChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.dateChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-datepicker-toggle", 14)(7, "mat-datepicker", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r5)("value", ctx_r0.currentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.format ? ctx_r0.format : "MM/DD/YYYY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("format", ctx_r0.format)("weekStart", ctx_r0.weekStart)("overlayClass", ctx_r0.overlayClass)("backdropClass", ctx_r0.backdropClass)("contentClass", ctx_r0.contentClass)("weekdaysSymbols", ctx_r0.weekdaysSymbols)("dynamicTouchUI", ctx_r0.dynamicTouchUI);
  }
}
function DatepickerSettingsComponent_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose a datetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-date-range-input", 17)(4, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerSettingsComponent_mat_form_field_3_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r11.rangeDate.start, $event) || (ctx_r11.rangeDate.start = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerSettingsComponent_mat_form_field_3_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r13.rangeDate.end, $event) || (ctx_r13.rangeDate.end = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function DatepickerSettingsComponent_mat_form_field_3_Template_input_dateChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.dateChange({
        dateRangeStart: _r8,
        dateRangeEnd: _r9
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-datepicker-toggle", 14)(11, "mat-date-range-picker", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rangePicker", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.rangeDate.start);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.rangeDate.end);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.format ? ctx_r1.format : "MM/DD/YYYY", " \u2013 ", ctx_r1.format ? ctx_r1.format : "MM/DD/YYYY", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("format", ctx_r1.format)("weekStart", ctx_r1.weekStart)("overlayClass", ctx_r1.overlayClass)("backdropClass", ctx_r1.backdropClass)("contentClass", ctx_r1.contentClass)("weekdaysSymbols", ctx_r1.weekdaysSymbols)("dynamicTouchUI", ctx_r1.dynamicTouchUI);
  }
}
function DatepickerSettingsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current Date: ", ctx_r2.currentDate, "");
  }
}
function DatepickerSettingsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Start Date: ", ctx_r3.rangeDate.start, "");
  }
}
function DatepickerSettingsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("End Date: ", ctx_r4.rangeDate.end, "");
  }
}
const _c0 = a0 => ({
  filtered: a0
});
class DatepickerSettingsComponent {
  constructor() {
    this.format = "";
    this.weekStart = 0;
    this.overlayClass = "";
    this.backdropClass = "";
    this.contentClass = "";
    this.weekdaysSymbols = null;
    this.currentDate = new Date();
    this.rangeDate = {
      start: new Date(),
      end: new Date()
    };
    this.isAction = false;
    this.isLoad = true;
    this.isRange = false;
    this.dynamicTouchUI = false;
  }
  dateChange(event) {
    if (this.isRange) {
      let start = event.dateRangeStart.value;
      let end = event.dateRangeEnd.value;
      if (end) {
        this.rangeDate = {
          start: new Date(start),
          end: new Date(end)
        };
      }
    } else {
      this.currentDate = new Date(event.value);
    }
  }
  toggleActions() {
    this.reloadDatepicker();
    this.isAction = !this.isAction;
  }
  reloadDatepicker() {
    this.isLoad = false;
    setTimeout(() => {
      this.isLoad = true;
    }, 250);
  }
  static #_ = this.ɵfac = function DatepickerSettingsComponent_Factory(t) {
    return new (t || DatepickerSettingsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DatepickerSettingsComponent,
    selectors: [["ng-component"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.provideNativeDateAdapter)()]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 77,
    vars: 24,
    consts: [[1, "datepicker-settings-block"], [1, "picker-block", 3, "ngClass"], [4, "ngIf"], ["class", "text", 4, "ngIf"], [1, "datepicker-settings-settings"], [3, "ngModel", "ngModelChange", "selectionChange"], ["value", ""], ["value", "YYYY-MM-dd HH:mm:ss"], ["value", "MMM dd YYYY"], ["value", "shortDate"], [3, "value"], [3, "ngModel", "ngModelChange"], ["matInput", "", 3, "ngModel", "ngModelChange", "change"], ["matInput", "", 3, "matDatepicker", "value", "dateChange"], ["matIconSuffix", "", 3, "for"], ["uteDateSettings", "", 3, "format", "weekStart", "overlayClass", "backdropClass", "contentClass", "weekdaysSymbols", "dynamicTouchUI"], ["picker", ""], ["matInput", "", 3, "rangePicker"], ["matStartDate", "", 3, "ngModel", "ngModelChange"], ["dateRangeStart", ""], ["matEndDate", "", 3, "ngModel", "ngModelChange", "dateChange"], ["dateRangeEnd", ""], ["uteDateSettings", "", 1, "date-calendar", 3, "format", "weekStart", "overlayClass", "backdropClass", "contentClass", "weekdaysSymbols", "dynamicTouchUI"], ["rangeInput", ""], [1, "text"]],
    template: function DatepickerSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatepickerSettingsComponent_mat_form_field_2_Template, 9, 11, "mat-form-field", 2)(3, DatepickerSettingsComponent_mat_form_field_3_Template, 13, 13, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatepickerSettingsComponent_div_4_Template, 2, 1, "div", 3)(5, DatepickerSettingsComponent_div_5_Template, 2, 1, "div", 3)(6, DatepickerSettingsComponent_div_6_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "mat-card")(9, "mat-card-header")(10, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content")(13, "mat-form-field")(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Custom format (Native sample)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerSettingsComponent_Template_mat_select_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.format, $event) || (ctx.format = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DatepickerSettingsComponent_Template_mat_select_selectionChange_16_listener() {
          return ctx.reloadDatepicker();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "--Default--");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "YYYY-MM-dd HH:mm:ss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "MMM dd YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "shortDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field")(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Range Datepicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerSettingsComponent_Template_mat_select_ngModelChange_28_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.isRange, $event) || (ctx.isRange = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DatepickerSettingsComponent_Template_mat_select_selectionChange_28_listener() {
          return ctx.reloadDatepicker();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "False");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "True");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerSettingsComponent_Template_mat_checkbox_ngModelChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.dynamicTouchUI, $event) || (ctx.dynamicTouchUI = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Automatic Active TouchUI for Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card")(36, "mat-card-header")(37, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Custom Classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-content")(40, "mat-form-field")(41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Custom overlay class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerSettingsComponent_Template_input_ngModelChange_43_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.overlayClass, $event) || (ctx.overlayClass = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DatepickerSettingsComponent_Template_input_change_43_listener() {
          return ctx.reloadDatepicker();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field")(45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Custom backdrop class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerSettingsComponent_Template_input_ngModelChange_47_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.backdropClass, $event) || (ctx.backdropClass = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DatepickerSettingsComponent_Template_input_change_47_listener() {
          return ctx.reloadDatepicker();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field")(49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Custom content class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerSettingsComponent_Template_input_ngModelChange_51_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.contentClass, $event) || (ctx.contentClass = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DatepickerSettingsComponent_Template_input_change_51_listener() {
          return ctx.reloadDatepicker();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card")(53, "mat-card-header")(54, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Calendar Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card-content")(57, "mat-form-field")(58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "First day of week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerSettingsComponent_Template_mat_select_ngModelChange_60_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.weekStart, $event) || (ctx.weekStart = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DatepickerSettingsComponent_Template_mat_select_selectionChange_60_listener() {
          return ctx.reloadDatepicker();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Sunday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Monday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-form-field")(66, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Week day number of symbols");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerSettingsComponent_Template_mat_select_ngModelChange_68_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.weekdaysSymbols, $event) || (ctx.weekdaysSymbols = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DatepickerSettingsComponent_Template_mat_select_selectionChange_68_listener() {
          return ctx.reloadDatepicker();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "--Default--");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "S M T W T F S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Su Mo Tu We Th Fr Sa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sun Mon Tue Wed Thu Fri Sat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, !ctx.isLoad));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoad && !ctx.isRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoad && ctx.isRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.format);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.isRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.dynamicTouchUI);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.overlayClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.backdropClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.contentClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.weekStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.weekdaysSymbols);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDateRangePicker, projects_ngx_ute_material_datepicker_settings_src_datepicker_settings__WEBPACK_IMPORTED_MODULE_4__.UteDatepickerSettings, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass],
    styles: [".datepicker-settings-block[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.75rem;\n}\n.datepicker-settings-block[_ngcontent-%COMP%]   .picker-block[_ngcontent-%COMP%] {\n  min-width: 32%;\n  transition: all 0.2s ease-in-out;\n}\n.datepicker-settings-block[_ngcontent-%COMP%]   .picker-block.filtered[_ngcontent-%COMP%] {\n  background-color: rgb(220, 220, 220);\n  opacity: 0.5;\n  border-radius: 8px;\n  height: 4.875rem;\n}\n.datepicker-settings-block[_ngcontent-%COMP%]   .picker-block[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.datepicker-settings-block[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  background-color: rgba(200, 255, 200, 0.5);\n  border: 2px solid rgb(150, 200, 150);\n  padding: 0.5rem 2rem;\n  border-radius: 8px;\n  width: 100%;\n  height: 3.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.datepicker-settings-settings[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: space-between;\n}\n.datepicker-settings-settings[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  max-width: 32%;\n  width: 100%;\n  margin-top: 1rem;\n}\n.datepicker-settings-settings[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.datepicker-settings-settings[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .mat-mdc-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n\n@media screen and (max-width: 900px) {\n  .datepicker-settings-block[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .datepicker-settings-block[_ngcontent-%COMP%]   .picker-block[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .datepicker-settings-block[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .datepicker-settings-settings[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXRlcGlja2VyLXNldHRpbmdzL2RhdGVwaWNrZXItc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQUNJLGNBQUE7RUFDQSxnQ0FBQTtBQUVSO0FBRFE7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBR1o7QUFEUTtFQUNJLFdBQUE7QUFHWjtBQUFJO0VBQ0ksMENBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFFUjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FBQ0o7QUFBSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQURRO0VBQ0ksdUJBQUE7QUFHWjtBQURRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUdaOztBQUVBO0VBQ0k7SUFDSSxlQUFBO0VBQ047RUFBTTtJQUNJLFdBQUE7RUFFVjtFQUFNO0lBQ0ksWUFBQTtFQUVWO0VBRU07SUFDSSxlQUFBO0VBQVY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlcGlja2VyLXNldHRpbmdzLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMS43NXJlbTtcbiAgICAucGlja2VyLWJsb2NrIHtcbiAgICAgICAgbWluLXdpZHRoOiAzMiU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAmLmZpbHRlcmVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDIyMCwgMjIwKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGhlaWdodDogNC44NzVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLm1hdC1tZGMtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudGV4dCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyNTUsIDIwMCwgMC41KTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxNTAsIDIwMCwgMTUwLCAxKTtcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMy42MjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxufVxuXG4uZGF0ZXBpY2tlci1zZXR0aW5ncy1zZXR0aW5ncyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXQtY2FyZCB7XG4gICAgICAgIG1heC13aWR0aDogMzIlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgLm1hdC1tZGMtY2FyZC1oZWFkZXIge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLm1hdC1tZGMtY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZ2FwOiAwLjI1cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIC5kYXRlcGlja2VyLXNldHRpbmdzLWJsb2NrIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAucGlja2VyLWJsb2NrIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZGF0ZXBpY2tlci1zZXR0aW5ncy1zZXR0aW5ncyB7XG4gICAgICAgIG1hdC1jYXJkIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5084:
/*!*********************************************************!*\
  !*** ./src/app/components/datepicker-settings/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatepickerSettingsComponent: () => (/* reexport safe */ _datepicker_settings__WEBPACK_IMPORTED_MODULE_0__.DatepickerSettingsComponent)
/* harmony export */ });
/* harmony import */ var _datepicker_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datepicker-settings */ 6971);


/***/ }),

/***/ 4760:
/*!***************************************************************!*\
  !*** ./src/app/components/datepicker-time/datepicker-time.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatepickerTimeComponent: () => (/* binding */ DatepickerTimeComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 2544);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ 4392);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 1267);
/* harmony import */ var projects_ngx_ute_material_datepicker_time_src_datepicker_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/ngx-ute-material/datepicker-time/src/datepicker-time */ 7132);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 2307);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 7872);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4672);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 8539);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 8512);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);





















function DatepickerTimeComponent_mat_form_field_2_mat_datepicker_actions_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-datepicker-actions")(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function DatepickerTimeComponent_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose a datetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function DatepickerTimeComponent_mat_form_field_2_Template_input_dateChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.dateChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MM/DD/YYYY, HH:mm:ss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-datepicker-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-datepicker", null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DatepickerTimeComponent_mat_form_field_2_mat_datepicker_actions_9_Template, 5, 0, "mat-datepicker-actions", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ute-datepicker-time", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r3)("value", ctx_r0.currentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r3)("desktopStyle", ctx_r0.desktopStyle)("mobileStyle", ctx_r0.mobileStyle)("infiniteScroll", ctx_r0.infiniteScroll)("visibleItemsCount", ctx_r0.visibleItemsCount)("hourFormat", ctx_r0.hourFormat)("hourStep", ctx_r0.hourStep)("minuteStep", ctx_r0.minuteStep)("secondStep", ctx_r0.secondStep)("decoratorStyle", ctx_r0.decoratorStyle)("showSeconds", ctx_r0.showSeconds)("showToday", ctx_r0.showToday)("showDiviner", ctx_r0.showDiviner)("dynamicTouchUI", ctx_r0.dynamicTouchUI);
  }
}
function DatepickerTimeComponent_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerTimeComponent_button_50_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.toggleActions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Custom Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DatepickerTimeComponent_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerTimeComponent_button_51_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.toggleActions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove Custom Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c0 = a0 => ({
  filtered: a0
});
class DatepickerTimeComponent {
  constructor() {
    this.desktopStyle = "button";
    this.mobileStyle = "wheel";
    this.infiniteScroll = true;
    this.visibleItemsCount = 5;
    this.hourFormat = 24;
    this.hourStep = 1;
    this.minuteStep = 1;
    this.secondStep = 1;
    this.decoratorStyle = "outline";
    this.showSeconds = true;
    this.showToday = false;
    this.showDiviner = true;
    this.dynamicTouchUI = false;
    this.currentDate = new Date();
    this.isAction = false;
    this.isLoad = true;
  }
  dateChange(event) {
    this.currentDate = new Date(event.value);
  }
  toggleActions() {
    this.reloadDatepicker();
    this.isAction = !this.isAction;
  }
  reloadDatepicker() {
    this.isLoad = false;
    setTimeout(() => {
      this.isLoad = true;
    }, 250);
  }
  static #_ = this.ɵfac = function DatepickerTimeComponent_Factory(t) {
    return new (t || DatepickerTimeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DatepickerTimeComponent,
    selectors: [["ng-component"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.provideNativeDateAdapter)()]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 121,
    vars: 41,
    consts: [[1, "datepicker-time-block"], [1, "picker-block", 3, "ngClass"], [4, "ngIf"], [1, "text"], [1, "datepicker-time-settings"], [3, "ngModel", "ngModelChange", "selectionChange"], ["value", "button"], ["value", "wheel"], [3, "ngModel", "ngModelChange"], ["value", "outline"], ["value", "underline"], ["value", "none"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], [3, "value"], ["matInput", "", 3, "matDatepicker", "value", "dateChange"], ["matIconSuffix", "", 3, "for"], ["picker", ""], [3, "matDatepicker", "desktopStyle", "mobileStyle", "infiniteScroll", "visibleItemsCount", "hourFormat", "hourStep", "minuteStep", "secondStep", "decoratorStyle", "showSeconds", "showToday", "showDiviner", "dynamicTouchUI"], ["mat-button", "", "matDatepickerCancel", ""], ["mat-raised-button", "", "color", "primary", "matDatepickerApply", ""], ["mat-raised-button", "", 3, "click"]],
    template: function DatepickerTimeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatepickerTimeComponent_mat_form_field_2_Template, 11, 18, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "mat-card")(7, "mat-card-header")(8, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "TimePicker Styles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content")(11, "mat-form-field")(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Time Style for Desktop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerTimeComponent_Template_mat_select_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.desktopStyle, $event) || (ctx.desktopStyle = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DatepickerTimeComponent_Template_mat_select_selectionChange_14_listener() {
          return ctx.reloadDatepicker();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Wheel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field")(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Time Style for Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerTimeComponent_Template_mat_select_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.mobileStyle, $event) || (ctx.mobileStyle = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Wheel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field")(28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Style for Decorator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerTimeComponent_Template_mat_select_ngModelChange_30_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.decoratorStyle, $event) || (ctx.decoratorStyle = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Underline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-checkbox", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerTimeComponent_Template_mat_checkbox_ngModelChange_37_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.infiniteScroll, $event) || (ctx.infiniteScroll = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Active Infinite Scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-checkbox", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerTimeComponent_Template_mat_checkbox_ngModelChange_39_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.showDiviner, $event) || (ctx.showDiviner = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Show Two Dots");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-checkbox", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerTimeComponent_Template_mat_checkbox_ngModelChange_41_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.showSeconds, $event) || (ctx.showSeconds = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Show Seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-checkbox", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerTimeComponent_Template_mat_checkbox_ngModelChange_43_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.dynamicTouchUI, $event) || (ctx.dynamicTouchUI = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Automatic Active TouchUI for Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card")(46, "mat-card-header")(47, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Action Bar Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, DatepickerTimeComponent_button_50_Template, 2, 0, "button", 12)(51, DatepickerTimeComponent_button_51_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-checkbox", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerTimeComponent_Template_mat_checkbox_ngModelChange_52_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.showToday, $event) || (ctx.showToday = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Show Today Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card")(55, "mat-card-header")(56, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "TimePicker Format");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card-content")(59, "mat-form-field")(60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Number of Visible Items for Wheel Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerTimeComponent_Template_mat_select_ngModelChange_62_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.visibleItemsCount, $event) || (ctx.visibleItemsCount = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DatepickerTimeComponent_Template_mat_select_selectionChange_62_listener() {
          return ctx.reloadDatepicker();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field")(70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Hour Format 12/24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerTimeComponent_Template_mat_select_ngModelChange_72_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.hourFormat, $event) || (ctx.hourFormat = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-form-field")(78, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Step for Hour Picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerTimeComponent_Template_mat_select_ngModelChange_80_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.hourStep, $event) || (ctx.hourStep = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DatepickerTimeComponent_Template_mat_select_selectionChange_80_listener() {
          return ctx.reloadDatepicker();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-form-field")(90, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Step for Minute Picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerTimeComponent_Template_mat_select_ngModelChange_92_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.minuteStep, $event) || (ctx.minuteStep = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DatepickerTimeComponent_Template_mat_select_selectionChange_92_listener() {
          return ctx.reloadDatepicker();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-form-field")(106, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Step for Second Picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DatepickerTimeComponent_Template_mat_select_ngModelChange_108_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.minuteStep, $event) || (ctx.minuteStep = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DatepickerTimeComponent_Template_mat_select_selectionChange_108_listener() {
          return ctx.reloadDatepicker();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c0, !ctx.isLoad));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current Date: ", ctx.currentDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.desktopStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.mobileStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.decoratorStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.infiniteScroll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.showDiviner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.dynamicTouchUI);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.showToday);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.visibleItemsCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.hourFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.hourStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.minuteStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.minuteStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 30);
      }
    },
    dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerActions, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerCancel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerApply, projects_ngx_ute_material_datepicker_time_src_datepicker_time__WEBPACK_IMPORTED_MODULE_4__.UteDatepickerTime, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass],
    styles: [".datepicker-time-block[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.75rem;\n}\n.datepicker-time-block[_ngcontent-%COMP%]   .picker-block[_ngcontent-%COMP%] {\n  min-width: 32%;\n  transition: all 0.2s ease-in-out;\n}\n.datepicker-time-block[_ngcontent-%COMP%]   .picker-block.filtered[_ngcontent-%COMP%] {\n  background-color: rgb(220, 220, 220);\n  opacity: 0.5;\n  border-radius: 8px;\n  height: 4.875rem;\n}\n.datepicker-time-block[_ngcontent-%COMP%]   .picker-block[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.datepicker-time-block[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  background-color: rgba(200, 255, 200, 0.5);\n  border: 2px solid rgb(150, 200, 150);\n  padding: 0.5rem 2rem;\n  border-radius: 8px;\n  width: 100%;\n  height: 3.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.datepicker-time-settings[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: space-between;\n}\n.datepicker-time-settings[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  max-width: 32%;\n  width: 100%;\n  margin-top: 1rem;\n}\n.datepicker-time-settings[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.datepicker-time-settings[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .mat-mdc-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n\n@media screen and (max-width: 900px) {\n  .datepicker-time-block[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .datepicker-time-block[_ngcontent-%COMP%]   .picker-block[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .datepicker-time-block[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .datepicker-time-settings[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXRlcGlja2VyLXRpbWUvZGF0ZXBpY2tlci10aW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7QUFFUjtBQURRO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUdaO0FBRFE7RUFDSSxXQUFBO0FBR1o7QUFBSTtFQUNJLDBDQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBRVI7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQUk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRVI7QUFEUTtFQUNJLHVCQUFBO0FBR1o7QUFEUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFHWjs7QUFFQTtFQUNJO0lBQ0ksZUFBQTtFQUNOO0VBQU07SUFDSSxXQUFBO0VBRVY7RUFBTTtJQUNJLFlBQUE7RUFFVjtFQUVNO0lBQ0ksZUFBQTtFQUFWO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZXBpY2tlci10aW1lLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMS43NXJlbTtcbiAgICAucGlja2VyLWJsb2NrIHtcbiAgICAgICAgbWluLXdpZHRoOiAzMiU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAmLmZpbHRlcmVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDIyMCwgMjIwKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGhlaWdodDogNC44NzVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLm1hdC1tZGMtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudGV4dCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyNTUsIDIwMCwgMC41KTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxNTAsIDIwMCwgMTUwLCAxKTtcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMy42MjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxufVxuXG4uZGF0ZXBpY2tlci10aW1lLXNldHRpbmdzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hdC1jYXJkIHtcbiAgICAgICAgbWF4LXdpZHRoOiAzMiU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAubWF0LW1kYy1jYXJkLWhlYWRlciB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubWF0LW1kYy1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBnYXA6IDAuMjVyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgLmRhdGVwaWNrZXItdGltZS1ibG9jayB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLnBpY2tlci1ibG9jayB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRhdGVwaWNrZXItdGltZS1zZXR0aW5ncyB7XG4gICAgICAgIG1hdC1jYXJkIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8024:
/*!*****************************************************!*\
  !*** ./src/app/components/datepicker-time/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatepickerTimeComponent: () => (/* reexport safe */ _datepicker_time__WEBPACK_IMPORTED_MODULE_0__.DatepickerTimeComponent)
/* harmony export */ });
/* harmony import */ var _datepicker_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datepicker-time */ 4760);


/***/ }),

/***/ 5964:
/*!******************************************!*\
  !*** ./src/app/pages/example/example.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Example: () => (/* binding */ Example)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var src_app_components_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components */ 4440);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);





function Example_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
class Example {
  constructor(route) {
    this.route = route;
    this.componentPortal = null;
    this.compItem = null;
    this.compService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(src_app_components_components__WEBPACK_IMPORTED_MODULE_0__.ComponentsService).getComps();
    this.route.parent?.params.subscribe(p => {
      if (p.id) {
        this.pageItem = p;
      }
    });
  }
  get getComp() {
    return this.pageItem && this.pageItem.id ? this.compService.find(cm => cm.id === this.pageItem.id) : null;
  }
  static #_ = this.ɵfac = function Example_Factory(t) {
    return new (t || Example)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: Example,
    selectors: [["app-example"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngComponentOutlet"]],
    template: function Example_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Example_ng_container_0_Template, 1, 0, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngComponentOutlet", ctx.getComp.component);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgComponentOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2620:
/*!****************************************!*\
  !*** ./src/app/pages/example/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Example: () => (/* reexport safe */ _example__WEBPACK_IMPORTED_MODULE_0__.Example)
/* harmony export */ });
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example */ 5964);


/***/ }),

/***/ 6544:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/race.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   race: () => (/* binding */ race),
/* harmony export */   raceInit: () => (/* binding */ raceInit)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 1296);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./innerFrom */ 7456);
/* harmony import */ var _util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/argsOrArgArray */ 3859);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/OperatorSubscriber */ 3192);




function race(...sources) {
  sources = (0,_util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_0__.argsOrArgArray)(sources);
  return sources.length === 1 ? (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(sources[0]) : new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(raceInit(sources));
}
function raceInit(sources) {
  return subscriber => {
    let subscriptions = [];
    for (let i = 0; subscriptions && !subscriber.closed && i < sources.length; i++) {
      subscriptions.push((0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(sources[i]).subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__.createOperatorSubscriber)(subscriber, value => {
        if (subscriptions) {
          for (let s = 0; s < subscriptions.length; s++) {
            s !== i && subscriptions[s].unsubscribe();
          }
          subscriptions = null;
        }
        subscriber.next(value);
      })));
    }
  };
}

/***/ }),

/***/ 7520:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/elementAt.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elementAt: () => (/* binding */ elementAt)
/* harmony export */ });
/* harmony import */ var _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ArgumentOutOfRangeError */ 9372);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ 6560);
/* harmony import */ var _throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./throwIfEmpty */ 7440);
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultIfEmpty */ 3580);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./take */ 7496);





function elementAt(index, defaultValue) {
  if (index < 0) {
    throw new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_0__.ArgumentOutOfRangeError();
  }
  const hasDefaultValue = arguments.length >= 2;
  return source => source.pipe((0,_filter__WEBPACK_IMPORTED_MODULE_1__.filter)((v, i) => i === index), (0,_take__WEBPACK_IMPORTED_MODULE_2__.take)(1), hasDefaultValue ? (0,_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__.defaultIfEmpty)(defaultValue) : (0,_throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__.throwIfEmpty)(() => new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_0__.ArgumentOutOfRangeError()));
}

/***/ }),

/***/ 9372:
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/ArgumentOutOfRangeError.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArgumentOutOfRangeError: () => (/* binding */ ArgumentOutOfRangeError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ 6632);

const ArgumentOutOfRangeError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function ArgumentOutOfRangeErrorImpl() {
  _super(this);
  this.name = 'ArgumentOutOfRangeError';
  this.message = 'argument out of range';
});

/***/ }),

/***/ 3859:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/argsOrArgArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   argsOrArgArray: () => (/* binding */ argsOrArgArray)
/* harmony export */ });
const {
  isArray
} = Array;
function argsOrArgArray(args) {
  return args.length === 1 && isArray(args[0]) ? args[0] : args;
}

/***/ }),

/***/ 2760:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/observers/private.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedResizeObserver: () => (/* binding */ SharedResizeObserver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5100);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1296);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7488);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 4364);





/**
 * Handler that logs "ResizeObserver loop limit exceeded" errors.
 * These errors are not shown in the Chrome console, so we log them to ensure developers are aware.
 * @param e The error
 */
const loopLimitExceededErrorHandler = e => {
  if (e instanceof Error && e.message === 'ResizeObserver loop limit exceeded') {
    console.error(`${e.message}. This could indicate a performance issue with your app. See https://github.com/WICG/resize-observer/blob/master/explainer.md#error-handling`);
  }
};
/**
 * A shared ResizeObserver to be used for a particular box type (content-box, border-box, or
 * device-pixel-content-box)
 */
class SingleBoxSharedResizeObserver {
  constructor( /** The box type to observe for resizes. */
  _box) {
    this._box = _box;
    /** Stream that emits when the shared observer is destroyed. */
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    /** Stream of all events from the ResizeObserver. */
    this._resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    /** A map of elements to streams of their resize events. */
    this._elementObservables = new Map();
    if (typeof ResizeObserver !== 'undefined') {
      this._resizeObserver = new ResizeObserver(entries => this._resizeSubject.next(entries));
    }
  }
  /**
   * Gets a stream of resize events for the given element.
   * @param target The element to observe.
   * @return The stream of resize events for the element.
   */
  observe(target) {
    if (!this._elementObservables.has(target)) {
      this._elementObservables.set(target, new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
        const subscription = this._resizeSubject.subscribe(observer);
        this._resizeObserver?.observe(target, {
          box: this._box
        });
        return () => {
          this._resizeObserver?.unobserve(target);
          subscription.unsubscribe();
          this._elementObservables.delete(target);
        };
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(entries => entries.some(entry => entry.target === target)),
      // Share a replay of the last event so that subsequent calls to observe the same element
      // receive initial sizing info like the first one. Also enable ref counting so the
      // element will be automatically unobserved when there are no more subscriptions.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)({
        bufferSize: 1,
        refCount: true
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed)));
    }
    return this._elementObservables.get(target);
  }
  /** Destroys this instance. */
  destroy() {
    this._destroyed.next();
    this._destroyed.complete();
    this._resizeSubject.complete();
    this._elementObservables.clear();
  }
}
/**
 * Allows observing resize events on multiple elements using a shared set of ResizeObserver.
 * Sharing a ResizeObserver instance is recommended for better performance (see
 * https://github.com/WICG/resize-observer/issues/59).
 *
 * Rather than share a single `ResizeObserver`, this class creates one `ResizeObserver` per type
 * of observed box ('content-box', 'border-box', and 'device-pixel-content-box'). This avoids
 * later calls to `observe` with a different box type from influencing the events dispatched to
 * earlier calls.
 */
class SharedResizeObserver {
  constructor() {
    /** Map of box type to shared resize observer. */
    this._observers = new Map();
    /** The Angular zone. */
    this._ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone);
    if (typeof ResizeObserver !== 'undefined' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      this._ngZone.runOutsideAngular(() => {
        window.addEventListener('error', loopLimitExceededErrorHandler);
      });
    }
  }
  ngOnDestroy() {
    for (const [, observer] of this._observers) {
      observer.destroy();
    }
    this._observers.clear();
    if (typeof ResizeObserver !== 'undefined' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      window.removeEventListener('error', loopLimitExceededErrorHandler);
    }
  }
  /**
   * Gets a stream of resize events for the given target element and box type.
   * @param target The element to observe for resizes.
   * @param options Options to pass to the `ResizeObserver`
   * @return The stream of resize events for the element.
   */
  observe(target, options) {
    const box = options?.box || 'content-box';
    if (!this._observers.has(box)) {
      this._observers.set(box, new SingleBoxSharedResizeObserver(box));
    }
    return this._observers.get(box).observe(target);
  }
  static #_ = this.ɵfac = function SharedResizeObserver_Factory(t) {
    return new (t || SharedResizeObserver)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: SharedResizeObserver,
    factory: SharedResizeObserver.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](SharedResizeObserver, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [], null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3988:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/text-field.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillMonitor: () => (/* binding */ AutofillMonitor),
/* harmony export */   CdkAutofill: () => (/* binding */ CdkAutofill),
/* harmony export */   CdkTextareaAutosize: () => (/* binding */ CdkTextareaAutosize),
/* harmony export */   TextFieldModule: () => (/* binding */ TextFieldModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ 9664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 2932);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4584);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5100);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3244);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4364);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 2676);









/** Options to pass to the animationstart listener. */
const listenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: true
});
/**
 * An injectable service that can be used to monitor the autofill state of an input.
 * Based on the following blog post:
 * https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
 */
class AutofillMonitor {
  constructor(_platform, _ngZone) {
    this._platform = _platform;
    this._ngZone = _ngZone;
    this._monitoredElements = new Map();
  }
  monitor(elementOrRef) {
    if (!this._platform.isBrowser) {
      return rxjs__WEBPACK_IMPORTED_MODULE_1__.EMPTY;
    }
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceElement)(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      return info.subject;
    }
    const result = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    const cssClass = 'cdk-text-field-autofilled';
    const listener = event => {
      // Animation events fire on initial element render, we check for the presence of the autofill
      // CSS class to make sure this is a real change in state, not just the initial render before
      // we fire off events.
      if (event.animationName === 'cdk-text-field-autofill-start' && !element.classList.contains(cssClass)) {
        element.classList.add(cssClass);
        this._ngZone.run(() => result.next({
          target: event.target,
          isAutofilled: true
        }));
      } else if (event.animationName === 'cdk-text-field-autofill-end' && element.classList.contains(cssClass)) {
        element.classList.remove(cssClass);
        this._ngZone.run(() => result.next({
          target: event.target,
          isAutofilled: false
        }));
      }
    };
    this._ngZone.runOutsideAngular(() => {
      element.addEventListener('animationstart', listener, listenerOptions);
      element.classList.add('cdk-text-field-autofill-monitored');
    });
    this._monitoredElements.set(element, {
      subject: result,
      unlisten: () => {
        element.removeEventListener('animationstart', listener, listenerOptions);
      }
    });
    return result;
  }
  stopMonitoring(elementOrRef) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceElement)(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      info.unlisten();
      info.subject.complete();
      element.classList.remove('cdk-text-field-autofill-monitored');
      element.classList.remove('cdk-text-field-autofilled');
      this._monitoredElements.delete(element);
    }
  }
  ngOnDestroy() {
    this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
  }
  static #_ = this.ɵfac = function AutofillMonitor_Factory(t) {
    return new (t || AutofillMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: AutofillMonitor,
    factory: AutofillMonitor.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AutofillMonitor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone
  }], null);
})();
/** A directive that can be used to monitor the autofill state of an input. */
class CdkAutofill {
  constructor(_elementRef, _autofillMonitor) {
    this._elementRef = _elementRef;
    this._autofillMonitor = _autofillMonitor;
    /** Emits when the autofill state of the element changes. */
    this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  ngOnInit() {
    this._autofillMonitor.monitor(this._elementRef).subscribe(event => this.cdkAutofill.emit(event));
  }
  ngOnDestroy() {
    this._autofillMonitor.stopMonitoring(this._elementRef);
  }
  static #_ = this.ɵfac = function CdkAutofill_Factory(t) {
    return new (t || CdkAutofill)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](AutofillMonitor));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: CdkAutofill,
    selectors: [["", "cdkAutofill", ""]],
    outputs: {
      cdkAutofill: "cdkAutofill"
    },
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkAutofill, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: '[cdkAutofill]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
  }, {
    type: AutofillMonitor
  }], {
    cdkAutofill: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();

/** Directive to automatically resize a textarea to fit its content. */
class CdkTextareaAutosize {
  /** Minimum amount of rows in the textarea. */
  get minRows() {
    return this._minRows;
  }
  set minRows(value) {
    this._minRows = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(value);
    this._setMinHeight();
  }
  /** Maximum amount of rows in the textarea. */
  get maxRows() {
    return this._maxRows;
  }
  set maxRows(value) {
    this._maxRows = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(value);
    this._setMaxHeight();
  }
  /** Whether autosizing is enabled or not */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    // Only act if the actual value changed. This specifically helps to not run
    // resizeToFitContent too early (i.e. before ngAfterViewInit)
    if (this._enabled !== value) {
      (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
    }
  }
  get placeholder() {
    return this._textareaElement.placeholder;
  }
  set placeholder(value) {
    this._cachedPlaceholderHeight = undefined;
    if (value) {
      this._textareaElement.setAttribute('placeholder', value);
    } else {
      this._textareaElement.removeAttribute('placeholder');
    }
    this._cacheTextareaPlaceholderHeight();
  }
  constructor(_elementRef, _platform, _ngZone, /** @breaking-change 11.0.0 make document required */
  document) {
    this._elementRef = _elementRef;
    this._platform = _platform;
    this._ngZone = _ngZone;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._enabled = true;
    /**
     * Value of minRows as of last resize. If the minRows has decreased, the
     * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
     * does not have the same problem because it does not affect the textarea's scrollHeight.
     */
    this._previousMinRows = -1;
    this._isViewInited = false;
    /** Handles `focus` and `blur` events. */
    this._handleFocusEvent = event => {
      this._hasFocus = event.type === 'focus';
    };
    this._document = document;
    this._textareaElement = this._elementRef.nativeElement;
  }
  /** Sets the minimum height of the textarea as determined by minRows. */
  _setMinHeight() {
    const minHeight = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null;
    if (minHeight) {
      this._textareaElement.style.minHeight = minHeight;
    }
  }
  /** Sets the maximum height of the textarea as determined by maxRows. */
  _setMaxHeight() {
    const maxHeight = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null;
    if (maxHeight) {
      this._textareaElement.style.maxHeight = maxHeight;
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      // Remember the height which we started with in case autosizing is disabled
      this._initialHeight = this._textareaElement.style.height;
      this.resizeToFitContent();
      this._ngZone.runOutsideAngular(() => {
        const window = this._getWindow();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(window, 'resize').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(16), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(() => this.resizeToFitContent(true));
        this._textareaElement.addEventListener('focus', this._handleFocusEvent);
        this._textareaElement.addEventListener('blur', this._handleFocusEvent);
      });
      this._isViewInited = true;
      this.resizeToFitContent(true);
    }
  }
  ngOnDestroy() {
    this._textareaElement.removeEventListener('focus', this._handleFocusEvent);
    this._textareaElement.removeEventListener('blur', this._handleFocusEvent);
    this._destroyed.next();
    this._destroyed.complete();
  }
  /**
   * Cache the height of a single-row textarea if it has not already been cached.
   *
   * We need to know how large a single "row" of a textarea is in order to apply minRows and
   * maxRows. For the initial version, we will assume that the height of a single line in the
   * textarea does not ever change.
   */
  _cacheTextareaLineHeight() {
    if (this._cachedLineHeight) {
      return;
    }
    // Use a clone element because we have to override some styles.
    let textareaClone = this._textareaElement.cloneNode(false);
    textareaClone.rows = 1;
    // Use `position: absolute` so that this doesn't cause a browser layout and use
    // `visibility: hidden` so that nothing is rendered. Clear any other styles that
    // would affect the height.
    textareaClone.style.position = 'absolute';
    textareaClone.style.visibility = 'hidden';
    textareaClone.style.border = 'none';
    textareaClone.style.padding = '0';
    textareaClone.style.height = '';
    textareaClone.style.minHeight = '';
    textareaClone.style.maxHeight = '';
    // In Firefox it happens that textarea elements are always bigger than the specified amount
    // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
    // As a workaround that removes the extra space for the scrollbar, we can just set overflow
    // to hidden. This ensures that there is no invalid calculation of the line height.
    // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
    textareaClone.style.overflow = 'hidden';
    this._textareaElement.parentNode.appendChild(textareaClone);
    this._cachedLineHeight = textareaClone.clientHeight;
    textareaClone.remove();
    // Min and max heights have to be re-calculated if the cached line height changes
    this._setMinHeight();
    this._setMaxHeight();
  }
  _measureScrollHeight() {
    const element = this._textareaElement;
    const previousMargin = element.style.marginBottom || '';
    const isFirefox = this._platform.FIREFOX;
    const needsMarginFiller = isFirefox && this._hasFocus;
    const measuringClass = isFirefox ? 'cdk-textarea-autosize-measuring-firefox' : 'cdk-textarea-autosize-measuring';
    // In some cases the page might move around while we're measuring the `textarea` on Firefox. We
    // work around it by assigning a temporary margin with the same height as the `textarea` so that
    // it occupies the same amount of space. See #23233.
    if (needsMarginFiller) {
      element.style.marginBottom = `${element.clientHeight}px`;
    }
    // Reset the textarea height to auto in order to shrink back to its default size.
    // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
    element.classList.add(measuringClass);
    // The measuring class includes a 2px padding to workaround an issue with Chrome,
    // so we account for that extra space here by subtracting 4 (2px top + 2px bottom).
    const scrollHeight = element.scrollHeight - 4;
    element.classList.remove(measuringClass);
    if (needsMarginFiller) {
      element.style.marginBottom = previousMargin;
    }
    return scrollHeight;
  }
  _cacheTextareaPlaceholderHeight() {
    if (!this._isViewInited || this._cachedPlaceholderHeight != undefined) {
      return;
    }
    if (!this.placeholder) {
      this._cachedPlaceholderHeight = 0;
      return;
    }
    const value = this._textareaElement.value;
    this._textareaElement.value = this._textareaElement.placeholder;
    this._cachedPlaceholderHeight = this._measureScrollHeight();
    this._textareaElement.value = value;
  }
  ngDoCheck() {
    if (this._platform.isBrowser) {
      this.resizeToFitContent();
    }
  }
  /**
   * Resize the textarea to fit its content.
   * @param force Whether to force a height recalculation. By default the height will be
   *    recalculated only if the value changed since the last call.
   */
  resizeToFitContent(force = false) {
    // If autosizing is disabled, just skip everything else
    if (!this._enabled) {
      return;
    }
    this._cacheTextareaLineHeight();
    this._cacheTextareaPlaceholderHeight();
    // If we haven't determined the line-height yet, we know we're still hidden and there's no point
    // in checking the height of the textarea.
    if (!this._cachedLineHeight) {
      return;
    }
    const textarea = this._elementRef.nativeElement;
    const value = textarea.value;
    // Only resize if the value or minRows have changed since these calculations can be expensive.
    if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
      return;
    }
    const scrollHeight = this._measureScrollHeight();
    const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0);
    // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
    textarea.style.height = `${height}px`;
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame !== 'undefined') {
        requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
      } else {
        setTimeout(() => this._scrollToCaretPosition(textarea));
      }
    });
    this._previousValue = value;
    this._previousMinRows = this._minRows;
  }
  /**
   * Resets the textarea to its original size
   */
  reset() {
    // Do not try to change the textarea, if the initialHeight has not been determined yet
    // This might potentially remove styles when reset() is called before ngAfterViewInit
    if (this._initialHeight !== undefined) {
      this._textareaElement.style.height = this._initialHeight;
    }
  }
  _noopInputHandler() {
    // no-op handler that ensures we're running change detection on input events.
  }
  /** Access injected document if available or fallback to global document reference */
  _getDocument() {
    return this._document || document;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    const doc = this._getDocument();
    return doc.defaultView || window;
  }
  /**
   * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
   * prevent it from scrolling to the caret position. We need to re-set the selection
   * in order for it to scroll to the proper position.
   */
  _scrollToCaretPosition(textarea) {
    const {
      selectionStart,
      selectionEnd
    } = textarea;
    // IE will throw an "Unspecified error" if we try to set the selection range after the
    // element has been removed from the DOM. Assert that the directive hasn't been destroyed
    // between the time we requested the animation frame and when it was executed.
    // Also note that we have to assert that the textarea is focused before we set the
    // selection range. Setting the selection range on a non-focused textarea will cause
    // it to receive focus on IE and Edge.
    if (!this._destroyed.isStopped && this._hasFocus) {
      textarea.setSelectionRange(selectionStart, selectionEnd);
    }
  }
  static #_ = this.ɵfac = function CdkTextareaAutosize_Factory(t) {
    return new (t || CdkTextareaAutosize)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT, 8));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: CdkTextareaAutosize,
    selectors: [["textarea", "cdkTextareaAutosize", ""]],
    hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
    hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() {
          return ctx._noopInputHandler();
        });
      }
    },
    inputs: {
      minRows: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInputFlags"].None, "cdkAutosizeMinRows", "minRows"],
      maxRows: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInputFlags"].None, "cdkAutosizeMaxRows", "maxRows"],
      enabled: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInputFlags"].HasDecoratorInputTransform, "cdkTextareaAutosize", "enabled", _angular_core__WEBPACK_IMPORTED_MODULE_4__.booleanAttribute],
      placeholder: "placeholder"
    },
    exportAs: ["cdkTextareaAutosize"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInputTransformsFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](CdkTextareaAutosize, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'textarea[cdkTextareaAutosize]',
      exportAs: 'cdkTextareaAutosize',
      host: {
        'class': 'cdk-textarea-autosize',
        // Textarea elements that have the directive applied should have a single row by default.
        // Browsers normally show two rows by default and therefore this limits the minRows binding.
        'rows': '1',
        '(input)': '_noopInputHandler()'
      },
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
    }]
  }], {
    minRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: ['cdkAutosizeMinRows']
    }],
    maxRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: ['cdkAutosizeMaxRows']
    }],
    enabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        alias: 'cdkTextareaAutosize',
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_4__.booleanAttribute
      }]
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }]
  });
})();
class TextFieldModule {
  static #_ = this.ɵfac = function TextFieldModule_Factory(t) {
    return new (t || TextFieldModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: TextFieldModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({});
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](TextFieldModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      imports: [CdkAutofill, CdkTextareaAutosize],
      exports: [CdkAutofill, CdkTextareaAutosize]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 8512:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/card.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_CARD_CONFIG: () => (/* binding */ MAT_CARD_CONFIG),
/* harmony export */   MatCard: () => (/* binding */ MatCard),
/* harmony export */   MatCardActions: () => (/* binding */ MatCardActions),
/* harmony export */   MatCardAvatar: () => (/* binding */ MatCardAvatar),
/* harmony export */   MatCardContent: () => (/* binding */ MatCardContent),
/* harmony export */   MatCardFooter: () => (/* binding */ MatCardFooter),
/* harmony export */   MatCardHeader: () => (/* binding */ MatCardHeader),
/* harmony export */   MatCardImage: () => (/* binding */ MatCardImage),
/* harmony export */   MatCardLgImage: () => (/* binding */ MatCardLgImage),
/* harmony export */   MatCardMdImage: () => (/* binding */ MatCardMdImage),
/* harmony export */   MatCardModule: () => (/* binding */ MatCardModule),
/* harmony export */   MatCardSmImage: () => (/* binding */ MatCardSmImage),
/* harmony export */   MatCardSubtitle: () => (/* binding */ MatCardSubtitle),
/* harmony export */   MatCardTitle: () => (/* binding */ MatCardTitle),
/* harmony export */   MatCardTitleGroup: () => (/* binding */ MatCardTitleGroup),
/* harmony export */   MatCardXlImage: () => (/* binding */ MatCardXlImage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 2544);





/** Injection token that can be used to provide the default options the card module. */
const _c0 = ["*"];
const _c1 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["", "mat-card-image", ""], ["", "matCardImage", ""], ["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""], ["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""], ["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""], ["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], "*"];
const _c2 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]", "*"];
const _c3 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
const _c4 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
const MAT_CARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_CARD_CONFIG');
/**
 * Material Design card component. Cards contain content and actions about a single subject.
 * See https://material.io/design/components/cards.html
 *
 * MatCard provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCard {
  constructor(config) {
    this.appearance = config?.appearance || 'raised';
  }
  static #_ = this.ɵfac = function MatCard_Factory(t) {
    return new (t || MatCard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_CARD_CONFIG, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatCard,
    selectors: [["mat-card"]],
    hostAttrs: [1, "mat-mdc-card", "mdc-card"],
    hostVars: 4,
    hostBindings: function MatCard_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-card-outlined", ctx.appearance === "outlined")("mdc-card--outlined", ctx.appearance === "outlined");
      }
    },
    inputs: {
      appearance: "appearance"
    },
    exportAs: ["matCard"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatCard_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    styles: [".mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:\"\"}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}.mat-mdc-card{border-radius:var(--mdc-elevated-card-container-shape);background-color:var(--mdc-elevated-card-container-color);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color);box-shadow:var(--mdc-elevated-card-container-elevation)}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width);border-style:solid;border-color:var(--mdc-outlined-card-outline-color);border-radius:var(--mdc-outlined-card-container-shape);background-color:var(--mdc-outlined-card-container-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined .mdc-card::after{border-radius:var(--mdc-outlined-card-container-shape)}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card{position:relative}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card',
      host: {
        'class': 'mat-mdc-card mdc-card',
        '[class.mat-mdc-card-outlined]': 'appearance === "outlined"',
        '[class.mdc-card--outlined]': 'appearance === "outlined"'
      },
      exportAs: 'matCard',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: "<ng-content></ng-content>\n",
      styles: [".mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:\"\"}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}.mat-mdc-card{border-radius:var(--mdc-elevated-card-container-shape);background-color:var(--mdc-elevated-card-container-color);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color);box-shadow:var(--mdc-elevated-card-container-elevation)}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width);border-style:solid;border-color:var(--mdc-outlined-card-outline-color);border-radius:var(--mdc-outlined-card-container-shape);background-color:var(--mdc-outlined-card-container-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined .mdc-card::after{border-radius:var(--mdc-outlined-card-container-shape)}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card{position:relative}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}"]
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_CARD_CONFIG]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], {
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
// TODO(jelbourn): add `MatActionCard`, which is a card that acts like a button (and has a ripple).
// Supported in MDC with `.mdc-card__primary-action`. Will require additional a11y docs for users.
/**
 * Title of a card, intended for use within `<mat-card>`. This component is an optional
 * convenience for one variety of card title; any custom title element may be used in its place.
 *
 * MatCardTitle provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardTitle {
  static #_ = this.ɵfac = function MatCardTitle_Factory(t) {
    return new (t || MatCardTitle)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardTitle,
    selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
    hostAttrs: [1, "mat-mdc-card-title"],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
      host: {
        'class': 'mat-mdc-card-title'
      },
      standalone: true
    }]
  }], null, null);
})();
/**
 * Container intended to be used within the `<mat-card>` component. Can contain exactly one
 * `<mat-card-title>`, one `<mat-card-subtitle>` and one content image of any size
 * (e.g. `<img matCardLgImage>`).
 */
class MatCardTitleGroup {
  static #_ = this.ɵfac = function MatCardTitleGroup_Factory(t) {
    return new (t || MatCardTitleGroup)();
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatCardTitleGroup,
    selectors: [["mat-card-title-group"]],
    hostAttrs: [1, "mat-mdc-card-title-group"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c2,
    decls: 4,
    vars: 0,
    template: function MatCardTitleGroup_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitleGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card-title-group',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-mdc-card-title-group'
      },
      standalone: true,
      template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]\"></ng-content>\n<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
/**
 * Content of a card, intended for use within `<mat-card>`. This component is an optional
 * convenience for use with other convenience elements, such as `<mat-card-title>`; any custom
 * content block element may be used in its place.
 *
 * MatCardContent provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardContent {
  static #_ = this.ɵfac = function MatCardContent_Factory(t) {
    return new (t || MatCardContent)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardContent,
    selectors: [["mat-card-content"]],
    hostAttrs: [1, "mat-mdc-card-content"],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-content',
      host: {
        'class': 'mat-mdc-card-content'
      },
      standalone: true
    }]
  }], null, null);
})();
/**
 * Sub-title of a card, intended for use within `<mat-card>` beneath a `<mat-card-title>`. This
 * component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-title>`.
 *
 * MatCardSubtitle provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardSubtitle {
  static #_ = this.ɵfac = function MatCardSubtitle_Factory(t) {
    return new (t || MatCardSubtitle)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardSubtitle,
    selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
    hostAttrs: [1, "mat-mdc-card-subtitle"],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSubtitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
      host: {
        'class': 'mat-mdc-card-subtitle'
      },
      standalone: true
    }]
  }], null, null);
})();
/**
 * Bottom area of a card that contains action buttons, intended for use within `<mat-card>`.
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-content>`; any custom action block element may be used in its place.
 *
 * MatCardActions provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardActions {
  constructor() {
    // TODO(jelbourn): deprecate `align` in favor of `actionPosition` or `actionAlignment`
    // as to not conflict with the native `align` attribute.
    /** Position of the actions inside the card. */
    this.align = 'start';
  }
  static #_ = this.ɵfac = function MatCardActions_Factory(t) {
    return new (t || MatCardActions)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardActions,
    selectors: [["mat-card-actions"]],
    hostAttrs: [1, "mat-mdc-card-actions", "mdc-card__actions"],
    hostVars: 2,
    hostBindings: function MatCardActions_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-card-actions-align-end", ctx.align === "end");
      }
    },
    inputs: {
      align: "align"
    },
    exportAs: ["matCardActions"],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-actions',
      exportAs: 'matCardActions',
      host: {
        'class': 'mat-mdc-card-actions mdc-card__actions',
        '[class.mat-mdc-card-actions-align-end]': 'align === "end"'
      },
      standalone: true
    }]
  }], null, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Header region of a card, intended for use within `<mat-card>`. This header captures
 * a card title, subtitle, and avatar.  This component is an optional convenience for use with
 * other convenience elements, such as `<mat-card-footer>`; any custom header block element may be
 * used in its place.
 *
 * MatCardHeader provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardHeader {
  static #_ = this.ɵfac = function MatCardHeader_Factory(t) {
    return new (t || MatCardHeader)();
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatCardHeader,
    selectors: [["mat-card-header"]],
    hostAttrs: [1, "mat-mdc-card-header"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c4,
    decls: 4,
    vars: 0,
    consts: [[1, "mat-mdc-card-header-text"]],
    template: function MatCardHeader_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card-header',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-mdc-card-header'
      },
      standalone: true,
      template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-mdc-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
/**
 * Footer area a card, intended for use within `<mat-card>`.
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-content>`; any custom footer block element may be used in its place.
 *
 * MatCardFooter provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardFooter {
  static #_ = this.ɵfac = function MatCardFooter_Factory(t) {
    return new (t || MatCardFooter)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardFooter,
    selectors: [["mat-card-footer"]],
    hostAttrs: [1, "mat-mdc-card-footer"],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardFooter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-footer',
      host: {
        'class': 'mat-mdc-card-footer'
      },
      standalone: true
    }]
  }], null, null);
})();
// TODO(jelbourn): deprecate the "image" selectors to replace with "media".
// TODO(jelbourn): support `.mdc-card__media-content`.
/**
 * Primary image content for a card, intended for use within `<mat-card>`. Can be applied to
 * any media element, such as `<img>` or `<picture>`.
 *
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-content>`; any custom media element may be used in its place.
 *
 * MatCardImage provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardImage {
  static #_ = this.ɵfac = function MatCardImage_Factory(t) {
    return new (t || MatCardImage)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardImage,
    selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
    hostAttrs: [1, "mat-mdc-card-image", "mdc-card__media"],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-image], [matCardImage]',
      host: {
        'class': 'mat-mdc-card-image mdc-card__media'
      },
      standalone: true
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but small. */
class MatCardSmImage {
  static #_ = this.ɵfac = function MatCardSmImage_Factory(t) {
    return new (t || MatCardSmImage)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardSmImage,
    selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
    hostAttrs: [1, "mat-mdc-card-sm-image", "mdc-card__media"],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSmImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-sm-image], [matCardImageSmall]',
      host: {
        'class': 'mat-mdc-card-sm-image mdc-card__media'
      },
      standalone: true
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but medium. */
class MatCardMdImage {
  static #_ = this.ɵfac = function MatCardMdImage_Factory(t) {
    return new (t || MatCardMdImage)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardMdImage,
    selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
    hostAttrs: [1, "mat-mdc-card-md-image", "mdc-card__media"],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardMdImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-md-image], [matCardImageMedium]',
      host: {
        'class': 'mat-mdc-card-md-image mdc-card__media'
      },
      standalone: true
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but large. */
class MatCardLgImage {
  static #_ = this.ɵfac = function MatCardLgImage_Factory(t) {
    return new (t || MatCardLgImage)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardLgImage,
    selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
    hostAttrs: [1, "mat-mdc-card-lg-image", "mdc-card__media"],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardLgImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-lg-image], [matCardImageLarge]',
      host: {
        'class': 'mat-mdc-card-lg-image mdc-card__media'
      },
      standalone: true
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but extra-large. */
class MatCardXlImage {
  static #_ = this.ɵfac = function MatCardXlImage_Factory(t) {
    return new (t || MatCardXlImage)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardXlImage,
    selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
    hostAttrs: [1, "mat-mdc-card-xl-image", "mdc-card__media"],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardXlImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-xl-image], [matCardImageXLarge]',
      host: {
        'class': 'mat-mdc-card-xl-image mdc-card__media'
      },
      standalone: true
    }]
  }], null, null);
})();
/**
 * Avatar image content for a card, intended for use within `<mat-card>`. Can be applied to
 * any media element, such as `<img>` or `<picture>`.
 *
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-title>`; any custom media element may be used in its place.
 *
 * MatCardAvatar provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardAvatar {
  static #_ = this.ɵfac = function MatCardAvatar_Factory(t) {
    return new (t || MatCardAvatar)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardAvatar,
    selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
    hostAttrs: [1, "mat-mdc-card-avatar"],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardAvatar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-avatar], [matCardAvatar]',
      host: {
        'class': 'mat-mdc-card-avatar'
      },
      standalone: true
    }]
  }], null, null);
})();
const CARD_DIRECTIVES = [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage];
class MatCardModule {
  static #_ = this.ɵfac = function MatCardModule_Factory(t) {
    return new (t || MatCardModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatCardModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ...CARD_DIRECTIVES],
      exports: [CARD_DIRECTIVES, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 8539:
/*!**************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/checkbox.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR: () => (/* binding */ MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR),
/* harmony export */   MAT_CHECKBOX_DEFAULT_OPTIONS: () => (/* binding */ MAT_CHECKBOX_DEFAULT_OPTIONS),
/* harmony export */   MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   MAT_CHECKBOX_REQUIRED_VALIDATOR: () => (/* binding */ MAT_CHECKBOX_REQUIRED_VALIDATOR),
/* harmony export */   MatCheckbox: () => (/* binding */ MatCheckbox),
/* harmony export */   MatCheckboxChange: () => (/* binding */ MatCheckboxChange),
/* harmony export */   MatCheckboxModule: () => (/* binding */ MatCheckboxModule),
/* harmony export */   MatCheckboxRequiredValidator: () => (/* binding */ MatCheckboxRequiredValidator),
/* harmony export */   TransitionCheckState: () => (/* binding */ TransitionCheckState),
/* harmony export */   _MatCheckboxRequiredValidatorModule: () => (/* binding */ _MatCheckboxRequiredValidatorModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 2544);





/** Injection token to be used to override the default options for `mat-checkbox`. */
const _c0 = ["input"];
const _c1 = ["label"];
const _c2 = ["*"];
const MAT_CHECKBOX_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-checkbox-default-options', {
  providedIn: 'root',
  factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: 'accent',
    clickAction: 'check-indeterminate'
  };
}

/**
 * Represents the different states that require custom transitions between them.
 * @docs-private
 */
var TransitionCheckState;
(function (TransitionCheckState) {
  /** The initial state of the component before any user interaction. */
  TransitionCheckState[TransitionCheckState["Init"] = 0] = "Init";
  /** The state representing the component when it's becoming checked. */
  TransitionCheckState[TransitionCheckState["Checked"] = 1] = "Checked";
  /** The state representing the component when it's becoming unchecked. */
  TransitionCheckState[TransitionCheckState["Unchecked"] = 2] = "Unchecked";
  /** The state representing the component when it's becoming indeterminate. */
  TransitionCheckState[TransitionCheckState["Indeterminate"] = 3] = "Indeterminate";
})(TransitionCheckState || (TransitionCheckState = {}));
/**
 * @deprecated Will stop being exported.
 * @breaking-change 19.0.0
 */
const MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCheckbox),
  multi: true
};
/** Change event object emitted by checkbox. */
class MatCheckboxChange {}
// Increasing integer for generating unique ids for checkbox components.
let nextUniqueId = 0;
// Default checkbox configuration.
const defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
class MatCheckbox {
  /** Focuses the checkbox. */
  focus() {
    this._inputElement.nativeElement.focus();
  }
  /** Creates the change event that will be emitted by the checkbox. */
  _createChangeEvent(isChecked) {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = isChecked;
    return event;
  }
  /** Gets the element on which to add the animation CSS classes. */
  _getAnimationTargetElement() {
    return this._inputElement?.nativeElement;
  }
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor(_elementRef, _changeDetectorRef, _ngZone, tabIndex, _animationMode, _options) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._ngZone = _ngZone;
    this._animationMode = _animationMode;
    this._options = _options;
    /** CSS classes to add when transitioning between the different checkbox states. */
    this._animationClasses = {
      uncheckedToChecked: 'mdc-checkbox--anim-unchecked-checked',
      uncheckedToIndeterminate: 'mdc-checkbox--anim-unchecked-indeterminate',
      checkedToUnchecked: 'mdc-checkbox--anim-checked-unchecked',
      checkedToIndeterminate: 'mdc-checkbox--anim-checked-indeterminate',
      indeterminateToChecked: 'mdc-checkbox--anim-indeterminate-checked',
      indeterminateToUnchecked: 'mdc-checkbox--anim-indeterminate-unchecked'
    };
    /**
     * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
     * take precedence so this may be omitted.
     */
    this.ariaLabel = '';
    /**
     * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
     */
    this.ariaLabelledby = null;
    /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
    this.labelPosition = 'after';
    /** Name value will be applied to the input element if present */
    this.name = null;
    /** Event emitted when the checkbox's `checked` value changes. */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the checkbox's `indeterminate` value changes. */
    this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
     * @docs-private
     */
    this._onTouched = () => {};
    this._currentAnimationClass = '';
    this._currentCheckState = TransitionCheckState.Init;
    this._controlValueAccessorChangeFn = () => {};
    this._validatorChangeFn = () => {};
    this._checked = false;
    this._disabled = false;
    this._indeterminate = false;
    this._options = this._options || defaults;
    this.color = this._options.color || defaults.color;
    this.tabIndex = parseInt(tabIndex) || 0;
    this.id = this._uniqueId = `mat-mdc-checkbox-${++nextUniqueId}`;
  }
  ngOnChanges(changes) {
    if (changes['required']) {
      this._validatorChangeFn();
    }
  }
  ngAfterViewInit() {
    this._syncIndeterminate(this._indeterminate);
  }
  /** Whether the checkbox is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (value != this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the checkbox is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value !== this.disabled) {
      this._disabled = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
   * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
   * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
   * set to false.
   */
  get indeterminate() {
    return this._indeterminate;
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate;
    this._indeterminate = value;
    if (changed) {
      if (this._indeterminate) {
        this._transitionCheckState(TransitionCheckState.Indeterminate);
      } else {
        this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      }
      this.indeterminateChange.emit(this._indeterminate);
    }
    this._syncIndeterminate(this._indeterminate);
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Method being called whenever the label text changes. */
  _onLabelTextChange() {
    // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
    // component will be only marked for check, but no actual change detection runs automatically.
    // Instead of going back into the zone in order to trigger a change detection which causes
    // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
    // an explicit change detection for the checkbox view and its children.
    this._changeDetectorRef.detectChanges();
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this.checked = !!value;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  // Implemented as a part of Validator.
  validate(control) {
    return this.required && control.value !== true ? {
      'required': true
    } : null;
  }
  // Implemented as a part of Validator.
  registerOnValidatorChange(fn) {
    this._validatorChangeFn = fn;
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._getAnimationTargetElement();
    if (oldState === newState || !element) {
      return;
    }
    if (this._currentAnimationClass) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      // Remove the animation class to avoid animation when the checkbox is moved between containers
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1000);
      });
    }
  }
  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
    // Assigning the value again here is redundant, but we have to do it in case it was
    // changed inside the `change` listener which will cause the input to be out of sync.
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  /** Toggles the `checked` state of the checkbox. */
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  _handleInputClick() {
    const clickAction = this._options?.clickAction;
    // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click
    if (!this.disabled && clickAction !== 'noop') {
      // When user manually click on the checkbox, `indeterminate` is set to false.
      if (this.indeterminate && clickAction !== 'check') {
        Promise.resolve().then(() => {
          this._indeterminate = false;
          this.indeterminateChange.emit(this._indeterminate);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      // Emit our custom change event if the native input emitted one.
      // It is important to only emit it, if the native input triggered one, because
      // we don't want to trigger a change event, when the `checked` variable changes for example.
      this._emitChangeEvent();
    } else if (!this.disabled && clickAction === 'noop') {
      // Reset native input when clicked with noop. The native checkbox becomes checked after
      // click, reset it to be align with `checked` value of `mat-checkbox`.
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  _onInteractionEvent(event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the `change` output.
    event.stopPropagation();
  }
  _onBlur() {
    // When a focused element becomes disabled, the browser *immediately* fires a blur event.
    // Angular does not expect events to be raised during change detection, so any state change
    // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
    // See https://github.com/angular/angular/issues/17793. To work around this, we defer
    // telling the form control it has been touched until the next tick.
    Promise.resolve().then(() => {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    });
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    // Don't transition if animations are disabled.
    if (this._animationMode === 'NoopAnimations') {
      return '';
    }
    switch (oldState) {
      case TransitionCheckState.Init:
        // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
        // [checked] bound to it.
        if (newState === TransitionCheckState.Checked) {
          return this._animationClasses.uncheckedToChecked;
        } else if (newState == TransitionCheckState.Indeterminate) {
          return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
        }
        break;
      case TransitionCheckState.Unchecked:
        return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
      case TransitionCheckState.Checked:
        return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
      case TransitionCheckState.Indeterminate:
        return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
    }
    return '';
  }
  /**
   * Syncs the indeterminate value with the checkbox DOM node.
   *
   * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
   * property is supported on an element boils down to `if (propName in element)`. Domino's
   * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
   * server-side rendering.
   */
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
  _onInputClick() {
    this._handleInputClick();
  }
  _onTouchTargetClick() {
    this._handleInputClick();
    if (!this.disabled) {
      // Normally the input should be focused already, but if the click
      // comes from the touch target, then we might have to focus it ourselves.
      this._inputElement.nativeElement.focus();
    }
  }
  /**
   *  Prevent click events that come from the `<label/>` element from bubbling. This prevents the
   *  click handler on the host from triggering twice when clicking on the `<label/>` element. After
   *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
   *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
   *  bubbles when the label is clicked.
   */
  _preventBubblingFromLabel(event) {
    if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
      event.stopPropagation();
    }
  }
  static #_ = this.ɵfac = function MatCheckbox_Factory(t) {
    return new (t || MatCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_CHECKBOX_DEFAULT_OPTIONS, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatCheckbox,
    selectors: [["mat-checkbox"]],
    viewQuery: function MatCheckbox_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._labelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-checkbox"],
    hostVars: 14,
    hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("aria-label", null)("aria-labelledby", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.color ? "mat-" + ctx.color : "mat-accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked);
      }
    },
    inputs: {
      ariaLabel: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "aria-label", "ariaLabel"],
      ariaLabelledby: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "aria-describedby", "ariaDescribedby"],
      id: "id",
      required: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      labelPosition: "labelPosition",
      name: "name",
      value: "value",
      disableRipple: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      tabIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "tabIndex", "tabIndex", value => value == null ? undefined : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value)],
      color: "color",
      checked: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "checked", "checked", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      indeterminate: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "indeterminate", "indeterminate", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    outputs: {
      change: "change",
      indeterminateChange: "indeterminateChange"
    },
    exportAs: ["matCheckbox"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
      useExisting: MatCheckbox,
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c2,
    decls: 15,
    vars: 19,
    consts: [["mat-internal-form-field", "", 3, "labelPosition", "click"], [1, "mdc-checkbox"], ["checkbox", ""], [1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "checked", "indeterminate", "disabled", "id", "required", "tabIndex", "blur", "click", "change"], ["input", ""], [1, "mdc-checkbox__ripple"], [1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", 1, "mat-mdc-checkbox-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-label", 3, "for"], ["label", ""]],
    template: function MatCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCheckbox_Template_div_click_0_listener($event) {
          return ctx._preventBubblingFromLabel($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCheckbox_Template_div_click_3_listener() {
          return ctx._onTouchTargetClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function MatCheckbox_Template_input_blur_4_listener() {
          return ctx._onBlur();
        })("click", function MatCheckbox_Template_input_click_4_listener() {
          return ctx._onInputClick();
        })("change", function MatCheckbox_Template_input_change_4_listener($event) {
          return ctx._onInteractionEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("labelPosition", ctx.labelPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-checkbox--selected", ctx.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.disabled ? -1 : ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-checked", ctx.indeterminate ? "mixed" : null)("name", ctx.name)("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.inputId);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__._MatInternalFormField],
    styles: [".mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox[hidden]{display:none}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);right:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);width:var(--mdc-checkbox-state-layer-size);height:var(--mdc-checkbox-state-layer-size)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}.mdc-checkbox{padding:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2)}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color);background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:var(--mdc-checkbox-disabled-selected-icon-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}@keyframes mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}}@keyframes mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}@keyframes mdc-checkbox-fade-in-background-FF212121FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}}@keyframes mdc-checkbox-fade-out-background-FF212121FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}}.mdc-checkbox:hover.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:hover.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-FF212121FFF4433600000000FFF44336}.mdc-checkbox:hover.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:hover.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-FF212121FFF4433600000000FFF44336}.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}@keyframes mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}}@keyframes mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}}.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox .mdc-checkbox__background{top:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);right:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);width:var(--mdc-checkbox-state-layer-size);height:var(--mdc-checkbox-state-layer-size)}.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:focus:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color);background-color:var(--mdc-checkbox-selected-focus-icon-color)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-hover-state-layer-color)}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-focus-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity);background-color:var(--mdc-checkbox-selected-hover-state-layer-color)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity);background-color:var(--mdc-checkbox-selected-focus-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity);background-color:var(--mdc-checkbox-selected-pressed-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color)}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox .mdc-checkbox__background{-webkit-print-color-adjust:exact;color-adjust:exact}.mat-mdc-checkbox._mat-animation-noopable *,.mat-mdc-checkbox._mat-animation-noopable *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color)}.mat-mdc-checkbox label:empty{display:none}.cdk-high-contrast-active .mat-mdc-checkbox.mat-mdc-checkbox-disabled{opacity:.5}.cdk-high-contrast-active .mat-mdc-checkbox .mdc-checkbox__checkmark{--mdc-checkbox-selected-checkmark-color: CanvasText;--mdc-checkbox-disabled-selected-checkmark-color: CanvasText}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:\"\"}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-checkbox',
      host: {
        'class': 'mat-mdc-checkbox',
        '[attr.tabindex]': 'null',
        '[attr.aria-label]': 'null',
        '[attr.aria-labelledby]': 'null',
        '[class._mat-animation-noopable]': `_animationMode === 'NoopAnimations'`,
        '[class.mdc-checkbox--disabled]': 'disabled',
        '[id]': 'id',
        // Add classes that users can use to more easily target disabled or checked checkboxes.
        '[class.mat-mdc-checkbox-disabled]': 'disabled',
        '[class.mat-mdc-checkbox-checked]': 'checked',
        '[class]': 'color ? "mat-" + color : "mat-accent"'
      },
      providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
        useExisting: MatCheckbox,
        multi: true
      }],
      exportAs: 'matCheckbox',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__._MatInternalFormField],
      template: "<div mat-internal-form-field [labelPosition]=\"labelPosition\" (click)=\"_preventBubblingFromLabel($event)\">\n  <div #checkbox class=\"mdc-checkbox\">\n    <!-- Render this element first so the input is on top. -->\n    <div class=\"mat-mdc-checkbox-touch-target\" (click)=\"_onTouchTargetClick()\"></div>\n    <input #input\n           type=\"checkbox\"\n           class=\"mdc-checkbox__native-control\"\n           [class.mdc-checkbox--selected]=\"checked\"\n           [attr.aria-label]=\"ariaLabel || null\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-describedby]=\"ariaDescribedby\"\n           [attr.aria-checked]=\"indeterminate ? 'mixed' : null\"\n           [attr.name]=\"name\"\n           [attr.value]=\"value\"\n           [checked]=\"checked\"\n           [indeterminate]=\"indeterminate\"\n           [disabled]=\"disabled\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"disabled ? -1 : tabIndex\"\n           (blur)=\"_onBlur()\"\n           (click)=\"_onInputClick()\"\n           (change)=\"_onInteractionEvent($event)\"/>\n    <div class=\"mdc-checkbox__ripple\"></div>\n    <div class=\"mdc-checkbox__background\">\n      <svg class=\"mdc-checkbox__checkmark\"\n           focusable=\"false\"\n           viewBox=\"0 0 24 24\"\n           aria-hidden=\"true\">\n        <path class=\"mdc-checkbox__checkmark-path\"\n              fill=\"none\"\n              d=\"M1.73,12.91 8.1,19.28 22.79,4.59\"/>\n      </svg>\n      <div class=\"mdc-checkbox__mixedmark\"></div>\n    </div>\n    <div class=\"mat-mdc-checkbox-ripple mat-mdc-focus-indicator\" mat-ripple\n      [matRippleTrigger]=\"checkbox\"\n      [matRippleDisabled]=\"disableRipple || disabled\"\n      [matRippleCentered]=\"true\"></div>\n  </div>\n  <!--\n    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back\n    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced\n    an unnecessary accessibility tree node.\n  -->\n  <label class=\"mdc-label\"\n         #label\n         [for]=\"inputId\">\n    <ng-content></ng-content>\n  </label>\n</div>\n",
      styles: [".mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox[hidden]{display:none}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);right:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);width:var(--mdc-checkbox-state-layer-size);height:var(--mdc-checkbox-state-layer-size)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}.mdc-checkbox{padding:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2)}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color);background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:var(--mdc-checkbox-disabled-selected-icon-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}@keyframes mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}}@keyframes mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-icon-color);background-color:var(--mdc-checkbox-selected-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-icon-color);background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}@keyframes mdc-checkbox-fade-in-background-FF212121FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}}@keyframes mdc-checkbox-fade-out-background-FF212121FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-hover-icon-color);background-color:var(--mdc-checkbox-selected-hover-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-hover-icon-color);background-color:transparent}}.mdc-checkbox:hover.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:hover.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-FF212121FFF4433600000000FFF44336}.mdc-checkbox:hover.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:hover.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-FF212121FFF4433600000000FFF44336}.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}@keyframes mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336{0%{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}}@keyframes mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336{0%,80%{border-color:var(--mdc-checkbox-selected-pressed-icon-color);background-color:var(--mdc-checkbox-selected-pressed-icon-color)}100%{border-color:var(--mdc-checkbox-unselected-pressed-icon-color);background-color:transparent}}.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FFF4433600000000FFF44336}.mdc-checkbox .mdc-checkbox__background{top:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);right:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - var(--mdc-checkbox-state-layer-size)) / 2);width:var(--mdc-checkbox-state-layer-size);height:var(--mdc-checkbox-state-layer-size)}.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:focus:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color)}.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color);background-color:var(--mdc-checkbox-selected-focus-icon-color)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-hover-state-layer-color)}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-focus-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity);background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity);background-color:var(--mdc-checkbox-selected-hover-state-layer-color)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity);background-color:var(--mdc-checkbox-selected-focus-state-layer-color)}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity);background-color:var(--mdc-checkbox-selected-pressed-state-layer-color)}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color)}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox .mdc-checkbox__background{-webkit-print-color-adjust:exact;color-adjust:exact}.mat-mdc-checkbox._mat-animation-noopable *,.mat-mdc-checkbox._mat-animation-noopable *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color)}.mat-mdc-checkbox label:empty{display:none}.cdk-high-contrast-active .mat-mdc-checkbox.mat-mdc-checkbox-disabled{opacity:.5}.cdk-high-contrast-active .mat-mdc-checkbox .mdc-checkbox__checkmark{--mdc-checkbox-selected-checkmark-color: CanvasText;--mdc-checkbox-disabled-selected-checkmark-color: CanvasText}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:\"\"}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
      args: ['tabindex']
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_CHECKBOX_DEFAULT_OPTIONS]
    }]
  }], {
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    ariaDescribedby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-describedby']
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    indeterminateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    _inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['input']
    }],
    _labelElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['label']
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: value => value == null ? undefined : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value)
      }]
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ripple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple]
    }],
    checked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    indeterminate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }]
  });
})();

/**
 * @deprecated No longer used, `MatCheckbox` implements required validation directly.
 * @breaking-change 19.0.0
 */
const MAT_CHECKBOX_REQUIRED_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCheckboxRequiredValidator),
  multi: true
};
/**
 * Validator for Material checkbox's required attribute in template-driven checkbox.
 * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
 * work with `mat-checkbox`.
 *
 * @deprecated No longer used, `MatCheckbox` implements required validation directly.
 * @breaking-change 19.0.0
 */
class MatCheckboxRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxRequiredValidator {
  static #_ = this.ɵfac = /* @__PURE__ */(() => {
    let ɵMatCheckboxRequiredValidator_BaseFactory;
    return function MatCheckboxRequiredValidator_Factory(t) {
      return (ɵMatCheckboxRequiredValidator_BaseFactory || (ɵMatCheckboxRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCheckboxRequiredValidator)))(t || MatCheckboxRequiredValidator);
    };
  })();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCheckboxRequiredValidator,
    selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCheckboxRequiredValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-checkbox[required][formControlName],
             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]`,
      providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR],
      standalone: true
    }]
  }], null, null);
})();

/**
 * @deprecated No longer used, `MatCheckbox` implements required validation directly.
 * @breaking-change 19.0.0
 */
class _MatCheckboxRequiredValidatorModule {
  static #_ = this.ɵfac = function _MatCheckboxRequiredValidatorModule_Factory(t) {
    return new (t || _MatCheckboxRequiredValidatorModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: _MatCheckboxRequiredValidatorModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatCheckboxRequiredValidatorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [MatCheckboxRequiredValidator],
      exports: [MatCheckboxRequiredValidator]
    }]
  }], null, null);
})();
class MatCheckboxModule {
  static #_ = this.ɵfac = function MatCheckboxModule_Factory(t) {
    return new (t || MatCheckboxModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatCheckboxModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCheckboxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
      exports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4392:
/*!****************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/datepicker.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateRange: () => (/* binding */ DateRange),
/* harmony export */   DefaultMatCalendarRangeStrategy: () => (/* binding */ DefaultMatCalendarRangeStrategy),
/* harmony export */   MAT_DATEPICKER_SCROLL_STRATEGY: () => (/* binding */ MAT_DATEPICKER_SCROLL_STRATEGY),
/* harmony export */   MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY: () => (/* binding */ MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY),
/* harmony export */   MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER: () => (/* binding */ MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   MAT_DATEPICKER_VALIDATORS: () => (/* binding */ MAT_DATEPICKER_VALIDATORS),
/* harmony export */   MAT_DATEPICKER_VALUE_ACCESSOR: () => (/* binding */ MAT_DATEPICKER_VALUE_ACCESSOR),
/* harmony export */   MAT_DATE_RANGE_SELECTION_STRATEGY: () => (/* binding */ MAT_DATE_RANGE_SELECTION_STRATEGY),
/* harmony export */   MAT_RANGE_DATE_SELECTION_MODEL_FACTORY: () => (/* binding */ MAT_RANGE_DATE_SELECTION_MODEL_FACTORY),
/* harmony export */   MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER: () => (/* binding */ MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER),
/* harmony export */   MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY: () => (/* binding */ MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY),
/* harmony export */   MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER: () => (/* binding */ MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER),
/* harmony export */   MatCalendar: () => (/* binding */ MatCalendar),
/* harmony export */   MatCalendarBody: () => (/* binding */ MatCalendarBody),
/* harmony export */   MatCalendarCell: () => (/* binding */ MatCalendarCell),
/* harmony export */   MatCalendarHeader: () => (/* binding */ MatCalendarHeader),
/* harmony export */   MatDateRangeInput: () => (/* binding */ MatDateRangeInput),
/* harmony export */   MatDateRangePicker: () => (/* binding */ MatDateRangePicker),
/* harmony export */   MatDateSelectionModel: () => (/* binding */ MatDateSelectionModel),
/* harmony export */   MatDatepicker: () => (/* binding */ MatDatepicker),
/* harmony export */   MatDatepickerActions: () => (/* binding */ MatDatepickerActions),
/* harmony export */   MatDatepickerApply: () => (/* binding */ MatDatepickerApply),
/* harmony export */   MatDatepickerCancel: () => (/* binding */ MatDatepickerCancel),
/* harmony export */   MatDatepickerContent: () => (/* binding */ MatDatepickerContent),
/* harmony export */   MatDatepickerInput: () => (/* binding */ MatDatepickerInput),
/* harmony export */   MatDatepickerInputEvent: () => (/* binding */ MatDatepickerInputEvent),
/* harmony export */   MatDatepickerIntl: () => (/* binding */ MatDatepickerIntl),
/* harmony export */   MatDatepickerModule: () => (/* binding */ MatDatepickerModule),
/* harmony export */   MatDatepickerToggle: () => (/* binding */ MatDatepickerToggle),
/* harmony export */   MatDatepickerToggleIcon: () => (/* binding */ MatDatepickerToggleIcon),
/* harmony export */   MatEndDate: () => (/* binding */ MatEndDate),
/* harmony export */   MatMonthView: () => (/* binding */ MatMonthView),
/* harmony export */   MatMultiYearView: () => (/* binding */ MatMultiYearView),
/* harmony export */   MatRangeDateSelectionModel: () => (/* binding */ MatRangeDateSelectionModel),
/* harmony export */   MatSingleDateSelectionModel: () => (/* binding */ MatSingleDateSelectionModel),
/* harmony export */   MatStartDate: () => (/* binding */ MatStartDate),
/* harmony export */   MatYearView: () => (/* binding */ MatYearView),
/* harmony export */   matDatepickerAnimations: () => (/* binding */ matDatepickerAnimations),
/* harmony export */   yearsPerPage: () => (/* binding */ yearsPerPage),
/* harmony export */   yearsPerRow: () => (/* binding */ yearsPerRow)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/a11y */ 2664);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/overlay */ 768);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/portal */ 336);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4672);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/scrolling */ 7736);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 2544);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5100);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8688);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 728);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 8916);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ 2608);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ 8336);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 9664);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7496);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1792);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 6560);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/coercion */ 2932);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ 3291);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 1267);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 2307);
























/** @docs-private */
const _c0 = ["mat-calendar-body", ""];
function MatCalendarBody_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 0)(1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r0.numCols);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
  }
}
function MatCalendarBody_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-top", ctx_r7._cellPadding)("padding-bottom", ctx_r7._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r7._firstRowOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7._firstRowOffset >= ctx_r7.labelMinRequiredCells ? ctx_r7.label : "", " ");
  }
}
function MatCalendarBody_For_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 5)(1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarBody_For_2_For_3_Template_button_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14._cellClicked(item_r9, $event));
    })("focus", function MatCalendarBody_For_2_For_3_Template_button_focus_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16._emitActiveDateChange(item_r9, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const colIndex_r10 = ctx.$index;
    const rowIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r8._cellWidth)("padding-top", ctx_r8._cellPadding)("padding-bottom", ctx_r8._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-mat-row", rowIndex_r3)("data-mat-col", colIndex_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-calendar-body-disabled", !item_r9.enabled)("mat-calendar-body-active", ctx_r8._isActiveCell(rowIndex_r3, colIndex_r10))("mat-calendar-body-range-start", ctx_r8._isRangeStart(item_r9.compareValue))("mat-calendar-body-range-end", ctx_r8._isRangeEnd(item_r9.compareValue))("mat-calendar-body-in-range", ctx_r8._isInRange(item_r9.compareValue))("mat-calendar-body-comparison-bridge-start", ctx_r8._isComparisonBridgeStart(item_r9.compareValue, rowIndex_r3, colIndex_r10))("mat-calendar-body-comparison-bridge-end", ctx_r8._isComparisonBridgeEnd(item_r9.compareValue, rowIndex_r3, colIndex_r10))("mat-calendar-body-comparison-start", ctx_r8._isComparisonStart(item_r9.compareValue))("mat-calendar-body-comparison-end", ctx_r8._isComparisonEnd(item_r9.compareValue))("mat-calendar-body-in-comparison-range", ctx_r8._isInComparisonRange(item_r9.compareValue))("mat-calendar-body-preview-start", ctx_r8._isPreviewStart(item_r9.compareValue))("mat-calendar-body-preview-end", ctx_r8._isPreviewEnd(item_r9.compareValue))("mat-calendar-body-in-preview", ctx_r8._isInPreview(item_r9.compareValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r9.cssClasses)("tabindex", ctx_r8._isActiveCell(rowIndex_r3, colIndex_r10) ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", item_r9.ariaLabel)("aria-disabled", !item_r9.enabled || null)("aria-pressed", ctx_r8._isSelected(item_r9.compareValue))("aria-current", ctx_r8.todayValue === item_r9.compareValue ? "date" : null)("aria-describedby", ctx_r8._getDescribedby(item_r9.compareValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-calendar-body-selected", ctx_r8._isSelected(item_r9.compareValue))("mat-calendar-body-comparison-identical", ctx_r8._isComparisonIdentical(item_r9.compareValue))("mat-calendar-body-today", ctx_r8.todayValue === item_r9.compareValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9.displayValue, " ");
  }
}
function MatCalendarBody_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatCalendarBody_For_2_Conditional_1_Template, 2, 6, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](2, MatCalendarBody_For_2_For_3_Template, 5, 48, "td", 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const rowIndex_r3 = ctx.$index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, rowIndex_r3 === 0 && ctx_r1._firstRowOffset ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](row_r2);
  }
}
function MatMonthView_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 4)(1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r1.long);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r1.narrow);
  }
}
const _c1 = ["*"];
function MatCalendar_ng_template_0_Template(rf, ctx) {}
function MatCalendar_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-month-view", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("activeDateChange", function MatCalendar_Case_2_Template_mat_month_view_activeDateChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r4.activeDate, $event) || (ctx_r4.activeDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("_userSelection", function MatCalendar_Case_2_Template_mat_month_view__userSelection_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6._dateSelected($event));
    })("dragStarted", function MatCalendar_Case_2_Template_mat_month_view_dragStarted_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7._dragStarted($event));
    })("dragEnded", function MatCalendar_Case_2_Template_mat_month_view_dragEnded_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8._dragEnded($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("activeDate", ctx_r1.activeDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass)("comparisonStart", ctx_r1.comparisonStart)("comparisonEnd", ctx_r1.comparisonEnd)("startDateAccessibleName", ctx_r1.startDateAccessibleName)("endDateAccessibleName", ctx_r1.endDateAccessibleName)("activeDrag", ctx_r1._activeDrag);
  }
}
function MatCalendar_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-year-view", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("activeDateChange", function MatCalendar_Case_3_Template_mat_year_view_activeDateChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r9.activeDate, $event) || (ctx_r9.activeDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("monthSelected", function MatCalendar_Case_3_Template_mat_year_view_monthSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11._monthSelectedInYearView($event));
    })("selectedChange", function MatCalendar_Case_3_Template_mat_year_view_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12._goToDateInView($event, "month"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("activeDate", ctx_r2.activeDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r2.selected)("dateFilter", ctx_r2.dateFilter)("maxDate", ctx_r2.maxDate)("minDate", ctx_r2.minDate)("dateClass", ctx_r2.dateClass);
  }
}
function MatCalendar_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-multi-year-view", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("activeDateChange", function MatCalendar_Case_4_Template_mat_multi_year_view_activeDateChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r13.activeDate, $event) || (ctx_r13.activeDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("yearSelected", function MatCalendar_Case_4_Template_mat_multi_year_view_yearSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15._yearSelectedInMultiYearView($event));
    })("selectedChange", function MatCalendar_Case_4_Template_mat_multi_year_view_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16._goToDateInView($event, "year"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("activeDate", ctx_r3.activeDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r3.selected)("dateFilter", ctx_r3.dateFilter)("maxDate", ctx_r3.maxDate)("minDate", ctx_r3.minDate)("dateClass", ctx_r3.dateClass);
  }
}
function MatDatepickerContent_ng_template_2_Template(rf, ctx) {}
const _c2 = ["button"];
function MatDatepickerToggle_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c3 = [[["", "matDatepickerToggleIcon", ""]]];
const _c4 = ["[matDatepickerToggleIcon]"];
const _c5 = [[["input", "matStartDate", ""]], [["input", "matEndDate", ""]]];
const _c6 = ["input[matStartDate]", "input[matEndDate]"];
function MatDatepickerActions_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function createMissingDateImplError(provider) {
  return Error(`MatDatepicker: No provider found for ${provider}. You must add one of the following ` + `to your app config: provideNativeDateAdapter, provideDateFnsAdapter, ` + `provideLuxonDateAdapter, provideMomentDateAdapter, or provide a custom implementation.`);
}

/** Datepicker data that requires internationalization. */
class MatDatepickerIntl {
  constructor() {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** A label for the calendar popup (used by screen readers). */
    this.calendarLabel = 'Calendar';
    /** A label for the button used to open the calendar popup (used by screen readers). */
    this.openCalendarLabel = 'Open calendar';
    /** Label for the button used to close the calendar popup. */
    this.closeCalendarLabel = 'Close calendar';
    /** A label for the previous month button (used by screen readers). */
    this.prevMonthLabel = 'Previous month';
    /** A label for the next month button (used by screen readers). */
    this.nextMonthLabel = 'Next month';
    /** A label for the previous year button (used by screen readers). */
    this.prevYearLabel = 'Previous year';
    /** A label for the next year button (used by screen readers). */
    this.nextYearLabel = 'Next year';
    /** A label for the previous multi-year button (used by screen readers). */
    this.prevMultiYearLabel = 'Previous 24 years';
    /** A label for the next multi-year button (used by screen readers). */
    this.nextMultiYearLabel = 'Next 24 years';
    /** A label for the 'switch to month view' button (used by screen readers). */
    this.switchToMonthViewLabel = 'Choose date';
    /** A label for the 'switch to year view' button (used by screen readers). */
    this.switchToMultiYearViewLabel = 'Choose month and year';
    /**
     * A label for the first date of a range of dates (used by screen readers).
     * @deprecated Provide your own internationalization string.
     * @breaking-change 17.0.0
     */
    this.startDateLabel = 'Start date';
    /**
     * A label for the last date of a range of dates (used by screen readers).
     * @deprecated Provide your own internationalization string.
     * @breaking-change 17.0.0
     */
    this.endDateLabel = 'End date';
  }
  /** Formats a range of years (used for visuals). */
  formatYearRange(start, end) {
    return `${start} \u2013 ${end}`;
  }
  /** Formats a label for a range of years (used by screen readers). */
  formatYearRangeLabel(start, end) {
    return `${start} to ${end}`;
  }
  static #_ = this.ɵfac = function MatDatepickerIntl_Factory(t) {
    return new (t || MatDatepickerIntl)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MatDatepickerIntl,
    factory: MatDatepickerIntl.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerIntl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * @docs-private
 */
class MatCalendarCell {
  constructor(value, displayValue, ariaLabel, enabled, cssClasses = {}, compareValue = value, rawValue) {
    this.value = value;
    this.displayValue = displayValue;
    this.ariaLabel = ariaLabel;
    this.enabled = enabled;
    this.cssClasses = cssClasses;
    this.compareValue = compareValue;
    this.rawValue = rawValue;
  }
}
let calendarBodyId = 1;
/** Event options that can be used to bind an active, capturing event. */
const activeCapturingEventOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: false,
  capture: true
});
/** Event options that can be used to bind a passive, capturing event. */
const passiveCapturingEventOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/** Event options that can be used to bind a passive, non-capturing event. */
const passiveEventOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true
});
/**
 * An internal component used to display calendar data in a table.
 * @docs-private
 */
class MatCalendarBody {
  ngAfterViewChecked() {
    if (this._focusActiveCellAfterViewChecked) {
      this._focusActiveCell();
      this._focusActiveCellAfterViewChecked = false;
    }
  }
  constructor(_elementRef, _ngZone) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform);
    /**
     * Used to focus the active cell after change detection has run.
     */
    this._focusActiveCellAfterViewChecked = false;
    /** The number of columns in the table. */
    this.numCols = 7;
    /** The cell number of the active cell in the table. */
    this.activeCell = 0;
    /** Whether a range is being selected. */
    this.isRange = false;
    /**
     * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
     * maintained even as the table resizes.
     */
    this.cellAspectRatio = 1;
    /** Start of the preview range. */
    this.previewStart = null;
    /** End of the preview range. */
    this.previewEnd = null;
    /** Emits when a new value is selected. */
    this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when the preview has changed as a result of a user action. */
    this.previewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits the date at the possible start of a drag event. */
    this.dragStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits the date at the conclusion of a drag, or null if mouse was not released on a date. */
    this.dragEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._didDragSinceMouseDown = false;
    /**
     * Event handler for when the user enters an element
     * inside the calendar body (e.g. by hovering in or focus).
     */
    this._enterHandler = event => {
      if (this._skipNextFocus && event.type === 'focus') {
        this._skipNextFocus = false;
        return;
      }
      // We only need to hit the zone when we're selecting a range.
      if (event.target && this.isRange) {
        const cell = this._getCellFromElement(event.target);
        if (cell) {
          this._ngZone.run(() => this.previewChange.emit({
            value: cell.enabled ? cell : null,
            event
          }));
        }
      }
    };
    this._touchmoveHandler = event => {
      if (!this.isRange) return;
      const target = getActualTouchTarget(event);
      const cell = target ? this._getCellFromElement(target) : null;
      if (target !== event.target) {
        this._didDragSinceMouseDown = true;
      }
      // If the initial target of the touch is a date cell, prevent default so
      // that the move is not handled as a scroll.
      if (getCellElement(event.target)) {
        event.preventDefault();
      }
      this._ngZone.run(() => this.previewChange.emit({
        value: cell?.enabled ? cell : null,
        event
      }));
    };
    /**
     * Event handler for when the user's pointer leaves an element
     * inside the calendar body (e.g. by hovering out or blurring).
     */
    this._leaveHandler = event => {
      // We only need to hit the zone when we're selecting a range.
      if (this.previewEnd !== null && this.isRange) {
        if (event.type !== 'blur') {
          this._didDragSinceMouseDown = true;
        }
        // Only reset the preview end value when leaving cells. This looks better, because
        // we have a gap between the cells and the rows and we don't want to remove the
        // range just for it to show up again when the user moves a few pixels to the side.
        if (event.target && this._getCellFromElement(event.target) && !(event.relatedTarget && this._getCellFromElement(event.relatedTarget))) {
          this._ngZone.run(() => this.previewChange.emit({
            value: null,
            event
          }));
        }
      }
    };
    /**
     * Triggered on mousedown or touchstart on a date cell.
     * Respsonsible for starting a drag sequence.
     */
    this._mousedownHandler = event => {
      if (!this.isRange) return;
      this._didDragSinceMouseDown = false;
      // Begin a drag if a cell within the current range was targeted.
      const cell = event.target && this._getCellFromElement(event.target);
      if (!cell || !this._isInRange(cell.compareValue)) {
        return;
      }
      this._ngZone.run(() => {
        this.dragStarted.emit({
          value: cell.rawValue,
          event
        });
      });
    };
    /** Triggered on mouseup anywhere. Respsonsible for ending a drag sequence. */
    this._mouseupHandler = event => {
      if (!this.isRange) return;
      const cellElement = getCellElement(event.target);
      if (!cellElement) {
        // Mouseup happened outside of datepicker. Cancel drag.
        this._ngZone.run(() => {
          this.dragEnded.emit({
            value: null,
            event
          });
        });
        return;
      }
      if (cellElement.closest('.mat-calendar-body') !== this._elementRef.nativeElement) {
        // Mouseup happened inside a different month instance.
        // Allow it to handle the event.
        return;
      }
      this._ngZone.run(() => {
        const cell = this._getCellFromElement(cellElement);
        this.dragEnded.emit({
          value: cell?.rawValue ?? null,
          event
        });
      });
    };
    /** Triggered on touchend anywhere. Respsonsible for ending a drag sequence. */
    this._touchendHandler = event => {
      const target = getActualTouchTarget(event);
      if (target) {
        this._mouseupHandler({
          target
        });
      }
    };
    this._id = `mat-calendar-body-${calendarBodyId++}`;
    this._startDateLabelId = `${this._id}-start-date`;
    this._endDateLabelId = `${this._id}-end-date`;
    _ngZone.runOutsideAngular(() => {
      const element = _elementRef.nativeElement;
      // `touchmove` is active since we need to call `preventDefault`.
      element.addEventListener('touchmove', this._touchmoveHandler, activeCapturingEventOptions);
      element.addEventListener('mouseenter', this._enterHandler, passiveCapturingEventOptions);
      element.addEventListener('focus', this._enterHandler, passiveCapturingEventOptions);
      element.addEventListener('mouseleave', this._leaveHandler, passiveCapturingEventOptions);
      element.addEventListener('blur', this._leaveHandler, passiveCapturingEventOptions);
      element.addEventListener('mousedown', this._mousedownHandler, passiveEventOptions);
      element.addEventListener('touchstart', this._mousedownHandler, passiveEventOptions);
      if (this._platform.isBrowser) {
        window.addEventListener('mouseup', this._mouseupHandler);
        window.addEventListener('touchend', this._touchendHandler);
      }
    });
  }
  /** Called when a cell is clicked. */
  _cellClicked(cell, event) {
    // Ignore "clicks" that are actually canceled drags (eg the user dragged
    // off and then went back to this cell to undo).
    if (this._didDragSinceMouseDown) {
      return;
    }
    if (cell.enabled) {
      this.selectedValueChange.emit({
        value: cell.value,
        event
      });
    }
  }
  _emitActiveDateChange(cell, event) {
    if (cell.enabled) {
      this.activeDateChange.emit({
        value: cell.value,
        event
      });
    }
  }
  /** Returns whether a cell should be marked as selected. */
  _isSelected(value) {
    return this.startValue === value || this.endValue === value;
  }
  ngOnChanges(changes) {
    const columnChanges = changes['numCols'];
    const {
      rows,
      numCols
    } = this;
    if (changes['rows'] || columnChanges) {
      this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
    }
    if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
      this._cellPadding = `${50 * this.cellAspectRatio / numCols}%`;
    }
    if (columnChanges || !this._cellWidth) {
      this._cellWidth = `${100 / numCols}%`;
    }
  }
  ngOnDestroy() {
    const element = this._elementRef.nativeElement;
    element.removeEventListener('touchmove', this._touchmoveHandler, activeCapturingEventOptions);
    element.removeEventListener('mouseenter', this._enterHandler, passiveCapturingEventOptions);
    element.removeEventListener('focus', this._enterHandler, passiveCapturingEventOptions);
    element.removeEventListener('mouseleave', this._leaveHandler, passiveCapturingEventOptions);
    element.removeEventListener('blur', this._leaveHandler, passiveCapturingEventOptions);
    element.removeEventListener('mousedown', this._mousedownHandler, passiveEventOptions);
    element.removeEventListener('touchstart', this._mousedownHandler, passiveEventOptions);
    if (this._platform.isBrowser) {
      window.removeEventListener('mouseup', this._mouseupHandler);
      window.removeEventListener('touchend', this._touchendHandler);
    }
  }
  /** Returns whether a cell is active. */
  _isActiveCell(rowIndex, colIndex) {
    let cellNumber = rowIndex * this.numCols + colIndex;
    // Account for the fact that the first row may not have as many cells.
    if (rowIndex) {
      cellNumber -= this._firstRowOffset;
    }
    return cellNumber == this.activeCell;
  }
  /**
   * Focuses the active cell after the microtask queue is empty.
   *
   * Adding a 0ms setTimeout seems to fix Voiceover losing focus when pressing PageUp/PageDown
   * (issue #24330).
   *
   * Determined a 0ms by gradually increasing duration from 0 and testing two use cases with screen
   * reader enabled:
   *
   * 1. Pressing PageUp/PageDown repeatedly with pausing between each key press.
   * 2. Pressing and holding the PageDown key with repeated keys enabled.
   *
   * Test 1 worked roughly 95-99% of the time with 0ms and got a little bit better as the duration
   * increased. Test 2 got slightly better until the duration was long enough to interfere with
   * repeated keys. If the repeated key speed was faster than the timeout duration, then pressing
   * and holding pagedown caused the entire page to scroll.
   *
   * Since repeated key speed can verify across machines, determined that any duration could
   * potentially interfere with repeated keys. 0ms would be best because it almost entirely
   * eliminates the focus being lost in Voiceover (#24330) without causing unintended side effects.
   * Adding delay also complicates writing tests.
   */
  _focusActiveCell(movePreview = true) {
    this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(() => {
        setTimeout(() => {
          const activeCell = this._elementRef.nativeElement.querySelector('.mat-calendar-body-active');
          if (activeCell) {
            if (!movePreview) {
              this._skipNextFocus = true;
            }
            activeCell.focus();
          }
        });
      });
    });
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _scheduleFocusActiveCellAfterViewChecked() {
    this._focusActiveCellAfterViewChecked = true;
  }
  /** Gets whether a value is the start of the main range. */
  _isRangeStart(value) {
    return isStart(value, this.startValue, this.endValue);
  }
  /** Gets whether a value is the end of the main range. */
  _isRangeEnd(value) {
    return isEnd(value, this.startValue, this.endValue);
  }
  /** Gets whether a value is within the currently-selected range. */
  _isInRange(value) {
    return isInRange(value, this.startValue, this.endValue, this.isRange);
  }
  /** Gets whether a value is the start of the comparison range. */
  _isComparisonStart(value) {
    return isStart(value, this.comparisonStart, this.comparisonEnd);
  }
  /** Whether the cell is a start bridge cell between the main and comparison ranges. */
  _isComparisonBridgeStart(value, rowIndex, colIndex) {
    if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
      return false;
    }
    let previousCell = this.rows[rowIndex][colIndex - 1];
    if (!previousCell) {
      const previousRow = this.rows[rowIndex - 1];
      previousCell = previousRow && previousRow[previousRow.length - 1];
    }
    return previousCell && !this._isRangeEnd(previousCell.compareValue);
  }
  /** Whether the cell is an end bridge cell between the main and comparison ranges. */
  _isComparisonBridgeEnd(value, rowIndex, colIndex) {
    if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
      return false;
    }
    let nextCell = this.rows[rowIndex][colIndex + 1];
    if (!nextCell) {
      const nextRow = this.rows[rowIndex + 1];
      nextCell = nextRow && nextRow[0];
    }
    return nextCell && !this._isRangeStart(nextCell.compareValue);
  }
  /** Gets whether a value is the end of the comparison range. */
  _isComparisonEnd(value) {
    return isEnd(value, this.comparisonStart, this.comparisonEnd);
  }
  /** Gets whether a value is within the current comparison range. */
  _isInComparisonRange(value) {
    return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
  }
  /**
   * Gets whether a value is the same as the start and end of the comparison range.
   * For context, the functions that we use to determine whether something is the start/end of
   * a range don't allow for the start and end to be on the same day, because we'd have to use
   * much more specific CSS selectors to style them correctly in all scenarios. This is fine for
   * the regular range, because when it happens, the selected styles take over and still show where
   * the range would've been, however we don't have these selected styles for a comparison range.
   * This function is used to apply a class that serves the same purpose as the one for selected
   * dates, but it only applies in the context of a comparison range.
   */
  _isComparisonIdentical(value) {
    // Note that we don't need to null check the start/end
    // here, because the `value` will always be defined.
    return this.comparisonStart === this.comparisonEnd && value === this.comparisonStart;
  }
  /** Gets whether a value is the start of the preview range. */
  _isPreviewStart(value) {
    return isStart(value, this.previewStart, this.previewEnd);
  }
  /** Gets whether a value is the end of the preview range. */
  _isPreviewEnd(value) {
    return isEnd(value, this.previewStart, this.previewEnd);
  }
  /** Gets whether a value is inside the preview range. */
  _isInPreview(value) {
    return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
  }
  /** Gets ids of aria descriptions for the start and end of a date range. */
  _getDescribedby(value) {
    if (!this.isRange) {
      return null;
    }
    if (this.startValue === value && this.endValue === value) {
      return `${this._startDateLabelId} ${this._endDateLabelId}`;
    } else if (this.startValue === value) {
      return this._startDateLabelId;
    } else if (this.endValue === value) {
      return this._endDateLabelId;
    }
    return null;
  }
  /** Finds the MatCalendarCell that corresponds to a DOM node. */
  _getCellFromElement(element) {
    const cell = getCellElement(element);
    if (cell) {
      const row = cell.getAttribute('data-mat-row');
      const col = cell.getAttribute('data-mat-col');
      if (row && col) {
        return this.rows[parseInt(row)][parseInt(col)];
      }
    }
    return null;
  }
  static #_ = this.ɵfac = function MatCalendarBody_Factory(t) {
    return new (t || MatCalendarBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatCalendarBody,
    selectors: [["", "mat-calendar-body", ""]],
    hostAttrs: [1, "mat-calendar-body"],
    inputs: {
      label: "label",
      rows: "rows",
      todayValue: "todayValue",
      startValue: "startValue",
      endValue: "endValue",
      labelMinRequiredCells: "labelMinRequiredCells",
      numCols: "numCols",
      activeCell: "activeCell",
      isRange: "isRange",
      cellAspectRatio: "cellAspectRatio",
      comparisonStart: "comparisonStart",
      comparisonEnd: "comparisonEnd",
      previewStart: "previewStart",
      previewEnd: "previewEnd",
      startDateAccessibleName: "startDateAccessibleName",
      endDateAccessibleName: "endDateAccessibleName"
    },
    outputs: {
      selectedValueChange: "selectedValueChange",
      previewChange: "previewChange",
      activeDateChange: "activeDateChange",
      dragStarted: "dragStarted",
      dragEnded: "dragEnded"
    },
    exportAs: ["matCalendarBody"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    attrs: _c0,
    decls: 7,
    vars: 5,
    consts: [["aria-hidden", "true"], [1, "mat-calendar-body-hidden-label", 3, "id"], [1, "mat-calendar-body-label"], ["role", "row"], ["class", "mat-calendar-body-label", 3, "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mat-calendar-body-cell-container"], ["type", "button", 1, "mat-calendar-body-cell", 3, "ngClass", "tabindex", "click", "focus"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], ["aria-hidden", "true", 1, "mat-calendar-body-cell-preview"], ["role", "gridcell", "class", "mat-calendar-body-cell-container", 3, "width", "paddingTop", "paddingBottom"]],
    template: function MatCalendarBody_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatCalendarBody_Conditional_0_Template, 3, 6, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](1, MatCalendarBody_For_2_Template, 4, 1, "tr", 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, ctx._firstRowOffset < ctx.labelMinRequiredCells ? 0 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._startDateLabelId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.startDateAccessibleName, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._endDateLabelId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.endDateAccessibleName, "\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
    styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-outline-color)}.mat-calendar-body-label{height:0;line-height:0;text-align:start;padding-left:4.7142857143%;padding-right:4.7142857143%;font-size:var(--mat-datepicker-calendar-body-label-text-size);font-weight:var(--mat-datepicker-calendar-body-label-text-weight);color:var(--mat-datepicker-calendar-body-label-text-color)}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;font-family:inherit;margin:0}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview{color:var(--mat-datepicker-calendar-date-preview-state-outline-color)}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:var(--mat-datepicker-calendar-date-disabled-state-text-color)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-disabled-state-outline-color)}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px;color:var(--mat-datepicker-calendar-date-text-color);border-color:var(--mat-datepicker-calendar-date-outline-color)}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-focus-state-background-color)}@media(hover: hover){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-hover-state-background-color)}}.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-state-background-color);color:var(--mat-datepicker-calendar-date-selected-state-text-color)}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-disabled-state-background-color)}.mat-calendar-body-selected.mat-calendar-body-today{box-shadow:inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color)}.mat-calendar-body-in-range::before{background:var(--mat-datepicker-calendar-date-in-range-state-background-color)}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color)}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color)}.mat-calendar-body-comparison-bridge-start::before,[dir=rtl] .mat-calendar-body-comparison-bridge-end::before{background:linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color) 50%)}.mat-calendar-body-comparison-bridge-end::before,[dir=rtl] .mat-calendar-body-comparison-bridge-start::before{background:linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color) 50%)}.mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after{background:var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color)}.mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color)}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .mat-calendar-body-cell::before,.cdk-high-contrast-active .mat-calendar-body-cell::after,.cdk-high-contrast-active .mat-calendar-body-selected{background:none}.cdk-high-contrast-active .mat-calendar-body-in-range::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-start::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.cdk-high-contrast-active .mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCalendarBody, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[mat-calendar-body]',
      host: {
        'class': 'mat-calendar-body'
      },
      exportAs: 'matCalendarBody',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
      template: "<!--\n  If there's not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\n-->\n@if (_firstRowOffset < labelMinRequiredCells) {\n  <tr aria-hidden=\"true\">\n    <td class=\"mat-calendar-body-label\"\n        [attr.colspan]=\"numCols\"\n        [style.paddingTop]=\"_cellPadding\"\n        [style.paddingBottom]=\"_cellPadding\">\n      {{label}}\n    </td>\n  </tr>\n}\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n@for (row of rows; track row; let rowIndex = $index) {\n  <tr role=\"row\">\n    <!--\n      This cell is purely decorative, but we can't put `aria-hidden` or `role=\"presentation\"` on it,\n      because it throws off the week days for the rest of the row on NVDA. The aspect ratio of the\n      table cells is maintained by setting the top and bottom padding as a percentage of the width\n      (a variant of the trick described here: https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\n    -->\n    @if (rowIndex === 0 && _firstRowOffset) {\n      <td\n        class=\"mat-calendar-body-label\"\n        [attr.colspan]=\"_firstRowOffset\"\n        [style.paddingTop]=\"_cellPadding\"\n        [style.paddingBottom]=\"_cellPadding\">\n        {{_firstRowOffset >= labelMinRequiredCells ? label : ''}}\n      </td>\n    }\n    <!--\n      Each gridcell in the calendar contains a button, which signals to assistive technology that the\n      cell is interactable, as well as the selection state via `aria-pressed`. See #23476 for\n      background.\n    -->\n    @for (item of row; track item; let colIndex = $index) {\n      <td\n        role=\"gridcell\"\n        class=\"mat-calendar-body-cell-container\"\n        [style.width]=\"_cellWidth\"\n        [style.paddingTop]=\"_cellPadding\"\n        [style.paddingBottom]=\"_cellPadding\"\n        [attr.data-mat-row]=\"rowIndex\"\n        [attr.data-mat-col]=\"colIndex\"\n      >\n        <button\n            type=\"button\"\n            class=\"mat-calendar-body-cell\"\n            [ngClass]=\"item.cssClasses\"\n            [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\"\n            [class.mat-calendar-body-disabled]=\"!item.enabled\"\n            [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\n            [class.mat-calendar-body-range-start]=\"_isRangeStart(item.compareValue)\"\n            [class.mat-calendar-body-range-end]=\"_isRangeEnd(item.compareValue)\"\n            [class.mat-calendar-body-in-range]=\"_isInRange(item.compareValue)\"\n            [class.mat-calendar-body-comparison-bridge-start]=\"_isComparisonBridgeStart(item.compareValue, rowIndex, colIndex)\"\n            [class.mat-calendar-body-comparison-bridge-end]=\"_isComparisonBridgeEnd(item.compareValue, rowIndex, colIndex)\"\n            [class.mat-calendar-body-comparison-start]=\"_isComparisonStart(item.compareValue)\"\n            [class.mat-calendar-body-comparison-end]=\"_isComparisonEnd(item.compareValue)\"\n            [class.mat-calendar-body-in-comparison-range]=\"_isInComparisonRange(item.compareValue)\"\n            [class.mat-calendar-body-preview-start]=\"_isPreviewStart(item.compareValue)\"\n            [class.mat-calendar-body-preview-end]=\"_isPreviewEnd(item.compareValue)\"\n            [class.mat-calendar-body-in-preview]=\"_isInPreview(item.compareValue)\"\n            [attr.aria-label]=\"item.ariaLabel\"\n            [attr.aria-disabled]=\"!item.enabled || null\"\n            [attr.aria-pressed]=\"_isSelected(item.compareValue)\"\n            [attr.aria-current]=\"todayValue === item.compareValue ? 'date' : null\"\n            [attr.aria-describedby]=\"_getDescribedby(item.compareValue)\"\n            (click)=\"_cellClicked(item, $event)\"\n            (focus)=\"_emitActiveDateChange(item, $event)\">\n            <span class=\"mat-calendar-body-cell-content mat-focus-indicator\"\n              [class.mat-calendar-body-selected]=\"_isSelected(item.compareValue)\"\n              [class.mat-calendar-body-comparison-identical]=\"_isComparisonIdentical(item.compareValue)\"\n              [class.mat-calendar-body-today]=\"todayValue === item.compareValue\">\n              {{item.displayValue}}\n            </span>\n            <span class=\"mat-calendar-body-cell-preview\" aria-hidden=\"true\"></span>\n        </button>\n      </td>\n    }\n  </tr>\n}\n\n<label [id]=\"_startDateLabelId\" class=\"mat-calendar-body-hidden-label\">\n  {{startDateAccessibleName}}\n</label>\n<label [id]=\"_endDateLabelId\" class=\"mat-calendar-body-hidden-label\">\n  {{endDateAccessibleName}}\n</label>\n",
      styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-outline-color)}.mat-calendar-body-label{height:0;line-height:0;text-align:start;padding-left:4.7142857143%;padding-right:4.7142857143%;font-size:var(--mat-datepicker-calendar-body-label-text-size);font-weight:var(--mat-datepicker-calendar-body-label-text-weight);color:var(--mat-datepicker-calendar-body-label-text-color)}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;font-family:inherit;margin:0}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview{color:var(--mat-datepicker-calendar-date-preview-state-outline-color)}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:var(--mat-datepicker-calendar-date-disabled-state-text-color)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-disabled-state-outline-color)}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px;color:var(--mat-datepicker-calendar-date-text-color);border-color:var(--mat-datepicker-calendar-date-outline-color)}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-focus-state-background-color)}@media(hover: hover){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-hover-state-background-color)}}.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-state-background-color);color:var(--mat-datepicker-calendar-date-selected-state-text-color)}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-disabled-state-background-color)}.mat-calendar-body-selected.mat-calendar-body-today{box-shadow:inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color)}.mat-calendar-body-in-range::before{background:var(--mat-datepicker-calendar-date-in-range-state-background-color)}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color)}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color)}.mat-calendar-body-comparison-bridge-start::before,[dir=rtl] .mat-calendar-body-comparison-bridge-end::before{background:linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color) 50%)}.mat-calendar-body-comparison-bridge-end::before,[dir=rtl] .mat-calendar-body-comparison-bridge-start::before{background:linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color) 50%)}.mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after{background:var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color)}.mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color)}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .mat-calendar-body-cell::before,.cdk-high-contrast-active .mat-calendar-body-cell::after,.cdk-high-contrast-active .mat-calendar-body-selected{background:none}.cdk-high-contrast-active .mat-calendar-body-in-range::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-start::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.cdk-high-contrast-active .mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }], {
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    todayValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    endValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelMinRequiredCells: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    numCols: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activeCell: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isRange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cellAspectRatio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparisonStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparisonEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    previewStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    previewEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startDateAccessibleName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    endDateAccessibleName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedValueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    previewChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    activeDateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragStarted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragEnded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/** Checks whether a node is a table cell element. */
function isTableCell(node) {
  return node?.nodeName === 'TD';
}
/**
 * Gets the date table cell element that is or contains the specified element.
 * Or returns null if element is not part of a date cell.
 */
function getCellElement(element) {
  let cell;
  if (isTableCell(element)) {
    cell = element;
  } else if (isTableCell(element.parentNode)) {
    cell = element.parentNode;
  } else if (isTableCell(element.parentNode?.parentNode)) {
    cell = element.parentNode.parentNode;
  }
  return cell?.getAttribute('data-mat-row') != null ? cell : null;
}
/** Checks whether a value is the start of a range. */
function isStart(value, start, end) {
  return end !== null && start !== end && value < end && value === start;
}
/** Checks whether a value is the end of a range. */
function isEnd(value, start, end) {
  return start !== null && start !== end && value >= start && value === end;
}
/** Checks whether a value is inside of a range. */
function isInRange(value, start, end, rangeEnabled) {
  return rangeEnabled && start !== null && end !== null && start !== end && value >= start && value <= end;
}
/**
 * Extracts the element that actually corresponds to a touch event's location
 * (rather than the element that initiated the sequence of touch events).
 */
function getActualTouchTarget(event) {
  const touchLocation = event.changedTouches[0];
  return document.elementFromPoint(touchLocation.clientX, touchLocation.clientY);
}

/** A class representing a range of dates. */
class DateRange {
  constructor( /** The start date of the range. */
  start, /** The end date of the range. */
  end) {
    this.start = start;
    this.end = end;
  }
}
/**
 * A selection model containing a date selection.
 * @docs-private
 */
class MatDateSelectionModel {
  constructor( /** The current selection. */
  selection, _adapter) {
    this.selection = selection;
    this._adapter = _adapter;
    this._selectionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the selection has changed. */
    this.selectionChanged = this._selectionChanged;
    this.selection = selection;
  }
  /**
   * Updates the current selection in the model.
   * @param value New selection that should be assigned.
   * @param source Object that triggered the selection change.
   */
  updateSelection(value, source) {
    const oldValue = this.selection;
    this.selection = value;
    this._selectionChanged.next({
      selection: value,
      source,
      oldValue
    });
  }
  ngOnDestroy() {
    this._selectionChanged.complete();
  }
  _isValidDateInstance(date) {
    return this._adapter.isDateInstance(date) && this._adapter.isValid(date);
  }
  static #_ = this.ɵfac = function MatDateSelectionModel_Factory(t) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MatDateSelectionModel,
    factory: MatDateSelectionModel.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDateSelectionModel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: undefined
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter
  }], null);
})();
/**
 * A selection model that contains a single date.
 * @docs-private
 */
class MatSingleDateSelectionModel extends MatDateSelectionModel {
  constructor(adapter) {
    super(null, adapter);
  }
  /**
   * Adds a date to the current selection. In the case of a single date selection, the added date
   * simply overwrites the previous selection
   */
  add(date) {
    super.updateSelection(date, this);
  }
  /** Checks whether the current selection is valid. */
  isValid() {
    return this.selection != null && this._isValidDateInstance(this.selection);
  }
  /**
   * Checks whether the current selection is complete. In the case of a single date selection, this
   * is true if the current selection is not null.
   */
  isComplete() {
    return this.selection != null;
  }
  /** Clones the selection model. */
  clone() {
    const clone = new MatSingleDateSelectionModel(this._adapter);
    clone.updateSelection(this.selection, this);
    return clone;
  }
  static #_ = this.ɵfac = function MatSingleDateSelectionModel_Factory(t) {
    return new (t || MatSingleDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MatSingleDateSelectionModel,
    factory: MatSingleDateSelectionModel.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSingleDateSelectionModel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter
  }], null);
})();
/**
 * A selection model that contains a date range.
 * @docs-private
 */
class MatRangeDateSelectionModel extends MatDateSelectionModel {
  constructor(adapter) {
    super(new DateRange(null, null), adapter);
  }
  /**
   * Adds a date to the current selection. In the case of a date range selection, the added date
   * fills in the next `null` value in the range. If both the start and the end already have a date,
   * the selection is reset so that the given date is the new `start` and the `end` is null.
   */
  add(date) {
    let {
      start,
      end
    } = this.selection;
    if (start == null) {
      start = date;
    } else if (end == null) {
      end = date;
    } else {
      start = date;
      end = null;
    }
    super.updateSelection(new DateRange(start, end), this);
  }
  /** Checks whether the current selection is valid. */
  isValid() {
    const {
      start,
      end
    } = this.selection;
    // Empty ranges are valid.
    if (start == null && end == null) {
      return true;
    }
    // Complete ranges are only valid if both dates are valid and the start is before the end.
    if (start != null && end != null) {
      return this._isValidDateInstance(start) && this._isValidDateInstance(end) && this._adapter.compareDate(start, end) <= 0;
    }
    // Partial ranges are valid if the start/end is valid.
    return (start == null || this._isValidDateInstance(start)) && (end == null || this._isValidDateInstance(end));
  }
  /**
   * Checks whether the current selection is complete. In the case of a date range selection, this
   * is true if the current selection has a non-null `start` and `end`.
   */
  isComplete() {
    return this.selection.start != null && this.selection.end != null;
  }
  /** Clones the selection model. */
  clone() {
    const clone = new MatRangeDateSelectionModel(this._adapter);
    clone.updateSelection(this.selection, this);
    return clone;
  }
  static #_ = this.ɵfac = function MatRangeDateSelectionModel_Factory(t) {
    return new (t || MatRangeDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MatRangeDateSelectionModel,
    factory: MatRangeDateSelectionModel.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRangeDateSelectionModel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter
  }], null);
})();
/** @docs-private */
function MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new MatSingleDateSelectionModel(adapter);
}
/**
 * Used to provide a single selection model to a component.
 * @docs-private
 */
const MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: MatDateSelectionModel,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter],
  useFactory: MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY
};
/** @docs-private */
function MAT_RANGE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new MatRangeDateSelectionModel(adapter);
}
/**
 * Used to provide a range selection model to a component.
 * @docs-private
 */
const MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: MatDateSelectionModel,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter],
  useFactory: MAT_RANGE_DATE_SELECTION_MODEL_FACTORY
};

/** Injection token used to customize the date range selection behavior. */
const MAT_DATE_RANGE_SELECTION_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DATE_RANGE_SELECTION_STRATEGY');
/** Provides the default date range selection behavior. */
class DefaultMatCalendarRangeStrategy {
  constructor(_dateAdapter) {
    this._dateAdapter = _dateAdapter;
  }
  selectionFinished(date, currentRange) {
    let {
      start,
      end
    } = currentRange;
    if (start == null) {
      start = date;
    } else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
      end = date;
    } else {
      start = date;
      end = null;
    }
    return new DateRange(start, end);
  }
  createPreview(activeDate, currentRange) {
    let start = null;
    let end = null;
    if (currentRange.start && !currentRange.end && activeDate) {
      start = currentRange.start;
      end = activeDate;
    }
    return new DateRange(start, end);
  }
  createDrag(dragOrigin, originalRange, newDate) {
    let start = originalRange.start;
    let end = originalRange.end;
    if (!start || !end) {
      // Can't drag from an incomplete range.
      return null;
    }
    const adapter = this._dateAdapter;
    const isRange = adapter.compareDate(start, end) !== 0;
    const diffYears = adapter.getYear(newDate) - adapter.getYear(dragOrigin);
    const diffMonths = adapter.getMonth(newDate) - adapter.getMonth(dragOrigin);
    const diffDays = adapter.getDate(newDate) - adapter.getDate(dragOrigin);
    if (isRange && adapter.sameDate(dragOrigin, originalRange.start)) {
      start = newDate;
      if (adapter.compareDate(newDate, end) > 0) {
        end = adapter.addCalendarYears(end, diffYears);
        end = adapter.addCalendarMonths(end, diffMonths);
        end = adapter.addCalendarDays(end, diffDays);
      }
    } else if (isRange && adapter.sameDate(dragOrigin, originalRange.end)) {
      end = newDate;
      if (adapter.compareDate(newDate, start) < 0) {
        start = adapter.addCalendarYears(start, diffYears);
        start = adapter.addCalendarMonths(start, diffMonths);
        start = adapter.addCalendarDays(start, diffDays);
      }
    } else {
      start = adapter.addCalendarYears(start, diffYears);
      start = adapter.addCalendarMonths(start, diffMonths);
      start = adapter.addCalendarDays(start, diffDays);
      end = adapter.addCalendarYears(end, diffYears);
      end = adapter.addCalendarMonths(end, diffMonths);
      end = adapter.addCalendarDays(end, diffDays);
    }
    return new DateRange(start, end);
  }
  static #_ = this.ɵfac = function DefaultMatCalendarRangeStrategy_Factory(t) {
    return new (t || DefaultMatCalendarRangeStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DefaultMatCalendarRangeStrategy,
    factory: DefaultMatCalendarRangeStrategy.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultMatCalendarRangeStrategy, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], () => [{
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter
  }], null);
})();
/** @docs-private */
function MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY(parent, adapter) {
  return parent || new DefaultMatCalendarRangeStrategy(adapter);
}
/** @docs-private */
const MAT_CALENDAR_RANGE_STRATEGY_PROVIDER = {
  provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MAT_DATE_RANGE_SELECTION_STRATEGY], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter],
  useFactory: MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY
};
const DAYS_PER_WEEK = 7;
/**
 * An internal component used to display a single month in the datepicker.
 * @docs-private
 */
class MatMonthView {
  /**
   * The date to display in this month view (everything other than the month and year is ignored).
   */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    const oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setRanges(this._selected);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir, _rangeStrategy) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dateFormats = _dateFormats;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rangeStrategy = _rangeStrategy;
    this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    /** Origin of active drag, or null when dragging is not active. */
    this.activeDrag = null;
    /** Emits when a new date is selected. */
    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when any date is selected. */
    this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when the user initiates a date range drag via mouse or touch. */
    this.dragStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Emits when the user completes or cancels a date range drag.
     * Emits null when the drag was canceled or the newly selected date range if completed.
     */
    this.dragEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when any date is activated. */
    this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError('DateAdapter');
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError('MAT_DATE_FORMATS');
      }
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(null)).subscribe(() => this._init());
  }
  ngOnChanges(changes) {
    const comparisonChange = changes['comparisonStart'] || changes['comparisonEnd'];
    if (comparisonChange && !comparisonChange.firstChange) {
      this._setRanges(this.selected);
    }
    if (changes['activeDrag'] && !this.activeDrag) {
      this._clearPreview();
    }
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Handles when a new date is selected. */
  _dateSelected(event) {
    const date = event.value;
    const selectedDate = this._getDateFromDayOfMonth(date);
    let rangeStartDate;
    let rangeEndDate;
    if (this._selected instanceof DateRange) {
      rangeStartDate = this._getDateInCurrentMonth(this._selected.start);
      rangeEndDate = this._getDateInCurrentMonth(this._selected.end);
    } else {
      rangeStartDate = rangeEndDate = this._getDateInCurrentMonth(this._selected);
    }
    if (rangeStartDate !== date || rangeEndDate !== date) {
      this.selectedChange.emit(selectedDate);
    }
    this._userSelection.emit({
      value: selectedDate,
      event: event.event
    });
    this._clearPreview();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const month = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromDayOfMonth(month);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this._activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in month view. */
  _handleCalendarBodyKeydown(event) {
    // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
    // disabled ones from being selected. This may not be ideal, we should look into whether
    // navigation should skip over disabled dates, and if so, how to implement that efficiently.
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.HOME:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.END:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.PAGE_UP:
        this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.PAGE_DOWN:
        this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ENTER:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.SPACE:
        this._selectionKeyPressed = true;
        if (this._canSelect(this._activeDate)) {
          // Prevent unexpected default actions such as form submission.
          // Note that we only prevent the default action here while the selection happens in
          // `keyup` below. We can't do the selection here, because it can cause the calendar to
          // reopen if focus is restored immediately. We also can't call `preventDefault` on `keyup`
          // because it's too late (see #23305).
          event.preventDefault();
        }
        return;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ESCAPE:
        // Abort the current range selection if the user presses escape mid-selection.
        if (this._previewEnd != null && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event)) {
          this._clearPreview();
          // If a drag is in progress, cancel the drag without changing the
          // current selection.
          if (this.activeDrag) {
            this.dragEnded.emit({
              value: null,
              event
            });
          } else {
            this.selectedChange.emit(null);
            this._userSelection.emit({
              value: null,
              event
            });
          }
          event.preventDefault();
          event.stopPropagation(); // Prevents the overlay from closing.
        }
        return;
      default:
        // Don't prevent default or focus active cell on keys that we don't explicitly handle.
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
      this._focusActiveCellAfterViewChecked();
    }
    // Prevent unexpected default actions such as form submission.
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in month view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ENTER) {
      if (this._selectionKeyPressed && this._canSelect(this._activeDate)) {
        this._dateSelected({
          value: this._dateAdapter.getDate(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  /** Initializes this month view. */
  _init() {
    this._setRanges(this.selected);
    this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
    this._monthLabel = this._dateFormats.display.monthLabel ? this._dateAdapter.format(this.activeDate, this._dateFormats.display.monthLabel) : this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase();
    let firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
    this._firstWeekOffset = (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) - this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
    this._initWeekdays();
    this._createWeekCells();
    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell(movePreview) {
    this._matCalendarBody._focusActiveCell(movePreview);
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /** Called when the user has activated a new cell and the preview needs to be updated. */
  _previewChanged({
    event,
    value: cell
  }) {
    if (this._rangeStrategy) {
      // We can assume that this will be a range, because preview
      // events aren't fired for single date selections.
      const value = cell ? cell.rawValue : null;
      const previewRange = this._rangeStrategy.createPreview(value, this.selected, event);
      this._previewStart = this._getCellCompareValue(previewRange.start);
      this._previewEnd = this._getCellCompareValue(previewRange.end);
      if (this.activeDrag && value) {
        const dragRange = this._rangeStrategy.createDrag?.(this.activeDrag.value, this.selected, value, event);
        if (dragRange) {
          this._previewStart = this._getCellCompareValue(dragRange.start);
          this._previewEnd = this._getCellCompareValue(dragRange.end);
        }
      }
      // Note that here we need to use `detectChanges`, rather than `markForCheck`, because
      // the way `_focusActiveCell` is set up at the moment makes it fire at the wrong time
      // when navigating one month back using the keyboard which will cause this handler
      // to throw a "changed after checked" error when updating the preview state.
      this._changeDetectorRef.detectChanges();
    }
  }
  /**
   * Called when the user has ended a drag. If the drag/drop was successful,
   * computes and emits the new range selection.
   */
  _dragEnded(event) {
    if (!this.activeDrag) return;
    if (event.value) {
      // Propagate drag effect
      const dragDropResult = this._rangeStrategy?.createDrag?.(this.activeDrag.value, this.selected, event.value, event.event);
      this.dragEnded.emit({
        value: dragDropResult ?? null,
        event: event.event
      });
    } else {
      this.dragEnded.emit({
        value: null,
        event: event.event
      });
    }
  }
  /**
   * Takes a day of the month and returns a new date in the same month and year as the currently
   *  active date. The returned date will have the same day of the month as the argument date.
   */
  _getDateFromDayOfMonth(dayOfMonth) {
    return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), dayOfMonth);
  }
  /** Initializes the weekdays. */
  _initWeekdays() {
    const firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
    const narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
    const longWeekdays = this._dateAdapter.getDayOfWeekNames('long');
    // Rotate the labels for days of the week based on the configured first day of the week.
    let weekdays = longWeekdays.map((long, i) => {
      return {
        long,
        narrow: narrowWeekdays[i]
      };
    });
    this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
  }
  /** Creates MatCalendarCells for the dates in this month. */
  _createWeekCells() {
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
    const dateNames = this._dateAdapter.getDateNames();
    this._weeks = [[]];
    for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
      if (cell == DAYS_PER_WEEK) {
        this._weeks.push([]);
        cell = 0;
      }
      const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
      const enabled = this._shouldEnableDate(date);
      const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
      const cellClasses = this.dateClass ? this.dateClass(date, 'month') : undefined;
      this._weeks[this._weeks.length - 1].push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, this._getCellCompareValue(date), date));
    }
  }
  /** Date filter for the month */
  _shouldEnableDate(date) {
    return !!date && (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) && (!this.dateFilter || this.dateFilter(date));
  }
  /**
   * Gets the date in this month that the given Date falls on.
   * Returns null if the given Date is in another month.
   */
  _getDateInCurrentMonth(date) {
    return date && this._hasSameMonthAndYear(date, this.activeDate) ? this._dateAdapter.getDate(date) : null;
  }
  /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
  _hasSameMonthAndYear(d1, d2) {
    return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) && this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
  }
  /** Gets the value that will be used to one cell to another. */
  _getCellCompareValue(date) {
    if (date) {
      // We use the time since the Unix epoch to compare dates in this view, rather than the
      // cell values, because we need to support ranges that span across multiple months/years.
      const year = this._dateAdapter.getYear(date);
      const month = this._dateAdapter.getMonth(date);
      const day = this._dateAdapter.getDate(date);
      return new Date(year, month, day).getTime();
    }
    return null;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === 'rtl';
  }
  /** Sets the current range based on a model value. */
  _setRanges(selectedValue) {
    if (selectedValue instanceof DateRange) {
      this._rangeStart = this._getCellCompareValue(selectedValue.start);
      this._rangeEnd = this._getCellCompareValue(selectedValue.end);
      this._isRange = true;
    } else {
      this._rangeStart = this._rangeEnd = this._getCellCompareValue(selectedValue);
      this._isRange = false;
    }
    this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart);
    this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd);
  }
  /** Gets whether a date can be selected in the month view. */
  _canSelect(date) {
    return !this.dateFilter || this.dateFilter(date);
  }
  /** Clears out preview state. */
  _clearPreview() {
    this._previewStart = this._previewEnd = null;
  }
  static #_ = this.ɵfac = function MatMonthView_Factory(t) {
    return new (t || MatMonthView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatMonthView,
    selectors: [["mat-month-view"]],
    viewQuery: function MatMonthView_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendarBody, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
      }
    },
    inputs: {
      activeDate: "activeDate",
      selected: "selected",
      minDate: "minDate",
      maxDate: "maxDate",
      dateFilter: "dateFilter",
      dateClass: "dateClass",
      comparisonStart: "comparisonStart",
      comparisonEnd: "comparisonEnd",
      startDateAccessibleName: "startDateAccessibleName",
      endDateAccessibleName: "endDateAccessibleName",
      activeDrag: "activeDrag"
    },
    outputs: {
      selectedChange: "selectedChange",
      _userSelection: "_userSelection",
      dragStarted: "dragStarted",
      dragEnded: "dragEnded",
      activeDateChange: "activeDateChange"
    },
    exportAs: ["matMonthView"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 14,
    consts: [["role", "grid", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["aria-hidden", "true", "colspan", "7", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "startDateAccessibleName", "endDateAccessibleName", "selectedValueChange", "activeDateChange", "previewChange", "dragStarted", "dragEnded", "keyup", "keydown"], ["scope", "col"], [1, "cdk-visually-hidden"], ["aria-hidden", "true"]],
    template: function MatMonthView_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0)(1, "thead", 1)(2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](3, MatMonthView_For_4_Template, 5, 2, "th", 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedValueChange", function MatMonthView_Template_tbody_selectedValueChange_7_listener($event) {
          return ctx._dateSelected($event);
        })("activeDateChange", function MatMonthView_Template_tbody_activeDateChange_7_listener($event) {
          return ctx._updateActiveDate($event);
        })("previewChange", function MatMonthView_Template_tbody_previewChange_7_listener($event) {
          return ctx._previewChanged($event);
        })("dragStarted", function MatMonthView_Template_tbody_dragStarted_7_listener($event) {
          return ctx.dragStarted.emit($event);
        })("dragEnded", function MatMonthView_Template_tbody_dragEnded_7_listener($event) {
          return ctx._dragEnded($event);
        })("keyup", function MatMonthView_Template_tbody_keyup_7_listener($event) {
          return ctx._handleCalendarBodyKeyup($event);
        })("keydown", function MatMonthView_Template_tbody_keydown_7_listener($event) {
          return ctx._handleCalendarBodyKeydown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx._weekdays);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("startValue", ctx._rangeStart)("endValue", ctx._rangeEnd)("comparisonStart", ctx._comparisonRangeStart)("comparisonEnd", ctx._comparisonRangeEnd)("previewStart", ctx._previewStart)("previewEnd", ctx._previewEnd)("isRange", ctx._isRange)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1)("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
      }
    },
    dependencies: [MatCalendarBody],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMonthView, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-month-view',
      exportAs: 'matMonthView',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatCalendarBody],
      template: "<table class=\"mat-calendar-table\" role=\"grid\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr>\n      @for (day of _weekdays; track day) {\n        <th scope=\"col\">\n          <span class=\"cdk-visually-hidden\">{{day.long}}</span>\n          <span aria-hidden=\"true\">{{day.narrow}}</span>\n        </th>\n      }\n    </tr>\n    <tr><th aria-hidden=\"true\" class=\"mat-calendar-table-header-divider\" colspan=\"7\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_monthLabel\"\n         [rows]=\"_weeks\"\n         [todayValue]=\"_todayDate!\"\n         [startValue]=\"_rangeStart!\"\n         [endValue]=\"_rangeEnd!\"\n         [comparisonStart]=\"_comparisonRangeStart\"\n         [comparisonEnd]=\"_comparisonRangeEnd\"\n         [previewStart]=\"_previewStart\"\n         [previewEnd]=\"_previewEnd\"\n         [isRange]=\"_isRange\"\n         [labelMinRequiredCells]=\"3\"\n         [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\"\n         [startDateAccessibleName]=\"startDateAccessibleName\"\n         [endDateAccessibleName]=\"endDateAccessibleName\"\n         (selectedValueChange)=\"_dateSelected($event)\"\n         (activeDateChange)=\"_updateActiveDate($event)\"\n         (previewChange)=\"_previewChanged($event)\"\n         (dragStarted)=\"dragStarted.emit($event)\"\n         (dragEnded)=\"_dragEnded($event)\"\n         (keyup)=\"_handleCalendarBodyKeyup($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n"
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS]
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], {
    activeDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparisonStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparisonEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startDateAccessibleName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    endDateAccessibleName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activeDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _userSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragStarted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragEnded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    activeDateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _matCalendarBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatCalendarBody]
    }]
  });
})();
const yearsPerPage = 24;
const yearsPerRow = 4;
/**
 * An internal component used to display a year selector in the datepicker.
 * @docs-private
 */
class MatMultiYearView {
  /** The date to display in this multi-year view (everything other than the year is ignored). */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    let oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setSelectedYear(value);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  constructor(_changeDetectorRef, _dateAdapter, _dir) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    /** Emits when a new year is selected. */
    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits the selected year. This doesn't imply a change on the selected date */
    this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when any date is activated. */
    this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    if (!this._dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw createMissingDateImplError('DateAdapter');
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(null)).subscribe(() => this._init());
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Initializes this multi-year view. */
  _init() {
    this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
    // We want a range years such that we maximize the number of
    // enabled dates visible at once. This prevents issues where the minimum year
    // is the last item of a page OR the maximum year is the first item of a page.
    // The offset from the active year to the "slot" for the starting year is the
    // *actual* first rendered year in the multi-year view.
    const activeYear = this._dateAdapter.getYear(this._activeDate);
    const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
    this._years = [];
    for (let i = 0, row = []; i < yearsPerPage; i++) {
      row.push(minYearOfPage + i);
      if (row.length == yearsPerRow) {
        this._years.push(row.map(year => this._createCellForYear(year)));
        row = [];
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  /** Handles when a new year is selected. */
  _yearSelected(event) {
    const year = event.value;
    const selectedYear = this._dateAdapter.createDate(year, 0, 1);
    const selectedDate = this._getDateFromYear(year);
    this.yearSelected.emit(selectedYear);
    this.selectedChange.emit(selectedDate);
  }
  /**
   * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const year = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromYear(year);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in multi-year view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.HOME:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.END:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.PAGE_UP:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.PAGE_DOWN:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ENTER:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.SPACE:
        // Note that we only prevent the default action here while the selection happens in
        // `keyup` below. We can't do the selection here, because it can cause the calendar to
        // reopen if focus is restored immediately. We also can't call `preventDefault` on `keyup`
        // because it's too late (see #23305).
        this._selectionKeyPressed = true;
        break;
      default:
        // Don't prevent default or focus active cell on keys that we don't explicitly handle.
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
    this._focusActiveCellAfterViewChecked();
    // Prevent unexpected default actions such as form submission.
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in multi-year view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ENTER) {
      if (this._selectionKeyPressed) {
        this._yearSelected({
          value: this._dateAdapter.getYear(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  _getActiveCell() {
    return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._matCalendarBody._focusActiveCell();
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /**
   * Takes a year and returns a new date on the same day and month as the currently active date
   *  The returned date will have the same year as the argument date.
   */
  _getDateFromYear(year) {
    const activeMonth = this._dateAdapter.getMonth(this.activeDate);
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, activeMonth, 1));
    const normalizedDate = this._dateAdapter.createDate(year, activeMonth, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
    return normalizedDate;
  }
  /** Creates an MatCalendarCell for the given year. */
  _createCellForYear(year) {
    const date = this._dateAdapter.createDate(year, 0, 1);
    const yearName = this._dateAdapter.getYearName(date);
    const cellClasses = this.dateClass ? this.dateClass(date, 'multi-year') : undefined;
    return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year), cellClasses);
  }
  /** Whether the given year is enabled. */
  _shouldEnableYear(year) {
    // disable if the year is greater than maxDate lower than minDate
    if (year === undefined || year === null || this.maxDate && year > this._dateAdapter.getYear(this.maxDate) || this.minDate && year < this._dateAdapter.getYear(this.minDate)) {
      return false;
    }
    // enable if it reaches here and there's no filter defined
    if (!this.dateFilter) {
      return true;
    }
    const firstOfYear = this._dateAdapter.createDate(year, 0, 1);
    // If any date in the year is enabled count the year as enabled.
    for (let date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }
    return false;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === 'rtl';
  }
  /** Sets the currently-highlighted year based on a model value. */
  _setSelectedYear(value) {
    this._selectedYear = null;
    if (value instanceof DateRange) {
      const displayValue = value.start || value.end;
      if (displayValue) {
        this._selectedYear = this._dateAdapter.getYear(displayValue);
      }
    } else if (value) {
      this._selectedYear = this._dateAdapter.getYear(value);
    }
  }
  static #_ = this.ɵfac = function MatMultiYearView_Factory(t) {
    return new (t || MatMultiYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatMultiYearView,
    selectors: [["mat-multi-year-view"]],
    viewQuery: function MatMultiYearView_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendarBody, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
      }
    },
    inputs: {
      activeDate: "activeDate",
      selected: "selected",
      minDate: "minDate",
      maxDate: "maxDate",
      dateFilter: "dateFilter",
      dateClass: "dateClass"
    },
    outputs: {
      selectedChange: "selectedChange",
      yearSelected: "yearSelected",
      activeDateChange: "activeDateChange"
    },
    exportAs: ["matMultiYearView"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 7,
    consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "activeDateChange", "keyup", "keydown"]],
    template: function MatMultiYearView_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0)(1, "thead", 1)(2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedValueChange", function MatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) {
          return ctx._yearSelected($event);
        })("activeDateChange", function MatMultiYearView_Template_tbody_activeDateChange_4_listener($event) {
          return ctx._updateActiveDate($event);
        })("keyup", function MatMultiYearView_Template_tbody_keyup_4_listener($event) {
          return ctx._handleCalendarBodyKeyup($event);
        })("keydown", function MatMultiYearView_Template_tbody_keydown_4_listener($event) {
          return ctx._handleCalendarBodyKeydown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx._years)("todayValue", ctx._todayYear)("startValue", ctx._selectedYear)("endValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
      }
    },
    dependencies: [MatCalendarBody],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMultiYearView, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-multi-year-view',
      exportAs: 'matMultiYearView',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatCalendarBody],
      template: "<table class=\"mat-calendar-table\" role=\"grid\">\n  <thead aria-hidden=\"true\" class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [rows]=\"_years\"\n         [todayValue]=\"_todayYear\"\n         [startValue]=\"_selectedYear!\"\n         [endValue]=\"_selectedYear!\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_getActiveCell()\"\n         (selectedValueChange)=\"_yearSelected($event)\"\n         (activeDateChange)=\"_updateActiveDate($event)\"\n         (keyup)=\"_handleCalendarBodyKeyup($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n"
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], {
    activeDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    yearSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    activeDateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _matCalendarBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatCalendarBody]
    }]
  });
})();
function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
  const year1 = dateAdapter.getYear(date1);
  const year2 = dateAdapter.getYear(date2);
  const startingYear = getStartingYear(dateAdapter, minDate, maxDate);
  return Math.floor((year1 - startingYear) / yearsPerPage) === Math.floor((year2 - startingYear) / yearsPerPage);
}
/**
 * When the multi-year view is first opened, the active year will be in view.
 * So we compute how many years are between the active year and the *slot* where our
 * "startingYear" will render when paged into view.
 */
function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
  const activeYear = dateAdapter.getYear(activeDate);
  return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
}
/**
 * We pick a "starting" year such that either the maximum year would be at the end
 * or the minimum year would be at the beginning of a page.
 */
function getStartingYear(dateAdapter, minDate, maxDate) {
  let startingYear = 0;
  if (maxDate) {
    const maxYear = dateAdapter.getYear(maxDate);
    startingYear = maxYear - yearsPerPage + 1;
  } else if (minDate) {
    startingYear = dateAdapter.getYear(minDate);
  }
  return startingYear;
}
/** Gets remainder that is non-negative, even if first number is negative */
function euclideanModulo(a, b) {
  return (a % b + b) % b;
}

/**
 * An internal component used to display a single year in the datepicker.
 * @docs-private
 */
class MatYearView {
  /** The date to display in this year view (everything other than the year is ignored). */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    let oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
      this._init();
    }
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setSelectedMonth(value);
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dateFormats = _dateFormats;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    /** Emits when a new month is selected. */
    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits the selected month. This doesn't imply a change on the selected date */
    this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when any date is activated. */
    this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError('DateAdapter');
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError('MAT_DATE_FORMATS');
      }
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(null)).subscribe(() => this._init());
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Handles when a new month is selected. */
  _monthSelected(event) {
    const month = event.value;
    const selectedMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    this.monthSelected.emit(selectedMonth);
    const selectedDate = this._getDateFromMonth(month);
    this.selectedChange.emit(selectedDate);
  }
  /**
   * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const month = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromMonth(month);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeydown(event) {
    // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
    // disabled ones from being selected. This may not be ideal, we should look into whether
    // navigation should skip over disabled dates, and if so, how to implement that efficiently.
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.HOME:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.END:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.PAGE_UP:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.PAGE_DOWN:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ENTER:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.SPACE:
        // Note that we only prevent the default action here while the selection happens in
        // `keyup` below. We can't do the selection here, because it can cause the calendar to
        // reopen if focus is restored immediately. We also can't call `preventDefault` on `keyup`
        // because it's too late (see #23305).
        this._selectionKeyPressed = true;
        break;
      default:
        // Don't prevent default or focus active cell on keys that we don't explicitly handle.
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
      this._focusActiveCellAfterViewChecked();
    }
    // Prevent unexpected default actions such as form submission.
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ENTER) {
      if (this._selectionKeyPressed) {
        this._monthSelected({
          value: this._dateAdapter.getMonth(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  /** Initializes this year view. */
  _init() {
    this._setSelectedMonth(this.selected);
    this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
    this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
    let monthNames = this._dateAdapter.getMonthNames('short');
    // First row of months only contains 5 elements so we can fit the year label on the same row.
    this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(row => row.map(month => this._createCellForMonth(month, monthNames[month])));
    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._matCalendarBody._focusActiveCell();
  }
  /** Schedules the matCalendarBody to focus the active cell after change detection has run */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /**
   * Gets the month in this year that the given Date falls on.
   * Returns null if the given Date is in another year.
   */
  _getMonthInCurrentYear(date) {
    return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(date) : null;
  }
  /**
   * Takes a month and returns a new date in the same day and year as the currently active date.
   *  The returned date will have the same month as the argument date.
   */
  _getDateFromMonth(month) {
    const normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);
    return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
  }
  /** Creates an MatCalendarCell for the given month. */
  _createCellForMonth(month, monthName) {
    const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.monthYearA11yLabel);
    const cellClasses = this.dateClass ? this.dateClass(date, 'year') : undefined;
    return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month), cellClasses);
  }
  /** Whether the given month is enabled. */
  _shouldEnableMonth(month) {
    const activeYear = this._dateAdapter.getYear(this.activeDate);
    if (month === undefined || month === null || this._isYearAndMonthAfterMaxDate(activeYear, month) || this._isYearAndMonthBeforeMinDate(activeYear, month)) {
      return false;
    }
    if (!this.dateFilter) {
      return true;
    }
    const firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
    // If any date in the month is enabled count the month as enabled.
    for (let date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Tests whether the combination month/year is after this.maxDate, considering
   * just the month and year of this.maxDate
   */
  _isYearAndMonthAfterMaxDate(year, month) {
    if (this.maxDate) {
      const maxYear = this._dateAdapter.getYear(this.maxDate);
      const maxMonth = this._dateAdapter.getMonth(this.maxDate);
      return year > maxYear || year === maxYear && month > maxMonth;
    }
    return false;
  }
  /**
   * Tests whether the combination month/year is before this.minDate, considering
   * just the month and year of this.minDate
   */
  _isYearAndMonthBeforeMinDate(year, month) {
    if (this.minDate) {
      const minYear = this._dateAdapter.getYear(this.minDate);
      const minMonth = this._dateAdapter.getMonth(this.minDate);
      return year < minYear || year === minYear && month < minMonth;
    }
    return false;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === 'rtl';
  }
  /** Sets the currently-selected month based on a model value. */
  _setSelectedMonth(value) {
    if (value instanceof DateRange) {
      this._selectedMonth = this._getMonthInCurrentYear(value.start) || this._getMonthInCurrentYear(value.end);
    } else {
      this._selectedMonth = this._getMonthInCurrentYear(value);
    }
  }
  static #_ = this.ɵfac = function MatYearView_Factory(t) {
    return new (t || MatYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatYearView,
    selectors: [["mat-year-view"]],
    viewQuery: function MatYearView_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendarBody, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
      }
    },
    inputs: {
      activeDate: "activeDate",
      selected: "selected",
      minDate: "minDate",
      maxDate: "maxDate",
      dateFilter: "dateFilter",
      dateClass: "dateClass"
    },
    outputs: {
      selectedChange: "selectedChange",
      monthSelected: "monthSelected",
      activeDateChange: "activeDateChange"
    },
    exportAs: ["matYearView"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 9,
    consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "activeDateChange", "keyup", "keydown"]],
    template: function MatYearView_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0)(1, "thead", 1)(2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedValueChange", function MatYearView_Template_tbody_selectedValueChange_4_listener($event) {
          return ctx._monthSelected($event);
        })("activeDateChange", function MatYearView_Template_tbody_activeDateChange_4_listener($event) {
          return ctx._updateActiveDate($event);
        })("keyup", function MatYearView_Template_tbody_keyup_4_listener($event) {
          return ctx._handleCalendarBodyKeyup($event);
        })("keydown", function MatYearView_Template_tbody_keydown_4_listener($event) {
          return ctx._handleCalendarBodyKeydown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("startValue", ctx._selectedMonth)("endValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
      }
    },
    dependencies: [MatCalendarBody],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatYearView, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-year-view',
      exportAs: 'matYearView',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatCalendarBody],
      template: "<table class=\"mat-calendar-table\" role=\"grid\">\n  <thead aria-hidden=\"true\" class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_yearLabel\"\n         [rows]=\"_months\"\n         [todayValue]=\"_todayMonth!\"\n         [startValue]=\"_selectedMonth!\"\n         [endValue]=\"_selectedMonth!\"\n         [labelMinRequiredCells]=\"2\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_dateAdapter.getMonth(activeDate)\"\n         (selectedValueChange)=\"_monthSelected($event)\"\n         (activeDateChange)=\"_updateActiveDate($event)\"\n         (keyup)=\"_handleCalendarBodyKeyup($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n"
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS]
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], {
    activeDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    monthSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    activeDateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _matCalendarBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatCalendarBody]
    }]
  });
})();
let calendarHeaderId = 1;
/** Default header for MatCalendar */
class MatCalendarHeader {
  constructor(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
    this._intl = _intl;
    this.calendar = calendar;
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    this._id = `mat-calendar-header-${calendarHeaderId++}`;
    this._periodButtonLabelId = `${this._id}-period-label`;
    this.calendar.stateChanges.subscribe(() => changeDetectorRef.markForCheck());
  }
  /** The display text for the current calendar view. */
  get periodButtonText() {
    if (this.calendar.currentView == 'month') {
      return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
    }
    if (this.calendar.currentView == 'year') {
      return this._dateAdapter.getYearName(this.calendar.activeDate);
    }
    return this._intl.formatYearRange(...this._formatMinAndMaxYearLabels());
  }
  /** The aria description for the current calendar view. */
  get periodButtonDescription() {
    if (this.calendar.currentView == 'month') {
      return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
    }
    if (this.calendar.currentView == 'year') {
      return this._dateAdapter.getYearName(this.calendar.activeDate);
    }
    // Format a label for the window of years displayed in the multi-year calendar view. Use
    // `formatYearRangeLabel` because it is TTS friendly.
    return this._intl.formatYearRangeLabel(...this._formatMinAndMaxYearLabels());
  }
  /** The `aria-label` for changing the calendar view. */
  get periodButtonLabel() {
    return this.calendar.currentView == 'month' ? this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
  }
  /** The label for the previous button. */
  get prevButtonLabel() {
    return {
      'month': this._intl.prevMonthLabel,
      'year': this._intl.prevYearLabel,
      'multi-year': this._intl.prevMultiYearLabel
    }[this.calendar.currentView];
  }
  /** The label for the next button. */
  get nextButtonLabel() {
    return {
      'month': this._intl.nextMonthLabel,
      'year': this._intl.nextYearLabel,
      'multi-year': this._intl.nextMultiYearLabel
    }[this.calendar.currentView];
  }
  /** Handles user clicks on the period label. */
  currentPeriodClicked() {
    this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
  }
  /** Handles user clicks on the previous button. */
  previousClicked() {
    this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
  }
  /** Handles user clicks on the next button. */
  nextClicked() {
    this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
  }
  /** Whether the previous period button is enabled. */
  previousEnabled() {
    if (!this.calendar.minDate) {
      return true;
    }
    return !this.calendar.minDate || !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
  }
  /** Whether the next period button is enabled. */
  nextEnabled() {
    return !this.calendar.maxDate || !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
  }
  /** Whether the two dates represent the same view in the current view mode (month or year). */
  _isSameView(date1, date2) {
    if (this.calendar.currentView == 'month') {
      return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) && this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
    }
    if (this.calendar.currentView == 'year') {
      return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
    }
    // Otherwise we are in 'multi-year' view.
    return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
  }
  /**
   * Format two individual labels for the minimum year and maximum year available in the multi-year
   * calendar view. Returns an array of two strings where the first string is the formatted label
   * for the minimum year, and the second string is the formatted label for the maximum year.
   */
  _formatMinAndMaxYearLabels() {
    // The offset from the active year to the "slot" for the starting year is the
    // *actual* first rendered year in the multi-year view, and the last year is
    // just yearsPerPage - 1 away.
    const activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
    const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
    const maxYearOfPage = minYearOfPage + yearsPerPage - 1;
    const minYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
    const maxYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));
    return [minYearLabel, maxYearLabel];
  }
  static #_ = this.ɵfac = function MatCalendarHeader_Factory(t) {
    return new (t || MatCalendarHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCalendar)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatCalendarHeader,
    selectors: [["mat-calendar-header"]],
    exportAs: ["matCalendarHeader"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c1,
    decls: 13,
    vars: 11,
    consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["mat-button", "", "type", "button", "aria-live", "polite", 1, "mat-calendar-period-button", 3, "click"], ["aria-hidden", "true"], ["viewBox", "0 0 10 5", "focusable", "false", "aria-hidden", "true", 1, "mat-calendar-arrow"], ["points", "0,0 5,5 10,0"], [1, "mat-calendar-spacer"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-previous-button", 3, "disabled", "click"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-next-button", 3, "disabled", "click"], [1, "mat-calendar-hidden-label", 3, "id"]],
    template: function MatCalendarHeader_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_2_listener() {
          return ctx.currentPeriodClicked();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "polygon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_9_listener() {
          return ctx.previousClicked();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_10_listener() {
          return ctx.nextClicked();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.periodButtonLabel)("aria-describedby", ctx._periodButtonLabelId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.periodButtonText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-calendar-invert", ctx.calendar.currentView !== "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.previousEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.prevButtonLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.nextEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.nextButtonLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._periodButtonLabelId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.periodButtonDescription);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCalendarHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-calendar-header',
      exportAs: 'matCalendarHeader',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton],
      template: "<div class=\"mat-calendar-header\">\n  <div class=\"mat-calendar-controls\">\n    <button mat-button type=\"button\" class=\"mat-calendar-period-button\"\n            (click)=\"currentPeriodClicked()\" [attr.aria-label]=\"periodButtonLabel\"\n            [attr.aria-describedby]=\"_periodButtonLabelId\" aria-live=\"polite\">\n      <span aria-hidden=\"true\">{{periodButtonText}}</span>\n      <svg class=\"mat-calendar-arrow\" [class.mat-calendar-invert]=\"calendar.currentView !== 'month'\"\n           viewBox=\"0 0 10 5\" focusable=\"false\" aria-hidden=\"true\">\n           <polygon points=\"0,0 5,5 10,0\"/>\n      </svg>\n    </button>\n\n    <div class=\"mat-calendar-spacer\"></div>\n\n    <ng-content></ng-content>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-previous-button\"\n            [disabled]=\"!previousEnabled()\" (click)=\"previousClicked()\"\n            [attr.aria-label]=\"prevButtonLabel\">\n    </button>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-next-button\"\n            [disabled]=\"!nextEnabled()\" (click)=\"nextClicked()\"\n            [attr.aria-label]=\"nextButtonLabel\">\n    </button>\n  </div>\n</div>\n<label [id]=\"_periodButtonLabelId\" class=\"mat-calendar-hidden-label\">{{periodButtonDescription}}</label>\n"
    }]
  }], () => [{
    type: MatDatepickerIntl
  }, {
    type: MatCalendar,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCalendar)]
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }], null);
})();
/** A calendar that is used as part of the datepicker. */
class MatCalendar {
  /** A date representing the period (month or year) to start the calendar in. */
  get startAt() {
    return this._startAt;
  }
  set startAt(value) {
    this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
  }
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /**
   * The current active date. This determines which time period is shown and which date is
   * highlighted when using keyboard navigation.
   */
  get activeDate() {
    return this._clampedActiveDate;
  }
  set activeDate(value) {
    this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
    this.stateChanges.next();
    this._changeDetectorRef.markForCheck();
  }
  /** Whether the calendar is in month view. */
  get currentView() {
    return this._currentView;
  }
  set currentView(value) {
    const viewChangedResult = this._currentView !== value ? value : null;
    this._currentView = value;
    this._moveFocusOnNextTick = true;
    this._changeDetectorRef.markForCheck();
    if (viewChangedResult) {
      this.viewChanged.emit(viewChangedResult);
    }
  }
  constructor(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    this._changeDetectorRef = _changeDetectorRef;
    /**
     * Used for scheduling that focus should be moved to the active cell on the next tick.
     * We need to schedule it, rather than do it immediately, because we have to wait
     * for Angular to re-evaluate the view children.
     */
    this._moveFocusOnNextTick = false;
    /** Whether the calendar should be started in month or year view. */
    this.startView = 'month';
    /** Emits when the currently selected date changes. */
    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Emits the year chosen in multiyear view.
     * This doesn't imply a change on the selected date.
     */
    this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Emits the month chosen in year view.
     * This doesn't imply a change on the selected date.
     */
    this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Emits when the current view changes.
     */
    this.viewChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    /** Emits when any date is selected. */
    this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits a new date range value when the user completes a drag drop operation. */
    this._userDragDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Origin of active drag, or null when dragging is not active. */
    this._activeDrag = null;
    /**
     * Emits whenever there is a state change that the header may need to respond to.
     */
    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError('DateAdapter');
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError('MAT_DATE_FORMATS');
      }
    }
    this._intlChanges = _intl.changes.subscribe(() => {
      _changeDetectorRef.markForCheck();
      this.stateChanges.next();
    });
  }
  ngAfterContentInit() {
    this._calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.ComponentPortal(this.headerComponent || MatCalendarHeader);
    this.activeDate = this.startAt || this._dateAdapter.today();
    // Assign to the private property since we don't want to move focus on init.
    this._currentView = this.startView;
  }
  ngAfterViewChecked() {
    if (this._moveFocusOnNextTick) {
      this._moveFocusOnNextTick = false;
      this.focusActiveCell();
    }
  }
  ngOnDestroy() {
    this._intlChanges.unsubscribe();
    this.stateChanges.complete();
  }
  ngOnChanges(changes) {
    // Ignore date changes that are at a different time on the same day. This fixes issues where
    // the calendar re-renders when there is no meaningful change to [minDate] or [maxDate]
    // (#24435).
    const minDateChange = changes['minDate'] && !this._dateAdapter.sameDate(changes['minDate'].previousValue, changes['minDate'].currentValue) ? changes['minDate'] : undefined;
    const maxDateChange = changes['maxDate'] && !this._dateAdapter.sameDate(changes['maxDate'].previousValue, changes['maxDate'].currentValue) ? changes['maxDate'] : undefined;
    const change = minDateChange || maxDateChange || changes['dateFilter'];
    if (change && !change.firstChange) {
      const view = this._getCurrentViewComponent();
      if (view) {
        // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
        // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
        this._changeDetectorRef.detectChanges();
        view._init();
      }
    }
    this.stateChanges.next();
  }
  /** Focuses the active date. */
  focusActiveCell() {
    this._getCurrentViewComponent()._focusActiveCell(false);
  }
  /** Updates today's date after an update of the active date */
  updateTodaysDate() {
    this._getCurrentViewComponent()._init();
  }
  /** Handles date selection in the month view. */
  _dateSelected(event) {
    const date = event.value;
    if (this.selected instanceof DateRange || date && !this._dateAdapter.sameDate(date, this.selected)) {
      this.selectedChange.emit(date);
    }
    this._userSelection.emit(event);
  }
  /** Handles year selection in the multiyear view. */
  _yearSelectedInMultiYearView(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  /** Handles month selection in the year view. */
  _monthSelectedInYearView(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /** Handles year/month selection in the multi-year/year views. */
  _goToDateInView(date, view) {
    this.activeDate = date;
    this.currentView = view;
  }
  /** Called when the user starts dragging to change a date range. */
  _dragStarted(event) {
    this._activeDrag = event;
  }
  /**
   * Called when a drag completes. It may end in cancelation or in the selection
   * of a new range.
   */
  _dragEnded(event) {
    if (!this._activeDrag) return;
    if (event.value) {
      this._userDragDrop.emit(event);
    }
    this._activeDrag = null;
  }
  /** Returns the component instance that corresponds to the current calendar view. */
  _getCurrentViewComponent() {
    // The return type is explicitly written as a union to ensure that the Closure compiler does
    // not optimize calls to _init(). Without the explicit return type, TypeScript narrows it to
    // only the first component type. See https://github.com/angular/components/issues/22996.
    return this.monthView || this.yearView || this.multiYearView;
  }
  static #_ = this.ɵfac = function MatCalendar_Factory(t) {
    return new (t || MatCalendar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatCalendar,
    selectors: [["mat-calendar"]],
    viewQuery: function MatCalendar_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatMonthView, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatYearView, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatMultiYearView, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.monthView = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.yearView = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiYearView = _t.first);
      }
    },
    hostAttrs: [1, "mat-calendar"],
    inputs: {
      headerComponent: "headerComponent",
      startAt: "startAt",
      startView: "startView",
      selected: "selected",
      minDate: "minDate",
      maxDate: "maxDate",
      dateFilter: "dateFilter",
      dateClass: "dateClass",
      comparisonStart: "comparisonStart",
      comparisonEnd: "comparisonEnd",
      startDateAccessibleName: "startDateAccessibleName",
      endDateAccessibleName: "endDateAccessibleName"
    },
    outputs: {
      selectedChange: "selectedChange",
      yearSelected: "yearSelected",
      monthSelected: "monthSelected",
      viewChanged: "viewChanged",
      _userSelection: "_userSelection",
      _userDragDrop: "_userDragDrop"
    },
    exportAs: ["matCalendar"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 2,
    consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag", "activeDateChange", "_userSelection", "dragStarted", "dragEnded"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "monthSelected", "selectedChange"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "yearSelected", "selectedChange"]],
    template: function MatCalendar_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatCalendar_Case_2_Template, 1, 11)(3, MatCalendar_Case_3_Template, 1, 6)(4, MatCalendar_Case_4_Template, 1, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let MatCalendar_contFlowTmp;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._calendarHeaderPortal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, (MatCalendar_contFlowTmp = ctx.currentView) === "month" ? 2 : MatCalendar_contFlowTmp === "year" ? 3 : MatCalendar_contFlowTmp === "multi-year" ? 4 : -1);
      }
    },
    dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.CdkPortalOutlet, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.CdkMonitorFocus, MatMonthView, MatYearView, MatMultiYearView],
    styles: [".mat-calendar{display:block;font-family:var(--mat-datepicker-calendar-text-font);font-size:var(--mat-datepicker-calendar-text-size)}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px;font-size:var(--mat-datepicker-calendar-period-button-text-size);font-weight:var(--mat-datepicker-calendar-period-button-text-weight);--mdc-text-button-label-text-color:var(--mat-datepicker-calendar-period-button-text-color)}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle;fill:var(--mat-datepicker-calendar-period-button-icon-color)}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.cdk-high-contrast-active .mat-calendar-arrow{fill:CanvasText}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled){color:var(--mat-datepicker-calendar-navigation-button-icon-color)}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0;color:var(--mat-datepicker-calendar-header-text-color);font-size:var(--mat-datepicker-calendar-header-text-size);font-weight:var(--mat-datepicker-calendar-header-text-weight)}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px;background:var(--mat-datepicker-calendar-header-divider-color)}.mat-calendar-body-cell-content::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}.mat-calendar-body-cell:focus .mat-focus-indicator::before{content:\"\"}.mat-calendar-hidden-label{display:none}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCalendar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-calendar',
      host: {
        'class': 'mat-calendar'
      },
      exportAs: 'matCalendar',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER],
      standalone: true,
      imports: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.CdkPortalOutlet, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.CdkMonitorFocus, MatMonthView, MatYearView, MatMultiYearView],
      template: "<ng-template [cdkPortalOutlet]=\"_calendarHeaderPortal\"></ng-template>\n\n<div class=\"mat-calendar-content\" cdkMonitorSubtreeFocus tabindex=\"-1\">\n  @switch (currentView) {\n    @case ('month') {\n        <mat-month-view\n            [(activeDate)]=\"activeDate\"\n            [selected]=\"selected\"\n            [dateFilter]=\"dateFilter\"\n            [maxDate]=\"maxDate\"\n            [minDate]=\"minDate\"\n            [dateClass]=\"dateClass\"\n            [comparisonStart]=\"comparisonStart\"\n            [comparisonEnd]=\"comparisonEnd\"\n            [startDateAccessibleName]=\"startDateAccessibleName\"\n            [endDateAccessibleName]=\"endDateAccessibleName\"\n            (_userSelection)=\"_dateSelected($event)\"\n            (dragStarted)=\"_dragStarted($event)\"\n            (dragEnded)=\"_dragEnded($event)\"\n            [activeDrag]=\"_activeDrag\"></mat-month-view>\n    }\n\n    @case ('year') {\n        <mat-year-view\n            [(activeDate)]=\"activeDate\"\n            [selected]=\"selected\"\n            [dateFilter]=\"dateFilter\"\n            [maxDate]=\"maxDate\"\n            [minDate]=\"minDate\"\n            [dateClass]=\"dateClass\"\n            (monthSelected)=\"_monthSelectedInYearView($event)\"\n            (selectedChange)=\"_goToDateInView($event, 'month')\"></mat-year-view>\n    }\n\n    @case ('multi-year') {\n        <mat-multi-year-view\n            [(activeDate)]=\"activeDate\"\n            [selected]=\"selected\"\n            [dateFilter]=\"dateFilter\"\n            [maxDate]=\"maxDate\"\n            [minDate]=\"minDate\"\n            [dateClass]=\"dateClass\"\n            (yearSelected)=\"_yearSelectedInMultiYearView($event)\"\n            (selectedChange)=\"_goToDateInView($event, 'year')\"></mat-multi-year-view>\n    }\n  }\n</div>\n",
      styles: [".mat-calendar{display:block;font-family:var(--mat-datepicker-calendar-text-font);font-size:var(--mat-datepicker-calendar-text-size)}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px;font-size:var(--mat-datepicker-calendar-period-button-text-size);font-weight:var(--mat-datepicker-calendar-period-button-text-weight);--mdc-text-button-label-text-color:var(--mat-datepicker-calendar-period-button-text-color)}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle;fill:var(--mat-datepicker-calendar-period-button-icon-color)}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.cdk-high-contrast-active .mat-calendar-arrow{fill:CanvasText}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled){color:var(--mat-datepicker-calendar-navigation-button-icon-color)}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0;color:var(--mat-datepicker-calendar-header-text-color);font-size:var(--mat-datepicker-calendar-header-text-size);font-weight:var(--mat-datepicker-calendar-header-text-weight)}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px;background:var(--mat-datepicker-calendar-header-divider-color)}.mat-calendar-body-cell-content::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}.mat-calendar-body-cell:focus .mat-focus-indicator::before{content:\"\"}.mat-calendar-hidden-label{display:none}"]
    }]
  }], () => [{
    type: MatDatepickerIntl
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }], {
    headerComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startAt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparisonStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparisonEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startDateAccessibleName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    endDateAccessibleName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    yearSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    monthSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    viewChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _userSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _userDragDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    monthView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatMonthView]
    }],
    yearView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatYearView]
    }],
    multiYearView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatMultiYearView]
    }]
  });
})();

/**
 * Animations used by the Material datepicker.
 * @docs-private
 */
const matDatepickerAnimations = {
  /** Transforms the height of the datepicker's calendar. */
  transformPanel: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.trigger)('transformPanel', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('void => enter-dropdown', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    opacity: 0,
    transform: 'scale(1, 0.8)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    opacity: 1,
    transform: 'scale(1, 1)'
  })]))), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('void => enter-dialog', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    opacity: 0,
    transform: 'scale(0.7)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    transform: 'none',
    opacity: 1
  })]))), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    opacity: 0
  })))]),
  /** Fades in the content of the calendar. */
  fadeInCalendar: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.trigger)('fadeInCalendar', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    opacity: 0
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    opacity: 1
  })),
  // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
  // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))])
};

/** Used to generate a unique ID for each datepicker instance. */
let datepickerUid = 0;
/** Injection token that determines the scroll handling while the calendar is open. */
const MAT_DATEPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-datepicker-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    const overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay);
    return () => overlay.scrollStrategies.reposition();
  }
});
/** @docs-private */
function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_DATEPICKER_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay],
  useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY
};
/**
 * Component used as the content for the datepicker overlay. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the overlay that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
class MatDatepickerContent {
  constructor(_elementRef, _changeDetectorRef, _globalModel, _dateAdapter, _rangeSelectionStrategy, intl) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._globalModel = _globalModel;
    this._dateAdapter = _dateAdapter;
    this._rangeSelectionStrategy = _rangeSelectionStrategy;
    this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    /** Emits when an animation has finished. */
    this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Whether there is an in-progress animation. */
    this._isAnimating = false;
    /** Portal with projected action buttons. */
    this._actionsPortal = null;
    this._closeButtonText = intl.closeCalendarLabel;
  }
  ngOnInit() {
    this._animationState = this.datepicker.touchUi ? 'enter-dialog' : 'enter-dropdown';
  }
  ngAfterViewInit() {
    this._subscriptions.add(this.datepicker.stateChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    }));
    this._calendar.focusActiveCell();
  }
  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    this._animationDone.complete();
  }
  _handleUserSelection(event) {
    const selection = this._model.selection;
    const value = event.value;
    const isRange = selection instanceof DateRange;
    // If we're selecting a range and we have a selection strategy, always pass the value through
    // there. Otherwise don't assign null values to the model, unless we're selecting a range.
    // A null value when picking a range means that the user cancelled the selection (e.g. by
    // pressing escape), whereas when selecting a single value it means that the value didn't
    // change. This isn't very intuitive, but it's here for backwards-compatibility.
    if (isRange && this._rangeSelectionStrategy) {
      const newSelection = this._rangeSelectionStrategy.selectionFinished(value, selection, event.event);
      this._model.updateSelection(newSelection, this);
    } else if (value && (isRange || !this._dateAdapter.sameDate(value, selection))) {
      this._model.add(value);
    }
    // Delegate closing the overlay to the actions.
    if ((!this._model || this._model.isComplete()) && !this._actionsPortal) {
      this.datepicker.close();
    }
  }
  _handleUserDragDrop(event) {
    this._model.updateSelection(event.value, this);
  }
  _startExitAnimation() {
    this._animationState = 'void';
    this._changeDetectorRef.markForCheck();
  }
  _handleAnimationEvent(event) {
    this._isAnimating = event.phaseName === 'start';
    if (!this._isAnimating) {
      this._animationDone.next();
    }
  }
  _getSelected() {
    return this._model.selection;
  }
  /** Applies the current pending selection to the global model. */
  _applyPendingSelection() {
    if (this._model !== this._globalModel) {
      this._globalModel.updateSelection(this._model.selection, this);
    }
  }
  /**
   * Assigns a new portal containing the datepicker actions.
   * @param portal Portal with the actions to be assigned.
   * @param forceRerender Whether a re-render of the portal should be triggered. This isn't
   * necessary if the portal is assigned during initialization, but it may be required if it's
   * added at a later point.
   */
  _assignActions(portal, forceRerender) {
    // If we have actions, clone the model so that we have the ability to cancel the selection,
    // otherwise update the global model directly. Note that we want to assign this as soon as
    // possible, but `_actionsPortal` isn't available in the constructor so we do it in `ngOnInit`.
    this._model = portal ? this._globalModel.clone() : this._globalModel;
    this._actionsPortal = portal;
    if (forceRerender) {
      this._changeDetectorRef.detectChanges();
    }
  }
  static #_ = this.ɵfac = function MatDatepickerContent_Factory(t) {
    return new (t || MatDatepickerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDateSelectionModel), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatDatepickerContent,
    selectors: [["mat-datepicker-content"]],
    viewQuery: function MatDatepickerContent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendar, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._calendar = _t.first);
      }
    },
    hostAttrs: [1, "mat-datepicker-content"],
    hostVars: 5,
    hostBindings: function MatDatepickerContent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostListener"]("@transformPanel.start", function MatDatepickerContent_animation_transformPanel_start_HostBindingHandler($event) {
          return ctx._handleAnimationEvent($event);
        })("@transformPanel.done", function MatDatepickerContent_animation_transformPanel_done_HostBindingHandler($event) {
          return ctx._handleAnimationEvent($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@transformPanel", ctx._animationState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.color ? "mat-" + ctx.color : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-datepicker-content-touch", ctx.datepicker.touchUi);
      }
    },
    inputs: {
      color: "color"
    },
    exportAs: ["matDatepickerContent"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 26,
    consts: [["cdkTrapFocus", "", "role", "dialog", 1, "mat-datepicker-content-container"], [3, "id", "ngClass", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "yearSelected", "monthSelected", "viewChanged", "_userSelection", "_userDragDrop"], [3, "cdkPortalOutlet"], ["type", "button", "mat-raised-button", "", 1, "mat-datepicker-close-button", 3, "color", "focus", "blur", "click"]],
    template: function MatDatepickerContent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-calendar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("yearSelected", function MatDatepickerContent_Template_mat_calendar_yearSelected_1_listener($event) {
          return ctx.datepicker._selectYear($event);
        })("monthSelected", function MatDatepickerContent_Template_mat_calendar_monthSelected_1_listener($event) {
          return ctx.datepicker._selectMonth($event);
        })("viewChanged", function MatDatepickerContent_Template_mat_calendar_viewChanged_1_listener($event) {
          return ctx.datepicker._viewChanged($event);
        })("_userSelection", function MatDatepickerContent_Template_mat_calendar__userSelection_1_listener($event) {
          return ctx._handleUserSelection($event);
        })("_userDragDrop", function MatDatepickerContent_Template_mat_calendar__userDragDrop_1_listener($event) {
          return ctx._handleUserDragDrop($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatDatepickerContent_ng_template_2_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatDatepickerContent_Template_button_focus_3_listener() {
          return ctx._closeButtonFocused = true;
        })("blur", function MatDatepickerContent_Template_button_blur_3_listener() {
          return ctx._closeButtonFocused = false;
        })("click", function MatDatepickerContent_Template_button_click_3_listener() {
          return ctx.datepicker.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-datepicker-content-container-with-custom-header", ctx.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions", ctx._actionsPortal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-modal", true)("aria-labelledby", (tmp_3_0 = ctx._dialogLabelId) !== null && tmp_3_0 !== undefined ? tmp_3_0 : undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.datepicker.id)("ngClass", ctx.datepicker.panelClass)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._getMinDate())("maxDate", ctx.datepicker._getMaxDate())("dateFilter", ctx.datepicker._getDateFilter())("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx._getSelected())("dateClass", ctx.datepicker.dateClass)("comparisonStart", ctx.comparisonStart)("comparisonEnd", ctx.comparisonEnd)("@fadeInCalendar", "enter")("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._actionsPortal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-visually-hidden", !ctx._closeButtonFocused);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color || "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._closeButtonText);
      }
    },
    dependencies: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.CdkTrapFocus, MatCalendar, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.CdkPortalOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton],
    styles: [".mat-datepicker-content{display:block;border-radius:4px;background-color:var(--mat-datepicker-calendar-container-background-color);color:var(--mat-datepicker-calendar-container-text-color);box-shadow:var(--mat-datepicker-calendar-container-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-shape)}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;box-shadow:var(--mat-datepicker-calendar-container-touch-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-touch-shape);position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}"],
    encapsulation: 2,
    data: {
      animation: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar]
    },
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-datepicker-content',
      host: {
        'class': 'mat-datepicker-content',
        '[class]': 'color ? "mat-" + color : ""',
        '[@transformPanel]': '_animationState',
        '(@transformPanel.start)': '_handleAnimationEvent($event)',
        '(@transformPanel.done)': '_handleAnimationEvent($event)',
        '[class.mat-datepicker-content-touch]': 'datepicker.touchUi'
      },
      animations: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar],
      exportAs: 'matDatepickerContent',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.CdkTrapFocus, MatCalendar, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.CdkPortalOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton],
      template: "<div\n  cdkTrapFocus\n  role=\"dialog\"\n  [attr.aria-modal]=\"true\"\n  [attr.aria-labelledby]=\"_dialogLabelId ?? undefined\"\n  class=\"mat-datepicker-content-container\"\n  [class.mat-datepicker-content-container-with-custom-header]=\"datepicker.calendarHeaderComponent\"\n  [class.mat-datepicker-content-container-with-actions]=\"_actionsPortal\">\n  <mat-calendar\n    [id]=\"datepicker.id\"\n    [ngClass]=\"datepicker.panelClass\"\n    [startAt]=\"datepicker.startAt\"\n    [startView]=\"datepicker.startView\"\n    [minDate]=\"datepicker._getMinDate()\"\n    [maxDate]=\"datepicker._getMaxDate()\"\n    [dateFilter]=\"datepicker._getDateFilter()\"\n    [headerComponent]=\"datepicker.calendarHeaderComponent\"\n    [selected]=\"_getSelected()\"\n    [dateClass]=\"datepicker.dateClass\"\n    [comparisonStart]=\"comparisonStart\"\n    [comparisonEnd]=\"comparisonEnd\"\n    [@fadeInCalendar]=\"'enter'\"\n    [startDateAccessibleName]=\"startDateAccessibleName\"\n    [endDateAccessibleName]=\"endDateAccessibleName\"\n    (yearSelected)=\"datepicker._selectYear($event)\"\n    (monthSelected)=\"datepicker._selectMonth($event)\"\n    (viewChanged)=\"datepicker._viewChanged($event)\"\n    (_userSelection)=\"_handleUserSelection($event)\"\n    (_userDragDrop)=\"_handleUserDragDrop($event)\"></mat-calendar>\n\n  <ng-template [cdkPortalOutlet]=\"_actionsPortal\"></ng-template>\n\n  <!-- Invisible close button for screen reader users. -->\n  <button\n    type=\"button\"\n    mat-raised-button\n    [color]=\"color || 'primary'\"\n    class=\"mat-datepicker-close-button\"\n    [class.cdk-visually-hidden]=\"!_closeButtonFocused\"\n    (focus)=\"_closeButtonFocused = true\"\n    (blur)=\"_closeButtonFocused = false\"\n    (click)=\"datepicker.close()\">{{ _closeButtonText }}</button>\n</div>\n",
      styles: [".mat-datepicker-content{display:block;border-radius:4px;background-color:var(--mat-datepicker-calendar-container-background-color);color:var(--mat-datepicker-calendar-container-text-color);box-shadow:var(--mat-datepicker-calendar-container-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-shape)}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;box-shadow:var(--mat-datepicker-calendar-container-touch-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-touch-shape);position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: MatDateSelectionModel
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
    }]
  }, {
    type: MatDatepickerIntl
  }], {
    _calendar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatCalendar]
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/** Base class for a datepicker. */
class MatDatepickerBase {
  /** The date to open the calendar to initially. */
  get startAt() {
    // If an explicit startAt is set we start there, otherwise we start at whatever the currently
    // selected value is.
    return this._startAt || (this.datepickerInput ? this.datepickerInput.getStartValue() : null);
  }
  set startAt(value) {
    this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  /** Color palette to use on the datepicker's calendar. */
  get color() {
    return this._color || (this.datepickerInput ? this.datepickerInput.getThemePalette() : undefined);
  }
  set color(value) {
    this._color = value;
  }
  /** Whether the datepicker pop-up should be disabled. */
  get disabled() {
    return this._disabled === undefined && this.datepickerInput ? this.datepickerInput.disabled : !!this._disabled;
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this.stateChanges.next(undefined);
    }
  }
  /**
   * Classes to be passed to the date picker panel.
   * Supports string and string array values, similar to `ngClass`.
   */
  get panelClass() {
    return this._panelClass;
  }
  set panelClass(value) {
    this._panelClass = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__.coerceStringArray)(value);
  }
  /** Whether the calendar is open. */
  get opened() {
    return this._opened;
  }
  set opened(value) {
    if (value) {
      this.open();
    } else {
      this.close();
    }
  }
  /** The minimum selectable date. */
  _getMinDate() {
    return this.datepickerInput && this.datepickerInput.min;
  }
  /** The maximum selectable date. */
  _getMaxDate() {
    return this.datepickerInput && this.datepickerInput.max;
  }
  _getDateFilter() {
    return this.datepickerInput && this.datepickerInput.dateFilter;
  }
  constructor(_overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _model) {
    this._overlay = _overlay;
    this._ngZone = _ngZone;
    this._viewContainerRef = _viewContainerRef;
    this._dateAdapter = _dateAdapter;
    this._dir = _dir;
    this._model = _model;
    this._inputStateChanges = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    this._document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT);
    /** The view that the calendar should start in. */
    this.startView = 'month';
    /**
     * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
     * than a dropdown and elements have more padding to allow for bigger touch targets.
     */
    this.touchUi = false;
    /** Preferred position of the datepicker in the X axis. */
    this.xPosition = 'start';
    /** Preferred position of the datepicker in the Y axis. */
    this.yPosition = 'below';
    /**
     * Whether to restore focus to the previously-focused element when the calendar is closed.
     * Note that automatic focus restoration is an accessibility feature and it is recommended that
     * you provide your own equivalent, if you decide to turn it off.
     */
    this.restoreFocus = true;
    /**
     * Emits selected year in multiyear view.
     * This doesn't imply a change on the selected date.
     */
    this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Emits selected month in year view.
     * This doesn't imply a change on the selected date.
     */
    this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Emits when the current view changes.
     */
    this.viewChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    /** Emits when the datepicker has been opened. */
    this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when the datepicker has been closed. */
    this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._opened = false;
    /** The id for the datepicker calendar. */
    this.id = `mat-datepicker-${datepickerUid++}`;
    /** The element that was focused before the datepicker was opened. */
    this._focusedElementBeforeOpen = null;
    /** Unique class that will be added to the backdrop so that the test harnesses can look it up. */
    this._backdropHarnessClass = `${this.id}-backdrop`;
    /** Emits when the datepicker's state changes. */
    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    if (!this._dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw createMissingDateImplError('DateAdapter');
    }
    this._scrollStrategy = scrollStrategy;
  }
  ngOnChanges(changes) {
    const positionChange = changes['xPosition'] || changes['yPosition'];
    if (positionChange && !positionChange.firstChange && this._overlayRef) {
      const positionStrategy = this._overlayRef.getConfig().positionStrategy;
      if (positionStrategy instanceof _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.FlexibleConnectedPositionStrategy) {
        this._setConnectedPositions(positionStrategy);
        if (this.opened) {
          this._overlayRef.updatePosition();
        }
      }
    }
    this.stateChanges.next(undefined);
  }
  ngOnDestroy() {
    this._destroyOverlay();
    this.close();
    this._inputStateChanges.unsubscribe();
    this.stateChanges.complete();
  }
  /** Selects the given date */
  select(date) {
    this._model.add(date);
  }
  /** Emits the selected year in multiyear view */
  _selectYear(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  /** Emits selected month in year view */
  _selectMonth(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /** Emits changed view */
  _viewChanged(view) {
    this.viewChanged.emit(view);
  }
  /**
   * Register an input with this datepicker.
   * @param input The datepicker input to register with this datepicker.
   * @returns Selection model that the input should hook itself up to.
   */
  registerInput(input) {
    if (this.datepickerInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('A MatDatepicker can only be associated with a single input.');
    }
    this._inputStateChanges.unsubscribe();
    this.datepickerInput = input;
    this._inputStateChanges = input.stateChanges.subscribe(() => this.stateChanges.next(undefined));
    return this._model;
  }
  /**
   * Registers a portal containing action buttons with the datepicker.
   * @param portal Portal to be registered.
   */
  registerActions(portal) {
    if (this._actionsPortal && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('A MatDatepicker can only be associated with a single actions row.');
    }
    this._actionsPortal = portal;
    this._componentRef?.instance._assignActions(portal, true);
  }
  /**
   * Removes a portal containing action buttons from the datepicker.
   * @param portal Portal to be removed.
   */
  removeActions(portal) {
    if (portal === this._actionsPortal) {
      this._actionsPortal = null;
      this._componentRef?.instance._assignActions(null, true);
    }
  }
  /** Open the calendar. */
  open() {
    // Skip reopening if there's an in-progress animation to avoid overlapping
    // sequences which can cause "changed after checked" errors. See #25837.
    if (this._opened || this.disabled || this._componentRef?.instance._isAnimating) {
      return;
    }
    if (!this.datepickerInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('Attempted to open an MatDatepicker with no associated input.');
    }
    this._focusedElementBeforeOpen = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getFocusedElementPierceShadowDom)();
    this._openOverlay();
    this._opened = true;
    this.openedStream.emit();
  }
  /** Close the calendar. */
  close() {
    // Skip reopening if there's an in-progress animation to avoid overlapping
    // sequences which can cause "changed after checked" errors. See #25837.
    if (!this._opened || this._componentRef?.instance._isAnimating) {
      return;
    }
    const canRestoreFocus = this.restoreFocus && this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === 'function';
    const completeClose = () => {
      // The `_opened` could've been reset already if
      // we got two events in quick succession.
      if (this._opened) {
        this._opened = false;
        this.closedStream.emit();
      }
    };
    if (this._componentRef) {
      const {
        instance,
        location
      } = this._componentRef;
      instance._startExitAnimation();
      instance._animationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(() => {
        const activeElement = this._document.activeElement;
        // Since we restore focus after the exit animation, we have to check that
        // the user didn't move focus themselves inside the `close` handler.
        if (canRestoreFocus && (!activeElement || activeElement === this._document.activeElement || location.nativeElement.contains(activeElement))) {
          this._focusedElementBeforeOpen.focus();
        }
        this._focusedElementBeforeOpen = null;
        this._destroyOverlay();
      });
    }
    if (canRestoreFocus) {
      // Because IE moves focus asynchronously, we can't count on it being restored before we've
      // marked the datepicker as closed. If the event fires out of sequence and the element that
      // we're refocusing opens the datepicker on focus, the user could be stuck with not being
      // able to close the calendar at all. We work around it by making the logic, that marks
      // the datepicker as closed, async as well.
      setTimeout(completeClose);
    } else {
      completeClose();
    }
  }
  /** Applies the current pending selection on the overlay to the model. */
  _applyPendingSelection() {
    this._componentRef?.instance?._applyPendingSelection();
  }
  /** Forwards relevant values from the datepicker to the datepicker content inside the overlay. */
  _forwardContentValues(instance) {
    instance.datepicker = this;
    instance.color = this.color;
    instance._dialogLabelId = this.datepickerInput.getOverlayLabelId();
    instance._assignActions(this._actionsPortal, false);
  }
  /** Opens the overlay with the calendar. */
  _openOverlay() {
    this._destroyOverlay();
    const isDialog = this.touchUi;
    const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.ComponentPortal(MatDatepickerContent, this._viewContainerRef);
    const overlayRef = this._overlayRef = this._overlay.create(new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayConfig({
      positionStrategy: isDialog ? this._getDialogStrategy() : this._getDropdownStrategy(),
      hasBackdrop: true,
      backdropClass: [isDialog ? 'cdk-overlay-dark-backdrop' : 'mat-overlay-transparent-backdrop', this._backdropHarnessClass],
      direction: this._dir,
      scrollStrategy: isDialog ? this._overlay.scrollStrategies.block() : this._scrollStrategy(),
      panelClass: `mat-datepicker-${isDialog ? 'dialog' : 'popup'}`
    }));
    this._getCloseStream(overlayRef).subscribe(event => {
      if (event) {
        event.preventDefault();
      }
      this.close();
    });
    // The `preventDefault` call happens inside the calendar as well, however focus moves into
    // it inside a timeout which can give browsers a chance to fire off a keyboard event in-between
    // that can scroll the page (see #24969). Always block default actions of arrow keys for the
    // entire overlay so the page doesn't get scrolled by accident.
    overlayRef.keydownEvents().subscribe(event => {
      const keyCode = event.keyCode;
      if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.DOWN_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.LEFT_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.RIGHT_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.PAGE_UP || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.PAGE_DOWN) {
        event.preventDefault();
      }
    });
    this._componentRef = overlayRef.attach(portal);
    this._forwardContentValues(this._componentRef.instance);
    // Update the position once the calendar has rendered. Only relevant in dropdown mode.
    if (!isDialog) {
      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(() => overlayRef.updatePosition());
    }
  }
  /** Destroys the current overlay. */
  _destroyOverlay() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = this._componentRef = null;
    }
  }
  /** Gets a position strategy that will open the calendar as a dropdown. */
  _getDialogStrategy() {
    return this._overlay.position().global().centerHorizontally().centerVertically();
  }
  /** Gets a position strategy that will open the calendar as a dropdown. */
  _getDropdownStrategy() {
    const strategy = this._overlay.position().flexibleConnectedTo(this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn('.mat-datepicker-content').withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition();
    return this._setConnectedPositions(strategy);
  }
  /** Sets the positions of the datepicker in dropdown mode based on the current configuration. */
  _setConnectedPositions(strategy) {
    const primaryX = this.xPosition === 'end' ? 'end' : 'start';
    const secondaryX = primaryX === 'start' ? 'end' : 'start';
    const primaryY = this.yPosition === 'above' ? 'bottom' : 'top';
    const secondaryY = primaryY === 'top' ? 'bottom' : 'top';
    return strategy.withPositions([{
      originX: primaryX,
      originY: secondaryY,
      overlayX: primaryX,
      overlayY: primaryY
    }, {
      originX: primaryX,
      originY: primaryY,
      overlayX: primaryX,
      overlayY: secondaryY
    }, {
      originX: secondaryX,
      originY: secondaryY,
      overlayX: secondaryX,
      overlayY: primaryY
    }, {
      originX: secondaryX,
      originY: primaryY,
      overlayX: secondaryX,
      overlayY: secondaryY
    }]);
  }
  /** Gets an observable that will emit when the overlay is supposed to be closed. */
  _getCloseStream(overlayRef) {
    const ctrlShiftMetaModifiers = ['ctrlKey', 'shiftKey', 'metaKey'];
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(event => {
      // Closing on alt + up is only valid when there's an input associated with the datepicker.
      return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event) || this.datepickerInput && (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event, 'altKey') && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.UP_ARROW && ctrlShiftMetaModifiers.every(modifier => !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event, modifier));
    })));
  }
  static #_ = this.ɵfac = function MatDatepickerBase_Factory(t) {
    return new (t || MatDatepickerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATEPICKER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDateSelectionModel));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatDatepickerBase,
    inputs: {
      calendarHeaderComponent: "calendarHeaderComponent",
      startAt: "startAt",
      startView: "startView",
      color: "color",
      touchUi: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "touchUi", "touchUi", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      xPosition: "xPosition",
      yPosition: "yPosition",
      restoreFocus: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "restoreFocus", "restoreFocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      dateClass: "dateClass",
      panelClass: "panelClass",
      opened: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "opened", "opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    outputs: {
      yearSelected: "yearSelected",
      monthSelected: "monthSelected",
      viewChanged: "viewChanged",
      openedStream: "opened",
      closedStream: "closed"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], () => [{
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_DATEPICKER_SCROLL_STRATEGY]
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: MatDateSelectionModel
  }], {
    calendarHeaderComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startAt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    startView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    touchUi: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    xPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    yPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    restoreFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    yearSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    monthSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    viewChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dateClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    openedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['opened']
    }],
    closedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['closed']
    }],
    panelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    opened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }]
  });
})();

// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the datepicker popup/dialog. */
class MatDatepicker extends MatDatepickerBase {
  static #_ = this.ɵfac = /* @__PURE__ */(() => {
    let ɵMatDatepicker_BaseFactory;
    return function MatDatepicker_Factory(t) {
      return (ɵMatDatepicker_BaseFactory || (ɵMatDatepicker_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatDatepicker)))(t || MatDatepicker);
    };
  })();
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatDatepicker,
    selectors: [["mat-datepicker"]],
    exportAs: ["matDatepicker"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, {
      provide: MatDatepickerBase,
      useExisting: MatDatepicker
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 0,
    vars: 0,
    template: function MatDatepicker_Template(rf, ctx) {},
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepicker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-datepicker',
      template: '',
      exportAs: 'matDatepicker',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, {
        provide: MatDatepickerBase,
        useExisting: MatDatepicker
      }],
      standalone: true
    }]
  }], null, null);
})();

/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
 */
class MatDatepickerInputEvent {
  constructor( /** Reference to the datepicker input component that emitted the event. */
  target, /** Reference to the native input element associated with the datepicker input. */
  targetElement) {
    this.target = target;
    this.targetElement = targetElement;
    this.value = this.target.value;
  }
}
/** Base class for datepicker inputs. */
class MatDatepickerInputBase {
  /** The value of the input. */
  get value() {
    return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue;
  }
  set value(value) {
    this._assignValueProgrammatically(value);
  }
  /** Whether the datepicker-input is disabled. */
  get disabled() {
    return !!this._disabled || this._parentDisabled();
  }
  set disabled(value) {
    const newValue = value;
    const element = this._elementRef.nativeElement;
    if (this._disabled !== newValue) {
      this._disabled = newValue;
      this.stateChanges.next(undefined);
    }
    // We need to null check the `blur` method, because it's undefined during SSR.
    // In Ivy static bindings are invoked earlier, before the element is attached to the DOM.
    // This can cause an error to be thrown in some browsers (IE/Edge) which assert that the
    // element has been inserted.
    if (newValue && this._isInitialized && element.blur) {
      // Normally, native input elements automatically blur if they turn disabled. This behavior
      // is problematic, because it would mean that it triggers another change detection cycle,
      // which then causes a changed after checked error if the input element was focused before.
      element.blur();
    }
  }
  /** Gets the base validator functions. */
  _getValidators() {
    return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator];
  }
  /** Registers a date selection model with the input. */
  _registerModel(model) {
    this._model = model;
    this._valueChangesSubscription.unsubscribe();
    if (this._pendingValue) {
      this._assignValue(this._pendingValue);
    }
    this._valueChangesSubscription = this._model.selectionChanged.subscribe(event => {
      if (this._shouldHandleChangeEvent(event)) {
        const value = this._getValueFromModel(event.selection);
        this._lastValueValid = this._isValidValue(value);
        this._cvaOnChange(value);
        this._onTouched();
        this._formatValue(value);
        this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
        this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
      }
    });
  }
  constructor(_elementRef, _dateAdapter, _dateFormats) {
    this._elementRef = _elementRef;
    this._dateAdapter = _dateAdapter;
    this._dateFormats = _dateFormats;
    /** Emits when a `change` event is fired on this `<input>`. */
    this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when an `input` event is fired on this `<input>`. */
    this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when the internal state has changed */
    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this._onTouched = () => {};
    this._validatorOnChange = () => {};
    this._cvaOnChange = () => {};
    this._valueChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    /** The form control validator for whether the input parses. */
    this._parseValidator = () => {
      return this._lastValueValid ? null : {
        'matDatepickerParse': {
          'text': this._elementRef.nativeElement.value
        }
      };
    };
    /** The form control validator for the date filter. */
    this._filterValidator = control => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      return !controlValue || this._matchesFilter(controlValue) ? null : {
        'matDatepickerFilter': true
      };
    };
    /** The form control validator for the min date. */
    this._minValidator = control => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const min = this._getMinDate();
      return !min || !controlValue || this._dateAdapter.compareDate(min, controlValue) <= 0 ? null : {
        'matDatepickerMin': {
          'min': min,
          'actual': controlValue
        }
      };
    };
    /** The form control validator for the max date. */
    this._maxValidator = control => {
      const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const max = this._getMaxDate();
      return !max || !controlValue || this._dateAdapter.compareDate(max, controlValue) >= 0 ? null : {
        'matDatepickerMax': {
          'max': max,
          'actual': controlValue
        }
      };
    };
    /** Whether the last value set on the input was valid. */
    this._lastValueValid = false;
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError('DateAdapter');
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError('MAT_DATE_FORMATS');
      }
    }
    // Update the displayed date when the locale changes.
    this._localeSubscription = _dateAdapter.localeChanges.subscribe(() => {
      this._assignValueProgrammatically(this.value);
    });
  }
  ngAfterViewInit() {
    this._isInitialized = true;
  }
  ngOnChanges(changes) {
    if (dateInputsHaveChanged(changes, this._dateAdapter)) {
      this.stateChanges.next(undefined);
    }
  }
  ngOnDestroy() {
    this._valueChangesSubscription.unsubscribe();
    this._localeSubscription.unsubscribe();
    this.stateChanges.complete();
  }
  /** @docs-private */
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  /** @docs-private */
  validate(c) {
    return this._validator ? this._validator(c) : null;
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this._assignValueProgrammatically(value);
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._cvaOnChange = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  _onKeydown(event) {
    const ctrlShiftMetaModifiers = ['ctrlKey', 'shiftKey', 'metaKey'];
    const isAltDownArrow = (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event, 'altKey') && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.DOWN_ARROW && ctrlShiftMetaModifiers.every(modifier => !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event, modifier));
    if (isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
      this._openPopup();
      event.preventDefault();
    }
  }
  _onInput(value) {
    const lastValueWasValid = this._lastValueValid;
    let date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
    this._lastValueValid = this._isValidValue(date);
    date = this._dateAdapter.getValidDateOrNull(date);
    const hasChanged = !this._dateAdapter.sameDate(date, this.value);
    // We need to fire the CVA change event for all
    // nulls, otherwise the validators won't run.
    if (!date || hasChanged) {
      this._cvaOnChange(date);
    } else {
      // Call the CVA change handler for invalid values
      // since this is what marks the control as dirty.
      if (value && !this.value) {
        this._cvaOnChange(date);
      }
      if (lastValueWasValid !== this._lastValueValid) {
        this._validatorOnChange();
      }
    }
    if (hasChanged) {
      this._assignValue(date);
      this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
    }
  }
  _onChange() {
    this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
  }
  /** Handles blur events on the input. */
  _onBlur() {
    // Reformat the input only if we have a valid value.
    if (this.value) {
      this._formatValue(this.value);
    }
    this._onTouched();
  }
  /** Formats a value and sets it on the input element. */
  _formatValue(value) {
    this._elementRef.nativeElement.value = value != null ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
  }
  /** Assigns a value to the model. */
  _assignValue(value) {
    // We may get some incoming values before the model was
    // assigned. Save the value so that we can assign it later.
    if (this._model) {
      this._assignValueToModel(value);
      this._pendingValue = null;
    } else {
      this._pendingValue = value;
    }
  }
  /** Whether a value is considered valid. */
  _isValidValue(value) {
    return !value || this._dateAdapter.isValid(value);
  }
  /**
   * Checks whether a parent control is disabled. This is in place so that it can be overridden
   * by inputs extending this one which can be placed inside of a group that can be disabled.
   */
  _parentDisabled() {
    return false;
  }
  /** Programmatically assigns a value to the input. */
  _assignValueProgrammatically(value) {
    value = this._dateAdapter.deserialize(value);
    this._lastValueValid = this._isValidValue(value);
    value = this._dateAdapter.getValidDateOrNull(value);
    this._assignValue(value);
    this._formatValue(value);
  }
  /** Gets whether a value matches the current date filter. */
  _matchesFilter(value) {
    const filter = this._getDateFilter();
    return !filter || filter(value);
  }
  static #_ = this.ɵfac = function MatDatepickerInputBase_Factory(t) {
    return new (t || MatDatepickerInputBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, 8));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatDatepickerInputBase,
    inputs: {
      value: "value",
      disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    outputs: {
      dateChange: "dateChange",
      dateInput: "dateInput"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerInputBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS]
    }]
  }], {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    dateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Checks whether the `SimpleChanges` object from an `ngOnChanges`
 * callback has any changes, accounting for date objects.
 */
function dateInputsHaveChanged(changes, adapter) {
  const keys = Object.keys(changes);
  for (let key of keys) {
    const {
      previousValue,
      currentValue
    } = changes[key];
    if (adapter.isDateInstance(previousValue) && adapter.isDateInstance(currentValue)) {
      if (!adapter.sameDate(previousValue, currentValue)) {
        return true;
      }
    } else {
      return true;
    }
  }
  return false;
}

/** @docs-private */
const MAT_DATEPICKER_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatDatepickerInput),
  multi: true
};
/** @docs-private */
const MAT_DATEPICKER_VALIDATORS = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatDatepickerInput),
  multi: true
};
/** Directive used to connect an input to a MatDatepicker. */
class MatDatepickerInput extends MatDatepickerInputBase {
  /** The datepicker that this input is associated with. */
  set matDatepicker(datepicker) {
    if (datepicker) {
      this._datepicker = datepicker;
      this._closedSubscription = datepicker.closedStream.subscribe(() => this._onTouched());
      this._registerModel(datepicker.registerInput(this));
    }
  }
  /** The minimum valid date. */
  get min() {
    return this._min;
  }
  set min(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._min)) {
      this._min = validValue;
      this._validatorOnChange();
    }
  }
  /** The maximum valid date. */
  get max() {
    return this._max;
  }
  set max(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._max)) {
      this._max = validValue;
      this._validatorOnChange();
    }
  }
  /** Function that can be used to filter out dates within the datepicker. */
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(value) {
    const wasMatchingValue = this._matchesFilter(this.value);
    this._dateFilter = value;
    if (this._matchesFilter(this.value) !== wasMatchingValue) {
      this._validatorOnChange();
    }
  }
  constructor(elementRef, dateAdapter, dateFormats, _formField) {
    super(elementRef, dateAdapter, dateFormats);
    this._formField = _formField;
    this._closedSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose(super._getValidators());
  }
  /**
   * Gets the element that the datepicker popup should be connected to.
   * @return The element to connect the popup to.
   */
  getConnectedOverlayOrigin() {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }
  /** Gets the ID of an element that should be used a description for the calendar overlay. */
  getOverlayLabelId() {
    if (this._formField) {
      return this._formField.getLabelId();
    }
    return this._elementRef.nativeElement.getAttribute('aria-labelledby');
  }
  /** Returns the palette used by the input's form field, if any. */
  getThemePalette() {
    return this._formField ? this._formField.color : undefined;
  }
  /** Gets the value at which the calendar should start. */
  getStartValue() {
    return this.value;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._closedSubscription.unsubscribe();
  }
  /** Opens the associated datepicker. */
  _openPopup() {
    if (this._datepicker) {
      this._datepicker.open();
    }
  }
  _getValueFromModel(modelValue) {
    return modelValue;
  }
  _assignValueToModel(value) {
    if (this._model) {
      this._model.updateSelection(value, this);
    }
  }
  /** Gets the input's minimum date. */
  _getMinDate() {
    return this._min;
  }
  /** Gets the input's maximum date. */
  _getMaxDate() {
    return this._max;
  }
  /** Gets the input's date filtering function. */
  _getDateFilter() {
    return this._dateFilter;
  }
  _shouldHandleChangeEvent(event) {
    return event.source !== this;
  }
  static #_ = this.ɵfac = function MatDatepickerInput_Factory(t) {
    return new (t || MatDatepickerInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD, 8));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatDatepickerInput,
    selectors: [["input", "matDatepicker", ""]],
    hostAttrs: [1, "mat-datepicker-input"],
    hostVars: 6,
    hostBindings: function MatDatepickerInput_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MatDatepickerInput_input_HostBindingHandler($event) {
          return ctx._onInput($event.target.value);
        })("change", function MatDatepickerInput_change_HostBindingHandler() {
          return ctx._onChange();
        })("blur", function MatDatepickerInput_blur_HostBindingHandler() {
          return ctx._onBlur();
        })("keydown", function MatDatepickerInput_keydown_HostBindingHandler($event) {
          return ctx._onKeydown($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", (ctx._datepicker == null ? null : ctx._datepicker.opened) && ctx._datepicker.id || null)("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null)("data-mat-calendar", ctx._datepicker ? ctx._datepicker.id : null);
      }
    },
    inputs: {
      matDatepicker: "matDatepicker",
      min: "min",
      max: "max",
      dateFilter: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "matDatepickerFilter", "dateFilter"]
    },
    exportAs: ["matDatepickerInput"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
      provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MAT_INPUT_VALUE_ACCESSOR,
      useExisting: MatDatepickerInput
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'input[matDatepicker]',
      providers: [MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
        provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MAT_INPUT_VALUE_ACCESSOR,
        useExisting: MatDatepickerInput
      }],
      host: {
        'class': 'mat-datepicker-input',
        '[attr.aria-haspopup]': '_datepicker ? "dialog" : null',
        '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
        '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
        '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
        // Used by the test harness to tie this input to its calendar. We can't depend on
        // `aria-owns` for this, because it's only defined while the calendar is open.
        '[attr.data-mat-calendar]': '_datepicker ? _datepicker.id : null',
        '[disabled]': 'disabled',
        '(input)': '_onInput($event.target.value)',
        '(change)': '_onChange()',
        '(blur)': '_onBlur()',
        '(keydown)': '_onKeydown($event)'
      },
      exportAs: 'matDatepickerInput',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD]
    }]
  }], {
    matDatepicker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matDatepickerFilter']
    }]
  });
})();

/** Can be used to override the icon of a `matDatepickerToggle`. */
class MatDatepickerToggleIcon {
  static #_ = this.ɵfac = function MatDatepickerToggleIcon_Factory(t) {
    return new (t || MatDatepickerToggleIcon)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatDatepickerToggleIcon,
    selectors: [["", "matDatepickerToggleIcon", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerToggleIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matDatepickerToggleIcon]',
      standalone: true
    }]
  }], null, null);
})();
class MatDatepickerToggle {
  /** Whether the toggle button is disabled. */
  get disabled() {
    if (this._disabled === undefined && this.datepicker) {
      return this.datepicker.disabled;
    }
    return !!this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  constructor(_intl, _changeDetectorRef, defaultTabIndex) {
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
  }
  ngOnChanges(changes) {
    if (changes['datepicker']) {
      this._watchStateChanges();
    }
  }
  ngOnDestroy() {
    this._stateChanges.unsubscribe();
  }
  ngAfterContentInit() {
    this._watchStateChanges();
  }
  _open(event) {
    if (this.datepicker && !this.disabled) {
      this.datepicker.open();
      event.stopPropagation();
    }
  }
  _watchStateChanges() {
    const datepickerStateChanged = this.datepicker ? this.datepicker.stateChanges : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
    const inputStateChanged = this.datepicker && this.datepicker.datepickerInput ? this.datepicker.datepickerInput.stateChanges : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
    const datepickerToggled = this.datepicker ? (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this.datepicker.openedStream, this.datepicker.closedStream) : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
    this._stateChanges.unsubscribe();
    this._stateChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this._intl.changes, datepickerStateChanged, inputStateChanged, datepickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  static #_ = this.ɵfac = function MatDatepickerToggle_Factory(t) {
    return new (t || MatDatepickerToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatDatepickerToggle,
    selectors: [["mat-datepicker-toggle"]],
    contentQueries: function MatDatepickerToggle_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatDatepickerToggleIcon, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._customIcon = _t.first);
      }
    },
    viewQuery: function MatDatepickerToggle_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._button = _t.first);
      }
    },
    hostAttrs: [1, "mat-datepicker-toggle"],
    hostVars: 8,
    hostBindings: function MatDatepickerToggle_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDatepickerToggle_click_HostBindingHandler($event) {
          return ctx._open($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("data-mat-calendar", ctx.datepicker ? ctx.datepicker.id : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
      }
    },
    inputs: {
      datepicker: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "for", "datepicker"],
      tabIndex: "tabIndex",
      ariaLabel: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "aria-label", "ariaLabel"],
      disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      disableRipple: "disableRipple"
    },
    exportAs: ["matDatepickerToggle"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c4,
    decls: 4,
    vars: 6,
    consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple"], ["button", ""], ["class", "mat-datepicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", "aria-hidden", "true"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", "aria-hidden", "true", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],
    template: function MatDatepickerToggle_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatDatepickerToggle_Conditional_2_Template, 2, 0, ":svg:svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx.datepicker ? "dialog" : null)("aria-label", ctx.ariaLabel || ctx._intl.openCalendarLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, !ctx._customIcon ? 2 : -1);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton],
    styles: [".mat-datepicker-toggle{pointer-events:auto;color:var(--mat-datepicker-toggle-icon-color)}.mat-datepicker-toggle-active{color:var(--mat-datepicker-toggle-active-state-icon-color)}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-datepicker-toggle',
      host: {
        'class': 'mat-datepicker-toggle',
        '[attr.tabindex]': 'null',
        '[class.mat-datepicker-toggle-active]': 'datepicker && datepicker.opened',
        '[class.mat-accent]': 'datepicker && datepicker.color === "accent"',
        '[class.mat-warn]': 'datepicker && datepicker.color === "warn"',
        // Used by the test harness to tie this toggle to its datepicker.
        '[attr.data-mat-calendar]': 'datepicker ? datepicker.id : null',
        // Bind the `click` on the host, rather than the inner `button`, so that we can call
        // `stopPropagation` on it without affecting the user's `click` handlers. We need to stop
        // it so that the input doesn't get focused automatically by the form field (See #21836).
        '(click)': '_open($event)'
      },
      exportAs: 'matDatepickerToggle',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton],
      template: "<button\n  #button\n  mat-icon-button\n  type=\"button\"\n  [attr.aria-haspopup]=\"datepicker ? 'dialog' : null\"\n  [attr.aria-label]=\"ariaLabel || _intl.openCalendarLabel\"\n  [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n  [disabled]=\"disabled\"\n  [disableRipple]=\"disableRipple\">\n\n  @if (!_customIcon) {\n    <svg\n      class=\"mat-datepicker-toggle-default-icon\"\n      viewBox=\"0 0 24 24\"\n      width=\"24px\"\n      height=\"24px\"\n      fill=\"currentColor\"\n      focusable=\"false\"\n      aria-hidden=\"true\">\n      <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/>\n    </svg>\n  }\n\n  <ng-content select=\"[matDatepickerToggleIcon]\"></ng-content>\n</button>\n",
      styles: [".mat-datepicker-toggle{pointer-events:auto;color:var(--mat-datepicker-toggle-icon-color)}.mat-datepicker-toggle-active{color:var(--mat-datepicker-toggle-active-state-icon-color)}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}"]
    }]
  }], () => [{
    type: MatDatepickerIntl
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
      args: ['tabindex']
    }]
  }], {
    datepicker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['for']
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _customIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatDatepickerToggleIcon]
    }],
    _button: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['button']
    }]
  });
})();

// This file contains the `_computeAriaAccessibleName` function, which computes what the *expected*
// ARIA accessible name would be for a given element. Implements a subset of ARIA specification
// [Accessible Name and Description Computation 1.2](https://www.w3.org/TR/accname-1.2/).
//
// Specification accname-1.2 can be summarized by returning the result of the first method
// available.
//
//  1. `aria-labelledby` attribute
//     ```
//       <!-- example using aria-labelledby-->
//       <label id='label-id'>Start Date</label>
//       <input aria-labelledby='label-id'/>
//     ```
//  2. `aria-label` attribute (e.g. `<input aria-label="Departure"/>`)
//  3. Label with `for`/`id`
//     ```
//       <!-- example using for/id -->
//       <label for="current-node">Label</label>
//       <input id="current-node"/>
//     ```
//  4. `placeholder` attribute (e.g. `<input placeholder="06/03/1990"/>`)
//  5. `title` attribute (e.g. `<input title="Check-In"/>`)
//  6. text content
//     ```
//       <!-- example using text content -->
//       <label for="current-node"><span>Departure</span> Date</label>
//       <input id="current-node"/>
//     ```
/**
 * Computes the *expected* ARIA accessible name for argument element based on [accname-1.2
 * specification](https://www.w3.org/TR/accname-1.2/). Implements a subset of accname-1.2,
 * and should only be used for the Datepicker's specific use case.
 *
 * Intended use:
 * This is not a general use implementation. Only implements the parts of accname-1.2 that are
 * required for the Datepicker's specific use case. This function is not intended for any other
 * use.
 *
 * Limitations:
 *  - Only covers the needs of `matStartDate` and `matEndDate`. Does not support other use cases.
 *  - See NOTES's in implementation for specific details on what parts of the accname-1.2
 *  specification are not implemented.
 *
 *  @param element {HTMLInputElement} native &lt;input/&gt; element of `matStartDate` or
 *  `matEndDate` component. Corresponds to the 'Root Element' from accname-1.2
 *
 *  @return expected ARIA accessible name of argument &lt;input/&gt;
 */
function _computeAriaAccessibleName(element) {
  return _computeAriaAccessibleNameInternal(element, true);
}
/**
 * Determine if argument node is an Element based on `nodeType` property. This function is safe to
 * use with server-side rendering.
 */
function ssrSafeIsElement(node) {
  return node.nodeType === Node.ELEMENT_NODE;
}
/**
 * Determine if argument node is an HTMLInputElement based on `nodeName` property. This funciton is
 * safe to use with server-side rendering.
 */
function ssrSafeIsHTMLInputElement(node) {
  return node.nodeName === 'INPUT';
}
/**
 * Determine if argument node is an HTMLTextAreaElement based on `nodeName` property. This
 * funciton is safe to use with server-side rendering.
 */
function ssrSafeIsHTMLTextAreaElement(node) {
  return node.nodeName === 'TEXTAREA';
}
/**
 * Calculate the expected ARIA accessible name for given DOM Node. Given DOM Node may be either the
 * "Root node" passed to `_computeAriaAccessibleName` or "Current node" as result of recursion.
 *
 * @return the accessible name of argument DOM Node
 *
 * @param currentNode node to determine accessible name of
 * @param isDirectlyReferenced true if `currentNode` is the root node to calculate ARIA accessible
 * name of. False if it is a result of recursion.
 */
function _computeAriaAccessibleNameInternal(currentNode, isDirectlyReferenced) {
  // NOTE: this differs from accname-1.2 specification.
  //  - Does not implement Step 1. of accname-1.2: '''If `currentNode`'s role prohibits naming,
  //    return the empty string ("")'''.
  //  - Does not implement Step 2.A. of accname-1.2: '''if current node is hidden and not directly
  //    referenced by aria-labelledby... return the empty string.'''
  // acc-name-1.2 Step 2.B.: aria-labelledby
  if (ssrSafeIsElement(currentNode) && isDirectlyReferenced) {
    const labelledbyIds = currentNode.getAttribute?.('aria-labelledby')?.split(/\s+/g) || [];
    const validIdRefs = labelledbyIds.reduce((validIds, id) => {
      const elem = document.getElementById(id);
      if (elem) {
        validIds.push(elem);
      }
      return validIds;
    }, []);
    if (validIdRefs.length) {
      return validIdRefs.map(idRef => {
        return _computeAriaAccessibleNameInternal(idRef, false);
      }).join(' ');
    }
  }
  // acc-name-1.2 Step 2.C.: aria-label
  if (ssrSafeIsElement(currentNode)) {
    const ariaLabel = currentNode.getAttribute('aria-label')?.trim();
    if (ariaLabel) {
      return ariaLabel;
    }
  }
  // acc-name-1.2 Step 2.D. attribute or element that defines a text alternative
  //
  // NOTE: this differs from accname-1.2 specification.
  // Only implements Step 2.D. for `<label>`,`<input/>`, and `<textarea/>` element. Does not
  // implement other elements that have an attribute or element that defines a text alternative.
  if (ssrSafeIsHTMLInputElement(currentNode) || ssrSafeIsHTMLTextAreaElement(currentNode)) {
    // use label with a `for` attribute referencing the current node
    if (currentNode.labels?.length) {
      return Array.from(currentNode.labels).map(x => _computeAriaAccessibleNameInternal(x, false)).join(' ');
    }
    // use placeholder if available
    const placeholder = currentNode.getAttribute('placeholder')?.trim();
    if (placeholder) {
      return placeholder;
    }
    // use title if available
    const title = currentNode.getAttribute('title')?.trim();
    if (title) {
      return title;
    }
  }
  // NOTE: this differs from accname-1.2 specification.
  //  - does not implement acc-name-1.2 Step 2.E.: '''if the current node is a control embedded
  //     within the label... then include the embedded control as part of the text alternative in
  //     the following manner...'''. Step 2E applies to embedded controls such as textbox, listbox,
  //     range, etc.
  //  - does not implement acc-name-1.2 step 2.F.: check that '''role allows name from content''',
  //    which applies to `currentNode` and its children.
  //  - does not implement acc-name-1.2 Step 2.F.ii.: '''Check for CSS generated textual content'''
  //    (e.g. :before and :after).
  //  - does not implement acc-name-1.2 Step 2.I.: '''if the current node has a Tooltip attribute,
  //    return its value'''
  // Return text content with whitespace collapsed into a single space character. Accomplish
  // acc-name-1.2 steps 2F, 2G, and 2H.
  return (currentNode.textContent || '').replace(/\s+/g, ' ').trim();
}

/**
 * Used to provide the date range input wrapper component
 * to the parts without circular dependencies.
 */
const MAT_DATE_RANGE_INPUT_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DATE_RANGE_INPUT_PARENT');
/**
 * Base class for the individual inputs that can be projected inside a `mat-date-range-input`.
 */
class MatDateRangeInputPartBase extends MatDatepickerInputBase {
  /** Object used to control when error messages are shown. */
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  /** Whether the input is in an error state. */
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  constructor(_rangeInput, _elementRef, _defaultErrorStateMatcher, _injector, _parentForm, _parentFormGroup, dateAdapter, dateFormats) {
    super(_elementRef, dateAdapter, dateFormats);
    this._rangeInput = _rangeInput;
    this._elementRef = _elementRef;
    this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
    this._injector = _injector;
    this._parentForm = _parentForm;
    this._parentFormGroup = _parentFormGroup;
    this._dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, {
      optional: true
    });
    this._errorStateTracker = new _angular_material_core__WEBPACK_IMPORTED_MODULE_5__._ErrorStateTracker(this._defaultErrorStateMatcher, null, this._parentFormGroup, this._parentForm, this.stateChanges);
  }
  ngOnInit() {
    // We need the date input to provide itself as a `ControlValueAccessor` and a `Validator`, while
    // injecting its `NgControl` so that the error state is handled correctly. This introduces a
    // circular dependency, because both `ControlValueAccessor` and `Validator` depend on the input
    // itself. Usually we can work around it for the CVA, but there's no API to do it for the
    // validator. We work around it here by injecting the `NgControl` in `ngOnInit`, after
    // everything has been resolved.
    const ngControl = this._injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControl, null, {
      optional: true,
      self: true
    });
    if (ngControl) {
      this.ngControl = ngControl;
      this._errorStateTracker.ngControl = ngControl;
    }
  }
  ngDoCheck() {
    if (this.ngControl) {
      // We need to re-evaluate this on every change detection cycle, because there are some
      // error triggers that we can't subscribe to (e.g. parent form submissions). This means
      // that whatever logic is in here has to be super lean or we risk destroying the performance.
      this.updateErrorState();
    }
  }
  /** Gets whether the input is empty. */
  isEmpty() {
    return this._elementRef.nativeElement.value.length === 0;
  }
  /** Gets the placeholder of the input. */
  _getPlaceholder() {
    return this._elementRef.nativeElement.placeholder;
  }
  /** Focuses the input. */
  focus() {
    this._elementRef.nativeElement.focus();
  }
  /** Gets the value that should be used when mirroring the input's size. */
  getMirrorValue() {
    const element = this._elementRef.nativeElement;
    const value = element.value;
    return value.length > 0 ? value : element.placeholder;
  }
  /** Refreshes the error state of the input. */
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  /** Handles `input` events on the input element. */
  _onInput(value) {
    super._onInput(value);
    this._rangeInput._handleChildValueChange();
  }
  /** Opens the datepicker associated with the input. */
  _openPopup() {
    this._rangeInput._openDatepicker();
  }
  /** Gets the minimum date from the range input. */
  _getMinDate() {
    return this._rangeInput.min;
  }
  /** Gets the maximum date from the range input. */
  _getMaxDate() {
    return this._rangeInput.max;
  }
  /** Gets the date filter function from the range input. */
  _getDateFilter() {
    return this._rangeInput.dateFilter;
  }
  _parentDisabled() {
    return this._rangeInput._groupDisabled;
  }
  _shouldHandleChangeEvent({
    source
  }) {
    return source !== this._rangeInput._startInput && source !== this._rangeInput._endInput;
  }
  _assignValueProgrammatically(value) {
    super._assignValueProgrammatically(value);
    const opposite = this === this._rangeInput._startInput ? this._rangeInput._endInput : this._rangeInput._startInput;
    opposite?._validatorOnChange();
  }
  /** return the ARIA accessible name of the input element */
  _getAccessibleName() {
    return _computeAriaAccessibleName(this._elementRef.nativeElement);
  }
  static #_ = this.ɵfac = function MatDateRangeInputPartBase_Factory(t) {
    return new (t || MatDateRangeInputPartBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, 8));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatDateRangeInputPartBase,
    inputs: {
      errorStateMatcher: "errorStateMatcher"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDateRangeInputPartBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      standalone: true
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_DATE_RANGE_INPUT_PARENT]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.ErrorStateMatcher
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS]
    }]
  }], {
    errorStateMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/** Input for entering the start date in a `mat-date-range-input`. */
class MatStartDate extends MatDateRangeInputPartBase {
  constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
    super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
    /** Validator that checks that the start date isn't after the end date. */
    this._startValidator = control => {
      const start = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const end = this._model ? this._model.selection.end : null;
      return !start || !end || this._dateAdapter.compareDate(start, end) <= 0 ? null : {
        'matStartDateInvalid': {
          'end': end,
          'actual': start
        }
      };
    };
    this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose([...super._getValidators(), this._startValidator]);
  }
  _getValueFromModel(modelValue) {
    return modelValue.start;
  }
  _shouldHandleChangeEvent(change) {
    if (!super._shouldHandleChangeEvent(change)) {
      return false;
    } else {
      return !change.oldValue?.start ? !!change.selection.start : !change.selection.start || !!this._dateAdapter.compareDate(change.oldValue.start, change.selection.start);
    }
  }
  _assignValueToModel(value) {
    if (this._model) {
      const range = new DateRange(value, this._model.selection.end);
      this._model.updateSelection(range, this);
    }
  }
  _formatValue(value) {
    super._formatValue(value);
    // Any time the input value is reformatted we need to tell the parent.
    this._rangeInput._handleChildValueChange();
  }
  _onKeydown(event) {
    const endInput = this._rangeInput._endInput;
    const element = this._elementRef.nativeElement;
    const isLtr = this._dir?.value !== 'rtl';
    // If the user hits RIGHT (LTR) when at the end of the input (and no
    // selection), move the cursor to the start of the end input.
    if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.RIGHT_ARROW && isLtr || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.LEFT_ARROW && !isLtr) && element.selectionStart === element.value.length && element.selectionEnd === element.value.length) {
      event.preventDefault();
      endInput._elementRef.nativeElement.setSelectionRange(0, 0);
      endInput.focus();
    } else {
      super._onKeydown(event);
    }
  }
  static #_ = this.ɵfac = function MatStartDate_Factory(t) {
    return new (t || MatStartDate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, 8));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatStartDate,
    selectors: [["input", "matStartDate", ""]],
    hostAttrs: ["type", "text", 1, "mat-start-date", "mat-date-range-input-inner"],
    hostVars: 5,
    hostBindings: function MatStartDate_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MatStartDate_input_HostBindingHandler($event) {
          return ctx._onInput($event.target.value);
        })("change", function MatStartDate_change_HostBindingHandler() {
          return ctx._onChange();
        })("keydown", function MatStartDate_keydown_HostBindingHandler($event) {
          return ctx._onKeydown($event);
        })("blur", function MatStartDate_blur_HostBindingHandler() {
          return ctx._onBlur();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
      }
    },
    outputs: {
      dateChange: "dateChange",
      dateInput: "dateInput"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
      useExisting: MatStartDate,
      multi: true
    }, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
      useExisting: MatStartDate,
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatStartDate, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'input[matStartDate]',
      host: {
        'class': 'mat-start-date mat-date-range-input-inner',
        '[disabled]': 'disabled',
        '(input)': '_onInput($event.target.value)',
        '(change)': '_onChange()',
        '(keydown)': '_onKeydown($event)',
        '[attr.aria-haspopup]': '_rangeInput.rangePicker ? "dialog" : null',
        '[attr.aria-owns]': '(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null',
        '[attr.min]': '_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null',
        '[attr.max]': '_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null',
        '(blur)': '_onBlur()',
        'type': 'text'
      },
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
        useExisting: MatStartDate,
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
        useExisting: MatStartDate,
        multi: true
      }],
      // These need to be specified explicitly, because some tooling doesn't
      // seem to pick them up from the base class. See #20932.
      outputs: ['dateChange', 'dateInput'],
      standalone: true
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_DATE_RANGE_INPUT_PARENT]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.ErrorStateMatcher
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS]
    }]
  }], null);
})();
/** Input for entering the end date in a `mat-date-range-input`. */
class MatEndDate extends MatDateRangeInputPartBase {
  constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
    super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
    /** Validator that checks that the end date isn't before the start date. */
    this._endValidator = control => {
      const end = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
      const start = this._model ? this._model.selection.start : null;
      return !end || !start || this._dateAdapter.compareDate(end, start) >= 0 ? null : {
        'matEndDateInvalid': {
          'start': start,
          'actual': end
        }
      };
    };
    this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose([...super._getValidators(), this._endValidator]);
  }
  _getValueFromModel(modelValue) {
    return modelValue.end;
  }
  _shouldHandleChangeEvent(change) {
    if (!super._shouldHandleChangeEvent(change)) {
      return false;
    } else {
      return !change.oldValue?.end ? !!change.selection.end : !change.selection.end || !!this._dateAdapter.compareDate(change.oldValue.end, change.selection.end);
    }
  }
  _assignValueToModel(value) {
    if (this._model) {
      const range = new DateRange(this._model.selection.start, value);
      this._model.updateSelection(range, this);
    }
  }
  _onKeydown(event) {
    const startInput = this._rangeInput._startInput;
    const element = this._elementRef.nativeElement;
    const isLtr = this._dir?.value !== 'rtl';
    // If the user is pressing backspace on an empty end input, move focus back to the start.
    if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.BACKSPACE && !element.value) {
      startInput.focus();
    }
    // If the user hits LEFT (LTR) when at the start of the input (and no
    // selection), move the cursor to the end of the start input.
    else if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.LEFT_ARROW && isLtr || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.RIGHT_ARROW && !isLtr) && element.selectionStart === 0 && element.selectionEnd === 0) {
      event.preventDefault();
      const endPosition = startInput._elementRef.nativeElement.value.length;
      startInput._elementRef.nativeElement.setSelectionRange(endPosition, endPosition);
      startInput.focus();
    } else {
      super._onKeydown(event);
    }
  }
  static #_ = this.ɵfac = function MatEndDate_Factory(t) {
    return new (t || MatEndDate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS, 8));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatEndDate,
    selectors: [["input", "matEndDate", ""]],
    hostAttrs: ["type", "text", 1, "mat-end-date", "mat-date-range-input-inner"],
    hostVars: 5,
    hostBindings: function MatEndDate_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MatEndDate_input_HostBindingHandler($event) {
          return ctx._onInput($event.target.value);
        })("change", function MatEndDate_change_HostBindingHandler() {
          return ctx._onChange();
        })("keydown", function MatEndDate_keydown_HostBindingHandler($event) {
          return ctx._onKeydown($event);
        })("blur", function MatEndDate_blur_HostBindingHandler() {
          return ctx._onBlur();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
      }
    },
    outputs: {
      dateChange: "dateChange",
      dateInput: "dateInput"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
      useExisting: MatEndDate,
      multi: true
    }, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
      useExisting: MatEndDate,
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatEndDate, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'input[matEndDate]',
      host: {
        'class': 'mat-end-date mat-date-range-input-inner',
        '[disabled]': 'disabled',
        '(input)': '_onInput($event.target.value)',
        '(change)': '_onChange()',
        '(keydown)': '_onKeydown($event)',
        '[attr.aria-haspopup]': '_rangeInput.rangePicker ? "dialog" : null',
        '[attr.aria-owns]': '(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null',
        '[attr.min]': '_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null',
        '[attr.max]': '_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null',
        '(blur)': '_onBlur()',
        'type': 'text'
      },
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
        useExisting: MatEndDate,
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
        useExisting: MatEndDate,
        multi: true
      }],
      // These need to be specified explicitly, because some tooling doesn't
      // seem to pick them up from the base class. See #20932.
      outputs: ['dateChange', 'dateInput'],
      standalone: true
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_DATE_RANGE_INPUT_PARENT]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.ErrorStateMatcher
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS]
    }]
  }], null);
})();
let nextUniqueId = 0;
class MatDateRangeInput {
  /** Current value of the range input. */
  get value() {
    return this._model ? this._model.selection : null;
  }
  /** Whether the control's label should float. */
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * Set the placeholder attribute on `matStartDate` and `matEndDate`.
   * @docs-private
   */
  get placeholder() {
    const start = this._startInput?._getPlaceholder() || '';
    const end = this._endInput?._getPlaceholder() || '';
    return start || end ? `${start} ${this.separator} ${end}` : '';
  }
  /** The range picker that this input is associated with. */
  get rangePicker() {
    return this._rangePicker;
  }
  set rangePicker(rangePicker) {
    if (rangePicker) {
      this._model = rangePicker.registerInput(this);
      this._rangePicker = rangePicker;
      this._closedSubscription.unsubscribe();
      this._closedSubscription = rangePicker.closedStream.subscribe(() => {
        this._startInput?._onTouched();
        this._endInput?._onTouched();
      });
      this._registerModel(this._model);
    }
  }
  /** Whether the input is required. */
  get required() {
    return this._required ?? (this._isTargetRequired(this) || this._isTargetRequired(this._startInput) || this._isTargetRequired(this._endInput)) ?? false;
  }
  set required(value) {
    this._required = value;
  }
  /** Function that can be used to filter out dates within the date range picker. */
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(value) {
    const start = this._startInput;
    const end = this._endInput;
    const wasMatchingStart = start && start._matchesFilter(start.value);
    const wasMatchingEnd = end && end._matchesFilter(start.value);
    this._dateFilter = value;
    if (start && start._matchesFilter(start.value) !== wasMatchingStart) {
      start._validatorOnChange();
    }
    if (end && end._matchesFilter(end.value) !== wasMatchingEnd) {
      end._validatorOnChange();
    }
  }
  /** The minimum valid date. */
  get min() {
    return this._min;
  }
  set min(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._min)) {
      this._min = validValue;
      this._revalidate();
    }
  }
  /** The maximum valid date. */
  get max() {
    return this._max;
  }
  set max(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._max)) {
      this._max = validValue;
      this._revalidate();
    }
  }
  /** Whether the input is disabled. */
  get disabled() {
    return this._startInput && this._endInput ? this._startInput.disabled && this._endInput.disabled : this._groupDisabled;
  }
  set disabled(value) {
    if (value !== this._groupDisabled) {
      this._groupDisabled = value;
      this.stateChanges.next(undefined);
    }
  }
  /** Whether the input is in an error state. */
  get errorState() {
    if (this._startInput && this._endInput) {
      return this._startInput.errorState || this._endInput.errorState;
    }
    return false;
  }
  /** Whether the datepicker input is empty. */
  get empty() {
    const startEmpty = this._startInput ? this._startInput.isEmpty() : false;
    const endEmpty = this._endInput ? this._endInput.isEmpty() : false;
    return startEmpty && endEmpty;
  }
  constructor(_changeDetectorRef, _elementRef, control, _dateAdapter, _formField) {
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._dateAdapter = _dateAdapter;
    this._formField = _formField;
    this._closedSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    /** Unique ID for the group. */
    this.id = `mat-date-range-input-${nextUniqueId++}`;
    /** Whether the control is focused. */
    this.focused = false;
    /** Name of the form control. */
    this.controlType = 'mat-date-range-input';
    this._groupDisabled = false;
    /** Value for the `aria-describedby` attribute of the inputs. */
    this._ariaDescribedBy = null;
    /** Separator text to be shown between the inputs. */
    this.separator = '–';
    /** Start of the comparison range that should be shown in the calendar. */
    this.comparisonStart = null;
    /** End of the comparison range that should be shown in the calendar. */
    this.comparisonEnd = null;
    /** Emits when the input's state has changed. */
    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    if (!_dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw createMissingDateImplError('DateAdapter');
    }
    // The datepicker module can be used both with MDC and non-MDC form fields. We have
    // to conditionally add the MDC input class so that the range picker looks correctly.
    if (_formField?._elementRef.nativeElement.classList.contains('mat-mdc-form-field')) {
      _elementRef.nativeElement.classList.add('mat-mdc-input-element', 'mat-mdc-form-field-input-control', 'mdc-text-field__input');
    }
    // TODO(crisbeto): remove `as any` after #18206 lands.
    this.ngControl = control;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * @docs-private
   */
  setDescribedByIds(ids) {
    this._ariaDescribedBy = ids.length ? ids.join(' ') : null;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * @docs-private
   */
  onContainerClick() {
    if (!this.focused && !this.disabled) {
      if (!this._model || !this._model.selection.start) {
        this._startInput.focus();
      } else {
        this._endInput.focus();
      }
    }
  }
  ngAfterContentInit() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._startInput) {
        throw Error('mat-date-range-input must contain a matStartDate input');
      }
      if (!this._endInput) {
        throw Error('mat-date-range-input must contain a matEndDate input');
      }
    }
    if (this._model) {
      this._registerModel(this._model);
    }
    // We don't need to unsubscribe from this, because we
    // know that the input streams will be completed on destroy.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this._startInput.stateChanges, this._endInput.stateChanges).subscribe(() => {
      this.stateChanges.next(undefined);
    });
  }
  ngOnChanges(changes) {
    if (dateInputsHaveChanged(changes, this._dateAdapter)) {
      this.stateChanges.next(undefined);
    }
  }
  ngOnDestroy() {
    this._closedSubscription.unsubscribe();
    this.stateChanges.complete();
  }
  /** Gets the date at which the calendar should start. */
  getStartValue() {
    return this.value ? this.value.start : null;
  }
  /** Gets the input's theme palette. */
  getThemePalette() {
    return this._formField ? this._formField.color : undefined;
  }
  /** Gets the element to which the calendar overlay should be attached. */
  getConnectedOverlayOrigin() {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }
  /** Gets the ID of an element that should be used a description for the calendar overlay. */
  getOverlayLabelId() {
    return this._formField ? this._formField.getLabelId() : null;
  }
  /** Gets the value that is used to mirror the state input. */
  _getInputMirrorValue(part) {
    const input = part === 'start' ? this._startInput : this._endInput;
    return input ? input.getMirrorValue() : '';
  }
  /** Whether the input placeholders should be hidden. */
  _shouldHidePlaceholders() {
    return this._startInput ? !this._startInput.isEmpty() : false;
  }
  /** Handles the value in one of the child inputs changing. */
  _handleChildValueChange() {
    this.stateChanges.next(undefined);
    this._changeDetectorRef.markForCheck();
  }
  /** Opens the date range picker associated with the input. */
  _openDatepicker() {
    if (this._rangePicker) {
      this._rangePicker.open();
    }
  }
  /** Whether the separate text should be hidden. */
  _shouldHideSeparator() {
    return (!this._formField || this._formField.getLabelId() && !this._formField._shouldLabelFloat()) && this.empty;
  }
  /** Gets the value for the `aria-labelledby` attribute of the inputs. */
  _getAriaLabelledby() {
    const formField = this._formField;
    return formField && formField._hasFloatingLabel() ? formField._labelId : null;
  }
  _getStartDateAccessibleName() {
    return this._startInput._getAccessibleName();
  }
  _getEndDateAccessibleName() {
    return this._endInput._getAccessibleName();
  }
  /** Updates the focused state of the range input. */
  _updateFocus(origin) {
    this.focused = origin !== null;
    this.stateChanges.next();
  }
  /** Re-runs the validators on the start/end inputs. */
  _revalidate() {
    if (this._startInput) {
      this._startInput._validatorOnChange();
    }
    if (this._endInput) {
      this._endInput._validatorOnChange();
    }
  }
  /** Registers the current date selection model with the start/end inputs. */
  _registerModel(model) {
    if (this._startInput) {
      this._startInput._registerModel(model);
    }
    if (this._endInput) {
      this._endInput._registerModel(model);
    }
  }
  /** Checks whether a specific range input directive is required. */
  _isTargetRequired(target) {
    return target?.ngControl?.control?.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required);
  }
  static #_ = this.ɵfac = function MatDateRangeInput_Factory(t) {
    return new (t || MatDateRangeInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.ControlContainer, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatDateRangeInput,
    selectors: [["mat-date-range-input"]],
    contentQueries: function MatDateRangeInput_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStartDate, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatEndDate, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._startInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._endInput = _t.first);
      }
    },
    hostAttrs: ["role", "group", 1, "mat-date-range-input"],
    hostVars: 8,
    hostBindings: function MatDateRangeInput_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("aria-labelledby", ctx._getAriaLabelledby())("aria-describedby", ctx._ariaDescribedBy)("data-mat-calendar", ctx.rangePicker ? ctx.rangePicker.id : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-date-range-input-hide-placeholders", ctx._shouldHidePlaceholders())("mat-date-range-input-required", ctx.required);
      }
    },
    inputs: {
      rangePicker: "rangePicker",
      required: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      dateFilter: "dateFilter",
      min: "min",
      max: "max",
      disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].HasDecoratorInputTransform, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      separator: "separator",
      comparisonStart: "comparisonStart",
      comparisonEnd: "comparisonEnd"
    },
    exportAs: ["matDateRangeInput"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldControl,
      useExisting: MatDateRangeInput
    }, {
      provide: MAT_DATE_RANGE_INPUT_PARENT,
      useExisting: MatDateRangeInput
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c6,
    decls: 11,
    vars: 5,
    consts: [["cdkMonitorSubtreeFocus", "", 1, "mat-date-range-input-container", 3, "cdkFocusChange"], [1, "mat-date-range-input-wrapper"], ["aria-hidden", "true", 1, "mat-date-range-input-mirror"], [1, "mat-date-range-input-separator"], [1, "mat-date-range-input-wrapper", "mat-date-range-input-end-wrapper"]],
    template: function MatDateRangeInput_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkFocusChange", function MatDateRangeInput_Template_div_cdkFocusChange_0_listener($event) {
          return ctx._updateFocus($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._getInputMirrorValue("start"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-date-range-input-separator-hidden", ctx._shouldHideSeparator());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.separator);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._getInputMirrorValue("end"));
      }
    },
    dependencies: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.CdkMonitorFocus],
    styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px;color:var(--mat-datepicker-range-input-separator-color)}.mat-form-field-disabled .mat-date-range-input-separator{color:var(--mat-datepicker-range-input-disabled-state-separator-color)}._mat-animation-noopable .mat-date-range-input-separator{transition:none}.mat-date-range-input-separator-hidden{-webkit-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-end-wrapper{flex-grow:1}.mat-date-range-input-inner{position:absolute;top:0;left:0;font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%;height:100%}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner[disabled]{color:var(--mat-datepicker-range-input-disabled-state-text-color)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}._mat-animation-noopable .mat-date-range-input-inner::placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder{transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix{width:200px}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDateRangeInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-date-range-input',
      exportAs: 'matDateRangeInput',
      host: {
        'class': 'mat-date-range-input',
        '[class.mat-date-range-input-hide-placeholders]': '_shouldHidePlaceholders()',
        '[class.mat-date-range-input-required]': 'required',
        '[attr.id]': 'id',
        'role': 'group',
        '[attr.aria-labelledby]': '_getAriaLabelledby()',
        '[attr.aria-describedby]': '_ariaDescribedBy',
        // Used by the test harness to tie this input to its calendar. We can't depend on
        // `aria-owns` for this, because it's only defined while the calendar is open.
        '[attr.data-mat-calendar]': 'rangePicker ? rangePicker.id : null'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldControl,
        useExisting: MatDateRangeInput
      }, {
        provide: MAT_DATE_RANGE_INPUT_PARENT,
        useExisting: MatDateRangeInput
      }],
      standalone: true,
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.CdkMonitorFocus],
      template: "<div\n  class=\"mat-date-range-input-container\"\n  cdkMonitorSubtreeFocus\n  (cdkFocusChange)=\"_updateFocus($event)\">\n  <div class=\"mat-date-range-input-wrapper\">\n    <ng-content select=\"input[matStartDate]\"></ng-content>\n    <span\n      class=\"mat-date-range-input-mirror\"\n      aria-hidden=\"true\">{{_getInputMirrorValue('start')}}</span>\n  </div>\n\n  <span\n    class=\"mat-date-range-input-separator\"\n    [class.mat-date-range-input-separator-hidden]=\"_shouldHideSeparator()\">{{separator}}</span>\n\n  <div class=\"mat-date-range-input-wrapper mat-date-range-input-end-wrapper\">\n    <ng-content select=\"input[matEndDate]\"></ng-content>\n    <span\n      class=\"mat-date-range-input-mirror\"\n      aria-hidden=\"true\">{{_getInputMirrorValue('end')}}</span>\n  </div>\n</div>\n\n",
      styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px;color:var(--mat-datepicker-range-input-separator-color)}.mat-form-field-disabled .mat-date-range-input-separator{color:var(--mat-datepicker-range-input-disabled-state-separator-color)}._mat-animation-noopable .mat-date-range-input-separator{transition:none}.mat-date-range-input-separator-hidden{-webkit-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-end-wrapper{flex-grow:1}.mat-date-range-input-inner{position:absolute;top:0;left:0;font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%;height:100%}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner[disabled]{color:var(--mat-datepicker-range-input-disabled-state-text-color)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}._mat-animation-noopable .mat-date-range-input-inner::placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder{transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix{width:200px}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ControlContainer,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD]
    }]
  }], {
    rangePicker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    dateFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    separator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparisonStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparisonEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _startInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatStartDate]
    }],
    _endInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatEndDate]
    }]
  });
})();

// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDateRangePicker"). We can change this to a
// directive if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the date range picker popup/dialog. */
class MatDateRangePicker extends MatDatepickerBase {
  _forwardContentValues(instance) {
    super._forwardContentValues(instance);
    const input = this.datepickerInput;
    if (input) {
      instance.comparisonStart = input.comparisonStart;
      instance.comparisonEnd = input.comparisonEnd;
      instance.startDateAccessibleName = input._getStartDateAccessibleName();
      instance.endDateAccessibleName = input._getEndDateAccessibleName();
    }
  }
  static #_ = this.ɵfac = /* @__PURE__ */(() => {
    let ɵMatDateRangePicker_BaseFactory;
    return function MatDateRangePicker_Factory(t) {
      return (ɵMatDateRangePicker_BaseFactory || (ɵMatDateRangePicker_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatDateRangePicker)))(t || MatDateRangePicker);
    };
  })();
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatDateRangePicker,
    selectors: [["mat-date-range-picker"]],
    exportAs: ["matDateRangePicker"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_CALENDAR_RANGE_STRATEGY_PROVIDER, {
      provide: MatDatepickerBase,
      useExisting: MatDateRangePicker
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 0,
    vars: 0,
    template: function MatDateRangePicker_Template(rf, ctx) {},
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDateRangePicker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-date-range-picker',
      template: '',
      exportAs: 'matDateRangePicker',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_CALENDAR_RANGE_STRATEGY_PROVIDER, {
        provide: MatDatepickerBase,
        useExisting: MatDateRangePicker
      }],
      standalone: true
    }]
  }], null, null);
})();

/** Button that will close the datepicker and assign the current selection to the data model. */
class MatDatepickerApply {
  constructor(_datepicker) {
    this._datepicker = _datepicker;
  }
  _applySelection() {
    this._datepicker._applyPendingSelection();
    this._datepicker.close();
  }
  static #_ = this.ɵfac = function MatDatepickerApply_Factory(t) {
    return new (t || MatDatepickerApply)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerBase));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatDatepickerApply,
    selectors: [["", "matDatepickerApply", ""], ["", "matDateRangePickerApply", ""]],
    hostBindings: function MatDatepickerApply_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDatepickerApply_click_HostBindingHandler() {
          return ctx._applySelection();
        });
      }
    },
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerApply, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matDatepickerApply], [matDateRangePickerApply]',
      host: {
        '(click)': '_applySelection()'
      },
      standalone: true
    }]
  }], () => [{
    type: MatDatepickerBase
  }], null);
})();
/** Button that will close the datepicker and discard the current selection. */
class MatDatepickerCancel {
  constructor(_datepicker) {
    this._datepicker = _datepicker;
  }
  static #_ = this.ɵfac = function MatDatepickerCancel_Factory(t) {
    return new (t || MatDatepickerCancel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerBase));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatDatepickerCancel,
    selectors: [["", "matDatepickerCancel", ""], ["", "matDateRangePickerCancel", ""]],
    hostBindings: function MatDatepickerCancel_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDatepickerCancel_click_HostBindingHandler() {
          return ctx._datepicker.close();
        });
      }
    },
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerCancel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matDatepickerCancel], [matDateRangePickerCancel]',
      host: {
        '(click)': '_datepicker.close()'
      },
      standalone: true
    }]
  }], () => [{
    type: MatDatepickerBase
  }], null);
})();
/**
 * Container that can be used to project a row of action buttons
 * to the bottom of a datepicker or date range picker.
 */
class MatDatepickerActions {
  constructor(_datepicker, _viewContainerRef) {
    this._datepicker = _datepicker;
    this._viewContainerRef = _viewContainerRef;
  }
  ngAfterViewInit() {
    this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.TemplatePortal(this._template, this._viewContainerRef);
    this._datepicker.registerActions(this._portal);
  }
  ngOnDestroy() {
    this._datepicker.removeActions(this._portal);
    // Needs to be null checked since we initialize it in `ngAfterViewInit`.
    if (this._portal && this._portal.isAttached) {
      this._portal?.detach();
    }
  }
  static #_ = this.ɵfac = function MatDatepickerActions_Factory(t) {
    return new (t || MatDatepickerActions)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatDatepickerActions,
    selectors: [["mat-datepicker-actions"], ["mat-date-range-picker-actions"]],
    viewQuery: function MatDatepickerActions_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._template = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c1,
    decls: 1,
    vars: 0,
    consts: [[1, "mat-datepicker-actions"]],
    template: function MatDatepickerActions_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatDatepickerActions_ng_template_0_Template, 2, 0, "ng-template");
      }
    },
    styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-datepicker-actions, mat-date-range-picker-actions',
      template: `
    <ng-template>
      <div class="mat-datepicker-actions">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      standalone: true,
      styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"]
    }]
  }], () => [{
    type: MatDatepickerBase
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }], {
    _template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef]
    }]
  });
})();
class MatDatepickerModule {
  static #_ = this.ɵfac = function MatDatepickerModule_Factory(t) {
    return new (t || MatDatepickerModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatDatepickerModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.A11yModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule, MatDatepickerContent, MatDatepickerToggle, MatCalendarHeader, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDatepickerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.A11yModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply],
      providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1267:
/*!****************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/form-field.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_ERROR: () => (/* binding */ MAT_ERROR),
/* harmony export */   MAT_FORM_FIELD: () => (/* binding */ MAT_FORM_FIELD),
/* harmony export */   MAT_FORM_FIELD_DEFAULT_OPTIONS: () => (/* binding */ MAT_FORM_FIELD_DEFAULT_OPTIONS),
/* harmony export */   MAT_PREFIX: () => (/* binding */ MAT_PREFIX),
/* harmony export */   MAT_SUFFIX: () => (/* binding */ MAT_SUFFIX),
/* harmony export */   MatError: () => (/* binding */ MatError),
/* harmony export */   MatFormField: () => (/* binding */ MatFormField),
/* harmony export */   MatFormFieldControl: () => (/* binding */ MatFormFieldControl),
/* harmony export */   MatFormFieldModule: () => (/* binding */ MatFormFieldModule),
/* harmony export */   MatHint: () => (/* binding */ MatHint),
/* harmony export */   MatLabel: () => (/* binding */ MatLabel),
/* harmony export */   MatPrefix: () => (/* binding */ MatPrefix),
/* harmony export */   MatSuffix: () => (/* binding */ MatSuffix),
/* harmony export */   getMatFormFieldDuplicatedHintError: () => (/* binding */ getMatFormFieldDuplicatedHintError),
/* harmony export */   getMatFormFieldMissingControlError: () => (/* binding */ getMatFormFieldMissingControlError),
/* harmony export */   getMatFormFieldPlaceholderConflictError: () => (/* binding */ getMatFormFieldPlaceholderConflictError),
/* harmony export */   matFormFieldAnimations: () => (/* binding */ matFormFieldAnimations)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 8336);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ 9664);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8688);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5100);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 728);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 4364);
/* harmony import */ var _angular_cdk_observers_private__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/observers/private */ 2760);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ 2932);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 3291);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/observers */ 7584);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 2544);













/** The floating label for a `mat-form-field`. */
const _c0 = ["notch"];
const _c1 = ["matFormFieldNotchedOutline", ""];
const _c2 = ["*"];
const _c3 = ["textField"];
const _c4 = ["iconPrefixContainer"];
const _c5 = ["textPrefixContainer"];
function MatFormField_ng_template_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 16);
  }
}
function MatFormField_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatFormField_ng_template_0_Conditional_0_Conditional_2_Template, 1, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("floating", ctx_r13._shouldLabelFloat())("monitorResize", ctx_r13._hasOutline())("id", ctx_r13._labelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx_r13._control.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, !ctx_r13.hideRequiredMarker && ctx_r13._control.required ? 2 : -1);
  }
}
function MatFormField_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatFormField_ng_template_0_Conditional_0_Template, 3, 5, "label", 14);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, ctx_r0._hasFloatingLabel() ? 0 : -1);
  }
}
function MatFormField_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
  }
}
function MatFormField_Conditional_6_Conditional_1_ng_template_0_Template(rf, ctx) {}
function MatFormField_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatFormField_Conditional_6_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
  }
}
function MatFormField_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatFormField_Conditional_6_Conditional_1_Template, 1, 1, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matFormFieldNotchedOutlineOpen", ctx_r4._shouldLabelFloat());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, !ctx_r4._forceDisplayInfixLabel() ? 1 : -1);
  }
}
function MatFormField_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MatFormField_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MatFormField_Conditional_10_ng_template_0_Template(rf, ctx) {}
function MatFormField_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatFormField_Conditional_10_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
  }
}
function MatFormField_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MatFormField_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MatFormField_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
  }
}
function MatFormField_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@transitionMessages", ctx_r11._subscriptAnimationState);
  }
}
function MatFormField_Case_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r20._hintLabelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.hintLabel);
  }
}
function MatFormField_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatFormField_Case_17_Conditional_1_Template, 2, 2, "mat-hint", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@transitionMessages", ctx_r12._subscriptAnimationState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx_r12.hintLabel ? 1 : -1);
  }
}
const _c6 = ["*", [["mat-label"]], [["", "matPrefix", ""], ["", "matIconPrefix", ""]], [["", "matTextPrefix", ""]], [["", "matTextSuffix", ""]], [["", "matSuffix", ""], ["", "matIconSuffix", ""]], [["mat-error"], ["", "matError", ""]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
const _c7 = ["*", "mat-label", "[matPrefix], [matIconPrefix]", "[matTextPrefix]", "[matTextSuffix]", "[matSuffix], [matIconSuffix]", "mat-error, [matError]", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
class MatLabel {
  static #_ = this.ɵfac = function MatLabel_Factory(t) {
    return new (t || MatLabel)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatLabel,
    selectors: [["mat-label"]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-label',
      standalone: true
    }]
  }], null, null);
})();
let nextUniqueId$2 = 0;
/**
 * Injection token that can be used to reference instances of `MatError`. It serves as
 * alternative token to the actual `MatError` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_ERROR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatError');
/** Single error message to be shown underneath the form-field. */
class MatError {
  constructor(ariaLive, elementRef) {
    this.id = `mat-mdc-error-${nextUniqueId$2++}`;
    // If no aria-live value is set add 'polite' as a default. This is preferred over setting
    // role='alert' so that screen readers do not interrupt the current task to read this aloud.
    if (!ariaLive) {
      elementRef.nativeElement.setAttribute('aria-live', 'polite');
    }
  }
  static #_ = this.ɵfac = function MatError_Factory(t) {
    return new (t || MatError)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('aria-live'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatError,
    selectors: [["mat-error"], ["", "matError", ""]],
    hostAttrs: ["aria-atomic", "true", 1, "mat-mdc-form-field-error", "mat-mdc-form-field-bottom-align"],
    hostVars: 1,
    hostBindings: function MatError_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
      }
    },
    inputs: {
      id: "id"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: MAT_ERROR,
      useExisting: MatError
    }])]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatError, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-error, [matError]',
      host: {
        'class': 'mat-mdc-form-field-error mat-mdc-form-field-bottom-align',
        'aria-atomic': 'true',
        '[id]': 'id'
      },
      providers: [{
        provide: MAT_ERROR,
        useExisting: MatError
      }],
      standalone: true
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
      args: ['aria-live']
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }], {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
let nextUniqueId$1 = 0;
/** Hint text to be shown underneath the form field control. */
class MatHint {
  constructor() {
    /** Whether to align the hint label at the start or end of the line. */
    this.align = 'start';
    /** Unique ID for the hint. Used for the aria-describedby on the form field control. */
    this.id = `mat-mdc-hint-${nextUniqueId$1++}`;
  }
  static #_ = this.ɵfac = function MatHint_Factory(t) {
    return new (t || MatHint)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatHint,
    selectors: [["mat-hint"]],
    hostAttrs: [1, "mat-mdc-form-field-hint", "mat-mdc-form-field-bottom-align"],
    hostVars: 4,
    hostBindings: function MatHint_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("align", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-form-field-hint-end", ctx.align === "end");
      }
    },
    inputs: {
      align: "align",
      id: "id"
    },
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHint, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-hint',
      host: {
        'class': 'mat-mdc-form-field-hint mat-mdc-form-field-bottom-align',
        '[class.mat-mdc-form-field-hint-end]': 'align === "end"',
        '[id]': 'id',
        // Remove align attribute to prevent it from interfering with layout.
        '[attr.align]': 'null'
      },
      standalone: true
    }]
  }], null, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * Injection token that can be used to reference instances of `MatPrefix`. It serves as
 * alternative token to the actual `MatPrefix` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_PREFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatPrefix');
/** Prefix to be placed in front of the form field. */
class MatPrefix {
  constructor() {
    this._isText = false;
  }
  set _isTextSelector(value) {
    this._isText = true;
  }
  static #_ = this.ɵfac = function MatPrefix_Factory(t) {
    return new (t || MatPrefix)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatPrefix,
    selectors: [["", "matPrefix", ""], ["", "matIconPrefix", ""], ["", "matTextPrefix", ""]],
    inputs: {
      _isTextSelector: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "matTextPrefix", "_isTextSelector"]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: MAT_PREFIX,
      useExisting: MatPrefix
    }])]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPrefix, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matPrefix], [matIconPrefix], [matTextPrefix]',
      providers: [{
        provide: MAT_PREFIX,
        useExisting: MatPrefix
      }],
      standalone: true
    }]
  }], null, {
    _isTextSelector: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matTextPrefix']
    }]
  });
})();

/**
 * Injection token that can be used to reference instances of `MatSuffix`. It serves as
 * alternative token to the actual `MatSuffix` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_SUFFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatSuffix');
/** Suffix to be placed at the end of the form field. */
class MatSuffix {
  constructor() {
    this._isText = false;
  }
  set _isTextSelector(value) {
    this._isText = true;
  }
  static #_ = this.ɵfac = function MatSuffix_Factory(t) {
    return new (t || MatSuffix)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatSuffix,
    selectors: [["", "matSuffix", ""], ["", "matIconSuffix", ""], ["", "matTextSuffix", ""]],
    inputs: {
      _isTextSelector: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "matTextSuffix", "_isTextSelector"]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: MAT_SUFFIX,
      useExisting: MatSuffix
    }])]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSuffix, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matSuffix], [matIconSuffix], [matTextSuffix]',
      providers: [{
        provide: MAT_SUFFIX,
        useExisting: MatSuffix
      }],
      standalone: true
    }]
  }], null, {
    _isTextSelector: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matTextSuffix']
    }]
  });
})();

/** An injion token for the parent form-field. */
const FLOATING_LABEL_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('FloatingLabelParent');
/**
 * Internal directive that maintains a MDC floating label. This directive does not
 * use the `MDCFloatingLabelFoundation` class, as it is not worth the size cost of
 * including it just to measure the label width and toggle some classes.
 *
 * The use of a directive allows us to conditionally render a floating label in the
 * template without having to manually manage instantiation and destruction of the
 * floating label component based on.
 *
 * The component is responsible for setting up the floating label styles, measuring label
 * width for the outline notch, and providing inputs that can be used to toggle the
 * label's floating or required state.
 */
class MatFormFieldFloatingLabel {
  /** Whether the label is floating. */
  get floating() {
    return this._floating;
  }
  set floating(value) {
    this._floating = value;
    if (this.monitorResize) {
      this._handleResize();
    }
  }
  /** Whether to monitor for resize events on the floating label. */
  get monitorResize() {
    return this._monitorResize;
  }
  set monitorResize(value) {
    this._monitorResize = value;
    if (this._monitorResize) {
      this._subscribeToResize();
    } else {
      this._resizeSubscription.unsubscribe();
    }
  }
  constructor(_elementRef) {
    this._elementRef = _elementRef;
    this._floating = false;
    this._monitorResize = false;
    /** The shared ResizeObserver. */
    this._resizeObserver = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_observers_private__WEBPACK_IMPORTED_MODULE_1__.SharedResizeObserver);
    /** The Angular zone. */
    this._ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    /** The parent form-field. */
    this._parent = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(FLOATING_LABEL_PARENT);
    /** The current resize event subscription. */
    this._resizeSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
  }
  ngOnDestroy() {
    this._resizeSubscription.unsubscribe();
  }
  /** Gets the width of the label. Used for the outline notch. */
  getWidth() {
    return estimateScrollWidth(this._elementRef.nativeElement);
  }
  /** Gets the HTML element for the floating label. */
  get element() {
    return this._elementRef.nativeElement;
  }
  /** Handles resize events from the ResizeObserver. */
  _handleResize() {
    // In the case where the label grows in size, the following sequence of events occurs:
    // 1. The label grows by 1px triggering the ResizeObserver
    // 2. The notch is expanded to accommodate the entire label
    // 3. The label expands to its full width, triggering the ResizeObserver again
    //
    // This is expected, but If we allow this to all happen within the same macro task it causes an
    // error: `ResizeObserver loop limit exceeded`. Therefore we push the notch resize out until
    // the next macro task.
    setTimeout(() => this._parent._handleLabelResized());
  }
  /** Subscribes to resize events. */
  _subscribeToResize() {
    this._resizeSubscription.unsubscribe();
    this._ngZone.runOutsideAngular(() => {
      this._resizeSubscription = this._resizeObserver.observe(this._elementRef.nativeElement, {
        box: 'border-box'
      }).subscribe(() => this._handleResize());
    });
  }
  static #_ = this.ɵfac = function MatFormFieldFloatingLabel_Factory(t) {
    return new (t || MatFormFieldFloatingLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatFormFieldFloatingLabel,
    selectors: [["label", "matFormFieldFloatingLabel", ""]],
    hostAttrs: [1, "mdc-floating-label", "mat-mdc-floating-label"],
    hostVars: 2,
    hostBindings: function MatFormFieldFloatingLabel_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-floating-label--float-above", ctx.floating);
      }
    },
    inputs: {
      floating: "floating",
      monitorResize: "monitorResize"
    },
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFormFieldFloatingLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'label[matFormFieldFloatingLabel]',
      host: {
        'class': 'mdc-floating-label mat-mdc-floating-label',
        '[class.mdc-floating-label--float-above]': 'floating'
      },
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }], {
    floating: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    monitorResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Estimates the scroll width of an element.
 * via https://github.com/material-components/material-components-web/blob/c0a11ef0d000a098fd0c372be8f12d6a99302855/packages/mdc-dom/ponyfill.ts
 */
function estimateScrollWidth(element) {
  // Check the offsetParent. If the element inherits display: none from any
  // parent, the offsetParent property will be null (see
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
  // This check ensures we only clone the node when necessary.
  const htmlEl = element;
  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }
  const clone = htmlEl.cloneNode(true);
  clone.style.setProperty('position', 'absolute');
  clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
  document.documentElement.appendChild(clone);
  const scrollWidth = clone.scrollWidth;
  clone.remove();
  return scrollWidth;
}

/** Class added when the line ripple is active. */
const ACTIVATE_CLASS = 'mdc-line-ripple--active';
/** Class added when the line ripple is being deactivated. */
const DEACTIVATING_CLASS = 'mdc-line-ripple--deactivating';
/**
 * Internal directive that creates an instance of the MDC line-ripple component. Using a
 * directive allows us to conditionally render a line-ripple in the template without having
 * to manually create and destroy the `MDCLineRipple` component whenever the condition changes.
 *
 * The directive sets up the styles for the line-ripple and provides an API for activating
 * and deactivating the line-ripple.
 */
class MatFormFieldLineRipple {
  constructor(_elementRef, ngZone) {
    this._elementRef = _elementRef;
    this._handleTransitionEnd = event => {
      const classList = this._elementRef.nativeElement.classList;
      const isDeactivating = classList.contains(DEACTIVATING_CLASS);
      if (event.propertyName === 'opacity' && isDeactivating) {
        classList.remove(ACTIVATE_CLASS, DEACTIVATING_CLASS);
      }
    };
    ngZone.runOutsideAngular(() => {
      _elementRef.nativeElement.addEventListener('transitionend', this._handleTransitionEnd);
    });
  }
  activate() {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove(DEACTIVATING_CLASS);
    classList.add(ACTIVATE_CLASS);
  }
  deactivate() {
    this._elementRef.nativeElement.classList.add(DEACTIVATING_CLASS);
  }
  ngOnDestroy() {
    this._elementRef.nativeElement.removeEventListener('transitionend', this._handleTransitionEnd);
  }
  static #_ = this.ɵfac = function MatFormFieldLineRipple_Factory(t) {
    return new (t || MatFormFieldLineRipple)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatFormFieldLineRipple,
    selectors: [["div", "matFormFieldLineRipple", ""]],
    hostAttrs: [1, "mdc-line-ripple"],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFormFieldLineRipple, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'div[matFormFieldLineRipple]',
      host: {
        'class': 'mdc-line-ripple'
      },
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }], null);
})();

/**
 * Internal component that creates an instance of the MDC notched-outline component.
 *
 * The component sets up the HTML structure and styles for the notched-outline. It provides
 * inputs to toggle the notch state and width.
 */
class MatFormFieldNotchedOutline {
  constructor(_elementRef, _ngZone) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    /** Whether the notch should be opened. */
    this.open = false;
  }
  ngAfterViewInit() {
    const label = this._elementRef.nativeElement.querySelector('.mdc-floating-label');
    if (label) {
      this._elementRef.nativeElement.classList.add('mdc-notched-outline--upgraded');
      if (typeof requestAnimationFrame === 'function') {
        label.style.transitionDuration = '0s';
        this._ngZone.runOutsideAngular(() => {
          requestAnimationFrame(() => label.style.transitionDuration = '');
        });
      }
    } else {
      this._elementRef.nativeElement.classList.add('mdc-notched-outline--no-label');
    }
  }
  _setNotchWidth(labelWidth) {
    if (!this.open || !labelWidth) {
      this._notch.nativeElement.style.width = '';
    } else {
      const NOTCH_ELEMENT_PADDING = 8;
      const NOTCH_ELEMENT_BORDER = 1;
      this._notch.nativeElement.style.width = `calc(${labelWidth}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + ${NOTCH_ELEMENT_PADDING + NOTCH_ELEMENT_BORDER}px)`;
    }
  }
  static #_ = this.ɵfac = function MatFormFieldNotchedOutline_Factory(t) {
    return new (t || MatFormFieldNotchedOutline)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatFormFieldNotchedOutline,
    selectors: [["div", "matFormFieldNotchedOutline", ""]],
    viewQuery: function MatFormFieldNotchedOutline_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._notch = _t.first);
      }
    },
    hostAttrs: [1, "mdc-notched-outline"],
    hostVars: 2,
    hostBindings: function MatFormFieldNotchedOutline_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-notched-outline--notched", ctx.open);
      }
    },
    inputs: {
      open: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "matFormFieldNotchedOutlineOpen", "open"]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    attrs: _c1,
    ngContentSelectors: _c2,
    decls: 5,
    vars: 0,
    consts: [[1, "mdc-notched-outline__leading"], [1, "mdc-notched-outline__notch"], ["notch", ""], [1, "mdc-notched-outline__trailing"]],
    template: function MatFormFieldNotchedOutline_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFormFieldNotchedOutline, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'div[matFormFieldNotchedOutline]',
      host: {
        'class': 'mdc-notched-outline',
        // Besides updating the notch state through the MDC component, we toggle this class through
        // a host binding in order to ensure that the notched-outline renders correctly on the server.
        '[class.mdc-notched-outline--notched]': 'open'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      standalone: true,
      template: "<div class=\"mdc-notched-outline__leading\"></div>\n<div class=\"mdc-notched-outline__notch\" #notch>\n  <ng-content></ng-content>\n</div>\n<div class=\"mdc-notched-outline__trailing\"></div>\n"
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }], {
    open: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matFormFieldNotchedOutlineOpen']
    }],
    _notch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['notch']
    }]
  });
})();

/**
 * Animations used by the MatFormField.
 * @docs-private
 */
const matFormFieldAnimations = {
  /** Animation that transitions the form field's error and hint messages. */
  transitionMessages: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('transitionMessages', [
  // TODO(mmalerba): Use angular animations for label animation as well.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
    opacity: 1,
    transform: 'translateY(0%)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('void => enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
    opacity: 0,
    transform: 'translateY(-5px)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
};

/** An interface which allows a control to work inside of a `MatFormField`. */
class MatFormFieldControl {
  static #_ = this.ɵfac = function MatFormFieldControl_Factory(t) {
    return new (t || MatFormFieldControl)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatFormFieldControl
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFormFieldControl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], null, null);
})();

/** @docs-private */
function getMatFormFieldPlaceholderConflictError() {
  return Error('Placeholder attribute and child element were both specified.');
}
/** @docs-private */
function getMatFormFieldDuplicatedHintError(align) {
  return Error(`A hint was already declared for 'align="${align}"'.`);
}
/** @docs-private */
function getMatFormFieldMissingControlError() {
  return Error('mat-form-field must contain a MatFormFieldControl.');
}

/**
 * Injection token that can be used to inject an instances of `MatFormField`. It serves
 * as alternative token to the actual `MatFormField` class which would cause unnecessary
 * retention of the `MatFormField` class and its component metadata.
 */
const MAT_FORM_FIELD = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatFormField');
/**
 * Injection token that can be used to configure the
 * default options for all form field within an app.
 */
const MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_FORM_FIELD_DEFAULT_OPTIONS');
let nextUniqueId = 0;
/** Default appearance used by the form field. */
const DEFAULT_APPEARANCE = 'fill';
/**
 * Whether the label for form fields should by default float `always`,
 * `never`, or `auto`.
 */
const DEFAULT_FLOAT_LABEL = 'auto';
/** Default way that the subscript element height is set. */
const DEFAULT_SUBSCRIPT_SIZING = 'fixed';
/**
 * Default transform for docked floating labels in a MDC text-field. This value has been
 * extracted from the MDC text-field styles because we programmatically modify the docked
 * label transform, but do not want to accidentally discard the default label transform.
 */
const FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM = `translateY(-50%)`;
/** Container for form controls that applies Material Design styling and behavior. */
class MatFormField {
  /** Whether the required marker should be hidden. */
  get hideRequiredMarker() {
    return this._hideRequiredMarker;
  }
  set hideRequiredMarker(value) {
    this._hideRequiredMarker = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);
  }
  /** Whether the label should always float or float as the user types. */
  get floatLabel() {
    return this._floatLabel || this._defaults?.floatLabel || DEFAULT_FLOAT_LABEL;
  }
  set floatLabel(value) {
    if (value !== this._floatLabel) {
      this._floatLabel = value;
      // For backwards compatibility. Custom form field controls or directives might set
      // the "floatLabel" input and expect the form field view to be updated automatically.
      // e.g. autocomplete trigger. Ideally we'd get rid of this and the consumers would just
      // emit the "stateChanges" observable. TODO(devversion): consider removing.
      this._changeDetectorRef.markForCheck();
    }
  }
  /** The form field appearance style. */
  get appearance() {
    return this._appearance;
  }
  set appearance(value) {
    const oldValue = this._appearance;
    const newAppearance = value || this._defaults?.appearance || DEFAULT_APPEARANCE;
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (newAppearance !== 'fill' && newAppearance !== 'outline') {
        throw new Error(`MatFormField: Invalid appearance "${newAppearance}", valid values are "fill" or "outline".`);
      }
    }
    this._appearance = newAppearance;
    if (this._appearance === 'outline' && this._appearance !== oldValue) {
      // If the appearance has been switched to `outline`, the label offset needs to be updated.
      // The update can happen once the view has been re-checked, but not immediately because
      // the view has not been updated and the notched-outline floating label is not present.
      this._needsOutlineLabelOffsetUpdateOnStable = true;
    }
  }
  /**
   * Whether the form field should reserve space for one line of hint/error text (default)
   * or to have the spacing grow from 0px as needed based on the size of the hint/error content.
   * Note that when using dynamic sizing, layout shifts will occur when hint/error text changes.
   */
  get subscriptSizing() {
    return this._subscriptSizing || this._defaults?.subscriptSizing || DEFAULT_SUBSCRIPT_SIZING;
  }
  set subscriptSizing(value) {
    this._subscriptSizing = value || this._defaults?.subscriptSizing || DEFAULT_SUBSCRIPT_SIZING;
  }
  /** Text for the form field hint. */
  get hintLabel() {
    return this._hintLabel;
  }
  set hintLabel(value) {
    this._hintLabel = value;
    this._processHints();
  }
  /** Gets the current form field control */
  get _control() {
    return this._explicitFormFieldControl || this._formFieldControl;
  }
  set _control(value) {
    this._explicitFormFieldControl = value;
  }
  constructor(_elementRef, _changeDetectorRef, _ngZone, _dir, _platform, _defaults, _animationMode,
  /**
   * @deprecated not needed, to be removed.
   * @breaking-change 17.0.0 remove this param
   */
  _unusedDocument) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._ngZone = _ngZone;
    this._dir = _dir;
    this._platform = _platform;
    this._defaults = _defaults;
    this._animationMode = _animationMode;
    this._hideRequiredMarker = false;
    /** The color palette for the form field. */
    this.color = 'primary';
    this._appearance = DEFAULT_APPEARANCE;
    this._subscriptSizing = null;
    this._hintLabel = '';
    this._hasIconPrefix = false;
    this._hasTextPrefix = false;
    this._hasIconSuffix = false;
    this._hasTextSuffix = false;
    // Unique id for the internal form field label.
    this._labelId = `mat-mdc-form-field-label-${nextUniqueId++}`;
    // Unique id for the hint label.
    this._hintLabelId = `mat-mdc-hint-${nextUniqueId++}`;
    /** State of the mat-hint and mat-error animations. */
    this._subscriptAnimationState = '';
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this._isFocused = null;
    this._needsOutlineLabelOffsetUpdateOnStable = false;
    if (_defaults) {
      if (_defaults.appearance) {
        this.appearance = _defaults.appearance;
      }
      this._hideRequiredMarker = Boolean(_defaults?.hideRequiredMarker);
      if (_defaults.color) {
        this.color = _defaults.color;
      }
    }
  }
  ngAfterViewInit() {
    // Initial focus state sync. This happens rarely, but we want to account for
    // it in case the form field control has "focused" set to true on init.
    this._updateFocusState();
    // Enable animations now. This ensures we don't animate on initial render.
    this._subscriptAnimationState = 'enter';
    // Because the above changes a value used in the template after it was checked, we need
    // to trigger CD or the change might not be reflected if there is no other CD scheduled.
    this._changeDetectorRef.detectChanges();
  }
  ngAfterContentInit() {
    this._assertFormFieldControl();
    this._initializeControl();
    this._initializeSubscript();
    this._initializePrefixAndSuffix();
    this._initializeOutlineLabelOffsetSubscriptions();
  }
  ngAfterContentChecked() {
    this._assertFormFieldControl();
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
  /**
   * Gets the id of the label element. If no label is present, returns `null`.
   */
  getLabelId() {
    return this._hasFloatingLabel() ? this._labelId : null;
  }
  /**
   * Gets an ElementRef for the element that a overlay attached to the form field
   * should be positioned relative to.
   */
  getConnectedOverlayOrigin() {
    return this._textField || this._elementRef;
  }
  /** Animates the placeholder up and locks it in position. */
  _animateAndLockLabel() {
    // This is for backwards compatibility only. Consumers of the form field might use
    // this method. e.g. the autocomplete trigger. This method has been added to the non-MDC
    // form field because setting "floatLabel" to "always" caused the label to float without
    // animation. This is different in MDC where the label always animates, so this method
    // is no longer necessary. There doesn't seem any benefit in adding logic to allow changing
    // the floating label state without animations. The non-MDC implementation was inconsistent
    // because it always animates if "floatLabel" is set away from "always".
    // TODO(devversion): consider removing this method when releasing the MDC form field.
    if (this._hasFloatingLabel()) {
      this.floatLabel = 'always';
    }
  }
  /** Initializes the registered form field control. */
  _initializeControl() {
    const control = this._control;
    if (control.controlType) {
      this._elementRef.nativeElement.classList.add(`mat-mdc-form-field-type-${control.controlType}`);
    }
    // Subscribe to changes in the child control state in order to update the form field UI.
    control.stateChanges.subscribe(() => {
      this._updateFocusState();
      this._syncDescribedByIds();
      this._changeDetectorRef.markForCheck();
    });
    // Run change detection if the value changes.
    if (control.ngControl && control.ngControl.valueChanges) {
      control.ngControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
    }
  }
  _checkPrefixAndSuffixTypes() {
    this._hasIconPrefix = !!this._prefixChildren.find(p => !p._isText);
    this._hasTextPrefix = !!this._prefixChildren.find(p => p._isText);
    this._hasIconSuffix = !!this._suffixChildren.find(s => !s._isText);
    this._hasTextSuffix = !!this._suffixChildren.find(s => s._isText);
  }
  /** Initializes the prefix and suffix containers. */
  _initializePrefixAndSuffix() {
    this._checkPrefixAndSuffixTypes();
    // Mark the form field as dirty whenever the prefix or suffix children change. This
    // is necessary because we conditionally display the prefix/suffix containers based
    // on whether there is projected content.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(() => {
      this._checkPrefixAndSuffixTypes();
      this._changeDetectorRef.markForCheck();
    });
  }
  /**
   * Initializes the subscript by validating hints and synchronizing "aria-describedby" ids
   * with the custom form field control. Also subscribes to hint and error changes in order
   * to be able to validate and synchronize ids on change.
   */
  _initializeSubscript() {
    // Re-validate when the number of hints changes.
    this._hintChildren.changes.subscribe(() => {
      this._processHints();
      this._changeDetectorRef.markForCheck();
    });
    // Update the aria-described by when the number of errors changes.
    this._errorChildren.changes.subscribe(() => {
      this._syncDescribedByIds();
      this._changeDetectorRef.markForCheck();
    });
    // Initial mat-hint validation and subscript describedByIds sync.
    this._validateHints();
    this._syncDescribedByIds();
  }
  /** Throws an error if the form field's control is missing. */
  _assertFormFieldControl() {
    if (!this._control && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatFormFieldMissingControlError();
    }
  }
  _updateFocusState() {
    // Usually the MDC foundation would call "activateFocus" and "deactivateFocus" whenever
    // certain DOM events are emitted. This is not possible in our implementation of the
    // form field because we support abstract form field controls which are not necessarily
    // of type input, nor do we have a reference to a native form field control element. Instead
    // we handle the focus by checking if the abstract form field control focused state changes.
    if (this._control.focused && !this._isFocused) {
      this._isFocused = true;
      this._lineRipple?.activate();
    } else if (!this._control.focused && (this._isFocused || this._isFocused === null)) {
      this._isFocused = false;
      this._lineRipple?.deactivate();
    }
    this._textField?.nativeElement.classList.toggle('mdc-text-field--focused', this._control.focused);
  }
  /**
   * The floating label in the docked state needs to account for prefixes. The horizontal offset
   * is calculated whenever the appearance changes to `outline`, the prefixes change, or when the
   * form field is added to the DOM. This method sets up all subscriptions which are needed to
   * trigger the label offset update. In general, we want to avoid performing measurements often,
   * so we rely on the `NgZone` as indicator when the offset should be recalculated, instead of
   * checking every change detection cycle.
   */
  _initializeOutlineLabelOffsetSubscriptions() {
    // Whenever the prefix changes, schedule an update of the label offset.
    this._prefixChildren.changes.subscribe(() => this._needsOutlineLabelOffsetUpdateOnStable = true);
    // Note that we have to run outside of the `NgZone` explicitly, in order to avoid
    // throwing users into an infinite loop if `zone-patch-rxjs` is included.
    this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => {
        if (this._needsOutlineLabelOffsetUpdateOnStable) {
          this._needsOutlineLabelOffsetUpdateOnStable = false;
          this._updateOutlineLabelOffset();
        }
      });
    });
    this._dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => this._needsOutlineLabelOffsetUpdateOnStable = true);
  }
  /** Whether the floating label should always float or not. */
  _shouldAlwaysFloat() {
    return this.floatLabel === 'always';
  }
  _hasOutline() {
    return this.appearance === 'outline';
  }
  /**
   * Whether the label should display in the infix. Labels in the outline appearance are
   * displayed as part of the notched-outline and are horizontally offset to account for
   * form field prefix content. This won't work in server side rendering since we cannot
   * measure the width of the prefix container. To make the docked label appear as if the
   * right offset has been calculated, we forcibly render the label inside the infix. Since
   * the label is part of the infix, the label cannot overflow the prefix content.
   */
  _forceDisplayInfixLabel() {
    return !this._platform.isBrowser && this._prefixChildren.length && !this._shouldLabelFloat();
  }
  _hasFloatingLabel() {
    return !!this._labelChildNonStatic || !!this._labelChildStatic;
  }
  _shouldLabelFloat() {
    return this._control.shouldLabelFloat || this._shouldAlwaysFloat();
  }
  /**
   * Determines whether a class from the AbstractControlDirective
   * should be forwarded to the host element.
   */
  _shouldForward(prop) {
    const control = this._control ? this._control.ngControl : null;
    return control && control[prop];
  }
  /** Determines whether to display hints or errors. */
  _getDisplayedMessages() {
    return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
  }
  /** Handle label resize events. */
  _handleLabelResized() {
    this._refreshOutlineNotchWidth();
  }
  /** Refreshes the width of the outline-notch, if present. */
  _refreshOutlineNotchWidth() {
    if (!this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat()) {
      this._notchedOutline?._setNotchWidth(0);
    } else {
      this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth());
    }
  }
  /** Does any extra processing that is required when handling the hints. */
  _processHints() {
    this._validateHints();
    this._syncDescribedByIds();
  }
  /**
   * Ensure that there is a maximum of one of each "mat-hint" alignment specified. The hint
   * label specified set through the input is being considered as "start" aligned.
   *
   * This method is a noop if Angular runs in production mode.
   */
  _validateHints() {
    if (this._hintChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      let startHint;
      let endHint;
      this._hintChildren.forEach(hint => {
        if (hint.align === 'start') {
          if (startHint || this.hintLabel) {
            throw getMatFormFieldDuplicatedHintError('start');
          }
          startHint = hint;
        } else if (hint.align === 'end') {
          if (endHint) {
            throw getMatFormFieldDuplicatedHintError('end');
          }
          endHint = hint;
        }
      });
    }
  }
  /**
   * Sets the list of element IDs that describe the child control. This allows the control to update
   * its `aria-describedby` attribute accordingly.
   */
  _syncDescribedByIds() {
    if (this._control) {
      let ids = [];
      // TODO(wagnermaciel): Remove the type check when we find the root cause of this bug.
      if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy === 'string') {
        ids.push(...this._control.userAriaDescribedBy.split(' '));
      }
      if (this._getDisplayedMessages() === 'hint') {
        const startHint = this._hintChildren ? this._hintChildren.find(hint => hint.align === 'start') : null;
        const endHint = this._hintChildren ? this._hintChildren.find(hint => hint.align === 'end') : null;
        if (startHint) {
          ids.push(startHint.id);
        } else if (this._hintLabel) {
          ids.push(this._hintLabelId);
        }
        if (endHint) {
          ids.push(endHint.id);
        }
      } else if (this._errorChildren) {
        ids.push(...this._errorChildren.map(error => error.id));
      }
      this._control.setDescribedByIds(ids);
    }
  }
  /**
   * Updates the horizontal offset of the label in the outline appearance. In the outline
   * appearance, the notched-outline and label are not relative to the infix container because
   * the outline intends to surround prefixes, suffixes and the infix. This means that the
   * floating label by default overlaps prefixes in the docked state. To avoid this, we need to
   * horizontally offset the label by the width of the prefix container. The MDC text-field does
   * not need to do this because they use a fixed width for prefixes. Hence, they can simply
   * incorporate the horizontal offset into their default text-field styles.
   */
  _updateOutlineLabelOffset() {
    if (!this._platform.isBrowser || !this._hasOutline() || !this._floatingLabel) {
      return;
    }
    const floatingLabel = this._floatingLabel.element;
    // If no prefix is displayed, reset the outline label offset from potential
    // previous label offset updates.
    if (!(this._iconPrefixContainer || this._textPrefixContainer)) {
      floatingLabel.style.transform = '';
      return;
    }
    // If the form field is not attached to the DOM yet (e.g. in a tab), we defer
    // the label offset update until the zone stabilizes.
    if (!this._isAttachedToDom()) {
      this._needsOutlineLabelOffsetUpdateOnStable = true;
      return;
    }
    const iconPrefixContainer = this._iconPrefixContainer?.nativeElement;
    const textPrefixContainer = this._textPrefixContainer?.nativeElement;
    const iconPrefixContainerWidth = iconPrefixContainer?.getBoundingClientRect().width ?? 0;
    const textPrefixContainerWidth = textPrefixContainer?.getBoundingClientRect().width ?? 0;
    // If the directionality is RTL, the x-axis transform needs to be inverted. This
    // is because `transformX` does not change based on the page directionality.
    const negate = this._dir.value === 'rtl' ? '-1' : '1';
    const prefixWidth = `${iconPrefixContainerWidth + textPrefixContainerWidth}px`;
    const labelOffset = `var(--mat-mdc-form-field-label-offset-x, 0px)`;
    const labelHorizontalOffset = `calc(${negate} * (${prefixWidth} + ${labelOffset}))`;
    // Update the translateX of the floating label to account for the prefix container,
    // but allow the CSS to override this setting via a CSS variable when the label is
    // floating.
    floatingLabel.style.transform = `var(
        --mat-mdc-form-field-label-transform,
        ${FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM} translateX(${labelHorizontalOffset})
    )`;
  }
  /** Checks whether the form field is attached to the DOM. */
  _isAttachedToDom() {
    const element = this._elementRef.nativeElement;
    if (element.getRootNode) {
      const rootNode = element.getRootNode();
      // If the element is inside the DOM the root node will be either the document
      // or the closest shadow root, otherwise it'll be the element itself.
      return rootNode && rootNode !== element;
    }
    // Otherwise fall back to checking if it's in the document. This doesn't account for
    // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.
    return document.documentElement.contains(element);
  }
  static #_ = this.ɵfac = function MatFormField_Factory(t) {
    return new (t || MatFormField)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatFormField,
    selectors: [["mat-form-field"]],
    contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatLabel, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatLabel, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_PREFIX, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_SUFFIX, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_ERROR, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatHint, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._labelChildNonStatic = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._labelChildStatic = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._formFieldControl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
      }
    },
    viewQuery: function MatFormField_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatFormFieldFloatingLabel, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatFormFieldNotchedOutline, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatFormFieldLineRipple, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._textField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._iconPrefixContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._textPrefixContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._floatingLabel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._notchedOutline = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lineRipple = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-form-field"],
    hostVars: 42,
    hostBindings: function MatFormField_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-form-field-label-always-float", ctx._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix", ctx._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix", ctx._hasIconSuffix)("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-form-field-no-animations", ctx._animationMode === "NoopAnimations")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-hide-placeholder", ctx._hasFloatingLabel() && !ctx._shouldLabelFloat())("mat-focused", ctx._control.focused)("mat-primary", ctx.color !== "accent" && ctx.color !== "warn")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"));
      }
    },
    inputs: {
      hideRequiredMarker: "hideRequiredMarker",
      color: "color",
      floatLabel: "floatLabel",
      appearance: "appearance",
      subscriptSizing: "subscriptSizing",
      hintLabel: "hintLabel"
    },
    exportAs: ["matFormField"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: MAT_FORM_FIELD,
      useExisting: MatFormField
    }, {
      provide: FLOATING_LABEL_PARENT,
      useExisting: MatFormField
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c7,
    decls: 18,
    vars: 21,
    consts: [["labelTemplate", ""], [1, "mat-mdc-text-field-wrapper", "mdc-text-field", 3, "click"], ["textField", ""], ["class", "mat-mdc-form-field-focus-overlay"], [1, "mat-mdc-form-field-flex"], ["matFormFieldNotchedOutline", "", 3, "matFormFieldNotchedOutlineOpen"], ["class", "mat-mdc-form-field-icon-prefix"], ["class", "mat-mdc-form-field-text-prefix"], [1, "mat-mdc-form-field-infix"], [3, "ngTemplateOutlet"], ["class", "mat-mdc-form-field-text-suffix"], ["class", "mat-mdc-form-field-icon-suffix"], ["matFormFieldLineRipple", ""], [1, "mat-mdc-form-field-subscript-wrapper", "mat-mdc-form-field-bottom-align"], ["matFormFieldFloatingLabel", "", 3, "floating", "monitorResize", "id"], ["aria-hidden", "true", "class", "mat-mdc-form-field-required-marker mdc-floating-label--required"], ["aria-hidden", "true", 1, "mat-mdc-form-field-required-marker", "mdc-floating-label--required"], [1, "mat-mdc-form-field-focus-overlay"], [1, "mat-mdc-form-field-icon-prefix"], ["iconPrefixContainer", ""], [1, "mat-mdc-form-field-text-prefix"], ["textPrefixContainer", ""], [1, "mat-mdc-form-field-text-suffix"], [1, "mat-mdc-form-field-icon-suffix"], [1, "mat-mdc-form-field-error-wrapper"], [1, "mat-mdc-form-field-hint-wrapper"], [3, "id"], [1, "mat-mdc-form-field-hint-spacer"]],
    template: function MatFormField_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatFormField_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatFormField_Template_div_click_2_listener($event) {
          return ctx._control.onContainerClick($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatFormField_Conditional_4_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatFormField_Conditional_6_Template, 2, 2, "div", 5)(7, MatFormField_Conditional_7_Template, 3, 0, "div", 6)(8, MatFormField_Conditional_8_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MatFormField_Conditional_10_Template, 1, 1, null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MatFormField_Conditional_12_Template, 2, 0, "div", 10)(13, MatFormField_Conditional_13_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MatFormField_Conditional_14_Template, 1, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MatFormField_Case_16_Template, 2, 1)(17, MatFormField_Case_17_Template, 5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let MatFormField_contFlowTmp;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-text-field--filled", !ctx._hasOutline())("mdc-text-field--outlined", ctx._hasOutline())("mdc-text-field--no-label", !ctx._hasFloatingLabel())("mdc-text-field--disabled", ctx._control.disabled)("mdc-text-field--invalid", ctx._control.errorState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](4, !ctx._hasOutline() && !ctx._control.disabled ? 4 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](6, ctx._hasOutline() ? 6 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](7, ctx._hasIconPrefix ? 7 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](8, ctx._hasTextPrefix ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](10, !ctx._hasOutline() || ctx._forceDisplayInfixLabel() ? 10 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](12, ctx._hasTextSuffix ? 12 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](13, ctx._hasIconSuffix ? 13 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](14, !ctx._hasOutline() ? 14 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-form-field-subscript-dynamic-size", ctx.subscriptSizing === "dynamic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](16, (MatFormField_contFlowTmp = ctx._getDisplayedMessages()) === "error" ? 16 : MatFormField_contFlowTmp === "hint" ? 17 : -1);
      }
    },
    dependencies: [MatFormFieldFloatingLabel, MatFormFieldNotchedOutline, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, MatFormFieldLineRipple, MatHint],
    styles: [".mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{height:28px;width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}}.mdc-text-field__affix{height:28px;opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px,var(--mdc-shape-small, 4px))*2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px,var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:\"\";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 64px/0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 64px/0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 96px/0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-floating-label{position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0px;content:\"*\"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after,.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;pointer-events:none}.mdc-notched-outline__trailing{flex-grow:1}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:\"\"}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-top:1px solid;border-bottom:1px solid}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{max-width:calc(100% - 12px*2)}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::after{border-bottom-width:2px}.mdc-text-field--filled{border-top-left-radius:var(--mdc-filled-text-field-container-shape);border-top-right-radius:var(--mdc-filled-text-field-container-shape);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-caret-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-error-caret-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-filled-text-field-input-text-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-filled-text-field-disabled-input-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-focus-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-hover-label-text-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-disabled-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-focus-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-hover-label-text-color)}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mdc-filled-text-field-label-text-font);font-size:var(--mdc-filled-text-field-label-text-size);font-weight:var(--mdc-filled-text-field-label-text-weight);letter-spacing:var(--mdc-filled-text-field-label-text-tracking)}@media all{.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color)}}@media all{.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color)}}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mdc-filled-text-field-container-color)}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mdc-filled-text-field-disabled-container-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-hover-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-focus-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-disabled-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-hover-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-error-focus-active-indicator-color)}.mdc-text-field--filled .mdc-line-ripple::before{border-bottom-width:var(--mdc-filled-text-field-active-indicator-height)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mdc-filled-text-field-focus-active-indicator-height)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-caret-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-error-caret-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-outlined-text-field-input-text-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-outlined-text-field-disabled-input-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-focus-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-hover-label-text-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-disabled-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-focus-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-hover-label-text-color)}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mdc-outlined-text-field-label-text-font);font-size:var(--mdc-outlined-text-field-label-text-size);font-weight:var(--mdc-outlined-text-field-label-text-weight);letter-spacing:var(--mdc-outlined-text-field-label-text-tracking)}@media all{.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color)}}@media all{.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color)}}.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(.75*var(--mdc-outlined-text-field-label-text-size))}.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mdc-outlined-text-field-label-text-size)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:var(--mdc-outlined-text-field-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-outlined-text-field-container-shape))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px,var(--mdc-outlined-text-field-container-shape))*2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:var(--mdc-outlined-text-field-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px,var(--mdc-outlined-text-field-container-shape))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-hover-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-focus-outline-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-disabled-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-hover-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-focus-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__trailing{border-width:var(--mdc-outlined-text-field-outline-width)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:var(--mdc-outlined-text-field-focus-outline-width)}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-text-field-wrapper::before{content:none}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height);padding-top:var(--mat-form-field-filled-with-label-container-padding-top);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding);padding-bottom:var(--mat-form-field-container-vertical-padding)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:\"\";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color)}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font);line-height:var(--mat-form-field-subscript-text-line-height);font-size:var(--mat-form-field-subscript-text-size);letter-spacing:var(--mat-form-field-subscript-text-tracking);font-weight:var(--mat-form-field-subscript-text-weight)}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color)}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity)}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color)}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color)}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}.cdk-high-contrast-active .mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font);line-height:var(--mat-form-field-container-text-line-height);font-size:var(--mat-form-field-container-text-size);letter-spacing:var(--mat-form-field-container-text-tracking);font-weight:var(--mat-form-field-container-text-weight)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color)}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color)}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color)}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color)}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color)}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color)}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color)}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input{transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}}@media all{.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__affix{transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea{transition:none}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}}[dir=rtl] .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}"],
    encapsulation: 2,
    data: {
      animation: [matFormFieldAnimations.transitionMessages]
    },
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFormField, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-form-field',
      exportAs: 'matFormField',
      animations: [matFormFieldAnimations.transitionMessages],
      host: {
        'class': 'mat-mdc-form-field',
        '[class.mat-mdc-form-field-label-always-float]': '_shouldAlwaysFloat()',
        '[class.mat-mdc-form-field-has-icon-prefix]': '_hasIconPrefix',
        '[class.mat-mdc-form-field-has-icon-suffix]': '_hasIconSuffix',
        // Note that these classes reuse the same names as the non-MDC version, because they can be
        // considered a public API since custom form controls may use them to style themselves.
        // See https://github.com/angular/components/pull/20502#discussion_r486124901.
        '[class.mat-form-field-invalid]': '_control.errorState',
        '[class.mat-form-field-disabled]': '_control.disabled',
        '[class.mat-form-field-autofilled]': '_control.autofilled',
        '[class.mat-form-field-no-animations]': '_animationMode === "NoopAnimations"',
        '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
        '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
        '[class.mat-form-field-hide-placeholder]': '_hasFloatingLabel() && !_shouldLabelFloat()',
        '[class.mat-focused]': '_control.focused',
        '[class.mat-primary]': 'color !== "accent" && color !== "warn"',
        '[class.mat-accent]': 'color === "accent"',
        '[class.mat-warn]': 'color === "warn"',
        '[class.ng-untouched]': '_shouldForward("untouched")',
        '[class.ng-touched]': '_shouldForward("touched")',
        '[class.ng-pristine]': '_shouldForward("pristine")',
        '[class.ng-dirty]': '_shouldForward("dirty")',
        '[class.ng-valid]': '_shouldForward("valid")',
        '[class.ng-invalid]': '_shouldForward("invalid")',
        '[class.ng-pending]': '_shouldForward("pending")'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MAT_FORM_FIELD,
        useExisting: MatFormField
      }, {
        provide: FLOATING_LABEL_PARENT,
        useExisting: MatFormField
      }],
      standalone: true,
      imports: [MatFormFieldFloatingLabel, MatFormFieldNotchedOutline, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, MatFormFieldLineRipple, MatHint],
      template: "<ng-template #labelTemplate>\n  <!--\n    MDC recommends that the text-field is a `<label>` element. This rather complicates the\n    setup because it would require every form-field control to explicitly set `aria-labelledby`.\n    This is because the `<label>` itself contains more than the actual label (e.g. prefix, suffix\n    or other projected content), and screen readers could potentially read out undesired content.\n    Excluding elements from being printed out requires them to be marked with `aria-hidden`, or\n    the form control is set to a scoped element for the label (using `aria-labelledby`). Both of\n    these options seem to complicate the setup because we know exactly what content is rendered\n    as part of the label, and we don't want to spend resources on walking through projected content\n    to set `aria-hidden`. Nor do we want to set `aria-labelledby` on every form control if we could\n    simply link the label to the control using the label `for` attribute.\n  -->\n  @if (_hasFloatingLabel()) {\n    <label matFormFieldFloatingLabel\n           [floating]=\"_shouldLabelFloat()\"\n           [monitorResize]=\"_hasOutline()\"\n           [id]=\"_labelId\"\n           [attr.for]=\"_control.id\">\n      <ng-content select=\"mat-label\"></ng-content>\n      <!--\n        We set the required marker as a separate element, in order to make it easier to target if\n        apps want to override it and to be able to set `aria-hidden` so that screen readers don't\n        pick it up.\n       -->\n       @if (!hideRequiredMarker && _control.required) {\n         <span\n           aria-hidden=\"true\"\n           class=\"mat-mdc-form-field-required-marker mdc-floating-label--required\"></span>\n       }\n    </label>\n  }\n</ng-template>\n\n<div class=\"mat-mdc-text-field-wrapper mdc-text-field\" #textField\n     [class.mdc-text-field--filled]=\"!_hasOutline()\"\n     [class.mdc-text-field--outlined]=\"_hasOutline()\"\n     [class.mdc-text-field--no-label]=\"!_hasFloatingLabel()\"\n     [class.mdc-text-field--disabled]=\"_control.disabled\"\n     [class.mdc-text-field--invalid]=\"_control.errorState\"\n     (click)=\"_control.onContainerClick($event)\">\n  @if (!_hasOutline() && !_control.disabled) {\n    <div class=\"mat-mdc-form-field-focus-overlay\"></div>\n  }\n  <div class=\"mat-mdc-form-field-flex\">\n    @if (_hasOutline()) {\n      <div matFormFieldNotchedOutline [matFormFieldNotchedOutlineOpen]=\"_shouldLabelFloat()\">\n        @if (!_forceDisplayInfixLabel()) {\n          <ng-template [ngTemplateOutlet]=\"labelTemplate\"></ng-template>\n        }\n      </div>\n    }\n\n    @if (_hasIconPrefix) {\n      <div class=\"mat-mdc-form-field-icon-prefix\" #iconPrefixContainer>\n        <ng-content select=\"[matPrefix], [matIconPrefix]\"></ng-content>\n      </div>\n    }\n\n    @if (_hasTextPrefix) {\n      <div class=\"mat-mdc-form-field-text-prefix\" #textPrefixContainer>\n        <ng-content select=\"[matTextPrefix]\"></ng-content>\n      </div>\n    }\n\n    <div class=\"mat-mdc-form-field-infix\">\n      @if (!_hasOutline() || _forceDisplayInfixLabel()) {\n        <ng-template [ngTemplateOutlet]=\"labelTemplate\"></ng-template>\n      }\n\n      <ng-content></ng-content>\n    </div>\n\n    @if (_hasTextSuffix) {\n      <div class=\"mat-mdc-form-field-text-suffix\">\n        <ng-content select=\"[matTextSuffix]\"></ng-content>\n      </div>\n    }\n\n    @if (_hasIconSuffix) {\n      <div class=\"mat-mdc-form-field-icon-suffix\">\n        <ng-content select=\"[matSuffix], [matIconSuffix]\"></ng-content>\n      </div>\n    }\n  </div>\n\n  @if (!_hasOutline()) {\n    <div matFormFieldLineRipple></div>\n  }\n</div>\n\n<div class=\"mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align\"\n     [class.mat-mdc-form-field-subscript-dynamic-size]=\"subscriptSizing === 'dynamic'\">\n\n  @switch (_getDisplayedMessages()) {\n    @case ('error') {\n      <div class=\"mat-mdc-form-field-error-wrapper\"\n           [@transitionMessages]=\"_subscriptAnimationState\">\n        <ng-content select=\"mat-error, [matError]\"></ng-content>\n      </div>\n    }\n\n    @case ('hint') {\n      <div class=\"mat-mdc-form-field-hint-wrapper\" [@transitionMessages]=\"_subscriptAnimationState\">\n        @if (hintLabel) {\n          <mat-hint [id]=\"_hintLabelId\">{{hintLabel}}</mat-hint>\n        }\n        <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n        <div class=\"mat-mdc-form-field-hint-spacer\"></div>\n        <ng-content select=\"mat-hint[align='end']\"></ng-content>\n      </div>\n    }\n  }\n</div>\n",
      styles: [".mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{height:28px;width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}}.mdc-text-field__affix{height:28px;opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px,var(--mdc-shape-small, 4px))*2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px,var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:\"\";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 64px/0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 64px/0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 96px/0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-floating-label{position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0px;content:\"*\"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after,.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;pointer-events:none}.mdc-notched-outline__trailing{flex-grow:1}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:\"\"}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-top:1px solid;border-bottom:1px solid}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{max-width:calc(100% - 12px*2)}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::after{border-bottom-width:2px}.mdc-text-field--filled{border-top-left-radius:var(--mdc-filled-text-field-container-shape);border-top-right-radius:var(--mdc-filled-text-field-container-shape);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-caret-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-error-caret-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-filled-text-field-input-text-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-filled-text-field-disabled-input-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-focus-label-text-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-hover-label-text-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-disabled-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-focus-label-text-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-filled-text-field-error-hover-label-text-color)}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mdc-filled-text-field-label-text-font);font-size:var(--mdc-filled-text-field-label-text-size);font-weight:var(--mdc-filled-text-field-label-text-weight);letter-spacing:var(--mdc-filled-text-field-label-text-tracking)}@media all{.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color)}}@media all{.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color)}}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mdc-filled-text-field-container-color)}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mdc-filled-text-field-disabled-container-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-hover-active-indicator-color)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-focus-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-disabled-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-hover-active-indicator-color)}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-error-focus-active-indicator-color)}.mdc-text-field--filled .mdc-line-ripple::before{border-bottom-width:var(--mdc-filled-text-field-active-indicator-height)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mdc-filled-text-field-focus-active-indicator-height)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-caret-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-error-caret-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-outlined-text-field-input-text-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-outlined-text-field-disabled-input-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-focus-label-text-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-hover-label-text-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-disabled-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-focus-label-text-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label--float-above{color:var(--mdc-outlined-text-field-error-hover-label-text-color)}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mdc-outlined-text-field-label-text-font);font-size:var(--mdc-outlined-text-field-label-text-size);font-weight:var(--mdc-outlined-text-field-label-text-weight);letter-spacing:var(--mdc-outlined-text-field-label-text-tracking)}@media all{.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color)}}@media all{.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color)}}.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(.75*var(--mdc-outlined-text-field-label-text-size))}.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mdc-outlined-text-field-label-text-size)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:var(--mdc-outlined-text-field-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-outlined-text-field-container-shape))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px,var(--mdc-outlined-text-field-container-shape))*2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:var(--mdc-outlined-text-field-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px,var(--mdc-outlined-text-field-container-shape))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px,calc(var(--mdc-outlined-text-field-container-shape) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-hover-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-focus-outline-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-disabled-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-hover-outline-color)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:var(--mdc-outlined-text-field-error-focus-outline-color)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline .mdc-notched-outline__trailing{border-width:var(--mdc-outlined-text-field-outline-width)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:var(--mdc-outlined-text-field-focus-outline-width)}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color)}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-text-field-wrapper::before{content:none}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height);padding-top:var(--mat-form-field-filled-with-label-container-padding-top);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding);padding-bottom:var(--mat-form-field-container-vertical-padding)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:\"\";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color)}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font);line-height:var(--mat-form-field-subscript-text-line-height);font-size:var(--mat-form-field-subscript-text-size);letter-spacing:var(--mat-form-field-subscript-text-tracking);font-weight:var(--mat-form-field-subscript-text-weight)}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color)}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity)}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color)}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color)}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color)}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}.cdk-high-contrast-active .mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font);line-height:var(--mat-form-field-container-text-line-height);font-size:var(--mat-form-field-container-text-size);letter-spacing:var(--mat-form-field-container-text-tracking);font-weight:var(--mat-form-field-container-text-weight)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color)}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color)}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color)}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color)}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color)}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color)}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color)}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input{transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}}@media all{.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}}@media all{.mdc-text-field--no-label .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__affix{transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 34.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea{transition:none}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 10.25px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 24.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - 32px)) translateY(calc(0% - 34.75px)) scale(0.75)}}[dir=rtl] .mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}100%{transform:translateX(calc(0% - -32px)) translateY(calc(0% - 34.75px)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}100%{transform:translateX(calc(0% - 0%)) translateY(calc(0% - 106%)) scale(0.75)}}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT]
    }]
  }], {
    _textField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['textField']
    }],
    _iconPrefixContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['iconPrefixContainer']
    }],
    _textPrefixContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['textPrefixContainer']
    }],
    _floatingLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatFormFieldFloatingLabel]
    }],
    _notchedOutline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatFormFieldNotchedOutline]
    }],
    _lineRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatFormFieldLineRipple]
    }],
    _labelChildNonStatic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatLabel]
    }],
    _labelChildStatic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatLabel, {
        static: true
      }]
    }],
    _formFieldControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatFormFieldControl]
    }],
    _prefixChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MAT_PREFIX, {
        descendants: true
      }]
    }],
    _suffixChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MAT_SUFFIX, {
        descendants: true
      }]
    }],
    _errorChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MAT_ERROR, {
        descendants: true
      }]
    }],
    _hintChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatHint, {
        descendants: true
      }]
    }],
    hideRequiredMarker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    floatLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    subscriptSizing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hintLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MatFormFieldModule {
  static #_ = this.ɵfac = function MatFormFieldModule_Factory(t) {
    return new (t || MatFormFieldModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatFormFieldModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__.ObserversModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFormFieldModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__.ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
      exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 2307:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/input.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_INPUT_VALUE_ACCESSOR: () => (/* binding */ MAT_INPUT_VALUE_ACCESSOR),
/* harmony export */   MatError: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MatError),
/* harmony export */   MatFormField: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MatFormField),
/* harmony export */   MatHint: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MatHint),
/* harmony export */   MatInput: () => (/* binding */ MatInput),
/* harmony export */   MatInputModule: () => (/* binding */ MatInputModule),
/* harmony export */   MatLabel: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MatLabel),
/* harmony export */   MatPrefix: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MatPrefix),
/* harmony export */   MatSuffix: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MatSuffix),
/* harmony export */   getMatInputUnsupportedTypeError: () => (/* binding */ getMatInputUnsupportedTypeError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 2932);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ 9664);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/text-field */ 3988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 2544);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/form-field */ 1267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5100);
















/** @docs-private */
function getMatInputUnsupportedTypeError(type) {
  return Error(`Input type "${type}" isn't supported by matInput.`);
}

/**
 * This token is used to inject the object whose value should be set into `MatInput`. If none is
 * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
 * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
 * value to them.
 */
const MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MAT_INPUT_VALUE_ACCESSOR');

// Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.
const MAT_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
let nextUniqueId = 0;
class MatInput {
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
    // Browsers may not fire the blur event if the input is disabled too quickly.
    // Reset from here to ensure that the element doesn't become stuck.
    if (this.focused) {
      this.focused = false;
      this.stateChanges.next();
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || this._uid;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required) ?? false;
  }
  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
  }
  /** Input type of the element. */
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value || 'text';
    this._validateType();
    // When using Angular inputs, developers are no longer able to set the properties on the native
    // input element. To ensure that bindings for `type` work, we need to sync the setter
    // with the native property. Textarea elements don't support the type property or attribute.
    if (!this._isTextarea && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.getSupportedInputTypes)().has(this._type)) {
      this._elementRef.nativeElement.type = this._type;
    }
  }
  /** An object used to control when error messages are shown. */
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get value() {
    return this._inputValueAccessor.value;
  }
  set value(value) {
    if (value !== this.value) {
      this._inputValueAccessor.value = value;
      this.stateChanges.next();
    }
  }
  /** Whether the element is readonly. */
  get readonly() {
    return this._readonly;
  }
  set readonly(value) {
    this._readonly = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
  }
  /** Whether the input is in an error state. */
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  constructor(_elementRef, _platform, ngControl, parentForm, parentFormGroup, defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone,
  // TODO: Remove this once the legacy appearance has been removed. We only need
  // to inject the form field for determining whether the placeholder has been promoted.
  _formField) {
    this._elementRef = _elementRef;
    this._platform = _platform;
    this.ngControl = ngControl;
    this._autofillMonitor = _autofillMonitor;
    this._formField = _formField;
    this._uid = `mat-input-${nextUniqueId++}`;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    this.focused = false;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    this.controlType = 'mat-input';
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    this.autofilled = false;
    this._disabled = false;
    this._type = 'text';
    this._readonly = false;
    this._neverEmptyInputTypes = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'].filter(t => (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.getSupportedInputTypes)().has(t));
    this._iOSKeyupListener = event => {
      const el = event.target;
      // Note: We specifically check for 0, rather than `!el.selectionStart`, because the two
      // indicate different things. If the value is 0, it means that the caret is at the start
      // of the input, whereas a value of `null` means that the input doesn't support
      // manipulating the selection range. Inputs that don't support setting the selection range
      // will throw an error so we want to avoid calling `setSelectionRange` on them. See:
      // https://html.spec.whatwg.org/multipage/input.html#do-not-apply
      if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
        // Note: Just setting `0, 0` doesn't fix the issue. Setting
        // `1, 1` fixes it for the first time that you type text and
        // then hold delete. Toggling to `1, 1` and then back to
        // `0, 0` seems to completely fix it.
        el.setSelectionRange(1, 1);
        el.setSelectionRange(0, 0);
      }
    };
    const element = this._elementRef.nativeElement;
    const nodeName = element.nodeName.toLowerCase();
    // If no input value accessor was explicitly specified, use the element as the input value
    // accessor.
    this._inputValueAccessor = inputValueAccessor || element;
    this._previousNativeValue = this.value;
    // Force setter to be called in case id was not specified.
    this.id = this.id;
    // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
    // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
    // exists on iOS, we only bother to install the listener on iOS.
    if (_platform.IOS) {
      ngZone.runOutsideAngular(() => {
        _elementRef.nativeElement.addEventListener('keyup', this._iOSKeyupListener);
      });
    }
    this._errorStateTracker = new _angular_material_core__WEBPACK_IMPORTED_MODULE_6__._ErrorStateTracker(defaultErrorStateMatcher, ngControl, parentFormGroup, parentForm, this.stateChanges);
    this._isServer = !this._platform.isBrowser;
    this._isNativeSelect = nodeName === 'select';
    this._isTextarea = nodeName === 'textarea';
    this._isInFormField = !!_formField;
    if (this._isNativeSelect) {
      this.controlType = element.multiple ? 'mat-native-select-multiple' : 'mat-native-select';
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(event => {
        this.autofilled = event.isAutofilled;
        this.stateChanges.next();
      });
    }
  }
  ngOnChanges() {
    this.stateChanges.next();
  }
  ngOnDestroy() {
    this.stateChanges.complete();
    if (this._platform.isBrowser) {
      this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
    }
    if (this._platform.IOS) {
      this._elementRef.nativeElement.removeEventListener('keyup', this._iOSKeyupListener);
    }
  }
  ngDoCheck() {
    if (this.ngControl) {
      // We need to re-evaluate this on every change detection cycle, because there are some
      // error triggers that we can't subscribe to (e.g. parent form submissions). This means
      // that whatever logic is in here has to be super lean or we risk destroying the performance.
      this.updateErrorState();
      // Since the input isn't a `ControlValueAccessor`, we don't have a good way of knowing when
      // the disabled state has changed. We can't use the `ngControl.statusChanges`, because it
      // won't fire if the input is disabled with `emitEvents = false`, despite the input becoming
      // disabled.
      if (this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled) {
        this.disabled = this.ngControl.disabled;
        this.stateChanges.next();
      }
    }
    // We need to dirty-check the native element's value, because there are some cases where
    // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
    // updating the value using `emitEvent: false`).
    this._dirtyCheckNativeValue();
    // We need to dirty-check and set the placeholder attribute ourselves, because whether it's
    // present or not depends on a query which is prone to "changed after checked" errors.
    this._dirtyCheckPlaceholder();
  }
  /** Focuses the input. */
  focus(options) {
    this._elementRef.nativeElement.focus(options);
  }
  /** Refreshes the error state of the input. */
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  /** Callback for the cases where the focused state of the input changes. */
  _focusChanged(isFocused) {
    if (isFocused !== this.focused) {
      this.focused = isFocused;
      this.stateChanges.next();
    }
  }
  _onInput() {
    // This is a noop function and is used to let Angular know whenever the value changes.
    // Angular will run a new change detection each time the `input` event has been dispatched.
    // It's necessary that Angular recognizes the value change, because when floatingLabel
    // is set to false and Angular forms aren't used, the placeholder won't recognize the
    // value changes and will not disappear.
    // Listening to the input event wouldn't be necessary when the input is using the
    // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
  }
  /** Does some manual dirty checking on the native input `value` property. */
  _dirtyCheckNativeValue() {
    const newValue = this._elementRef.nativeElement.value;
    if (this._previousNativeValue !== newValue) {
      this._previousNativeValue = newValue;
      this.stateChanges.next();
    }
  }
  /** Does some manual dirty checking on the native input `placeholder` attribute. */
  _dirtyCheckPlaceholder() {
    const placeholder = this._getPlaceholder();
    if (placeholder !== this._previousPlaceholder) {
      const element = this._elementRef.nativeElement;
      this._previousPlaceholder = placeholder;
      placeholder ? element.setAttribute('placeholder', placeholder) : element.removeAttribute('placeholder');
    }
  }
  /** Gets the current placeholder of the form field. */
  _getPlaceholder() {
    return this.placeholder || null;
  }
  /** Make sure the input is a supported type. */
  _validateType() {
    if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatInputUnsupportedTypeError(this._type);
    }
  }
  /** Checks whether the input type is one of the types that are never empty. */
  _isNeverEmpty() {
    return this._neverEmptyInputTypes.indexOf(this._type) > -1;
  }
  /** Checks whether the input is invalid based on the native validation. */
  _isBadInput() {
    // The `validity` property won't be present on platform-server.
    let validity = this._elementRef.nativeElement.validity;
    return validity && validity.badInput;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get empty() {
    return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get shouldLabelFloat() {
    if (this._isNativeSelect) {
      // For a single-selection `<select>`, the label should float when the selected option has
      // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
      // overlapping the label with the options.
      const selectElement = this._elementRef.nativeElement;
      const firstOption = selectElement.options[0];
      // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
      // -1 if the `value` is set to something, that isn't in the list of options, at a later point.
      return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
    } else {
      return this.focused || !this.empty;
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  setDescribedByIds(ids) {
    if (ids.length) {
      this._elementRef.nativeElement.setAttribute('aria-describedby', ids.join(' '));
    } else {
      this._elementRef.nativeElement.removeAttribute('aria-describedby');
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  onContainerClick() {
    // Do not re-focus the input element if the element is already focused. Otherwise it can happen
    // that someone clicks on a time input and the cursor resets to the "hours" field while the
    // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
    if (!this.focused) {
      this.focus();
    }
  }
  /** Whether the form control is a native select that is displayed inline. */
  _isInlineSelect() {
    const element = this._elementRef.nativeElement;
    return this._isNativeSelect && (element.multiple || element.size > 1);
  }
  static #_ = this.ɵfac = function MatInput_Factory(t) {
    return new (t || MatInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_6__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_INPUT_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__.AutofillMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MAT_FORM_FIELD, 8));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: MatInput,
    selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
    hostAttrs: [1, "mat-mdc-input-element"],
    hostVars: 18,
    hostBindings: function MatInput_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatInput_focus_HostBindingHandler() {
          return ctx._focusChanged(true);
        })("blur", function MatInput_blur_HostBindingHandler() {
          return ctx._focusChanged(false);
        })("input", function MatInput_input_HostBindingHandler() {
          return ctx._onInput();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id)("disabled", ctx.disabled)("required", ctx.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("name", ctx.name || null)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-invalid", ctx.empty && ctx.required ? null : ctx.errorState)("aria-required", ctx.required)("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-input-server", ctx._isServer)("mat-mdc-form-field-textarea-control", ctx._isInFormField && ctx._isTextarea)("mat-mdc-form-field-input-control", ctx._isInFormField)("mdc-text-field__input", ctx._isInFormField)("mat-mdc-native-select-inline", ctx._isInlineSelect());
      }
    },
    inputs: {
      disabled: "disabled",
      id: "id",
      placeholder: "placeholder",
      name: "name",
      required: "required",
      type: "type",
      errorStateMatcher: "errorStateMatcher",
      userAriaDescribedBy: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputFlags"].None, "aria-describedby", "userAriaDescribedBy"],
      value: "value",
      readonly: "readonly"
    },
    exportAs: ["matInput"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MatFormFieldControl,
      useExisting: MatInput
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: `input[matInput], textarea[matInput], select[matNativeControl],
      input[matNativeControl], textarea[matNativeControl]`,
      exportAs: 'matInput',
      host: {
        'class': 'mat-mdc-input-element',
        // The BaseMatInput parent class adds `mat-input-element`, `mat-form-field-control` and
        // `mat-form-field-autofill-control` to the CSS class list, but this should not be added for
        // this MDC equivalent input.
        '[class.mat-input-server]': '_isServer',
        '[class.mat-mdc-form-field-textarea-control]': '_isInFormField && _isTextarea',
        '[class.mat-mdc-form-field-input-control]': '_isInFormField',
        '[class.mdc-text-field__input]': '_isInFormField',
        '[class.mat-mdc-native-select-inline]': '_isInlineSelect()',
        // Native input properties that are overwritten by Angular inputs need to be synced with
        // the native input element. Otherwise property bindings for those don't work.
        '[id]': 'id',
        '[disabled]': 'disabled',
        '[required]': 'required',
        '[attr.name]': 'name || null',
        '[attr.readonly]': 'readonly && !_isNativeSelect || null',
        // Only mark the input as invalid for assistive technology if it has a value since the
        // state usually overlaps with `aria-required` when the input is empty and can be redundant.
        '[attr.aria-invalid]': '(empty && required) ? null : errorState',
        '[attr.aria-required]': 'required',
        // Native input properties that are overwritten by Angular inputs need to be synced with
        // the native input element. Otherwise property bindings for those don't work.
        '[attr.id]': 'id',
        '(focus)': '_focusChanged(true)',
        '(blur)': '_focusChanged(false)',
        '(input)': '_onInput()'
      },
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MatFormFieldControl,
        useExisting: MatInput
      }],
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.Platform
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControl,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.ErrorStateMatcher
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [MAT_INPUT_VALUE_ACCESSOR]
    }]
  }, {
    type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__.AutofillMonitor
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
  }, {
    type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MatFormField,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MAT_FORM_FIELD]
    }]
  }], {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    errorStateMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    userAriaDescribedBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['aria-describedby']
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class MatInputModule {
  static #_ = this.ɵfac = function MatInputModule_Factory(t) {
    return new (t || MatInputModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MatInputModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatCommonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MatFormFieldModule, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__.TextFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatCommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInputModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatCommonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MatFormFieldModule, MatInput],
      exports: [MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_0__.MatFormFieldModule, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__.TextFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatCommonModule]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 7872:
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/select.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_SELECT_CONFIG: () => (/* binding */ MAT_SELECT_CONFIG),
/* harmony export */   MAT_SELECT_SCROLL_STRATEGY: () => (/* binding */ MAT_SELECT_SCROLL_STRATEGY),
/* harmony export */   MAT_SELECT_SCROLL_STRATEGY_PROVIDER: () => (/* binding */ MAT_SELECT_SCROLL_STRATEGY_PROVIDER),
/* harmony export */   MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY: () => (/* binding */ MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY),
/* harmony export */   MAT_SELECT_TRIGGER: () => (/* binding */ MAT_SELECT_TRIGGER),
/* harmony export */   MatError: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatError),
/* harmony export */   MatFormField: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormField),
/* harmony export */   MatHint: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatHint),
/* harmony export */   MatLabel: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatLabel),
/* harmony export */   MatOptgroup: () => (/* reexport safe */ _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatOptgroup),
/* harmony export */   MatOption: () => (/* reexport safe */ _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatOption),
/* harmony export */   MatPrefix: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatPrefix),
/* harmony export */   MatSelect: () => (/* binding */ MatSelect),
/* harmony export */   MatSelectChange: () => (/* binding */ MatSelectChange),
/* harmony export */   MatSelectModule: () => (/* binding */ MatSelectModule),
/* harmony export */   MatSelectTrigger: () => (/* binding */ MatSelectTrigger),
/* harmony export */   MatSuffix: () => (/* reexport safe */ _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatSuffix),
/* harmony export */   matSelectAnimations: () => (/* binding */ matSelectAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 768);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 2544);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 1267);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/scrolling */ 7736);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/a11y */ 2664);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/bidi */ 8336);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/collections */ 7469);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/keycodes */ 2608);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5100);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8832);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 728);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1792);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9432);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 7496);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 6560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 604);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 1484);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 4364);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 3291);























/**
 * The following are all the animations for the mat-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS Material mat-select animation.
 * @docs-private
 */
const _c0 = ["trigger"];
const _c1 = ["panel"];
function MatSelect_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.placeholder);
  }
}
function MatSelect_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
  }
}
function MatSelect_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.triggerValue);
  }
}
function MatSelect_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MatSelect_Conditional_5_Conditional_1_Template, 1, 0)(2, MatSelect_Conditional_5_Conditional_2_Template, 2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](1, ctx_r3.customTrigger ? 1 : 2);
  }
}
function MatSelect_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("@transformPanel.done", function MatSelect_ng_template_10_Template_div_animation_transformPanel_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8._panelDoneAnimatingStream.next($event.toState));
    })("keydown", function MatSelect_ng_template_10_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10._handleKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ", ctx_r4._getPanelTheme(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r4.panelClass)("@transformPanel", "showing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx_r4.id + "-panel")("aria-multiselectable", ctx_r4.multiple)("aria-label", ctx_r4.ariaLabel || null)("aria-labelledby", ctx_r4._getPanelAriaLabelledby());
  }
}
const _c2 = [[["mat-select-trigger"]], "*"];
const _c3 = ["mat-select-trigger", "*"];
const matSelectAnimations = {
  /**
   * This animation ensures the select's overlay panel animation (transformPanel) is called when
   * closing the select.
   * This is needed due to https://github.com/angular/angular/issues/23302
   */
  transformPanelWrap: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('transformPanelWrap', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.query)('@transformPanel', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animateChild)()], {
    optional: true
  }))]),
  /** This animation transforms the select's overlay panel on and off the page. */
  transformPanel: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('transformPanel', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
    opacity: 0,
    transform: 'scale(1, 0.8)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('void => showing', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
    opacity: 1,
    transform: 'scale(1, 1)'
  }))), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
    opacity: 0
  })))])
};

// Note that these have been copied over verbatim from
// `material/select` so that we don't have to expose them publicly.
/**
 * Returns an exception to be thrown when attempting to change a select's `multiple` option
 * after initialization.
 * @docs-private
 */
function getMatSelectDynamicMultipleError() {
  return Error('Cannot change `multiple` mode of select after initialization.');
}
/**
 * Returns an exception to be thrown when attempting to assign a non-array value to a select
 * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
 * resetting the value.
 * @docs-private
 */
function getMatSelectNonArrayValueError() {
  return Error('Value must be an array in multiple-selection mode.');
}
/**
 * Returns an exception to be thrown when assigning a non-function value to the comparator
 * used to determine if a value corresponds to an option. Note that whether the function
 * actually takes two values and returns a boolean is not checked.
 */
function getMatSelectNonFunctionValueError() {
  return Error('`compareWith` must be a function.');
}
let nextUniqueId = 0;
/** Injection token that determines the scroll handling while a select is open. */
const MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('mat-select-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    const overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay);
    return () => overlay.scrollStrategies.reposition();
  }
});
/** @docs-private */
function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
/** Injection token that can be used to provide the default options the select module. */
const MAT_SELECT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('MAT_SELECT_CONFIG');
/** @docs-private */
const MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_SELECT_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay],
  useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
};
/**
 * Injection token that can be used to reference instances of `MatSelectTrigger`. It serves as
 * alternative token to the actual `MatSelectTrigger` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_SELECT_TRIGGER = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('MatSelectTrigger');
/** Change event object that is emitted when the select value has changed. */
class MatSelectChange {
  constructor( /** Reference to the select that emitted the change event. */
  source, /** Current value of the select that emitted the event. */
  value) {
    this.source = source;
    this.value = value;
  }
}
class MatSelect {
  /** Scrolls a particular option into the view. */
  _scrollOptionIntoView(index) {
    const option = this.options.toArray()[index];
    if (option) {
      const panel = this.panel.nativeElement;
      const labelCount = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__._countGroupLabelsBeforeOption)(index, this.options, this.optionGroups);
      const element = option._getHostElement();
      if (index === 0 && labelCount === 1) {
        // If we've got one group label before the option and we're at the top option,
        // scroll the list to the top. This is better UX than scrolling the list to the
        // top of the option, because it allows the user to read the top group's label.
        panel.scrollTop = 0;
      } else {
        panel.scrollTop = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__._getOptionScrollPosition)(element.offsetTop, element.offsetHeight, panel.scrollTop, panel.offsetHeight);
      }
    }
  }
  /** Called when the panel has been opened and the overlay has settled on its final position. */
  _positioningSettled() {
    this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
  }
  /** Creates a change event object that should be emitted by the select. */
  _getChangeEvent(value) {
    return new MatSelectChange(this, value);
  }
  /** Whether the select is focused. */
  get focused() {
    return this._focused || this._panelOpen;
  }
  /** Whether checkmark indicator for single-selection options is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._syncParentProperties();
  }
  /** Placeholder to be shown if no value has been selected. */
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  /** Whether the component is required. */
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required) ?? false;
  }
  set required(value) {
    this._required = value;
    this.stateChanges.next();
  }
  /** Whether the user should be allowed to select multiple options. */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    if (this._selectionModel && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatSelectDynamicMultipleError();
    }
    this._multiple = value;
  }
  /**
   * Function to compare the option values with the selected values. The first argument
   * is a value from an option. The second is a value from the selection. A boolean
   * should be returned.
   */
  get compareWith() {
    return this._compareWith;
  }
  set compareWith(fn) {
    if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatSelectNonFunctionValueError();
    }
    this._compareWith = fn;
    if (this._selectionModel) {
      // A different comparator means the selection could change.
      this._initializeSelection();
    }
  }
  /** Value of the select control. */
  get value() {
    return this._value;
  }
  set value(newValue) {
    const hasAssigned = this._assignValue(newValue);
    if (hasAssigned) {
      this._onChange(newValue);
    }
  }
  /** Object used to control when error messages are shown. */
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  /** Unique id of the element. */
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || this._uid;
    this.stateChanges.next();
  }
  /** Whether the select is in an error state. */
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  constructor(_viewportRuler, _changeDetectorRef, _ngZone, defaultErrorStateMatcher, _elementRef, _dir, parentForm, parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer, _defaultOptions) {
    this._viewportRuler = _viewportRuler;
    this._changeDetectorRef = _changeDetectorRef;
    this._ngZone = _ngZone;
    this._elementRef = _elementRef;
    this._dir = _dir;
    this._parentFormField = _parentFormField;
    this.ngControl = ngControl;
    this._liveAnnouncer = _liveAnnouncer;
    this._defaultOptions = _defaultOptions;
    /**
     * This position config ensures that the top "start" corner of the overlay
     * is aligned with with the top "start" of the origin by default (overlapping
     * the trigger completely). If the panel cannot fit below the trigger, it
     * will fall back to a position above the trigger.
     */
    this._positions = [{
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top'
    }, {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom',
      panelClass: 'mat-mdc-select-panel-above'
    }, {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom',
      panelClass: 'mat-mdc-select-panel-above'
    }];
    /** Whether or not the overlay panel is open. */
    this._panelOpen = false;
    /** Comparison function to specify which option is displayed. Defaults to object equality. */
    this._compareWith = (o1, o2) => o1 === o2;
    /** Unique id for this input. */
    this._uid = `mat-select-${nextUniqueId++}`;
    /** Current `aria-labelledby` value for the select trigger. */
    this._triggerAriaLabelledBy = null;
    /** Emits whenever the component is destroyed. */
    this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    /**
     * Emits whenever the component state changes and should cause the parent
     * form-field to update. Implemented as part of `MatFormFieldControl`.
     * @docs-private
     */
    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    /** `View -> model callback called when value changes` */
    this._onChange = () => {};
    /** `View -> model callback called when select has been touched` */
    this._onTouched = () => {};
    /** ID for the DOM node containing the select's value. */
    this._valueId = `mat-select-value-${nextUniqueId++}`;
    /** Emits when the panel element is finished transforming in. */
    this._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this._overlayPanelClass = this._defaultOptions?.overlayPanelClass || '';
    this._focused = false;
    /** A name for this control that can be used by `mat-form-field`. */
    this.controlType = 'mat-select';
    /** Whether the select is disabled. */
    this.disabled = false;
    /** Whether ripples in the select are disabled. */
    this.disableRipple = false;
    /** Tab index of the select. */
    this.tabIndex = 0;
    this._hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
    this._multiple = false;
    /** Whether to center the active option over the trigger. */
    this.disableOptionCentering = this._defaultOptions?.disableOptionCentering ?? false;
    /** Aria label of the select. */
    this.ariaLabel = '';
    /**
     * Width of the panel. If set to `auto`, the panel will match the trigger width.
     * If set to null or an empty string, the panel will grow to match the longest option's text.
     */
    this.panelWidth = this._defaultOptions && typeof this._defaultOptions.panelWidth !== 'undefined' ? this._defaultOptions.panelWidth : 'auto';
    /** Combined stream of all of the child options' change events. */
    this.optionSelectionChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.defer)(() => {
      const options = this.options;
      if (options) {
        return options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(options), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(...options.map(option => option.onSelectionChange))));
      }
      return this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => this.optionSelectionChanges));
    });
    /** Event emitted when the select panel has been toggled. */
    this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /** Event emitted when the select has been opened. */
    this._openedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(o => o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(() => {}));
    /** Event emitted when the select has been closed. */
    this._closedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(o => !o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(() => {}));
    /** Event emitted when the selected value has been changed by the user. */
    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Event that emits whenever the raw value of the select changes. This is here primarily
     * to facilitate the two-way binding for the `value` input.
     * @docs-private
     */
    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Track which modal we have modified the `aria-owns` attribute of. When the combobox trigger is
     * inside an aria-modal, we apply aria-owns to the parent modal with the `id` of the options
     * panel. Track the modal we have changed so we can undo the changes on destroy.
     */
    this._trackedModal = null;
    // `skipPredicate` determines if key manager should avoid putting a given option in the tab
    // order. Allow disabled list items to receive focus via keyboard to align with WAI ARIA
    // recommendation.
    //
    // Normally WAI ARIA's instructions are to exclude disabled items from the tab order, but it
    // makes a few exceptions for compound widgets.
    //
    // From [Developing a Keyboard Interface](
    // https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/):
    //   "For the following composite widget elements, keep them focusable when disabled: Options in a
    //   Listbox..."
    //
    // The user can focus disabled options using the keyboard, but the user cannot click disabled
    // options.
    this._skipPredicate = option => {
      if (this.panelOpen) {
        // Support keyboard focusing disabled options in an ARIA listbox.
        return false;
      }
      // When the panel is closed, skip over disabled options. Support options via the UP/DOWN arrow
      // keys on a closed select. ARIA listbox interaction pattern is less relevant when the panel is
      // closed.
      return option.disabled;
    };
    if (this.ngControl) {
      // Note: we provide the value accessor through here, instead of
      // the `providers` to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }
    // Note that we only want to set this when the defaults pass it in, otherwise it should
    // stay as `undefined` so that it falls back to the default in the key manager.
    if (_defaultOptions?.typeaheadDebounceInterval != null) {
      this.typeaheadDebounceInterval = _defaultOptions.typeaheadDebounceInterval;
    }
    this._errorStateTracker = new _angular_material_core__WEBPACK_IMPORTED_MODULE_0__._ErrorStateTracker(defaultErrorStateMatcher, ngControl, parentFormGroup, parentForm, this.stateChanges);
    this._scrollStrategyFactory = scrollStrategyFactory;
    this._scrollStrategy = this._scrollStrategyFactory();
    this.tabIndex = parseInt(tabIndex) || 0;
    // Force setter to be called in case id was not specified.
    this.id = this.id;
  }
  ngOnInit() {
    this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__.SelectionModel(this.multiple);
    this.stateChanges.next();
    // We need `distinctUntilChanged` here, because some browsers will
    // fire the animation end event twice for the same animation. See:
    // https://github.com/angular/angular/issues/24084
    this._panelDoneAnimatingStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroy)).subscribe(() => this._panelDoneAnimating(this.panelOpen));
    this._viewportRuler.change().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroy)).subscribe(() => {
      if (this.panelOpen) {
        this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
        this._changeDetectorRef.detectChanges();
      }
    });
  }
  ngAfterContentInit() {
    this._initKeyManager();
    this._selectionModel.changed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroy)).subscribe(event => {
      event.added.forEach(option => option.select());
      event.removed.forEach(option => option.deselect());
    });
    this.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroy)).subscribe(() => {
      this._resetOptions();
      this._initializeSelection();
    });
  }
  ngDoCheck() {
    const newAriaLabelledby = this._getTriggerAriaLabelledby();
    const ngControl = this.ngControl;
    // We have to manage setting the `aria-labelledby` ourselves, because part of its value
    // is computed as a result of a content query which can cause this binding to trigger a
    // "changed after checked" error.
    if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
      const element = this._elementRef.nativeElement;
      this._triggerAriaLabelledBy = newAriaLabelledby;
      if (newAriaLabelledby) {
        element.setAttribute('aria-labelledby', newAriaLabelledby);
      } else {
        element.removeAttribute('aria-labelledby');
      }
    }
    if (ngControl) {
      // The disabled state might go out of sync if the form group is swapped out. See #17860.
      if (this._previousControl !== ngControl.control) {
        if (this._previousControl !== undefined && ngControl.disabled !== null && ngControl.disabled !== this.disabled) {
          this.disabled = ngControl.disabled;
        }
        this._previousControl = ngControl.control;
      }
      this.updateErrorState();
    }
  }
  ngOnChanges(changes) {
    // Updating the disabled state is handled by the input, but we need to additionally let
    // the parent form field know to run change detection when the disabled state changes.
    if (changes['disabled'] || changes['userAriaDescribedBy']) {
      this.stateChanges.next();
    }
    if (changes['typeaheadDebounceInterval'] && this._keyManager) {
      this._keyManager.withTypeAhead(this.typeaheadDebounceInterval);
    }
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._destroy.next();
    this._destroy.complete();
    this.stateChanges.complete();
    this._clearFromModal();
  }
  /** Toggles the overlay panel open or closed. */
  toggle() {
    this.panelOpen ? this.close() : this.open();
  }
  /** Opens the overlay panel. */
  open() {
    if (!this._canOpen()) {
      return;
    }
    // It's important that we read this as late as possible, because doing so earlier will
    // return a different element since it's based on queries in the form field which may
    // not have run yet. Also this needs to be assigned before we measure the overlay width.
    if (this._parentFormField) {
      this._preferredOverlayOrigin = this._parentFormField.getConnectedOverlayOrigin();
    }
    this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
    this._applyModalPanelOwnership();
    this._panelOpen = true;
    this._keyManager.withHorizontalOrientation(null);
    this._highlightCorrectOption();
    this._changeDetectorRef.markForCheck();
    // Required for the MDC form field to pick up when the overlay has been opened.
    this.stateChanges.next();
  }
  /**
   * If the autocomplete trigger is inside of an `aria-modal` element, connect
   * that modal to the options panel with `aria-owns`.
   *
   * For some browser + screen reader combinations, when navigation is inside
   * of an `aria-modal` element, the screen reader treats everything outside
   * of that modal as hidden or invisible.
   *
   * This causes a problem when the combobox trigger is _inside_ of a modal, because the
   * options panel is rendered _outside_ of that modal, preventing screen reader navigation
   * from reaching the panel.
   *
   * We can work around this issue by applying `aria-owns` to the modal with the `id` of
   * the options panel. This effectively communicates to assistive technology that the
   * options panel is part of the same interaction as the modal.
   *
   * At time of this writing, this issue is present in VoiceOver.
   * See https://github.com/angular/components/issues/20694
   */
  _applyModalPanelOwnership() {
    // TODO(http://github.com/angular/components/issues/26853): consider de-duplicating this with
    // the `LiveAnnouncer` and any other usages.
    //
    // Note that the selector here is limited to CDK overlays at the moment in order to reduce the
    // section of the DOM we need to look through. This should cover all the cases we support, but
    // the selector can be expanded if it turns out to be too narrow.
    const modal = this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');
    if (!modal) {
      // Most commonly, the autocomplete trigger is not inside a modal.
      return;
    }
    const panelId = `${this.id}-panel`;
    if (this._trackedModal) {
      (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.removeAriaReferencedId)(this._trackedModal, 'aria-owns', panelId);
    }
    (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.addAriaReferencedId)(modal, 'aria-owns', panelId);
    this._trackedModal = modal;
  }
  /** Clears the reference to the listbox overlay element from the modal it was added to. */
  _clearFromModal() {
    if (!this._trackedModal) {
      // Most commonly, the autocomplete trigger is not used inside a modal.
      return;
    }
    const panelId = `${this.id}-panel`;
    (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.removeAriaReferencedId)(this._trackedModal, 'aria-owns', panelId);
    this._trackedModal = null;
  }
  /** Closes the overlay panel and focuses the host element. */
  close() {
    if (this._panelOpen) {
      this._panelOpen = false;
      this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');
      this._changeDetectorRef.markForCheck();
      this._onTouched();
      // Required for the MDC form field to pick up when the overlay has been closed.
      this.stateChanges.next();
    }
  }
  /**
   * Sets the select's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
   */
  writeValue(value) {
    this._assignValue(value);
  }
  /**
   * Saves a callback function to be invoked when the select's value
   * changes from user input. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the value changes.
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Saves a callback function to be invoked when the select is blurred
   * by the user. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the component has been touched.
   */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /**
   * Disables the select. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param isDisabled Sets whether the component is disabled.
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }
  /** Whether or not the overlay panel is open. */
  get panelOpen() {
    return this._panelOpen;
  }
  /** The currently selected option. */
  get selected() {
    return this.multiple ? this._selectionModel?.selected || [] : this._selectionModel?.selected[0];
  }
  /** The value displayed in the trigger. */
  get triggerValue() {
    if (this.empty) {
      return '';
    }
    if (this._multiple) {
      const selectedOptions = this._selectionModel.selected.map(option => option.viewValue);
      if (this._isRtl()) {
        selectedOptions.reverse();
      }
      // TODO(crisbeto): delimiter should be configurable for proper localization.
      return selectedOptions.join(', ');
    }
    return this._selectionModel.selected[0].viewValue;
  }
  /** Refreshes the error state of the select. */
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  /** Whether the element is in RTL mode. */
  _isRtl() {
    return this._dir ? this._dir.value === 'rtl' : false;
  }
  /** Handles all keydown events on the select. */
  _handleKeydown(event) {
    if (!this.disabled) {
      this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
    }
  }
  /** Handles keyboard events while the select is closed. */
  _handleClosedKeydown(event) {
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.DOWN_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.LEFT_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.RIGHT_ARROW;
    const isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.SPACE;
    const manager = this._keyManager;
    // Open the select on ALT + arrow key to match the native <select>
    if (!manager.isTyping() && isOpenKey && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.hasModifierKey)(event) || (this.multiple || event.altKey) && isArrowKey) {
      event.preventDefault(); // prevents the page from scrolling down when pressing space
      this.open();
    } else if (!this.multiple) {
      const previouslySelectedOption = this.selected;
      manager.onKeydown(event);
      const selectedOption = this.selected;
      // Since the value has changed, we need to announce it ourselves.
      if (selectedOption && previouslySelectedOption !== selectedOption) {
        // We set a duration on the live announcement, because we want the live element to be
        // cleared after a while so that users can't navigate to it using the arrow keys.
        this._liveAnnouncer.announce(selectedOption.viewValue, 10000);
      }
    }
  }
  /** Handles keyboard events when the selected is open. */
  _handleOpenKeydown(event) {
    const manager = this._keyManager;
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.DOWN_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.UP_ARROW;
    const isTyping = manager.isTyping();
    if (isArrowKey && event.altKey) {
      // Close the select on ALT + arrow key to match the native <select>
      event.preventDefault();
      this.close();
      // Don't do anything in this case if the user is typing,
      // because the typing sequence can include the space key.
    } else if (!isTyping && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.SPACE) && manager.activeItem && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.hasModifierKey)(event)) {
      event.preventDefault();
      manager.activeItem._selectViaInteraction();
    } else if (!isTyping && this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.A && event.ctrlKey) {
      event.preventDefault();
      const hasDeselectedOptions = this.options.some(opt => !opt.disabled && !opt.selected);
      this.options.forEach(option => {
        if (!option.disabled) {
          hasDeselectedOptions ? option.select() : option.deselect();
        }
      });
    } else {
      const previouslyFocusedIndex = manager.activeItemIndex;
      manager.onKeydown(event);
      if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
        manager.activeItem._selectViaInteraction();
      }
    }
  }
  _onFocus() {
    if (!this.disabled) {
      this._focused = true;
      this.stateChanges.next();
    }
  }
  /**
   * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
   * "blur" to the panel when it opens, causing a false positive.
   */
  _onBlur() {
    this._focused = false;
    this._keyManager?.cancelTypeahead();
    if (!this.disabled && !this.panelOpen) {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
      this.stateChanges.next();
    }
  }
  /**
   * Callback that is invoked when the overlay panel has been attached.
   */
  _onAttached() {
    this._overlayDir.positionChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
      this._changeDetectorRef.detectChanges();
      this._positioningSettled();
    });
  }
  /** Returns the theme to be used on the panel. */
  _getPanelTheme() {
    return this._parentFormField ? `mat-${this._parentFormField.color}` : '';
  }
  /** Whether the select has a value. */
  get empty() {
    return !this._selectionModel || this._selectionModel.isEmpty();
  }
  _initializeSelection() {
    // Defer setting the value in order to avoid the "Expression
    // has changed after it was checked" errors from Angular.
    Promise.resolve().then(() => {
      if (this.ngControl) {
        this._value = this.ngControl.value;
      }
      this._setSelectionByValue(this._value);
      this.stateChanges.next();
    });
  }
  /**
   * Sets the selected option based on a value. If no option can be
   * found with the designated value, the select trigger is cleared.
   */
  _setSelectionByValue(value) {
    this.options.forEach(option => option.setInactiveStyles());
    this._selectionModel.clear();
    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatSelectNonArrayValueError();
      }
      value.forEach(currentValue => this._selectOptionByValue(currentValue));
      this._sortValues();
    } else {
      const correspondingOption = this._selectOptionByValue(value);
      // Shift focus to the active item. Note that we shouldn't do this in multiple
      // mode, because we don't know what option the user interacted with last.
      if (correspondingOption) {
        this._keyManager.updateActiveItem(correspondingOption);
      } else if (!this.panelOpen) {
        // Otherwise reset the highlighted option. Note that we only want to do this while
        // closed, because doing it while open can shift the user's focus unnecessarily.
        this._keyManager.updateActiveItem(-1);
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Finds and selects and option based on its value.
   * @returns Option that has the corresponding value.
   */
  _selectOptionByValue(value) {
    const correspondingOption = this.options.find(option => {
      // Skip options that are already in the model. This allows us to handle cases
      // where the same primitive value is selected multiple times.
      if (this._selectionModel.isSelected(option)) {
        return false;
      }
      try {
        // Treat null as a special reset value.
        return option.value != null && this._compareWith(option.value, value);
      } catch (error) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          // Notify developers of errors in their comparator.
          console.warn(error);
        }
        return false;
      }
    });
    if (correspondingOption) {
      this._selectionModel.select(correspondingOption);
    }
    return correspondingOption;
  }
  /** Assigns a specific value to the select. Returns whether the value has changed. */
  _assignValue(newValue) {
    // Always re-assign an array, because it might have been mutated.
    if (newValue !== this._value || this._multiple && Array.isArray(newValue)) {
      if (this.options) {
        this._setSelectionByValue(newValue);
      }
      this._value = newValue;
      return true;
    }
    return false;
  }
  /** Gets how wide the overlay panel should be. */
  _getOverlayWidth(preferredOrigin) {
    if (this.panelWidth === 'auto') {
      const refToMeasure = preferredOrigin instanceof _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.CdkOverlayOrigin ? preferredOrigin.elementRef : preferredOrigin || this._elementRef;
      return refToMeasure.nativeElement.getBoundingClientRect().width;
    }
    return this.panelWidth === null ? '' : this.panelWidth;
  }
  /** Syncs the parent state with the individual options. */
  _syncParentProperties() {
    if (this.options) {
      for (const option of this.options) {
        option._changeDetectorRef.markForCheck();
      }
    }
  }
  /** Sets up a key manager to listen to keyboard events on the overlay panel. */
  _initKeyManager() {
    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.ActiveDescendantKeyManager(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr').withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(['shiftKey']).skipPredicate(this._skipPredicate);
    this._keyManager.tabOut.subscribe(() => {
      if (this.panelOpen) {
        // Select the active item when tabbing away. This is consistent with how the native
        // select behaves. Note that we only want to do this in single selection mode.
        if (!this.multiple && this._keyManager.activeItem) {
          this._keyManager.activeItem._selectViaInteraction();
        }
        // Restore focus to the trigger before closing. Ensures that the focus
        // position won't be lost if the user got focus into the overlay.
        this.focus();
        this.close();
      }
    });
    this._keyManager.change.subscribe(() => {
      if (this._panelOpen && this.panel) {
        this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
      } else if (!this._panelOpen && !this.multiple && this._keyManager.activeItem) {
        this._keyManager.activeItem._selectViaInteraction();
      }
    });
  }
  /** Drops current option subscriptions and IDs and resets from scratch. */
  _resetOptions() {
    const changedOrDestroyed = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(this.options.changes, this._destroy);
    this.optionSelectionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(changedOrDestroyed)).subscribe(event => {
      this._onSelect(event.source, event.isUserInput);
      if (event.isUserInput && !this.multiple && this._panelOpen) {
        this.close();
        this.focus();
      }
    });
    // Listen to changes in the internal state of the options and react accordingly.
    // Handles cases like the labels of the selected options changing.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(...this.options.map(option => option._stateChanges)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(changedOrDestroyed)).subscribe(() => {
      // `_stateChanges` can fire as a result of a change in the label's DOM value which may
      // be the result of an expression changing. We have to use `detectChanges` in order
      // to avoid "changed after checked" errors (see #14793).
      this._changeDetectorRef.detectChanges();
      this.stateChanges.next();
    });
  }
  /** Invoked when an option is clicked. */
  _onSelect(option, isUserInput) {
    const wasSelected = this._selectionModel.isSelected(option);
    if (option.value == null && !this._multiple) {
      option.deselect();
      this._selectionModel.clear();
      if (this.value != null) {
        this._propagateChanges(option.value);
      }
    } else {
      if (wasSelected !== option.selected) {
        option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
      }
      if (isUserInput) {
        this._keyManager.setActiveItem(option);
      }
      if (this.multiple) {
        this._sortValues();
        if (isUserInput) {
          // In case the user selected the option with their mouse, we
          // want to restore focus back to the trigger, in order to
          // prevent the select keyboard controls from clashing with
          // the ones from `mat-option`.
          this.focus();
        }
      }
    }
    if (wasSelected !== this._selectionModel.isSelected(option)) {
      this._propagateChanges();
    }
    this.stateChanges.next();
  }
  /** Sorts the selected values in the selected based on their order in the panel. */
  _sortValues() {
    if (this.multiple) {
      const options = this.options.toArray();
      this._selectionModel.sort((a, b) => {
        return this.sortComparator ? this.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
      });
      this.stateChanges.next();
    }
  }
  /** Emits change event to set the model value. */
  _propagateChanges(fallbackValue) {
    let valueToEmit;
    if (this.multiple) {
      valueToEmit = this.selected.map(option => option.value);
    } else {
      valueToEmit = this.selected ? this.selected.value : fallbackValue;
    }
    this._value = valueToEmit;
    this.valueChange.emit(valueToEmit);
    this._onChange(valueToEmit);
    this.selectionChange.emit(this._getChangeEvent(valueToEmit));
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Highlights the selected item. If no option is selected, it will highlight
   * the first *enabled* option.
   */
  _highlightCorrectOption() {
    if (this._keyManager) {
      if (this.empty) {
        // Find the index of the first *enabled* option. Avoid calling `_keyManager.setActiveItem`
        // because it activates the first option that passes the skip predicate, rather than the
        // first *enabled* option.
        let firstEnabledOptionIndex = -1;
        for (let index = 0; index < this.options.length; index++) {
          const option = this.options.get(index);
          if (!option.disabled) {
            firstEnabledOptionIndex = index;
            break;
          }
        }
        this._keyManager.setActiveItem(firstEnabledOptionIndex);
      } else {
        this._keyManager.setActiveItem(this._selectionModel.selected[0]);
      }
    }
  }
  /** Whether the panel is allowed to open. */
  _canOpen() {
    return !this._panelOpen && !this.disabled && this.options?.length > 0;
  }
  /** Focuses the select element. */
  focus(options) {
    this._elementRef.nativeElement.focus(options);
  }
  /** Gets the aria-labelledby for the select panel. */
  _getPanelAriaLabelledby() {
    if (this.ariaLabel) {
      return null;
    }
    const labelId = this._parentFormField?.getLabelId();
    const labelExpression = labelId ? labelId + ' ' : '';
    return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
  }
  /** Determines the `aria-activedescendant` to be set on the host. */
  _getAriaActiveDescendant() {
    if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
      return this._keyManager.activeItem.id;
    }
    return null;
  }
  /** Gets the aria-labelledby of the select component trigger. */
  _getTriggerAriaLabelledby() {
    if (this.ariaLabel) {
      return null;
    }
    const labelId = this._parentFormField?.getLabelId();
    let value = (labelId ? labelId + ' ' : '') + this._valueId;
    if (this.ariaLabelledby) {
      value += ' ' + this.ariaLabelledby;
    }
    return value;
  }
  /** Called when the overlay panel is done animating. */
  _panelDoneAnimating(isOpen) {
    this.openedChange.emit(isOpen);
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  setDescribedByIds(ids) {
    if (ids.length) {
      this._elementRef.nativeElement.setAttribute('aria-describedby', ids.join(' '));
    } else {
      this._elementRef.nativeElement.removeAttribute('aria-describedby');
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  onContainerClick() {
    this.focus();
    this.open();
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get shouldLabelFloat() {
    // Since the panel doesn't overlap the trigger, we
    // want the label to only float when there's a value.
    return this.panelOpen || !this.empty || this.focused && !!this.placeholder;
  }
  static #_ = this.ɵfac = function MatSelect_Factory(t) {
    return new (t || MatSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MAT_FORM_FIELD, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_SELECT_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_SELECT_CONFIG, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MatSelect,
    selectors: [["mat-select"]],
    contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_SELECT_TRIGGER, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatOption, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MAT_OPTGROUP, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.options = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
      }
    },
    viewQuery: function MatSelect_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.CdkConnectedOverlay, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._overlayDir = _t.first);
      }
    },
    hostAttrs: ["role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "listbox", 1, "mat-mdc-select"],
    hostVars: 19,
    hostBindings: function MatSelect_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function MatSelect_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        })("focus", function MatSelect_focus_HostBindingHandler() {
          return ctx._onFocus();
        })("blur", function MatSelect_blur_HostBindingHandler() {
          return ctx._onBlur();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-controls", ctx.panelOpen ? ctx.id + "-panel" : null)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-activedescendant", ctx._getAriaActiveDescendant());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-mdc-select-disabled", ctx.disabled)("mat-mdc-select-invalid", ctx.errorState)("mat-mdc-select-required", ctx.required)("mat-mdc-select-empty", ctx.empty)("mat-mdc-select-multiple", ctx.multiple);
      }
    },
    inputs: {
      userAriaDescribedBy: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputFlags"].None, "aria-describedby", "userAriaDescribedBy"],
      panelClass: "panelClass",
      disabled: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputFlags"].HasDecoratorInputTransform, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
      disableRipple: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputFlags"].HasDecoratorInputTransform, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
      tabIndex: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputFlags"].HasDecoratorInputTransform, "tabIndex", "tabIndex", value => value == null ? 0 : (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.numberAttribute)(value)],
      hideSingleSelectionIndicator: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputFlags"].HasDecoratorInputTransform, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
      placeholder: "placeholder",
      required: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputFlags"].HasDecoratorInputTransform, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
      multiple: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputFlags"].HasDecoratorInputTransform, "multiple", "multiple", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
      disableOptionCentering: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputFlags"].HasDecoratorInputTransform, "disableOptionCentering", "disableOptionCentering", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
      compareWith: "compareWith",
      value: "value",
      ariaLabel: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputFlags"].None, "aria-label", "ariaLabel"],
      ariaLabelledby: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputFlags"].None, "aria-labelledby", "ariaLabelledby"],
      errorStateMatcher: "errorStateMatcher",
      typeaheadDebounceInterval: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputFlags"].HasDecoratorInputTransform, "typeaheadDebounceInterval", "typeaheadDebounceInterval", _angular_core__WEBPACK_IMPORTED_MODULE_2__.numberAttribute],
      sortComparator: "sortComparator",
      id: "id",
      panelWidth: "panelWidth"
    },
    outputs: {
      openedChange: "openedChange",
      _openedStream: "opened",
      _closedStream: "closed",
      selectionChange: "selectionChange",
      valueChange: "valueChange"
    },
    exportAs: ["matSelect"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldControl,
      useExisting: MatSelect
    }, {
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MAT_OPTION_PARENT_COMPONENT,
      useExisting: MatSelect
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c3,
    decls: 11,
    vars: 8,
    consts: [["cdk-overlay-origin", "", 1, "mat-mdc-select-trigger", 3, "click"], ["fallbackOverlayOrigin", "cdkOverlayOrigin", "trigger", ""], [1, "mat-mdc-select-value"], ["class", "mat-mdc-select-placeholder mat-mdc-select-min-line"], [1, "mat-mdc-select-arrow-wrapper"], [1, "mat-mdc-select-arrow"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "focusable", "false", "aria-hidden", "true"], ["d", "M7 10l5 5 5-5z"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayWidth", "backdropClick", "attach", "detach"], [1, "mat-mdc-select-placeholder", "mat-mdc-select-min-line"], [1, "mat-mdc-select-value-text"], [1, "mat-mdc-select-min-line"], ["role", "listbox", "tabindex", "-1", 3, "ngClass", "keydown"], ["panel", ""]],
    template: function MatSelect_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatSelect_Template_div_click_0_listener() {
          return ctx.open();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatSelect_Conditional_4_Template, 2, 1, "span", 3)(5, MatSelect_Conditional_5_Template, 3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MatSelect_ng_template_10_Template, 3, 9, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("backdropClick", function MatSelect_Template_ng_template_backdropClick_10_listener() {
          return ctx.close();
        })("attach", function MatSelect_Template_ng_template_attach_10_listener() {
          return ctx._onAttached();
        })("detach", function MatSelect_Template_ng_template_detach_10_listener() {
          return ctx.close();
        });
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx._valueId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](4, ctx.empty ? 4 : 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkConnectedOverlayPanelClass", ctx._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", ctx._preferredOverlayOrigin || _r0)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayWidth", ctx._overlayWidth);
      }
    },
    dependencies: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.CdkOverlayOrigin, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.CdkConnectedOverlay, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass],
    styles: [".mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color);font-family:var(--mat-select-trigger-text-font);line-height:var(--mat-select-trigger-text-line-height);font-size:var(--mat-select-trigger-text-size);font-weight:var(--mat-select-trigger-text-weight);letter-spacing:var(--mat-select-trigger-text-tracking)}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow)}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color)}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color)}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color)}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color)}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color)}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-select-panel-background-color)}.cdk-high-contrast-active div.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}div.mat-mdc-select-panel .mat-mdc-option{--mdc-list-list-item-container-color: var(--mat-select-panel-background-color)}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:\" \";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform)}"],
    encapsulation: 2,
    data: {
      animation: [matSelectAnimations.transformPanel]
    },
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelect, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mat-select',
      exportAs: 'matSelect',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
      host: {
        'role': 'combobox',
        'aria-autocomplete': 'none',
        'aria-haspopup': 'listbox',
        'class': 'mat-mdc-select',
        '[attr.id]': 'id',
        '[attr.tabindex]': 'disabled ? -1 : tabIndex',
        '[attr.aria-controls]': 'panelOpen ? id + "-panel" : null',
        '[attr.aria-expanded]': 'panelOpen',
        '[attr.aria-label]': 'ariaLabel || null',
        '[attr.aria-required]': 'required.toString()',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[attr.aria-invalid]': 'errorState',
        '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
        '[class.mat-mdc-select-disabled]': 'disabled',
        '[class.mat-mdc-select-invalid]': 'errorState',
        '[class.mat-mdc-select-required]': 'required',
        '[class.mat-mdc-select-empty]': 'empty',
        '[class.mat-mdc-select-multiple]': 'multiple',
        '(keydown)': '_handleKeydown($event)',
        '(focus)': '_onFocus()',
        '(blur)': '_onBlur()'
      },
      animations: [matSelectAnimations.transformPanel],
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldControl,
        useExisting: MatSelect
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatSelect
      }],
      standalone: true,
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.CdkOverlayOrigin, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.CdkConnectedOverlay, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass],
      template: "<div cdk-overlay-origin\n     class=\"mat-mdc-select-trigger\"\n     (click)=\"open()\"\n     #fallbackOverlayOrigin=\"cdkOverlayOrigin\"\n     #trigger>\n\n  <div class=\"mat-mdc-select-value\" [attr.id]=\"_valueId\">\n    @if (empty) {\n      <span class=\"mat-mdc-select-placeholder mat-mdc-select-min-line\">{{placeholder}}</span>\n    } @else {\n      <span class=\"mat-mdc-select-value-text\">\n        @if (customTrigger) {\n          <ng-content select=\"mat-select-trigger\"></ng-content>\n        } @else {\n          <span class=\"mat-mdc-select-min-line\">{{triggerValue}}</span>\n        }\n      </span>\n    }\n  </div>\n\n  <div class=\"mat-mdc-select-arrow-wrapper\">\n    <div class=\"mat-mdc-select-arrow\">\n      <!-- Use an inline SVG, because it works better than a CSS triangle in high contrast mode. -->\n      <svg viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\" focusable=\"false\" aria-hidden=\"true\">\n        <path d=\"M7 10l5 5 5-5z\"/>\n      </svg>\n    </div>\n  </div>\n</div>\n\n<ng-template\n  cdk-connected-overlay\n  cdkConnectedOverlayLockPosition\n  cdkConnectedOverlayHasBackdrop\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\n  [cdkConnectedOverlayPanelClass]=\"_overlayPanelClass\"\n  [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\"\n  [cdkConnectedOverlayOrigin]=\"_preferredOverlayOrigin || fallbackOverlayOrigin\"\n  [cdkConnectedOverlayOpen]=\"panelOpen\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayWidth]=\"_overlayWidth\"\n  (backdropClick)=\"close()\"\n  (attach)=\"_onAttached()\"\n  (detach)=\"close()\">\n  <div\n    #panel\n    role=\"listbox\"\n    tabindex=\"-1\"\n    class=\"mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open {{ _getPanelTheme() }}\"\n    [attr.id]=\"id + '-panel'\"\n    [attr.aria-multiselectable]=\"multiple\"\n    [attr.aria-label]=\"ariaLabel || null\"\n    [attr.aria-labelledby]=\"_getPanelAriaLabelledby()\"\n    [ngClass]=\"panelClass\"\n    [@transformPanel]=\"'showing'\"\n    (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\"\n    (keydown)=\"_handleKeydown($event)\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
      styles: [".mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color);font-family:var(--mat-select-trigger-text-font);line-height:var(--mat-select-trigger-text-line-height);font-size:var(--mat-select-trigger-text-size);font-weight:var(--mat-select-trigger-text-weight);letter-spacing:var(--mat-select-trigger-text-tracking)}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow)}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color)}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color)}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color)}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color)}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color)}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-select-panel-background-color)}.cdk-high-contrast-active div.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}div.mat-mdc-select-panel .mat-mdc-option{--mdc-list-list-item-container-color: var(--mat-select-panel-background-color)}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:\" \";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform)}"]
    }]
  }], () => [{
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.ViewportRuler
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.ErrorStateMatcher
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
    }]
  }, {
    type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormField,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
      args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MAT_FORM_FIELD]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControl,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Self
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,
      args: ['tabindex']
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
      args: [MAT_SELECT_SCROLL_STRATEGY]
    }]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.LiveAnnouncer
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
      args: [MAT_SELECT_CONFIG]
    }]
  }], {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChildren,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatOption, {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChildren,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MAT_OPTGROUP, {
        descendants: true
      }]
    }],
    customTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChild,
      args: [MAT_SELECT_TRIGGER]
    }],
    userAriaDescribedBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['aria-describedby']
    }],
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['trigger']
    }],
    panel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['panel']
    }],
    _overlayDir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.CdkConnectedOverlay]
    }],
    panelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute
      }]
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute
      }]
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: [{
        transform: value => value == null ? 0 : (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.numberAttribute)(value)
      }]
    }],
    hideSingleSelectionIndicator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute
      }]
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute
      }]
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute
      }]
    }],
    disableOptionCentering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute
      }]
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['aria-labelledby']
    }],
    errorStateMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    typeaheadDebounceInterval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_2__.numberAttribute
      }]
    }],
    sortComparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    panelWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    openedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    _openedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output,
      args: ['opened']
    }],
    _closedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output,
      args: ['closed']
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();
/**
 * Allows the user to customize the trigger that is displayed when the select has a value.
 */
class MatSelectTrigger {
  static #_ = this.ɵfac = function MatSelectTrigger_Factory(t) {
    return new (t || MatSelectTrigger)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: MatSelectTrigger,
    selectors: [["mat-select-trigger"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: MAT_SELECT_TRIGGER,
      useExisting: MatSelectTrigger
    }])]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelectTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: 'mat-select-trigger',
      providers: [{
        provide: MAT_SELECT_TRIGGER,
        useExisting: MatSelectTrigger
      }],
      standalone: true
    }]
  }], null, null);
})();
class MatSelectModule {
  static #_ = this.ɵfac = function MatSelectModule_Factory(t) {
    return new (t || MatSelectModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: MatSelectModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.CdkScrollableModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule, MatSelect, MatSelectTrigger],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.CdkScrollableModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
      providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_pages_example_index_ts.js.map