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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2NvbW1pc3Npb24tY29uc3RhbnRzLnRzeCJdLCJuYW1lcyI6WyJDT01NSVNTSU9OX1BBR0VfSU5GTyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsInVybCIsImltYWdlIiwic3JjIiwidHlwZSIsIndpZHRoIiwiaGVpZ2h0IiwidHdpdHRlckltYWdlU3JjIiwiQ09NTUlTU0lPTl9USUVSUyIsImhlYWRlciIsImRlc2NQb2ludHMiLCJnYWxsZXJ5IiwiZ2FsbGVyeUhlaWdodCIsImdhbGxlcnlBc3BlY3RSYXRpbyIsIndpbGxEcmF3TGlzdCIsIndvbnREcmF3TGlzdCIsImNvbW1pc3Npb25Ob3RlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLG9CQUFvQixHQUFHO0FBQ2hDQyxPQUFLLEVBQUUsNkJBRHlCO0FBRWhDQyxhQUFXLEVBQUUscUZBRm1CO0FBR2hDQyxVQUFRLEVBQUUsQ0FBQyxRQUFELEVBQVcsU0FBWCxFQUFzQixXQUF0QixFQUFtQyxjQUFuQyxFQUFtRCxjQUFuRCxFQUFtRSxZQUFuRSxFQUFpRixLQUFqRixFQUF3RixRQUF4RixFQUFrRyxTQUFsRyxFQUE2RyxZQUE3RyxDQUhzQjtBQUloQ0MsS0FBRyxFQUFFLHVDQUoyQjtBQUtoQ0MsT0FBSyxFQUFFO0FBQ0hDLE9BQUcsRUFBRSxnQ0FERjtBQUVIQyxRQUFJLEVBQUUsWUFGSDtBQUdIQyxTQUFLLEVBQUUsSUFISjtBQUlIQyxVQUFNLEVBQUU7QUFKTCxHQUx5QjtBQVdoQ0MsaUJBQWUsRUFBRTtBQVhlLENBQTdCO0FBY0EsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FDNUI7QUFDSUMsUUFBTSxFQUFFLHFCQURaO0FBRUlDLFlBQVUsRUFBRSxDQUNSLG1DQURRLEVBRVIsbUVBRlEsQ0FGaEI7QUFNSUMsU0FBTyxFQUFFLENBQ0wsb0NBREssRUFFTCxvQ0FGSyxFQUdMLG9DQUhLLEVBSUwsb0NBSkssRUFLTCxvQ0FMSyxFQU1MLG9DQU5LLEVBT0wsb0NBUEssRUFRTCxvQ0FSSyxFQVNMLG9DQVRLLEVBVUwsb0NBVkssRUFXTCxvQ0FYSyxFQVlMLG9DQVpLLEVBYUwsb0NBYkssRUFjTCxvQ0FkSyxFQWVMLG9DQWZLLEVBZ0JMLG9DQWhCSyxFQWlCTCxvQ0FqQkssQ0FOYjtBQXlCSUMsZUFBYSxFQUFFLGtCQXpCbkI7QUEwQklDLG9CQUFrQixFQUFFO0FBMUJ4QixDQUQ0QixFQTZCNUI7QUFDSUosUUFBTSxFQUFFLG9CQURaO0FBRUlDLFlBQVUsRUFBRSxDQUNSLHdCQURRLENBRmhCO0FBS0lDLFNBQU8sRUFBRSxDQUNMLCtCQURLLEVBRUwsK0JBRkssRUFHTCwrQkFISyxFQUlMLCtCQUpLLEVBS0wsK0JBTEssRUFNTCwrQkFOSyxFQU9MLCtCQVBLLEVBUUwsK0JBUkssRUFTTCwrQkFUSyxFQVVMLCtCQVZLLENBTGI7QUFpQklDLGVBQWEsRUFBRSxrQkFqQm5CO0FBa0JJQyxvQkFBa0IsRUFBRTtBQWxCeEIsQ0E3QjRCLEVBaUQ1QjtBQUNJSixRQUFNLEVBQUUscUJBRFo7QUFFSUMsWUFBVSxFQUFFLENBQ1IscUNBRFEsRUFFUiw2Q0FGUSxFQUdSLDhCQUhRLEVBSVIscUNBSlEsQ0FGaEI7QUFRSUMsU0FBTyxFQUFFLENBQ0wsb0NBREssRUFFTCxvQ0FGSyxFQUdMLG9DQUhLLEVBSUwsb0NBSkssRUFLTCxvQ0FMSyxFQU1MLG9DQU5LLEVBT0wsb0NBUEssRUFRTCxvQ0FSSyxFQVNMLG9DQVRLLEVBVUwsb0NBVkssRUFXTCxvQ0FYSyxFQVlMLG9DQVpLLEVBYUwsb0NBYkssRUFjTCxvQ0FkSyxFQWVMLG9DQWZLLEVBZ0JMLG9DQWhCSyxFQWlCTCxvQ0FqQkssRUFrQkwsb0NBbEJLLEVBbUJMLG9DQW5CSyxFQW9CTCxvQ0FwQkssRUFxQkwsb0NBckJLLEVBc0JMLG9DQXRCSyxFQXVCTCxvQ0F2QkssRUF3Qkwsb0NBeEJLLEVBeUJMLG9DQXpCSyxFQTBCTCxvQ0ExQkssRUEyQkwsb0NBM0JLLEVBNEJMLG9DQTVCSyxFQTZCTCxvQ0E3QkssRUE4Qkwsb0NBOUJLLEVBK0JMLG9DQS9CSyxFQWdDTCxvQ0FoQ0ssRUFpQ0wsb0NBakNLLEVBa0NMLG9DQWxDSyxDQVJiO0FBNENJQyxlQUFhLEVBQUUsT0E1Q25CO0FBNkNJQyxvQkFBa0IsRUFBRTtBQTdDeEIsQ0FqRDRCLENBQXpCO0FBa0dBLElBQU1DLFlBQVksR0FBRyxDQUN4QixNQUR3QixFQUV4QixPQUZ3QixFQUd4QixNQUh3QixFQUl4QixvQkFKd0IsRUFLeEIsT0FMd0IsRUFNeEIsU0FOd0IsRUFPeEIsU0FQd0IsRUFReEIsYUFSd0IsRUFTeEIsUUFUd0IsRUFVeEIsT0FWd0IsRUFXeEIsU0FYd0IsQ0FBckI7QUFjQSxJQUFNQyxZQUFZLEdBQUcsQ0FDeEIsUUFEd0IsRUFFeEIsT0FGd0IsRUFHeEIsc0JBSHdCLEVBSXhCLE9BSndCLEVBS3hCLGlCQUx3QixFQU14QixZQU53QixDQUFyQjtBQVNBLElBQU1DLGVBQWUsR0FBRyxDQUMzQix3Q0FEMkIsRUFFM0Isa0dBRjJCLEVBRzNCLDZEQUgyQixDQUF4QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb21taXNzaW9uLmZkMjk4NDE1Mzc1NTEzZDJmMmQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21taXNzaW9uVGllclByb3BzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vVXNlcnMvVXNlci9EZXYvaGFjb255LXNpdGUvY29tcG9uZW50cy9wYWdlLWNvbW1pc3Npb24vcGFnZS1jb21taXNzaW9uJztcclxuaW1wb3J0IHsgU2l0ZUhlYWRQcm9wcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL3NpdGUtaGVhZCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ09NTUlTU0lPTl9QQUdFX0lORk8gPSB7XHJcbiAgICB0aXRsZTogJ0NvbW1pc3Npb25zIC0gSGFjb255IFN0dWRpbycsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0FydCBjb21taXNzaW9ucyBieSBIYWNvbnkhIEZpbmQgb3V0IG1vcmUgYWJvdXQgaGlzIGNvbW1pc3Npb24gdGllcnMgYW5kIHByaWNlcyBoZXJlJyxcclxuICAgIGtleXdvcmRzOiBbJ2hhY29ueScsICdxdW5kaXVtJywgJ2NvY29zaGFyaycsICdob3JueXNoYXJrYXQnLCAneWV3b25sZWUxOTk5JywgJ29kaW91c2JpcmQnLCAnYXJ0JywgJ3N0dWRpbycsICdkcmF3aW5nJywgJ2NvbW1pc3Npb24nXSxcclxuICAgIHVybDogJ2h0dHBzOi8vaGFjb255LXN0dWRpby5jb20vY29tbWlzc2lvbi8nLFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgICBzcmM6ICcvaW1hZ2VzL2NvbW1pc3Npb24tcHJldmlldy5wbmcnLFxyXG4gICAgICAgIHR5cGU6ICdpbWFnZS9qcGVnJyxcclxuICAgICAgICB3aWR0aDogMTIwMCxcclxuICAgICAgICBoZWlnaHQ6IDYzMCxcclxuICAgIH0sXHJcbiAgICB0d2l0dGVySW1hZ2VTcmM6ICcvaW1hZ2VzL2NvbW1pc3Npb24tcHJldmlldy5wbmcnLFxyXG59IGFzIFNpdGVIZWFkUHJvcHM7XHJcblxyXG5leHBvcnQgY29uc3QgQ09NTUlTU0lPTl9USUVSUyA9IFtcclxuICAgIHtcclxuICAgICAgICBoZWFkZXI6ICdGdWxsIEJvZHkgfCAxMDAgVVNEJyxcclxuICAgICAgICBkZXNjUG9pbnRzOiBbXHJcbiAgICAgICAgICAgICcrIDgwIFVTRCBwZXIgYWRkaXRpb25hbCBjaGFyYWN0ZXInLFxyXG4gICAgICAgICAgICAnKyAxMCBVU0QgZm9yIGJhY2tncm91bmQsIGNvbXBsaWNhdGVkIGNoYXJhY3RlciBkZXNpZ24sIHdpbmdzLCBldGMnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ2FsbGVyeTogW1xyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTAwLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wMi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTAzLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDQucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wNS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTA2LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDcucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wOC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTA5LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTEyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTE1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTYucG5nJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnlIZWlnaHQ6ICdtaW4oNTAwcHgsIDkwdmgpJyxcclxuICAgICAgICBnYWxsZXJ5QXNwZWN0UmF0aW86IDAuNzNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGVhZGVyOiAnU2VxdWVuY2UgfCAyODAgVVNEJyxcclxuICAgICAgICBkZXNjUG9pbnRzOiBbXHJcbiAgICAgICAgICAgICc0LTUgc2NlbmVzIGluIG9uZSBwYWdlJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ2FsbGVyeTogW1xyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wMi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wNS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wNi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wNy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wOC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3NlcS0wOS5wbmcnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ2FsbGVyeUhlaWdodDogJ21pbig1MDBweCwgOTB2aCknLFxyXG4gICAgICAgIGdhbGxlcnlBc3BlY3RSYXRpbzogMC43M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoZWFkZXI6ICdTdGlja2VyIHwgMjV+MzUgVVNEJyxcclxuICAgICAgICBkZXNjUG9pbnRzOiBbXHJcbiAgICAgICAgICAgICdGbGF0LWNvbG91cmVkIHN0aWNrZXJzIGZvciBUZWxlZ3JhbScsXHJcbiAgICAgICAgICAgICdQcmljZSBpcyBwZXIgc3RpY2tlciwgbWF4aW11bSBvZiA2IHN0aWNrZXJzJyxcclxuICAgICAgICAgICAgJysgNS0xMiBVU0QgZm9yIHNoaW5lL3NoYWRpbmcnLFxyXG4gICAgICAgICAgICAnKyA1LTEwIFVTRCBwZXIgYWRkaXRpb25hbCBjaGFyYWN0ZXInLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ2FsbGVyeTogW1xyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTAwLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wMi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTAzLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDQucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wNS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTA2LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDcucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wOC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTA5LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTEyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTE1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTYucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xNy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTE4LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTkucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTIxLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTI0LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjUucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yNi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTI3LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjgucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yOS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTMwLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMzEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0zMi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTMzLnBuZycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5SGVpZ2h0OiAnMjAwcHgnLFxyXG4gICAgICAgIGdhbGxlcnlBc3BlY3RSYXRpbzogMVxyXG4gICAgfSxcclxuXSBhcyBDb21taXNzaW9uVGllclByb3BzW107XHJcblxyXG5leHBvcnQgY29uc3Qgd2lsbERyYXdMaXN0ID0gW1xyXG4gICAgJ01hbGUnLFxyXG4gICAgJ0Z1cnJ5JyxcclxuICAgICdOU0ZXJyxcclxuICAgICdHb28gVHJhbnNmb3JtYXRpb24nLFxyXG4gICAgJ0xhdGV4JyxcclxuICAgICdQb29sdG95JyxcclxuICAgICdCb25kYWdlJyxcclxuICAgICdXYXRlcnNwb3J0cycsXHJcbiAgICAnRmVyYWxzJyxcclxuICAgICdNZWNoYScsXHJcbiAgICAnSW5zZWN0cycsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgd29udERyYXdMaXN0ID0gW1xyXG4gICAgJ0ZlbWFsZScsXHJcbiAgICAnSHVtYW4nLFxyXG4gICAgJ1VuZGVyYWdlZCBjaGFyYWN0ZXJzJyxcclxuICAgICdCbG9vZCcsXHJcbiAgICAnRmFudGFzeSBBcm1vdXJzJyxcclxuICAgICdQcm9wYWdhbmRhJyxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21taXNzaW9uTm90ZXMgPSBbXHJcbiAgICAnUGF5bWVudHMgbWFkZSBtdXN0IGJlIGluIFVTRCBvbiBQYXlwYWwnLFxyXG4gICAgJ0NvbW1pc3Npb25zIGFyZSBwb3N0ZWQgdG8gUGF0cmVvbiBmaXJzdC4gUGxlYXNlIHdhaXQgZm9yIDEgbW9udGggYmVmb3JlIHVwbG9hZGluZyB0aGUgY29tbWlzc2lvbicsXHJcbiAgICAnQ29tbWlzc2lvbnMgYXJlIHRvIGJlIHVzZWQgZm9yIG5vbi1jb21tZXJjaWFsIHB1cnBvc2VzIG9ubHknLFxyXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=