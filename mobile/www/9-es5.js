function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9], {
  /***/"./node_modules/@ionic/core/dist/esm/ion-chip.entry.js": (
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-chip.entry.js ***!
    \*************************************************************/
  /*! exports provided: ion_chip */
  /***/
  function _node_modules_Ionic_core_dist_esm_ionChipEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ion_chip", function () {
      return Chip;
    });
    /* harmony import */
    var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */"./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
    /* harmony import */
    var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */"./node_modules/@ionic/core/dist/esm/ionic-global-63a97a32.js");
    /* harmony import */
    var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-ff3fc52f.js */"./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js");
    var chipIosCss = ":host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.87);border-radius:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:4px;margin-right:4px;margin-top:4px;margin-bottom:4px;padding-left:12px;padding-right:12px;padding-top:7px;padding-bottom:7px;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;height:32px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:14px;line-height:1;cursor:pointer;overflow:hidden;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:4px;margin-inline-end:4px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.chip-disabled){cursor:default;opacity:0.4;pointer-events:none}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.08);color:var(--ion-color-shade)}:host(.ion-color:focus){background:rgba(var(--ion-color-base-rgb), 0.12)}:host(.ion-color.ion-activated){background:rgba(var(--ion-color-base-rgb), 0.16)}:host(.chip-outline){border-width:1px;border-style:solid}:host(.chip-outline){border-color:rgba(0, 0, 0, 0.32);background:transparent}:host(.chip-outline.ion-color){border-color:rgba(var(--ion-color-base-rgb), 0.32)}:host(.chip-outline:not(.ion-color):focus){background:rgba(0, 0, 0, 0.04)}:host(.chip-outline.ion-activated:not(.ion-color)){background:rgba(0, 0, 0, 0.08)}::slotted(ion-icon){font-size:20px}:host(:not(.ion-color)) ::slotted(ion-icon){color:rgba(0, 0, 0, 0.54)}::slotted(ion-icon:first-child){margin-left:-4px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon:first-child){margin-left:unset;margin-right:unset;-webkit-margin-start:-4px;margin-inline-start:-4px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon:last-child){margin-left:8px;margin-right:-4px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon:last-child){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-4px;margin-inline-end:-4px}}::slotted(ion-avatar){width:24px;height:24px}::slotted(ion-avatar:first-child){margin-left:-8px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-avatar:first-child){margin-left:unset;margin-right:unset;-webkit-margin-start:-8px;margin-inline-start:-8px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-avatar:last-child){margin-left:8px;margin-right:-8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-avatar:last-child){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-8px;margin-inline-end:-8px}}:host(:focus){outline:none}:host(:focus){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.16)}:host(.ion-activated){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}@media (any-hover: hover){:host(:hover){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.16)}:host(.ion-color:hover){background:rgba(var(--ion-color-base-rgb), 0.12)}:host(.chip-outline:not(.ion-color):hover){background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.04)}}";
    var chipMdCss = ":host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.87);border-radius:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:4px;margin-right:4px;margin-top:4px;margin-bottom:4px;padding-left:12px;padding-right:12px;padding-top:7px;padding-bottom:7px;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;height:32px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:14px;line-height:1;cursor:pointer;overflow:hidden;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:4px;margin-inline-end:4px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.chip-disabled){cursor:default;opacity:0.4;pointer-events:none}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.08);color:var(--ion-color-shade)}:host(.ion-color:focus){background:rgba(var(--ion-color-base-rgb), 0.12)}:host(.ion-color.ion-activated){background:rgba(var(--ion-color-base-rgb), 0.16)}:host(.chip-outline){border-width:1px;border-style:solid}:host(.chip-outline){border-color:rgba(0, 0, 0, 0.32);background:transparent}:host(.chip-outline.ion-color){border-color:rgba(var(--ion-color-base-rgb), 0.32)}:host(.chip-outline:not(.ion-color):focus){background:rgba(0, 0, 0, 0.04)}:host(.chip-outline.ion-activated:not(.ion-color)){background:rgba(0, 0, 0, 0.08)}::slotted(ion-icon){font-size:20px}:host(:not(.ion-color)) ::slotted(ion-icon){color:rgba(0, 0, 0, 0.54)}::slotted(ion-icon:first-child){margin-left:-4px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon:first-child){margin-left:unset;margin-right:unset;-webkit-margin-start:-4px;margin-inline-start:-4px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon:last-child){margin-left:8px;margin-right:-4px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon:last-child){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-4px;margin-inline-end:-4px}}::slotted(ion-avatar){width:24px;height:24px}::slotted(ion-avatar:first-child){margin-left:-8px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-avatar:first-child){margin-left:unset;margin-right:unset;-webkit-margin-start:-8px;margin-inline-start:-8px;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-avatar:last-child){margin-left:8px;margin-right:-8px;margin-top:-4px;margin-bottom:-4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-avatar:last-child){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-8px;margin-inline-end:-8px}}:host(:focus){outline:none}:host(:focus){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.16)}:host(.ion-activated){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}@media (any-hover: hover){:host(:hover){--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.16)}:host(.ion-color:hover){background:rgba(var(--ion-color-base-rgb), 0.12)}:host(.chip-outline:not(.ion-color):hover){background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.04)}}";
    var Chip = /*#__PURE__*/function () {
      function Chip(hostRef) {
        _classCallCheck(this, Chip);
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Display an outline style button.
         */
        this.outline = false;
        /**
         * If `true`, the user cannot interact with the chip.
         */
        this.disabled = false;
      }
      return _createClass(Chip, [{
        key: "render",
        value: function render() {
          var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            "aria-disabled": this.disabled ? 'true' : null,
            "class": Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, mode, true), 'chip-outline', this.outline), 'chip-disabled', this.disabled), 'ion-activatable', true))
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), mode === 'md' && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null));
        }
      }]);
    }();
    Chip.style = {
      ios: chipIosCss,
      md: chipMdCss
    };

    /***/
  })
}]);
//# sourceMappingURL=9-es5.js.map