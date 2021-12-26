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
  header: 'Full Body | 130 USD',
  descPoints: ['+ 80 USD per additional character', '+ 10 USD for background, complicated character design, wings, etc'],
  gallery: ['/images/commission/fullbody-00.png', '/images/commission/fullbody-01.png', '/images/commission/fullbody-02.png', '/images/commission/fullbody-03.png', '/images/commission/fullbody-04.png', '/images/commission/fullbody-05.png', '/images/commission/fullbody-06.png', '/images/commission/fullbody-07.png', '/images/commission/fullbody-08.png', '/images/commission/fullbody-09.png', '/images/commission/fullbody-10.png', '/images/commission/fullbody-11.png', '/images/commission/fullbody-12.png', '/images/commission/fullbody-13.png', '/images/commission/fullbody-14.png', '/images/commission/fullbody-15.png', '/images/commission/fullbody-16.png', '/images/commission/fullbody-17.png', '/images/commission/fullbody-18.png'],
  galleryHeight: 'min(500px, 90vh)'
}, {
  header: 'Sequence | 350 USD',
  descPoints: ['4-5 scenes in one page', '+10~40 USD for complicated character design, wings, etc'],
  gallery: ['/images/commission/seq-00.png', '/images/commission/seq-01.png', '/images/commission/seq-02.png', '/images/commission/seq-03.png', '/images/commission/seq-04.png', '/images/commission/seq-05.png', '/images/commission/seq-06.png', '/images/commission/seq-07.png', '/images/commission/seq-08.png', '/images/commission/seq-09.png', '/images/commission/seq-10.png', '/images/commission/seq-11.png'],
  galleryHeight: 'min(500px, 90vh)'
}, {
  header: 'Sticker | 25~35 USD',
  descPoints: ['Flat-coloured stickers for Telegram', 'Price is per sticker, maximum of 6 stickers', '+ 5-12 USD for shine/shading', '+ 5-10 USD per additional character'],
  gallery: ['/images/commission/stickers-00.png', '/images/commission/stickers-01.png', '/images/commission/stickers-02.png', '/images/commission/stickers-03.png', '/images/commission/stickers-04.png', '/images/commission/stickers-05.png', '/images/commission/stickers-06.png', '/images/commission/stickers-07.png', '/images/commission/stickers-08.png', '/images/commission/stickers-09.png', '/images/commission/stickers-10.png', '/images/commission/stickers-11.png', '/images/commission/stickers-12.png', '/images/commission/stickers-13.png', '/images/commission/stickers-14.png', '/images/commission/stickers-15.png', '/images/commission/stickers-16.png', '/images/commission/stickers-17.png', '/images/commission/stickers-18.png', '/images/commission/stickers-19.png', '/images/commission/stickers-20.png', '/images/commission/stickers-21.png', '/images/commission/stickers-22.png', '/images/commission/stickers-23.png', '/images/commission/stickers-24.png', '/images/commission/stickers-25.png', '/images/commission/stickers-26.png', '/images/commission/stickers-27.png', '/images/commission/stickers-28.png', '/images/commission/stickers-29.png', '/images/commission/stickers-30.png', '/images/commission/stickers-31.png', '/images/commission/stickers-32.png', '/images/commission/stickers-33.png', '/images/commission/stickers-34.png', '/images/commission/stickers-35.png', '/images/commission/stickers-36.png', '/images/commission/stickers-37.png', '/images/commission/stickers-38.png'],
  galleryHeight: '200px'
}, {
  header: 'Comic | 190+ USD',
  descPoints: ['190+ USD per comic pages, 1~3 pages in one commission slot', 'Price depends on story, characters, and complexity', '50+ USD for additional characters', 'Each comic page has 3-5 panels'],
  gallery: ['/images/commission/comic-00.png', '/images/commission/comic-01.png', '/images/commission/comic-02.png', '/images/commission/comic-03.png', '/images/commission/comic-04.png', '/images/commission/comic-05.png', '/images/commission/comic-06.png', '/images/commission/comic-07.png', '/images/commission/comic-08.png', '/images/commission/comic-09.png'],
  galleryHeight: 'min(500px,90vh)'
}, {
  header: 'Character Sheet | 220+ USD',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2NvbW1pc3Npb24tY29uc3RhbnRzLnRzeCJdLCJuYW1lcyI6WyJDT01NSVNTSU9OX1BBR0VfSU5GTyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsInVybCIsImltYWdlIiwic3JjIiwidHlwZSIsIndpZHRoIiwiaGVpZ2h0IiwidHdpdHRlckltYWdlU3JjIiwiQ09NTUlTU0lPTl9USUVSUyIsImhlYWRlciIsImRlc2NQb2ludHMiLCJnYWxsZXJ5IiwiZ2FsbGVyeUhlaWdodCIsIndpbGxEcmF3TGlzdCIsIndvbnREcmF3TGlzdCIsImNvbW1pc3Npb25Ob3RlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLG9CQUFvQixHQUFHO0FBQ2hDQyxPQUFLLEVBQUUsNkJBRHlCO0FBRWhDQyxhQUFXLEVBQUUscUZBRm1CO0FBR2hDQyxVQUFRLEVBQUUsQ0FBQyxRQUFELEVBQVcsU0FBWCxFQUFzQixXQUF0QixFQUFtQyxjQUFuQyxFQUFtRCxjQUFuRCxFQUFtRSxZQUFuRSxFQUFpRixLQUFqRixFQUF3RixRQUF4RixFQUFrRyxTQUFsRyxFQUE2RyxZQUE3RyxDQUhzQjtBQUloQ0MsS0FBRyxFQUFFLHVDQUoyQjtBQUtoQ0MsT0FBSyxFQUFFO0FBQ0hDLE9BQUcsRUFBRSxnQ0FERjtBQUVIQyxRQUFJLEVBQUUsWUFGSDtBQUdIQyxTQUFLLEVBQUUsSUFISjtBQUlIQyxVQUFNLEVBQUU7QUFKTCxHQUx5QjtBQVdoQ0MsaUJBQWUsRUFBRTtBQVhlLENBQTdCO0FBY0EsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FDNUI7QUFDSUMsUUFBTSxFQUFFLHFCQURaO0FBRUlDLFlBQVUsRUFBRSxDQUNSLG1DQURRLEVBRVIsbUVBRlEsQ0FGaEI7QUFNSUMsU0FBTyxFQUFFLENBQ0wsb0NBREssRUFFTCxvQ0FGSyxFQUdMLG9DQUhLLEVBSUwsb0NBSkss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QixZQU53QixDQUFyQjtBQVNBLElBQU1DLGVBQWUsR0FBRyxDQUMzQix3Q0FEMkIsRUFFM0Isa0dBRjJCLEVBRzNCLDZEQUgyQixDQUF4QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYzE5Y2U2OTFkNjIxMWFmMzNmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWlzc2lvblRpZXJQcm9wcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZS1jb21taXNzaW9uL3BhZ2UtY29tbWlzc2lvbic7XHJcbmltcG9ydCB7IFNpdGVIZWFkUHJvcHMgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9zaXRlLWhlYWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTU1JU1NJT05fUEFHRV9JTkZPID0ge1xyXG4gICAgdGl0bGU6ICdDb21taXNzaW9ucyAtIEhhY29ueSBTdHVkaW8nLFxyXG4gICAgZGVzY3JpcHRpb246ICdBcnQgY29tbWlzc2lvbnMgYnkgSGFjb255ISBGaW5kIG91dCBtb3JlIGFib3V0IGhpcyBjb21taXNzaW9uIHRpZXJzIGFuZCBwcmljZXMgaGVyZScsXHJcbiAgICBrZXl3b3JkczogWydoYWNvbnknLCAncXVuZGl1bScsICdjb2Nvc2hhcmsnLCAnaG9ybnlzaGFya2F0JywgJ3lld29ubGVlMTk5OScsICdvZGlvdXNiaXJkJywgJ2FydCcsICdzdHVkaW8nLCAnZHJhd2luZycsICdjb21taXNzaW9uJ10sXHJcbiAgICB1cmw6ICdodHRwczovL2hhY29ueS1zdHVkaW8uY29tL2NvbW1pc3Npb24vJyxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgICAgc3JjOiAnL2ltYWdlcy9jb21taXNzaW9uLXByZXZpZXcucG5nJyxcclxuICAgICAgICB0eXBlOiAnaW1hZ2UvanBlZycsXHJcbiAgICAgICAgd2lkdGg6IDEyMDAsXHJcbiAgICAgICAgaGVpZ2h0OiA2MzAsXHJcbiAgICB9LFxyXG4gICAgdHdpdHRlckltYWdlU3JjOiAnL2ltYWdlcy9jb21taXNzaW9uLXByZXZpZXcucG5nJyxcclxufSBhcyBTaXRlSGVhZFByb3BzO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTU1JU1NJT05fVElFUlMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaGVhZGVyOiAnRnVsbCBCb2R5IHwgMTMwIFVTRCcsXHJcbiAgICAgICAgZGVzY1BvaW50czogW1xyXG4gICAgICAgICAgICAnKyA4MCBVU0QgcGVyIGFkZGl0aW9uYWwgY2hhcmFjdGVyJyxcclxuICAgICAgICAgICAgJysgMTAgVVNEIGZvciBiYWNrZ3JvdW5kLCBjb21wbGljYXRlZCBjaGFyYWN0ZXIgZGVzaWduLCB3aW5ncywgZXRjJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTAxLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTA0LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDUucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wNi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTA3LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMDgucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0wOS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTEwLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xMi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTEzLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTQucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xNS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2Z1bGxib2R5LTE2LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vZnVsbGJvZHktMTcucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9mdWxsYm9keS0xOC5wbmcnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ2FsbGVyeUhlaWdodDogJ21pbig1MDBweCwgOTB2aCknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoZWFkZXI6ICdTZXF1ZW5jZSB8IDM1MCBVU0QnLFxyXG4gICAgICAgIGRlc2NQb2ludHM6IFtcclxuICAgICAgICAgICAgJzQtNSBzY2VuZXMgaW4gb25lIHBhZ2UnLFxyXG4gICAgICAgICAgICAnKzEwfjQwIFVTRCBmb3IgY29tcGxpY2F0ZWQgY2hhcmFjdGVyIGRlc2lnbiwgd2luZ3MsIGV0YydcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDQucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDUucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDYucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDcucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDgucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMDkucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMTAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zZXEtMTEucG5nJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnlIZWlnaHQ6ICdtaW4oNTAwcHgsIDkwdmgpJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGVhZGVyOiAnU3RpY2tlciB8IDI1fjM1IFVTRCcsXHJcbiAgICAgICAgZGVzY1BvaW50czogW1xyXG4gICAgICAgICAgICAnRmxhdC1jb2xvdXJlZCBzdGlja2VycyBmb3IgVGVsZWdyYW0nLFxyXG4gICAgICAgICAgICAnUHJpY2UgaXMgcGVyIHN0aWNrZXIsIG1heGltdW0gb2YgNiBzdGlja2VycycsXHJcbiAgICAgICAgICAgICcrIDUtMTIgVVNEIGZvciBzaGluZS9zaGFkaW5nJyxcclxuICAgICAgICAgICAgJysgNS0xMCBVU0QgcGVyIGFkZGl0aW9uYWwgY2hhcmFjdGVyJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTAxLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTA0LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDUucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wNi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTA3LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMDgucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0wOS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTEwLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xMi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTEzLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTQucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xNS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTE2LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMTcucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0xOC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTE5LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjAucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yMS5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTIyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjMucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yNC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTI1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjYucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0yNy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTI4LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMjkucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0zMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTMxLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMzIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0zMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTM0LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMzUucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9zdGlja2Vycy0zNi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL3N0aWNrZXJzLTM3LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vc3RpY2tlcnMtMzgucG5nJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnlIZWlnaHQ6ICcyMDBweCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhlYWRlcjogJ0NvbWljIHwgMTkwKyBVU0QnLFxyXG4gICAgICAgIGRlc2NQb2ludHM6IFtcclxuICAgICAgICAgICAgJzE5MCsgVVNEIHBlciBjb21pYyBwYWdlcywgMX4zIHBhZ2VzIGluIG9uZSBjb21taXNzaW9uIHNsb3QnLFxyXG4gICAgICAgICAgICAnUHJpY2UgZGVwZW5kcyBvbiBzdG9yeSwgY2hhcmFjdGVycywgYW5kIGNvbXBsZXhpdHknLFxyXG4gICAgICAgICAgICAnNTArIFVTRCBmb3IgYWRkaXRpb25hbCBjaGFyYWN0ZXJzJyxcclxuICAgICAgICAgICAgJ0VhY2ggY29taWMgcGFnZSBoYXMgMy01IHBhbmVscydcclxuICAgICAgICBdLFxyXG4gICAgICAgIGdhbGxlcnk6IFtcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jb21pYy0wMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NvbWljLTAxLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY29taWMtMDIucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jb21pYy0wMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NvbWljLTA0LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY29taWMtMDUucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jb21pYy0wNi5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NvbWljLTA3LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY29taWMtMDgucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jb21pYy0wOS5wbmcnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ2FsbGVyeUhlaWdodDogJ21pbig1MDBweCw5MHZoKScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhlYWRlcjogJ0NoYXJhY3RlciBTaGVldCB8IDIyMCsgVVNEJyxcclxuICAgICAgICBkZXNjUG9pbnRzOiBbXHJcbiAgICAgICAgICAgICdGcm9udCBhbmQgYmFjayB2aWV3JyxcclxuICAgICAgICAgICAgJysgNTAgVVNEIGZvciBuZXcgY2hhcmFjdGVyIGRlc2lnbnMnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBnYWxsZXJ5OiBbXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY2hhcnJlZi0wMC5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NoYXJyZWYtMDEucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jaGFycmVmLTAyLnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY2hhcnJlZi0wMy5wbmcnLFxyXG4gICAgICAgICAgICAnL2ltYWdlcy9jb21taXNzaW9uL2NoYXJyZWYtMDQucG5nJyxcclxuICAgICAgICAgICAgJy9pbWFnZXMvY29tbWlzc2lvbi9jaGFycmVmLTA1LnBuZycsXHJcbiAgICAgICAgICAgICcvaW1hZ2VzL2NvbW1pc3Npb24vY2hhcnJlZi0wNi5wbmcnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ2FsbGVyeUhlaWdodDogJ21pbig1MDBweCw5MHZoKScsXHJcbiAgICB9LFxyXG5dIGFzIENvbW1pc3Npb25UaWVyUHJvcHNbXTtcclxuXHJcbmV4cG9ydCBjb25zdCB3aWxsRHJhd0xpc3QgPSBbXHJcbiAgICAnTWFsZScsXHJcbiAgICAnRnVycnknLFxyXG4gICAgJ05TRlcnLFxyXG4gICAgJ0dvbyBUcmFuc2Zvcm1hdGlvbicsXHJcbiAgICAnTGF0ZXgnLFxyXG4gICAgJ1Bvb2x0b3knLFxyXG4gICAgJ0JvbmRhZ2UnLFxyXG4gICAgJ1dhdGVyc3BvcnRzJyxcclxuICAgICdGZXJhbHMnLFxyXG4gICAgJ01lY2hhJyxcclxuICAgICdJbnNlY3RzJyxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB3b250RHJhd0xpc3QgPSBbXHJcbiAgICAnRmVtYWxlJyxcclxuICAgICdIdW1hbicsXHJcbiAgICAnVW5kZXJhZ2VkIGNoYXJhY3RlcnMnLFxyXG4gICAgJ0Jsb29kJyxcclxuICAgICdGYW50YXN5IEFybW91cnMnLFxyXG4gICAgJ1Byb3BhZ2FuZGEnLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1pc3Npb25Ob3RlcyA9IFtcclxuICAgICdQYXltZW50cyBtYWRlIG11c3QgYmUgaW4gVVNEIG9uIFBheXBhbCcsXHJcbiAgICAnQ29tbWlzc2lvbnMgYXJlIHBvc3RlZCB0byBQYXRyZW9uIGZpcnN0LiBQbGVhc2Ugd2FpdCBmb3IgMSBtb250aCBiZWZvcmUgdXBsb2FkaW5nIHRoZSBjb21taXNzaW9uJyxcclxuICAgICdDb21taXNzaW9ucyBhcmUgdG8gYmUgdXNlZCBmb3Igbm9uLWNvbW1lcmNpYWwgcHVycG9zZXMgb25seScsXHJcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==