_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx!./":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.tsx */ "./pages/_app.tsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=`${id} ${count}`;idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:undefined;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(key=>{style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?`@media ${obj.media} {${obj.css}}`:obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+=`\n/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))} */`;}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=()=>{removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=(list,options)=>{options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


var normalizePathTrailingSlash =  true ? function (path) {
  if (/\.[^/]+\/?$/.test(path)) {
    return removePathTrailingSlash(path);
  } else if (path.endsWith('/')) {
    return path;
  } else {
    return path + '/';
  }
} : undefined;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports["default"] = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


var MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  var entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  var resolver;
  var prom = new Promise(function (resolve) {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(function (value) {
    return resolver(value), value;
  }) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

var canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise(function (res, rej) {
    if (document.querySelector("link[rel=\"prefetch\"][href^=\"".concat(href, "\"]"))) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = "prefetch";
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

var ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise(function (resolve, reject) {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = function () {
      return reject(markAssetError(new Error("Failed to load script: ".concat(src))));
    }; // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise(function (resolve, reject) {
    var cancelled = false;
    p.then(function (r) {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    })["catch"](reject);
    (0, _requestIdleCallback.requestIdleCallback)(function () {
      return setTimeout(function () {
        if (!cancelled) {
          reject(err);
        }
      }, ms);
    });
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  var onBuildManifest = new Promise(function (resolve) {
    // Mandatory because this is not concurrent safe:
    var cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = function () {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute["default"])(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(function (manifest) {
    if (!(route in manifest)) {
      throw markAssetError(new Error("Failed to lookup route: ".concat(route)));
    }

    var allFiles = manifest[route].map(function (entry) {
      return assetPrefix + '/_next/' + encodeURI(entry);
    });
    return {
      scripts: allFiles.filter(function (v) {
        return v.endsWith('.js');
      }),
      css: allFiles.filter(function (v) {
        return v.endsWith('.css');
      })
    };
  });
}

function createRouteLoader(assetPrefix) {
  var entrypoints = new Map();
  var loadedScripts = new Map();
  var styleSheets = new Map();
  var routes = new Map();

  function maybeExecuteScript(src) {
    var prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector("script[src^=\"".concat(src, "\"]"))) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    var prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(function (res) {
      if (!res.ok) {
        throw new Error("Failed to load stylesheet: ".concat(href));
      }

      return res.text().then(function (text) {
        return {
          href: href,
          content: text
        };
      });
    })["catch"](function (err) {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint: function whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },
    onEntrypoint: function onEntrypoint(route, execute) {
      Promise.resolve(execute).then(function (fn) {
        return fn();
      }).then(function (exports) {
        return {
          component: exports && exports["default"] || exports,
          exports: exports
        };
      }, function (err) {
        return {
          error: err
        };
      }).then(function (input) {
        var old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },
    loadRoute: function loadRoute(route) {
      var _this = this;

      return withFuture(route, routes, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var _yield$getFilesForRou, scripts, css, _yield$Promise$all, _yield$Promise$all2, styles, entrypoint, res;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return getFilesForRoute(assetPrefix, route);

              case 3:
                _yield$getFilesForRou = _context.sent;
                scripts = _yield$getFilesForRou.scripts;
                css = _yield$getFilesForRou.css;
                _context.next = 8;
                return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);

              case 8:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                styles = _yield$Promise$all2[1];
                _context.next = 13;
                return resolvePromiseWithTimeout(_this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error("Route did not complete loading: ".concat(route))));

              case 13:
                entrypoint = _context.sent;
                res = Object.assign({
                  styles: styles
                }, entrypoint);
                return _context.abrupt("return", 'error' in entrypoint ? entrypoint : res);

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", {
                  error: _context.t0
                });

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 18]]);
      })));
    },
    prefetch: function prefetch(route) {
      var _this2 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(function (output) {
        return Promise.all(canPrefetch ? output.scripts.map(function (script) {
          return prefetchViaDom(script, 'script');
        }) : []);
      }).then(function () {
        (0, _requestIdleCallback.requestIdleCallback)(function () {
          return _this2.loadRoute(route);
        });
      })["catch"]( // swallow prefetch errors
      function () {});
    }
  };
}

var _default = createRouteLoader;
exports["default"] = _default;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _construct = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

var _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  _s();

  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


_s(useRouter, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(".concat(name, ")");
  }

  return WithRouterWrapper;
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************!*\
  !*** (webpack)/css-loader/api.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/global.scss":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./styles/global.scss ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n  font-family: \"Cinderela\";\n  src: url(/fonts/cinderela.woff);\n}\n@font-face {\n  font-family: \"Russel\";\n  src: url(/fonts/russell.otf);\n}", "",{"version":3,"sources":["webpack://global.scss"],"names":[],"mappings":"AAKA;EACI,wBAAA;EACA,+BAAA;AADJ;AAIA;EACI,qBAAA;EACA,4BAAA;AAFJ","sourcesContent":["// @import url('https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;0,700;1,400;1,700&display=swap');\r\n\r\n@font-face {\r\n    font-family: 'Cinderela';\r\n    src: url(/fonts/cinderela.woff);\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Russel';\r\n    src: url(/fonts/russell.otf);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/normalize.scss":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./styles/normalize.scss ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0-modified | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n  outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\ninput[type=search] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n[hidden] {\n  display: none;\n}\n\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-size: 100%;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\na:focus {\n  outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\nimg {\n  border: 0;\n  /* 1 */\n  -ms-interpolation-mode: bicubic;\n  /* 2 */\n}\n\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\nfigure {\n  margin: 0;\n}\n\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\nform {\n  margin: 0;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  white-space: normal;\n  /* 2 */\n  *margin-left: -7px;\n  /* 3 */\n}\n\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  vertical-align: baseline;\n  /* 3 */\n  *vertical-align: middle;\n  /* 3 */\n}\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\nbutton,\ninput {\n  line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n  *overflow: visible;\n  /* 4 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\ninput[type=checkbox],\ninput[type=radio] {\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n  *height: 13px;\n  /* 3 */\n  *width: 13px;\n  /* 3 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */\n}\n\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #222;\n}\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\nimg {\n  vertical-align: middle;\n}\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n  /* no underline */\n}\n\n/**\n * Make all elements size by border\n */\nhtml {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}", "",{"version":3,"sources":["webpack://normalize.scss","webpack://styles/normalize.scss"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0-modified | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n    margin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\n/* make sure to set some focus styles for accessibility */\r\n:focus {\r\n    outline: 0;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\n\r\nbody {\r\n\tline-height: 1;\r\n}\r\n\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\n\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration,\r\ninput[type=search]::-webkit-search-results-button,\r\ninput[type=search]::-webkit-search-results-decoration {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n}\r\n\r\ninput[type=search] {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    -webkit-box-sizing: content-box;\r\n    -moz-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n}\r\n\r\ntextarea {\r\n    overflow: auto;\r\n    vertical-align: top;\r\n    resize: vertical;\r\n}\r\n\r\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nvideo {\r\n    display: inline-block;\r\n    *display: inline;\r\n    *zoom: 1;\r\n    max-width: 100%;\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\r\n\r\n[hidden] {\r\n    display: none;\r\n}\r\n\r\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n    font-size: 100%; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n    -ms-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\r\n\r\na:focus {\r\n    outline: thin dotted;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n    outline: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\r\n\r\nimg {\r\n    border: 0; /* 1 */\r\n    -ms-interpolation-mode: bicubic; /* 2 */\r\n}\r\n\r\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\r\n\r\nfigure {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\r\n\r\nform {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n    border: 1px solid #c0c0c0;\r\n    margin: 0 2px;\r\n    padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\r\n\r\nlegend {\r\n    border: 0; /* 1 */\r\n    padding: 0;\r\n    white-space: normal; /* 2 */\r\n    *margin-left: -7px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\r\n\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    font-size: 100%; /* 1 */\r\n    margin: 0; /* 2 */\r\n    vertical-align: baseline; /* 3 */\r\n    *vertical-align: middle; /* 3 */\r\n}\r\n\r\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\nbutton,\r\ninput {\r\n    line-height: normal;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\r\n\r\nbutton,\r\nselect {\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n    -webkit-appearance: button; /* 2 */\r\n    cursor: pointer; /* 3 */\r\n    *overflow: visible;  /* 4 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n    cursor: default;\r\n}\r\n\r\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n    *height: 13px; /* 3 */\r\n    *width: 13px; /* 3 */\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    -moz-box-sizing: content-box;\r\n    -webkit-box-sizing: content-box; /* 2 */\r\n    box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\r\n\r\ntextarea {\r\n    overflow: auto; /* 1 */\r\n    vertical-align: top; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\nhtml,\r\nbutton,\r\ninput,\r\nselect,\r\ntextarea {\r\n    color: #222;\r\n}\r\n\r\n\r\n::-moz-selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\n::selection {\r\n    background: #b3d4fc;\r\n    text-shadow: none;\r\n}\r\n\r\nimg {\r\n    vertical-align: middle;\r\n}\r\n\r\nfieldset {\r\n    border: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ntextarea {\r\n    resize: vertical;\r\n}\r\n\r\n.chromeframe {\r\n    margin: 0.2em 0;\r\n    background: #ccc;\r\n    color: #000;\r\n    padding: 0.2em 0;\r\n}\r\n\r\na {\r\n    color: inherit;\r\n    text-decoration: none; /* no underline */\r\n}\r\n\r\n/**\r\n * Make all elements size by border\r\n */\r\n\r\nhtml {\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n*, *:before, *:after {\r\n    -webkit-box-sizing: inherit;\r\n    -moz-box-sizing: inherit;\r\n    box-sizing: inherit;\r\n}","/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0-modified | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n  outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\ninput[type=search] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n[hidden] {\n  display: none;\n}\n\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-size: 100%;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\na:focus {\n  outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\nimg {\n  border: 0;\n  /* 1 */\n  -ms-interpolation-mode: bicubic;\n  /* 2 */\n}\n\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\nfigure {\n  margin: 0;\n}\n\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\nform {\n  margin: 0;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  white-space: normal;\n  /* 2 */\n  *margin-left: -7px;\n  /* 3 */\n}\n\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  vertical-align: baseline;\n  /* 3 */\n  *vertical-align: middle;\n  /* 3 */\n}\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\nbutton,\ninput {\n  line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n  *overflow: visible;\n  /* 4 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n  *height: 13px;\n  /* 3 */\n  *width: 13px;\n  /* 3 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */\n}\n\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #222;\n}\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\nimg {\n  vertical-align: middle;\n}\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n  /* no underline */\n}\n\n/**\n * Make all elements size by border\n */\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/webpack/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 931:
/***/ (function(module) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(931);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
/*!***********************************!*\
  !*** (webpack)/webpack/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 880:
/***/ (function(module) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(880);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  var detectedLocale; // first item will be empty string from splitting at first char

  var pathnameParts = pathname.split('/');
  (locales || []).some(function (locale) {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname: pathname,
    detectedLocale: detectedLocale
  };
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.RouterContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var RouterContext = /*#__PURE__*/_react["default"].createContext(null);

exports.RouterContext = RouterContext;

if (true) {
  RouterContext.displayName = 'RouterContext';
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports["default"] = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


var detectDomainLocale;

if (false) {}

var basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : "".concat(prefix).concat(pathNoQueryHash(path) === '/' ? path.substring(1) : path) : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) { var detectedDomain; }

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  var queryIndex = path.indexOf('?');
  var hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = "/".concat(path);
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    var locationOrigin = (0, _utils.getLocationOrigin)();
    var resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  var interpolatedRoute = '';
  var dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  var dynamicGroups = dynamicRegex.groups;
  var dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  var params = Object.keys(dynamicGroups);

  if (!params.every(function (param) {
    var value = dynamicMatches[param] || '';
    var _dynamicGroups$param = dynamicGroups[param],
        repeat = _dynamicGroups$param.repeat,
        optional = _dynamicGroups$param.optional; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    var replaced = "[".concat(repeat ? '...' : '').concat(param, "]");

    if (optional) {
      replaced = "".concat(!value ? '/' : '', "[").concat(replaced, "]");
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    function (segment) {
      return encodeURIComponent(segment);
    }).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params: params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  var filteredQuery = {};
  Object.keys(query).forEach(function (key) {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  var base = new URL(currentPath, 'http://n');
  var urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    var finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    var interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      var query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);

      var _interpolateAs = interpolateAs(finalUrl.pathname, finalUrl.pathname, query),
          result = _interpolateAs.result,
          params = _interpolateAs.params;

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    var resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  var origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  var _resolveHref = resolveHref(router.pathname, url, true),
      _resolveHref2 = _slicedToArray(_resolveHref, 2),
      resolvedHref = _resolveHref2[0],
      resolvedAs = _resolveHref2[1];

  var origin = (0, _utils.getLocationOrigin)();
  var hrefHadOrigin = resolvedHref.startsWith(origin);
  var asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  var preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  var preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  var cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(function (page) {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

var manualScrollRestoration =  false && false;
var SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(function (res) {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(function (data) {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error("Failed to load static props");
        });
      }

      throw new Error("Failed to load static props");
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1)["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  function Router(_pathname, _query, _as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback,
        locale = _ref.locale,
        locales = _ref.locales,
        defaultLocale = _ref.defaultLocale,
        domainLocales = _ref.domainLocales,
        isPreview = _ref.isPreview;

    _classCallCheck(this, Router);

    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = function (e) {
      var state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname2 = _this.pathname,
            query = _this.query;

        _this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(_pathname2),
          query: query
        }), (0, _utils.getURL)());

        return;
      }

      if (!state.__N) {
        return;
      }

      var forcedScroll;
      var url = state.url,
          as = state.as,
          options = state.options,
          idx = state.idx;

      if (false) { var v; }

      _this._idx = idx;

      var _ref2 = (0, _parseRelativeUrl.parseRelativeUrl)(url),
          pathname = _ref2.pathname; // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (_this.isSsr && as === _this.asPath && pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(state)) {
        return;
      }

      _this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && _this._shallow,
        locale: options.locale || _this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        initial: true,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    var autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (true) {
      // make sure "as" doesn't start with double slashes or else it can
      // throw an error as it's considered invalid
      if (_as.substr(0, 2) !== '//') {
        // in order for `e.state` to work on the `onpopstate` event
        // we have to register the initial route upon initialization
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(_pathname),
          query: _query
        }), (0, _utils.getURL)(), {
          locale: locale
        });
      }

      window.addEventListener('popstate', this.onPopState); // enable custom scroll restoration handling when available
      // otherwise fallback to browser's default handling

      if (false) {}
    }
  }

  _createClass(Router, [{
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
    * Go back in history
    */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "push",
    value: function push(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (false) {}

      ;

      var _prepareUrlAs = prepareUrlAs(this, url, as);

      url = _prepareUrlAs.url;
      as = _prepareUrlAs.as;
      return this.change('pushState', url, as, options);
    }
    /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "replace",
    value: function replace(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      ;

      var _prepareUrlAs2 = prepareUrlAs(this, url, as);

      url = _prepareUrlAs2.url;
      as = _prepareUrlAs2.as;
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function () {
      var _change = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(method, url, as, options, forcedScroll) {
        var _options$scroll, localeChange, parsedAs, localePathResult, didNavigate, _this$locales, detectedDomain, asNoBasePath, _options$shallow, shallow, routeProps, cleanedAs, parsed, pathname, query, pages, rewrites, _yield, resolvedAs, rewritesResult, route, _parsedAs, asPathname, routeRegex, routeMatch, shouldInterpolate, interpolatedAs, missingParams, _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, routeInfo, _routeInfo, error, props, __N_SSG, __N_SSP, destination, parsedHref, _prepareUrlAs3, newUrl, newAs, notFoundRoute, appComp, isValidShallowRoute;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isLocalURL(url)) {
                  _context.next = 3;
                  break;
                }

                window.location.href = url;
                return _context.abrupt("return", false);

              case 3:
                // for static pages with query params in the URL we delay
                // marking the router ready until after the query is updated
                if (options._h) {
                  this.isReady = true;
                } // Default to scroll reset behavior unless explicitly specified to be
                // `false`! This makes the behavior between using `Router#push` and a
                // `<Link />` consistent.


                options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
                localeChange = options.locale !== this.locale;

                if (true) {
                  _context.next = 18;
                  break;
                }

                this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

                if (typeof options.locale === 'undefined') {
                  options.locale = this.locale;
                }

                parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(hasBasePath(as) ? delBasePath(as) : as);
                localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);

                if (localePathResult.detectedLocale) {
                  this.locale = localePathResult.detectedLocale;
                  parsedAs.pathname = addBasePath(parsedAs.pathname);
                  as = (0, _utils.formatWithValidation)(parsedAs);
                  url = addBasePath((0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
                }

                didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                detectedDomain = detectDomainLocale(this.domainLocales, undefined, this.locale); // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                if (!didNavigate) {
                  _context.next = 18;
                  break;
                }

                return _context.abrupt("return", new Promise(function () {}));

              case 18:
                if (!options._h) {
                  this.isSsr = false;
                } // marking route changes as a navigation start entry


                if (_utils.ST) {
                  performance.mark('routeChange');
                }

                _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow;
                routeProps = {
                  shallow: shallow
                };

                if (this._inFlightRoute) {
                  this.abortComponentLoad(this._inFlightRoute, routeProps);
                }

                as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
                cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
                this._inFlightRoute = as; // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.
                // WARNING: `_h` is an internal option for handing Next.js client-side
                // hydration. Your app should _never_ use this property. It may change at
                // any time without notice.

                if (!(!options._h && this.onlyAHashChange(cleanedAs))) {
                  _context.next = 34;
                  break;
                }

                this.asPath = cleanedAs;
                Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

                this.changeState(method, url, as, options);
                this.scrollToHash(cleanedAs);
                this.notify(this.components[this.route], null);
                Router.events.emit('hashChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 34:
                parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
                pathname = parsed.pathname, query = parsed.query; // The build manifest needs to be loaded before auto-static dynamic pages
                // get their query parameters to allow ensuring they can be parsed properly
                // when rewritten to

                _context.prev = 36;
                _context.next = 39;
                return this.pageLoader.getPageList();

              case 39:
                pages = _context.sent;
                _context.next = 42;
                return (0, _routeLoader.getClientBuildManifest)();

              case 42:
                _yield = _context.sent;
                rewrites = _yield.__rewrites;
                _context.next = 50;
                break;

              case 46:
                _context.prev = 46;
                _context.t0 = _context["catch"](36);
                // If we fail to resolve the page list or client-build manifest, we must
                // do a server-side transition:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 50:
                // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitialProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)
                // We should compare the new asPath to the current asPath, not the url
                if (!this.urlIsNew(cleanedAs) && !localeChange) {
                  method = 'replaceState';
                } // we need to resolve the as value using rewrites for dynamic SSG
                // pages to allow building the data URL correctly


                resolvedAs = as; // url and as should always be prefixed with basePath by this
                // point by either next/link or router.push/replace so strip the
                // basePath from the pathname to match the pages dir 1-to-1

                pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

                if (pathname !== '/_error') {
                  if (false) {} else {
                    parsed.pathname = resolveDynamicRoute(pathname, pages);

                    if (parsed.pathname !== pathname) {
                      pathname = parsed.pathname;
                      url = (0, _utils.formatWithValidation)(parsed);
                    }
                  }
                }

                route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

                if (isLocalURL(as)) {
                  _context.next = 60;
                  break;
                }

                if (false) {}

                throw new Error("Invalid href: \"".concat(url, "\" and as: \"").concat(as, "\", received relative href and external as") + "\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as");

              case 58:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 60:
                resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

                if (!(0, _isDynamic.isDynamicRoute)(route)) {
                  _context.next = 76;
                  break;
                }

                _parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
                asPathname = _parsedAs.pathname;
                routeRegex = (0, _routeRegex.getRouteRegex)(route);
                routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
                shouldInterpolate = route === asPathname;
                interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

                if (!(!routeMatch || shouldInterpolate && !interpolatedAs.result)) {
                  _context.next = 75;
                  break;
                }

                missingParams = Object.keys(routeRegex.groups).filter(function (param) {
                  return !query[param];
                });

                if (!(missingParams.length > 0)) {
                  _context.next = 73;
                  break;
                }

                if (true) {
                  console.warn("".concat(shouldInterpolate ? "Interpolating href" : "Mismatching `as` and `href`", " failed to manually provide ") + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
                }

                throw new Error((shouldInterpolate ? "The provided `href` (".concat(url, ") value is missing query values (").concat(missingParams.join(', '), ") to be interpolated properly. ") : "The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ")) + "Read more: https://nextjs.org/docs/messages/".concat(shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'));

              case 73:
                _context.next = 76;
                break;

              case 75:
                if (shouldInterpolate) {
                  as = (0, _utils.formatWithValidation)(Object.assign({}, _parsedAs, {
                    pathname: interpolatedAs.result,
                    query: omitParmsFromQuery(query, interpolatedAs.params)
                  }));
                } else {
                  // Merge params into `query`, overwriting any specified in search
                  Object.assign(query, routeMatch);
                }

              case 76:
                Router.events.emit('routeChangeStart', as, routeProps);
                _context.prev = 77;
                _context.next = 80;
                return this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);

              case 80:
                routeInfo = _context.sent;
                _routeInfo = routeInfo, error = _routeInfo.error, props = _routeInfo.props, __N_SSG = _routeInfo.__N_SSG, __N_SSP = _routeInfo.__N_SSP; // handle redirect on client-transition

                if (!((__N_SSG || __N_SSP) && props)) {
                  _context.next = 107;
                  break;
                }

                if (!(props.pageProps && props.pageProps.__N_REDIRECT)) {
                  _context.next = 93;
                  break;
                }

                destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
                // client-navigation if it is falling back to hard navigation if
                // it's not

                if (!destination.startsWith('/')) {
                  _context.next = 91;
                  break;
                }

                parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
                parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

                if (!pages.includes(parsedHref.pathname)) {
                  _context.next = 91;
                  break;
                }

                _prepareUrlAs3 = prepareUrlAs(this, destination, destination), newUrl = _prepareUrlAs3.url, newAs = _prepareUrlAs3.as;
                return _context.abrupt("return", this.change(method, newUrl, newAs, options));

              case 91:
                window.location.href = destination;
                return _context.abrupt("return", new Promise(function () {}));

              case 93:
                this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

                if (!(props.notFound === SSG_DATA_NOT_FOUND)) {
                  _context.next = 107;
                  break;
                }

                _context.prev = 95;
                _context.next = 98;
                return this.fetchComponent('/404');

              case 98:
                notFoundRoute = '/404';
                _context.next = 104;
                break;

              case 101:
                _context.prev = 101;
                _context.t1 = _context["catch"](95);
                notFoundRoute = '/_error';

              case 104:
                _context.next = 106;
                return this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
                  shallow: false
                });

              case 106:
                routeInfo = _context.sent;

              case 107:
                Router.events.emit('beforeHistoryChange', as, routeProps);
                this.changeState(method, url, as, options);

                if (true) {
                  appComp = this.components['/_app'].Component;
                  window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
                } // shallow routing is only allowed for same page URL changes.


                isValidShallowRoute = options.shallow && this.route === route;

                if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
                  // ensure statusCode is still correct for static 500 page
                  // when updating query information
                  props.pageProps.statusCode = 500;
                }

                _context.next = 114;
                return this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
                  x: 0,
                  y: 0
                }))["catch"](function (e) {
                  if (e.cancelled) error = error || e;else throw e;
                });

              case 114:
                if (!error) {
                  _context.next = 117;
                  break;
                }

                Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
                throw error;

              case 117:
                if (false) {}

                Router.events.emit('routeChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 122:
                _context.prev = 122;
                _context.t2 = _context["catch"](77);

                if (!_context.t2.cancelled) {
                  _context.next = 126;
                  break;
                }

                return _context.abrupt("return", false);

              case 126:
                throw _context.t2;

              case 127:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[36, 46], [77, 122], [95, 101]]);
      }));

      function change(_x, _x2, _x3, _x4, _x5) {
        return _change.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
        this._shallow = options.shallow;
        window.history[method]({
          url: url,
          as: as,
          options: options,
          __N: true,
          idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "handleRouteInfoError",
    value: function () {
      var _handleRouteInfoError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(err, pathname, query, as, routeProps, loadErrorFail) {
        var Component, styleSheets, props, _yield$this$fetchComp, routeInfo;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!err.cancelled) {
                  _context2.next = 2;
                  break;
                }

                throw err;

              case 2:
                if (!((0, _routeLoader.isAssetError)(err) || loadErrorFail)) {
                  _context2.next = 6;
                  break;
                }

                Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.

                window.location.href = as; // Changing the URL doesn't block executing the current code path.
                // So let's throw a cancellation error stop the routing logic.

                throw buildCancellationError();

              case 6:
                _context2.prev = 6;

                if (!(typeof Component === 'undefined' || typeof styleSheets === 'undefined')) {
                  _context2.next = 14;
                  break;
                }

                ;
                _context2.next = 11;
                return this.fetchComponent('/_error');

              case 11:
                _yield$this$fetchComp = _context2.sent;
                Component = _yield$this$fetchComp.page;
                styleSheets = _yield$this$fetchComp.styleSheets;

              case 14:
                routeInfo = {
                  props: props,
                  Component: Component,
                  styleSheets: styleSheets,
                  err: err,
                  error: err
                };

                if (routeInfo.props) {
                  _context2.next = 26;
                  break;
                }

                _context2.prev = 16;
                _context2.next = 19;
                return this.getInitialProps(Component, {
                  err: err,
                  pathname: pathname,
                  query: query
                });

              case 19:
                routeInfo.props = _context2.sent;
                _context2.next = 26;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](16);
                console.error('Error in error page `getInitialProps`: ', _context2.t0);
                routeInfo.props = {};

              case 26:
                return _context2.abrupt("return", routeInfo);

              case 29:
                _context2.prev = 29;
                _context2.t1 = _context2["catch"](6);
                return _context2.abrupt("return", this.handleRouteInfoError(_context2.t1, pathname, query, as, routeProps, true));

              case 32:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 29], [16, 22]]);
      }));

      function handleRouteInfoError(_x6, _x7, _x8, _x9, _x10, _x11) {
        return _handleRouteInfoError.apply(this, arguments);
      }

      return handleRouteInfoError;
    }()
  }, {
    key: "getRouteInfo",
    value: function () {
      var _getRouteInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(route, pathname, query, as, resolvedAs, routeProps) {
        var _this2 = this;

        var existingRouteInfo, cachedRouteInfo, routeInfo, Component, __N_SSG, __N_SSP, _require, isValidElementType, dataHref, props;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                existingRouteInfo = this.components[route];

                if (!(routeProps.shallow && existingRouteInfo && this.route === route)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", existingRouteInfo);

              case 4:
                cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;

                if (!cachedRouteInfo) {
                  _context3.next = 9;
                  break;
                }

                _context3.t0 = cachedRouteInfo;
                _context3.next = 12;
                break;

              case 9:
                _context3.next = 11;
                return this.fetchComponent(route).then(function (res) {
                  return {
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP
                  };
                });

              case 11:
                _context3.t0 = _context3.sent;

              case 12:
                routeInfo = _context3.t0;
                Component = routeInfo.Component, __N_SSG = routeInfo.__N_SSG, __N_SSP = routeInfo.__N_SSP;

                if (false) {}

                _require = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js"), isValidElementType = _require.isValidElementType;

                if (isValidElementType(Component)) {
                  _context3.next = 18;
                  break;
                }

                throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

              case 18:
                if (__N_SSG || __N_SSP) {
                  dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
                    pathname: pathname,
                    query: query
                  }), resolvedAs, __N_SSG, this.locale);
                }

                _context3.next = 21;
                return this._getData(function () {
                  return __N_SSG ? _this2._getStaticData(dataHref) : __N_SSP ? _this2._getServerData(dataHref) : _this2.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
                  {
                    pathname: pathname,
                    query: query,
                    asPath: as
                  });
                });

              case 21:
                props = _context3.sent;
                routeInfo.props = props;
                this.components[route] = routeInfo;
                return _context3.abrupt("return", routeInfo);

              case 27:
                _context3.prev = 27;
                _context3.t1 = _context3["catch"](0);
                return _context3.abrupt("return", this.handleRouteInfoError(_context3.t1, pathname, query, as, routeProps));

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 27]]);
      }));

      function getRouteInfo(_x12, _x13, _x14, _x15, _x16, _x17) {
        return _getRouteInfo.apply(this, arguments);
      }

      return getRouteInfo;
    }()
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data, resetScroll) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      return this.notify(data, resetScroll);
    }
    /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value or `#top`
      // To mirror browsers


      if (hash === '' || hash === 'top') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */

  }, {
    key: "prefetch",
    value: function () {
      var _prefetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(url) {
        var _this3 = this;

        var asPath,
            options,
            parsed,
            pathname,
            parsedAs,
            localePathResult,
            pages,
            resolvedAs,
            rewrites,
            _yield2,
            rewritesResult,
            route,
            _args4 = arguments;

        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                asPath = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : url;
                options = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
                pathname = parsed.pathname;

                if (false) {}

                _context4.next = 7;
                return this.pageLoader.getPageList();

              case 7:
                pages = _context4.sent;
                resolvedAs = asPath;

                if (true) {
                  _context4.next = 19;
                  break;
                }

                _context4.next = 12;
                return (0, _routeLoader.getClientBuildManifest)();

              case 12:
                _yield2 = _context4.sent;
                rewrites = _yield2.__rewrites;
                rewritesResult = (0, _resolveRewrites["default"])(addBasePath(addLocale(asPath, this.locale)), pages, rewrites, parsed.query, function (p) {
                  return resolveDynamicRoute(p, pages);
                }, this.locales);
                resolvedAs = delLocale(delBasePath(rewritesResult.asPath), this.locale);

                if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                  // if this directly matches a page we need to update the href to
                  // allow the correct page chunk to be loaded
                  pathname = rewritesResult.resolvedHref;
                  parsed.pathname = pathname;
                  url = (0, _utils.formatWithValidation)(parsed);
                }

                _context4.next = 21;
                break;

              case 19:
                parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

                if (parsed.pathname !== pathname) {
                  pathname = parsed.pathname;
                  url = (0, _utils.formatWithValidation)(parsed);
                }

              case 21:
                route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

                if (false) {}

                return _context4.abrupt("return");

              case 24:
                _context4.next = 26;
                return Promise.all([this.pageLoader._isSsg(route).then(function (isSsg) {
                  return isSsg ? _this3._getStaticData(_this3.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : _this3.locale)) : false;
                }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function prefetch(_x18) {
        return _prefetch.apply(this, arguments);
      }

      return prefetch;
    }()
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(route) {
        var cancelled, cancel, componentResult, error;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                cancelled = false;

                cancel = this.clc = function () {
                  cancelled = true;
                };

                _context5.next = 4;
                return this.pageLoader.loadPage(route);

              case 4:
                componentResult = _context5.sent;

                if (!cancelled) {
                  _context5.next = 9;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 9:
                if (cancel === this.clc) {
                  this.clc = null;
                }

                return _context5.abrupt("return", componentResult);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchComponent(_x19) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this4 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this4.clc) {
          _this4.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "_getStaticData",
    value: function _getStaticData(dataHref) {
      var _this5 = this;

      var _URL = new URL(dataHref, window.location.href),
          cacheKey = _URL.href;

      if (false) {}

      return fetchNextData(dataHref, this.isSsr).then(function (data) {
        _this5.sdc[cacheKey] = data;
        return data;
      });
    }
  }, {
    key: "_getServerData",
    value: function _getServerData(dataHref) {
      var _this6 = this;

      var _URL2 = new URL(dataHref, window.location.href),
          resourceKey = _URL2.href;

      if (this.sdr[resourceKey]) {
        return this.sdr[resourceKey];
      }

      return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(function (data) {
        delete _this6.sdr[resourceKey];
        return data;
      })["catch"](function (err) {
        delete _this6.sdr[resourceKey];
        throw err;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return (0, _utils.loadGetInitialProps)(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as, routeProps) {
      if (this.clc) {
        Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data, resetScroll) {
      return this.sub(data, this.components['/_app'].Component, resetScroll);
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = (0, _mitt["default"])();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  var auth = urlObj.auth,
      hostname = urlObj.hostname;
  var protocol = urlObj.protocol || '';
  var pathname = urlObj.pathname || '';
  var hash = urlObj.hash || '';
  var query = urlObj.query || '';
  var host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? "[".concat(hostname, "]") : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  var search = urlObj.search || query && "?".concat(query) || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = getAssetPathFromRoute; // Translates a logical route into its pages asset path (relative from a common prefix)
// "asset path" being its javascript file, data file, prerendered html,...

function getAssetPathFromRoute(route) {
  var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var path = route === '/' ? '/index' : /^\/index(\/|$)/.test(route) ? "/index".concat(route) : "".concat(route);
  return path + ext;
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  var globalBase = new URL(false ? undefined : (0, _utils.getLocationOrigin)());
  var resolvedBase = base ? new URL(base, globalBase) : globalBase;

  var _URL = new URL(url, resolvedBase),
      pathname = _URL.pathname,
      searchParams = _URL.searchParams,
      search = _URL.search,
      hash = _URL.hash,
      href = _URL.href,
      origin = _URL.origin;

  if (origin !== globalBase.origin) {
    throw new Error("invariant: invalid relative URL, router received ".concat(url));
  }

  return {
    pathname: pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search: search,
    hash: hash,
    href: href.slice(globalBase.origin.length)
  };
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  var query = {};
  searchParams.forEach(function (value, key) {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  var result = new URLSearchParams();
  Object.entries(urlQuery).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (Array.isArray(value)) {
      value.forEach(function (item) {
        return result.append(key, stringifyUrlQueryParam(item));
      });
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target) {
  for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    searchParamsList[_key - 1] = arguments[_key];
  }

  searchParamsList.forEach(function (searchParams) {
    Array.from(searchParams.keys()).forEach(function (key) {
      return target["delete"](key);
    });
    searchParams.forEach(function (value, key) {
      return target.append(key, value);
    });
  });
  return target;
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = resolveRewrites;

function resolveRewrites() {}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  var optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  var repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat: repeat,
    optional: optional
  };
}

function getRouteRegex(normalizedRoute) {
  var segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = segments.map(function (segment) {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      var _parseParameter = parseParameter(segment.slice(1, -1)),
          key = _parseParameter.key,
          optional = _parseParameter.optional,
          repeat = _parseParameter.repeat;

      groups[key] = {
        pos: groupIndex++,
        repeat: repeat,
        optional: optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return "/".concat(escapeRegex(segment));
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (false) { var namedParameterizedRoute, routeKeys, getSafeRouteKey, routeKeyCharLength, routeKeyCharCode; }

  return {
    re: new RegExp("^".concat(parameterizedRoute, "(?:/)?$")),
    groups: groups
  };
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(App, ctx) {
    var _App$prototype, message, res, props, _message;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            // when called from _app `ctx` is nested in `ctx`
            res = ctx.res || ctx.ctx && ctx.ctx.res;

            if (App.getInitialProps) {
              _context.next = 12;
              break;
            }

            if (!(ctx.ctx && ctx.Component)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return loadGetInitialProps(ctx.Component, ctx.ctx);

          case 9:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              pageProps: _context.t0
            });

          case 11:
            return _context.abrupt("return", {});

          case 12:
            _context.next = 14;
            return App.getInitialProps(ctx);

          case 14:
            props = _context.sent;

            if (!(res && isResSent(res))) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", props);

          case 17:
            if (props) {
              _context.next = 20;
              break;
            }

            _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 20:
            if (true) {
              if (Object.keys(props).length === 0 && !ctx.ctx) {
                console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps"));
              }
            }

            return _context.abrupt("return", props);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

var urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

var SP = typeof performance !== 'undefined';
exports.SP = SP;
var ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.13.1';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var C_Users_yewon_Documents_hacony_site_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_normalize_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/normalize.scss */ "./styles/normalize.scss");
/* harmony import */ var _styles_normalize_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_normalize_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.scss */ "./styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\yewon\\Documents\\hacony-site\\pages\\_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(Component, Object(C_Users_yewon_Documents_hacony_site_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }));
}
_c = MyApp;

var _c;

$RefreshReg$(_c, "MyApp");

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

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-7-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-7-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-7-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-7-4!./global.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/global.scss");

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
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-7-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-7-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-7-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-7-4!./global.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/global.scss",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-7-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-7-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-7-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-7-4!./global.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/global.scss");

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

/***/ "./styles/normalize.scss":
/*!*******************************!*\
  !*** ./styles/normalize.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-7-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-7-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-7-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-7-4!./normalize.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/normalize.scss");

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
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-7-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-7-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-7-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-7-4!./normalize.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/normalize.scss",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-7-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-7-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-7-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-7-4!./normalize.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/normalize.scss");

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

/***/ 0:
/*!********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx ./node_modules/next/dist/client/router.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx!./");
module.exports = __webpack_require__(/*! C:\Users\yewon\Documents\hacony-site\node_modules\next\dist\client\router.js */"./node_modules/next/dist/client/router.js");


/***/ })

},[[0,"webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbC5zY3NzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvbm9ybWFsaXplLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvd2VicGFjay9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS93ZWJwYWNrL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLnNjc3M/OTFmOSIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL25vcm1hbGl6ZS5zY3NzP2RjODQiXSwibmFtZXMiOlsicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJ2YWx1ZSIsImxpbmsiLCJkb2N1bWVudCIsIndpbmRvdyIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiT2JqZWN0IiwiZXJyIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsInRleHQiLCJocmVmIiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsInByZWZldGNoIiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiUmVhY3QiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsInBhdGhuYW1lUGFydHMiLCJwYXRobmFtZSIsImxvY2FsZXMiLCJsb2NhbGUiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJrZXkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInJlc29sdmVkQXMiLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiYXMiLCJjbGVhblBhdGhuYW1lIiwicGFnZXMiLCJwYWdlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImRhdGEiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJlIiwic3RhdGUiLCJzaGFsbG93Iiwib3B0aW9ucyIsIkNvbXBvbmVudCIsImluaXRpYWwiLCJwcm9wcyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJwYXJzZWRBcyIsImRlbEJhc2VQYXRoIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiZGV0ZWN0ZWREb21haW4iLCJkZXRlY3REb21haW5Mb2NhbGUiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJwIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJleHQiLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwidGFyZ2V0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwYWdlUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJNeUFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1DOzs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNOQSxxQkFBcUIsbUJBQU8sQ0FBQyxpRkFBa0I7O0FBRS9DLCtCQUErQixtQkFBTyxDQUFDLHFHQUE0Qjs7QUFFbkU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRCOzs7Ozs7Ozs7OztBQ3JCQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtB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eUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7OztBQUliLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDcExhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLDRHQUErQjtBQUMxRDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDLDZCQUE2QixtQkFBTyxDQUFDLHlGQUE0QjtBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRHQUE0RztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7Ozs7QUFJYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLGdGQUFlO0FBQ3JDLHFCQUFxQixtQkFBTyxDQUFDLDhFQUEyQjs7QUFFeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBGQUEwRixhQUFhO0FBQ3ZHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhGQUE4RixlQUFlO0FBQzdHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUCxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhNQUE4TTs7QUFFOU07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsT0FBTztBQUNwQixhQUFhLFVBQVU7QUFDdkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBEQUEwRDtBQUMxRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3YzRGE7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsbUJBQW1CLG1CQUFPLENBQUMsaUZBQTRCO0FBQ3ZEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUNBLDRCQUE0QixRQUFTO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG52YXIgaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gcmVxdWlyZShcIi4vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0XCIpO1xuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBzZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0OyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBhc3NpZ249T2JqZWN0LmFzc2lnbi5iaW5kKE9iamVjdCk7bW9kdWxlLmV4cG9ydHM9YXNzaWduO21vZHVsZS5leHBvcnRzLmRlZmF1bHQ9bW9kdWxlLmV4cG9ydHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYmplY3QtYXNzaWduLmpzLm1hcCIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2FwcFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwLnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiXCJ1c2Ugc3RyaWN0XCI7Y29uc3QgaXNPbGRJRT1mdW5jdGlvbiBpc09sZElFKCl7bGV0IG1lbW87cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCl7aWYodHlwZW9mIG1lbW89PT0ndW5kZWZpbmVkJyl7Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncbi8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbi8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbi8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5tZW1vPUJvb2xlYW4od2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2IpO31yZXR1cm4gbWVtbzt9O30oKTtjb25zdCBnZXRUYXJnZXQ9ZnVuY3Rpb24gZ2V0VGFyZ2V0KCl7Y29uc3QgbWVtbz17fTtyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KXtpZih0eXBlb2YgbWVtb1t0YXJnZXRdPT09J3VuZGVmaW5lZCcpe2xldCBzdHlsZVRhcmdldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbmlmKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCYmc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpe3RyeXsvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbnN0eWxlVGFyZ2V0PXN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO31jYXRjaChlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuc3R5bGVUYXJnZXQ9bnVsbDt9fW1lbW9bdGFyZ2V0XT1zdHlsZVRhcmdldDt9cmV0dXJuIG1lbW9bdGFyZ2V0XTt9O30oKTtjb25zdCBzdHlsZXNJbkRvbT1bXTtmdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKXtsZXQgcmVzdWx0PS0xO2ZvcihsZXQgaT0wO2k8c3R5bGVzSW5Eb20ubGVuZ3RoO2krKyl7aWYoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllcj09PWlkZW50aWZpZXIpe3Jlc3VsdD1pO2JyZWFrO319cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyl7Y29uc3QgaWRDb3VudE1hcD17fTtjb25zdCBpZGVudGlmaWVycz1bXTtmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoO2krKyl7Y29uc3QgaXRlbT1saXN0W2ldO2NvbnN0IGlkPW9wdGlvbnMuYmFzZT9pdGVtWzBdK29wdGlvbnMuYmFzZTppdGVtWzBdO2NvbnN0IGNvdW50PWlkQ291bnRNYXBbaWRdfHwwO2NvbnN0IGlkZW50aWZpZXI9YCR7aWR9ICR7Y291bnR9YDtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXIsdXBkYXRlcjphZGRTdHlsZShvYmosb3B0aW9ucykscmVmZXJlbmNlczoxfSk7fWlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7fXJldHVybiBpZGVudGlmaWVyczt9ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpe2NvbnN0IHN0eWxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7Y29uc3QgYXR0cmlidXRlcz1vcHRpb25zLmF0dHJpYnV0ZXN8fHt9O2lmKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlPT09J3VuZGVmaW5lZCcpe2NvbnN0IG5vbmNlPS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudHlwZW9mIF9fd2VicGFja19ub25jZV9fIT09J3VuZGVmaW5lZCc/X193ZWJwYWNrX25vbmNlX186bnVsbDtpZihub25jZSl7YXR0cmlidXRlcy5ub25jZT1ub25jZTt9fU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goa2V5PT57c3R5bGUuc2V0QXR0cmlidXRlKGtleSxhdHRyaWJ1dGVzW2tleV0pO30pO2lmKHR5cGVvZiBvcHRpb25zLmluc2VydD09PSdmdW5jdGlvbicpe29wdGlvbnMuaW5zZXJ0KHN0eWxlKTt9ZWxzZXtjb25zdCB0YXJnZXQ9Z2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0fHwnaGVhZCcpO2lmKCF0YXJnZXQpe3Rocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7fXRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7fXJldHVybiBzdHlsZTt9ZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbmlmKHN0eWxlLnBhcmVudE5vZGU9PT1udWxsKXtyZXR1cm4gZmFsc2U7fXN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO30vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9jb25zdCByZXBsYWNlVGV4dD1mdW5jdGlvbiByZXBsYWNlVGV4dCgpe2NvbnN0IHRleHRTdG9yZT1bXTtyZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCxyZXBsYWNlbWVudCl7dGV4dFN0b3JlW2luZGV4XT1yZXBsYWNlbWVudDtyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTt9O30oKTtmdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLGluZGV4LHJlbW92ZSxvYmope2NvbnN0IGNzcz1yZW1vdmU/Jyc6b2JqLm1lZGlhP2BAbWVkaWEgJHtvYmoubWVkaWF9IHske29iai5jc3N9fWA6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz1gXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwke2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSl9ICovYDt9Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1jc3M7fWVsc2V7d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7fXN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO319bGV0IHNpbmdsZXRvbj1udWxsO2xldCBzaW5nbGV0b25Db3VudGVyPTA7ZnVuY3Rpb24gYWRkU3R5bGUob2JqLG9wdGlvbnMpe2xldCBzdHlsZTtsZXQgdXBkYXRlO2xldCByZW1vdmU7aWYob3B0aW9ucy5zaW5nbGV0b24pe2NvbnN0IHN0eWxlSW5kZXg9c2luZ2xldG9uQ291bnRlcisrO3N0eWxlPXNpbmdsZXRvbnx8KHNpbmdsZXRvbj1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO3VwZGF0ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LGZhbHNlKTtyZW1vdmU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCx0cnVlKTt9ZWxzZXtzdHlsZT1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7dXBkYXRlPWFwcGx5VG9UYWcuYmluZChudWxsLHN0eWxlLG9wdGlvbnMpO3JlbW92ZT0oKT0+e3JlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7fTt9dXBkYXRlKG9iaik7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iail7aWYobmV3T2JqKXtpZihuZXdPYmouY3NzPT09b2JqLmNzcyYmbmV3T2JqLm1lZGlhPT09b2JqLm1lZGlhJiZuZXdPYmouc291cmNlTWFwPT09b2JqLnNvdXJjZU1hcCl7cmV0dXJuO311cGRhdGUob2JqPW5ld09iaik7fWVsc2V7cmVtb3ZlKCk7fX07fW1vZHVsZS5leHBvcnRzPShsaXN0LG9wdGlvbnMpPT57b3B0aW9ucz1vcHRpb25zfHx7fTsvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbmlmKCFvcHRpb25zLnNpbmdsZXRvbiYmdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uIT09J2Jvb2xlYW4nKXtvcHRpb25zLnNpbmdsZXRvbj1pc09sZElFKCk7fWxpc3Q9bGlzdHx8W107bGV0IGxhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3Qpe25ld0xpc3Q9bmV3TGlzdHx8W107aWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpIT09J1tvYmplY3QgQXJyYXldJyl7cmV0dXJuO31mb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO31jb25zdCBuZXdMYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKG5ld0xpc3Qsb3B0aW9ucyk7Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7aWYoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXM9PT0wKXtzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO3N0eWxlc0luRG9tLnNwbGljZShpbmRleCwxKTt9fWxhc3RJZGVudGlmaWVycz1uZXdMYXN0SWRlbnRpZmllcnM7fTt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcblxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUVhc3QrU2VhK0Rva2RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkNpbmRlcmVsYVxcXCI7XFxuICBzcmM6IHVybCgvZm9udHMvY2luZGVyZWxhLndvZmYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnVzc2VsXFxcIjtcXG4gIHNyYzogdXJsKC9mb250cy9ydXNzZWxsLm90Zik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9nbG9iYWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTtFQUNJLHdCQUFBO0VBQ0EsK0JBQUE7QUFESjtBQUlBO0VBQ0kscUJBQUE7RUFDQSw0QkFBQTtBQUZKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUVhc3QrU2VhK0Rva2RvJmZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUVhc3QrU2VhK0Rva2RvJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ2luZGVyZWxhJztcXHJcXG4gICAgc3JjOiB1cmwoL2ZvbnRzL2NpbmRlcmVsYS53b2ZmKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUnVzc2VsJztcXHJcXG4gICAgc3JjOiB1cmwoL2ZvbnRzL3J1c3NlbGwub3RmKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXFxuICAgdjIuMC1tb2RpZmllZCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIG1ha2Ugc3VyZSB0byBzZXQgc29tZSBmb2N1cyBzdHlsZXMgZm9yIGFjY2Vzc2liaWxpdHkgKi9cXG46Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxcbiAqL1xcbmF1ZGlvLFxcbmNhbnZhcyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgKnpvb206IDE7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXG4gKi9cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDcvOC85LCBGaXJlZm94IDMsIGFuZCBTYWZhcmkgNC5cXG4gKiBLbm93biBpc3N1ZTogbm8gSUUgNiBzdXBwb3J0LlxcbiAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGV4dCByZXNpemluZyBvZGRseSBpbiBJRSA2Lzcgd2hlbiBib2R5IGBmb250LXNpemVgIGlzIHNldCB1c2luZ1xcbiAqICAgIGBlbWAgdW5pdHMuXFxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXFxuICogICAgdXNlciB6b29tLlxcbiAqL1xcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYG91dGxpbmVgIGluY29uc2lzdGVuY3kgYmV0d2VlbiBDaHJvbWUgYW5kIG90aGVyIGJyb3dzZXJzLlxcbiAqL1xcbmE6Zm9jdXMge1xcbiAgb3V0bGluZTogdGhpbiBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmE6YWN0aXZlLFxcbmE6aG92ZXIge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXFxuICogMi4gSW1wcm92ZSBpbWFnZSBxdWFsaXR5IHdoZW4gc2NhbGVkIGluIElFIDcuXFxuICovXFxuaW1nIHtcXG4gIGJvcmRlcjogMDtcXG4gIC8qIDEgKi9cXG4gIC1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDYvNy84LzksIFNhZmFyaSA1LCBhbmQgT3BlcmEgMTEuXFxuICovXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBtYXJnaW4gZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cXG4gKi9cXG5mb3JtIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxcbiAqL1xcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XFxuICBtYXJnaW46IDAgMnB4O1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgNi83LzgvOS5cXG4gKiAyLiBDb3JyZWN0IHRleHQgbm90IHdyYXBwaW5nIGluIEZpcmVmb3ggMy5cXG4gKiAzLiBDb3JyZWN0IGFsaWdubWVudCBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxcbiAqL1xcbmxlZ2VuZCB7XFxuICBib3JkZXI6IDA7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIC8qIDIgKi9cXG4gICptYXJnaW4tbGVmdDogLTdweDtcXG4gIC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBmb250IHNpemUgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcsIEZpcmVmb3ggMyssIFNhZmFyaSA1LFxcbiAqICAgIGFuZCBDaHJvbWUuXFxuICogMy4gSW1wcm92ZSBhcHBlYXJhbmNlIGFuZCBjb25zaXN0ZW5jeSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICBtYXJnaW46IDA7XFxuICAvKiAyICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAvKiAzICovXFxuICAqdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBGaXJlZm94IDMrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxcbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgNisuXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94IDQrIGFuZCBPcGVyYS5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXG4gKiA0LiBSZW1vdmUgaW5uZXIgc3BhY2luZyBpbiBJRSA3IHdpdGhvdXQgYWZmZWN0aW5nIG5vcm1hbCB0ZXh0IGlucHV0cy5cXG4gKiAgICBLbm93biBpc3N1ZTogaW5uZXIgc3BhY2luZyByZW1haW5zIGluIElFIDYuXFxuICovXFxuYnV0dG9uLFxcbmh0bWwgaW5wdXRbdHlwZT1idXR0b25dLFxcbmlucHV0W3R5cGU9cmVzZXRdLFxcbmlucHV0W3R5cGU9c3VibWl0XSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDIgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8qIDMgKi9cXG4gICpvdmVyZmxvdzogdmlzaWJsZTtcXG4gIC8qIDQgKi9cXG59XFxuXFxuLyoqXFxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKi9cXG5idXR0b25bZGlzYWJsZWRdLFxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBjb250ZW50LWJveCBpbiBJRSA4LzkuXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS5cXG4gKiAzLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgNy5cXG4gKiAgICBLbm93biBpc3N1ZTogZXhjZXNzIHBhZGRpbmcgcmVtYWlucyBpbiBJRSA2LlxcbiAqL1xcbmlucHV0W3R5cGU9Y2hlY2tib3hdLFxcbmlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovXFxuICAqaGVpZ2h0OiAxM3B4O1xcbiAgLyogMyAqL1xcbiAgKndpZHRoOiAxM3B4O1xcbiAgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZVxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcbiAqL1xcbmlucHV0W3R5cGU9c2VhcmNoXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC8qIDEgKi9cXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAvKiAyICovXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXG4gKiBvbiBPUyBYLlxcbiAqL1xcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggMysuXFxuICovXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA2LzcvOC85LlxcbiAqIDIuIEltcHJvdmUgcmVhZGFiaWxpdHkgYW5kIGFsaWdubWVudCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXFxuICovXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgY29sb3I6ICMyMjI7XFxufVxcblxcbjo6LW1vei1zZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogI2IzZDRmYztcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG46OnNlbGVjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4uY2hyb21lZnJhbWUge1xcbiAgbWFyZ2luOiAwLjJlbSAwO1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogMC4yZW0gMDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIC8qIG5vIHVuZGVybGluZSAqL1xcbn1cXG5cXG4vKipcXG4gKiBNYWtlIGFsbCBlbGVtZW50cyBzaXplIGJ5IGJvcmRlclxcbiAqL1xcbmh0bWwge1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgLW1vei1ib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL25vcm1hbGl6ZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL25vcm1hbGl6ZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7O0VBYUksU0FBQTtFQUNILFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQUFEOztBQUdBLHlEQUFBO0FBQ0E7RUFDSSxVQUFBO0FBQUo7O0FBR0EsZ0RBQUE7QUFDQTs7RUFFQyxjQUFBO0FBQUQ7O0FBR0E7RUFDQyxjQUFBO0FBQUQ7O0FB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QUFBO0FBQzNCOztBQUVBOztFQUFBO0FBSUE7RUFFSSwyQkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFFSSx3QkFBQTtFQUNBLG1CQUFBO0FBQUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXHJcXG4gICB2Mi4wLW1vZGlmaWVkIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qIG1ha2Ugc3VyZSB0byBzZXQgc29tZSBmb2N1cyBzdHlsZXMgZm9yIGFjY2Vzc2liaWxpdHkgKi9cXHJcXG46Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcclxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcXHJcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcclxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9c2VhcmNoXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hdWRpbyxcXHJcXG5jYW52YXMsXFxyXFxudmlkZW8ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICpkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgICp6b29tOiAxO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxyXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA3LzgvOSwgRmlyZWZveCAzLCBhbmQgU2FmYXJpIDQuXFxyXFxuICogS25vd24gaXNzdWU6IG5vIElFIDYgc3VwcG9ydC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5baGlkZGVuXSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGV4dCByZXNpemluZyBvZGRseSBpbiBJRSA2Lzcgd2hlbiBib2R5IGBmb250LXNpemVgIGlzIHNldCB1c2luZ1xcclxcbiAqICAgIGBlbWAgdW5pdHMuXFxyXFxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXFxyXFxuICogICAgdXNlciB6b29tLlxcclxcbiAqL1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXHJcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgYG91dGxpbmVgIGluY29uc2lzdGVuY3kgYmV0d2VlbiBDaHJvbWUgYW5kIG90aGVyIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmE6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYTphY3RpdmUsXFxyXFxuYTpob3ZlciB7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgNi83LzgvOSBhbmQgRmlyZWZveCAzLlxcclxcbiAqIDIuIEltcHJvdmUgaW1hZ2UgcXVhbGl0eSB3aGVuIHNjYWxlZCBpbiBJRSA3LlxcclxcbiAqL1xcclxcblxcclxcbmltZyB7XFxyXFxuICAgIGJvcmRlcjogMDsgLyogMSAqL1xcclxcbiAgICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDYvNy84LzksIFNhZmFyaSA1LCBhbmQgT3BlcmEgMTEuXFxyXFxuICovXFxyXFxuXFxyXFxuZmlndXJlIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IG1hcmdpbiBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxcclxcbiAqL1xcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XFxyXFxuICAgIG1hcmdpbjogMCAycHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDYvNy84LzkuXFxyXFxuICogMi4gQ29ycmVjdCB0ZXh0IG5vdCB3cmFwcGluZyBpbiBGaXJlZm94IDMuXFxyXFxuICogMy4gQ29ycmVjdCBhbGlnbm1lbnQgZGlzcGxheWVkIG9kZGx5IGluIElFIDYvNy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgICBib3JkZXI6IDA7IC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMiAqL1xcclxcbiAgICAqbWFyZ2luLWxlZnQ6IC03cHg7IC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCBmb250IHNpemUgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBJRSA2LzcsIEZpcmVmb3ggMyssIFNhZmFyaSA1LFxcclxcbiAqICAgIGFuZCBDaHJvbWUuXFxyXFxuICogMy4gSW1wcm92ZSBhcHBlYXJhbmNlIGFuZCBjb25zaXN0ZW5jeSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcclxcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAzICovXFxyXFxuICAgICp2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgRmlyZWZveCAzKyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXHJcXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQge1xcclxcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxyXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXHJcXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgNisuXFxyXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94IDQrIGFuZCBPcGVyYS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXFxyXFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxyXFxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcclxcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXFxyXFxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcclxcbiAqIDQuIFJlbW92ZSBpbm5lciBzcGFjaW5nIGluIElFIDcgd2l0aG91dCBhZmZlY3Rpbmcgbm9ybWFsIHRleHQgaW5wdXRzLlxcclxcbiAqICAgIEtub3duIGlzc3VlOiBpbm5lciBzcGFjaW5nIHJlbWFpbnMgaW4gSUUgNi5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcclxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIDMgKi9cXHJcXG4gICAgKm92ZXJmbG93OiB2aXNpYmxlOyAgLyogNCAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbltkaXNhYmxlZF0sXFxyXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gY29udGVudC1ib3ggaW4gSUUgOC85LlxcclxcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkuXFxyXFxuICogMy4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDcuXFxyXFxuICogICAgS25vd24gaXNzdWU6IGV4Y2VzcyBwYWRkaW5nIHJlbWFpbnMgaW4gSUUgNi5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXHJcXG4gICAgKmhlaWdodDogMTNweDsgLyogMyAqL1xcclxcbiAgICAqd2lkdGg6IDEzcHg7IC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXHJcXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXHJcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxyXFxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxyXFxuICogb24gT1MgWC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXHJcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDMrLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDYvNy84LzkuXFxyXFxuICogMi4gSW1wcm92ZSByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiAxICovXFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcclxcbiAqL1xcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGNvbG9yOiAjMjIyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG46Oi1tb3otc2VsZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2IzZDRmYztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbjo6c2VsZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2IzZDRmYztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNocm9tZWZyYW1lIHtcXHJcXG4gICAgbWFyZ2luOiAwLjJlbSAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgcGFkZGluZzogMC4yZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IC8qIG5vIHVuZGVybGluZSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBNYWtlIGFsbCBlbGVtZW50cyBzaXplIGJ5IGJvcmRlclxcclxcbiAqL1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XCIsXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xcbiAgIHYyLjAtbW9kaWZpZWQgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBtYWtlIHN1cmUgdG8gc2V0IHNvbWUgZm9jdXMgc3R5bGVzIGZvciBhY2Nlc3NpYmlsaXR5ICovXFxuOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA2LzcvOC85IGFuZCBGaXJlZm94IDMuXFxuICovXFxuYXVkaW8sXFxuY2FudmFzLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICpkaXNwbGF5OiBpbmxpbmU7XFxuICAqem9vbTogMTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxcbiAqL1xcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgNy84LzksIEZpcmVmb3ggMywgYW5kIFNhZmFyaSA0LlxcbiAqIEtub3duIGlzc3VlOiBubyBJRSA2IHN1cHBvcnQuXFxuICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0ZXh0IHJlc2l6aW5nIG9kZGx5IGluIElFIDYvNyB3aGVuIGJvZHkgYGZvbnQtc2l6ZWAgaXMgc2V0IHVzaW5nXFxuICogICAgYGVtYCB1bml0cy5cXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXG4gKiAgICB1c2VyIHpvb20uXFxuICovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovXFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXFxuICovXFxuYTpmb2N1cyB7XFxuICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYTphY3RpdmUsXFxuYTpob3ZlciB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDYvNy84LzkgYW5kIEZpcmVmb3ggMy5cXG4gKiAyLiBJbXByb3ZlIGltYWdlIHF1YWxpdHkgd2hlbiBzY2FsZWQgaW4gSUUgNy5cXG4gKi9cXG5pbWcge1xcbiAgYm9yZGVyOiAwO1xcbiAgLyogMSAqL1xcbiAgLW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYztcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgNi83LzgvOSwgU2FmYXJpIDUsIGFuZCBPcGVyYSAxMS5cXG4gKi9cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IG1hcmdpbiBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgNi83LlxcbiAqL1xcbmZvcm0ge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxuICovXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gIG1hcmdpbjogMCAycHg7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA2LzcvOC85LlxcbiAqIDIuIENvcnJlY3QgdGV4dCBub3Qgd3JhcHBpbmcgaW4gRmlyZWZveCAzLlxcbiAqIDMuIENvcnJlY3QgYWxpZ25tZW50IGRpc3BsYXllZCBvZGRseSBpbiBJRSA2LzcuXFxuICovXFxubGVnZW5kIHtcXG4gIGJvcmRlcjogMDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgLyogMiAqL1xcbiAgKm1hcmdpbi1sZWZ0OiAtN3B4O1xcbiAgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIElFIDYvNywgRmlyZWZveCAzKywgU2FmYXJpIDUsXFxuICogICAgYW5kIENocm9tZS5cXG4gKiAzLiBJbXByb3ZlIGFwcGVhcmFuY2UgYW5kIGNvbnNpc3RlbmN5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIDIgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIC8qIDMgKi9cXG4gICp2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIEZpcmVmb3ggMysgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXFxuICogdGhlIFVBIHN0eWxlc2hlZXQuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gQ2hyb21lLCBTYWZhcmkgNSssIGFuZCBJRSA2Ky5cXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3ggNCsgYW5kIE9wZXJhLlxcbiAqL1xcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXFxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcbiAqIDQuIFJlbW92ZSBpbm5lciBzcGFjaW5nIGluIElFIDcgd2l0aG91dCBhZmZlY3Rpbmcgbm9ybWFsIHRleHQgaW5wdXRzLlxcbiAqICAgIEtub3duIGlzc3VlOiBpbm5lciBzcGFjaW5nIHJlbWFpbnMgaW4gSUUgNi5cXG4gKi9cXG5idXR0b24sXFxuaHRtbCBpbnB1dFt0eXBlPWJ1dHRvbl0sXFxuaW5wdXRbdHlwZT1yZXNldF0sXFxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMiAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLyogMyAqL1xcbiAgKm92ZXJmbG93OiB2aXNpYmxlO1xcbiAgLyogNCAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGNvbnRlbnQtYm94IGluIElFIDgvOS5cXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LlxcbiAqIDMuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA3LlxcbiAqICAgIEtub3duIGlzc3VlOiBleGNlc3MgcGFkZGluZyByZW1haW5zIGluIElFIDYuXFxuICovXFxuaW5wdXRbdHlwZT1jaGVja2JveF0sXFxuaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovXFxuICAqaGVpZ2h0OiAxM3B4O1xcbiAgLyogMyAqL1xcbiAgKndpZHRoOiAxM3B4O1xcbiAgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZVxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcbiAqL1xcbmlucHV0W3R5cGU9c2VhcmNoXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC8qIDEgKi9cXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLyogMiAqL1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxuICogb24gT1MgWC5cXG4gKi9cXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDMrLlxcbiAqL1xcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgNi83LzgvOS5cXG4gKiAyLiBJbXByb3ZlIHJlYWRhYmlsaXR5IGFuZCBhbGlnbm1lbnQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaHRtbCxcXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiAjMjIyO1xcbn1cXG5cXG46Oi1tb3otc2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNiM2Q0ZmM7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuOjpzZWxlY3Rpb24ge1xcbiAgYmFja2dyb3VuZDogI2IzZDRmYztcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG5pbWcge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLmNocm9tZWZyYW1lIHtcXG4gIG1hcmdpbjogMC4yZW0gMDtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAvKiBubyB1bmRlcmxpbmUgKi9cXG59XFxuXFxuLyoqXFxuICogTWFrZSBhbGwgZWxlbWVudHMgc2l6ZSBieSBib3JkZXJcXG4gKi9cXG5odG1sIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogaW5oZXJpdDtcXG4gIC1tb3otYm94LXNpemluZzogaW5oZXJpdDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24oKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyA5MzE6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuLyoqKioqKi8gXHRcdHRyeSB7XG4vKioqKioqLyBcdFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX25jY3dwY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4vKioqKioqLyBcdFx0fSBmaW5hbGx5IHtcbi8qKioqKiovIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2NvbXBhdCAqL1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0X19uY2N3cGNrX3JlcXVpcmVfXy5hYiA9IF9fZGlybmFtZSArIFwiL1wiOy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDkzMSk7XG4vKioqKioqLyB9KSgpXG47IiwibW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gODgwOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuLyoqKioqKi8gXHRcdHRyeSB7XG4vKioqKioqLyBcdFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX25jY3dwY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4vKioqKioqLyBcdFx0fSBmaW5hbGx5IHtcbi8qKioqKiovIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2NvbXBhdCAqL1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0X19uY2N3cGNrX3JlcXVpcmVfXy5hYiA9IF9fZGlybmFtZSArIFwiL1wiOy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDg4MCk7XG4vKioqKioqLyB9KSgpXG47IiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuXG5leHBvcnQgY29uc3QgUm91dGVyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8TmV4dFJvdXRlcj4obnVsbCBhcyBhbnkpXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFJvdXRlckNvbnRleHQuZGlzcGxheU5hbWUgPSAnUm91dGVyQ29udGV4dCdcbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTogc3RyaW5nLCBwYWdlczogc3RyaW5nW10pIHtcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUhKSlcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXRobmFtZVxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhcyksIHRoaXMubG9jYWxlKSksXG4gICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcGFnZXNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIFRyYW5zbGF0ZXMgYSBsb2dpY2FsIHJvdXRlIGludG8gaXRzIHBhZ2VzIGFzc2V0IHBhdGggKHJlbGF0aXZlIGZyb20gYSBjb21tb24gcHJlZml4KVxuLy8gXCJhc3NldCBwYXRoXCIgYmVpbmcgaXRzIGphdmFzY3JpcHQgZmlsZSwgZGF0YSBmaWxlLCBwcmVyZW5kZXJlZCBodG1sLC4uLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKFxuICByb3V0ZTogc3RyaW5nLFxuICBleHQ6IHN0cmluZyA9ICcnXG4pOiBzdHJpbmcge1xuICBjb25zdCBwYXRoID1cbiAgICByb3V0ZSA9PT0gJy8nXG4gICAgICA/ICcvaW5kZXgnXG4gICAgICA6IC9eXFwvaW5kZXgoXFwvfCQpLy50ZXN0KHJvdXRlKVxuICAgICAgPyBgL2luZGV4JHtyb3V0ZX1gXG4gICAgICA6IGAke3JvdXRlfWBcbiAgcmV0dXJuIHBhdGggKyBleHRcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE2LjEzLjEnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgc3VzcGVuc2U6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIEJFRk9SRV9TTEFTSF9SRSA9IC9eKC4qKVtcXFxcXFwvXS87XG5mdW5jdGlvbiBkZXNjcmliZUNvbXBvbmVudEZyYW1lIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICB2YXIgc291cmNlSW5mbyA9ICcnO1xuXG4gIGlmIChzb3VyY2UpIHtcbiAgICB2YXIgcGF0aCA9IHNvdXJjZS5maWxlTmFtZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBwYXRoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG5cbiAgICB7XG4gICAgICAvLyBJbiBERVYsIGluY2x1ZGUgY29kZSBmb3IgYSBjb21tb24gc3BlY2lhbCBjYXNlOlxuICAgICAgLy8gcHJlZmVyIFwiZm9sZGVyL2luZGV4LmpzXCIgaW5zdGVhZCBvZiBqdXN0IFwiaW5kZXguanNcIi5cbiAgICAgIGlmICgvXmluZGV4XFwuLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKEJFRk9SRV9TTEFTSF9SRSk7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIHBhdGhCZWZvcmVTbGFzaCA9IG1hdGNoWzFdO1xuXG4gICAgICAgICAgaWYgKHBhdGhCZWZvcmVTbGFzaCkge1xuICAgICAgICAgICAgdmFyIGZvbGRlck5hbWUgPSBwYXRoQmVmb3JlU2xhc2gucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcbiAgICAgICAgICAgIGZpbGVOYW1lID0gZm9sZGVyTmFtZSArICcvJyArIGZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNvdXJjZUluZm8gPSAnIChhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJztcbiAgfSBlbHNlIGlmIChvd25lck5hbWUpIHtcbiAgICBzb3VyY2VJbmZvID0gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknO1xuICB9XG5cbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyBzb3VyY2VJbmZvO1xufVxuXG52YXIgUmVzb2x2ZWQgPSAxO1xuZnVuY3Rpb24gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KGxhenlDb21wb25lbnQpIHtcbiAgcmV0dXJuIGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQgPyBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gXCJQcm9maWxlclwiO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB0aGVuYWJsZSA9IHR5cGU7XG4gICAgICAgICAgdmFyIHJlc29sdmVkVGhlbmFibGUgPSByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQodGhlbmFibGUpO1xuXG4gICAgICAgICAgaWYgKHJlc29sdmVkVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbntcbiAgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50LnR5cGUpO1xuICAgICAgdmFyIG93bmVyID0gY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX293bmVyO1xuICAgICAgc3RhY2sgKz0gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fc291cmNlLCBvd25lciAmJiBnZXRDb21wb25lbnROYW1lKG93bmVyLnR5cGUpKTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBhY3QoKSB0byB0cmFjayB3aGV0aGVyIHlvdSdyZSBpbnNpZGUgYW4gYWN0KCkgc2NvcGUuXG4gKi9cbnZhciBJc1NvbWVSZW5kZXJlckFjdGluZyA9IHtcbiAgY3VycmVudDogZmFsc2Vcbn07XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIElzU29tZVJlbmRlcmVyQWN0aW5nOiBJc1NvbWVSZW5kZXJlckFjdGluZyxcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIF9hc3NpZ24oUmVhY3RTaGFyZWRJbnRlcm5hbHMsIHtcbiAgICAvLyBUaGVzZSBzaG91bGQgbm90IGJlIGluY2x1ZGVkIGluIHByb2R1Y3Rpb24uXG4gICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTogUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSxcbiAgICAvLyBTaGltIGZvciBSZWFjdCBET00gMTYuMC4wIHdoaWNoIHN0aWxsIGRlc3RydWN0dXJlZCAoYnV0IG5vdCB1c2VkKSB0aGlzLlxuICAgIC8vIFRPRE86IHJlbW92ZSBpbiBSZWFjdCAxNy4wLlxuICAgIFJlYWN0Q29tcG9uZW50VHJlZUhvb2s6IHt9XG4gIH0pO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBoYXNFeGlzdGluZ1N0YWNrID0gYXJncy5sZW5ndGggPiAwICYmIHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnICYmIGFyZ3NbYXJncy5sZW5ndGggLSAxXS5pbmRleE9mKCdcXG4gICAgaW4nKSA9PT0gMDtcblxuICAgIGlmICghaGFzRXhpc3RpbmdTdGFjaykge1xuICAgICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmICghIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbnZhciBQT09MX1NJWkUgPSAxMDtcbnZhciB0cmF2ZXJzZUNvbnRleHRQb29sID0gW107XG5cbmZ1bmN0aW9uIGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IHRyYXZlcnNlQ29udGV4dFBvb2wucG9wKCk7XG4gICAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbWFwRnVuY3Rpb247XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gICAgcmV0dXJuIHRyYXZlcnNlQ29udGV4dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0OiBtYXBSZXN1bHQsXG4gICAgICBrZXlQcmVmaXg6IGtleVByZWZpeCxcbiAgICAgIGZ1bmM6IG1hcEZ1bmN0aW9uLFxuICAgICAgY29udGV4dDogbWFwQ29udGV4dCxcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCkge1xuICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuXG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCA8IFBPT0xfU0laRSkge1xuICAgIHRyYXZlcnNlQ29udGV4dFBvb2wucHVzaCh0cmF2ZXJzZUNvbnRleHQpO1xuICB9XG59XG4vKipcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICogcHJvY2Vzcy5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sIG5hbWVTb0ZhciwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkcmVuLCAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgY29udmVydGluZyBjaGlsZHJlbiB0byAnICsgJ2FuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuXG4gICAgICB7XG4gICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nICsgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS5cIiArIGFkZGVuZHVtICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuLyoqXG4gKiBUcmF2ZXJzZXMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLCBidXRcbiAqIG1pZ2h0IGFsc28gYmUgc3BlY2lmaWVkIHRocm91Z2ggYXR0cmlidXRlczpcbiAqXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sIC4uLilgXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMubGVmdFBhbmVsQ2hpbGRyZW4sIC4uLilgXG4gKlxuICogVGhlIGB0cmF2ZXJzZUNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlXG4gKiBlbnRpcmUgdHJhdmVyc2FsLiBJdCBjYW4gYmUgdXNlZCB0byBzdG9yZSBhY2N1bXVsYXRpb25zIG9yIGFueXRoaW5nIGVsc2UgdGhhdFxuICogdGhlIGNhbGxiYWNrIG1pZ2h0IGZpbmQgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBvYmplY3QuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgVG8gaW52b2tlIHVwb24gdHJhdmVyc2luZyBlYWNoIGNoaWxkLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IENvbnRleHQgZm9yIHRyYXZlcnNhbC5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBjb21wb25lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gY29tcG9uZW50IEEgY29tcG9uZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudCAhPT0gbnVsbCAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xufVxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5cblxuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG4gIHZhciBtYXBwZWRDaGlsZCA9IGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cblxuICAgIHJlc3VsdC5wdXNoKG1hcHBlZENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCBhcnJheSwgcHJlZml4LCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBlc2NhcGVkUHJlZml4ID0gJyc7XG5cbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG5cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmMsIGNvbnRleHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgbnVsbCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09IG51bGwgJiYgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVycm9yKCdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfY3RvcjogY3RvcixcbiAgICAvLyBSZWFjdCB1c2VzIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlcztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIGlmICghKGRpc3BhdGNoZXIgIT09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9mYi5tZS9ydWxlcy1vZi1ob29rcycgOiAnJyk7XG4gICAgfSAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG5cblxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICB7XG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuICB9XG5cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0pO1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChmcmFnbWVudCk7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbntcblxuICB0cnkge1xuICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICB2YXIgdGVzdE1hcCA9IG5ldyBNYXAoW1tmcm96ZW5PYmplY3QsIG51bGxdXSk7XG4gICAgdmFyIHRlc3RTZXQgPSBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTsgLy8gVGhpcyBpcyBuZWNlc3NhcnkgZm9yIFJvbGx1cCB0byBub3QgY29uc2lkZXIgdGhlc2UgdW51c2VkLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwL2lzc3Vlcy8xNzcxXG4gICAgLy8gVE9ETzogd2UgY2FuIHJlbW92ZSB0aGVzZSBpZiBSb2xsdXAgZml4ZXMgdGhlIGJ1Zy5cblxuICAgIHRlc3RNYXAuc2V0KDAsIDApO1xuICAgIHRlc3RTZXQuYWRkKDApO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG5leHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiaW1wb3J0ICcuLi9zdHlsZXMvbm9ybWFsaXplLnNjc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcclxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNy0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNy0yIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtNy0zIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNy00IS4vZ2xvYmFsLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTctMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTctMiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTctMyEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTctNCEuL2dsb2JhbC5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNy0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNy0yIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtNy0zIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNy00IS4vZ2xvYmFsLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi03LTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi03LTIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi03LTMhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi03LTQhLi9ub3JtYWxpemUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNy0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNy0yIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtNy0zIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNy00IS4vbm9ybWFsaXplLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi03LTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi03LTIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi03LTMhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi03LTQhLi9ub3JtYWxpemUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9