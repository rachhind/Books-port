function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26], {
  /***/"./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js": (
  /*!********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js ***!
    \********************************************************************/
  /*! exports provided: ion_refresher, ion_refresher_content */
  /***/
  function _node_modules_Ionic_core_dist_esm_ionRefresher_2EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ion_refresher", function () {
      return Refresher;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ion_refresher_content", function () {
      return RefresherContent;
    });
    /* harmony import */
    var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */"./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
    /* harmony import */
    var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */"./node_modules/@ionic/core/dist/esm/ionic-global-63a97a32.js");
    /* harmony import */
    var _cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubic-bezier-eea9a7a9.js */"./node_modules/@ionic/core/dist/esm/cubic-bezier-eea9a7a9.js");
    /* harmony import */
    var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-1457892a.js */"./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");
    /* harmony import */
    var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./haptic-27b3f981.js */"./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
    /* harmony import */
    var _animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animation-822d986b.js */"./node_modules/@ionic/core/dist/esm/animation-822d986b.js");
    /* harmony import */
    var _index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-9e3fe806.js */"./node_modules/@ionic/core/dist/esm/index-9e3fe806.js");
    /* harmony import */
    var _spinner_configs_cd7845af_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spinner-configs-cd7845af.js */"./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js");
    var getRefresherAnimationType = function getRefresherAnimationType(contentEl) {
      var previousSibling = contentEl.previousElementSibling;
      var hasHeader = previousSibling !== null && previousSibling.tagName === 'ION-HEADER';
      return hasHeader ? 'translate' : 'scale';
    };
    var createPullingAnimation = function createPullingAnimation(type, pullingSpinner, refresherEl) {
      return type === 'scale' ? createScaleAnimation(pullingSpinner, refresherEl) : createTranslateAnimation(pullingSpinner, refresherEl);
    };
    var createBaseAnimation = function createBaseAnimation(pullingRefresherIcon) {
      var spinner = pullingRefresherIcon.querySelector('ion-spinner');
      var circle = spinner.shadowRoot.querySelector('circle');
      var spinnerArrowContainer = pullingRefresherIcon.querySelector('.spinner-arrow-container');
      var arrowContainer = pullingRefresherIcon.querySelector('.arrow-container');
      var arrow = arrowContainer ? arrowContainer.querySelector('ion-icon') : null;
      var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])().duration(1000).easing('ease-out');
      var spinnerArrowContainerAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])().addElement(spinnerArrowContainer).keyframes([{
        offset: 0,
        opacity: '0.3'
      }, {
        offset: 0.45,
        opacity: '0.3'
      }, {
        offset: 0.55,
        opacity: '1'
      }, {
        offset: 1,
        opacity: '1'
      }]);
      var circleInnerAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])().addElement(circle).keyframes([{
        offset: 0,
        strokeDasharray: '1px, 200px'
      }, {
        offset: 0.20,
        strokeDasharray: '1px, 200px'
      }, {
        offset: 0.55,
        strokeDasharray: '100px, 200px'
      }, {
        offset: 1,
        strokeDasharray: '100px, 200px'
      }]);
      var circleOuterAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])().addElement(spinner).keyframes([{
        offset: 0,
        transform: 'rotate(-90deg)'
      }, {
        offset: 1,
        transform: 'rotate(210deg)'
      }]);
      /**
       * Only add arrow animation if present
       * this allows users to customize the spinners
       * without errors being thrown
       */
      if (arrowContainer && arrow) {
        var arrowContainerAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])().addElement(arrowContainer).keyframes([{
          offset: 0,
          transform: 'rotate(0deg)'
        }, {
          offset: 0.30,
          transform: 'rotate(0deg)'
        }, {
          offset: 0.55,
          transform: 'rotate(280deg)'
        }, {
          offset: 1,
          transform: 'rotate(400deg)'
        }]);
        var arrowAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])().addElement(arrow).keyframes([{
          offset: 0,
          transform: 'translateX(2px) scale(0)'
        }, {
          offset: 0.30,
          transform: 'translateX(2px) scale(0)'
        }, {
          offset: 0.55,
          transform: 'translateX(-1.5px) scale(1)'
        }, {
          offset: 1,
          transform: 'translateX(-1.5px) scale(1)'
        }]);
        baseAnimation.addAnimation([arrowContainerAnimation, arrowAnimation]);
      }
      return baseAnimation.addAnimation([spinnerArrowContainerAnimation, circleInnerAnimation, circleOuterAnimation]);
    };
    var createScaleAnimation = function createScaleAnimation(pullingRefresherIcon, refresherEl) {
      /**
       * Do not take the height of the refresher icon
       * because at this point the DOM has not updated,
       * so the refresher icon is still hidden with
       * display: none.
       * The `ion-refresher` container height
       * is roughly the amount we need to offset
       * the icon by when pulling down.
       */
      var height = refresherEl.clientHeight;
      var spinnerAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])().addElement(pullingRefresherIcon).keyframes([{
        offset: 0,
        transform: "scale(0) translateY(-".concat(height, "px)")
      }, {
        offset: 1,
        transform: 'scale(1) translateY(100px)'
      }]);
      return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
    };
    var createTranslateAnimation = function createTranslateAnimation(pullingRefresherIcon, refresherEl) {
      /**
       * Do not take the height of the refresher icon
       * because at this point the DOM has not updated,
       * so the refresher icon is still hidden with
       * display: none.
       * The `ion-refresher` container height
       * is roughly the amount we need to offset
       * the icon by when pulling down.
       */
      var height = refresherEl.clientHeight;
      var spinnerAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])().addElement(pullingRefresherIcon).keyframes([{
        offset: 0,
        transform: "translateY(-".concat(height, "px)")
      }, {
        offset: 1,
        transform: 'translateY(100px)'
      }]);
      return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
    };
    var createSnapBackAnimation = function createSnapBackAnimation(pullingRefresherIcon) {
      return Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])().duration(125).addElement(pullingRefresherIcon).fromTo('transform', 'translateY(var(--ion-pulling-refresher-translate, 100px))', 'translateY(0px)');
    };
    // iOS Native Refresher
    // -----------------------------
    var setSpinnerOpacity = function setSpinnerOpacity(spinner, opacity) {
      spinner.style.setProperty('opacity', opacity.toString());
    };
    var handleScrollWhilePulling = function handleScrollWhilePulling(spinner, ticks, opacity, currentTickToShow) {
      Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
        setSpinnerOpacity(spinner, opacity);
        ticks.forEach(function (el, i) {
          return el.style.setProperty('opacity', i <= currentTickToShow ? '0.99' : '0');
        });
      });
    };
    var handleScrollWhileRefreshing = function handleScrollWhileRefreshing(spinner, lastVelocityY) {
      Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
        // If user pulls down quickly, the spinner should spin faster
        spinner.style.setProperty('--refreshing-rotation-duration', lastVelocityY >= 1.0 ? '0.5s' : '2s');
        spinner.style.setProperty('opacity', '1');
      });
    };
    var translateElement = function translateElement(el, value) {
      if (!el) {
        return Promise.resolve();
      }
      var trans = transitionEndAsync(el, 200);
      Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
        el.style.setProperty('transition', '0.2s all ease-out');
        if (value === undefined) {
          el.style.removeProperty('transform');
        } else {
          el.style.setProperty('transform', "translate3d(0px, ".concat(value, ", 0px)"));
        }
      });
      return trans;
    };
    // Utils
    // -----------------------------
    var shouldUseNativeRefresher = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(referenceEl, mode) {
        var refresherContent, pullingSpinner, refreshingSpinner;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              refresherContent = referenceEl.querySelector('ion-refresher-content');
              if (refresherContent) {
                _context.n = 1;
                break;
              }
              return _context.a(2, Promise.resolve(false));
            case 1:
              _context.n = 2;
              return new Promise(function (resolve) {
                return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__["c"])(refresherContent, resolve);
              });
            case 2:
              pullingSpinner = referenceEl.querySelector('ion-refresher-content .refresher-pulling ion-spinner');
              refreshingSpinner = referenceEl.querySelector('ion-refresher-content .refresher-refreshing ion-spinner');
              return _context.a(2, pullingSpinner !== null && refreshingSpinner !== null && (mode === 'ios' && Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["a"])('mobile') && referenceEl.style.webkitOverflowScrolling !== undefined || mode === 'md'));
          }
        }, _callee);
      }));
      return function shouldUseNativeRefresher(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
    var transitionEndAsync = function transitionEndAsync(el) {
      var expectedDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return new Promise(function (resolve) {
        transitionEnd(el, expectedDuration, resolve);
      });
    };
    var transitionEnd = function transitionEnd(el) {
      var expectedDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var callback = arguments.length > 2 ? arguments[2] : undefined;
      var unRegTrans;
      var animationTimeout;
      var opts = {
        passive: true
      };
      var ANIMATION_FALLBACK_TIMEOUT = 500;
      var unregister = function unregister() {
        if (unRegTrans) {
          unRegTrans();
        }
      };
      var onTransitionEnd = function onTransitionEnd(ev) {
        if (ev === undefined || el === ev.target) {
          unregister();
          callback(ev);
        }
      };
      if (el) {
        el.addEventListener('webkitTransitionEnd', onTransitionEnd, opts);
        el.addEventListener('transitionend', onTransitionEnd, opts);
        animationTimeout = setTimeout(onTransitionEnd, expectedDuration + ANIMATION_FALLBACK_TIMEOUT);
        unRegTrans = function unRegTrans() {
          if (animationTimeout) {
            clearTimeout(animationTimeout);
            animationTimeout = undefined;
          }
          el.removeEventListener('webkitTransitionEnd', onTransitionEnd, opts);
          el.removeEventListener('transitionend', onTransitionEnd, opts);
        };
      }
      return unregister;
    };
    var refresherIosCss = "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}";
    var refresherMdCss = "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}";
    var Refresher = /*#__PURE__*/function () {
      function Refresher(hostRef) {
        _classCallCheck(this, Refresher);
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ionRefresh = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionRefresh", 7);
        this.ionPull = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionPull", 7);
        this.ionStart = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionStart", 7);
        this.appliedStyles = false;
        this.didStart = false;
        this.progress = 0;
        this.pointerDown = false;
        this.needsCompletion = false;
        this.didRefresh = false;
        this.lastVelocityY = 0;
        this.animations = [];
        this.nativeRefresher = false;
        /**
         * The current state which the refresher is in. The refresher's states include:
         *
         * - `inactive` - The refresher is not being pulled down or refreshing and is currently hidden.
         * - `pulling` - The user is actively pulling down the refresher, but has not reached the point yet that if the user lets go, it'll refresh.
         * - `cancelling` - The user pulled down the refresher and let go, but did not pull down far enough to kick off the `refreshing` state. After letting go, the refresher is in the `cancelling` state while it is closing, and will go back to the `inactive` state once closed.
         * - `ready` - The user has pulled down the refresher far enough that if they let go, it'll begin the `refreshing` state.
         * - `refreshing` - The refresher is actively waiting on the async operation to end. Once the refresh handler calls `complete()` it will begin the `completing` state.
         * - `completing` - The `refreshing` state has finished and the refresher is in the way of closing itself. Once closed, the refresher will go back to the `inactive` state.
         */
        this.state = 1 /* Inactive */;
        /**
         * The minimum distance the user must pull down until the
         * refresher will go into the `refreshing` state.
         * Does not apply when the refresher content uses a spinner,
         * enabling the native refresher.
         */
        this.pullMin = 60;
        /**
         * The maximum distance of the pull until the refresher
         * will automatically go into the `refreshing` state.
         * Defaults to the result of `pullMin + 60`.
         * Does not apply when  the refresher content uses a spinner,
         * enabling the native refresher.
         */
        this.pullMax = this.pullMin + 60;
        /**
         * Time it takes to close the refresher.
         * Does not apply when the refresher content uses a spinner,
         * enabling the native refresher.
         */
        this.closeDuration = '280ms';
        /**
         * Time it takes the refresher to snap back to the `refreshing` state.
         * Does not apply when the refresher content uses a spinner,
         * enabling the native refresher.
         */
        this.snapbackDuration = '280ms';
        /**
         * How much to multiply the pull speed by. To slow the pull animation down,
         * pass a number less than `1`. To speed up the pull, pass a number greater
         * than `1`. The default value is `1` which is equal to the speed of the cursor.
         * If a negative value is passed in, the factor will be `1` instead.
         *
         * For example: If the value passed is `1.2` and the content is dragged by
         * `10` pixels, instead of `10` pixels the content will be pulled by `12` pixels
         * (an increase of 20 percent). If the value passed is `0.8`, the dragged amount
         * will be `8` pixels, less than the amount the cursor has moved.
         *
         * Does not apply when the refresher content uses a spinner,
         * enabling the native refresher.
         */
        this.pullFactor = 1;
        /**
         * If `true`, the refresher will be hidden.
         */
        this.disabled = false;
      }
      return _createClass(Refresher, [{
        key: "disabledChanged",
        value: function disabledChanged() {
          if (this.gesture) {
            this.gesture.enable(!this.disabled);
          }
        }
      }, {
        key: "checkNativeRefresher",
        value: function () {
          var _checkNativeRefresher = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
            var useNativeRefresher, contentEl;
            return _regenerator().w(function (_context2) {
              while (1) switch (_context2.n) {
                case 0:
                  _context2.n = 1;
                  return shouldUseNativeRefresher(this.el, Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this));
                case 1:
                  useNativeRefresher = _context2.v;
                  if (useNativeRefresher && !this.nativeRefresher) {
                    contentEl = this.el.closest('ion-content');
                    this.setupNativeRefresher(contentEl);
                  } else if (!useNativeRefresher) {
                    this.destroyNativeRefresher();
                  }
                case 2:
                  return _context2.a(2);
              }
            }, _callee2, this);
          }));
          function checkNativeRefresher() {
            return _checkNativeRefresher.apply(this, arguments);
          }
          return checkNativeRefresher;
        }()
      }, {
        key: "destroyNativeRefresher",
        value: function destroyNativeRefresher() {
          if (this.scrollEl && this.scrollListenerCallback) {
            this.scrollEl.removeEventListener('scroll', this.scrollListenerCallback);
            this.scrollListenerCallback = undefined;
          }
          this.nativeRefresher = false;
        }
      }, {
        key: "resetNativeRefresher",
        value: function () {
          var _resetNativeRefresher = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(el, state) {
            return _regenerator().w(function (_context3) {
              while (1) switch (_context3.n) {
                case 0:
                  this.state = state;
                  if (!(Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) === 'ios')) {
                    _context3.n = 2;
                    break;
                  }
                  _context3.n = 1;
                  return translateElement(el, undefined);
                case 1:
                  _context3.n = 3;
                  break;
                case 2:
                  _context3.n = 3;
                  return transitionEndAsync(this.el.querySelector('.refresher-refreshing-icon'), 200);
                case 3:
                  this.didRefresh = false;
                  this.needsCompletion = false;
                  this.pointerDown = false;
                  this.animations.forEach(function (ani) {
                    return ani.destroy();
                  });
                  this.animations = [];
                  this.progress = 0;
                  this.state = 1 /* Inactive */;
                case 4:
                  return _context3.a(2);
              }
            }, _callee3, this);
          }));
          function resetNativeRefresher(_x3, _x4) {
            return _resetNativeRefresher.apply(this, arguments);
          }
          return resetNativeRefresher;
        }()
      }, {
        key: "setupiOSNativeRefresher",
        value: function () {
          var _setupiOSNativeRefresher = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(pullingSpinner, refreshingSpinner) {
            var _this = this;
            var ticks, MAX_PULL, NUM_TICKS;
            return _regenerator().w(function (_context4) {
              while (1) switch (_context4.n) {
                case 0:
                  this.elementToTransform = this.scrollEl;
                  ticks = pullingSpinner.shadowRoot.querySelectorAll('svg');
                  MAX_PULL = this.scrollEl.clientHeight * 0.16;
                  NUM_TICKS = ticks.length;
                  Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
                    return ticks.forEach(function (el) {
                      return el.style.setProperty('animation', 'none');
                    });
                  });
                  this.scrollListenerCallback = function () {
                    // If pointer is not on screen or refresher is not active, ignore scroll
                    if (!_this.pointerDown && _this.state === 1 /* Inactive */) {
                      return;
                    }
                    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
                      // PTR should only be active when overflow scrolling at the top
                      var scrollTop = _this.scrollEl.scrollTop;
                      var refresherHeight = _this.el.clientHeight;
                      if (scrollTop > 0) {
                        /**
                         * If refresher is refreshing and user tries to scroll
                         * progressively fade refresher out/in
                         */
                        if (_this.state === 8 /* Refreshing */) {
                          var ratio = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__["k"])(0, scrollTop / (refresherHeight * 0.5), 1);
                          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
                            return setSpinnerOpacity(refreshingSpinner, 1 - ratio);
                          });
                          return;
                        }
                        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
                          return setSpinnerOpacity(pullingSpinner, 0);
                        });
                        return;
                      }
                      if (_this.pointerDown) {
                        if (!_this.didStart) {
                          _this.didStart = true;
                          _this.ionStart.emit();
                        }
                        // emit "pulling" on every move
                        if (_this.pointerDown) {
                          _this.ionPull.emit();
                        }
                      }
                      // delay showing the next tick marks until user has pulled 30px
                      var opacity = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__["k"])(0, Math.abs(scrollTop) / refresherHeight, 0.99);
                      var pullAmount = _this.progress = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__["k"])(0, (Math.abs(scrollTop) - 30) / MAX_PULL, 1);
                      var currentTickToShow = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__["k"])(0, Math.floor(pullAmount * NUM_TICKS), NUM_TICKS - 1);
                      var shouldShowRefreshingSpinner = _this.state === 8 /* Refreshing */ || currentTickToShow === NUM_TICKS - 1;
                      if (shouldShowRefreshingSpinner) {
                        if (_this.pointerDown) {
                          handleScrollWhileRefreshing(refreshingSpinner, _this.lastVelocityY);
                        }
                        if (!_this.didRefresh) {
                          _this.beginRefresh();
                          _this.didRefresh = true;
                          Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_4__["d"])({
                            style: 'light'
                          });
                          /**
                           * Translate the content element otherwise when pointer is removed
                           * from screen the scroll content will bounce back over the refresher
                           */
                          if (!_this.pointerDown) {
                            translateElement(_this.elementToTransform, "".concat(refresherHeight, "px"));
                          }
                        }
                      } else {
                        _this.state = 2 /* Pulling */;
                        handleScrollWhilePulling(pullingSpinner, ticks, opacity, currentTickToShow);
                      }
                    });
                  };
                  this.scrollEl.addEventListener('scroll', this.scrollListenerCallback);
                  _context4.n = 1;
                  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-34cb2743.js */"./node_modules/@ionic/core/dist/esm/index-34cb2743.js"));
                case 1:
                  this.gesture = _context4.v.createGesture({
                    el: this.scrollEl,
                    gestureName: 'refresher',
                    gesturePriority: 31,
                    direction: 'y',
                    threshold: 5,
                    onStart: function onStart() {
                      _this.pointerDown = true;
                      if (!_this.didRefresh) {
                        translateElement(_this.elementToTransform, '0px');
                      }
                      /**
                       * If the content had `display: none` when
                       * the refresher was initialized, its clientHeight
                       * will be 0. When the gesture starts, the content
                       * will be visible, so try to get the correct
                       * client height again. This is most common when
                       * using the refresher in an ion-menu.
                       */
                      if (MAX_PULL === 0) {
                        MAX_PULL = _this.scrollEl.clientHeight * 0.16;
                      }
                    },
                    onMove: function onMove(ev) {
                      _this.lastVelocityY = ev.velocityY;
                    },
                    onEnd: function onEnd() {
                      _this.pointerDown = false;
                      _this.didStart = false;
                      if (_this.needsCompletion) {
                        _this.resetNativeRefresher(_this.elementToTransform, 32 /* Completing */);
                        _this.needsCompletion = false;
                      } else if (_this.didRefresh) {
                        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
                          return translateElement(_this.elementToTransform, "".concat(_this.el.clientHeight, "px"));
                        });
                      }
                    }
                  });
                  this.disabledChanged();
                case 2:
                  return _context4.a(2);
              }
            }, _callee4, this);
          }));
          function setupiOSNativeRefresher(_x5, _x6) {
            return _setupiOSNativeRefresher.apply(this, arguments);
          }
          return setupiOSNativeRefresher;
        }()
      }, {
        key: "setupMDNativeRefresher",
        value: function () {
          var _setupMDNativeRefresher = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(contentEl, pullingSpinner, refreshingSpinner) {
            var _this2 = this;
            var circle, pullingRefresherIcon, refreshingCircle;
            return _regenerator().w(function (_context6) {
              while (1) switch (_context6.n) {
                case 0:
                  circle = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__["g"])(pullingSpinner).querySelector('circle');
                  pullingRefresherIcon = this.el.querySelector('ion-refresher-content .refresher-pulling-icon');
                  refreshingCircle = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__["g"])(refreshingSpinner).querySelector('circle');
                  if (circle !== null && refreshingCircle !== null) {
                    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
                      circle.style.setProperty('animation', 'none');
                      // This lines up the animation on the refreshing spinner with the pulling spinner
                      refreshingSpinner.style.setProperty('animation-delay', '-655ms');
                      refreshingCircle.style.setProperty('animation-delay', '-655ms');
                    });
                  }
                  _context6.n = 1;
                  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-34cb2743.js */"./node_modules/@ionic/core/dist/esm/index-34cb2743.js"));
                case 1:
                  this.gesture = _context6.v.createGesture({
                    el: this.scrollEl,
                    gestureName: 'refresher',
                    gesturePriority: 31,
                    direction: 'y',
                    threshold: 5,
                    canStart: function canStart() {
                      return _this2.state !== 8 /* Refreshing */ && _this2.state !== 32 /* Completing */ && _this2.scrollEl.scrollTop === 0;
                    },
                    onStart: function onStart(ev) {
                      ev.data = {
                        animation: undefined,
                        didStart: false,
                        cancelled: false
                      };
                    },
                    onMove: function onMove(ev) {
                      if (ev.velocityY < 0 && _this2.progress === 0 && !ev.data.didStart || ev.data.cancelled) {
                        ev.data.cancelled = true;
                        return;
                      }
                      if (!ev.data.didStart) {
                        ev.data.didStart = true;
                        _this2.state = 2 /* Pulling */;
                        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
                          return _this2.scrollEl.style.setProperty('--overflow', 'hidden');
                        });
                        var animationType = getRefresherAnimationType(contentEl);
                        var animation = createPullingAnimation(animationType, pullingRefresherIcon, _this2.el);
                        ev.data.animation = animation;
                        animation.progressStart(false, 0);
                        _this2.ionStart.emit();
                        _this2.animations.push(animation);
                        return;
                      }
                      // Since we are using an easing curve, slow the gesture tracking down a bit
                      _this2.progress = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__["k"])(0, ev.deltaY / 180 * 0.5, 1);
                      ev.data.animation.progressStep(_this2.progress);
                      _this2.ionPull.emit();
                    },
                    onEnd: function onEnd(ev) {
                      if (!ev.data.didStart) {
                        return;
                      }
                      Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
                        return _this2.scrollEl.style.removeProperty('--overflow');
                      });
                      if (_this2.progress <= 0.4) {
                        _this2.gesture.enable(false);
                        ev.data.animation.progressEnd(0, _this2.progress, 500).onFinish(function () {
                          _this2.animations.forEach(function (ani) {
                            return ani.destroy();
                          });
                          _this2.animations = [];
                          _this2.gesture.enable(true);
                          _this2.state = 1 /* Inactive */;
                        });
                        return;
                      }
                      var progress = Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_2__["g"])([0, 0], [0, 0], [1, 1], [1, 1], _this2.progress)[0];
                      var snapBackAnimation = createSnapBackAnimation(pullingRefresherIcon);
                      _this2.animations.push(snapBackAnimation);
                      Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
                        return _regenerator().w(function (_context5) {
                          while (1) switch (_context5.n) {
                            case 0:
                              pullingRefresherIcon.style.setProperty('--ion-pulling-refresher-translate', "".concat(progress * 100, "px"));
                              ev.data.animation.progressEnd();
                              _context5.n = 1;
                              return snapBackAnimation.play();
                            case 1:
                              _this2.beginRefresh();
                              ev.data.animation.destroy();
                            case 2:
                              return _context5.a(2);
                          }
                        }, _callee5);
                      })));
                    }
                  });
                  this.disabledChanged();
                case 2:
                  return _context6.a(2);
              }
            }, _callee6, this);
          }));
          function setupMDNativeRefresher(_x7, _x8, _x9) {
            return _setupMDNativeRefresher.apply(this, arguments);
          }
          return setupMDNativeRefresher;
        }()
      }, {
        key: "setupNativeRefresher",
        value: function () {
          var _setupNativeRefresher = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(contentEl) {
            var pullingSpinner, refreshingSpinner;
            return _regenerator().w(function (_context7) {
              while (1) switch (_context7.n) {
                case 0:
                  if (!(this.scrollListenerCallback || !contentEl || this.nativeRefresher || !this.scrollEl)) {
                    _context7.n = 1;
                    break;
                  }
                  return _context7.a(2);
                case 1:
                  /**
                   * If using non-native refresher before make sure
                   * we clean up any old CSS. This can happen when
                   * a user manually calls the refresh method in a
                   * component create callback before the native
                   * refresher is setup.
                   */
                  this.setCss(0, '', false, '');
                  this.nativeRefresher = true;
                  pullingSpinner = this.el.querySelector('ion-refresher-content .refresher-pulling ion-spinner');
                  refreshingSpinner = this.el.querySelector('ion-refresher-content .refresher-refreshing ion-spinner');
                  if (Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) === 'ios') {
                    this.setupiOSNativeRefresher(pullingSpinner, refreshingSpinner);
                  } else {
                    this.setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner);
                  }
                case 2:
                  return _context7.a(2);
              }
            }, _callee7, this);
          }));
          function setupNativeRefresher(_x0) {
            return _setupNativeRefresher.apply(this, arguments);
          }
          return setupNativeRefresher;
        }()
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this.checkNativeRefresher();
        }
      }, {
        key: "connectedCallback",
        value: function () {
          var _connectedCallback = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
            var _this3 = this;
            var contentEl;
            return _regenerator().w(function (_context8) {
              while (1) switch (_context8.n) {
                case 0:
                  if (!(this.el.getAttribute('slot') !== 'fixed')) {
                    _context8.n = 1;
                    break;
                  }
                  console.error('Make sure you use: <ion-refresher slot="fixed">');
                  return _context8.a(2);
                case 1:
                  contentEl = this.el.closest('ion-content');
                  if (contentEl) {
                    _context8.n = 2;
                    break;
                  }
                  console.error('<ion-refresher> must be used inside an <ion-content>');
                  return _context8.a(2);
                case 2:
                  _context8.n = 3;
                  return new Promise(function (resolve) {
                    return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__["c"])(contentEl, resolve);
                  });
                case 3:
                  _context8.n = 4;
                  return contentEl.getScrollElement();
                case 4:
                  this.scrollEl = _context8.v;
                  this.backgroundContentEl = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__["g"])(contentEl).querySelector('#background-content');
                  _context8.n = 5;
                  return shouldUseNativeRefresher(this.el, Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this));
                case 5:
                  if (!_context8.v) {
                    _context8.n = 6;
                    break;
                  }
                  this.setupNativeRefresher(contentEl);
                  _context8.n = 8;
                  break;
                case 6:
                  _context8.n = 7;
                  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-34cb2743.js */"./node_modules/@ionic/core/dist/esm/index-34cb2743.js"));
                case 7:
                  this.gesture = _context8.v.createGesture({
                    el: contentEl,
                    gestureName: 'refresher',
                    gesturePriority: 31,
                    direction: 'y',
                    threshold: 20,
                    passive: false,
                    canStart: function canStart() {
                      return _this3.canStart();
                    },
                    onStart: function onStart() {
                      return _this3.onStart();
                    },
                    onMove: function onMove(ev) {
                      return _this3.onMove(ev);
                    },
                    onEnd: function onEnd() {
                      return _this3.onEnd();
                    }
                  });
                  this.disabledChanged();
                case 8:
                  return _context8.a(2);
              }
            }, _callee8, this);
          }));
          function connectedCallback() {
            return _connectedCallback.apply(this, arguments);
          }
          return connectedCallback;
        }()
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          this.destroyNativeRefresher();
          this.scrollEl = undefined;
          if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
          }
        }
        /**
         * Call `complete()` when your async operation has completed.
         * For example, the `refreshing` state is while the app is performing
         * an asynchronous operation, such as receiving more data from an
         * AJAX request. Once the data has been received, you then call this
         * method to signify that the refreshing has completed and to close
         * the refresher. This method also changes the refresher's state from
         * `refreshing` to `completing`.
         */
      }, {
        key: "complete",
        value: (function () {
          var _complete = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
            var _this4 = this;
            return _regenerator().w(function (_context9) {
              while (1) switch (_context9.n) {
                case 0:
                  if (this.nativeRefresher) {
                    this.needsCompletion = true;
                    // Do not reset scroll el until user removes pointer from screen
                    if (!this.pointerDown) {
                      Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__["r"])(function () {
                        return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__["r"])(function () {
                          return _this4.resetNativeRefresher(_this4.elementToTransform, 32 /* Completing */);
                        });
                      });
                    }
                  } else {
                    this.close(32 /* Completing */, '120ms');
                  }
                case 1:
                  return _context9.a(2);
              }
            }, _callee9, this);
          }));
          function complete() {
            return _complete.apply(this, arguments);
          }
          return complete;
        }()
        /**
         * Changes the refresher's state from `refreshing` to `cancelling`.
         */
        )
      }, {
        key: "cancel",
        value: (function () {
          var _cancel = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
            var _this5 = this;
            return _regenerator().w(function (_context0) {
              while (1) switch (_context0.n) {
                case 0:
                  if (this.nativeRefresher) {
                    // Do not reset scroll el until user removes pointer from screen
                    if (!this.pointerDown) {
                      Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__["r"])(function () {
                        return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__["r"])(function () {
                          return _this5.resetNativeRefresher(_this5.elementToTransform, 16 /* Cancelling */);
                        });
                      });
                    }
                  } else {
                    this.close(16 /* Cancelling */, '');
                  }
                case 1:
                  return _context0.a(2);
              }
            }, _callee0, this);
          }));
          function cancel() {
            return _cancel.apply(this, arguments);
          }
          return cancel;
        }()
        /**
         * A number representing how far down the user has pulled.
         * The number `0` represents the user hasn't pulled down at all. The
         * number `1`, and anything greater than `1`, represents that the user
         * has pulled far enough down that when they let go then the refresh will
         * happen. If they let go and the number is less than `1`, then the
         * refresh will not happen, and the content will return to it's original
         * position.
         */
        )
      }, {
        key: "getProgress",
        value: function getProgress() {
          return Promise.resolve(this.progress);
        }
      }, {
        key: "canStart",
        value: function canStart() {
          if (!this.scrollEl) {
            return false;
          }
          if (this.state !== 1 /* Inactive */) {
            return false;
          }
          // if the scrollTop is greater than zero then it's
          // not possible to pull the content down yet
          if (this.scrollEl.scrollTop > 0) {
            return false;
          }
          return true;
        }
      }, {
        key: "onStart",
        value: function onStart() {
          this.progress = 0;
          this.state = 1 /* Inactive */;
        }
      }, {
        key: "onMove",
        value: function onMove(detail) {
          if (!this.scrollEl) {
            return;
          }
          // this method can get called like a bazillion times per second,
          // so it's built to be as efficient as possible, and does its
          // best to do any DOM read/writes only when absolutely necessary
          // if multi-touch then get out immediately
          var ev = detail.event;
          if (ev.touches && ev.touches.length > 1) {
            return;
          }
          // do nothing if it's actively refreshing
          // or it's in the way of closing
          // or this was never a startY
          if ((this.state & 56 /* _BUSY_ */) !== 0) {
            return;
          }
          var pullFactor = Number.isNaN(this.pullFactor) || this.pullFactor < 0 ? 1 : this.pullFactor;
          var deltaY = detail.deltaY * pullFactor;
          // don't bother if they're scrolling up
          // and have not already started dragging
          if (deltaY <= 0) {
            // the current Y is higher than the starting Y
            // so they scrolled up enough to be ignored
            this.progress = 0;
            this.state = 1 /* Inactive */;
            if (this.appliedStyles) {
              // reset the styles only if they were applied
              this.setCss(0, '', false, '');
              return;
            }
            return;
          }
          if (this.state === 1 /* Inactive */) {
            // this refresh is not already actively pulling down
            // get the content's scrollTop
            var scrollHostScrollTop = this.scrollEl.scrollTop;
            // if the scrollTop is greater than zero then it's
            // not possible to pull the content down yet
            if (scrollHostScrollTop > 0) {
              this.progress = 0;
              return;
            }
            // content scrolled all the way to the top, and dragging down
            this.state = 2 /* Pulling */;
          }
          // prevent native scroll events
          if (ev.cancelable) {
            ev.preventDefault();
          }
          // the refresher is actively pulling at this point
          // move the scroll element within the content element
          this.setCss(deltaY, '0ms', true, '');
          if (deltaY === 0) {
            // don't continue if there's no delta yet
            this.progress = 0;
            return;
          }
          var pullMin = this.pullMin;
          // set pull progress
          this.progress = deltaY / pullMin;
          // emit "start" if it hasn't started yet
          if (!this.didStart) {
            this.didStart = true;
            this.ionStart.emit();
          }
          // emit "pulling" on every move
          this.ionPull.emit();
          // do nothing if the delta is less than the pull threshold
          if (deltaY < pullMin) {
            // ensure it stays in the pulling state, cuz its not ready yet
            this.state = 2 /* Pulling */;
            return;
          }
          if (deltaY > this.pullMax) {
            // they pulled farther than the max, so kick off the refresh
            this.beginRefresh();
            return;
          }
          // pulled farther than the pull min!!
          // it is now in the `ready` state!!
          // if they let go then it'll refresh, kerpow!!
          this.state = 4 /* Ready */;
          return;
        }
      }, {
        key: "onEnd",
        value: function onEnd() {
          // only run in a zone when absolutely necessary
          if (this.state === 4 /* Ready */) {
            // they pulled down far enough, so it's ready to refresh
            this.beginRefresh();
          } else if (this.state === 2 /* Pulling */) {
            // they were pulling down, but didn't pull down far enough
            // set the content back to it's original location
            // and close the refresher
            // set that the refresh is actively cancelling
            this.cancel();
          }
        }
      }, {
        key: "beginRefresh",
        value: function beginRefresh() {
          // assumes we're already back in a zone
          // they pulled down far enough, so it's ready to refresh
          this.state = 8 /* Refreshing */;
          // place the content in a hangout position while it thinks
          this.setCss(this.pullMin, this.snapbackDuration, true, '');
          // emit "refresh" because it was pulled down far enough
          // and they let go to begin refreshing
          this.ionRefresh.emit({
            complete: this.complete.bind(this)
          });
        }
      }, {
        key: "close",
        value: function close(state, delay) {
          var _this6 = this;
          // create fallback timer incase something goes wrong with transitionEnd event
          setTimeout(function () {
            _this6.state = 1 /* Inactive */;
            _this6.progress = 0;
            _this6.didStart = false;
            _this6.setCss(0, '0ms', false, '');
          }, 600);
          // reset set the styles on the scroll element
          // set that the refresh is actively cancelling/completing
          this.state = state;
          this.setCss(0, this.closeDuration, true, delay);
          // TODO: stop gesture
        }
      }, {
        key: "setCss",
        value: function setCss(y, duration, overflowVisible, delay) {
          var _this7 = this;
          if (this.nativeRefresher) {
            return;
          }
          this.appliedStyles = y > 0;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            if (_this7.scrollEl && _this7.backgroundContentEl) {
              var scrollStyle = _this7.scrollEl.style;
              var backgroundStyle = _this7.backgroundContentEl.style;
              scrollStyle.transform = backgroundStyle.transform = y > 0 ? "translateY(".concat(y, "px) translateZ(0px)") : '';
              scrollStyle.transitionDuration = backgroundStyle.transitionDuration = duration;
              scrollStyle.transitionDelay = backgroundStyle.transitionDelay = delay;
              scrollStyle.overflow = overflowVisible ? 'hidden' : '';
            }
          });
        }
      }, {
        key: "render",
        value: function render() {
          var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            slot: "fixed",
            "class": _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, mode, true), "refresher-".concat(mode), true), 'refresher-native', this.nativeRefresher), 'refresher-active', this.state !== 1), 'refresher-pulling', this.state === 2), 'refresher-ready', this.state === 4), 'refresher-refreshing', this.state === 8), 'refresher-cancelling', this.state === 16), 'refresher-completing', this.state === 32)
          });
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
        }
      }], [{
        key: "watchers",
        get: function get() {
          return {
            "disabled": ["disabledChanged"]
          };
        }
      }]);
    }();
    Refresher.style = {
      ios: refresherIosCss,
      md: refresherMdCss
    };
    var RefresherContent = /*#__PURE__*/function () {
      function RefresherContent(hostRef) {
        _classCallCheck(this, RefresherContent);
        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }
      return _createClass(RefresherContent, [{
        key: "componentWillLoad",
        value: function componentWillLoad() {
          if (this.pullingIcon === undefined) {
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            var overflowRefresher = this.el.style.webkitOverflowScrolling !== undefined ? 'lines' : 'arrow-down';
            this.pullingIcon = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('refreshingIcon', mode === 'ios' && Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["a"])('mobile') ? _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('spinner', overflowRefresher) : 'circular');
          }
          if (this.refreshingSpinner === undefined) {
            var _mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            this.refreshingSpinner = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('refreshingSpinner', _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('spinner', _mode === 'ios' ? 'lines' : 'circular'));
          }
        }
      }, {
        key: "render",
        value: function render() {
          var pullingIcon = this.pullingIcon;
          var hasSpinner = pullingIcon != null && _spinner_configs_cd7845af_js__WEBPACK_IMPORTED_MODULE_7__["S"][pullingIcon] !== undefined;
          var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            "class": mode
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "refresher-pulling"
          }, this.pullingIcon && hasSpinner && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "refresher-pulling-icon"
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "spinner-arrow-container"
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", {
            name: this.pullingIcon,
            paused: true
          }), mode === 'md' && this.pullingIcon === 'circular' && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "arrow-container"
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
            name: "caret-back-sharp"
          })))), this.pullingIcon && !hasSpinner && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "refresher-pulling-icon"
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
            icon: this.pullingIcon,
            lazy: false
          })), this.pullingText && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "refresher-pulling-text",
            innerHTML: Object(_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_6__["s"])(this.pullingText)
          })), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "refresher-refreshing"
          }, this.refreshingSpinner && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "refresher-refreshing-icon"
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", {
            name: this.refreshingSpinner
          })), this.refreshingText && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "refresher-refreshing-text",
            innerHTML: Object(_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_6__["s"])(this.refreshingText)
          })));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
        }
      }]);
    }();

    /***/
  })
}]);
//# sourceMappingURL=26-es5.js.map