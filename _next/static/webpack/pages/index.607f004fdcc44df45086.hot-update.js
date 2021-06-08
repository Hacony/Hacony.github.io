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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2NvbW1pc3Npb24tY29uc3RhbnRzLnRzeCJdLCJuYW1lcyI6WyJDT01NSVNTSU9OX1BBR0VfSU5GTyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsInVybCIsImltYWdlIiwic3JjIiwidHlwZSIsIndpZHRoIiwiaGVpZ2h0IiwidHdpdHRlckltYWdlU3JjIiwiQ09NTUlTU0lPTl9USUVSUyIsImhlYWRlciIsImRlc2NQb2ludHMiLCJnYWxsZXJ5IiwiZ2FsbGVyeUhlaWdodCIsIndpbGxEcmF3TGlzdCIsIndvbnREcmF3TGlzdCIsImNvbW1pc3Npb25Ob3RlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLG9CQUFvQixHQUFHO0FBQ2hDQyxPQUFLLEVBQUUsNkJBRHlCO0FBRWhDQyxhQUFXLEVBQUUscUZBRm1CO0FBR2hDQyxVQUFRLEVBQUUsQ0FBQyxRQUFELEVBQVcsU0FBWCxFQUFzQixXQUF0QixFQUFtQyxjQUFuQyxFQUFtRCxjQUFuRCxFQUFtRSxZQUFuRSxFQUFpRixLQUFqRixFQUF3RixRQUF4RixFQUFrRyxTQUFsRyxFQUE2RyxZQUE3RyxDQUhzQjtBQUloQ0MsS0FBRyxFQUFFLHVDQUoyQjtBQUtoQ0MsT0FBSyxFQUFFO0FBQ0hDLE9BQUcsRUFBRSxnQ0FERjtBQUVIQyxRQUFJLEVBQUUsWUFGSDtBQUdIQyxTQUFLLEVBQUUsSUFISjtBQUlIQyxVQUFNLEVBQUU7QUFKTCxHQUx5QjtBQVdoQ0MsaUJBQWUsRUFBRTtBQVhlLENBQTdCO0FBY0EsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FDNUI7QUFDSUMsUUFBTSxFQUFFLHFCQURaO0FBRUlDLFlBQVUsRUFBRSxDQUNSLG1DQURRLEVBRVIsbUVBRlEsQ0FGaEI7QUFNSUMsU0FBTyxFQUFFLENBQ0wsb0NBREssRUFFTCxvQ0FGSyxFQUdMLG9DQUhLLEVBSUwsb0NBSkss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RyxDQUMzQix3Q0FEMkIsRUFFM0Isa0dBRjJCLEVBRzNCLDZEQUgyQixDQUF4QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MDdmMDA0ZmRjYzQ0ZGY0NTA4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWlzc2lvblRpZXJQcm9wcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZS1jb21taXNzaW9uL3BhZ2UtY29tbWlzc2lvbic7XHJcbmltcG9ydCB7IFNpdGVIZWFkUHJvcHMgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9zaXRlLWhlYWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTU1JU1NJT05fUEFHRV9JTkZPID0ge1xyXG4gICAgdGl0bGU6ICdDb21taXNzaW9ucyAtIEhhY29ueSBTdHVkaW8nLFxyXG4gICAgZGVzY3JpcHRpb246ICdBcnQgY29tbWlzc2lvbnMgYnkgSGFjb255ISBGaW5kIG91dCBtb3JlIGFib3V0IGhpcyBjb21taXNzaW9uIHRpZXJzIGFuZCBwcmljZXMgaGVyZScsXHJcbiAgICBrZXl3b3JkczogWydoYWNvbnknLCAncXVuZGl1bScsICdjb2Nvc2hhcmsnLCAnaG9ybnlzaGFya2F0JywgJ3lld29ubGVlMTk5OScsICdvZGlvdXNiaXJkJywgJ2FydCcsICdzdHVkaW8nLCAnZHJhd2luZycsICdjb21taXNzaW9uJ10sXHJcbiAgICB1cmw6ICdodHRwczovL2hhY29ueS1zdHVkaW8uY29tL2NvbW1pc3Npb24vJyxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgICAgc3JjOiAnL2ltYWdlcy9jb21taXNzaW9uLXByZXZpZXcucG5nJyxcclxuICAgICAgICB0eXBlOiAnaW1hZ2UvanBlZycsXHJcbiAgICAgICAgd2lkdGg6IDEyMDAsXHJcbiAgICAgICAgaGVpZ2h0OiA2MzAsXHJcbiAgICB9LFxyXG4gICAgdHdpdHRlckltYWdlU3JjOiAnL2ltYWdlcy9jb21taXNzaW9uLXByZXZpZXcucG5nJyxcclxufSBhcyBTaXRlSGVhZFByb3BzO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTU1JU1NJT05fVElFUlMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaGVhZGVyOiAnRnVsbCBCb2R5IHwgMTAwIFVTRCcsXHJcbiAgICAgICAgZGVzY1BvaW50czogW1xyXG4gICAgICAgICAgICAnKyA4MCBVU0QgcGVyIGFkZGl0aW9uYWwgY2hhcmFjdGVyJyxcclxuICAgICAgICAgICAgJysgMTAgVVNEIGZvciBiYWNrZ3JvdW5kLCBjb21wbGljYXRlZCBjaGFyYWN0ZXIgZGVzaWduLCB3aW5ncywgZXRjJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTAxLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTA0LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDUucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wNi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTA3LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDgucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wOS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTEwLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xMi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTEzLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTQucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xNS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTE2LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTcucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xOC5wbmcnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ2FsbGVyeUhlaWdodDogJ21pbig1MDBweCwgOTB2aCknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoZWFkZXI6ICdTZXF1ZW5jZSB8IDI4MCBVU0QnLFxyXG4gICAgICAgIGRlc2NQb2ludHM6IFtcclxuICAgICAgICAgICAgJzQtNSBzY2VuZXMgaW4gb25lIHBhZ2UnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTAwLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTAxLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTAyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTAzLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTA0LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTA1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTA2LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTA3LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTA4LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTA5LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTEwLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc2VxLTExLnBuZycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5SGVpZ2h0OiAnbWluKDUwMHB4LCA5MHZoKScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhlYWRlcjogJ1N0aWNrZXIgfCAyNX4zNSBVU0QnLFxyXG4gICAgICAgIGRlc2NQb2ludHM6IFtcclxuICAgICAgICAgICAgJ0ZsYXQtY29sb3VyZWQgc3RpY2tlcnMgZm9yIFRlbGVncmFtJyxcclxuICAgICAgICAgICAgJ1ByaWNlIGlzIHBlciBzdGlja2VyLCBtYXhpbXVtIG9mIDYgc3RpY2tlcnMnLFxyXG4gICAgICAgICAgICAnKyA1LTEyIFVTRCBmb3Igc2hpbmUvc2hhZGluZycsXHJcbiAgICAgICAgICAgICcrIDUtMTAgVVNEIHBlciBhZGRpdGlvbmFsIGNoYXJhY3RlcicsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTAyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTA1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDYucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wNy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTA4LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDkucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTExLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTE0LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTUucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xNi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTE3LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTgucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xOS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTIwLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yMi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTIzLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjQucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yNS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTI2LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjcucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yOC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTI5LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMzAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0zMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTMyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMzMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0zNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTM1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMzYucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0zNy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTM4LnBuZycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5SGVpZ2h0OiAnMjAwcHgnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoZWFkZXI6ICdDb21pYyB8IDE1MCsgVVNEJyxcclxuICAgICAgICBkZXNjUG9pbnRzOiBbXHJcbiAgICAgICAgICAgICdQcmljZSBkZXBlbmRzIG9uIHN0b3J5LCBjaGFyYWN0ZXJzLCBhbmQgY29tcGxleGl0eScsXHJcbiAgICAgICAgICAgICdFYWNoIGNvbWljIHBhZ2UgaGFzIDMtNSBwYW5lbHMnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY29taWMtMDAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jb21pYy0wMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NvbWljLTAyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY29taWMtMDMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jb21pYy0wNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NvbWljLTA1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY29taWMtMDYucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jb21pYy0wNy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NvbWljLTA4LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY29taWMtMDkucG5nJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnlIZWlnaHQ6ICdtaW4oNTAwcHgsOTB2aCknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoZWFkZXI6ICdDaGFyYWN0ZXIgU2hlZXQgfCAxODArIFVTRCcsXHJcbiAgICAgICAgZGVzY1BvaW50czogW1xyXG4gICAgICAgICAgICAnRnJvbnQgYW5kIGJhY2sgdmlldycsXHJcbiAgICAgICAgICAgICcrIDUwIFVTRCBmb3IgbmV3IGNoYXJhY3RlciBkZXNpZ25zJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ2FsbGVyeTogW1xyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NoYXJyZWYtMDAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jaGFycmVmLTAxLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY2hhcnJlZi0wMi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NoYXJyZWYtMDMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jaGFycmVmLTA0LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY2hhcnJlZi0wNS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NoYXJyZWYtMDYucG5nJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnlIZWlnaHQ6ICdtaW4oNTAwcHgsOTB2aCknLFxyXG4gICAgfSxcclxuXSBhcyBDb21taXNzaW9uVGllclByb3BzW107XHJcblxyXG5leHBvcnQgY29uc3Qgd2lsbERyYXdMaXN0ID0gW1xyXG4gICAgJ01hbGUnLFxyXG4gICAgJ0Z1cnJ5JyxcclxuICAgICdOU0ZXJyxcclxuICAgICdHb28gVHJhbnNmb3JtYXRpb24nLFxyXG4gICAgJ0xhdGV4JyxcclxuICAgICdQb29sdG95JyxcclxuICAgICdCb25kYWdlJyxcclxuICAgICdXYXRlcnNwb3J0cycsXHJcbiAgICAnRmVyYWxzJyxcclxuICAgICdNZWNoYScsXHJcbiAgICAnSW5zZWN0cycsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgd29udERyYXdMaXN0ID0gW1xyXG4gICAgJ0ZlbWFsZScsXHJcbiAgICAnSHVtYW4nLFxyXG4gICAgJ1VuZGVyYWdlZCBjaGFyYWN0ZXJzJyxcclxuICAgICdCbG9vZCcsXHJcbiAgICAnRmFudGFzeSBBcm1vdXJzJyxcclxuICAgICdQcm9wYWdhbmRhJyxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21taXNzaW9uTm90ZXMgPSBbXHJcbiAgICAnUGF5bWVudHMgbWFkZSBtdXN0IGJlIGluIFVTRCBvbiBQYXlwYWwnLFxyXG4gICAgJ0NvbW1pc3Npb25zIGFyZSBwb3N0ZWQgdG8gUGF0cmVvbiBmaXJzdC4gUGxlYXNlIHdhaXQgZm9yIDEgbW9udGggYmVmb3JlIHVwbG9hZGluZyB0aGUgY29tbWlzc2lvbicsXHJcbiAgICAnQ29tbWlzc2lvbnMgYXJlIHRvIGJlIHVzZWQgZm9yIG5vbi1jb21tZXJjaWFsIHB1cnBvc2VzIG9ubHknLFxyXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=