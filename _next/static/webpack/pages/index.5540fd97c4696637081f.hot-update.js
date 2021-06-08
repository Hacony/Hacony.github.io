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
/* harmony import */ var _common_image_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/image-gallery */ "./components/common/image-gallery.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-commission.module.scss */ "./components/page-commission/page-commission.module.scss");
/* harmony import */ var _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\User\\Dev\\hacony-site\\components\\page-commission\\page-commission.tsx",
    _this2 = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function PageIndex() {
  var _this = this;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(_common_site_head__WEBPACK_IMPORTED_MODULE_3__["default"], Object(C_Users_User_Dev_hacony_site_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _constants_commission_constants__WEBPACK_IMPORTED_MODULE_2__["COMMISSION_PAGE_INFO"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.bannerContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.banner,
    src: '/images/commission-banner.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.bannerFade,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.contentContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(ContentRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.titleContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.titleLogo,
    src: '/images/logo-hacony.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }), __jsx("h1", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.titleText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, "Commission Information"), __jsx("p", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.subtitleText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, "Commissions open the first day of every month!"))), _constants_commission_constants__WEBPACK_IMPORTED_MODULE_2__["COMMISSION_TIERS"].map(function (comissionTier, i) {
    return __jsx(CommissionTier, Object(C_Users_User_Dev_hacony_site_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, comissionTier, {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 61
      }
    }));
  }), __jsx(ContentRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.externalGalleryHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "For more examples, check out my gallery"), __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.iconContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: 'https://twitter.com/hornysharkat',
    target: "_blank",
    rel: "noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.icon,
    src: '/images/logo-twitter.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  })), __jsx("a", {
    href: 'https://www.furaffinity.net/user/qundium',
    target: "_blank",
    rel: "noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.icon,
    src: '/images/logo-furaffinity.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  })))), __jsx(ContentRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.drawInfoContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.drawInfoSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, __jsx("h2", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.drawInfoHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, "What I will draw\u2026"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, _constants_commission_constants__WEBPACK_IMPORTED_MODULE_2__["willDrawList"].map(function (item, i) {
    return __jsx("li", {
      className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.drawInfoListItem,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 64
      }
    }, item);
  }))), __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.drawInfoSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, __jsx("h2", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.drawInfoHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, "What I won\u2019t draw\u2026"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, _constants_commission_constants__WEBPACK_IMPORTED_MODULE_2__["wontDrawList"].map(function (item, i) {
    return __jsx("li", {
      className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.drawInfoListItem,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 64
      }
    }, item);
  }))))), __jsx(ContentRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.commissionNotesHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, "Please note:"), __jsx("ul", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.commissionNoteList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, _constants_commission_constants__WEBPACK_IMPORTED_MODULE_2__["commissionNotes"].map(function (item, i) {
    return __jsx("li", {
      className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.commissionNoteListItem,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 59
      }
    }, item);
  }))), __jsx(ContentRow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.contactHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, "Contact"), __jsx("p", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.contactText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, "For commissions and questions, please contact me on Telegram!"), __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.iconContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: 'https://t.me/hacony',
    target: "_blank",
    rel: "noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.icon,
    src: '/images/logo-telegram.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 85,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.commissionTierContainer,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, gallery && __jsx(_common_image_gallery__WEBPACK_IMPORTED_MODULE_4__["default"], {
    srcs: gallery,
    height: galleryHeight,
    padCount: 6,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.commissionTierInfoContainer,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.commissionTierInfo,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.commissionTierHeader,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, header), __jsx("div", {
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.commissionTierDescriptions,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, descPoints && descPoints.map(function (descPoint, i) {
    return __jsx("li", {
      className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.commissionTierDescription,
      key: i,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
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
    className: _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.contentRow,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.content, wideContent && _page_commission_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.wide),
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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

/***/ "./constants/commission-constants.tsx":
/*!********************************************!*\
  !*** ./constants/commission-constants.tsx ***!
  \********************************************/
/*! exports provided: COMMISSION_PAGE_INFO, COMMISSION_TIERS, willDrawList, wontDrawList, commissionNotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMISSION_PAGE_INFO", function() { return COMMISSION_PAGE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMISSION_TIERS", function() { return COMMISSION_TIERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "willDrawList", function() { return willDrawList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wontDrawList", function() { return wontDrawList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commissionNotes", function() { return commissionNotes; });
var COMMISSION_PAGE_INFO = {
  title: 'Commissions - Hacony Studio',
  description: 'Art commissions by Hacony! Find out more about his commission tiers and prices here',
  keywords: ['hacony', 'qundium', 'cocoshark', 'hornysharkat', 'yewonlee1999', 'odiousbird', 'art', 'studio', 'drawing', 'commission'],
  url: 'https://hacony-studio.com/commission/',
  image: {
    src: '/images/commission-preview.png',
    type: 'image/jpeg',
    width: 1200,
    height: 630
  },
  twitterImageSrc: '/images/commission-preview.png'
};
var COMMISSION_TIERS = [{
  header: 'Full Body | 100 USD',
  descPoints: ['+ 80 USD per additional character', '+ 10 USD for background, complicated character design, wings, etc'],
  gallery: ['/images/commission/fullbody-00.png', '/images/commission/fullbody-01.png', '/images/commission/fullbody-02.png', '/images/commission/fullbody-03.png', '/images/commission/fullbody-04.png', '/images/commission/fullbody-05.png', '/images/commission/fullbody-06.png', '/images/commission/fullbody-07.png', '/images/commission/fullbody-08.png', '/images/commission/fullbody-09.png', '/images/commission/fullbody-10.png', '/images/commission/fullbody-11.png', '/images/commission/fullbody-12.png', '/images/commission/fullbody-13.png', '/images/commission/fullbody-14.png', '/images/commission/fullbody-15.png', '/images/commission/fullbody-16.png', '/images/commission/fullbody-17.png', '/images/commission/fullbody-18.png'],
  galleryHeight: 'min(500px, 90vh)'
}, {
  header: 'Sequence | 280 USD',
  descPoints: ['4-5 scenes in one page'],
  gallery: ['/images/commission/seq-00.png', '/images/commission/seq-01.png', '/images/commission/seq-02.png', '/images/commission/seq-03.png', '/images/commission/seq-04.png', '/images/commission/seq-05.png', '/images/commission/seq-06.png', '/images/commission/seq-07.png', '/images/commission/seq-08.png', '/images/commission/seq-09.png', '/images/commission/seq-10.png', '/images/commission/seq-11.png'],
  galleryHeight: 'min(500px, 90vh)'
}, {
  header: 'Sticker | 25~35 USD',
  descPoints: ['Flat-coloured stickers for Telegram', 'Price is per sticker, maximum of 6 stickers', '+ 5-12 USD for shine/shading', '+ 5-10 USD per additional character'],
  gallery: ['/images/commission/stickers-00.png', '/images/commission/stickers-01.png', '/images/commission/stickers-02.png', '/images/commission/stickers-03.png', '/images/commission/stickers-04.png', '/images/commission/stickers-05.png', '/images/commission/stickers-06.png', '/images/commission/stickers-07.png', '/images/commission/stickers-08.png', '/images/commission/stickers-09.png', '/images/commission/stickers-10.png', '/images/commission/stickers-11.png', '/images/commission/stickers-12.png', '/images/commission/stickers-13.png', '/images/commission/stickers-14.png', '/images/commission/stickers-15.png', '/images/commission/stickers-16.png', '/images/commission/stickers-17.png', '/images/commission/stickers-18.png', '/images/commission/stickers-19.png', '/images/commission/stickers-20.png', '/images/commission/stickers-21.png', '/images/commission/stickers-22.png', '/images/commission/stickers-23.png', '/images/commission/stickers-24.png', '/images/commission/stickers-25.png', '/images/commission/stickers-26.png', '/images/commission/stickers-27.png', '/images/commission/stickers-28.png', '/images/commission/stickers-29.png', '/images/commission/stickers-30.png', '/images/commission/stickers-31.png', '/images/commission/stickers-32.png', '/images/commission/stickers-33.png', '/images/commission/stickers-34.png', '/images/commission/stickers-35.png', '/images/commission/stickers-36.png', '/images/commission/stickers-37.png', '/images/commission/stickers-38.png'],
  galleryHeight: '200px'
}, {
  header: 'Comic | 150+ USD',
  descPoints: ['Price depends on story, characters, and complexity', 'Each comic page has 3-5 panels'],
  gallery: ['/images/commission/comic-00.png', '/images/commission/comic-01.png', '/images/commission/comic-02.png', '/images/commission/comic-03.png', '/images/commission/comic-04.png', '/images/commission/comic-05.png', '/images/commission/comic-06.png', '/images/commission/comic-07.png', '/images/commission/comic-08.png', '/images/commission/comic-09.png'],
  galleryHeight: 'min(500px,90vh)'
}, {
  header: 'Character Sheet | 180+ USD',
  descPoints: ['Front and back view', '+ 50 USD for new character designs'],
  gallery: ['/images/commission/charref-00.png', '/images/commission/charref-01.png', '/images/commission/charref-02.png', '/images/commission/charref-03.png', '/images/commission/charref-04.png', '/images/commission/charref-05.png', '/images/commission/charref-06.png'],
  galleryHeight: 'min(500px,90vh)'
}];
var willDrawList = ['Male', 'Furry', 'NSFW', 'Goo Transformation', 'Latex', 'Pooltoy', 'Bondage', 'Watersports', 'Ferals', 'Mecha', 'Insects'];
var wontDrawList = ['Female', 'Human', 'Underaged characters', 'Blood', 'Fantasy Armours', 'Propaganda'];
var commissionNotes = ['Payments made must be in USD on Paypal', 'Commissions are posted to Patreon first. Please wait for 1 month before uploading the commission', 'Commissions are to be used for non-commercial purposes only'];

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


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vaW1hZ2UtZ2FsbGVyeS5tb2R1bGUuc2Nzcz9kMDc5Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1vbi9pbWFnZS1nYWxsZXJ5LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlLWNvbW1pc3Npb24vcGFnZS1jb21taXNzaW9uLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2NvbW1pc3Npb24tY29uc3RhbnRzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vaW1hZ2UtZ2FsbGVyeS5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJJbWFnZUdhbGxlcnkiLCJzcmNzIiwiaGVpZ2h0IiwicGFkQ291bnQiLCJpbWFnZUdhbGxlcnlSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInZpZXdJbmRleCIsInNldFZpZXdJbmRleCIsInNob3dBbmltYXRpb24iLCJzZXRTaG93QW5pbWF0aW9uIiwiaW1nR2FsbGVyeVNpemUiLCJ1c2VCb3VuZGluZ0NsaWVudFJlY3QiLCJBcnJheSIsImxlbmd0aCIsImZpbGwiLCJpbWdXaWR0aHMiLCJzZXRJbWdXaWR0aHMiLCJpbWdNYXJnaW4iLCJNYXRoIiwicm91bmQiLCJnZXRJbWFnZUluZGV4IiwiY3VyVmlld0luZGV4IiwibiIsImltYWdlSW5kZXgiLCJnZXRTcmMiLCJnZXRJbWFnZVdpZHRoIiwiZ2V0SW1hZ2VQb3NpdGlvbiIsIm9mZnNldFBvc2l0aW9uIiwib2Zmc2V0IiwiaSIsIm1ha2VJbmNyZW1lbnRWaWV3SW5kZXgiLCJoYW5kbGVDbGlja1ByZXYiLCJoYW5kbGVDbGlja05leHQiLCJnYWxsZXJ5SXRlbUVsZW1zIiwic3R5bGUiLCJ3aWR0aCIsInRyYW5zZm9ybSIsInpJbmRleCIsImFicyIsImN1cnNvciIsImNsYXNzTmFtZSIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJpbWFnZUdhbGxlcnlJdGVtQ29udGFpbmVyIiwiY2xpY2thYmxlIiwiYW5pbWF0ZWQiLCJwdXNoIiwiaW1hZ2VHYWxsZXJ5SXRlbSIsImltYWdlR2FsbGVyeSIsImltYWdlR2FsbGVyeUxlZnROYXYiLCJpbWFnZUdhbGxlcnlMZWZ0QXJyb3ciLCJpbWFnZUdhbGxlcnlSaWdodE5hdiIsImltYWdlR2FsbGVyeVJpZ2h0QXJyb3ciLCJpbWFnZUdhbGxlcnlJdGVtcyIsIkltYWdlR2FsbGVyeVByZXZpZXciLCJ1cGRhdGVJbWFnZVdpZHRocyIsInByZXZpZXdEaXZSZWYiLCJ1bmRlZmluZWQiLCJwcmV2aWV3SWQiLCJmbG9vciIsInJhbmRvbSIsImhhbmRsZUltYWdlV2lkdGhDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInByZXZpZXdEaXZFbGVtIiwiZnJvbSIsImNoaWxkcmVuIiwibWFwIiwiZWxlbSIsImNsaWVudFdpZHRoIiwidXNlRWZmZWN0Iiwiam9pbiIsImltYWdlR2FsbGVyeVByZXZpZXciLCJzcmMiLCJpbWFnZUdhbGxlcnlQcmV2aWV3SW1hZ2UiLCJQYWdlSW5kZXgiLCJDT01NSVNTSU9OX1BBR0VfSU5GTyIsImJhbm5lckNvbnRhaW5lciIsImJhbm5lciIsImJhbm5lckZhZGUiLCJjb250ZW50Q29udGFpbmVyIiwidGl0bGVDb250YWluZXIiLCJ0aXRsZUxvZ28iLCJ0aXRsZVRleHQiLCJzdWJ0aXRsZVRleHQiLCJDT01NSVNTSU9OX1RJRVJTIiwiY29taXNzaW9uVGllciIsImV4dGVybmFsR2FsbGVyeUhlYWRlciIsImljb25Db250YWluZXIiLCJpY29uIiwiZHJhd0luZm9Db250YWluZXIiLCJkcmF3SW5mb1NlY3Rpb24iLCJkcmF3SW5mb0hlYWRlciIsIndpbGxEcmF3TGlzdCIsIml0ZW0iLCJkcmF3SW5mb0xpc3RJdGVtIiwid29udERyYXdMaXN0IiwiY29tbWlzc2lvbk5vdGVzSGVhZGVyIiwiY29tbWlzc2lvbk5vdGVMaXN0IiwiY29tbWlzc2lvbk5vdGVzIiwiY29tbWlzc2lvbk5vdGVMaXN0SXRlbSIsImNvbnRhY3RIZWFkZXIiLCJjb250YWN0VGV4dCIsIkNvbW1pc3Npb25UaWVyIiwicHJvcHMiLCJoZWFkZXIiLCJkZXNjUG9pbnRzIiwiZ2FsbGVyeSIsImdhbGxlcnlIZWlnaHQiLCJjb21taXNzaW9uVGllckNvbnRhaW5lciIsImNvbW1pc3Npb25UaWVySW5mb0NvbnRhaW5lciIsImNvbW1pc3Npb25UaWVySW5mbyIsImNvbW1pc3Npb25UaWVySGVhZGVyIiwiY29tbWlzc2lvblRpZXJEZXNjcmlwdGlvbnMiLCJkZXNjUG9pbnQiLCJjb21taXNzaW9uVGllckRlc2NyaXB0aW9uIiwiQ29udGVudFJvdyIsIndpZGVDb250ZW50IiwiY29udGVudFJvdyIsImNvbnRlbnQiLCJ3aWRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwidXJsIiwiaW1hZ2UiLCJ0eXBlIiwidHdpdHRlckltYWdlU3JjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxVQUFVLG1CQUFPLENBQUMsc05BQTJHO0FBQzdILDBCQUEwQixtQkFBTyxDQUFDLG9tQkFBc1Y7O0FBRXhYOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUE7QUFDQSxNQUFNLG9tQkFBc1Y7QUFDNVY7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxvbUJBQXNWOztBQUVoWDs7QUFFQTtBQUNBLDRCQUE0QixRQUFTO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTU0MGZkOTdjNDY5NjYzNzA4MWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vaW1hZ2UtZ2FsbGVyeS5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vaW1hZ2UtZ2FsbGVyeS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2ltYWdlLWdhbGxlcnkubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgQ1NTUHJvcGVydGllcywgRnVuY3Rpb25Db21wb25lbnQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQm91bmRpbmdDbGllbnRSZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVhY3QtaG9va3MnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZS1nYWxsZXJ5Lm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IEltYWdlR2FsbGVyeTogRnVuY3Rpb25Db21wb25lbnQ8eyBzcmNzOiBzdHJpbmdbXSwgaGVpZ2h0OiBzdHJpbmcsIHBhZENvdW50OiBudW1iZXIgfT4gPSAoeyBzcmNzLCBoZWlnaHQsIHBhZENvdW50IH0pID0+IHtcclxuICAgIGNvbnN0IGltYWdlR2FsbGVyeVJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgW3ZpZXdJbmRleCwgc2V0Vmlld0luZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IFtzaG93QW5pbWF0aW9uLCBzZXRTaG93QW5pbWF0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBpbWdHYWxsZXJ5U2l6ZSA9IHVzZUJvdW5kaW5nQ2xpZW50UmVjdChpbWFnZUdhbGxlcnlSZWYpO1xyXG4gICAgY29uc3QgW2ltZ1dpZHRocywgc2V0SW1nV2lkdGhzXSA9IHVzZVN0YXRlKG5ldyBBcnJheShzcmNzLmxlbmd0aCkuZmlsbCgwKSk7XHJcblxyXG4gICAgY29uc3QgaW1nTWFyZ2luID0gTWF0aC5yb3VuZCgoaW1nR2FsbGVyeVNpemU/LmhlaWdodCB8fCAxKSAqIDAuMDUpIHx8IDE7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW1hZ2VJbmRleChjdXJWaWV3SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IG4gPSBzcmNzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBpbWFnZUluZGV4ID0gKChjdXJWaWV3SW5kZXggJSBuKSArIG4pICUgbjsgLy8gYWN0dWFsIG1vZCBmdW5jdGlvblxyXG4gICAgICAgIHJldHVybiBpbWFnZUluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNyYyhjdXJWaWV3SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBzcmNzW2dldEltYWdlSW5kZXgoY3VyVmlld0luZGV4KV07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW1hZ2VXaWR0aChjdXJWaWV3SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBpbWdXaWR0aHNbZ2V0SW1hZ2VJbmRleChjdXJWaWV3SW5kZXgpXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJbWFnZVBvc2l0aW9uKHZpZXdJbmRleDogbnVtYmVyLCBvZmZzZXRQb3NpdGlvbjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gLWdldEltYWdlV2lkdGgodmlld0luZGV4KSAvIDI7XHJcbiAgICAgICAgaWYgKG9mZnNldFBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXRQb3NpdGlvbiA8IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IG9mZnNldFBvc2l0aW9uOyBpIDwgMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgLT0gZ2V0SW1hZ2VXaWR0aCh2aWV3SW5kZXggKyBpKSArIGltZ01hcmdpbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0UG9zaXRpb24gPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2Zmc2V0UG9zaXRpb247IGkrKykge1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IGdldEltYWdlV2lkdGgodmlld0luZGV4ICsgaSkgKyBpbWdNYXJnaW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVYKCR7b2Zmc2V0fXB4KWA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUluY3JlbWVudFZpZXdJbmRleChuOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNob3dBbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHNldFNob3dBbmltYXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0Vmlld0luZGV4KHZpZXdJbmRleCArIG4pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVDbGlja1ByZXYgPSBtYWtlSW5jcmVtZW50Vmlld0luZGV4KC0xKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrTmV4dCA9IG1ha2VJbmNyZW1lbnRWaWV3SW5kZXgoMSk7XHJcblxyXG4gICAgY29uc3QgZ2FsbGVyeUl0ZW1FbGVtcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IC1wYWRDb3VudDsgaSA8PSBwYWRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY3VyVmlld0luZGV4ID0gdmlld0luZGV4ICsgaTtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IGAke2dldEltYWdlV2lkdGgoY3VyVmlld0luZGV4KX1weGAsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogZ2V0SW1hZ2VQb3NpdGlvbih2aWV3SW5kZXgsIGkpLFxyXG4gICAgICAgICAgICB6SW5kZXg6IHBhZENvdW50IC0gTWF0aC5hYnMoaSksXHJcbiAgICAgICAgfSBhcyBDU1NQcm9wZXJ0aWVzO1xyXG4gICAgICAgIGlmIChpICE9IDApIHtcclxuICAgICAgICAgICAgc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICBzdHlsZXMuaW1hZ2VHYWxsZXJ5SXRlbUNvbnRhaW5lcixcclxuICAgICAgICAgICAgaSAhPT0gMCAmJiBzdHlsZXMuY2xpY2thYmxlLFxyXG4gICAgICAgICAgICBzaG93QW5pbWF0aW9uICYmIHN0eWxlcy5hbmltYXRlZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZ2FsbGVyeUl0ZW1FbGVtcy5wdXNoKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17Y3VyVmlld0luZGV4fSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXttYWtlSW5jcmVtZW50Vmlld0luZGV4KGkpfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VHYWxsZXJ5SXRlbX0gc3JjPXtnZXRTcmMoY3VyVmlld0luZGV4KX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VHYWxsZXJ5fSByZWY9e2ltYWdlR2FsbGVyeVJlZn0gc3R5bGU9e3sgaGVpZ2h0OiBoZWlnaHQgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VHYWxsZXJ5TGVmdE5hdn0gb25DbGljaz17aGFuZGxlQ2xpY2tQcmV2fT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VHYWxsZXJ5TGVmdEFycm93fSBzcmM9XCIvaW1hZ2VzL2dhbGxlcnktYXJyb3ctbGVmdC5zdmdcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUdhbGxlcnlSaWdodE5hdn0gb25DbGljaz17aGFuZGxlQ2xpY2tOZXh0fT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VHYWxsZXJ5UmlnaHRBcnJvd30gc3JjPVwiL2ltYWdlcy9nYWxsZXJ5LWFycm93LXJpZ2h0LnN2Z1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlR2FsbGVyeUl0ZW1zfT5cclxuICAgICAgICAgICAgICAgIHtnYWxsZXJ5SXRlbUVsZW1zfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEltYWdlR2FsbGVyeVByZXZpZXcgc3Jjcz17c3Jjc30gaGVpZ2h0PXtoZWlnaHR9IHVwZGF0ZUltYWdlV2lkdGhzPXtzZXRJbWdXaWR0aHN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUdhbGxlcnk7XHJcblxyXG5jb25zdCBJbWFnZUdhbGxlcnlQcmV2aWV3OiBGdW5jdGlvbkNvbXBvbmVudDx7IHNyY3M6IHN0cmluZ1tdLCBoZWlnaHQ6IHN0cmluZywgdXBkYXRlSW1hZ2VXaWR0aHM6ICh3aWR0aEFycjogbnVtYmVyW10pID0+IHZvaWQgfT4gPSAoeyBzcmNzLCBoZWlnaHQsIHVwZGF0ZUltYWdlV2lkdGhzIH0pID0+IHtcclxuICAgIGNvbnN0IHByZXZpZXdEaXZSZWYgPSB1c2VSZWYodW5kZWZpbmVkIGFzIEhUTUxEaXZFbGVtZW50KTtcclxuXHJcbiAgICBjb25zdCBwcmV2aWV3SWQgPSB1c2VTdGF0ZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApKVswXTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUltYWdlV2lkdGhDaGFuZ2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZScsIHByZXZpZXdJZCk7XHJcbiAgICAgICAgaWYgKCFwcmV2aWV3RGl2UmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJldmlld0RpdkVsZW0gPSBwcmV2aWV3RGl2UmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgY29uc3QgaW1nV2lkdGhzID0gQXJyYXkuZnJvbShwcmV2aWV3RGl2RWxlbS5jaGlsZHJlbikubWFwKGVsZW0gPT4gZWxlbS5jbGllbnRXaWR0aCk7XHJcbiAgICAgICAgdXBkYXRlSW1hZ2VXaWR0aHMoaW1nV2lkdGhzKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGhhbmRsZUltYWdlV2lkdGhDaGFuZ2UoKTtcclxuICAgIH0sIFtzcmNzLmpvaW4oJ3wnKV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUdhbGxlcnlQcmV2aWV3fSByZWY9e3ByZXZpZXdEaXZSZWZ9IHN0eWxlPXt7IGhlaWdodDogaGVpZ2h0IH19PlxyXG4gICAgICAgICAgICB7c3Jjcy5tYXAoKHNyYywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGltZyBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlR2FsbGVyeVByZXZpZXdJbWFnZX0gc3JjPXtzcmN9IG9uTG9hZD17aGFuZGxlSW1hZ2VXaWR0aENoYW5nZX0vPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb21taXNzaW9uTm90ZXMsIENPTU1JU1NJT05fUEFHRV9JTkZPLCBDT01NSVNTSU9OX1RJRVJTLCB3aWxsRHJhd0xpc3QsIHdvbnREcmF3TGlzdCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb21taXNzaW9uLWNvbnN0YW50cyc7XHJcbmltcG9ydCBTaXRlSGVhZCBmcm9tICcuLi9jb21tb24vc2l0ZS1oZWFkJztcclxuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tICcuLi9jb21tb24vaW1hZ2UtZ2FsbGVyeSc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UtY29tbWlzc2lvbi5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlSW5kZXgoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPFNpdGVIZWFkIHsuLi5DT01NSVNTSU9OX1BBR0VfSU5GT30gLz5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFubmVyfT5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYW5uZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5iYW5uZXJ9IHNyYz17Jy9pbWFnZXMvY29tbWlzc2lvbi1iYW5uZXIucG5nJ30gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFubmVyRmFkZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy50aXRsZUxvZ299IHNyYz17Jy9pbWFnZXMvbG9nby1oYWNvbnkucG5nJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlVGV4dH0+Q29tbWlzc2lvbiBJbmZvcm1hdGlvbjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlVGV4dH0+Q29tbWlzc2lvbnMgb3BlbiB0aGUgZmlyc3QgZGF5IG9mIGV2ZXJ5IG1vbnRoITwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudFJvdz5cclxuICAgICAgICAgICAgICAgIHtDT01NSVNTSU9OX1RJRVJTLm1hcCgoY29taXNzaW9uVGllciwgaSkgPT4gPENvbW1pc3Npb25UaWVyIHsuLi5jb21pc3Npb25UaWVyfSBrZXk9e2l9IC8+KX1cclxuICAgICAgICAgICAgICAgIDxDb250ZW50Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5leHRlcm5hbEdhbGxlcnlIZWFkZXJ9PkZvciBtb3JlIGV4YW1wbGVzLCBjaGVjayBvdXQgbXkgZ2FsbGVyeTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17J2h0dHBzOi8vdHdpdHRlci5jb20vaG9ybnlzaGFya2F0J30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBzcmM9eycvaW1hZ2VzL2xvZ28tdHdpdHRlci5wbmcnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL3d3dy5mdXJhZmZpbml0eS5uZXQvdXNlci9xdW5kaXVtJ30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBzcmM9eycvaW1hZ2VzL2xvZ28tZnVyYWZmaW5pdHkucG5nJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kcmF3SW5mb0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJhd0luZm9TZWN0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5kcmF3SW5mb0hlYWRlcn0+V2hhdCBJIHdpbGwgZHJhd+KApjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpbGxEcmF3TGlzdC5tYXAoKGl0ZW0sIGkpID0+IDxsaSBjbGFzc05hbWU9e3N0eWxlcy5kcmF3SW5mb0xpc3RJdGVtfSBrZXk9e2l9PntpdGVtfTwvbGk+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyYXdJbmZvU2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuZHJhd0luZm9IZWFkZXJ9PldoYXQgSSB3b27igJl0IGRyYXfigKY8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b250RHJhd0xpc3QubWFwKChpdGVtLCBpKSA9PiA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuZHJhd0luZm9MaXN0SXRlbX0ga2V5PXtpfT57aXRlbX08L2xpPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jb21taXNzaW9uTm90ZXNIZWFkZXJ9PlBsZWFzZSBub3RlOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmNvbW1pc3Npb25Ob3RlTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb21taXNzaW9uTm90ZXMubWFwKChpdGVtLCBpKSA9PiA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWlzc2lvbk5vdGVMaXN0SXRlbX0ga2V5PXtpfT57aXRlbX08L2xpPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0SGVhZGVyfT5Db250YWN0PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0VGV4dH0+Rm9yIGNvbW1pc3Npb25zIGFuZCBxdWVzdGlvbnMsIHBsZWFzZSBjb250YWN0IG1lIG9uIFRlbGVncmFtITwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXsnaHR0cHM6Ly90Lm1lL2hhY29ueSd9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gc3JjPXsnL2ltYWdlcy9sb2dvLXRlbGVncmFtLnBuZyd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudFJvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbW1pc3Npb25UaWVyUHJvcHMge1xyXG4gICAgaGVhZGVyOiBzdHJpbmc7XHJcbiAgICBkZXNjUG9pbnRzPzogc3RyaW5nW107XHJcbiAgICBnYWxsZXJ5Pzogc3RyaW5nW107XHJcbiAgICBnYWxsZXJ5SGVpZ2h0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBDb21taXNzaW9uVGllcjogRnVuY3Rpb25Db21wb25lbnQ8Q29tbWlzc2lvblRpZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgaGVhZGVyLCBkZXNjUG9pbnRzLCBnYWxsZXJ5LCBnYWxsZXJ5SGVpZ2h0IH0gPSBwcm9wcztcclxuICAgIHJldHVybiA8Q29udGVudFJvdyB3aWRlQ29udGVudD17dHJ1ZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21taXNzaW9uVGllckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHtnYWxsZXJ5ICYmIDxJbWFnZUdhbGxlcnkgc3Jjcz17Z2FsbGVyeX0gaGVpZ2h0PXtnYWxsZXJ5SGVpZ2h0fSBwYWRDb3VudD17Nn0gLz59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWlzc2lvblRpZXJJbmZvQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWlzc2lvblRpZXJJbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWlzc2lvblRpZXJIZWFkZXJ9PntoZWFkZXJ9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1pc3Npb25UaWVyRGVzY3JpcHRpb25zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2NQb2ludHMgJiYgZGVzY1BvaW50cy5tYXAoKGRlc2NQb2ludCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5jb21taXNzaW9uVGllckRlc2NyaXB0aW9ufSBrZXk9e2l9PntkZXNjUG9pbnR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250ZW50Um93PjtcclxufTtcclxuXHJcbmNvbnN0IENvbnRlbnRSb3c6IEZ1bmN0aW9uQ29tcG9uZW50PHsgd2lkZUNvbnRlbnQ/OiBib29sZWFuIH0+ID0gKHsgd2lkZUNvbnRlbnQsIGNoaWxkcmVuIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Um93fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNvbnRlbnQsIHdpZGVDb250ZW50ICYmIHN0eWxlcy53aWRlKX0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuLy8gY29uc3QgSW1hZ2VHYWxsZXJ5OiBGdW5jdGlvbkNvbXBvbmVudDx7IHNyY3M6IHN0cmluZ1tdLCBoZWlnaHQ6IHN0cmluZywgcGFkQ291bnQ6IG51bWJlciB9PiA9ICh7IHNyY3MsIGhlaWdodCwgcGFkQ291bnQgfSkgPT4ge1xyXG4vLyAgICAgY29uc3QgaW1hZ2VHYWxsZXJ5UmVmID0gdXNlUmVmKCk7XHJcbi8vICAgICBjb25zdCBbdmlld0luZGV4LCBzZXRWaWV3SW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4vLyAgICAgY29uc3QgW3Nob3dBbmltYXRpb24sIHNldFNob3dBbmltYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuLy8gICAgIGNvbnN0IGltZ0dhbGxlcnlTaXplID0gdXNlQm91bmRpbmdDbGllbnRSZWN0KGltYWdlR2FsbGVyeVJlZik7XHJcbi8vICAgICBjb25zdCBbaW1nV2lkdGhzLCBzZXRJbWdXaWR0aHNdID0gdXNlU3RhdGUobmV3IEFycmF5KHNyY3MubGVuZ3RoKS5maWxsKDApKTtcclxuXHJcbi8vICAgICBjb25zdCBpbWdNYXJnaW4gPSBNYXRoLnJvdW5kKChpbWdHYWxsZXJ5U2l6ZT8uaGVpZ2h0IHx8IDEpICogMC4wNSkgfHwgMTtcclxuXHJcbi8vICAgICBmdW5jdGlvbiBnZXRJbWFnZUluZGV4KGN1clZpZXdJbmRleDogbnVtYmVyKSB7XHJcbi8vICAgICAgICAgY29uc3QgbiA9IHNyY3MubGVuZ3RoO1xyXG4vLyAgICAgICAgIGNvbnN0IGltYWdlSW5kZXggPSAoKGN1clZpZXdJbmRleCAlIG4pICsgbikgJSBuOyAvLyBhY3R1YWwgbW9kIGZ1bmN0aW9uXHJcbi8vICAgICAgICAgcmV0dXJuIGltYWdlSW5kZXg7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZnVuY3Rpb24gZ2V0U3JjKGN1clZpZXdJbmRleDogbnVtYmVyKSB7XHJcbi8vICAgICAgICAgcmV0dXJuIHNyY3NbZ2V0SW1hZ2VJbmRleChjdXJWaWV3SW5kZXgpXTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBmdW5jdGlvbiBnZXRJbWFnZVdpZHRoKGN1clZpZXdJbmRleDogbnVtYmVyKSB7XHJcbi8vICAgICAgICAgcmV0dXJuIGltZ1dpZHRoc1tnZXRJbWFnZUluZGV4KGN1clZpZXdJbmRleCldO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGZ1bmN0aW9uIGdldEltYWdlUG9zaXRpb24odmlld0luZGV4OiBudW1iZXIsIG9mZnNldFBvc2l0aW9uOiBudW1iZXIpOiBzdHJpbmcge1xyXG4vLyAgICAgICAgIGxldCBvZmZzZXQgPSAtZ2V0SW1hZ2VXaWR0aCh2aWV3SW5kZXgpIC8gMjtcclxuLy8gICAgICAgICBpZiAob2Zmc2V0UG9zaXRpb24gPT09IDApIHtcclxuLy8gICAgICAgICB9IGVsc2UgaWYgKG9mZnNldFBvc2l0aW9uIDwgMCkge1xyXG4vLyAgICAgICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0UG9zaXRpb247IGkgPCAwOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgICAgIG9mZnNldCAtPSBnZXRJbWFnZVdpZHRoKHZpZXdJbmRleCArIGkpICsgaW1nTWFyZ2luO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSBlbHNlIGlmIChvZmZzZXRQb3NpdGlvbiA+IDApIHtcclxuLy8gICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvZmZzZXRQb3NpdGlvbjsgaSsrKSB7XHJcbi8vICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gZ2V0SW1hZ2VXaWR0aCh2aWV3SW5kZXggKyBpKSArIGltZ01hcmdpbjtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZVgoJHtvZmZzZXR9cHgpYDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBmdW5jdGlvbiBtYWtlSW5jcmVtZW50Vmlld0luZGV4KG46IG51bWJlcikge1xyXG4vLyAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgIGlmICghc2hvd0FuaW1hdGlvbikge1xyXG4vLyAgICAgICAgICAgICAgICAgc2V0U2hvd0FuaW1hdGlvbih0cnVlKTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBzZXRWaWV3SW5kZXgodmlld0luZGV4ICsgbik7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuLy8gICAgIGNvbnN0IGhhbmRsZUNsaWNrUHJldiA9IG1ha2VJbmNyZW1lbnRWaWV3SW5kZXgoLTEpO1xyXG4vLyAgICAgY29uc3QgaGFuZGxlQ2xpY2tOZXh0ID0gbWFrZUluY3JlbWVudFZpZXdJbmRleCgxKTtcclxuXHJcbi8vICAgICBjb25zdCBnYWxsZXJ5SXRlbUVsZW1zID0gW107XHJcbi8vICAgICBmb3IgKGxldCBpID0gLXBhZENvdW50OyBpIDw9IHBhZENvdW50OyBpKyspIHtcclxuLy8gICAgICAgICBjb25zdCBjdXJWaWV3SW5kZXggPSB2aWV3SW5kZXggKyBpO1xyXG4vLyAgICAgICAgIGNvbnN0IHN0eWxlID0ge1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogYCR7Z2V0SW1hZ2VXaWR0aChjdXJWaWV3SW5kZXgpfXB4YCxcclxuLy8gICAgICAgICAgICAgdHJhbnNmb3JtOiBnZXRJbWFnZVBvc2l0aW9uKHZpZXdJbmRleCwgaSksXHJcbi8vICAgICAgICAgICAgIHpJbmRleDogcGFkQ291bnQgLSBNYXRoLmFicyhpKSxcclxuLy8gICAgICAgICB9IGFzIENTU1Byb3BlcnRpZXM7XHJcbi8vICAgICAgICAgaWYgKGkgIT0gMCkge1xyXG4vLyAgICAgICAgICAgICBzdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoXHJcbi8vICAgICAgICAgICAgIHN0eWxlcy5pbWFnZUdhbGxlcnlJdGVtQ29udGFpbmVyLFxyXG4vLyAgICAgICAgICAgICBpICE9PSAwICYmIHN0eWxlcy5jbGlja2FibGUsXHJcbi8vICAgICAgICAgICAgIHNob3dBbmltYXRpb24gJiYgc3R5bGVzLmFuaW1hdGVkXHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgICAgICBnYWxsZXJ5SXRlbUVsZW1zLnB1c2goXHJcbi8vICAgICAgICAgICAgIDxkaXYga2V5PXtjdXJWaWV3SW5kZXh9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e21ha2VJbmNyZW1lbnRWaWV3SW5kZXgoaSl9PlxyXG4vLyAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUdhbGxlcnlJdGVtfSBzcmM9e2dldFNyYyhjdXJWaWV3SW5kZXgpfSAvPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUdhbGxlcnl9IHJlZj17aW1hZ2VHYWxsZXJ5UmVmfSBzdHlsZT17eyBoZWlnaHQ6IGhlaWdodCB9fT5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUdhbGxlcnlMZWZ0TmF2fSBvbkNsaWNrPXtoYW5kbGVDbGlja1ByZXZ9PlxyXG4vLyAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUdhbGxlcnlMZWZ0QXJyb3d9IHNyYz1cIi9pbWFnZXMvZ2FsbGVyeS1hcnJvdy1sZWZ0LnN2Z1wiIC8+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlR2FsbGVyeVJpZ2h0TmF2fSBvbkNsaWNrPXtoYW5kbGVDbGlja05leHR9PlxyXG4vLyAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUdhbGxlcnlSaWdodEFycm93fSBzcmM9XCIvaW1hZ2VzL2dhbGxlcnktYXJyb3ctcmlnaHQuc3ZnXCIgLz5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VHYWxsZXJ5SXRlbXN9PlxyXG4vLyAgICAgICAgICAgICAgICAge2dhbGxlcnlJdGVtRWxlbXN9XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8SW1hZ2VHYWxsZXJ5UHJldmlldyBzcmNzPXtzcmNzfSBoZWlnaHQ9e2hlaWdodH0gdXBkYXRlSW1hZ2VXaWR0aHM9e3NldEltZ1dpZHRoc30gLz5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgIClcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IEltYWdlR2FsbGVyeVByZXZpZXc6IEZ1bmN0aW9uQ29tcG9uZW50PHsgc3Jjczogc3RyaW5nW10sIGhlaWdodDogc3RyaW5nLCB1cGRhdGVJbWFnZVdpZHRoczogKHdpZHRoQXJyOiBudW1iZXJbXSkgPT4gdm9pZCB9PiA9ICh7IHNyY3MsIGhlaWdodCwgdXBkYXRlSW1hZ2VXaWR0aHMgfSkgPT4ge1xyXG4vLyAgICAgY29uc3QgcHJldmlld0RpdlJlZiA9IHVzZVJlZih1bmRlZmluZWQgYXMgSFRNTERpdkVsZW1lbnQpO1xyXG5cclxuLy8gICAgIGNvbnN0IHByZXZpZXdJZCA9IHVzZVN0YXRlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkpWzBdO1xyXG4vLyAgICAgZnVuY3Rpb24gaGFuZGxlSW1hZ2VXaWR0aENoYW5nZSgpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlJywgcHJldmlld0lkKTtcclxuLy8gICAgICAgICBpZiAoIXByZXZpZXdEaXZSZWYuY3VycmVudCkge1xyXG4vLyAgICAgICAgICAgICByZXR1cm47XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBjb25zdCBwcmV2aWV3RGl2RWxlbSA9IHByZXZpZXdEaXZSZWYuY3VycmVudDtcclxuLy8gICAgICAgICBjb25zdCBpbWdXaWR0aHMgPSBBcnJheS5mcm9tKHByZXZpZXdEaXZFbGVtLmNoaWxkcmVuKS5tYXAoZWxlbSA9PiBlbGVtLmNsaWVudFdpZHRoKTtcclxuLy8gICAgICAgICB1cGRhdGVJbWFnZVdpZHRocyhpbWdXaWR0aHMpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICAgICAgaGFuZGxlSW1hZ2VXaWR0aENoYW5nZSgpO1xyXG4vLyAgICAgfSwgW3NyY3Muam9pbignfCcpXSk7XHJcblxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlR2FsbGVyeVByZXZpZXd9IHJlZj17cHJldmlld0RpdlJlZn0gc3R5bGU9e3sgaGVpZ2h0OiBoZWlnaHQgfX0+XHJcbi8vICAgICAgICAgICAgIHtzcmNzLm1hcCgoc3JjLCBpKSA9PiAoXHJcbi8vICAgICAgICAgICAgICAgICA8aW1nIGtleT17aX0gY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VHYWxsZXJ5UHJldmlld0ltYWdlfSBzcmM9e3NyY30gb25Mb2FkPXtoYW5kbGVJbWFnZVdpZHRoQ2hhbmdlfS8+XHJcbi8vICAgICAgICAgICAgICkpfVxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgKTtcclxuLy8gfSIsImltcG9ydCB7IENvbW1pc3Npb25UaWVyUHJvcHMgfSBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UtY29tbWlzc2lvbi9wYWdlLWNvbW1pc3Npb24nO1xyXG5pbXBvcnQgeyBTaXRlSGVhZFByb3BzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vc2l0ZS1oZWFkJztcclxuXHJcbmV4cG9ydCBjb25zdCBDT01NSVNTSU9OX1BBR0VfSU5GTyA9IHtcclxuICAgIHRpdGxlOiAnQ29tbWlzc2lvbnMgLSBIYWNvbnkgU3R1ZGlvJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnQXJ0IGNvbW1pc3Npb25zIGJ5IEhhY29ueSEgRmluZCBvdXQgbW9yZSBhYm91dCBoaXMgY29tbWlzc2lvbiB0aWVycyBhbmQgcHJpY2VzIGhlcmUnLFxyXG4gICAga2V5d29yZHM6IFsnaGFjb255JywgJ3F1bmRpdW0nLCAnY29jb3NoYXJrJywgJ2hvcm55c2hhcmthdCcsICd5ZXdvbmxlZTE5OTknLCAnb2Rpb3VzYmlyZCcsICdhcnQnLCAnc3R1ZGlvJywgJ2RyYXdpbmcnLCAnY29tbWlzc2lvbiddLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly9oYWNvbnktc3R1ZGlvLmNvbS9jb21taXNzaW9uLycsXHJcbiAgICBpbWFnZToge1xyXG4gICAgICAgIHNyYzogJy9pbWFnZXMvY29tbWlzc2lvbi1wcmV2aWV3LnBuZycsXHJcbiAgICAgICAgdHlwZTogJ2ltYWdlL2pwZWcnLFxyXG4gICAgICAgIHdpZHRoOiAxMjAwLFxyXG4gICAgICAgIGhlaWdodDogNjMwLFxyXG4gICAgfSxcclxuICAgIHR3aXR0ZXJJbWFnZVNyYzogJy9pbWFnZXMvY29tbWlzc2lvbi1wcmV2aWV3LnBuZycsXHJcbn0gYXMgU2l0ZUhlYWRQcm9wcztcclxuXHJcbmV4cG9ydCBjb25zdCBDT01NSVNTSU9OX1RJRVJTID0gW1xyXG4gICAge1xyXG4gICAgICAgIGhlYWRlcjogJ0Z1bGwgQm9keSB8IDEwMCBVU0QnLFxyXG4gICAgICAgIGRlc2NQb2ludHM6IFtcclxuICAgICAgICAgICAgJysgODAgVVNEIHBlciBhZGRpdGlvbmFsIGNoYXJhY3RlcicsXHJcbiAgICAgICAgICAgICcrIDEwIFVTRCBmb3IgYmFja2dyb3VuZCwgY29tcGxpY2F0ZWQgY2hhcmFjdGVyIGRlc2lnbiwgd2luZ3MsIGV0YycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTAyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTA1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDYucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wNy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTA4LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDkucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTExLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTE0LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTUucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xNi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTE3LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTgucG5nJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnlIZWlnaHQ6ICdtaW4oNTAwcHgsIDkwdmgpJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGVhZGVyOiAnU2VxdWVuY2UgfCAyODAgVVNEJyxcclxuICAgICAgICBkZXNjUG9pbnRzOiBbXHJcbiAgICAgICAgICAgICc0LTUgc2NlbmVzIGluIG9uZSBwYWdlJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ2FsbGVyeTogW1xyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wMi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wNS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wNi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wNy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wOC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wOS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0xMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0xMS5wbmcnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ2FsbGVyeUhlaWdodDogJ21pbig1MDBweCwgOTB2aCknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoZWFkZXI6ICdTdGlja2VyIHwgMjV+MzUgVVNEJyxcclxuICAgICAgICBkZXNjUG9pbnRzOiBbXHJcbiAgICAgICAgICAgICdGbGF0LWNvbG91cmVkIHN0aWNrZXJzIGZvciBUZWxlZ3JhbScsXHJcbiAgICAgICAgICAgICdQcmljZSBpcyBwZXIgc3RpY2tlciwgbWF4aW11bSBvZiA2IHN0aWNrZXJzJyxcclxuICAgICAgICAgICAgJysgNS0xMiBVU0QgZm9yIHNoaW5lL3NoYWRpbmcnLFxyXG4gICAgICAgICAgICAnKyA1LTEwIFVTRCBwZXIgYWRkaXRpb25hbCBjaGFyYWN0ZXInLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ2FsbGVyeTogW1xyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTAwLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wMi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTAzLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDQucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wNS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTA2LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDcucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wOC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTA5LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTEyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTE1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTYucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xNy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTE4LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTkucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTIxLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTI0LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjUucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yNi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTI3LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjgucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yOS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTMwLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMzEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0zMi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTMzLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMzQucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0zNS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTM2LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMzcucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0zOC5wbmcnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ2FsbGVyeUhlaWdodDogJzIwMHB4JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGVhZGVyOiAnQ29taWMgfCAxNTArIFVTRCcsXHJcbiAgICAgICAgZGVzY1BvaW50czogW1xyXG4gICAgICAgICAgICAnUHJpY2UgZGVwZW5kcyBvbiBzdG9yeSwgY2hhcmFjdGVycywgYW5kIGNvbXBsZXhpdHknLFxyXG4gICAgICAgICAgICAnRWFjaCBjb21pYyBwYWdlIGhhcyAzLTUgcGFuZWxzJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ2FsbGVyeTogW1xyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NvbWljLTAwLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY29taWMtMDEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jb21pYy0wMi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NvbWljLTAzLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY29taWMtMDQucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jb21pYy0wNS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NvbWljLTA2LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY29taWMtMDcucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jb21pYy0wOC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NvbWljLTA5LnBuZycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5SGVpZ2h0OiAnbWluKDUwMHB4LDkwdmgpJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGVhZGVyOiAnQ2hhcmFjdGVyIFNoZWV0IHwgMTgwKyBVU0QnLFxyXG4gICAgICAgIGRlc2NQb2ludHM6IFtcclxuICAgICAgICAgICAgJ0Zyb250IGFuZCBiYWNrIHZpZXcnLFxyXG4gICAgICAgICAgICAnKyA1MCBVU0QgZm9yIG5ldyBjaGFyYWN0ZXIgZGVzaWducydcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jaGFycmVmLTAwLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY2hhcnJlZi0wMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NoYXJyZWYtMDIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jaGFycmVmLTAzLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY2hhcnJlZi0wNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NoYXJyZWYtMDUucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jaGFycmVmLTA2LnBuZycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5SGVpZ2h0OiAnbWluKDUwMHB4LDkwdmgpJyxcclxuICAgIH0sXHJcbl0gYXMgQ29tbWlzc2lvblRpZXJQcm9wc1tdO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpbGxEcmF3TGlzdCA9IFtcclxuICAgICdNYWxlJyxcclxuICAgICdGdXJyeScsXHJcbiAgICAnTlNGVycsXHJcbiAgICAnR29vIFRyYW5zZm9ybWF0aW9uJyxcclxuICAgICdMYXRleCcsXHJcbiAgICAnUG9vbHRveScsXHJcbiAgICAnQm9uZGFnZScsXHJcbiAgICAnV2F0ZXJzcG9ydHMnLFxyXG4gICAgJ0ZlcmFscycsXHJcbiAgICAnTWVjaGEnLFxyXG4gICAgJ0luc2VjdHMnLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdvbnREcmF3TGlzdCA9IFtcclxuICAgICdGZW1hbGUnLFxyXG4gICAgJ0h1bWFuJyxcclxuICAgICdVbmRlcmFnZWQgY2hhcmFjdGVycycsXHJcbiAgICAnQmxvb2QnLFxyXG4gICAgJ0ZhbnRhc3kgQXJtb3VycycsXHJcbiAgICAnUHJvcGFnYW5kYScsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWlzc2lvbk5vdGVzID0gW1xyXG4gICAgJ1BheW1lbnRzIG1hZGUgbXVzdCBiZSBpbiBVU0Qgb24gUGF5cGFsJyxcclxuICAgICdDb21taXNzaW9ucyBhcmUgcG9zdGVkIHRvIFBhdHJlb24gZmlyc3QuIFBsZWFzZSB3YWl0IGZvciAxIG1vbnRoIGJlZm9yZSB1cGxvYWRpbmcgdGhlIGNvbW1pc3Npb24nLFxyXG4gICAgJ0NvbW1pc3Npb25zIGFyZSB0byBiZSB1c2VkIGZvciBub24tY29tbWVyY2lhbCBwdXJwb3NlcyBvbmx5JyxcclxuXTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaW1hZ2UtZ2FsbGVyeV9pbWFnZUdhbGxlcnlfXzFKZUFpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUxlZnROYXZfXzI3UXdLLFxcbi5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeVJpZ2h0TmF2X18zRmhXMSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLyogc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAvKiBTYWZhcmkgKi9cXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC8qIEtvbnF1ZXJvciBIVE1MICovXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLyogRmlyZWZveCAqL1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xcbiAgd2lkdGg6IDJyZW07XFxufVxcbi5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUxlZnROYXZfXzI3UXdLOmhvdmVyIC5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUxlZnRBcnJvd19fZ2lvVnYsXFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5TGVmdE5hdl9fMjdRd0s6aG92ZXIgLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5UmlnaHRBcnJvd19fMWhYMGwsXFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5UmlnaHROYXZfXzNGaFcxOmhvdmVyIC5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUxlZnRBcnJvd19fZ2lvVnYsXFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5UmlnaHROYXZfXzNGaFcxOmhvdmVyIC5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeVJpZ2h0QXJyb3dfXzFoWDBsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUxlZnROYXZfXzI3UXdLOmhvdmVyLFxcbi5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeVJpZ2h0TmF2X18zRmhXMTpob3ZlciB7XFxuICB3aWR0aDogMy4ycmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUxlZnROYXZfXzI3UXdLLFxcbi5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeVJpZ2h0TmF2X18zRmhXMSB7XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgfVxcbiAgLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5TGVmdE5hdl9fMjdRd0s6aG92ZXIsXFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5UmlnaHROYXZfXzNGaFcxOmhvdmVyIHtcXG4gICAgd2lkdGg6IDMuNXJlbTtcXG4gIH1cXG59XFxuXFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5TGVmdE5hdl9fMjdRd0sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20od2hpdGUpLCB0byh0cmFuc3BhcmVudCkpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgd2hpdGUsIHRyYW5zcGFyZW50KTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgd2hpdGUsIHRyYW5zcGFyZW50KTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuaW1hZ2UtZ2FsbGVyeV9pbWFnZUdhbGxlcnlMZWZ0TmF2X18yN1F3SyB7XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgfVxcbn1cXG5cXG4uaW1hZ2UtZ2FsbGVyeV9pbWFnZUdhbGxlcnlSaWdodE5hdl9fM0ZoVzEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIHJpZ2h0IHRvcCwgbGVmdCB0b3AsIGZyb20od2hpdGUpLCB0byh0cmFuc3BhcmVudCkpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQsIHdoaXRlLCB0cmFuc3BhcmVudCk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgd2hpdGUsIHRyYW5zcGFyZW50KTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuaW1hZ2UtZ2FsbGVyeV9pbWFnZUdhbGxlcnlSaWdodE5hdl9fM0ZoVzEge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICB9XFxufVxcblxcbi5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUxlZnRBcnJvd19fZ2lvVnYsXFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5UmlnaHRBcnJvd19fMWhYMGwge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XFxuICB6LWluZGV4OiAyO1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUxlZnRBcnJvd19fZ2lvVnYsXFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5UmlnaHRBcnJvd19fMWhYMGwge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICB9XFxufVxcblxcbi5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUl0ZW1zX18xMFhPTCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5SXRlbUNvbnRhaW5lcl9fMk1ZMXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaW1hZ2UtZ2FsbGVyeV9pbWFnZUdhbGxlcnlJdGVtQ29udGFpbmVyX18yTVkxdi5pbWFnZS1nYWxsZXJ5X2FuaW1hdGVkX18zT2JlUCB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNXM7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjVzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cywgLXdlYmtpdC10cmFuc2Zvcm0gMC41cztcXG59XFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5SXRlbUNvbnRhaW5lcl9fMk1ZMXYuaW1hZ2UtZ2FsbGVyeV9jbGlja2FibGVfX05USXJIIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5SXRlbV9fMzdKaC0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xcbn1cXG4uaW1hZ2UtZ2FsbGVyeV9pbWFnZUdhbGxlcnlJdGVtX18zN0poLTpob3ZlciB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5pbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeVByZXZpZXdfXzNxVXR4IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDMwMHZoO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uaW1hZ2UtZ2FsbGVyeV9pbWFnZUdhbGxlcnlQcmV2aWV3SW1hZ2VfXzJ5ZjVKIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2ltYWdlLWdhbGxlcnkubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBRUEsZ0JBQUE7QUFISjs7QUFNQTs7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBRUEsOEJBQUE7RUFBQSxzQkFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUFtQixrQ0FBQTtFQUNuQix5QkFBQTtFQUEyQixXQUFBO0VBQzNCLHdCQUFBO0VBQTBCLG1CQUFBO0VBQzFCLHNCQUFBO0VBQXdCLFlBQUE7RUFDeEIscUJBQUE7RUFBdUIsMkJBQUE7RUFTdkIsV0FBQTtBQVRKO0FBR1E7Ozs7RUFFSSw2QkFBQTtVQUFBLHFCQUFBO0FBQ1o7QUFJSTs7RUFDSSxhQUFBO0FBRFI7QUFJSTtFQTVCSjs7SUE2QlEsV0FBQTtFQUFOO0VBQ007O0lBQ0ksYUFBQTtFQUVWO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUVBLG9CQUFBO0VBS0EsMkJBQUE7RUFFQSw2RkFBQTtFQUFBLG1FQUFBO0VBQUEsK0RBQUE7QUFMSjtBQURJO0VBUEo7SUFRUSxvQkFBQTtFQUlOO0FBQ0Y7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUVBLHFCQUFBO0VBS0EseUJBQUE7RUFFQSw2RkFBQTtFQUFBLG9FQUFBO0VBQUEsOERBQUE7QUFOSjtBQUFJO0VBUEo7SUFRUSxxQkFBQTtFQUdOO0FBQ0Y7O0FBSUE7O0VBR0ksMENBQUE7RUFBQSxrQ0FBQTtFQUFBLDBCQUFBO0VBQUEsa0RBQUE7RUFFQSxVQUFBO0VBRUEsWUFBQTtBQUpKO0FBS0k7RUFSSjs7SUFTUSxZQUFBO0VBRE47QUFDRjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQURKO0FBR0k7RUFDSSwwQ0FBQTtFQUFBLGtDQUFBO0VBQUEsMEJBQUE7RUFBQSxrREFBQTtBQURSO0FBSUk7RUFDSSxlQUFBO0FBRlI7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsOEJBQUE7RUFFQSxtREFBQTtFQUFBLDJDQUFBO0VBQUEsbUNBQUE7RUFBQSxvRUFBQTtBQUxKO0FBT0k7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0FBTFI7O0FBU0E7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFFQSxVQUFBO0VBQ0Esb0JBQUE7QUFQSjs7QUFVQTtFQUNJLFlBQUE7QUFQSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MnIGFzIHZhcmlhYmxlcztcXHJcXG5cXHJcXG4uaW1hZ2VHYWxsZXJ5IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuXFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5pbWFnZUdhbGxlcnlMZWZ0TmF2LFxcclxcbi5pbWFnZUdhbGxlcnlSaWdodE5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHotaW5kZXg6IDEwMDAwO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xcclxcblxcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBzdXBwb3J0ZWQgYnkgQ2hyb21lIGFuZCBPcGVyYSAqL1xcclxcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXHJcXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xcclxcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXFxyXFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIC5pbWFnZUdhbGxlcnlMZWZ0QXJyb3csXFxyXFxuICAgICAgICAuaW1hZ2VHYWxsZXJ5UmlnaHRBcnJvdyB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzLjJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IHZhcmlhYmxlcy4kZGVza3RvcC1taW4td2lkdGgpIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2VHYWxsZXJ5TGVmdE5hdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogdmFyaWFibGVzLiRkZXNrdG9wLW1pbi13aWR0aCkge1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlLCB0cmFuc3BhcmVudCk7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZUdhbGxlcnlSaWdodE5hdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcblxcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiB2YXJpYWJsZXMuJGRlc2t0b3AtbWluLXdpZHRoKSB7XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHdoaXRlLCB0cmFuc3BhcmVudCk7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZUdhbGxlcnlMZWZ0QXJyb3csXFxyXFxuLmltYWdlR2FsbGVyeVJpZ2h0QXJyb3cge1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXHJcXG5cXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogdmFyaWFibGVzLiRkZXNrdG9wLW1pbi13aWR0aCkge1xcclxcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5pbWFnZUdhbGxlcnlJdGVtcyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZUdhbGxlcnlJdGVtQ29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgJi5hbmltYXRlZCB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgJi5jbGlja2FibGUge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5pbWFnZUdhbGxlcnlJdGVtIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2VHYWxsZXJ5UHJldmlldyB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAzMDB2aDtcXHJcXG5cXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZUdhbGxlcnlQcmV2aWV3SW1hZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImltYWdlR2FsbGVyeVwiOiBcImltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5X18xSmVBaVwiLFxuXHRcImltYWdlR2FsbGVyeUxlZnROYXZcIjogXCJpbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUxlZnROYXZfXzI3UXdLXCIsXG5cdFwiaW1hZ2VHYWxsZXJ5UmlnaHROYXZcIjogXCJpbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeVJpZ2h0TmF2X18zRmhXMVwiLFxuXHRcImltYWdlR2FsbGVyeUxlZnRBcnJvd1wiOiBcImltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5TGVmdEFycm93X19naW9WdlwiLFxuXHRcImltYWdlR2FsbGVyeVJpZ2h0QXJyb3dcIjogXCJpbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeVJpZ2h0QXJyb3dfXzFoWDBsXCIsXG5cdFwiaW1hZ2VHYWxsZXJ5SXRlbXNcIjogXCJpbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUl0ZW1zX18xMFhPTFwiLFxuXHRcImltYWdlR2FsbGVyeUl0ZW1Db250YWluZXJcIjogXCJpbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUl0ZW1Db250YWluZXJfXzJNWTF2XCIsXG5cdFwiYW5pbWF0ZWRcIjogXCJpbWFnZS1nYWxsZXJ5X2FuaW1hdGVkX18zT2JlUFwiLFxuXHRcImNsaWNrYWJsZVwiOiBcImltYWdlLWdhbGxlcnlfY2xpY2thYmxlX19OVElySFwiLFxuXHRcImltYWdlR2FsbGVyeUl0ZW1cIjogXCJpbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeUl0ZW1fXzM3SmgtXCIsXG5cdFwiaW1hZ2VHYWxsZXJ5UHJldmlld1wiOiBcImltYWdlLWdhbGxlcnlfaW1hZ2VHYWxsZXJ5UHJldmlld19fM3FVdHhcIixcblx0XCJpbWFnZUdhbGxlcnlQcmV2aWV3SW1hZ2VcIjogXCJpbWFnZS1nYWxsZXJ5X2ltYWdlR2FsbGVyeVByZXZpZXdJbWFnZV9fMnlmNUpcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9