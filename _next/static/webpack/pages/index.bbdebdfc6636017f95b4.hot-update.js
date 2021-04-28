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
  gallery: ['/images/commission/fullbody-00.png', '/images/commission/fullbody-01.png', '/images/commission/fullbody-02.png', '/images/commission/fullbody-03.png', '/images/commission/fullbody-04.png', '/images/commission/fullbody-05.png', '/images/commission/fullbody-06.png', '/images/commission/fullbody-07.png', '/images/commission/fullbody-08.png', '/images/commission/fullbody-09.png', '/images/commission/fullbody-10.png', '/images/commission/fullbody-11.png', '/images/commission/fullbody-12.png', '/images/commission/fullbody-13.png', '/images/commission/fullbody-14.png', '/images/commission/fullbody-15.png', '/images/commission/fullbody-16.png', '/images/commission/fullbody-17.png'],
  galleryHeight: 'min(500px, 90vh)',
  galleryAspectRatio: 0.73
}, {
  header: 'Sequence | 280 USD',
  descPoints: ['4-5 scenes in one page'],
  gallery: ['/images/commission/seq-00.png', '/images/commission/seq-01.png', '/images/commission/seq-02.png', '/images/commission/seq-03.png', '/images/commission/seq-04.png', '/images/commission/seq-05.png', '/images/commission/seq-06.png', '/images/commission/seq-07.png', '/images/commission/seq-08.png', '/images/commission/seq-09.png'],
  galleryHeight: 'min(500px, 90vh)',
  galleryAspectRatio: 0.73
}, {
  header: 'Sticker | 25~35 USD',
  descPoints: ['Flat-coloured stickers for Telegram', 'Price is per sticker, maximum of 6 stickers', '+ 5-12 USD for shine/shading', '+ 5-10 USD per additional character'],
  gallery: ['/images/commission/stickers-00.png', '/images/commission/stickers-01.png', '/images/commission/stickers-02.png', '/images/commission/stickers-03.png', '/images/commission/stickers-04.png', '/images/commission/stickers-05.png', '/images/commission/stickers-06.png', '/images/commission/stickers-07.png', '/images/commission/stickers-08.png', '/images/commission/stickers-09.png', '/images/commission/stickers-10.png', '/images/commission/stickers-11.png', '/images/commission/stickers-12.png', '/images/commission/stickers-13.png', '/images/commission/stickers-14.png', '/images/commission/stickers-15.png', '/images/commission/stickers-16.png', '/images/commission/stickers-17.png', '/images/commission/stickers-18.png', '/images/commission/stickers-19.png', '/images/commission/stickers-20.png', '/images/commission/stickers-21.png', '/images/commission/stickers-22.png', '/images/commission/stickers-23.png', '/images/commission/stickers-24.png', '/images/commission/stickers-25.png', '/images/commission/stickers-26.png', '/images/commission/stickers-27.png', '/images/commission/stickers-28.png', '/images/commission/stickers-29.png', '/images/commission/stickers-30.png', '/images/commission/stickers-31.png', '/images/commission/stickers-32.png', '/images/commission/stickers-33.png'],
  galleryHeight: '200px',
  galleryAspectRatio: 1
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2NvbW1pc3Npb24tY29uc3RhbnRzLnRzeCJdLCJuYW1lcyI6WyJDT01NSVNTSU9OX1BBR0VfSU5GTyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsInVybCIsImltYWdlIiwic3JjIiwidHlwZSIsIndpZHRoIiwiaGVpZ2h0IiwidHdpdHRlckltYWdlU3JjIiwiQ09NTUlTU0lPTl9USUVSUyIsImhlYWRlciIsImRlc2NQb2ludHMiLCJnYWxsZXJ5IiwiZ2FsbGVyeUhlaWdodCIsImdhbGxlcnlBc3BlY3RSYXRpbyIsIndpbGxEcmF3TGlzdCIsIndvbnREcmF3TGlzdCIsImNvbW1pc3Npb25Ob3RlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLG9CQUFvQixHQUFHO0FBQ2hDQyxPQUFLLEVBQUUsNkJBRHlCO0FBRWhDQyxhQUFXLEVBQUUscUZBRm1CO0FBR2hDQyxVQUFRLEVBQUUsQ0FBQyxRQUFELEVBQVcsU0FBWCxFQUFzQixXQUF0QixFQUFtQyxjQUFuQyxFQUFtRCxjQUFuRCxFQUFtRSxZQUFuRSxFQUFpRixLQUFqRixFQUF3RixRQUF4RixFQUFrRyxTQUFsRyxFQUE2RyxZQUE3RyxDQUhzQjtBQUloQ0MsS0FBRyxFQUFFLHVDQUoyQjtBQUtoQ0MsT0FBSyxFQUFFO0FBQ0hDLE9BQUcsRUFBRSxnQ0FERjtBQUVIQyxRQUFJLEVBQUUsWUFGSDtBQUdIQyxTQUFLLEVBQUUsSUFISjtBQUlIQyxVQUFNLEVBQUU7QUFKTCxHQUx5QjtBQVdoQ0MsaUJBQWUsRUFBRTtBQVhlLENBQTdCO0FBY0EsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FDNUI7QUFDSUMsUUFBTSxFQUFFLHFCQURaO0FBRUlDLFlBQVUsRUFBRSxDQUNSLG1DQURRLEVBRVIsbUVBRlEsQ0FGaEI7QUFNSUMsU0FBTyxFQUFFLENBQ0wsb0NBREssRUFFTCxvQ0FGSyxFQUdMLG9DQUhLLEVBSUwsb0NBSkssRUFLTCxvQ0FMSyxFQU1MLG9DQU5LLEVBT0wsb0NBUEssRUFRTCxvQ0FSSyxFQVNMLG9DQVRLLEVBVUwsb0NBVkssRUFXTCxvQ0FYSyxFQVlMLG9DQVpLLEVBYUwsb0NBYkssRUFjTCxvQ0FkSyxFQWVMLG9DQWZLLEVBZ0JMLG9DQWhCSyxFQWlCTCxvQ0FqQkssRUFrQkwsb0NBbEJLLENBTmI7QUEwQklDLGVBQWEsRUFBRSxrQkExQm5CO0FBMkJJQyxvQkFBa0IsRUFBRTtBQTNCeEIsQ0FENEIsRUE4QjVCO0FBQ0lKLFFBQU0sRUFBRSxvQkFEWjtBQUVJQyxZQUFVLEVBQUUsQ0FDUix3QkFEUSxDQUZoQjtBQUtJQyxTQUFPLEVBQUUsQ0FDTCwrQkFESyxFQUVMLCtCQUZLLEVBR0wsK0JBSEssRUFJTCwrQkFKSyxFQUtMLCtCQUxLLEVBTUwsK0JBTkssRUFPTCwrQkFQSyxFQVFMLCtCQVJLLEVBU0wsK0JBVEssRUFVTCwrQkFWSyxDQUxiO0FBaUJJQyxlQUFhLEVBQUUsa0JBakJuQjtBQWtCSUMsb0JBQWtCLEVBQUU7QUFsQnhCLENBOUI0QixFQWtENUI7QUFDSUosUUFBTSxFQUFFLHFCQURaO0FBRUlDLFlBQVUsRUFBRSxDQUNSLHFDQURRLEVBRVIsNkNBRlEsRUFHUiw4QkFIUSxFQUlSLHFDQUpRLENBRmhCO0FBUUlDLFNBQU8sRUFBRSxDQUNMLG9DQURLLEVBRUwsb0NBRkssRUFHTCxvQ0FISyxFQUlMLG9DQUpLLEVBS0wsb0NBTEssRUFNTCxvQ0FOSyxFQU9MLG9DQVBLLEVBUUwsb0NBUkssRUFTTCxvQ0FUSyxFQVVMLG9DQVZLLEVBV0wsb0NBWEssRUFZTCxvQ0FaSyxFQWFMLG9DQWJLLEVBY0wsb0NBZEssRUFlTCxvQ0FmSyxFQWdCTCxvQ0FoQkssRUFpQkwsb0NBakJLLEVBa0JMLG9DQWxCSyxFQW1CTCxvQ0FuQkssRUFvQkwsb0NBcEJLLEVBcUJMLG9DQXJCSyxFQXNCTCxvQ0F0QkssRUF1Qkwsb0NBdkJLLEVBd0JMLG9DQXhCSyxFQXlCTCxvQ0F6QkssRUEwQkwsb0NBMUJLLEVBMkJMLG9DQTNCSyxFQTRCTCxvQ0E1QkssRUE2Qkwsb0NBN0JLLEVBOEJMLG9DQTlCSyxFQStCTCxvQ0EvQkssRUFnQ0wsb0NBaENLLEVBaUNMLG9DQWpDSyxFQWtDTCxvQ0FsQ0ssQ0FSYjtBQTRDSUMsZUFBYSxFQUFFLE9BNUNuQjtBQTZDSUMsb0JBQWtCLEVBQUU7QUE3Q3hCLENBbEQ0QixDQUF6QjtBQW1HQSxJQUFNQyxZQUFZLEdBQUcsQ0FDeEIsTUFEd0IsRUFFeEIsT0FGd0IsRUFHeEIsTUFId0IsRUFJeEIsb0JBSndCLEVBS3hCLE9BTHdCLEVBTXhCLFNBTndCLEVBT3hCLFNBUHdCLEVBUXhCLGFBUndCLEVBU3hCLFFBVHdCLEVBVXhCLE9BVndCLEVBV3hCLFNBWHdCLENBQXJCO0FBY0EsSUFBTUMsWUFBWSxHQUFHLENBQ3hCLFFBRHdCLEVBRXhCLE9BRndCLEVBR3hCLHNCQUh3QixFQUl4QixPQUp3QixFQUt4QixpQkFMd0IsRUFNeEIsWUFOd0IsQ0FBckI7QUFTQSxJQUFNQyxlQUFlLEdBQUcsQ0FDM0Isd0NBRDJCLEVBRTNCLGtHQUYyQixFQUczQiw2REFIMkIsQ0FBeEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmJkZWJkZmM2NjM2MDE3Zjk1YjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1pc3Npb25UaWVyUHJvcHMgfSBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UtY29tbWlzc2lvbi9wYWdlLWNvbW1pc3Npb24nO1xyXG5pbXBvcnQgeyBTaXRlSGVhZFByb3BzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vc2l0ZS1oZWFkJztcclxuXHJcbmV4cG9ydCBjb25zdCBDT01NSVNTSU9OX1BBR0VfSU5GTyA9IHtcclxuICAgIHRpdGxlOiAnQ29tbWlzc2lvbnMgLSBIYWNvbnkgU3R1ZGlvJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnQXJ0IGNvbW1pc3Npb25zIGJ5IEhhY29ueSEgRmluZCBvdXQgbW9yZSBhYm91dCBoaXMgY29tbWlzc2lvbiB0aWVycyBhbmQgcHJpY2VzIGhlcmUnLFxyXG4gICAga2V5d29yZHM6IFsnaGFjb255JywgJ3F1bmRpdW0nLCAnY29jb3NoYXJrJywgJ2hvcm55c2hhcmthdCcsICd5ZXdvbmxlZTE5OTknLCAnb2Rpb3VzYmlyZCcsICdhcnQnLCAnc3R1ZGlvJywgJ2RyYXdpbmcnLCAnY29tbWlzc2lvbiddLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly9oYWNvbnktc3R1ZGlvLmNvbS9jb21taXNzaW9uLycsXHJcbiAgICBpbWFnZToge1xyXG4gICAgICAgIHNyYzogJy9pbWFnZXMvY29tbWlzc2lvbi1wcmV2aWV3LnBuZycsXHJcbiAgICAgICAgdHlwZTogJ2ltYWdlL2pwZWcnLFxyXG4gICAgICAgIHdpZHRoOiAxMjAwLFxyXG4gICAgICAgIGhlaWdodDogNjMwLFxyXG4gICAgfSxcclxuICAgIHR3aXR0ZXJJbWFnZVNyYzogJy9pbWFnZXMvY29tbWlzc2lvbi1wcmV2aWV3LnBuZycsXHJcbn0gYXMgU2l0ZUhlYWRQcm9wcztcclxuXHJcbmV4cG9ydCBjb25zdCBDT01NSVNTSU9OX1RJRVJTID0gW1xyXG4gICAge1xyXG4gICAgICAgIGhlYWRlcjogJ0Z1bGwgQm9keSB8IDEwMCBVU0QnLFxyXG4gICAgICAgIGRlc2NQb2ludHM6IFtcclxuICAgICAgICAgICAgJysgODAgVVNEIHBlciBhZGRpdGlvbmFsIGNoYXJhY3RlcicsXHJcbiAgICAgICAgICAgICcrIDEwIFVTRCBmb3IgYmFja2dyb3VuZCwgY29tcGxpY2F0ZWQgY2hhcmFjdGVyIGRlc2lnbiwgd2luZ3MsIGV0YycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTAyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTA1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDYucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wNy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTA4LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDkucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTExLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTE0LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTUucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xNi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTE3LnBuZycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5SGVpZ2h0OiAnbWluKDUwMHB4LCA5MHZoKScsXHJcbiAgICAgICAgZ2FsbGVyeUFzcGVjdFJhdGlvOiAwLjczXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhlYWRlcjogJ1NlcXVlbmNlIHwgMjgwIFVTRCcsXHJcbiAgICAgICAgZGVzY1BvaW50czogW1xyXG4gICAgICAgICAgICAnNC01IHNjZW5lcyBpbiBvbmUgcGFnZSdcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDQucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDUucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDYucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDcucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDgucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDkucG5nJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnlIZWlnaHQ6ICdtaW4oNTAwcHgsIDkwdmgpJyxcclxuICAgICAgICBnYWxsZXJ5QXNwZWN0UmF0aW86IDAuNzNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGVhZGVyOiAnU3RpY2tlciB8IDI1fjM1IFVTRCcsXHJcbiAgICAgICAgZGVzY1BvaW50czogW1xyXG4gICAgICAgICAgICAnRmxhdC1jb2xvdXJlZCBzdGlja2VycyBmb3IgVGVsZWdyYW0nLFxyXG4gICAgICAgICAgICAnUHJpY2UgaXMgcGVyIHN0aWNrZXIsIG1heGltdW0gb2YgNiBzdGlja2VycycsXHJcbiAgICAgICAgICAgICcrIDUtMTIgVVNEIGZvciBzaGluZS9zaGFkaW5nJyxcclxuICAgICAgICAgICAgJysgNS0xMCBVU0QgcGVyIGFkZGl0aW9uYWwgY2hhcmFjdGVyJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTAxLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTA0LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDUucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wNi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTA3LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDgucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wOS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTEwLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xMi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTEzLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTQucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xNS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTE2LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTcucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xOC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTE5LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTIyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTI1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjYucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yNy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTI4LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjkucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0zMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTMxLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMzIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0zMy5wbmcnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ2FsbGVyeUhlaWdodDogJzIwMHB4JyxcclxuICAgICAgICBnYWxsZXJ5QXNwZWN0UmF0aW86IDFcclxuICAgIH0sXHJcbl0gYXMgQ29tbWlzc2lvblRpZXJQcm9wc1tdO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpbGxEcmF3TGlzdCA9IFtcclxuICAgICdNYWxlJyxcclxuICAgICdGdXJyeScsXHJcbiAgICAnTlNGVycsXHJcbiAgICAnR29vIFRyYW5zZm9ybWF0aW9uJyxcclxuICAgICdMYXRleCcsXHJcbiAgICAnUG9vbHRveScsXHJcbiAgICAnQm9uZGFnZScsXHJcbiAgICAnV2F0ZXJzcG9ydHMnLFxyXG4gICAgJ0ZlcmFscycsXHJcbiAgICAnTWVjaGEnLFxyXG4gICAgJ0luc2VjdHMnLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdvbnREcmF3TGlzdCA9IFtcclxuICAgICdGZW1hbGUnLFxyXG4gICAgJ0h1bWFuJyxcclxuICAgICdVbmRlcmFnZWQgY2hhcmFjdGVycycsXHJcbiAgICAnQmxvb2QnLFxyXG4gICAgJ0ZhbnRhc3kgQXJtb3VycycsXHJcbiAgICAnUHJvcGFnYW5kYScsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWlzc2lvbk5vdGVzID0gW1xyXG4gICAgJ1BheW1lbnRzIG1hZGUgbXVzdCBiZSBpbiBVU0Qgb24gUGF5cGFsJyxcclxuICAgICdDb21taXNzaW9ucyBhcmUgcG9zdGVkIHRvIFBhdHJlb24gZmlyc3QuIFBsZWFzZSB3YWl0IGZvciAxIG1vbnRoIGJlZm9yZSB1cGxvYWRpbmcgdGhlIGNvbW1pc3Npb24nLFxyXG4gICAgJ0NvbW1pc3Npb25zIGFyZSB0byBiZSB1c2VkIGZvciBub24tY29tbWVyY2lhbCBwdXJwb3NlcyBvbmx5JyxcclxuXTsiXSwic291cmNlUm9vdCI6IiJ9