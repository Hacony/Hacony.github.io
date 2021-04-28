webpackHotUpdate_N_E("pages/commission",{

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
  description: 'Art commissions by Hacony! Find out more about commission tiers and prices here',
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
  gallery: ['/images/commission/fullbody-00.png', '/images/commission/fullbody-01.png', '/images/commission/fullbody-02.png', '/images/commission/fullbody-03.png', '/images/commission/fullbody-04.png', '/images/commission/fullbody-05.png', '/images/commission/fullbody-06.png', '/images/commission/fullbody-07.png', '/images/commission/fullbody-08.png', '/images/commission/fullbody-09.png', '/images/commission/fullbody-10.png', '/images/commission/fullbody-11.png', '/images/commission/fullbody-12.png', '/images/commission/fullbody-13.png', '/images/commission/fullbody-14.png', '/images/commission/fullbody-15.png', '/images/commission/fullbody-16.png'],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2NvbW1pc3Npb24tY29uc3RhbnRzLnRzeCJdLCJuYW1lcyI6WyJDT01NSVNTSU9OX1BBR0VfSU5GTyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsInVybCIsImltYWdlIiwic3JjIiwidHlwZSIsIndpZHRoIiwiaGVpZ2h0IiwidHdpdHRlckltYWdlU3JjIiwiQ09NTUlTU0lPTl9USUVSUyIsImhlYWRlciIsImRlc2NQb2ludHMiLCJnYWxsZXJ5IiwiZ2FsbGVyeUhlaWdodCIsImdhbGxlcnlBc3BlY3RSYXRpbyIsIndpbGxEcmF3TGlzdCIsIndvbnREcmF3TGlzdCIsImNvbW1pc3Npb25Ob3RlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLG9CQUFvQixHQUFHO0FBQ2hDQyxPQUFLLEVBQUUsNkJBRHlCO0FBRWhDQyxhQUFXLEVBQUUsaUZBRm1CO0FBR2hDQyxVQUFRLEVBQUUsQ0FBQyxRQUFELEVBQVcsU0FBWCxFQUFzQixXQUF0QixFQUFtQyxjQUFuQyxFQUFtRCxjQUFuRCxFQUFtRSxZQUFuRSxFQUFpRixLQUFqRixFQUF3RixRQUF4RixFQUFrRyxTQUFsRyxFQUE2RyxZQUE3RyxDQUhzQjtBQUloQ0MsS0FBRyxFQUFFLHVDQUoyQjtBQUtoQ0MsT0FBSyxFQUFFO0FBQ0hDLE9BQUcsRUFBRSxnQ0FERjtBQUVIQyxRQUFJLEVBQUUsWUFGSDtBQUdIQyxTQUFLLEVBQUUsSUFISjtBQUlIQyxVQUFNLEVBQUU7QUFKTCxHQUx5QjtBQVdoQ0MsaUJBQWUsRUFBRTtBQVhlLENBQTdCO0FBY0EsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FDNUI7QUFDSUMsUUFBTSxFQUFFLHFCQURaO0FBRUlDLFlBQVUsRUFBRSxDQUNSLG1DQURRLEVBRVIsbUVBRlEsQ0FGaEI7QUFNSUMsU0FBTyxFQUFFLENBQ0wsb0NBREssRUFFTCxvQ0FGSyxFQUdMLG9DQUhLLEVBSUwsb0NBSkssRUFLTCxvQ0FMSyxFQU1MLG9DQU5LLEVBT0wsb0NBUEssRUFRTCxvQ0FSSyxFQVNMLG9DQVRLLEVBVUwsb0NBVkssRUFXTCxvQ0FYSyxFQVlMLG9DQVpLLEVBYUwsb0NBYkssRUFjTCxvQ0FkSyxFQWVMLG9DQWZLLEVBZ0JMLG9DQWhCSyxFQWlCTCxvQ0FqQkssQ0FOYjtBQXlCSUMsZUFBYSxFQUFFLGtCQXpCbkI7QUEwQklDLG9CQUFrQixFQUFFO0FBMUJ4QixDQUQ0QixFQTZCNUI7QUFDSUosUUFBTSxFQUFFLG9CQURaO0FBRUlDLFlBQVUsRUFBRSxDQUNSLHdCQURRLENBRmhCO0FBS0lDLFNBQU8sRUFBRSxDQUNMLCtCQURLLEVBRUwsK0JBRkssRUFHTCwrQkFISyxFQUlMLCtCQUpLLEVBS0wsK0JBTEssRUFNTCwrQkFOSyxFQU9MLCtCQVBLLEVBUUwsK0JBUkssRUFTTCwrQkFUSyxFQVVMLCtCQVZLLENBTGI7QUFpQklDLGVBQWEsRUFBRSxrQkFqQm5CO0FBa0JJQyxvQkFBa0IsRUFBRTtBQWxCeEIsQ0E3QjRCLEVBaUQ1QjtBQUNJSixRQUFNLEVBQUUscUJBRFo7QUFFSUMsWUFBVSxFQUFFLENBQ1IscUNBRFEsRUFFUiw2Q0FGUSxFQUdSLDhCQUhRLEVBSVIscUNBSlEsQ0FGaEI7QUFRSUMsU0FBTyxFQUFFLENBQ0wsb0NBREssRUFFTCxvQ0FGSyxFQUdMLG9DQUhLLEVBSUwsb0NBSkssRUFLTCxvQ0FMSyxFQU1MLG9DQU5LLEVBT0wsb0NBUEssRUFRTCxvQ0FSSyxFQVNMLG9DQVRLLEVBVUwsb0NBVkssRUFXTCxvQ0FYSyxFQVlMLG9DQVpLLEVBYUwsb0NBYkssRUFjTCxvQ0FkSyxFQWVMLG9DQWZLLEVBZ0JMLG9DQWhCSyxFQWlCTCxvQ0FqQkssRUFrQkwsb0NBbEJLLEVBbUJMLG9DQW5CSyxFQW9CTCxvQ0FwQkssRUFxQkwsb0NBckJLLEVBc0JMLG9DQXRCSyxFQXVCTCxvQ0F2QkssRUF3Qkwsb0NBeEJLLEVBeUJMLG9DQXpCSyxFQTBCTCxvQ0ExQkssRUEyQkwsb0NBM0JLLEVBNEJMLG9DQTVCSyxFQTZCTCxvQ0E3QkssRUE4Qkwsb0NBOUJLLEVBK0JMLG9DQS9CSyxFQWdDTCxvQ0FoQ0ssRUFpQ0wsb0NBakNLLEVBa0NMLG9DQWxDSyxDQVJiO0FBNENJQyxlQUFhLEVBQUUsT0E1Q25CO0FBNkNJQyxvQkFBa0IsRUFBRTtBQTdDeEIsQ0FqRDRCLENBQXpCO0FBa0dBLElBQU1DLFlBQVksR0FBRyxDQUN4QixNQUR3QixFQUV4QixPQUZ3QixFQUd4QixNQUh3QixFQUl4QixvQkFKd0IsRUFLeEIsT0FMd0IsRUFNeEIsU0FOd0IsRUFPeEIsU0FQd0IsRUFReEIsYUFSd0IsRUFTeEIsUUFUd0IsRUFVeEIsT0FWd0IsRUFXeEIsU0FYd0IsQ0FBckI7QUFjQSxJQUFNQyxZQUFZLEdBQUcsQ0FDeEIsUUFEd0IsRUFFeEIsT0FGd0IsRUFHeEIsc0JBSHdCLEVBSXhCLE9BSndCLEVBS3hCLGlCQUx3QixFQU14QixZQU53QixDQUFyQjtBQVNBLElBQU1DLGVBQWUsR0FBRyxDQUMzQix3Q0FEMkIsRUFFM0Isa0dBRjJCLEVBRzNCLDZEQUgyQixDQUF4QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb21taXNzaW9uLjBiNWMxZWE0NDRjOTY2YjUyOTdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21taXNzaW9uVGllclByb3BzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVXNlcnMvVXNlci9EZXYvaGFjb255LXNpdGUvY29tcG9uZW50cy9wYWdlLWNvbW1pc3Npb24vcGFnZS1jb21taXNzaW9uJztcclxuaW1wb3J0IHsgU2l0ZUhlYWRQcm9wcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL3NpdGUtaGVhZCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ09NTUlTU0lPTl9QQUdFX0lORk8gPSB7XHJcbiAgICB0aXRsZTogJ0NvbW1pc3Npb25zIC0gSGFjb255IFN0dWRpbycsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0FydCBjb21taXNzaW9ucyBieSBIYWNvbnkhIEZpbmQgb3V0IG1vcmUgYWJvdXQgY29tbWlzc2lvbiB0aWVycyBhbmQgcHJpY2VzIGhlcmUnLFxyXG4gICAga2V5d29yZHM6IFsnaGFjb255JywgJ3F1bmRpdW0nLCAnY29jb3NoYXJrJywgJ2hvcm55c2hhcmthdCcsICd5ZXdvbmxlZTE5OTknLCAnb2Rpb3VzYmlyZCcsICdhcnQnLCAnc3R1ZGlvJywgJ2RyYXdpbmcnLCAnY29tbWlzc2lvbiddLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly9oYWNvbnktc3R1ZGlvLmNvbS9jb21taXNzaW9uLycsXHJcbiAgICBpbWFnZToge1xyXG4gICAgICAgIHNyYzogJy9pbWFnZXMvY29tbWlzc2lvbi1wcmV2aWV3LnBuZycsXHJcbiAgICAgICAgdHlwZTogJ2ltYWdlL2pwZWcnLFxyXG4gICAgICAgIHdpZHRoOiAxMjAwLFxyXG4gICAgICAgIGhlaWdodDogNjMwLFxyXG4gICAgfSxcclxuICAgIHR3aXR0ZXJJbWFnZVNyYzogJy9pbWFnZXMvY29tbWlzc2lvbi1wcmV2aWV3LnBuZycsXHJcbn0gYXMgU2l0ZUhlYWRQcm9wcztcclxuXHJcbmV4cG9ydCBjb25zdCBDT01NSVNTSU9OX1RJRVJTID0gW1xyXG4gICAge1xyXG4gICAgICAgIGhlYWRlcjogJ0Z1bGwgQm9keSB8IDEwMCBVU0QnLFxyXG4gICAgICAgIGRlc2NQb2ludHM6IFtcclxuICAgICAgICAgICAgJysgODAgVVNEIHBlciBhZGRpdGlvbmFsIGNoYXJhY3RlcicsXHJcbiAgICAgICAgICAgICcrIDEwIFVTRCBmb3IgYmFja2dyb3VuZCwgY29tcGxpY2F0ZWQgY2hhcmFjdGVyIGRlc2lnbiwgd2luZ3MsIGV0YycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTAyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTA1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDYucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wNy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTA4LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDkucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTExLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTE0LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTUucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xNi5wbmcnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ2FsbGVyeUhlaWdodDogJ21pbig1MDBweCwgOTB2aCknLFxyXG4gICAgICAgIGdhbGxlcnlBc3BlY3RSYXRpbzogMC43M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoZWFkZXI6ICdTZXF1ZW5jZSB8IDI4MCBVU0QnLFxyXG4gICAgICAgIGRlc2NQb2ludHM6IFtcclxuICAgICAgICAgICAgJzQtNSBzY2VuZXMgaW4gb25lIHBhZ2UnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTAwLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTAxLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTAyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTAzLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTA0LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTA1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTA2LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTA3LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTA4LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTA5LnBuZycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5SGVpZ2h0OiAnbWluKDUwMHB4LCA5MHZoKScsXHJcbiAgICAgICAgZ2FsbGVyeUFzcGVjdFJhdGlvOiAwLjczXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhlYWRlcjogJ1N0aWNrZXIgfCAyNX4zNSBVU0QnLFxyXG4gICAgICAgIGRlc2NQb2ludHM6IFtcclxuICAgICAgICAgICAgJ0ZsYXQtY29sb3VyZWQgc3RpY2tlcnMgZm9yIFRlbGVncmFtJyxcclxuICAgICAgICAgICAgJ1ByaWNlIGlzIHBlciBzdGlja2VyLCBtYXhpbXVtIG9mIDYgc3RpY2tlcnMnLFxyXG4gICAgICAgICAgICAnKyA1LTEyIFVTRCBmb3Igc2hpbmUvc2hhZGluZycsXHJcbiAgICAgICAgICAgICcrIDUtMTAgVVNEIHBlciBhZGRpdGlvbmFsIGNoYXJhY3RlcicsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTAyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTA1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDYucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wNy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTA4LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDkucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTExLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTE0LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTUucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xNi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTE3LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTgucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xOS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTIwLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yMi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTIzLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjQucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yNS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTI2LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjcucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yOC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTI5LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMzAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0zMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTMyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMzMucG5nJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnlIZWlnaHQ6ICcyMDBweCcsXHJcbiAgICAgICAgZ2FsbGVyeUFzcGVjdFJhdGlvOiAxXHJcbiAgICB9LFxyXG5dIGFzIENvbW1pc3Npb25UaWVyUHJvcHNbXTtcclxuXHJcbmV4cG9ydCBjb25zdCB3aWxsRHJhd0xpc3QgPSBbXHJcbiAgICAnTWFsZScsXHJcbiAgICAnRnVycnknLFxyXG4gICAgJ05TRlcnLFxyXG4gICAgJ0dvbyBUcmFuc2Zvcm1hdGlvbicsXHJcbiAgICAnTGF0ZXgnLFxyXG4gICAgJ1Bvb2x0b3knLFxyXG4gICAgJ0JvbmRhZ2UnLFxyXG4gICAgJ1dhdGVyc3BvcnRzJyxcclxuICAgICdGZXJhbHMnLFxyXG4gICAgJ01lY2hhJyxcclxuICAgICdJbnNlY3RzJyxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB3b250RHJhd0xpc3QgPSBbXHJcbiAgICAnRmVtYWxlJyxcclxuICAgICdIdW1hbicsXHJcbiAgICAnVW5kZXJhZ2VkIGNoYXJhY3RlcnMnLFxyXG4gICAgJ0Jsb29kJyxcclxuICAgICdGYW50YXN5IEFybW91cnMnLFxyXG4gICAgJ1Byb3BhZ2FuZGEnLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1pc3Npb25Ob3RlcyA9IFtcclxuICAgICdQYXltZW50cyBtYWRlIG11c3QgYmUgaW4gVVNEIG9uIFBheXBhbCcsXHJcbiAgICAnQ29tbWlzc2lvbnMgYXJlIHBvc3RlZCB0byBQYXRyZW9uIGZpcnN0LiBQbGVhc2Ugd2FpdCBmb3IgMSBtb250aCBiZWZvcmUgdXBsb2FkaW5nIHRoZSBjb21taXNzaW9uJyxcclxuICAgICdDb21taXNzaW9ucyBhcmUgdG8gYmUgdXNlZCBmb3Igbm9uLWNvbW1lcmNpYWwgcHVycG9zZXMgb25seScsXHJcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==