function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0], {
  /***/"./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js": (
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js ***!
    \*********************************************************************/
  /*! exports provided: ion_action_sheet */
  /***/
  function _node_modules_Ionic_core_dist_esm_ionActionSheetEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ion_action_sheet", function () {
      return ActionSheet;
    });
    /* harmony import */
    var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */"./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
    /* harmony import */
    var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */"./node_modules/@ionic/core/dist/esm/ionic-global-63a97a32.js");
    /* harmony import */
    var _button_active_d4bd4f74_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-active-d4bd4f74.js */"./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js");
    /* harmony import */
    var _overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlays-a62f858b.js */"./node_modules/@ionic/core/dist/esm/overlays-a62f858b.js");
    /* harmony import */
    var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-ff3fc52f.js */"./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js");
    /* harmony import */
    var _animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animation-822d986b.js */"./node_modules/@ionic/core/dist/esm/animation-822d986b.js");
    /* harmony import */
    var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./haptic-27b3f981.js */"./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
    /* harmony import */
    var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index-34cb2743.js */"./node_modules/@ionic/core/dist/esm/index-34cb2743.js");
    /* harmony import */
    var _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gesture-controller-31cb6bb9.js */"./node_modules/@ionic/core/dist/esm/gesture-controller-31cb6bb9.js");
    /* harmony import */
    var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hardware-back-button-4a6b37fb.js */"./node_modules/@ionic/core/dist/esm/hardware-back-button-4a6b37fb.js");
    /* harmony import */
    var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers-1457892a.js */"./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");

    /**
     * iOS Action Sheet Enter Animation
     */
    var iosEnterAnimation = function iosEnterAnimation(baseEl) {
      var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
        'pointer-events': 'none'
      }).afterClearStyles(['pointer-events']);
      wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(100%)', 'translateY(0%)');
      return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
    };

    /**
     * iOS Action Sheet Leave Animation
     */
    var iosLeaveAnimation = function iosLeaveAnimation(baseEl) {
      var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
      wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(0%)', 'translateY(100%)');
      return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(450).addAnimation([backdropAnimation, wrapperAnimation]);
    };

    /**
     * MD Action Sheet Enter Animation
     */
    var mdEnterAnimation = function mdEnterAnimation(baseEl) {
      var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
        'pointer-events': 'none'
      }).afterClearStyles(['pointer-events']);
      wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(100%)', 'translateY(0%)');
      return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
    };

    /**
     * MD Action Sheet Leave Animation
     */
    var mdLeaveAnimation = function mdLeaveAnimation(baseEl) {
      var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
      wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(0%)', 'translateY(100%)');
      return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(450).addAnimation([backdropAnimation, wrapperAnimation]);
    };
    var actionSheetIosCss = ".sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:var(--ion-safe-area-bottom, 0);-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-ios:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--backdrop-opacity:var(--ion-backdrop-opacity, 0.4);--button-background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color, #000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-color-step-150, var(--ion-background-color, #fff));--button-background-selected-opacity:1;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-400, #999999);text-align:center}.action-sheet-container.sc-ion-action-sheet-ios{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-container.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8))), -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background-image:linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);background-repeat:no-repeat;background-position:top, bottom;background-size:100% calc(100% - 1px), 100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent}.action-sheet-title.sc-ion-action-sheet-ios{padding-left:10px;padding-right:10px;padding-top:14px;padding-bottom:13px;color:var(--color, var(--ion-color-step-400, #999999));font-size:13px;font-weight:400;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.action-sheet-title.action-sheet-has-sub-title.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:6px;padding-bottom:0;font-size:13px;font-weight:400}.action-sheet-button.sc-ion-action-sheet-ios{padding-left:18px;padding-right:18px;padding-top:18px;padding-bottom:18px;height:56px;font-size:20px;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px}}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:0.3em;font-size:28px;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:unset;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:bold}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger, #eb445a)}@media (any-hover: hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger, #eb445a)}}";
    var actionSheetMdCss = ".sc-ion-action-sheet-md-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:var(--ion-safe-area-bottom, 0);-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-md{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}.action-sheet-selected.sc-ion-action-sheet-md{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-md::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-md:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-md:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);--button-background:transparent;--button-background-selected:currentColor;--button-background-selected-opacity:0;--button-background-activated:transparent;--button-background-activated-opacity:0;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-color:var(--ion-color-step-850, #262626);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}.action-sheet-title.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:17px;min-height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:16px;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:0}.action-sheet-button.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;font-size:16px;text-align:start;contain:strict;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-icon.sc-ion-action-sheet-md{padding-bottom:4px;margin-left:0;margin-right:32px;margin-top:0;margin-bottom:0;color:var(--color);font-size:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-icon.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px}}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}";
    var ActionSheet = /*#__PURE__*/function () {
      function ActionSheet(hostRef) {
        var _this = this;
        _classCallCheck(this, ActionSheet);
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.didPresent = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionActionSheetDidPresent", 7);
        this.willPresent = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionActionSheetWillPresent", 7);
        this.willDismiss = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionActionSheetWillDismiss", 7);
        this.didDismiss = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionActionSheetDidDismiss", 7);
        this.presented = false;
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * An array of buttons for the action sheet.
         */
        this.buttons = [];
        /**
         * If `true`, the action sheet will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = true;
        /**
         * If `true`, the action sheet will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * If `true`, the action sheet will animate.
         */
        this.animated = true;
        this.onBackdropTap = function () {
          _this.dismiss(undefined, _overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["B"]);
        };
        this.dispatchCancelHandler = function (ev) {
          var role = ev.detail.role;
          if (Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["i"])(role)) {
            var cancelButton = _this.getButtons().find(function (b) {
              return b.role === 'cancel';
            });
            _this.callButtonHandler(cancelButton);
          }
        };
      }
      /**
       * Present the action sheet overlay after it has been created.
       */
      return _createClass(ActionSheet, [{
        key: "present",
        value: function present() {
          return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this, 'actionSheetEnter', iosEnterAnimation, mdEnterAnimation);
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this.el);
        }
        /**
         * Dismiss the action sheet overlay after it has been presented.
         *
         * @param data Any data to emit in the dismiss events.
         * @param role The role of the element that is dismissing the action sheet.
         * This can be useful in a button handler for determining which button was
         * clicked to dismiss the action sheet.
         * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
         */
      }, {
        key: "dismiss",
        value: function dismiss(data, role) {
          return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["f"])(this, data, role, 'actionSheetLeave', iosLeaveAnimation, mdLeaveAnimation);
        }
        /**
         * Returns a promise that resolves when the action sheet did dismiss.
         */
      }, {
        key: "onDidDismiss",
        value: function onDidDismiss() {
          return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.el, 'ionActionSheetDidDismiss');
        }
        /**
         * Returns a promise that resolves when the action sheet will dismiss.
         *
         */
      }, {
        key: "onWillDismiss",
        value: function onWillDismiss() {
          return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.el, 'ionActionSheetWillDismiss');
        }
      }, {
        key: "buttonClick",
        value: function () {
          var _buttonClick = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(button) {
            var role, shouldDismiss;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  role = button.role;
                  if (!Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["i"])(role)) {
                    _context.n = 1;
                    break;
                  }
                  return _context.a(2, this.dismiss(undefined, role));
                case 1:
                  _context.n = 2;
                  return this.callButtonHandler(button);
                case 2:
                  shouldDismiss = _context.v;
                  if (!shouldDismiss) {
                    _context.n = 3;
                    break;
                  }
                  return _context.a(2, this.dismiss(undefined, button.role));
                case 3:
                  return _context.a(2, Promise.resolve());
              }
            }, _callee, this);
          }));
          function buttonClick(_x) {
            return _buttonClick.apply(this, arguments);
          }
          return buttonClick;
        }()
      }, {
        key: "callButtonHandler",
        value: function () {
          var _callButtonHandler = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(button) {
            var rtn;
            return _regenerator().w(function (_context2) {
              while (1) switch (_context2.n) {
                case 0:
                  if (!button) {
                    _context2.n = 2;
                    break;
                  }
                  _context2.n = 1;
                  return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["s"])(button.handler);
                case 1:
                  rtn = _context2.v;
                  if (!(rtn === false)) {
                    _context2.n = 2;
                    break;
                  }
                  return _context2.a(2, false);
                case 2:
                  return _context2.a(2, true);
              }
            }, _callee2);
          }));
          function callButtonHandler(_x2) {
            return _callButtonHandler.apply(this, arguments);
          }
          return callButtonHandler;
        }()
      }, {
        key: "getButtons",
        value: function getButtons() {
          return this.buttons.map(function (b) {
            return typeof b === 'string' ? {
              text: b
            } : b;
          });
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
          }
        }
      }, {
        key: "componentDidLoad",
        value: function componentDidLoad() {
          var _this2 = this;
          /**
           * Do not create gesture if:
           * 1. A gesture already exists
           * 2. App is running in MD mode
           * 3. A wrapper ref does not exist
           */
          var groupEl = this.groupEl,
            wrapperEl = this.wrapperEl;
          if (this.gesture || Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) === 'md' || !wrapperEl || !groupEl) {
            return;
          }
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
            var isScrollable = groupEl.scrollHeight > groupEl.clientHeight;
            if (!isScrollable) {
              _this2.gesture = Object(_button_active_d4bd4f74_js__WEBPACK_IMPORTED_MODULE_2__["c"])(wrapperEl, function (refEl) {
                return refEl.classList.contains('action-sheet-button');
              });
              _this2.gesture.enable(true);
            }
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;
          var htmlAttributes = this.htmlAttributes;
          var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
          var allButtons = this.getButtons();
          var cancelButton = allButtons.find(function (b) {
            return b.role === 'cancel';
          });
          var buttons = allButtons.filter(function (b) {
            return b.role !== 'cancel';
          });
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], Object.assign({
            role: "dialog",
            "aria-modal": "true",
            tabindex: "-1"
          }, htmlAttributes, {
            style: {
              zIndex: "".concat(20000 + this.overlayIndex)
            },
            "class": Object.assign(Object.assign(_defineProperty({}, mode, true), Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.cssClass)), {
              'action-sheet-translucent': this.translucent
            }),
            onIonActionSheetWillDismiss: this.dispatchCancelHandler,
            onIonBackdropTap: this.onBackdropTap
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", {
            tappable: this.backdropDismiss
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            tabindex: "0"
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "action-sheet-wrapper ion-overlay-wrapper",
            role: "dialog",
            ref: function ref(el) {
              return _this3.wrapperEl = el;
            }
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "action-sheet-container"
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "action-sheet-group",
            ref: function ref(el) {
              return _this3.groupEl = el;
            }
          }, this.header !== undefined && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": {
              'action-sheet-title': true,
              'action-sheet-has-sub-title': this.subHeader !== undefined
            }
          }, this.header, this.subHeader && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "action-sheet-sub-title"
          }, this.subHeader)), buttons.map(function (b) {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
              type: "button",
              "class": buttonClass(b),
              onClick: function onClick() {
                return _this3.buttonClick(b);
              }
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": "action-sheet-button-inner"
            }, b.icon && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
              icon: b.icon,
              lazy: false,
              "class": "action-sheet-icon"
            }), b.text), mode === 'md' && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null));
          })), cancelButton && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "action-sheet-group action-sheet-group-cancel"
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            type: "button",
            "class": buttonClass(cancelButton),
            onClick: function onClick() {
              return _this3.buttonClick(cancelButton);
            }
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "action-sheet-button-inner"
          }, cancelButton.icon && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
            icon: cancelButton.icon,
            lazy: false,
            "class": "action-sheet-icon"
          }), cancelButton.text), mode === 'md' && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null))))), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            tabindex: "0"
          }));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
        }
      }]);
    }();
    var buttonClass = function buttonClass(button) {
      return Object.assign(_defineProperty({
        'action-sheet-button': true,
        'ion-activatable': true,
        'ion-focusable': true
      }, "action-sheet-".concat(button.role), button.role !== undefined), Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__["g"])(button.cssClass));
    };
    ActionSheet.style = {
      ios: actionSheetIosCss,
      md: actionSheetMdCss
    };

    /***/
  })
}]);
//# sourceMappingURL=0-es5.js.map