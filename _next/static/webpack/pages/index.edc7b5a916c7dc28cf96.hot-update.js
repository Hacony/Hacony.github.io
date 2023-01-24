webpackHotUpdate_N_E("pages/index",{

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
  title: 'Qundium Commission',
  description: 'Art commissions by Qundium! Find out more about his commission tiers and prices here',
  keywords: ['qundium', 'art', 'studio', 'drawing', 'commission'],
  url: 'https://qundium.com/commission/',
  image: {
    src: '/images/commission-preview.png',
    type: 'image/jpeg',
    width: 1200,
    height: 630
  },
  twitterImageSrc: '/images/commission-preview.png'
};
var COMMISSION_TIERS = [{
  header: 'Full Body | 145 USD',
  descPoints: ['+ 90 USD per additional character', '+ 10 USD for background, complicated character design, wings, etc'],
  gallery: ['/images/commission/fullbody-00.png', '/images/commission/fullbody-01.png', '/images/commission/fullbody-02.png', '/images/commission/fullbody-03.png', '/images/commission/fullbody-04.png', '/images/commission/fullbody-05.png', '/images/commission/fullbody-06.png', '/images/commission/fullbody-07.png', '/images/commission/fullbody-08.png', '/images/commission/fullbody-09.png', '/images/commission/fullbody-10.png', '/images/commission/fullbody-11.png', '/images/commission/fullbody-12.png', '/images/commission/fullbody-13.png', '/images/commission/fullbody-14.png', '/images/commission/fullbody-15.png', '/images/commission/fullbody-16.png', '/images/commission/fullbody-17.png', '/images/commission/fullbody-18.png'],
  galleryHeight: 'min(500px, 90vh)'
}, {
  header: 'Sequence | 390 USD',
  descPoints: ['4 scenes in one page', '+10~40 USD for complicated character design, wings, etc'],
  gallery: ['/images/commission/seq-00.png', '/images/commission/seq-01.png', '/images/commission/seq-02.png', '/images/commission/seq-03.png', '/images/commission/seq-04.png', '/images/commission/seq-05.png', '/images/commission/seq-06.png', '/images/commission/seq-07.png', '/images/commission/seq-08.png', '/images/commission/seq-09.png', '/images/commission/seq-10.png', '/images/commission/seq-11.png'],
  galleryHeight: 'min(500px, 90vh)'
}, {
  header: 'Sticker | 30+ USD',
  descPoints: ['Flat-coloured stickers for Telegram', 'Price is per sticker, maximum of 5 stickers', '+ 5-12 USD for shine/shading', '+ 5-10 USD per additional character'],
  gallery: ['/images/commission/stickers-00.png', '/images/commission/stickers-01.png', '/images/commission/stickers-02.png', '/images/commission/stickers-03.png', '/images/commission/stickers-04.png', '/images/commission/stickers-05.png', '/images/commission/stickers-06.png', '/images/commission/stickers-07.png', '/images/commission/stickers-08.png', '/images/commission/stickers-09.png', '/images/commission/stickers-10.png', '/images/commission/stickers-11.png', '/images/commission/stickers-12.png', '/images/commission/stickers-13.png', '/images/commission/stickers-14.png', '/images/commission/stickers-15.png', '/images/commission/stickers-16.png', '/images/commission/stickers-17.png', '/images/commission/stickers-18.png', '/images/commission/stickers-19.png', '/images/commission/stickers-20.png', '/images/commission/stickers-21.png', '/images/commission/stickers-22.png', '/images/commission/stickers-23.png', '/images/commission/stickers-24.png', '/images/commission/stickers-25.png', '/images/commission/stickers-26.png', '/images/commission/stickers-27.png', '/images/commission/stickers-28.png', '/images/commission/stickers-29.png', '/images/commission/stickers-30.png', '/images/commission/stickers-31.png', '/images/commission/stickers-32.png', '/images/commission/stickers-33.png', '/images/commission/stickers-34.png', '/images/commission/stickers-35.png', '/images/commission/stickers-36.png', '/images/commission/stickers-37.png', '/images/commission/stickers-38.png'],
  galleryHeight: '200px'
}, {
  header: 'Comic | 270+ USD',
  descPoints: ['250+ USD per comic pages, 2~4 pages in one commission slot', 'Price depends on story, characters, and complexity', '50+ USD for additional characters'],
  gallery: ['/images/commission/comic-00.png', '/images/commission/comic-01.png', '/images/commission/comic-02.png', '/images/commission/comic-03.png', '/images/commission/comic-04.png', '/images/commission/comic-05.png', '/images/commission/comic-06.png', '/images/commission/comic-07.png', '/images/commission/comic-08.png', '/images/commission/comic-09.png'],
  galleryHeight: 'min(500px,90vh)'
}, {
  header: 'Character Sheet | Not Available',
  descPoints: ['Front and back view', '+ 50 USD for new character designs'],
  gallery: ['/images/commission/charref-00.png', '/images/commission/charref-01.png', '/images/commission/charref-02.png', '/images/commission/charref-03.png', '/images/commission/charref-04.png', '/images/commission/charref-05.png', '/images/commission/charref-06.png'],
  galleryHeight: 'min(500px,90vh)'
}];
var willDrawList = ['Male', 'Furry', 'SFW', 'Goo Transformation', 'Latex', 'Pooltoy', 'Lope', 'Watersports', 'Ferals', 'Mecha', 'Insects'];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2NvbW1pc3Npb24tY29uc3RhbnRzLnRzeCJdLCJuYW1lcyI6WyJDT01NSVNTSU9OX1BBR0VfSU5GTyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsInVybCIsImltYWdlIiwic3JjIiwidHlwZSIsIndpZHRoIiwiaGVpZ2h0IiwidHdpdHRlckltYWdlU3JjIiwiQ09NTUlTU0lPTl9USUVSUyIsImhlYWRlciIsImRlc2NQb2ludHMiLCJnYWxsZXJ5IiwiZ2FsbGVyeUhlaWdodCIsIndpbGxEcmF3TGlzdCIsIndvbnREcmF3TGlzdCIsImNvbW1pc3Npb25Ob3RlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLG9CQUFvQixHQUFHO0FBQ2hDQyxPQUFLLEVBQUUsb0JBRHlCO0FBRWhDQyxhQUFXLEVBQUUsc0ZBRm1CO0FBR2hDQyxVQUFRLEVBQUUsQ0FBQyxTQUFELEVBQVksS0FBWixFQUFtQixRQUFuQixFQUE2QixTQUE3QixFQUF3QyxZQUF4QyxDQUhzQjtBQUloQ0MsS0FBRyxFQUFFLGlDQUoyQjtBQUtoQ0MsT0FBSyxFQUFFO0FBQ0hDLE9BQUcsRUFBRSxnQ0FERjtBQUVIQyxRQUFJLEVBQUUsWUFGSDtBQUdIQyxTQUFLLEVBQUUsSUFISjtBQUlIQyxVQUFNLEVBQUU7QUFKTCxHQUx5QjtBQVdoQ0MsaUJBQWUsRUFBRTtBQVhlLENBQTdCO0FBY0EsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FDNUI7QUFDSUMsUUFBTSxFQUFFLHFCQURaO0FBRUlDLFlBQVUsRUFBRSxDQUNSLG1DQURRLEVBRVIsbUVBRlEsQ0FGaEI7QUFNSUMsU0FBTyxFQUFFLENBQ0wsb0NBREssRUFFTCxvQ0FGSyxFQUdMLG9DQUhLLEVBSUwsb0NBSkssRUFLTCxvQ0FMSyxFQU1MLG9DQU5LLEVBT0wsb0NBUEssRUFRTCxvQ0FSSyxFQVNMLG9DQVRLLEVBVUwsb0NBVkssRUFXTCxvQ0FYSyxFQVlMLG9DQVpLLEVBYUwsb0NBYkssRUFjTCxvQ0FkSyxFQWVMLG9DQWZLLEVBZ0JMLG9DQWhCSyxFQWlCTCxvQ0FqQkssRUFrQkwsb0NBbEJLLEVBbUJMLG9DQW5CSyxDQU5iO0FBMkJJQyxlQUFhLEVBQUU7QUEzQm5CLENBRDRCLEVBOEI1QjtBQUNJSCxRQUFNLEVBQUUsb0JBRFo7QUFFSUMsWUFBVSxFQUFFLENBQ1Isc0JBRFEsRUFFUix5REFGUSxDQUZoQjtBQU1JQyxTQUFPLEVBQUUsQ0FDTCwrQkFESyxFQUVMLCtCQUZLLEVBR0wsK0JBSEssRUFJTCwrQkFKSyxFQUtMLCtCQUxLLEVBTUwsK0JBTkssRUFPTCwrQkFQSyxFQVFMLCtCQVJLLEVBU0wsK0JBVEssRUFVTCwrQkFWSyxFQVdMLCtCQVhLLEVBWUwsK0JBWkssQ0FOYjtBQW9CSUMsZUFBYSxFQUFFO0FBcEJuQixDQTlCNEIsRUFvRDVCO0FBQ0lILFFBQU0sRUFBRSxtQkFEWjtBQUVJQyxZQUFVLEVBQUUsQ0FDUixxQ0FEUSxFQUVSLDZDQUZRLEVBR1IsOEJBSFEsRUFJUixxQ0FKUSxDQUZoQjtBQVFJQyxTQUFPLEVBQUUsQ0FDTCxvQ0FESyxFQUVMLG9DQUZLLEVBR0wsb0NBSEssRUFJTCxvQ0FKSyxFQUtMLG9DQUxLLEVBTUwsb0NBTkssRUFPTCxvQ0FQSyxFQVFMLG9DQVJLLEVBU0wsb0NBVEssRUFVTCxvQ0FWSyxFQVdMLG9DQVhLLEVBWUwsb0NBWkssRUFhTCxvQ0FiSyxFQWNMLG9DQWRLLEVBZUwsb0NBZkssRUFnQkwsb0NBaEJLLEVBaUJMLG9DQWpCSyxFQWtCTCxvQ0FsQkssRUFtQkwsb0NBbkJLLEVBb0JMLG9DQXBCSyxFQXFCTCxvQ0FyQkssRUFzQkwsb0NBdEJLLEVBdUJMLG9DQXZCSyxFQXdCTCxvQ0F4QkssRUF5Qkwsb0NBekJLLEVBMEJMLG9DQTFCSyxFQTJCTCxvQ0EzQkssRUE0Qkwsb0NBNUJLLEVBNkJMLG9DQTdCSyxFQThCTCxvQ0E5QkssRUErQkwsb0NBL0JLLEVBZ0NMLG9DQWhDSyxFQWlDTCxvQ0FqQ0ssRUFrQ0wsb0NBbENLLEVBbUNMLG9DQW5DSyxFQW9DTCxvQ0FwQ0ssRUFxQ0wsb0NBckNLLEVBc0NMLG9DQXRDSyxFQXVDTCxvQ0F2Q0ssQ0FSYjtBQWlESUMsZUFBYSxFQUFFO0FBakRuQixDQXBENEIsRUF1RzVCO0FBQ0lILFFBQU0sRUFBRSxrQkFEWjtBQUVJQyxZQUFVLEVBQUUsQ0FDUiw0REFEUSxFQUVSLG9EQUZRLEVBR1IsbUNBSFEsQ0FGaEI7QUFPSUMsU0FBTyxFQUFFLENBQ0wsaUNBREssRUFFTCxpQ0FGSyxFQUdMLGlDQUhLLEVBSUwsaUNBSkssRUFLTCxpQ0FMSyxFQU1MLGlDQU5LLEVBT0wsaUNBUEssRUFRTCxpQ0FSSyxFQVNMLGlDQVRLLEVBVUwsaUNBVkssQ0FQYjtBQW1CSUMsZUFBYSxFQUFFO0FBbkJuQixDQXZHNEIsRUE0SDVCO0FBQ0lILFFBQU0sRUFBRSxpQ0FEWjtBQUVJQyxZQUFVLEVBQUUsQ0FDUixxQkFEUSxFQUVSLG9DQUZRLENBRmhCO0FBTUlDLFNBQU8sRUFBRSxDQUNMLG1DQURLLEVBRUwsbUNBRkssRUFHTCxtQ0FISyxFQUlMLG1DQUpLLEVBS0wsbUNBTEssRUFNTCxtQ0FOSyxFQU9MLG1DQVBLLENBTmI7QUFlSUMsZUFBYSxFQUFFO0FBZm5CLENBNUg0QixDQUF6QjtBQStJQSxJQUFNQyxZQUFZLEdBQUcsQ0FDeEIsTUFEd0IsRUFFeEIsT0FGd0IsRUFHeEIsS0FId0IsRUFJeEIsb0JBSndCLEVBS3hCLE9BTHdCLEVBTXhCLFNBTndCLEVBT3hCLE1BUHdCLEVBUXhCLGFBUndCLEVBU3hCLFFBVHdCLEVBVXhCLE9BVndCLEVBV3hCLFNBWHdCLENBQXJCO0FBY0EsSUFBTUMsWUFBWSxHQUFHLENBQ3hCLFFBRHdCLEVBRXhCLE9BRndCLEVBR3hCLHNCQUh3QixFQUl4QixPQUp3QixFQUt4QixpQkFMd0IsRUFNeEIsWUFOd0IsQ0FBckI7QUFTQSxJQUFNQyxlQUFlLEdBQUcsQ0FDM0Isd0NBRDJCLEVBRTNCLGtHQUYyQixFQUczQiw2REFIMkIsQ0FBeEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWRjN2I1YTkxNmM3ZGMyOGNmOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1pc3Npb25UaWVyUHJvcHMgfSBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UtY29tbWlzc2lvbi9wYWdlLWNvbW1pc3Npb24nO1xyXG5pbXBvcnQgeyBTaXRlSGVhZFByb3BzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vc2l0ZS1oZWFkJztcclxuXHJcbmV4cG9ydCBjb25zdCBDT01NSVNTSU9OX1BBR0VfSU5GTyA9IHtcclxuICAgIHRpdGxlOiAnUXVuZGl1bSBDb21taXNzaW9uJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnQXJ0IGNvbW1pc3Npb25zIGJ5IFF1bmRpdW0hIEZpbmQgb3V0IG1vcmUgYWJvdXQgaGlzIGNvbW1pc3Npb24gdGllcnMgYW5kIHByaWNlcyBoZXJlJyxcclxuICAgIGtleXdvcmRzOiBbJ3F1bmRpdW0nLCAnYXJ0JywgJ3N0dWRpbycsICdkcmF3aW5nJywgJ2NvbW1pc3Npb24nXSxcclxuICAgIHVybDogJ2h0dHBzOi8vcXVuZGl1bS5jb20vY29tbWlzc2lvbi8nLFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgICBzcmM6ICcvaW1hZ2VzL2NvbW1pc3Npb24tcHJldmlldy5wbmcnLFxyXG4gICAgICAgIHR5cGU6ICdpbWFnZS9qcGVnJyxcclxuICAgICAgICB3aWR0aDogMTIwMCxcclxuICAgICAgICBoZWlnaHQ6IDYzMCxcclxuICAgIH0sXHJcbiAgICB0d2l0dGVySW1hZ2VTcmM6ICcvaW1hZ2VzL2NvbW1pc3Npb24tcHJldmlldy5wbmcnLFxyXG59IGFzIFNpdGVIZWFkUHJvcHM7XHJcblxyXG5leHBvcnQgY29uc3QgQ09NTUlTU0lPTl9USUVSUyA9IFtcclxuICAgIHtcclxuICAgICAgICBoZWFkZXI6ICdGdWxsIEJvZHkgfCAxNDUgVVNEJyxcclxuICAgICAgICBkZXNjUG9pbnRzOiBbXHJcbiAgICAgICAgICAgICcrIDkwIFVTRCBwZXIgYWRkaXRpb25hbCBjaGFyYWN0ZXInLFxyXG4gICAgICAgICAgICAnKyAxMCBVU0QgZm9yIGJhY2tncm91bmQsIGNvbXBsaWNhdGVkIGNoYXJhY3RlciBkZXNpZ24sIHdpbmdzLCBldGMnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ2FsbGVyeTogW1xyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTAwLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wMi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTAzLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDQucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wNS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTA2LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDcucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wOC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTA5LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTEyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTE1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTYucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xNy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTE4LnBuZycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5SGVpZ2h0OiAnbWluKDUwMHB4LCA5MHZoKScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhlYWRlcjogJ1NlcXVlbmNlIHwgMzkwIFVTRCcsXHJcbiAgICAgICAgZGVzY1BvaW50czogW1xyXG4gICAgICAgICAgICAnNCBzY2VuZXMgaW4gb25lIHBhZ2UnLFxyXG4gICAgICAgICAgICAnKzEwfjQwIFVTRCBmb3IgY29tcGxpY2F0ZWQgY2hhcmFjdGVyIGRlc2lnbiwgd2luZ3MsIGV0YydcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDQucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDUucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDYucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDcucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDgucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDkucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMTAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMTEucG5nJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnlIZWlnaHQ6ICdtaW4oNTAwcHgsIDkwdmgpJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGVhZGVyOiAnU3RpY2tlciB8IDMwKyBVU0QnLFxyXG4gICAgICAgIGRlc2NQb2ludHM6IFtcclxuICAgICAgICAgICAgJ0ZsYXQtY29sb3VyZWQgc3RpY2tlcnMgZm9yIFRlbGVncmFtJyxcclxuICAgICAgICAgICAgJ1ByaWNlIGlzIHBlciBzdGlja2VyLCBtYXhpbXVtIG9mIDUgc3RpY2tlcnMnLFxyXG4gICAgICAgICAgICAnKyA1LTEyIFVTRCBmb3Igc2hpbmUvc2hhZGluZycsXHJcbiAgICAgICAgICAgICcrIDUtMTAgVVNEIHBlciBhZGRpdGlvbmFsIGNoYXJhY3RlcicsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTAyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTA1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDYucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wNy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTA4LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDkucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTExLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTE0LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTUucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xNi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTE3LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTgucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xOS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTIwLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yMi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTIzLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjQucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yNS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTI2LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjcucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yOC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTI5LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMzAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0zMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTMyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMzMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0zNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTM1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMzYucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0zNy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTM4LnBuZycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5SGVpZ2h0OiAnMjAwcHgnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoZWFkZXI6ICdDb21pYyB8IDI3MCsgVVNEJyxcclxuICAgICAgICBkZXNjUG9pbnRzOiBbXHJcbiAgICAgICAgICAgICcyNTArIFVTRCBwZXIgY29taWMgcGFnZXMsIDJ+NCBwYWdlcyBpbiBvbmUgY29tbWlzc2lvbiBzbG90JyxcclxuICAgICAgICAgICAgJ1ByaWNlIGRlcGVuZHMgb24gc3RvcnksIGNoYXJhY3RlcnMsIGFuZCBjb21wbGV4aXR5JyxcclxuICAgICAgICAgICAgJzUwKyBVU0QgZm9yIGFkZGl0aW9uYWwgY2hhcmFjdGVycycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY29taWMtMDAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jb21pYy0wMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NvbWljLTAyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY29taWMtMDMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jb21pYy0wNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NvbWljLTA1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY29taWMtMDYucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jb21pYy0wNy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NvbWljLTA4LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY29taWMtMDkucG5nJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnlIZWlnaHQ6ICdtaW4oNTAwcHgsOTB2aCknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoZWFkZXI6ICdDaGFyYWN0ZXIgU2hlZXQgfCBOb3QgQXZhaWxhYmxlJyxcclxuICAgICAgICBkZXNjUG9pbnRzOiBbXHJcbiAgICAgICAgICAgICdGcm9udCBhbmQgYmFjayB2aWV3JyxcclxuICAgICAgICAgICAgJysgNTAgVVNEIGZvciBuZXcgY2hhcmFjdGVyIGRlc2lnbnMnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY2hhcnJlZi0wMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NoYXJyZWYtMDEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jaGFycmVmLTAyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY2hhcnJlZi0wMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NoYXJyZWYtMDQucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jaGFycmVmLTA1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY2hhcnJlZi0wNi5wbmcnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ2FsbGVyeUhlaWdodDogJ21pbig1MDBweCw5MHZoKScsXHJcbiAgICB9LFxyXG5dIGFzIENvbW1pc3Npb25UaWVyUHJvcHNbXTtcclxuXHJcbmV4cG9ydCBjb25zdCB3aWxsRHJhd0xpc3QgPSBbXHJcbiAgICAnTWFsZScsXHJcbiAgICAnRnVycnknLFxyXG4gICAgJ1NGVycsXHJcbiAgICAnR29vIFRyYW5zZm9ybWF0aW9uJyxcclxuICAgICdMYXRleCcsXHJcbiAgICAnUG9vbHRveScsXHJcbiAgICAnTG9wZScsXHJcbiAgICAnV2F0ZXJzcG9ydHMnLFxyXG4gICAgJ0ZlcmFscycsXHJcbiAgICAnTWVjaGEnLFxyXG4gICAgJ0luc2VjdHMnLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdvbnREcmF3TGlzdCA9IFtcclxuICAgICdGZW1hbGUnLFxyXG4gICAgJ0h1bWFuJyxcclxuICAgICdVbmRlcmFnZWQgY2hhcmFjdGVycycsXHJcbiAgICAnQmxvb2QnLFxyXG4gICAgJ0ZhbnRhc3kgQXJtb3VycycsXHJcbiAgICAnUHJvcGFnYW5kYScsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWlzc2lvbk5vdGVzID0gW1xyXG4gICAgJ1BheW1lbnRzIG1hZGUgbXVzdCBiZSBpbiBVU0Qgb24gUGF5cGFsJyxcclxuICAgICdDb21taXNzaW9ucyBhcmUgcG9zdGVkIHRvIFBhdHJlb24gZmlyc3QuIFBsZWFzZSB3YWl0IGZvciAxIG1vbnRoIGJlZm9yZSB1cGxvYWRpbmcgdGhlIGNvbW1pc3Npb24nLFxyXG4gICAgJ0NvbW1pc3Npb25zIGFyZSB0byBiZSB1c2VkIGZvciBub24tY29tbWVyY2lhbCBwdXJwb3NlcyBvbmx5JyxcclxuXTsiXSwic291cmNlUm9vdCI6IiJ9