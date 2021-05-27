webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/image-gallery.module.scss":
/*!*****************************************************!*\
  !*** ./components/common/image-gallery.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./image-gallery.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/common/image-gallery.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./image-gallery.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/common/image-gallery.module.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./image-gallery.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/common/image-gallery.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/common/image-gallery.tsx":
/*!*********************************************!*\
  !*** ./components/common/image-gallery.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/react-hooks */ "./utils/react-hooks.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-gallery.module.scss */ "./components/common/image-gallery.module.scss");
/* harmony import */ var _image_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_image_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\User\\Dev\\hacony-site\\components\\common\\image-gallery.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ImageGallery = function ImageGallery(_ref) {
  _s();

  var srcs = _ref.srcs,
      height = _ref.height,
      padCount = _ref.padCount;
  var imageGalleryRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      viewIndex = _useState[0],
      setViewIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showAnimation = _useState2[0],
      setShowAnimation = _useState2[1];

  var imgGallerySize = Object(_utils_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useBoundingClientRect"])(imageGalleryRef);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Array(srcs.length).fill(0)),
      imgWidths = _useState3[0],
      setImgWidths = _useState3[1];

  var imgMargin = Math.round(((imgGallerySize === null || imgGallerySize === void 0 ? void 0 : imgGallerySize.height) || 1) * 0.05) || 1;

  function getImageIndex(curViewIndex) {
    var n = srcs.length;
    var imageIndex = (curViewIndex % n + n) % n; // actual mod function

    return imageIndex;
  }

  function getSrc(curViewIndex) {
    return srcs[getImageIndex(curViewIndex)];
  }

  function getImageWidth(curViewIndex) {
    return imgWidths[getImageIndex(curViewIndex)];
  }

  function getImagePosition(viewIndex, offsetPosition) {
    var offset = -getImageWidth(viewIndex) / 2;

    if (offsetPosition === 0) {} else if (offsetPosition < 0) {
      for (var i = offsetPosition; i < 0; i++) {
        offset -= getImageWidth(viewIndex + i) + imgMargin;
      }
    } else if (offsetPosition > 0) {
      for (var _i = 0; _i < offsetPosition; _i++) {
        offset += getImageWidth(viewIndex + _i) + imgMargin;
      }
    }

    return "translateX(".concat(offset, "px)");
  }

  function makeIncrementViewIndex(n) {
    return function () {
      if (!showAnimation) {
        setShowAnimation(true);
      }

      setViewIndex(viewIndex + n);
    };
  }

  ;
  var handleClickPrev = makeIncrementViewIndex(-1);
  var handleClickNext = makeIncrementViewIndex(1);
  var galleryItemElems = [];

  for (var i = -padCount; i <= padCount; i++) {
    var curViewIndex = viewIndex + i;
    var style = {
      width: "".concat(getImageWidth(curViewIndex), "px"),
      transform: getImagePosition(viewIndex, i),
      zIndex: padCount - Math.abs(i)
    };

    if (i != 0) {
      style.cursor = 'pointer';
    }

    var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_image_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageGalleryItemContainer, i !== 0 && _image_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.clickable, showAnimation && _image_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.animated);
    galleryItemElems.push(__jsx("div", {
      key: curViewIndex,
      className: className,
      style: style,
      onClick: makeIncrementViewIndex(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: _image_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageGalleryItem,
      src: getSrc(curViewIndex),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    })));
  }

  return __jsx("div", {
    className: _image_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageGallery,
    ref: imageGalleryRef,
    style: {
      height: height
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _image_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageGalleryLeftNav,
    onClick: handleClickPrev,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: _image_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageGalleryLeftArrow,
    src: "/images/gallery-arrow-left.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _image_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageGalleryRightNav,
    onClick: handleClickNext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: _image_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageGalleryRightArrow,
    src: "/images/gallery-arrow-right.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _image_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageGalleryItems,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, galleryItemElems), __jsx(ImageGalleryPreview, {
    srcs: srcs,
    height: height,
    updateImageWidths: setImgWidths,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }));
};

_s(ImageGallery, "7dLY1X3y083h0h0bhpQtZOKAdvo=", false, function () {
  return [_utils_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useBoundingClientRect"]];
});

_c = ImageGallery;
/* harmony default export */ __webpack_exports__["default"] = (ImageGallery);

var ImageGalleryPreview = function ImageGalleryPreview(_ref2) {
  _s2();

  var srcs = _ref2.srcs,
      height = _ref2.height,
      updateImageWidths = _ref2.updateImageWidths;
  var previewDivRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(undefined);
  var previewId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Math.floor(Math.random() * 100000))[0];

  function handleImageWidthChange() {
    console.log('update', previewId);

    if (!previewDivRef.current) {
      return;
    }

    var previewDivElem = previewDivRef.current;
    var imgWidths = Array.from(previewDivElem.children).map(function (elem) {
      return elem.clientWidth;
    });
    updateImageWidths(imgWidths);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    handleImageWidthChange();
  }, [srcs.join('|')]);
  return __jsx("div", {
    className: _image_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageGalleryPreview,
    ref: previewDivRef,
    style: {
      height: height
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, srcs.map(function (src, i) {
    return __jsx("img", {
      key: i,
      className: _image_gallery_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageGalleryPreviewImage,
      src: src,
      onLoad: handleImageWidthChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    });
  }));
};

_s2(ImageGalleryPreview, "RtQ6C9VPDzqBzHf20IUz0eM6C3c=");

_c2 = ImageGalleryPreview;

var _c, _c2;

$RefreshReg$(_c, "ImageGallery");
$RefreshReg$(_c2, "ImageGalleryPreview");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/page-commission/page-commission.tsx":
/*!********************************************************!*\
  !*** ./components/page-commission/page-commission.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageIndex; });
/* harmony import */ var C_Users_User_Dev_hacony_site_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_commission_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/commission-constants */ "./constants/commission-constants.tsx");
/* harmony import */ var _common_site_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/site-head */ "./components/common/site-head.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-commission.module.scss */ "./components/page-commission/page-commission.module.scss");
/* harmony import */ var _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_image_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/image-gallery */ "./components/common/image-gallery.tsx");


var _jsxFileName = "C:\\Users\\User\\Dev\\hacony-site\\components\\page-commission\\page-commission.tsx",
    _this2 = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function PageIndex() {
  var _this = this;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(_common_site_head__WEBPACK_IMPORTED_MODULE_3__["default"], Object(C_Users_User_Dev_hacony_site_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _constants_commission_constants__WEBPACK_IMPORTED_MODULE_2__["COMMISSION_PAGE_INFO"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.bannerContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.banner,
    src: '/images/commission-banner.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.bannerFade,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.contentContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(ContentRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.titleContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.titleLogo,
    src: '/images/logo-hacony.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }), __jsx("h1", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.titleText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, "Commission Information"), __jsx("p", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.subtitleText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, "Commissions open the first day of every month!"))), _constants_commission_constants__WEBPACK_IMPORTED_MODULE_2__["COMMISSION_TIERS"].map(function (comissionTier, i) {
    return __jsx(CommissionTier, Object(C_Users_User_Dev_hacony_site_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, comissionTier, {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 61
      }
    }));
  }), __jsx(ContentRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.externalGalleryHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, "For more examples, check out my gallery"), __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.iconContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: 'https://twitter.com/hornysharkat',
    target: "_blank",
    rel: "noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.icon,
    src: '/images/logo-twitter.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  })), __jsx("a", {
    href: 'https://www.furaffinity.net/user/qundium',
    target: "_blank",
    rel: "noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.icon,
    src: '/images/logo-furaffinity.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  })))), __jsx(ContentRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.drawInfoContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.drawInfoSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, __jsx("h2", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.drawInfoHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, "What I will draw\u2026"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  }, _constants_commission_constants__WEBPACK_IMPORTED_MODULE_2__["willDrawList"].map(function (item, i) {
    return __jsx("li", {
      className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.drawInfoListItem,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 64
      }
    }, item);
  }))), __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.drawInfoSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, __jsx("h2", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.drawInfoHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, "What I won\u2019t draw\u2026"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }, _constants_commission_constants__WEBPACK_IMPORTED_MODULE_2__["wontDrawList"].map(function (item, i) {
    return __jsx("li", {
      className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.drawInfoListItem,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 64
      }
    }, item);
  }))))), __jsx(ContentRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.commissionNotesHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, "Please note:"), __jsx("ul", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.commissionNoteList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, _constants_commission_constants__WEBPACK_IMPORTED_MODULE_2__["commissionNotes"].map(function (item, i) {
    return __jsx("li", {
      className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.commissionNoteListItem,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 59
      }
    }, item);
  }))), __jsx(ContentRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.contactHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, "Contact"), __jsx("p", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.contactText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, "For commissions and questions, please contact me on Telegram!"), __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.iconContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: 'https://t.me/hacony',
    target: "_blank",
    rel: "noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.icon,
    src: '/images/logo-telegram.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }))))));
}
_c = PageIndex;
;

var CommissionTier = function CommissionTier(props) {
  var header = props.header,
      descPoints = props.descPoints,
      gallery = props.gallery,
      galleryHeight = props.galleryHeight;
  return __jsx(ContentRow, {
    wideContent: true,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.commissionTierContainer,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, gallery && __jsx(_common_image_gallery__WEBPACK_IMPORTED_MODULE_6__["default"], {
    srcs: gallery,
    height: galleryHeight,
    padCount: 6,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.commissionTierInfoContainer,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.commissionTierInfo,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.commissionTierHeader,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, header), __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.commissionTierDescriptions,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, descPoints && descPoints.map(function (descPoint, i) {
    return __jsx("li", {
      className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.commissionTierDescription,
      key: i,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 33
      }
    }, descPoint);
  })))))));
};

_c2 = CommissionTier;

var ContentRow = function ContentRow(_ref) {
  var wideContent = _ref.wideContent,
      children = _ref.children;
  return __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.contentRow,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.content, wideContent && _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.wide),
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, children));
}; // const ImageGallery: FunctionComponent<{ srcs: string[], height: string, padCount: number }> = ({ srcs, height, padCount }) => {
//     const imageGalleryRef = useRef();
//     const [viewIndex, setViewIndex] = useState(0);
//     const [showAnimation, setShowAnimation] = useState(false);
//     const imgGallerySize = useBoundingClientRect(imageGalleryRef);
//     const [imgWidths, setImgWidths] = useState(new Array(srcs.length).fill(0));
//     const imgMargin = Math.round((imgGallerySize?.height || 1) * 0.05) || 1;
//     function getImageIndex(curViewIndex: number) {
//         const n = srcs.length;
//         const imageIndex = ((curViewIndex % n) + n) % n; // actual mod function
//         return imageIndex;
//     }
//     function getSrc(curViewIndex: number) {
//         return srcs[getImageIndex(curViewIndex)];
//     }
//     function getImageWidth(curViewIndex: number) {
//         return imgWidths[getImageIndex(curViewIndex)];
//     }
//     function getImagePosition(viewIndex: number, offsetPosition: number): string {
//         let offset = -getImageWidth(viewIndex) / 2;
//         if (offsetPosition === 0) {
//         } else if (offsetPosition < 0) {
//             for (let i = offsetPosition; i < 0; i++) {
//                 offset -= getImageWidth(viewIndex + i) + imgMargin;
//             }
//         } else if (offsetPosition > 0) {
//             for (let i = 0; i < offsetPosition; i++) {
//                 offset += getImageWidth(viewIndex + i) + imgMargin;
//             }
//         }
//         return `translateX(${offset}px)`;
//     }
//     function makeIncrementViewIndex(n: number) {
//         return () => {
//             if (!showAnimation) {
//                 setShowAnimation(true);
//             }
//             setViewIndex(viewIndex + n);
//         }
//     };
//     const handleClickPrev = makeIncrementViewIndex(-1);
//     const handleClickNext = makeIncrementViewIndex(1);
//     const galleryItemElems = [];
//     for (let i = -padCount; i <= padCount; i++) {
//         const curViewIndex = viewIndex + i;
//         const style = {
//             width: `${getImageWidth(curViewIndex)}px`,
//             transform: getImagePosition(viewIndex, i),
//             zIndex: padCount - Math.abs(i),
//         } as CSSProperties;
//         if (i != 0) {
//             style.cursor = 'pointer';
//         }
//         const className = classNames(
//             styles.imageGalleryItemContainer,
//             i !== 0 && styles.clickable,
//             showAnimation && styles.animated
//         );
//         galleryItemElems.push(
//             <div key={curViewIndex} className={className} style={style} onClick={makeIncrementViewIndex(i)}>
//                 <img className={styles.imageGalleryItem} src={getSrc(curViewIndex)} />
//             </div>
//         );
//     }
//     return (
//         <div className={styles.imageGallery} ref={imageGalleryRef} style={{ height: height }}>
//             <div className={styles.imageGalleryLeftNav} onClick={handleClickPrev}>
//                 <img className={styles.imageGalleryLeftArrow} src="/images/gallery-arrow-left.svg" />
//             </div>
//             <div className={styles.imageGalleryRightNav} onClick={handleClickNext}>
//                 <img className={styles.imageGalleryRightArrow} src="/images/gallery-arrow-right.svg" />
//             </div>
//             <div className={styles.imageGalleryItems}>
//                 {galleryItemElems}
//             </div>
//             <ImageGalleryPreview srcs={srcs} height={height} updateImageWidths={setImgWidths} />
//         </div>
//     )
// };
// const ImageGalleryPreview: FunctionComponent<{ srcs: string[], height: string, updateImageWidths: (widthArr: number[]) => void }> = ({ srcs, height, updateImageWidths }) => {
//     const previewDivRef = useRef(undefined as HTMLDivElement);
//     const previewId = useState(Math.floor(Math.random() * 100000))[0];
//     function handleImageWidthChange() {
//         console.log('update', previewId);
//         if (!previewDivRef.current) {
//             return;
//         }
//         const previewDivElem = previewDivRef.current;
//         const imgWidths = Array.from(previewDivElem.children).map(elem => elem.clientWidth);
//         updateImageWidths(imgWidths);
//     }
//     useEffect(() => {
//         handleImageWidthChange();
//     }, [srcs.join('|')]);
//     return (
//         <div className={styles.imageGalleryPreview} ref={previewDivRef} style={{ height: height }}>
//             {srcs.map((src, i) => (
//                 <img key={i} className={styles.imageGalleryPreviewImage} src={src} onLoad={handleImageWidthChange}/>
//             ))}
//         </div>
//     );
// }


_c3 = ContentRow;

var _c, _c2, _c3;

$RefreshReg$(_c, "PageIndex");
$RefreshReg$(_c2, "CommissionTier");
$RefreshReg$(_c3, "ContentRow");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/common/image-gallery.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/common/image-gallery.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".image-gallery_imageGallery__1JeAi {\n  position: relative;\n  margin-bottom: 1em;\n  overflow: hidden;\n}\n\n.image-gallery_imageGalleryLeftNav__27QwK,\n.image-gallery_imageGalleryRightNav__3FhW1 {\n  display: flex;\n  align-items: center;\n  z-index: 10000;\n  -webkit-transition: width 0.3s;\n  transition: width 0.3s;\n  cursor: pointer;\n  user-select: none;\n  /* supported by Chrome and Opera */\n  -webkit-user-select: none;\n  /* Safari */\n  -khtml-user-select: none;\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  width: 2rem;\n}\n.image-gallery_imageGalleryLeftNav__27QwK:hover .image-gallery_imageGalleryLeftArrow__gioVv,\n.image-gallery_imageGalleryLeftNav__27QwK:hover .image-gallery_imageGalleryRightArrow__1hX0l,\n.image-gallery_imageGalleryRightNav__3FhW1:hover .image-gallery_imageGalleryLeftArrow__gioVv,\n.image-gallery_imageGalleryRightNav__3FhW1:hover .image-gallery_imageGalleryRightArrow__1hX0l {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.image-gallery_imageGalleryLeftNav__27QwK:hover,\n.image-gallery_imageGalleryRightNav__3FhW1:hover {\n  width: 3.2rem;\n}\n@media (min-width: 768px) {\n  .image-gallery_imageGalleryLeftNav__27QwK,\n.image-gallery_imageGalleryRightNav__3FhW1 {\n    width: 3rem;\n  }\n  .image-gallery_imageGalleryLeftNav__27QwK:hover,\n.image-gallery_imageGalleryRightNav__3FhW1:hover {\n    width: 3.5rem;\n  }\n}\n\n.image-gallery_imageGalleryLeftNav__27QwK {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  padding-left: 0.2rem;\n  justify-content: flex-start;\n  background-image: -webkit-gradient(linear, left top, right top, from(white), to(transparent));\n  background-image: -webkit-linear-gradient(left, white, transparent);\n  background-image: linear-gradient(to right, white, transparent);\n}\n@media (min-width: 768px) {\n  .image-gallery_imageGalleryLeftNav__27QwK {\n    padding-left: 0.5rem;\n  }\n}\n\n.image-gallery_imageGalleryRightNav__3FhW1 {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  padding-right: 0.2rem;\n  justify-content: flex-end;\n  background-image: -webkit-gradient(linear, right top, left top, from(white), to(transparent));\n  background-image: -webkit-linear-gradient(right, white, transparent);\n  background-image: linear-gradient(to left, white, transparent);\n}\n@media (min-width: 768px) {\n  .image-gallery_imageGalleryRightNav__3FhW1 {\n    padding-right: 0.5rem;\n  }\n}\n\n.image-gallery_imageGalleryLeftArrow__gioVv,\n.image-gallery_imageGalleryRightArrow__1hX0l {\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n  z-index: 2;\n  height: 2rem;\n}\n@media (min-width: 768px) {\n  .image-gallery_imageGalleryLeftArrow__gioVv,\n.image-gallery_imageGalleryRightArrow__1hX0l {\n    height: 3rem;\n  }\n}\n\n.image-gallery_imageGalleryItems__10XOL {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n}\n\n.image-gallery_imageGalleryItemContainer__2MY1v {\n  position: absolute;\n  top: 0;\n  height: 100%;\n}\n.image-gallery_imageGalleryItemContainer__2MY1v.image-gallery_animated__3ObeP {\n  -webkit-transition: -webkit-transform 0.5s;\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n}\n.image-gallery_imageGalleryItemContainer__2MY1v.image-gallery_clickable__NTIrH {\n  cursor: pointer;\n}\n\n.image-gallery_imageGalleryItem__37Jh- {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center center;\n  -webkit-transition: -webkit-transform 0.5s ease-out;\n  transition: -webkit-transform 0.5s ease-out;\n  transition: transform 0.5s ease-out;\n  transition: transform 0.5s ease-out, -webkit-transform 0.5s ease-out;\n}\n.image-gallery_imageGalleryItem__37Jh-:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n}\n\n.image-gallery_imageGalleryPreview__3qUtx {\n  position: fixed;\n  left: 0;\n  top: 300vh;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.image-gallery_imageGalleryPreviewImage__2yf5J {\n  height: 100%;\n}", "",{"version":3,"sources":["webpack://image-gallery.module.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;EAEA,kBAAA;EAEA,gBAAA;AAHJ;;AAMA;;EAEI,aAAA;EACA,mBAAA;EAEA,cAAA;EAEA,8BAAA;EAAA,sBAAA;EAEA,eAAA;EACA,iBAAA;EAAmB,kCAAA;EACnB,yBAAA;EAA2B,WAAA;EAC3B,wBAAA;EAA0B,mBAAA;EAC1B,sBAAA;EAAwB,YAAA;EACxB,qBAAA;EAAuB,2BAAA;EASvB,WAAA;AATJ;AAGQ;;;;EAEI,6BAAA;UAAA,qBAAA;AACZ;AAII;;EACI,aAAA;AADR;AAII;EA5BJ;;IA6BQ,WAAA;EAAN;EACM;;IACI,aAAA;EAEV;AACF;;AAEA;EACI,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EAEA,oBAAA;EAKA,2BAAA;EAEA,6FAAA;EAAA,mEAAA;EAAA,+DAAA;AALJ;AADI;EAPJ;IAQQ,oBAAA;EAIN;AACF;;AAGA;EACI,kBAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EAEA,qBAAA;EAKA,yBAAA;EAEA,6FAAA;EAAA,oEAAA;EAAA,8DAAA;AANJ;AAAI;EAPJ;IAQQ,qBAAA;EAGN;AACF;;AAIA;;EAGI,0CAAA;EAAA,kCAAA;EAAA,0BAAA;EAAA,kDAAA;EAEA,UAAA;EAEA,YAAA;AAJJ;AAKI;EARJ;;IASQ,YAAA;EADN;AACF;;AAIA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;AADJ;;AAIA;EACI,kBAAA;EACA,MAAA;EACA,YAAA;AADJ;AAGI;EACI,0CAAA;EAAA,kCAAA;EAAA,0BAAA;EAAA,kDAAA;AADR;AAII;EACI,eAAA;AAFR;;AAMA;EACI,WAAA;EACA,YAAA;EAEA,iBAAA;EACA,8BAAA;EAEA,mDAAA;EAAA,2CAAA;EAAA,mCAAA;EAAA,oEAAA;AALJ;AAOI;EACI,8BAAA;UAAA,sBAAA;AALR;;AASA;EACI,eAAA;EACA,OAAA;EACA,UAAA;EAEA,UAAA;EACA,oBAAA;AAPJ;;AAUA;EACI,YAAA;AAPJ","sourcesContent":["@use '../../styles/variables.scss' as variables;\r\n\r\n.imageGallery {\r\n    position: relative;\r\n\r\n    margin-bottom: 1em;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n.imageGalleryLeftNav,\r\n.imageGalleryRightNav {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    z-index: 10000;\r\n\r\n    transition: width 0.3s;\r\n\r\n    cursor: pointer;\r\n    user-select: none; /* supported by Chrome and Opera */\r\n    -webkit-user-select: none; /* Safari */\r\n    -khtml-user-select: none; /* Konqueror HTML */\r\n    -moz-user-select: none; /* Firefox */\r\n    -ms-user-select: none; /* Internet Explorer/Edge */\r\n\r\n    &:hover {\r\n        .imageGalleryLeftArrow,\r\n        .imageGalleryRightArrow {\r\n            transform: scale(1.1);\r\n        }\r\n    }\r\n\r\n    width: 2rem;\r\n    &:hover {\r\n        width: 3.2rem;\r\n    }\r\n\r\n    @media (min-width: variables.$desktop-min-width) {\r\n        width: 3rem;\r\n        &:hover {\r\n            width: 3.5rem;\r\n        }\r\n    }\r\n}\r\n\r\n.imageGalleryLeftNav {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n\r\n    padding-left: 0.2rem;\r\n    @media (min-width: variables.$desktop-min-width) {\r\n        padding-left: 0.5rem;\r\n    }\r\n\r\n    justify-content: flex-start;\r\n\r\n    background-image: linear-gradient(to right, white, transparent);\r\n}\r\n\r\n.imageGalleryRightNav {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n\r\n    padding-right: 0.2rem;\r\n    @media (min-width: variables.$desktop-min-width) {\r\n        padding-right: 0.5rem;\r\n    }\r\n\r\n    justify-content: flex-end;\r\n\r\n    background-image: linear-gradient(to left, white, transparent);\r\n}\r\n\r\n.imageGalleryLeftArrow,\r\n.imageGalleryRightArrow {\r\n\r\n    transition: transform 0.3s;\r\n\r\n    z-index: 2;\r\n\r\n    height: 2rem;\r\n    @media (min-width: variables.$desktop-min-width) {\r\n        height: 3rem;\r\n    }\r\n}\r\n\r\n.imageGalleryItems {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.imageGalleryItemContainer {\r\n    position: absolute;\r\n    top: 0;\r\n    height: 100%;\r\n\r\n    &.animated {\r\n        transition: transform 0.5s;\r\n    }\r\n    \r\n    &.clickable {\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.imageGalleryItem {\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    object-fit: cover;\r\n    object-position: center center;\r\n\r\n    transition: transform 0.5s ease-out;\r\n\r\n    &:hover {\r\n        transform: scale(1.05);\r\n    }\r\n}\r\n\r\n.imageGalleryPreview {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 300vh;\r\n\r\n    opacity: 0;\r\n    pointer-events: none;\r\n}\r\n\r\n.imageGalleryPreviewImage {\r\n    height: 100%;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"imageGallery": "image-gallery_imageGallery__1JeAi",
	"imageGalleryLeftNav": "image-gallery_imageGalleryLeftNav__27QwK",
	"imageGalleryRightNav": "image-gallery_imageGalleryRightNav__3FhW1",
	"imageGalleryLeftArrow": "image-gallery_imageGalleryLeftArrow__gioVv",
	"imageGalleryRightArrow": "image-gallery_imageGalleryRightArrow__1hX0l",
	"imageGalleryItems": "image-gallery_imageGalleryItems__10XOL",
	"imageGalleryItemContainer": "image-gallery_imageGalleryItemContainer__2MY1v",
	"animated": "image-gallery_animated__3ObeP",
	"clickable": "image-gallery_clickable__NTIrH",
	"imageGalleryItem": "image-gallery_imageGalleryItem__37Jh-",
	"imageGalleryPreview": "image-gallery_imageGalleryPreview__3qUtx",
	"imageGalleryPreviewImage": "image-gallery_imageGalleryPreviewImage__2yf5J"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "./utils/react-hooks.ts":
/*!******************************!*\
  !*** ./utils/react-hooks.ts ***!
  \******************************/
/*! exports provided: useBoundingClientRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBoundingClientRect", function() { return useBoundingClientRect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
var _s = $RefreshSig$();



function useBoundingClientRect(ref) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      boundingClientRect = _useState[0],
      setBoundingClientRect = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function handleShift() {
      if (typeof ref.current == 'undefined') {
        return;
      }

      var newRect = DOMRectReadOnly.fromRect(ref.current.getBoundingClientRect());

      if (boundingClientRect != undefined && newRect.bottom == boundingClientRect.bottom && newRect.height == boundingClientRect.height && newRect.left == boundingClientRect.left && newRect.right == boundingClientRect.right && newRect.top == boundingClientRect.top && newRect.width == boundingClientRect.width && newRect.x == boundingClientRect.x && newRect.y == boundingClientRect.y) {
        return;
      }

      setBoundingClientRect(newRect);
    }

    window.addEventListener('resize', handleShift);
    window.addEventListener('scroll', handleShift);
    var resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"](handleShift);
    resizeObserver.observe(ref.current);
    return function () {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }

      window.removeEventListener('scroll', handleShift);
      window.removeEventListener('resize', handleShift);
    };
  }, []);
  return boundingClientRect;
}

_s(useBoundingClientRect, "6PeSf/u10ERMW8UjU80NFFacVV8=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vaW1hZ2UtZ2FsbGVyeS5tb2R1bGUuc2Nzcz9kMDc5Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1vbi9pbWFnZS1nYWxsZXJ5LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlLWNvbW1pc3Npb24vcGFnZS1jb21taXNzaW9uLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vaW1hZ2UtZ2FsbGVyeS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbC9kaXN0L1Jlc2l6ZU9ic2VydmVyLmVzLmpzIiwid2VicGFjazovL19OX0UvLi91dGlscy9yZWFjdC1ob29rcy50cyJdLCJuYW1lcyI6WyJJbWFnZUdhbGxlcnkiLCJzcmNzIiwiaGVpZ2h0IiwicGFkQ291bnQiLCJpbWFnZUdhbGxlcnlSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInZpZXdJbmRleCIsInNldFZpZXdJbmRleCIsInNob3dBbmltYXRpb24iLCJzZXRTaG93QW5pbWF0aW9uIiwiaW1nR2FsbGVyeVNpemUiLCJ1c2VCb3VuZGluZ0NsaWVudFJlY3QiLCJBcnJheSIsImxlbmd0aCIsImZpbGwiLCJpbWdXaWR0aHMiLCJzZXRJbWdXaWR0aHMiLCJpbWdNYXJnaW4iLCJNYXRoIiwicm91bmQiLCJnZXRJbWFnZUluZGV4IiwiY3VyVmlld0luZGV4IiwibiIsImltYWdlSW5kZXgiLCJnZXRTcmMiLCJnZXRJbWFnZVdpZHRoIiwiZ2V0SW1hZ2VQb3NpdGlvbiIsIm9mZnNldFBvc2l0aW9uIiwib2Zmc2V0IiwiaSIsIm1ha2VJbmNyZW1lbnRWaWV3SW5kZXgiLCJoYW5kbGVDbGlja1ByZXYiLCJoYW5kbGVDbGlja05leHQiLCJnYWxsZXJ5SXRlbUVsZW1zIiwic3R5bGUiLCJ3aWR0aCIsInRyYW5zZm9ybSIsInpJbmRleCIsImFicyIsImN1cnNvciIsImNsYXNzTmFtZSIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJpbWFnZUdhbGxlcnlJdGVtQ29udGFpbmVyIiwiY2xpY2thYmxlIiwiYW5pbWF0ZWQiLCJwdXNoIiwiaW1hZ2VHYWxsZXJ5SXRlbSIsImltYWdlR2FsbGVyeSIsImltYWdlR2FsbGVyeUxlZnROYXYiLCJpbWFnZUdhbGxlcnlMZWZ0QXJyb3ciLCJpbWFnZUdhbGxlcnlSaWdodE5hdiIsImltYWdlR2FsbGVyeVJpZ2h0QXJyb3ciLCJpbWFnZUdhbGxlcnlJdGVtcyIsIkltYWdlR2FsbGVyeVByZXZpZXciLCJ1cGRhdGVJbWFnZVdpZHRocyIsInByZXZpZXdEaXZSZWYiLCJ1bmRlZmluZWQiLCJwcmV2aWV3SWQiLCJmbG9vciIsInJhbmRvbSIsImhhbmRsZUltYWdlV2lkdGhDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInByZXZpZXdEaXZFbGVtIiwiZnJvbSIsImNoaWxkcmVuIiwibWFwIiwiZWxlbSIsImNsaWVudFdpZHRoIiwidXNlRWZmZWN0Iiwiam9pbiIsImltYWdlR2FsbGVyeVByZXZpZXciLCJzcmMiLCJpbWFnZUdhbGxlcnlQcmV2aWV3SW1hZ2UiLCJQYWdlSW5kZXgiLCJDT01NSVNTSU9OX1BBR0VfSU5GTyIsImJhbm5lckNvbnRhaW5lciIsImJhbm5lciIsImJhbm5lckZhZGUiLCJjb250ZW50Q29udGFpbmVyIiwidGl0bGVDb250YWluZXIiLCJ0aXRsZUxvZ28iLCJ0aXRsZVRleHQiLCJzdWJ0aXRsZVRleHQiLCJDT01NSVNTSU9OX1RJRVJTIiwiY29taXNzaW9uVGllciIsImV4dGVybmFsR2FsbGVyeUhlYWRlciIsImljb25Db250YWluZXIiLCJpY29uIiwiZHJhd0luZm9Db250YWluZXIiLCJkcmF3SW5mb1NlY3Rpb24iLCJkcmF3SW5mb0hlYWRlciIsIndpbGxEcmF3TGlzdCIsIml0ZW0iLCJkcmF3SW5mb0xpc3RJdGVtIiwid29udERyYXdMaXN0IiwiY29tbWlzc2lvbk5vdGVzSGVhZGVyIiwiY29tbWlzc2lvbk5vdGVMaXN0IiwiY29tbWlzc2lvbk5vdGVzIiwiY29tbWlzc2lvbk5vdGVMaXN0SXRlbSIsImNvbnRhY3RIZWFkZXIiLCJjb250YWN0VGV4dCIsIkNvbW1pc3Npb25UaWVyIiwicHJvcHMiLCJoZWFkZXIiLCJkZXNjUG9pbnRzIiwiZ2FsbGVyeSIsImdhbGxlcnlIZWlnaHQiLCJjb21taXNzaW9uVGllckNvbnRhaW5lciIsImNvbW1pc3Npb25UaWVySW5mb0NvbnRhaW5lciIsImNvbW1pc3Npb25UaWVySW5mbyIsImNvbW1pc3Npb25UaWVySGVhZGVyIiwiY29tbWlzc2lvblRpZXJEZXNjcmlwdGlvbnMiLCJkZXNjUG9pbnQiLCJjb21taXNzaW9uVGllckRlc2NyaXB0aW9uIiwiQ29udGVudFJvdyIsIndpZGVDb250ZW50IiwiY29udGVudFJvdyIsImNvbnRlbnQiLCJ3aWRlIiwicmVmIiwiYm91bmRpbmdDbGllbnRSZWN0Iiwic2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGFuZGxlU2hpZnQiLCJuZXdSZWN0IiwiRE9NUmVjdFJlYWRPbmx5IiwiZnJvbVJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJ4IiwieSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxVQUFVLG1CQUFPLENBQUMsc05BQTJHO0FBQzdILDBCQUEwQixtQkFBTyxDQUFDLG9tQkFBc1Y7O0FBRXhYOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtB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QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1QkFBdUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYyxvRUFBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvNUJyQjtBQUNBO0FBRU8sU0FBUzFHLHFCQUFULENBQStCK0csR0FBL0IsRUFBZ0c7QUFBQTs7QUFBQSxrQkFDL0NySCxzREFBUSxDQUFDb0QsU0FBRCxDQUR1QztBQUFBLE1BQzVGa0Usa0JBRDRGO0FBQUEsTUFDeEVDLHFCQUR3RTs7QUFHbkdyRCx5REFBUyxDQUFDLFlBQU07QUFDWixhQUFTc0QsV0FBVCxHQUF1QjtBQUNuQixVQUFJLE9BQU9ILEdBQUcsQ0FBQzFELE9BQVgsSUFBc0IsV0FBMUIsRUFBdUM7QUFDbkM7QUFDSDs7QUFDRCxVQUFNOEQsT0FBTyxHQUFHQyxlQUFlLENBQUNDLFFBQWhCLENBQXlCTixHQUFHLENBQUMxRCxPQUFKLENBQVlpRSxxQkFBWixFQUF6QixDQUFoQjs7QUFDQSxVQUNJTixrQkFBa0IsSUFBSWxFLFNBQXRCLElBQ0FxRSxPQUFPLENBQUNJLE1BQVIsSUFBa0JQLGtCQUFrQixDQUFDTyxNQURyQyxJQUVBSixPQUFPLENBQUM3SCxNQUFSLElBQWtCMEgsa0JBQWtCLENBQUMxSCxNQUZyQyxJQUdBNkgsT0FBTyxDQUFDSyxJQUFSLElBQWdCUixrQkFBa0IsQ0FBQ1EsSUFIbkMsSUFJQUwsT0FBTyxDQUFDTSxLQUFSLElBQWlCVCxrQkFBa0IsQ0FBQ1MsS0FKcEMsSUFLQU4sT0FBTyxDQUFDTyxHQUFSLElBQWVWLGtCQUFrQixDQUFDVSxHQUxsQyxJQU1BUCxPQUFPLENBQUMzRixLQUFSLElBQWlCd0Ysa0JBQWtCLENBQUN4RixLQU5wQyxJQU9BMkYsT0FBTyxDQUFDUSxDQUFSLElBQWFYLGtCQUFrQixDQUFDVyxDQVBoQyxJQVFBUixPQUFPLENBQUNTLENBQVIsSUFBYVosa0JBQWtCLENBQUNZLENBVHBDLEVBVUU7QUFDRTtBQUNIOztBQUNEWCwyQkFBcUIsQ0FBQ0UsT0FBRCxDQUFyQjtBQUNIOztBQUVEVSxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDWixXQUFsQztBQUNBVyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDWixXQUFsQztBQUNBLFFBQU1hLGNBQWMsR0FBRyxJQUFJQyxnRUFBSixDQUFtQmQsV0FBbkIsQ0FBdkI7QUFDQWEsa0JBQWMsQ0FBQ0UsT0FBZixDQUF1QmxCLEdBQUcsQ0FBQzFELE9BQTNCO0FBRUEsV0FBTyxZQUFNO0FBQ1QsVUFBSTBFLGNBQUosRUFBb0I7QUFDaEJBLHNCQUFjLENBQUNHLFVBQWY7QUFDSDs7QUFDREwsWUFBTSxDQUFDTSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ2pCLFdBQXJDO0FBQ0FXLFlBQU0sQ0FBQ00sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNqQixXQUFyQztBQUNILEtBTkQ7QUFPSCxHQWxDUSxFQWtDTixFQWxDTSxDQUFUO0FBb0NBLFNBQU9GLGtCQUFQO0FBQ0g7O0dBeENlaEgscUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGRiN2JlYmJiNDEyNzY0YjFjOGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vaW1hZ2UtZ2FsbGVyeS5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vaW1hZ2UtZ2FsbGVyeS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2ltYWdlLWdhbGxlcnkubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgQ1NTUHJvcGVydGllcywgRnVuY3Rpb25Db21wb25lbnQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQm91bmRpbmdDbGllbnRSZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVhY3QtaG9va3MnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZS1nYWxsZXJ5Lm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IEltYWdlR2FsbGVyeTogRnVuY3Rpb25Db21wb25lbnQ8eyBzcmNzOiBzdHJpbmdbXSwgaGVpZ2h0OiBzdHJpbmcsIHBhZENvdW50OiBudW1iZXIgfT4gPSAoeyBzcmNzLCBoZWlnaHQsIHBhZENvdW50IH0pID0+IHtcclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeVJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgW3ZpZXdJbmRleCwgc2V0Vmlld0luZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IFtzaG93QW5pbWF0aW9uLCBzZXRTaG93QW5pbWF0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBpbWdHYWxsZXJ5U2l6ZSA9IHVzZUJvdW5kaW5nQ2xpZW50UmVjdChpbWFnZUdhbGxlcnlSZWYpO1xyXG4gICAgY29uc3QgW2ltZ1dpZHRocywgc2V0SW1nV2lkdGhzXSA9IHVzZVN0YXRlKG5ldyBBcnJheShzcmNzLmxlbmd0aCkuZmlsbCgwKSk7XHJcblxyXG4gICAgY29uc3QgaW1nTWFyZ2luID0gTWF0aC5yb3VuZCgoaW1nR2FsbGVyeVNpemU/LmhlaWdodCB8fCAxKSAqIDAuMDUpIHx8IDE7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW1hZ2VJbmRleChjdXJWaWV3SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IG4gPSBzcmNzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBpbWFnZUluZGV4ID0gKChjdXJWaWV3SW5kZXggJSBuKSArIG4pICUgbjsgLy8gYWN0dWFsIG1vZCBmdW5jdGlvblxyXG4gICAgICAgIHJldHVybiBpbWFnZUluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNyYyhjdXJWaWV3SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBzcmNzW2dldEltYWdlSW5kZXgoY3VyVmlld0luZGV4KV07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW1hZ2VXaWR0aChjdXJWaWV3SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBpbWdXaWR0aHNbZ2V0SW1hZ2VJbmRleChjdXJWaWV3SW5kZXgpXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJbWFnZVBvc2l0aW9uKHZpZXdJbmRleDogbnVtYmVyLCBvZmZzZXRQb3NpdGlvbjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gLWdldEltYWdlV2lkdGgodmlld0luZGV4KSAvIDI7XHJcbiAgICAgICAgaWYgKG9mZnNldFBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXRQb3NpdGlvbiA8IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldFBvc2l0aW9uOyBpIDwgMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgLT0gZ2V0SW1hZ2VXaWR0aCh2aWV3SW5kZXggKyBpKSArIGltZ01hcmdpbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0UG9zaXRpb24gPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2Zmc2V0UG9zaXRpb247IGkrKykge1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IGdldEltYWdlV2lkdGgodmlld0luZGV4ICsgaSkgKyBpbWdNYXJnaW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVYKCR7b2Zmc2V0fXB4KWA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUluY3JlbWVudFZpZXdJbmRleChuOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNob3dBbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHNldFNob3dBbmltYXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0Vmlld0luZGV4KHZpZXdJbmRleCArIG4pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVDbGlja1ByZXYgPSBtYWtlSW5jcmVtZW50Vmlld0luZGV4KC0xKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrTmV4dCA9IG1ha2VJbmNyZW1lbnRWaWV3SW5kZXgoMSk7XHJcblxyXG4gICAgY29uc3QgZ2FsbGVyeUl0ZW1FbGVtcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IC1wYWRDb3VudDsgaSA8PSBwYWRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY3VyVmlld0luZGV4ID0gdmlld0luZGV4ICsgaTtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IGAke2dldEltYWdlV2lkdGgoY3VyVmlld0luZGV4KX1weGAsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogZ2V0SW1hZ2VQb3NpdGlvbih2aWV3SW5kZXgsIGkpLFxyXG4gICAgICAgICAgICB6SW5kZXg6IHBhZENvdW50IC0gTWF0aC5hYnMoaSksXHJcbiAgICAgICAgfSBhcyBDU1NQcm9wZXJ0aWVzO1xyXG4gICAgICAgIGlmIChpICE9IDApIHtcclxuICAgICAgICAgICAgc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICBzdHlsZXMuaW1hZ2VHYWxsZXJ5SXRlbUNvbnRhaW5lcixcclxuICAgICAgICAgICAgaSAhPT0gMCAmJiBzdHlsZXMuY2xpY2thYmxlLFxyXG4gICAgICAgICAgICBzaG93QW5pbWF0aW9uICYmIHN0eWxlcy5hbmltYXRlZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZ2FsbGVyeUl0ZW1FbGVtcy5wdXNoKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17Y3VyVmlld0luZGV4fSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXttYWtlSW5jcmVtZW50Vmlld0luZGV4KGkpfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VHYWxsZXJ5SXRlbX0gc3JjPXtnZXRTcmMoY3VyVmlld0luZGV4KX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VHYWxsZXJ5fSByZWY9e2ltYWdlR2FsbGVyeVJlZn0gc3R5bGU9e3sgaGVpZ2h0OiBoZWlnaHQgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VHYWxsZXJ5TGVmdE5hdn0gb25DbGljaz17aGFuZGxlQ2xpY2tQcmV2fT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VHYWxsZXJ5TGVmdEFycm93fSBzcmM9XCIvaW1hZ2VzL2dhbGxlcnktYXJyb3ctbGVmdC5zdmdcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUdhbGxlcnlSaWdodE5hdn0gb25DbGljaz17aGFuZGxlQ2xpY2tOZXh0fT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VHYWxsZXJ5UmlnaHRBcnJvd30gc3JjPVwiL2ltYWdlcy9nYWxsZXJ5LWFycm93LXJpZ2h0LnN2Z1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlR2FsbGVyeUl0ZW1zfT5cclxuICAgICAgICAgICAgICAgIHtnYWxsZXJ5SXRlbUVsZW1zfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEltYWdlR2FsbGVyeVByZXZpZXcgc3Jjcz17c3Jjc30gaGVpZ2h0PXtoZWlnaHR9IHVwZGF0ZUltYWdlV2lkdGhzPXtzZXRJbWdXaWR0aHN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUdhbGxlcnk7XHJcblxyXG5jb25zdCBJbWFnZUdhbGxlcnlQcmV2aWV3OiBGdW5jdGlvbkNvbXBvbmVudDx7IHNyY3M6IHN0cmluZ1tdLCBoZWlnaHQ6IHN0cmluZywgdXBkYXRlSW1hZ2VXaWR0aHM6ICh3aWR0aEFycjogbnVtYmVyW10pID0+IHZvaWQgfT4gPSAoeyBzcmNzLCBoZWlnaHQsIHVwZGF0ZUltYWdlV2lkdGhzIH0pID0+IHtcclxuICAgIGNvbnN0IHByZXZpZXdEaXZSZWYgPSB1c2VSZWYodW5kZWZpbmVkIGFzIEhUTUxEaXZFbGVtZW50KTtcclxuXHJcbiAgICBjb25zdCBwcmV2aWV3SWQgPSB1c2VTdGF0ZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApKVswXTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUltYWdlV2lkdGhDaGFuZ2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZScsIHByZXZpZXdJZCk7XHJcbiAgICAgICAgaWYgKCFwcmV2aWV3RGl2UmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJldmlld0RpdkVsZW0gPSBwcmV2aWV3RGl2UmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgY29uc3QgaW1nV2lkdGhzID0gQXJyYXkuZnJvbShwcmV2aWV3RGl2RWxlbS5jaGlsZHJlbikubWFwKGVsZW0gPT4gZWxlbS5jbGllbnRXaWR0aCk7XHJcbiAgICAgICAgdXBkYXRlSW1hZ2VXaWR0aHMoaW1nV2lkdGhzKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGhhbmRsZUltYWdlV2lkdGhDaGFuZ2UoKTtcclxuICAgIH0sIFtzcmNzLmpvaW4oJ3wnKV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUdhbGxlcnlQcmV2aWV3fSByZWY9e3ByZXZpZXdEaXZSZWZ9IHN0eWxlPXt7IGhlaWdodDogaGVpZ2h0IH19PlxyXG4gICAgICAgICAgICB7c3Jjcy5tYXAoKHNyYywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGltZyBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlR2FsbGVyeVByZXZpZXdJbWFnZX0gc3JjPXtzcmN9IG9uTG9hZD17aGFuZGxlSW1hZ2VXaWR0aENoYW5nZX0vPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcywgRnJhZ21lbnQsIEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbW1pc3Npb25Ob3RlcywgQ09NTUlTU0lPTl9QQUdFX0lORk8sIENPTU1JU1NJT05fVElFUlMsIHdpbGxEcmF3TGlzdCwgd29udERyYXdMaXN0IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbW1pc3Npb24tY29uc3RhbnRzJztcclxuaW1wb3J0IFNpdGVIZWFkIGZyb20gJy4uL2NvbW1vbi9zaXRlLWhlYWQnO1xyXG5pbXBvcnQgeyB1c2VCb3VuZGluZ0NsaWVudFJlY3QgfSBmcm9tICcuLi8uLi91dGlscy9yZWFjdC1ob29rcyc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UtY29tbWlzc2lvbi5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBJbWFnZUdhbGxlcnkgZnJvbSAnLi4vY29tbW9uL2ltYWdlLWdhbGxlcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZUluZGV4KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxTaXRlSGVhZCB7Li4uQ09NTUlTU0lPTl9QQUdFX0lORk99IC8+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbm5lcn0+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFubmVyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuYmFubmVyfSBzcmM9eycvaW1hZ2VzL2NvbW1pc3Npb24tYmFubmVyLnBuZyd9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbm5lckZhZGV9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVMb2dvfSBzcmM9eycvaW1hZ2VzL2xvZ28taGFjb255LnBuZyd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZVRleHR9PkNvbW1pc3Npb24gSW5mb3JtYXRpb248L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZVRleHR9PkNvbW1pc3Npb25zIG9wZW4gdGhlIGZpcnN0IGRheSBvZiBldmVyeSBtb250aCE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRSb3c+XHJcbiAgICAgICAgICAgICAgICB7Q09NTUlTU0lPTl9USUVSUy5tYXAoKGNvbWlzc2lvblRpZXIsIGkpID0+IDxDb21taXNzaW9uVGllciB7Li4uY29taXNzaW9uVGllcn0ga2V5PXtpfSAvPil9XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuZXh0ZXJuYWxHYWxsZXJ5SGVhZGVyfT5Gb3IgbW9yZSBleGFtcGxlcywgY2hlY2sgb3V0IG15IGdhbGxlcnk8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL3R3aXR0ZXIuY29tL2hvcm55c2hhcmthdCd9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gc3JjPXsnL2ltYWdlcy9sb2dvLXR3aXR0ZXIucG5nJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly93d3cuZnVyYWZmaW5pdHkubmV0L3VzZXIvcXVuZGl1bSd9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gc3JjPXsnL2ltYWdlcy9sb2dvLWZ1cmFmZmluaXR5LnBuZyd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJhd0luZm9Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyYXdJbmZvU2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuZHJhd0luZm9IZWFkZXJ9PldoYXQgSSB3aWxsIGRyYXfigKY8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aWxsRHJhd0xpc3QubWFwKChpdGVtLCBpKSA9PiA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuZHJhd0luZm9MaXN0SXRlbX0ga2V5PXtpfT57aXRlbX08L2xpPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kcmF3SW5mb1NlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmRyYXdJbmZvSGVhZGVyfT5XaGF0IEkgd29u4oCZdCBkcmF34oCmPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29udERyYXdMaXN0Lm1hcCgoaXRlbSwgaSkgPT4gPGxpIGNsYXNzTmFtZT17c3R5bGVzLmRyYXdJbmZvTGlzdEl0ZW19IGtleT17aX0+e2l0ZW19PC9saT4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWlzc2lvbk5vdGVzSGVhZGVyfT5QbGVhc2Ugbm90ZTo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5jb21taXNzaW9uTm90ZUxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29tbWlzc2lvbk5vdGVzLm1hcCgoaXRlbSwgaSkgPT4gPGxpIGNsYXNzTmFtZT17c3R5bGVzLmNvbW1pc3Npb25Ob3RlTGlzdEl0ZW19IGtleT17aX0+e2l0ZW19PC9saT4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdEhlYWRlcn0+Q29udGFjdDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdFRleHR9PkZvciBjb21taXNzaW9ucyBhbmQgcXVlc3Rpb25zLCBwbGVhc2UgY29udGFjdCBtZSBvbiBUZWxlZ3JhbSE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vdC5tZS9oYWNvbnknfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz17Jy9pbWFnZXMvbG9nby10ZWxlZ3JhbS5wbmcnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRSb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21taXNzaW9uVGllclByb3BzIHtcclxuICAgIGhlYWRlcjogc3RyaW5nO1xyXG4gICAgZGVzY1BvaW50cz86IHN0cmluZ1tdO1xyXG4gICAgZ2FsbGVyeT86IHN0cmluZ1tdO1xyXG4gICAgZ2FsbGVyeUhlaWdodD86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ29tbWlzc2lvblRpZXI6IEZ1bmN0aW9uQ29tcG9uZW50PENvbW1pc3Npb25UaWVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGhlYWRlciwgZGVzY1BvaW50cywgZ2FsbGVyeSwgZ2FsbGVyeUhlaWdodCB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gPENvbnRlbnRSb3cgd2lkZUNvbnRlbnQ9e3RydWV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWlzc2lvblRpZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7Z2FsbGVyeSAmJiA8SW1hZ2VHYWxsZXJ5IHNyY3M9e2dhbGxlcnl9IGhlaWdodD17Z2FsbGVyeUhlaWdodH0gcGFkQ291bnQ9ezZ9IC8+fVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1pc3Npb25UaWVySW5mb0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1pc3Npb25UaWVySW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNvbW1pc3Npb25UaWVySGVhZGVyfT57aGVhZGVyfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21taXNzaW9uVGllckRlc2NyaXB0aW9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjUG9pbnRzICYmIGRlc2NQb2ludHMubWFwKChkZXNjUG9pbnQsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWlzc2lvblRpZXJEZXNjcmlwdGlvbn0ga2V5PXtpfT57ZGVzY1BvaW50fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGVudFJvdz47XHJcbn07XHJcblxyXG5jb25zdCBDb250ZW50Um93OiBGdW5jdGlvbkNvbXBvbmVudDx7IHdpZGVDb250ZW50PzogYm9vbGVhbiB9PiA9ICh7IHdpZGVDb250ZW50LCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudFJvd30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jb250ZW50LCB3aWRlQ29udGVudCAmJiBzdHlsZXMud2lkZSl9PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbi8vIGNvbnN0IEltYWdlR2FsbGVyeTogRnVuY3Rpb25Db21wb25lbnQ8eyBzcmNzOiBzdHJpbmdbXSwgaGVpZ2h0OiBzdHJpbmcsIHBhZENvdW50OiBudW1iZXIgfT4gPSAoeyBzcmNzLCBoZWlnaHQsIHBhZENvdW50IH0pID0+IHtcclxuLy8gICAgIGNvbnN0IGltYWdlR2FsbGVyeVJlZiA9IHVzZVJlZigpO1xyXG4vLyAgICAgY29uc3QgW3ZpZXdJbmRleCwgc2V0Vmlld0luZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuLy8gICAgIGNvbnN0IFtzaG93QW5pbWF0aW9uLCBzZXRTaG93QW5pbWF0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbi8vICAgICBjb25zdCBpbWdHYWxsZXJ5U2l6ZSA9IHVzZUJvdW5kaW5nQ2xpZW50UmVjdChpbWFnZUdhbGxlcnlSZWYpO1xyXG4vLyAgICAgY29uc3QgW2ltZ1dpZHRocywgc2V0SW1nV2lkdGhzXSA9IHVzZVN0YXRlKG5ldyBBcnJheShzcmNzLmxlbmd0aCkuZmlsbCgwKSk7XHJcblxyXG4vLyAgICAgY29uc3QgaW1nTWFyZ2luID0gTWF0aC5yb3VuZCgoaW1nR2FsbGVyeVNpemU/LmhlaWdodCB8fCAxKSAqIDAuMDUpIHx8IDE7XHJcblxyXG4vLyAgICAgZnVuY3Rpb24gZ2V0SW1hZ2VJbmRleChjdXJWaWV3SW5kZXg6IG51bWJlcikge1xyXG4vLyAgICAgICAgIGNvbnN0IG4gPSBzcmNzLmxlbmd0aDtcclxuLy8gICAgICAgICBjb25zdCBpbWFnZUluZGV4ID0gKChjdXJWaWV3SW5kZXggJSBuKSArIG4pICUgbjsgLy8gYWN0dWFsIG1vZCBmdW5jdGlvblxyXG4vLyAgICAgICAgIHJldHVybiBpbWFnZUluZGV4O1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGZ1bmN0aW9uIGdldFNyYyhjdXJWaWV3SW5kZXg6IG51bWJlcikge1xyXG4vLyAgICAgICAgIHJldHVybiBzcmNzW2dldEltYWdlSW5kZXgoY3VyVmlld0luZGV4KV07XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZnVuY3Rpb24gZ2V0SW1hZ2VXaWR0aChjdXJWaWV3SW5kZXg6IG51bWJlcikge1xyXG4vLyAgICAgICAgIHJldHVybiBpbWdXaWR0aHNbZ2V0SW1hZ2VJbmRleChjdXJWaWV3SW5kZXgpXTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBmdW5jdGlvbiBnZXRJbWFnZVBvc2l0aW9uKHZpZXdJbmRleDogbnVtYmVyLCBvZmZzZXRQb3NpdGlvbjogbnVtYmVyKTogc3RyaW5nIHtcclxuLy8gICAgICAgICBsZXQgb2Zmc2V0ID0gLWdldEltYWdlV2lkdGgodmlld0luZGV4KSAvIDI7XHJcbi8vICAgICAgICAgaWYgKG9mZnNldFBvc2l0aW9uID09PSAwKSB7XHJcbi8vICAgICAgICAgfSBlbHNlIGlmIChvZmZzZXRQb3NpdGlvbiA8IDApIHtcclxuLy8gICAgICAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldFBvc2l0aW9uOyBpIDwgMDsgaSsrKSB7XHJcbi8vICAgICAgICAgICAgICAgICBvZmZzZXQgLT0gZ2V0SW1hZ2VXaWR0aCh2aWV3SW5kZXggKyBpKSArIGltZ01hcmdpbjtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0UG9zaXRpb24gPiAwKSB7XHJcbi8vICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2Zmc2V0UG9zaXRpb247IGkrKykge1xyXG4vLyAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IGdldEltYWdlV2lkdGgodmlld0luZGV4ICsgaSkgKyBpbWdNYXJnaW47XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVYKCR7b2Zmc2V0fXB4KWA7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZnVuY3Rpb24gbWFrZUluY3JlbWVudFZpZXdJbmRleChuOiBudW1iZXIpIHtcclxuLy8gICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBpZiAoIXNob3dBbmltYXRpb24pIHtcclxuLy8gICAgICAgICAgICAgICAgIHNldFNob3dBbmltYXRpb24odHJ1ZSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgc2V0Vmlld0luZGV4KHZpZXdJbmRleCArIG4pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcbi8vICAgICBjb25zdCBoYW5kbGVDbGlja1ByZXYgPSBtYWtlSW5jcmVtZW50Vmlld0luZGV4KC0xKTtcclxuLy8gICAgIGNvbnN0IGhhbmRsZUNsaWNrTmV4dCA9IG1ha2VJbmNyZW1lbnRWaWV3SW5kZXgoMSk7XHJcblxyXG4vLyAgICAgY29uc3QgZ2FsbGVyeUl0ZW1FbGVtcyA9IFtdO1xyXG4vLyAgICAgZm9yIChsZXQgaSA9IC1wYWRDb3VudDsgaSA8PSBwYWRDb3VudDsgaSsrKSB7XHJcbi8vICAgICAgICAgY29uc3QgY3VyVmlld0luZGV4ID0gdmlld0luZGV4ICsgaTtcclxuLy8gICAgICAgICBjb25zdCBzdHlsZSA9IHtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IGAke2dldEltYWdlV2lkdGgoY3VyVmlld0luZGV4KX1weGAsXHJcbi8vICAgICAgICAgICAgIHRyYW5zZm9ybTogZ2V0SW1hZ2VQb3NpdGlvbih2aWV3SW5kZXgsIGkpLFxyXG4vLyAgICAgICAgICAgICB6SW5kZXg6IHBhZENvdW50IC0gTWF0aC5hYnMoaSksXHJcbi8vICAgICAgICAgfSBhcyBDU1NQcm9wZXJ0aWVzO1xyXG4vLyAgICAgICAgIGlmIChpICE9IDApIHtcclxuLy8gICAgICAgICAgICAgc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKFxyXG4vLyAgICAgICAgICAgICBzdHlsZXMuaW1hZ2VHYWxsZXJ5SXRlbUNvbnRhaW5lcixcclxuLy8gICAgICAgICAgICAgaSAhPT0gMCAmJiBzdHlsZXMuY2xpY2thYmxlLFxyXG4vLyAgICAgICAgICAgICBzaG93QW5pbWF0aW9uICYmIHN0eWxlcy5hbmltYXRlZFxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICAgICAgZ2FsbGVyeUl0ZW1FbGVtcy5wdXNoKFxyXG4vLyAgICAgICAgICAgICA8ZGl2IGtleT17Y3VyVmlld0luZGV4fSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXttYWtlSW5jcmVtZW50Vmlld0luZGV4KGkpfT5cclxuLy8gICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VHYWxsZXJ5SXRlbX0gc3JjPXtnZXRTcmMoY3VyVmlld0luZGV4KX0gLz5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VHYWxsZXJ5fSByZWY9e2ltYWdlR2FsbGVyeVJlZn0gc3R5bGU9e3sgaGVpZ2h0OiBoZWlnaHQgfX0+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VHYWxsZXJ5TGVmdE5hdn0gb25DbGljaz17aGFuZGxlQ2xpY2tQcmV2fT5cclxuLy8gICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VHYWxsZXJ5TGVmdEFycm93fSBzcmM9XCIvaW1hZ2VzL2dhbGxlcnktYXJyb3ctbGVmdC5zdmdcIiAvPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUdhbGxlcnlSaWdodE5hdn0gb25DbGljaz17aGFuZGxlQ2xpY2tOZXh0fT5cclxuLy8gICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VHYWxsZXJ5UmlnaHRBcnJvd30gc3JjPVwiL2ltYWdlcy9nYWxsZXJ5LWFycm93LXJpZ2h0LnN2Z1wiIC8+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlR2FsbGVyeUl0ZW1zfT5cclxuLy8gICAgICAgICAgICAgICAgIHtnYWxsZXJ5SXRlbUVsZW1zfVxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPEltYWdlR2FsbGVyeVByZXZpZXcgc3Jjcz17c3Jjc30gaGVpZ2h0PXtoZWlnaHR9IHVwZGF0ZUltYWdlV2lkdGhzPXtzZXRJbWdXaWR0aHN9IC8+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICApXHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBJbWFnZUdhbGxlcnlQcmV2aWV3OiBGdW5jdGlvbkNvbXBvbmVudDx7IHNyY3M6IHN0cmluZ1tdLCBoZWlnaHQ6IHN0cmluZywgdXBkYXRlSW1hZ2VXaWR0aHM6ICh3aWR0aEFycjogbnVtYmVyW10pID0+IHZvaWQgfT4gPSAoeyBzcmNzLCBoZWlnaHQsIHVwZGF0ZUltYWdlV2lkdGhzIH0pID0+IHtcclxuLy8gICAgIGNvbnN0IHByZXZpZXdEaXZSZWYgPSB1c2VSZWYodW5kZWZpbmVkIGFzIEhUTUxEaXZFbGVtZW50KTtcclxuXHJcbi8vICAgICBjb25zdCBwcmV2aWV3SWQgPSB1c2VTdGF0ZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApKVswXTtcclxuLy8gICAgIGZ1bmN0aW9uIGhhbmRsZUltYWdlV2lkdGhDaGFuZ2UoKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZScsIHByZXZpZXdJZCk7XHJcbi8vICAgICAgICAgaWYgKCFwcmV2aWV3RGl2UmVmLmN1cnJlbnQpIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgY29uc3QgcHJldmlld0RpdkVsZW0gPSBwcmV2aWV3RGl2UmVmLmN1cnJlbnQ7XHJcbi8vICAgICAgICAgY29uc3QgaW1nV2lkdGhzID0gQXJyYXkuZnJvbShwcmV2aWV3RGl2RWxlbS5jaGlsZHJlbikubWFwKGVsZW0gPT4gZWxlbS5jbGllbnRXaWR0aCk7XHJcbi8vICAgICAgICAgdXBkYXRlSW1hZ2VXaWR0aHMoaW1nV2lkdGhzKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgICAgIGhhbmRsZUltYWdlV2lkdGhDaGFuZ2UoKTtcclxuLy8gICAgIH0sIFtzcmNzLmpvaW4oJ3wnKV0pO1xyXG5cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUdhbGxlcnlQcmV2aWV3fSByZWY9e3ByZXZpZXdEaXZSZWZ9IHN0eWxlPXt7IGhlaWdodDogaGVpZ2h0IH19PlxyXG4vLyAgICAgICAgICAgICB7c3Jjcy5tYXAoKHNyYywgaSkgPT4gKFxyXG4vLyAgICAgICAgICAgICAgICAgPGltZyBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlR2FsbGVyeVByZXZpZXdJbWFnZX0gc3JjPXtzcmN9IG9uTG9hZD17aGFuZGxlSW1hZ2VXaWR0aENoYW5nZX0vPlxyXG4vLyAgICAgICAgICAgICApKX1cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICk7XHJcbi8vIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaW1hZ2UtZ2FsbGVyeV9pbWFnZUdhbGxlcnlfXzFKZUFpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUxlZnROYXZfXzI3UXdLLFxcbi5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeVJpZ2h0TmF2X18zRmhXMSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLyogc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAvKiBTYWZhcmkgKi9cXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC8qIEtvbnF1ZXJvciBIVE1MICovXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLyogRmlyZWZveCAqL1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xcbiAgd2lkdGg6IDJyZW07XFxufVxcbi5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUxlZnROYXZfXzI3UXdLOmhvdmVyIC5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUxlZnRBcnJvd19fZ2lvVnYsXFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5TGVmdE5hdl9fMjdRd0s6aG92ZXIgLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5UmlnaHRBcnJvd19fMWhYMGwsXFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5UmlnaHROYXZfXzNGaFcxOmhvdmVyIC5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUxlZnRBcnJvd19fZ2lvVnYsXFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5UmlnaHROYXZfXzNGaFcxOmhvdmVyIC5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeVJpZ2h0QXJyb3dfXzFoWDBsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUxlZnROYXZfXzI3UXdLOmhvdmVyLFxcbi5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeVJpZ2h0TmF2X18zRmhXMTpob3ZlciB7XFxuICB3aWR0aDogMy4ycmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUxlZnROYXZfXzI3UXdLLFxcbi5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeVJpZ2h0TmF2X18zRmhXMSB7XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgfVxcbiAgLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5TGVmdE5hdl9fMjdRd0s6aG92ZXIsXFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5UmlnaHROYXZfXzNGaFcxOmhvdmVyIHtcXG4gICAgd2lkdGg6IDMuNXJlbTtcXG4gIH1cXG59XFxuXFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5TGVmdE5hdl9fMjdRd0sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20od2hpdGUpLCB0byh0cmFuc3BhcmVudCkpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgd2hpdGUsIHRyYW5zcGFyZW50KTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgd2hpdGUsIHRyYW5zcGFyZW50KTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuaW1hZ2UtZ2FsbGVyeV9pbWFnZUdhbGxlcnlMZWZ0TmF2X18yN1F3SyB7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgfVxcbn1cXG5cXG4uaW1hZ2UtZ2FsbGVyeV9pbWFnZUdhbGxlcnlSaWdodE5hdl9fM0ZoVzEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGZyb20od2hpdGUpLCB0byh0cmFuc3BhcmVudCkpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQsIHdoaXRlLCB0cmFuc3BhcmVudCk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgd2hpdGUsIHRyYW5zcGFyZW50KTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuaW1hZ2UtZ2FsbGVyeV9pbWFnZUdhbGxlcnlSaWdodE5hdl9fM0ZoVzEge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICB9XFxufVxcblxcbi5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUxlZnRBcnJvd19fZ2lvVnYsXFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5UmlnaHRBcnJvd19fMWhYMGwge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XFxuICB6LWluZGV4OiAyO1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUxlZnRBcnJvd19fZ2lvVnYsXFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5UmlnaHRBcnJvd19fMWhYMGwge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICB9XFxufVxcblxcbi5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUl0ZW1zX18xMFhPTCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5SXRlbUNvbnRhaW5lcl9fMk1ZMXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaW1hZ2UtZ2FsbGVyeV9pbWFnZUdhbGxlcnlJdGVtQ29udGFpbmVyX18yTVkxdi5pbWFnZS1nYWxsZXJ5X2FuaW1hdGVkX18zT2JlUCB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNXM7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjVzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cywgLXdlYmtpdC10cmFuc2Zvcm0gMC41cztcXG59XFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5SXRlbUNvbnRhaW5lcl9fMk1ZMXYuaW1hZ2UtZ2FsbGVyeV9jbGlja2FibGVfX05USXJIIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5SXRlbV9fMzdKaC0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xcbn1cXG4uaW1hZ2UtZ2FsbGVyeV9pbWFnZUdhbGxlcnlJdGVtX18zN0poLTpob3ZlciB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeVByZXZpZXdfXzNxVXR4IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDMwMHZoO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uaW1hZ2UtZ2FsbGVyeV9pbWFnZUdhbGxlcnlQcmV2aWV3SW1hZ2VfXzJ5ZjVKIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2ltYWdlLWdhbGxlcnkubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBRUEsZ0JBQUE7QUFISjs7QUFNQTs7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBRUEsOEJBQUE7RUFBQSxzQkFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUFtQixrQ0FBQTtFQUNuQix5QkFBQTtFQUEyQixXQUFBO0VBQzNCLHdCQUFBO0VBQTBCLG1CQUFBO0VBQzFCLHNCQUFBO0VBQXdCLFlBQUE7RUFDeEIscUJBQUE7RUFBdUIsMkJBQUE7RUFTdkIsV0FBQTtBQVRKO0FBR1E7Ozs7RUFFSSw2QkFBQTtVQUFBLHFCQUFBO0FBQ1o7QUFJSTs7RUFDSSxhQUFBO0FBRFI7QUFJSTtFQTVCSjs7SUE2QlEsV0FBQTtFQUFOO0VBQ007O0lBQ0ksYUFBQTtFQUVWO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUVBLG9CQUFBO0VBS0EsMkJBQUE7RUFFQSw2RkFBQTtFQUFBLG1FQUFBO0VBQUEsK0RBQUE7QUFMSjtBQURJO0VBUEo7SUFRUSxvQkFBQTtFQUlOO0FBQ0Y7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUVBLHFCQUFBO0VBS0EseUJBQUE7RUFFQSw2RkFBQTtFQUFBLG9FQUFBO0VBQUEsOERBQUE7QUFOSjtBQUFJO0VBUEo7SUFRUSxxQkFBQTtFQUdOO0FBQ0Y7O0FBSUE7O0VBR0ksMENBQUE7RUFBQSxrQ0FBQTtFQUFBLDBCQUFBO0VBQUEsa0RBQUE7RUFFQSxVQUFBO0VBRUEsWUFBQTtBQUpKO0FBS0k7RUFSSjs7SUFTUSxZQUFBO0VBRE47QUFDRjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQURKO0FBR0k7RUFDSSwwQ0FBQTtFQUFBLGtDQUFBO0VBQUEsMEJBQUE7RUFBQSxrREFBQTtBQURSO0FBSUk7RUFDSSxlQUFBO0FBRlI7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsOEJBQUE7RUFFQSxtREFBQTtFQUFBLDJDQUFBO0VBQUEsbUNBQUE7RUFBQSxvRUFBQTtBQUxKO0FBT0k7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0FBTFI7O0FBU0E7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFFQSxVQUFBO0VBQ0Esb0JBQUE7QUFQSjs7QUFVQTtFQUNJLFlBQUE7QUFQSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MnIGFzIHZhcmlhYmxlcztcXHJcXG5cXHJcXG4uaW1hZ2VHYWxsZXJ5IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuXFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5pbWFnZUdhbGxlcnlMZWZ0TmF2LFxcclxcbi5pbWFnZUdhbGxlcnlSaWdodE5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHotaW5kZXg6IDEwMDAwO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xcclxcblxcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBzdXBwb3J0ZWQgYnkgQ2hyb21lIGFuZCBPcGVyYSAqL1xcclxcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXHJcXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xcclxcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXFxyXFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIC5pbWFnZUdhbGxlcnlMZWZ0QXJyb3csXFxyXFxuICAgICAgICAuaW1hZ2VHYWxsZXJ5UmlnaHRBcnJvdyB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzLjJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IHZhcmlhYmxlcy4kZGVza3RvcC1taW4td2lkdGgpIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2VHYWxsZXJ5TGVmdE5hdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogdmFyaWFibGVzLiRkZXNrdG9wLW1pbi13aWR0aCkge1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlLCB0cmFuc3BhcmVudCk7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZUdhbGxlcnlSaWdodE5hdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcblxcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiB2YXJpYWJsZXMuJGRlc2t0b3AtbWluLXdpZHRoKSB7XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHdoaXRlLCB0cmFuc3BhcmVudCk7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZUdhbGxlcnlMZWZ0QXJyb3csXFxyXFxuLmltYWdlR2FsbGVyeVJpZ2h0QXJyb3cge1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXHJcXG5cXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogdmFyaWFibGVzLiRkZXNrdG9wLW1pbi13aWR0aCkge1xcclxcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5pbWFnZUdhbGxlcnlJdGVtcyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZUdhbGxlcnlJdGVtQ29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgJi5hbmltYXRlZCB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgJi5jbGlja2FibGUge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5pbWFnZUdhbGxlcnlJdGVtIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2VHYWxsZXJ5UHJldmlldyB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAzMDB2aDtcXHJcXG5cXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZUdhbGxlcnlQcmV2aWV3SW1hZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImltYWdlR2FsbGVyeVwiOiBcImltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5X18xSmVBaVwiLFxuXHRcImltYWdlR2FsbGVyeUxlZnROYXZcIjogXCJpbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUxlZnROYXZfXzI3UXdLXCIsXG5cdFwiaW1hZ2VHYWxsZXJ5UmlnaHROYXZcIjogXCJpbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeVJpZ2h0TmF2X18zRmhXMVwiLFxuXHRcImltYWdlR2FsbGVyeUxlZnRBcnJvd1wiOiBcImltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5TGVmdEFycm93X19naW9WdlwiLFxuXHRcImltYWdlR2FsbGVyeVJpZ2h0QXJyb3dcIjogXCJpbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeVJpZ2h0QXJyb3dfXzFoWDBsXCIsXG5cdFwiaW1hZ2VHYWxsZXJ5SXRlbXNcIjogXCJpbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUl0ZW1zX18xMFhPTFwiLFxuXHRcImltYWdlR2FsbGVyeUl0ZW1Db250YWluZXJcIjogXCJpbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUl0ZW1Db250YWluZXJfXzJNWTF2XCIsXG5cdFwiYW5pbWF0ZWRcIjogXCJpbWFnZS1nYWxsZXJ5X2FuaW1hdGVkX18zT2JlUFwiLFxuXHRcImNsaWNrYWJsZVwiOiBcImltYWdlLWdhbGxlcnlfY2xpY2thYmxlX19OVElySFwiLFxuXHRcImltYWdlR2FsbGVyeUl0ZW1cIjogXCJpbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUl0ZW1fXzM3SmgtXCIsXG5cdFwiaW1hZ2VHYWxsZXJ5UHJldmlld1wiOiBcImltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5UHJldmlld19fM3FVdHhcIixcblx0XCJpbWFnZUdhbGxlcnlQcmV2aWV3SW1hZ2VcIjogXCJpbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeVByZXZpZXdJbWFnZV9fMnlmNUpcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvKipcclxuICogQSBjb2xsZWN0aW9uIG9mIHNoaW1zIHRoYXQgcHJvdmlkZSBtaW5pbWFsIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIEVTNiBjb2xsZWN0aW9ucy5cclxuICpcclxuICogVGhlc2UgaW1wbGVtZW50YXRpb25zIGFyZSBub3QgbWVhbnQgdG8gYmUgdXNlZCBvdXRzaWRlIG9mIHRoZSBSZXNpemVPYnNlcnZlclxyXG4gKiBtb2R1bGVzIGFzIHRoZXkgY292ZXIgb25seSBhIGxpbWl0ZWQgcmFuZ2Ugb2YgdXNlIGNhc2VzLlxyXG4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1qc2RvYywgdmFsaWQtanNkb2MgKi9cclxudmFyIE1hcFNoaW0gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hcDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBpbmRleCBpbiBwcm92aWRlZCBhcnJheSB0aGF0IG1hdGNoZXMgdGhlIHNwZWNpZmllZCBrZXkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxBcnJheT59IGFyclxyXG4gICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldEluZGV4KGFyciwga2V5KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IC0xO1xyXG4gICAgICAgIGFyci5zb21lKGZ1bmN0aW9uIChlbnRyeSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5WzBdID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGNsYXNzXzEoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcInNpemVcIiwge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZW50cmllc19fLmxlbmd0aDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KHRoaXMuX19lbnRyaWVzX18sIGtleSk7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMuX19lbnRyaWVzX19baW5kZXhdO1xyXG4gICAgICAgICAgICByZXR1cm4gZW50cnkgJiYgZW50cnlbMV07XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fZW50cmllc19fW2luZGV4XVsxXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXy5wdXNoKFtrZXksIHZhbHVlXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgZW50cmllcyA9IHRoaXMuX19lbnRyaWVzX187XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KGVudHJpZXMsIGtleSk7XHJcbiAgICAgICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGVudHJpZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIX5nZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18uc3BsaWNlKDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtjdHg9bnVsbF1cclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjdHgpIHtcclxuICAgICAgICAgICAgaWYgKGN0eCA9PT0gdm9pZCAwKSB7IGN0eCA9IG51bGw7IH1cclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuX19lbnRyaWVzX187IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGN0eCwgZW50cnlbMV0sIGVudHJ5WzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzXzE7XHJcbiAgICB9KCkpO1xyXG59KSgpO1xuXG4vKipcclxuICogRGV0ZWN0cyB3aGV0aGVyIHdpbmRvdyBhbmQgZG9jdW1lbnQgb2JqZWN0cyBhcmUgYXZhaWxhYmxlIGluIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbiAqL1xyXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgPT09IGRvY3VtZW50O1xuXG4vLyBSZXR1cm5zIGdsb2JhbCBvYmplY3Qgb2YgYSBjdXJyZW50IGVudmlyb25tZW50LlxyXG52YXIgZ2xvYmFsJDEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93O1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXHJcbiAgICByZXR1cm4gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcclxufSkoKTtcblxuLyoqXHJcbiAqIEEgc2hpbSBmb3IgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB3aGljaCBmYWxscyBiYWNrIHRvIHRoZSBzZXRUaW1lb3V0IGlmXHJcbiAqIGZpcnN0IG9uZSBpcyBub3Qgc3VwcG9ydGVkLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXF1ZXN0cycgaWRlbnRpZmllci5cclxuICovXHJcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8vIEl0J3MgcmVxdWlyZWQgdG8gdXNlIGEgYm91bmRlZCBmdW5jdGlvbiBiZWNhdXNlIElFIHNvbWV0aW1lcyB0aHJvd3NcclxuICAgICAgICAvLyBhbiBcIkludmFsaWQgY2FsbGluZyBvYmplY3RcIiBlcnJvciBpZiByQUYgaXMgaW52b2tlZCB3aXRob3V0IHRoZSBnbG9iYWxcclxuICAgICAgICAvLyBvYmplY3Qgb24gdGhlIGxlZnQgaGFuZCBzaWRlLlxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChnbG9iYWwkMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrKERhdGUubm93KCkpOyB9LCAxMDAwIC8gNjApOyB9O1xyXG59KSgpO1xuXG4vLyBEZWZpbmVzIG1pbmltdW0gdGltZW91dCBiZWZvcmUgYWRkaW5nIGEgdHJhaWxpbmcgY2FsbC5cclxudmFyIHRyYWlsaW5nVGltZW91dCA9IDI7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBlbnN1cmVzIHRoYXQgcHJvdmlkZWQgY2FsbGJhY2sgd2lsbCBiZVxyXG4gKiBpbnZva2VkIG9ubHkgb25jZSBkdXJpbmcgdGhlIHNwZWNpZmllZCBkZWxheSBwZXJpb2QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgZGVsYXkgcGVyaW9kLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgLSBEZWxheSBhZnRlciB3aGljaCB0byBpbnZva2UgY2FsbGJhY2suXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cclxuICovXHJcbmZ1bmN0aW9uIHRocm90dGxlIChjYWxsYmFjaywgZGVsYXkpIHtcclxuICAgIHZhciBsZWFkaW5nQ2FsbCA9IGZhbHNlLCB0cmFpbGluZ0NhbGwgPSBmYWxzZSwgbGFzdENhbGxUaW1lID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgZnVuY3Rpb24gYW5kIHNjaGVkdWxlcyBuZXcgaW52b2NhdGlvbiBpZlxyXG4gICAgICogdGhlIFwicHJveHlcIiB3YXMgY2FsbGVkIGR1cmluZyBjdXJyZW50IHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlc29sdmVQZW5kaW5nKCkge1xyXG4gICAgICAgIGlmIChsZWFkaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICBsZWFkaW5nQ2FsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhaWxpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgIHByb3h5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIGFmdGVyIHRoZSBzcGVjaWZpZWQgZGVsYXkuIEl0IHdpbGwgZnVydGhlciBwb3N0cG9uZVxyXG4gICAgICogaW52b2NhdGlvbiBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZGVsZWdhdGluZyBpdCB0byB0aGVcclxuICAgICAqIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdGltZW91dENhbGxiYWNrKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSQxKHJlc29sdmVQZW5kaW5nKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2NoZWR1bGVzIGludm9jYXRpb24gb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBwcm94eSgpIHtcclxuICAgICAgICB2YXIgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBpZiAobGVhZGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgLy8gUmVqZWN0IGltbWVkaWF0ZWx5IGZvbGxvd2luZyBjYWxscy5cclxuICAgICAgICAgICAgaWYgKHRpbWVTdGFtcCAtIGxhc3RDYWxsVGltZSA8IHRyYWlsaW5nVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFNjaGVkdWxlIG5ldyBjYWxsIHRvIGJlIGluIGludm9rZWQgd2hlbiB0aGUgcGVuZGluZyBvbmUgaXMgcmVzb2x2ZWQuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgaW1wb3J0YW50IGZvciBcInRyYW5zaXRpb25zXCIgd2hpY2ggbmV2ZXIgYWN0dWFsbHkgc3RhcnRcclxuICAgICAgICAgICAgLy8gaW1tZWRpYXRlbHkgc28gdGhlcmUgaXMgYSBjaGFuY2UgdGhhdCB3ZSBtaWdodCBtaXNzIG9uZSBpZiBjaGFuZ2VcclxuICAgICAgICAgICAgLy8gaGFwcGVucyBhbWlkcyB0aGUgcGVuZGluZyBpbnZvY2F0aW9uLlxyXG4gICAgICAgICAgICB0cmFpbGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGVhZGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICB0cmFpbGluZ0NhbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aW1lb3V0Q2FsbGJhY2ssIGRlbGF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFzdENhbGxUaW1lID0gdGltZVN0YW1wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3h5O1xyXG59XG5cbi8vIE1pbmltdW0gZGVsYXkgYmVmb3JlIGludm9raW5nIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2ZXJzLlxyXG52YXIgUkVGUkVTSF9ERUxBWSA9IDIwO1xyXG4vLyBBIGxpc3Qgb2Ygc3Vic3RyaW5ncyBvZiBDU1MgcHJvcGVydGllcyB1c2VkIHRvIGZpbmQgdHJhbnNpdGlvbiBldmVudHMgdGhhdFxyXG4vLyBtaWdodCBhZmZlY3QgZGltZW5zaW9ucyBvZiBvYnNlcnZlZCBlbGVtZW50cy5cclxudmFyIHRyYW5zaXRpb25LZXlzID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ3NpemUnLCAnd2VpZ2h0J107XHJcbi8vIENoZWNrIGlmIE11dGF0aW9uT2JzZXJ2ZXIgaXMgYXZhaWxhYmxlLlxyXG52YXIgbXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCA9IHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcclxuLyoqXHJcbiAqIFNpbmdsZXRvbiBjb250cm9sbGVyIGNsYXNzIHdoaWNoIGhhbmRsZXMgdXBkYXRlcyBvZiBSZXNpemVPYnNlcnZlciBpbnN0YW5jZXMuXHJcbiAqL1xyXG52YXIgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgRE9NIGxpc3RlbmVycyBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUZWxscyB0aGF0IGNvbnRyb2xsZXIgaGFzIHN1YnNjcmliZWQgZm9yIE11dGF0aW9uIEV2ZW50cy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBLZWVwcyByZWZlcmVuY2UgdG8gdGhlIGluc3RhbmNlIG9mIE11dGF0aW9uT2JzZXJ2ZXIuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7TXV0YXRpb25PYnNlcnZlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBsaXN0IG9mIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7QXJyYXk8UmVzaXplT2JzZXJ2ZXJTUEk+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzXyA9IFtdO1xyXG4gICAgICAgIHRoaXMub25UcmFuc2l0aW9uRW5kXyA9IHRoaXMub25UcmFuc2l0aW9uRW5kXy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaCA9IHRocm90dGxlKHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpLCBSRUZSRVNIX0RFTEFZKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBvYnNlcnZlciB0byBvYnNlcnZlcnMgbGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyU1BJfSBvYnNlcnZlciAtIE9ic2VydmVyIHRvIGJlIGFkZGVkLlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICBpZiAoIX50aGlzLm9ic2VydmVyc18uaW5kZXhPZihvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnNfLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgbGlzdGVuZXJzIGlmIHRoZXkgaGF2ZW4ndCBiZWVuIGFkZGVkIHlldC5cclxuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RfKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBvYnNlcnZlciBmcm9tIG9ic2VydmVycyBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJTUEl9IG9ic2VydmVyIC0gT2JzZXJ2ZXIgdG8gYmUgcmVtb3ZlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXztcclxuICAgICAgICB2YXIgaW5kZXggPSBvYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XHJcbiAgICAgICAgLy8gUmVtb3ZlIG9ic2VydmVyIGlmIGl0J3MgcHJlc2VudCBpbiByZWdpc3RyeS5cclxuICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1vdmUgbGlzdGVuZXJzIGlmIGNvbnRyb2xsZXIgaGFzIG5vIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgaWYgKCFvYnNlcnZlcnMubGVuZ3RoICYmIHRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RfKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyB0aGUgdXBkYXRlIG9mIG9ic2VydmVycy4gSXQgd2lsbCBjb250aW51ZSBydW5uaW5nIHVwZGF0ZXMgaW5zb2ZhclxyXG4gICAgICogaXQgZGV0ZWN0cyBjaGFuZ2VzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNoYW5nZXNEZXRlY3RlZCA9IHRoaXMudXBkYXRlT2JzZXJ2ZXJzXygpO1xyXG4gICAgICAgIC8vIENvbnRpbnVlIHJ1bm5pbmcgdXBkYXRlcyBpZiBjaGFuZ2VzIGhhdmUgYmVlbiBkZXRlY3RlZCBhcyB0aGVyZSBtaWdodFxyXG4gICAgICAgIC8vIGJlIGZ1dHVyZSBvbmVzIGNhdXNlZCBieSBDU1MgdHJhbnNpdGlvbnMuXHJcbiAgICAgICAgaWYgKGNoYW5nZXNEZXRlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGV2ZXJ5IG9ic2VydmVyIGZyb20gb2JzZXJ2ZXJzIGxpc3QgYW5kIG5vdGlmaWVzIHRoZW0gb2YgcXVldWVkXHJcbiAgICAgKiBlbnRyaWVzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBcInRydWVcIiBpZiBhbnkgb2JzZXJ2ZXIgaGFzIGRldGVjdGVkIGNoYW5nZXMgaW5cclxuICAgICAqICAgICAgZGltZW5zaW9ucyBvZiBpdCdzIGVsZW1lbnRzLlxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnVwZGF0ZU9ic2VydmVyc18gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gQ29sbGVjdCBvYnNlcnZlcnMgdGhhdCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgdmFyIGFjdGl2ZU9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXy5maWx0ZXIoZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5nYXRoZXJBY3RpdmUoKSwgb2JzZXJ2ZXIuaGFzQWN0aXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gRGVsaXZlciBub3RpZmljYXRpb25zIGluIGEgc2VwYXJhdGUgY3ljbGUgaW4gb3JkZXIgdG8gYXZvaWQgYW55XHJcbiAgICAgICAgLy8gY29sbGlzaW9ucyBiZXR3ZWVuIG9ic2VydmVycywgZS5nLiB3aGVuIG11bHRpcGxlIGluc3RhbmNlcyBvZlxyXG4gICAgICAgIC8vIFJlc2l6ZU9ic2VydmVyIGFyZSB0cmFja2luZyB0aGUgc2FtZSBlbGVtZW50IGFuZCB0aGUgY2FsbGJhY2sgb2Ygb25lXHJcbiAgICAgICAgLy8gb2YgdGhlbSBjaGFuZ2VzIGNvbnRlbnQgZGltZW5zaW9ucyBvZiB0aGUgb2JzZXJ2ZWQgdGFyZ2V0LiBTb21ldGltZXNcclxuICAgICAgICAvLyB0aGlzIG1heSByZXN1bHQgaW4gbm90aWZpY2F0aW9ucyBiZWluZyBibG9ja2VkIGZvciB0aGUgcmVzdCBvZiBvYnNlcnZlcnMuXHJcbiAgICAgICAgYWN0aXZlT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7IHJldHVybiBvYnNlcnZlci5icm9hZGNhc3RBY3RpdmUoKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZU9ic2VydmVycy5sZW5ndGggPiAwO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgRE9NIGxpc3RlbmVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuY29ubmVjdF8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBydW5uaW5nIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQgb3IgaWYgbGlzdGVuZXJzXHJcbiAgICAgICAgLy8gaGF2ZSBiZWVuIGFscmVhZHkgYWRkZWQuXHJcbiAgICAgICAgaWYgKCFpc0Jyb3dzZXIgfHwgdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3Vic2NyaXB0aW9uIHRvIHRoZSBcIlRyYW5zaXRpb25lbmRcIiBldmVudCBpcyB1c2VkIGFzIGEgd29ya2Fyb3VuZCBmb3JcclxuICAgICAgICAvLyBkZWxheWVkIHRyYW5zaXRpb25zLiBUaGlzIHdheSBpdCdzIHBvc3NpYmxlIHRvIGNhcHR1cmUgYXQgbGVhc3QgdGhlXHJcbiAgICAgICAgLy8gZmluYWwgc3RhdGUgb2YgYW4gZWxlbWVudC5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICBpZiAobXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfLm9ic2VydmUoZG9jdW1lbnQsIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBET00gbGlzdGVuZXJzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5kaXNjb25uZWN0XyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIHJ1bm5pbmcgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudCBvciBpZiBsaXN0ZW5lcnNcclxuICAgICAgICAvLyBoYXZlIGJlZW4gYWxyZWFkeSByZW1vdmVkLlxyXG4gICAgICAgIGlmICghaXNCcm93c2VyIHx8ICF0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8pIHtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkXyA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogXCJUcmFuc2l0aW9uZW5kXCIgZXZlbnQgaGFuZGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtUcmFuc2l0aW9uRXZlbnR9IGV2ZW50XHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmRfID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIF9iID0gX2EucHJvcGVydHlOYW1lLCBwcm9wZXJ0eU5hbWUgPSBfYiA9PT0gdm9pZCAwID8gJycgOiBfYjtcclxuICAgICAgICAvLyBEZXRlY3Qgd2hldGhlciB0cmFuc2l0aW9uIG1heSBhZmZlY3QgZGltZW5zaW9ucyBvZiBhbiBlbGVtZW50LlxyXG4gICAgICAgIHZhciBpc1JlZmxvd1Byb3BlcnR5ID0gdHJhbnNpdGlvbktleXMuc29tZShmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIX5wcm9wZXJ0eU5hbWUuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpc1JlZmxvd1Byb3BlcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgaW5zdGFuY2Ugb2YgdGhlIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7UmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlXykge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlXyA9IG5ldyBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VfO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSG9sZHMgcmVmZXJlbmNlIHRvIHRoZSBjb250cm9sbGVyJ3MgaW5zdGFuY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGUge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmluc3RhbmNlXyA9IG51bGw7XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyO1xyXG59KCkpO1xuXG4vKipcclxuICogRGVmaW5lcyBub24td3JpdGFibGUvZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9mIHRoZSBwcm92aWRlZCB0YXJnZXQgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IC0gT2JqZWN0IGZvciB3aGljaCB0byBkZWZpbmUgcHJvcGVydGllcy5cclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gUHJvcGVydGllcyB0byBiZSBkZWZpbmVkLlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUYXJnZXQgb2JqZWN0LlxyXG4gKi9cclxudmFyIGRlZmluZUNvbmZpZ3VyYWJsZSA9IChmdW5jdGlvbiAodGFyZ2V0LCBwcm9wcykge1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKHByb3BzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIga2V5ID0gX2FbX2ldO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHNba2V5XSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59KTtcblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGdsb2JhbCBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcclxuICogQHJldHVybnMge09iamVjdH1cclxuICovXHJcbnZhciBnZXRXaW5kb3dPZiA9IChmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAvLyBBc3N1bWUgdGhhdCB0aGUgZWxlbWVudCBpcyBhbiBpbnN0YW5jZSBvZiBOb2RlLCB3aGljaCBtZWFucyB0aGF0IGl0XHJcbiAgICAvLyBoYXMgdGhlIFwib3duZXJEb2N1bWVudFwiIHByb3BlcnR5IGZyb20gd2hpY2ggd2UgY2FuIHJldHJpZXZlIGFcclxuICAgIC8vIGNvcnJlc3BvbmRpbmcgZ2xvYmFsIG9iamVjdC5cclxuICAgIHZhciBvd25lckdsb2JhbCA9IHRhcmdldCAmJiB0YXJnZXQub3duZXJEb2N1bWVudCAmJiB0YXJnZXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuICAgIC8vIFJldHVybiB0aGUgbG9jYWwgZ2xvYmFsIG9iamVjdCBpZiBpdCdzIG5vdCBwb3NzaWJsZSBleHRyYWN0IG9uZSBmcm9tXHJcbiAgICAvLyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgcmV0dXJuIG93bmVyR2xvYmFsIHx8IGdsb2JhbCQxO1xyXG59KTtcblxuLy8gUGxhY2Vob2xkZXIgb2YgYW4gZW1wdHkgY29udGVudCByZWN0YW5nbGUuXHJcbnZhciBlbXB0eVJlY3QgPSBjcmVhdGVSZWN0SW5pdCgwLCAwLCAwLCAwKTtcclxuLyoqXHJcbiAqIENvbnZlcnRzIHByb3ZpZGVkIHN0cmluZyB0byBhIG51bWJlci5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gdG9GbG9hdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIHx8IDA7XHJcbn1cclxuLyoqXHJcbiAqIEV4dHJhY3RzIGJvcmRlcnMgc2l6ZSBmcm9tIHByb3ZpZGVkIHN0eWxlcy5cclxuICpcclxuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcclxuICogQHBhcmFtIHsuLi5zdHJpbmd9IHBvc2l0aW9ucyAtIEJvcmRlcnMgcG9zaXRpb25zICh0b3AsIHJpZ2h0LCAuLi4pXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRCb3JkZXJzU2l6ZShzdHlsZXMpIHtcclxuICAgIHZhciBwb3NpdGlvbnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgcG9zaXRpb25zW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBvc2l0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHNpemUsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVzWydib3JkZXItJyArIHBvc2l0aW9uICsgJy13aWR0aCddO1xyXG4gICAgICAgIHJldHVybiBzaXplICsgdG9GbG9hdCh2YWx1ZSk7XHJcbiAgICB9LCAwKTtcclxufVxyXG4vKipcclxuICogRXh0cmFjdHMgcGFkZGluZ3Mgc2l6ZXMgZnJvbSBwcm92aWRlZCBzdHlsZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFBhZGRpbmdzIGJveC5cclxuICovXHJcbmZ1bmN0aW9uIGdldFBhZGRpbmdzKHN0eWxlcykge1xyXG4gICAgdmFyIHBvc2l0aW9ucyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XHJcbiAgICB2YXIgcGFkZGluZ3MgPSB7fTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgcG9zaXRpb25zXzEgPSBwb3NpdGlvbnM7IF9pIDwgcG9zaXRpb25zXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gcG9zaXRpb25zXzFbX2ldO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1sncGFkZGluZy0nICsgcG9zaXRpb25dO1xyXG4gICAgICAgIHBhZGRpbmdzW3Bvc2l0aW9uXSA9IHRvRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhZGRpbmdzO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHByb3ZpZGVkIFNWRyBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NWR0dyYXBoaWNzRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBjb250ZW50IHJlY3RhbmdsZSBvZiB3aGljaCBuZWVkc1xyXG4gKiAgICAgIHRvIGJlIGNhbGN1bGF0ZWQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldFNWR0NvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgdmFyIGJib3ggPSB0YXJnZXQuZ2V0QkJveCgpO1xyXG4gICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KDAsIDAsIGJib3gud2lkdGgsIGJib3guaGVpZ2h0KTtcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBjb250ZW50IHJlY3RhbmdsZSBvZiBwcm92aWRlZCBIVE1MRWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBmb3Igd2hpY2ggdG8gY2FsY3VsYXRlIHRoZSBjb250ZW50IHJlY3RhbmdsZS5cclxuICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgIC8vIENsaWVudCB3aWR0aCAmIGhlaWdodCBwcm9wZXJ0aWVzIGNhbid0IGJlXHJcbiAgICAvLyB1c2VkIGV4Y2x1c2l2ZWx5IGFzIHRoZXkgcHJvdmlkZSByb3VuZGVkIHZhbHVlcy5cclxuICAgIHZhciBjbGllbnRXaWR0aCA9IHRhcmdldC5jbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0ID0gdGFyZ2V0LmNsaWVudEhlaWdodDtcclxuICAgIC8vIEJ5IHRoaXMgY29uZGl0aW9uIHdlIGNhbiBjYXRjaCBhbGwgbm9uLXJlcGxhY2VkIGlubGluZSwgaGlkZGVuIGFuZFxyXG4gICAgLy8gZGV0YWNoZWQgZWxlbWVudHMuIFRob3VnaCBlbGVtZW50cyB3aXRoIHdpZHRoICYgaGVpZ2h0IHByb3BlcnRpZXMgbGVzc1xyXG4gICAgLy8gdGhhbiAwLjUgd2lsbCBiZSBkaXNjYXJkZWQgYXMgd2VsbC5cclxuICAgIC8vXHJcbiAgICAvLyBXaXRob3V0IGl0IHdlIHdvdWxkIG5lZWQgdG8gaW1wbGVtZW50IHNlcGFyYXRlIG1ldGhvZHMgZm9yIGVhY2ggb2ZcclxuICAgIC8vIHRob3NlIGNhc2VzIGFuZCBpdCdzIG5vdCBwb3NzaWJsZSB0byBwZXJmb3JtIGEgcHJlY2lzZSBhbmQgcGVyZm9ybWFuY2VcclxuICAgIC8vIGVmZmVjdGl2ZSB0ZXN0IGZvciBoaWRkZW4gZWxlbWVudHMuIEUuZy4gZXZlbiBqUXVlcnkncyAnOnZpc2libGUnIGZpbHRlclxyXG4gICAgLy8gZ2l2ZXMgd3JvbmcgcmVzdWx0cyBmb3IgZWxlbWVudHMgd2l0aCB3aWR0aCAmIGhlaWdodCBsZXNzIHRoYW4gMC41LlxyXG4gICAgaWYgKCFjbGllbnRXaWR0aCAmJiAhY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgcmV0dXJuIGVtcHR5UmVjdDtcclxuICAgIH1cclxuICAgIHZhciBzdHlsZXMgPSBnZXRXaW5kb3dPZih0YXJnZXQpLmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcclxuICAgIHZhciBwYWRkaW5ncyA9IGdldFBhZGRpbmdzKHN0eWxlcyk7XHJcbiAgICB2YXIgaG9yaXpQYWQgPSBwYWRkaW5ncy5sZWZ0ICsgcGFkZGluZ3MucmlnaHQ7XHJcbiAgICB2YXIgdmVydFBhZCA9IHBhZGRpbmdzLnRvcCArIHBhZGRpbmdzLmJvdHRvbTtcclxuICAgIC8vIENvbXB1dGVkIHN0eWxlcyBvZiB3aWR0aCAmIGhlaWdodCBhcmUgYmVpbmcgdXNlZCBiZWNhdXNlIHRoZXkgYXJlIHRoZVxyXG4gICAgLy8gb25seSBkaW1lbnNpb25zIGF2YWlsYWJsZSB0byBKUyB0aGF0IGNvbnRhaW4gbm9uLXJvdW5kZWQgdmFsdWVzLiBJdCBjb3VsZFxyXG4gICAgLy8gYmUgcG9zc2libGUgdG8gdXRpbGl6ZSB0aGUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlmIG9ubHkgaXQncyBkYXRhIHdhc24ndFxyXG4gICAgLy8gYWZmZWN0ZWQgYnkgQ1NTIHRyYW5zZm9ybWF0aW9ucyBsZXQgYWxvbmUgcGFkZGluZ3MsIGJvcmRlcnMgYW5kIHNjcm9sbCBiYXJzLlxyXG4gICAgdmFyIHdpZHRoID0gdG9GbG9hdChzdHlsZXMud2lkdGgpLCBoZWlnaHQgPSB0b0Zsb2F0KHN0eWxlcy5oZWlnaHQpO1xyXG4gICAgLy8gV2lkdGggJiBoZWlnaHQgaW5jbHVkZSBwYWRkaW5ncyBhbmQgYm9yZGVycyB3aGVuIHRoZSAnYm9yZGVyLWJveCcgYm94XHJcbiAgICAvLyBtb2RlbCBpcyBhcHBsaWVkIChleGNlcHQgZm9yIElFKS5cclxuICAgIGlmIChzdHlsZXMuYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcclxuICAgICAgICAvLyBGb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgcmVxdWlyZWQgdG8gaGFuZGxlIEludGVybmV0IEV4cGxvcmVyIHdoaWNoXHJcbiAgICAgICAgLy8gZG9lc24ndCBpbmNsdWRlIHBhZGRpbmdzIGFuZCBib3JkZXJzIHRvIGNvbXB1dGVkIENTUyBkaW1lbnNpb25zLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gV2UgY2FuIHNheSB0aGF0IGlmIENTUyBkaW1lbnNpb25zICsgcGFkZGluZ3MgYXJlIGVxdWFsIHRvIHRoZSBcImNsaWVudFwiXHJcbiAgICAgICAgLy8gcHJvcGVydGllcyB0aGVuIGl0J3MgZWl0aGVyIElFLCBhbmQgdGh1cyB3ZSBkb24ndCBuZWVkIHRvIHN1YnRyYWN0XHJcbiAgICAgICAgLy8gYW55dGhpbmcsIG9yIGFuIGVsZW1lbnQgbWVyZWx5IGRvZXNuJ3QgaGF2ZSBwYWRkaW5ncy9ib3JkZXJzIHN0eWxlcy5cclxuICAgICAgICBpZiAoTWF0aC5yb3VuZCh3aWR0aCArIGhvcml6UGFkKSAhPT0gY2xpZW50V2lkdGgpIHtcclxuICAgICAgICAgICAgd2lkdGggLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAnbGVmdCcsICdyaWdodCcpICsgaG9yaXpQYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChNYXRoLnJvdW5kKGhlaWdodCArIHZlcnRQYWQpICE9PSBjbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgaGVpZ2h0IC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3RvcCcsICdib3R0b20nKSArIHZlcnRQYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRm9sbG93aW5nIHN0ZXBzIGNhbid0IGJlIGFwcGxpZWQgdG8gdGhlIGRvY3VtZW50J3Mgcm9vdCBlbGVtZW50IGFzIGl0c1xyXG4gICAgLy8gY2xpZW50W1dpZHRoL0hlaWdodF0gcHJvcGVydGllcyByZXByZXNlbnQgdmlld3BvcnQgYXJlYSBvZiB0aGUgd2luZG93LlxyXG4gICAgLy8gQmVzaWRlcywgaXQncyBhcyB3ZWxsIG5vdCBuZWNlc3NhcnkgYXMgdGhlIDxodG1sPiBpdHNlbGYgbmVpdGhlciBoYXNcclxuICAgIC8vIHJlbmRlcmVkIHNjcm9sbCBiYXJzIG5vciBpdCBjYW4gYmUgY2xpcHBlZC5cclxuICAgIGlmICghaXNEb2N1bWVudEVsZW1lbnQodGFyZ2V0KSkge1xyXG4gICAgICAgIC8vIEluIHNvbWUgYnJvd3NlcnMgKG9ubHkgaW4gRmlyZWZveCwgYWN0dWFsbHkpIENTUyB3aWR0aCAmIGhlaWdodFxyXG4gICAgICAgIC8vIGluY2x1ZGUgc2Nyb2xsIGJhcnMgc2l6ZSB3aGljaCBjYW4gYmUgcmVtb3ZlZCBhdCB0aGlzIHN0ZXAgYXMgc2Nyb2xsXHJcbiAgICAgICAgLy8gYmFycyBhcmUgdGhlIG9ubHkgZGlmZmVyZW5jZSBiZXR3ZWVuIHJvdW5kZWQgZGltZW5zaW9ucyArIHBhZGRpbmdzXHJcbiAgICAgICAgLy8gYW5kIFwiY2xpZW50XCIgcHJvcGVydGllcywgdGhvdWdoIHRoYXQgaXMgbm90IGFsd2F5cyB0cnVlIGluIENocm9tZS5cclxuICAgICAgICB2YXIgdmVydFNjcm9sbGJhciA9IE1hdGgucm91bmQod2lkdGggKyBob3JpelBhZCkgLSBjbGllbnRXaWR0aDtcclxuICAgICAgICB2YXIgaG9yaXpTY3JvbGxiYXIgPSBNYXRoLnJvdW5kKGhlaWdodCArIHZlcnRQYWQpIC0gY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIC8vIENocm9tZSBoYXMgYSByYXRoZXIgd2VpcmQgcm91bmRpbmcgb2YgXCJjbGllbnRcIiBwcm9wZXJ0aWVzLlxyXG4gICAgICAgIC8vIEUuZy4gZm9yIGFuIGVsZW1lbnQgd2l0aCBjb250ZW50IHdpZHRoIG9mIDMxNC4ycHggaXQgc29tZXRpbWVzIGdpdmVzXHJcbiAgICAgICAgLy8gdGhlIGNsaWVudCB3aWR0aCBvZiAzMTVweCBhbmQgZm9yIHRoZSB3aWR0aCBvZiAzMTQuN3B4IGl0IG1heSBnaXZlXHJcbiAgICAgICAgLy8gMzE0cHguIEFuZCBpdCBkb2Vzbid0IGhhcHBlbiBhbGwgdGhlIHRpbWUuIFNvIGp1c3QgaWdub3JlIHRoaXMgZGVsdGFcclxuICAgICAgICAvLyBhcyBhIG5vbi1yZWxldmFudC5cclxuICAgICAgICBpZiAoTWF0aC5hYnModmVydFNjcm9sbGJhcikgIT09IDEpIHtcclxuICAgICAgICAgICAgd2lkdGggLT0gdmVydFNjcm9sbGJhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGhvcml6U2Nyb2xsYmFyKSAhPT0gMSkge1xyXG4gICAgICAgICAgICBoZWlnaHQgLT0gaG9yaXpTY3JvbGxiYXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KHBhZGRpbmdzLmxlZnQsIHBhZGRpbmdzLnRvcCwgd2lkdGgsIGhlaWdodCk7XHJcbn1cclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIHByb3ZpZGVkIGVsZW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIFNWR0dyYXBoaWNzRWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxudmFyIGlzU1ZHR3JhcGhpY3NFbGVtZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFNvbWUgYnJvd3NlcnMsIG5hbWVseSBJRSBhbmQgRWRnZSwgZG9uJ3QgaGF2ZSB0aGUgU1ZHR3JhcGhpY3NFbGVtZW50XHJcbiAgICAvLyBpbnRlcmZhY2UuXHJcbiAgICBpZiAodHlwZW9mIFNWR0dyYXBoaWNzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5TVkdHcmFwaGljc0VsZW1lbnQ7IH07XHJcbiAgICB9XHJcbiAgICAvLyBJZiBpdCdzIHNvLCB0aGVuIGNoZWNrIHRoYXQgZWxlbWVudCBpcyBhdCBsZWFzdCBhbiBpbnN0YW5jZSBvZiB0aGVcclxuICAgIC8vIFNWR0VsZW1lbnQgYW5kIHRoYXQgaXQgaGFzIHRoZSBcImdldEJCb3hcIiBtZXRob2QuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0cmEtcGFyZW5zXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuU1ZHRWxlbWVudCAmJlxyXG4gICAgICAgIHR5cGVvZiB0YXJnZXQuZ2V0QkJveCA9PT0gJ2Z1bmN0aW9uJyk7IH07XHJcbn0pKCk7XHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBwcm92aWRlZCBlbGVtZW50IGlzIGEgZG9jdW1lbnQgZWxlbWVudCAoPGh0bWw+KS5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNEb2N1bWVudEVsZW1lbnQodGFyZ2V0KSB7XHJcbiAgICByZXR1cm4gdGFyZ2V0ID09PSBnZXRXaW5kb3dPZih0YXJnZXQpLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBhbiBhcHByb3ByaWF0ZSBjb250ZW50IHJlY3RhbmdsZSBmb3IgcHJvdmlkZWQgaHRtbCBvciBzdmcgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHdoaWNoIG5lZWRzIHRvIGJlIGNhbGN1bGF0ZWQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldENvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcclxuICAgICAgICByZXR1cm4gZW1wdHlSZWN0O1xyXG4gICAgfVxyXG4gICAgaWYgKGlzU1ZHR3JhcGhpY3NFbGVtZW50KHRhcmdldCkpIHtcclxuICAgICAgICByZXR1cm4gZ2V0U1ZHQ29udGVudFJlY3QodGFyZ2V0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudENvbnRlbnRSZWN0KHRhcmdldCk7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0ZXMgcmVjdGFuZ2xlIHdpdGggYW4gaW50ZXJmYWNlIG9mIHRoZSBET01SZWN0UmVhZE9ubHkuXHJcbiAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkb21yZWN0cmVhZG9ubHlcclxuICpcclxuICogQHBhcmFtIHtET01SZWN0SW5pdH0gcmVjdEluaXQgLSBPYmplY3Qgd2l0aCByZWN0YW5nbGUncyB4L3kgY29vcmRpbmF0ZXMgYW5kIGRpbWVuc2lvbnMuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0UmVhZE9ubHl9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVSZWFkT25seVJlY3QoX2EpIHtcclxuICAgIHZhciB4ID0gX2EueCwgeSA9IF9hLnksIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcclxuICAgIC8vIElmIERPTVJlY3RSZWFkT25seSBpcyBhdmFpbGFibGUgdXNlIGl0IGFzIGEgcHJvdG90eXBlIGZvciB0aGUgcmVjdGFuZ2xlLlxyXG4gICAgdmFyIENvbnN0ciA9IHR5cGVvZiBET01SZWN0UmVhZE9ubHkgIT09ICd1bmRlZmluZWQnID8gRE9NUmVjdFJlYWRPbmx5IDogT2JqZWN0O1xyXG4gICAgdmFyIHJlY3QgPSBPYmplY3QuY3JlYXRlKENvbnN0ci5wcm90b3R5cGUpO1xyXG4gICAgLy8gUmVjdGFuZ2xlJ3MgcHJvcGVydGllcyBhcmUgbm90IHdyaXRhYmxlIGFuZCBub24tZW51bWVyYWJsZS5cclxuICAgIGRlZmluZUNvbmZpZ3VyYWJsZShyZWN0LCB7XHJcbiAgICAgICAgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICB0b3A6IHksXHJcbiAgICAgICAgcmlnaHQ6IHggKyB3aWR0aCxcclxuICAgICAgICBib3R0b206IGhlaWdodCArIHksXHJcbiAgICAgICAgbGVmdDogeFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVjdDtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyBET01SZWN0SW5pdCBvYmplY3QgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGRpbWVuc2lvbnMgYW5kIHRoZSB4L3kgY29vcmRpbmF0ZXMuXHJcbiAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkaWN0ZGVmLWRvbXJlY3Rpbml0XHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gWCBjb29yZGluYXRlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geSAtIFkgY29vcmRpbmF0ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gUmVjdGFuZ2xlJ3Mgd2lkdGguXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBSZWN0YW5nbGUncyBoZWlnaHQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlY3RJbml0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHJldHVybiB7IHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcclxufVxuXG4vKipcclxuICogQ2xhc3MgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgY29tcHV0YXRpb25zIG9mIHRoZSBjb250ZW50IHJlY3RhbmdsZSBvZlxyXG4gKiBwcm92aWRlZCBET00gZWxlbWVudCBhbmQgZm9yIGtlZXBpbmcgdHJhY2sgb2YgaXQncyBjaGFuZ2VzLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2YXRpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQnJvYWRjYXN0ZWQgd2lkdGggb2YgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0V2lkdGggPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEJyb2FkY2FzdGVkIGhlaWdodCBvZiBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtET01SZWN0SW5pdH1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IGNyZWF0ZVJlY3RJbml0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIGFuZCB0ZWxscyB3aGV0aGVyIGl0J3Mgd2lkdGggb3IgaGVpZ2h0IHByb3BlcnRpZXNcclxuICAgICAqIGhhdmUgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCBicm9hZGNhc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVjdCA9IGdldENvbnRlbnRSZWN0KHRoaXMudGFyZ2V0KTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IHJlY3Q7XHJcbiAgICAgICAgcmV0dXJuIChyZWN0LndpZHRoICE9PSB0aGlzLmJyb2FkY2FzdFdpZHRoIHx8XHJcbiAgICAgICAgICAgIHJlY3QuaGVpZ2h0ICE9PSB0aGlzLmJyb2FkY2FzdEhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzICdicm9hZGNhc3RXaWR0aCcgYW5kICdicm9hZGNhc3RIZWlnaHQnIHByb3BlcnRpZXMgd2l0aCBhIGRhdGFcclxuICAgICAqIGZyb20gdGhlIGNvcnJlc3BvbmRpbmcgcHJvcGVydGllcyBvZiB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9IExhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5icm9hZGNhc3RSZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5jb250ZW50UmVjdF87XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RXaWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgICAgICByZXR1cm4gcmVjdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2YXRpb247XHJcbn0oKSk7XG5cbnZhciBSZXNpemVPYnNlcnZlckVudHJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyRW50cnkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRoYXQgaXMgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgKiBAcGFyYW0ge0RPTVJlY3RJbml0fSByZWN0SW5pdCAtIERhdGEgb2YgdGhlIGVsZW1lbnQncyBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJFbnRyeSh0YXJnZXQsIHJlY3RJbml0KSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRSZWN0ID0gY3JlYXRlUmVhZE9ubHlSZWN0KHJlY3RJbml0KTtcclxuICAgICAgICAvLyBBY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlIG5vdCB3cml0YWJsZVxyXG4gICAgICAgIC8vIGFuZCBhcmUgYWxzbyBub3QgZW51bWVyYWJsZSBpbiB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUHJvcGVydHkgYWNjZXNzb3JzIGFyZSBub3QgYmVpbmcgdXNlZCBhcyB0aGV5J2QgcmVxdWlyZSB0byBkZWZpbmUgYVxyXG4gICAgICAgIC8vIHByaXZhdGUgV2Vha01hcCBzdG9yYWdlIHdoaWNoIG1heSBjYXVzZSBtZW1vcnkgbGVha3MgaW4gYnJvd3NlcnMgdGhhdFxyXG4gICAgICAgIC8vIGRvbid0IHN1cHBvcnQgdGhpcyB0eXBlIG9mIGNvbGxlY3Rpb25zLlxyXG4gICAgICAgIGRlZmluZUNvbmZpZ3VyYWJsZSh0aGlzLCB7IHRhcmdldDogdGFyZ2V0LCBjb250ZW50UmVjdDogY29udGVudFJlY3QgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJFbnRyeTtcclxufSgpKTtcblxudmFyIFJlc2l6ZU9ic2VydmVyU1BJID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWRcclxuICAgICAqICAgICAgd2hlbiBvbmUgb2YgdGhlIG9ic2VydmVkIGVsZW1lbnRzIGNoYW5nZXMgaXQncyBjb250ZW50IGRpbWVuc2lvbnMuXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn0gY29udHJvbGxlciAtIENvbnRyb2xsZXIgaW5zdGFuY2Ugd2hpY2hcclxuICAgICAqICAgICAgaXMgcmVzcG9uc2libGUgZm9yIHRoZSB1cGRhdGVzIG9mIG9ic2VydmVyLlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlcn0gY2FsbGJhY2tDdHggLSBSZWZlcmVuY2UgdG8gdGhlIHB1YmxpY1xyXG4gICAgICogICAgICBSZXNpemVPYnNlcnZlciBpbnN0YW5jZSB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJTUEkoY2FsbGJhY2ssIGNvbnRyb2xsZXIsIGNhbGxiYWNrQ3R4KSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29sbGVjdGlvbiBvZiByZXNpemUgb2JzZXJ2YXRpb25zIHRoYXQgaGF2ZSBkZXRlY3RlZCBjaGFuZ2VzIGluIGRpbWVuc2lvbnNcclxuICAgICAgICAgKiBvZiBlbGVtZW50cy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtBcnJheTxSZXNpemVPYnNlcnZhdGlvbj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVnaXN0cnkgb2YgdGhlIFJlc2l6ZU9ic2VydmF0aW9uIGluc3RhbmNlcy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtNYXA8RWxlbWVudCwgUmVzaXplT2JzZXJ2YXRpb24+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXyA9IG5ldyBNYXBTaGltKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2FsbGJhY2sgcHJvdmlkZWQgYXMgcGFyYW1ldGVyIDEgaXMgbm90IGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXyA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja0N0eF8gPSBjYWxsYmFja0N0eDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIG9ic2VydmluZyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cclxuICAgICAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICAgIGlmIChvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZhdGlvbnMuc2V0KHRhcmdldCwgbmV3IFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCkpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8uYWRkT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICAgICAgLy8gRm9yY2UgdGhlIHVwZGF0ZSBvZiBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBvYnNlcnZpbmcgcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gc3RvcCBvYnNlcnZpbmcuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cclxuICAgICAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBub3QgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgICAgaWYgKCFvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZhdGlvbnMuZGVsZXRlKHRhcmdldCk7XHJcbiAgICAgICAgaWYgKCFvYnNlcnZhdGlvbnMuc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIG9ic2VydmluZyBhbGwgZWxlbWVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18uY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ29sbGVjdHMgb2JzZXJ2YXRpb24gaW5zdGFuY2VzIHRoZSBhc3NvY2lhdGVkIGVsZW1lbnQgb2Ygd2hpY2ggaGFzIGNoYW5nZWRcclxuICAgICAqIGl0J3MgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5nYXRoZXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChvYnNlcnZhdGlvbi5pc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnB1c2gob2JzZXJ2YXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VzIGluaXRpYWwgY2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBhIGxpc3Qgb2YgUmVzaXplT2JzZXJ2ZXJFbnRyeVxyXG4gICAgICogaW5zdGFuY2VzIGNvbGxlY3RlZCBmcm9tIGFjdGl2ZSByZXNpemUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuYnJvYWRjYXN0QWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgb2JzZXJ2ZXIgZG9lc24ndCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuY2FsbGJhY2tDdHhfO1xyXG4gICAgICAgIC8vIENyZWF0ZSBSZXNpemVPYnNlcnZlckVudHJ5IGluc3RhbmNlIGZvciBldmVyeSBhY3RpdmUgb2JzZXJ2YXRpb24uXHJcbiAgICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ubWFwKGZ1bmN0aW9uIChvYnNlcnZhdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlc2l6ZU9ic2VydmVyRW50cnkob2JzZXJ2YXRpb24udGFyZ2V0LCBvYnNlcnZhdGlvbi5icm9hZGNhc3RSZWN0KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfLmNhbGwoY3R4LCBlbnRyaWVzLCBjdHgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENsZWFycyB0aGUgY29sbGVjdGlvbiBvZiBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuY2xlYXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnNwbGljZSgwKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFRlbGxzIHdoZXRoZXIgb2JzZXJ2ZXIgaGFzIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5oYXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5sZW5ndGggPiAwO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlclNQSTtcclxufSgpKTtcblxuLy8gUmVnaXN0cnkgb2YgaW50ZXJuYWwgb2JzZXJ2ZXJzLiBJZiBXZWFrTWFwIGlzIG5vdCBhdmFpbGFibGUgdXNlIGN1cnJlbnQgc2hpbVxyXG4vLyBmb3IgdGhlIE1hcCBjb2xsZWN0aW9uIGFzIGl0IGhhcyBhbGwgcmVxdWlyZWQgbWV0aG9kcyBhbmQgYmVjYXVzZSBXZWFrTWFwXHJcbi8vIGNhbid0IGJlIGZ1bGx5IHBvbHlmaWxsZWQgYW55d2F5LlxyXG52YXIgb2JzZXJ2ZXJzID0gdHlwZW9mIFdlYWtNYXAgIT09ICd1bmRlZmluZWQnID8gbmV3IFdlYWtNYXAoKSA6IG5ldyBNYXBTaGltKCk7XHJcbi8qKlxyXG4gKiBSZXNpemVPYnNlcnZlciBBUEkuIEVuY2Fwc3VsYXRlcyB0aGUgUmVzaXplT2JzZXJ2ZXIgU1BJIGltcGxlbWVudGF0aW9uXHJcbiAqIGV4cG9zaW5nIG9ubHkgdGhvc2UgbWV0aG9kcyBhbmQgcHJvcGVydGllcyB0aGF0IGFyZSBkZWZpbmVkIGluIHRoZSBzcGVjLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gY2FsbGJhY2sgLSBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlblxyXG4gICAgICogICAgICBkaW1lbnNpb25zIG9mIHRoZSBvYnNlcnZlZCBlbGVtZW50cyBjaGFuZ2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlc2l6ZU9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb250cm9sbGVyID0gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyU1BJKGNhbGxiYWNrLCBjb250cm9sbGVyLCB0aGlzKTtcclxuICAgICAgICBvYnNlcnZlcnMuc2V0KHRoaXMsIG9ic2VydmVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcclxufSgpKTtcclxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG5bXHJcbiAgICAnb2JzZXJ2ZScsXHJcbiAgICAndW5vYnNlcnZlJyxcclxuICAgICdkaXNjb25uZWN0J1xyXG5dLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xyXG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiAoX2EgPSBvYnNlcnZlcnMuZ2V0KHRoaXMpKVttZXRob2RdLmFwcGx5KF9hLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxufSk7XG5cbnZhciBpbmRleCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBFeHBvcnQgZXhpc3RpbmcgaW1wbGVtZW50YXRpb24gaWYgYXZhaWxhYmxlLlxyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwkMS5SZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsJDEuUmVzaXplT2JzZXJ2ZXI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XHJcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiaW1wb3J0IHsgTXV0YWJsZVJlZk9iamVjdCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSAncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VCb3VuZGluZ0NsaWVudFJlY3QocmVmOiBNdXRhYmxlUmVmT2JqZWN0PEhUTUxFbGVtZW50Pik6IERPTVJlY3RSZWFkT25seSB8IHVuZGVmaW5lZCB7XHJcbiAgICBjb25zdCBbYm91bmRpbmdDbGllbnRSZWN0LCBzZXRCb3VuZGluZ0NsaWVudFJlY3RdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVNoaWZ0KCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlZi5jdXJyZW50ID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbmV3UmVjdCA9IERPTVJlY3RSZWFkT25seS5mcm9tUmVjdChyZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdCAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIG5ld1JlY3QuYm90dG9tID09IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gJiZcclxuICAgICAgICAgICAgICAgIG5ld1JlY3QuaGVpZ2h0ID09IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgJiZcclxuICAgICAgICAgICAgICAgIG5ld1JlY3QubGVmdCA9PSBib3VuZGluZ0NsaWVudFJlY3QubGVmdCAmJlxyXG4gICAgICAgICAgICAgICAgbmV3UmVjdC5yaWdodCA9PSBib3VuZGluZ0NsaWVudFJlY3QucmlnaHQgJiZcclxuICAgICAgICAgICAgICAgIG5ld1JlY3QudG9wID09IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgJiZcclxuICAgICAgICAgICAgICAgIG5ld1JlY3Qud2lkdGggPT0gYm91bmRpbmdDbGllbnRSZWN0LndpZHRoICYmXHJcbiAgICAgICAgICAgICAgICBuZXdSZWN0LnggPT0gYm91bmRpbmdDbGllbnRSZWN0LnggJiZcclxuICAgICAgICAgICAgICAgIG5ld1JlY3QueSA9PSBib3VuZGluZ0NsaWVudFJlY3QueVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRCb3VuZGluZ0NsaWVudFJlY3QobmV3UmVjdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlU2hpZnQpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTaGlmdCk7XHJcbiAgICAgICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoaGFuZGxlU2hpZnQpO1xyXG4gICAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUocmVmLmN1cnJlbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzaXplT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2hpZnQpO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlU2hpZnQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIGJvdW5kaW5nQ2xpZW50UmVjdDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=