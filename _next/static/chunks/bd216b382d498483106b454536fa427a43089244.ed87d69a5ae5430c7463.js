(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(r.AmpStateContext))};var i,o=(i=n("q1tI"))&&i.__esModule?i:{default:i},r=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,i=e.hybrid,o=void 0!==i&&i,r=e.hasQuery,s=void 0!==r&&r;return n||o&&s}},"20a2":function(e,t,n){e.exports=n("nOHt")},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var i,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=i?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),r=(i=n("Xuae"))&&i.__esModule?i:{default:i},s=n("lwAK"),a=n("FYa8"),c=n("/0+H");function m(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var g=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,i={};return function(o){var r=!0,s=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){s=!0;var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?r=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?r=!1:t.add(o.type);break;case"meta":for(var c=0,m=g.length;c<m;c++){var l=g[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?r=!1:n.add(l);else{var u=o.props[l],p=i[l]||new Set;"name"===l&&s||!p.has(u)?(p.add(u),i[l]=p):r=!1}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function d(e){var t=e.children,n=(0,o.useContext)(s.AmpStateContext),i=(0,o.useContext)(a.HeadManagerContext);return o.default.createElement(r.default,{reduceComponentsToState:p,headManager:i,inAmpMode:(0,c.isInAmpMode)(n)},t)}d.rewind=function(){};var f=d;t.default=f},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var i=n("WkPL");e.exports=function(e){if(Array.isArray(e))return i(e)}},RIqP:function(e,t,n){var i=n("Ijbi"),o=n("EbDI"),r=n("ZhPi"),s=n("Bnag");e.exports=function(e){return i(e)||o(e)||r(e)||s()}},TSYQ:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)&&i.length){var s=o.apply(null,i);s&&e.push(s)}else if("object"===r)for(var a in i)n.call(i,a)&&i[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(i=function(){return o}.apply(t,[]))||(e.exports=i)}()},Xuae:function(e,t,n){"use strict";var i=n("RIqP"),o=n("lwsE"),r=n("W8MJ"),s=(n("PJYZ"),n("7W2i")),a=n("a1gu"),c=n("Nsbk");function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return a(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),u=function(e){s(n,e);var t=m(n);function n(e){var r;return o(this,n),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(i(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=u},bdgK:function(e,t,n){"use strict";(function(e){var n=function(){if("undefined"!==typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,i){return e[0]===t&&(n=i,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),i=this.__entries__[n];return i&&i[1]},t.prototype.set=function(t,n){var i=e(this.__entries__,t);~i?this.__entries__[i][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,i=e(n,t);~i&&n.splice(i,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,i=this.__entries__;n<i.length;n++){var o=i[n];e.call(t,o[1],o[0])}},t}()}(),i="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,o="undefined"!==typeof e&&e.Math===Math?e:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),r="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var s=["top","right","bottom","left","width","height","size","weight"],a="undefined"!==typeof MutationObserver,c=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,i=!1,o=0;function s(){n&&(n=!1,e()),i&&c()}function a(){r(s)}function c(){var e=Date.now();if(n){if(e-o<2)return;i=!0}else n=!0,i=!1,setTimeout(a,t);o=e}return c}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),a?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;s.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),m=function(e,t){for(var n=0,i=Object.keys(t);n<i.length;n++){var o=i[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},l=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||o},u=y(0,0,0,0);function g(e){return parseFloat(e)||0}function p(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+g(e["border-"+n+"-width"])}),0)}function d(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return u;var i=l(e).getComputedStyle(e),o=function(e){for(var t={},n=0,i=["top","right","bottom","left"];n<i.length;n++){var o=i[n],r=e["padding-"+o];t[o]=g(r)}return t}(i),r=o.left+o.right,s=o.top+o.bottom,a=g(i.width),c=g(i.height);if("border-box"===i.boxSizing&&(Math.round(a+r)!==t&&(a-=p(i,"left","right")+r),Math.round(c+s)!==n&&(c-=p(i,"top","bottom")+s)),!function(e){return e===l(e).document.documentElement}(e)){var m=Math.round(a+r)-t,d=Math.round(c+s)-n;1!==Math.abs(m)&&(a-=m),1!==Math.abs(d)&&(c-=d)}return y(o.left,o.top,a,c)}var f="undefined"!==typeof SVGGraphicsElement?function(e){return e instanceof l(e).SVGGraphicsElement}:function(e){return e instanceof l(e).SVGElement&&"function"===typeof e.getBBox};function h(e){return i?f(e)?function(e){var t=e.getBBox();return y(0,0,t.width,t.height)}(e):d(e):u}function y(e,t,n,i){return{x:e,y:t,width:n,height:i}}var v=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=h(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),_=function(e,t){var n=function(e){var t=e.x,n=e.y,i=e.width,o=e.height,r="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(r.prototype);return m(s,{x:t,y:n,width:i,height:o,top:n,right:t+i,bottom:o+n,left:t}),s}(t);m(this,{target:e,contentRect:n})},b=function(){function e(e,t,i){if(this.activeObservations_=[],this.observations_=new n,"function"!==typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=i}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof l(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new v(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof l(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new _(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),w="undefined"!==typeof WeakMap?new WeakMap:new n,k=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=c.getInstance(),i=new b(t,n,this);w.set(this,i)};["observe","unobserve","disconnect"].forEach((function(e){k.prototype[e]=function(){var t;return(t=w.get(this))[e].apply(t,arguments)}}));var O="undefined"!==typeof o.ResizeObserver?o.ResizeObserver:k;t.a=O}).call(this,n("ntbh"))},dgO4:function(e,t,n){e.exports={imageGallery:"image-gallery_imageGallery__1JeAi",imageGalleryLeftNav:"image-gallery_imageGalleryLeftNav__27QwK",imageGalleryRightNav:"image-gallery_imageGalleryRightNav__3FhW1",imageGalleryLeftArrow:"image-gallery_imageGalleryLeftArrow__gioVv",imageGalleryRightArrow:"image-gallery_imageGalleryRightArrow__1hX0l",imageGalleryItems:"image-gallery_imageGalleryItems__10XOL",imageGalleryItemContainer:"image-gallery_imageGalleryItemContainer__2MY1v",animated:"image-gallery_animated__3ObeP",clickable:"image-gallery_clickable__NTIrH",imageGalleryItem:"image-gallery_imageGalleryItem__37Jh-",imageGalleryPreview:"image-gallery_imageGalleryPreview__3qUtx",imageGalleryPreviewImage:"image-gallery_imageGalleryPreviewImage__2yf5J"}},g4pe:function(e,t,n){e.exports=n("8Kt/")},gW9y:function(e,t,n){"use strict";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return C}));var o=n("q1tI"),r=n.n(o),s={title:"Commissions - Hacony Studio",description:"Art commissions by Hacony! Find out more about his commission tiers and prices here",keywords:["hacony","qundium","cocoshark","hornysharkat","yewonlee1999","odiousbird","art","studio","drawing","commission"],url:"https://hacony-studio.com/commission/",image:{src:"/images/commission-preview.png",type:"image/jpeg",width:1200,height:630},twitterImageSrc:"/images/commission-preview.png"},a=[{header:"Full Body | 100 USD",descPoints:["+ 80 USD per additional character","+ 10 USD for background, complicated character design, wings, etc"],gallery:["/images/commission/fullbody-00.png","/images/commission/fullbody-01.png","/images/commission/fullbody-02.png","/images/commission/fullbody-03.png","/images/commission/fullbody-04.png","/images/commission/fullbody-05.png","/images/commission/fullbody-06.png","/images/commission/fullbody-07.png","/images/commission/fullbody-08.png","/images/commission/fullbody-09.png","/images/commission/fullbody-10.png","/images/commission/fullbody-11.png","/images/commission/fullbody-12.png","/images/commission/fullbody-13.png","/images/commission/fullbody-14.png","/images/commission/fullbody-15.png","/images/commission/fullbody-16.png","/images/commission/fullbody-17.png","/images/commission/fullbody-18.png"],galleryHeight:"min(500px, 90vh)"},{header:"Sequence | 280 USD",descPoints:["4-5 scenes in one page"],gallery:["/images/commission/seq-00.png","/images/commission/seq-01.png","/images/commission/seq-02.png","/images/commission/seq-03.png","/images/commission/seq-04.png","/images/commission/seq-05.png","/images/commission/seq-06.png","/images/commission/seq-07.png","/images/commission/seq-08.png","/images/commission/seq-09.png","/images/commission/seq-10.png","/images/commission/seq-11.png"],galleryHeight:"min(500px, 90vh)"},{header:"Sticker | 25~35 USD",descPoints:["Flat-coloured stickers for Telegram","Price is per sticker, maximum of 6 stickers","+ 5-12 USD for shine/shading","+ 5-10 USD per additional character"],gallery:["/images/commission/stickers-00.png","/images/commission/stickers-01.png","/images/commission/stickers-02.png","/images/commission/stickers-03.png","/images/commission/stickers-04.png","/images/commission/stickers-05.png","/images/commission/stickers-06.png","/images/commission/stickers-07.png","/images/commission/stickers-08.png","/images/commission/stickers-09.png","/images/commission/stickers-10.png","/images/commission/stickers-11.png","/images/commission/stickers-12.png","/images/commission/stickers-13.png","/images/commission/stickers-14.png","/images/commission/stickers-15.png","/images/commission/stickers-16.png","/images/commission/stickers-17.png","/images/commission/stickers-18.png","/images/commission/stickers-19.png","/images/commission/stickers-20.png","/images/commission/stickers-21.png","/images/commission/stickers-22.png","/images/commission/stickers-23.png","/images/commission/stickers-24.png","/images/commission/stickers-25.png","/images/commission/stickers-26.png","/images/commission/stickers-27.png","/images/commission/stickers-28.png","/images/commission/stickers-29.png","/images/commission/stickers-30.png","/images/commission/stickers-31.png","/images/commission/stickers-32.png","/images/commission/stickers-33.png","/images/commission/stickers-34.png","/images/commission/stickers-35.png","/images/commission/stickers-36.png","/images/commission/stickers-37.png","/images/commission/stickers-38.png"],galleryHeight:"200px"},{header:"Comic | 150+ USD",descPoints:["Price depends on story, characters, and complexity","Each comic page has 3-5 panels"],gallery:["/images/commission/comic-00.png","/images/commission/comic-01.png","/images/commission/comic-02.png","/images/commission/comic-03.png","/images/commission/comic-04.png","/images/commission/comic-05.png","/images/commission/comic-06.png","/images/commission/comic-07.png","/images/commission/comic-08.png","/images/commission/comic-09.png"],galleryHeight:"min(500px,90vh)"},{header:"Character Sheet | 180+ USD",descPoints:["Front and back view","+ 50 USD for new character designs"],gallery:["/images/commission/charref-00.png","/images/commission/charref-01.png","/images/commission/charref-02.png","/images/commission/charref-03.png","/images/commission/charref-04.png","/images/commission/charref-05.png","/images/commission/charref-06.png"],galleryHeight:"min(500px,90vh)"}],c=["Male","Furry","NSFW","Goo Transformation","Latex","Pooltoy","Bondage","Watersports","Ferals","Mecha","Insects"],m=["Female","Human","Underaged characters","Blood","Fantasy Armours","Propaganda"],l=["Payments made must be in USD on Paypal","Commissions are posted to Patreon first. Please wait for 1 month before uploading the commission","Commissions are to be used for non-commercial purposes only"],u=n("g4pe"),g=n.n(u),p=n("20a2"),d="https://hacony-studio.com",f=r.a.createElement,h=function(e){var t=Object(p.useRouter)(),n=e.title,i=e.description,r=e.keywords,s=e.url,a=e.image,c=e.twitterImageSrc,m=n||"Hacony Studio",l="undefined"==typeof s?d+t.asPath:s,u=a||{src:"".concat(d,"/images/site-preview.jpg"),type:"image/jpeg",width:1200,height:630},h="undefined"==typeof c?"".concat(d,"/images/site-preview-twitter.jpg"):c;return f(g.a,null,"",f("title",null,m),f("meta",{charSet:"utf-8"}),f("link",{rel:"icon",href:"/favicon.png"}),f("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i&&f("meta",{name:"description",content:i}),r&&f("meta",{name:"keywords",content:r.join(", ")}),f("meta",{name:"language",content:"english,korean"}),f("meta",{name:"copyright",content:"Hacony"}),f("meta",{name:"distribution",content:"global"}),f("meta",{property:"og:title",content:m}),f("meta",{property:"og:type",content:"website"}),l&&f("meta",{property:"og:url",content:l}),i&&f("meta",{property:"og:description",content:i}),u&&u.src&&f(o.Fragment,null,f("meta",{property:"og:image",content:u.src}),f("meta",{property:"og:image:type",content:"image/jpeg"}),f("meta",{property:"og:image:width",content:"1200"}),f("meta",{property:"og:image:height",content:"630"})),f("meta",{property:"twitter:card",content:"summary_large_image"}),f("meta",{property:"twitter:site",content:"@yewonlee1999"}),f("meta",{property:"twitter:title",content:m}),i&&f("meta",{property:"twitter:description",content:i}),h&&f("meta",{property:"twitter:image",content:h}),l&&f("meta",{property:"twitter:url",content:l}),f("meta",{property:"twitter:domain",content:"hacony-studio.com"}))},y=n("bdgK");var v=n("TSYQ"),_=n.n(v),b=n("dgO4"),w=n.n(b),k=r.a.createElement,O=function(e){var t=e.srcs,n=e.height,i=e.padCount,r=Object(o.useRef)(),s=Object(o.useState)(0),a=s[0],c=s[1],m=Object(o.useState)(!1),l=m[0],u=m[1],g=function(e){var t=Object(o.useState)(void 0),n=t[0],i=t[1];return Object(o.useEffect)((function(){function t(){if("undefined"!=typeof e.current){var t=DOMRectReadOnly.fromRect(e.current.getBoundingClientRect());void 0!=n&&t.bottom==n.bottom&&t.height==n.height&&t.left==n.left&&t.right==n.right&&t.top==n.top&&t.width==n.width&&t.x==n.x&&t.y==n.y||i(t)}}window.addEventListener("resize",t),window.addEventListener("scroll",t);var o=new y.a(t);return o.observe(e.current),function(){o&&o.disconnect(),window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n}(r),p=Object(o.useState)(new Array(t.length).fill(0)),d=p[0],f=p[1],h=Math.round(.05*((null===g||void 0===g?void 0:g.height)||1))||1;function v(e){var n=t.length;return(e%n+n)%n}function b(e){return t[v(e)]}function O(e){return d[v(e)]}function x(e,t){var n=-O(e)/2;if(0===t);else if(t<0)for(var i=t;i<0;i++)n-=O(e+i)+h;else if(t>0)for(var o=0;o<t;o++)n+=O(e+o)+h;return"translateX(".concat(n,"px)")}function N(e){return function(){l||u(!0),c(a+e)}}for(var M=N(-1),C=N(1),E=[],S=-i;S<=i;S++){var A=a+S,T={width:"".concat(O(A),"px"),transform:x(a,S),zIndex:i-Math.abs(S)};0!=S&&(T.cursor="pointer");var H=_()(w.a.imageGalleryItemContainer,0!==S&&w.a.clickable,l&&w.a.animated);E.push(k("div",{key:A,className:H,style:T,onClick:N(S)},k("img",{className:w.a.imageGalleryItem,src:b(A)})))}return k("div",{className:w.a.imageGallery,ref:r,style:{height:n}},k("div",{className:w.a.imageGalleryLeftNav,onClick:M},k("img",{className:w.a.imageGalleryLeftArrow,src:"/images/gallery-arrow-left.svg"})),k("div",{className:w.a.imageGalleryRightNav,onClick:C},k("img",{className:w.a.imageGalleryRightArrow,src:"/images/gallery-arrow-right.svg"})),k("div",{className:w.a.imageGalleryItems},E),k(I,{srcs:t,height:n,updateImageWidths:f}))},I=function(e){var t=e.srcs,n=e.height,i=e.updateImageWidths,r=Object(o.useRef)(void 0),s=Object(o.useState)(Math.floor(1e5*Math.random()))[0];function a(){if(console.log("update",s),r.current){var e=r.current,t=Array.from(e.children).map((function(e){return e.clientWidth}));i(t)}}return Object(o.useEffect)((function(){a()}),[t.join("|")]),k("div",{className:w.a.imageGalleryPreview,ref:r,style:{height:n}},t.map((function(e,t){return k("img",{key:t,className:w.a.imageGalleryPreviewImage,src:e,onLoad:a})})))},x=n("qMY7"),N=n.n(x),M=r.a.createElement;function C(){return M(o.Fragment,null,M(h,s),M("div",{className:N.a.bannerContainer},M("img",{className:N.a.banner,src:"/images/commission-banner.png"}),M("div",{className:N.a.bannerFade})),M("div",{className:N.a.contentContainer},M(S,null,M("div",{className:N.a.titleContainer},M("img",{className:N.a.titleLogo,src:"/images/logo-hacony.png"}),M("h1",{className:N.a.titleText},"Commission Information"),M("p",{className:N.a.subtitleText},"Commissions open the first day of every month!"))),a.map((function(e,t){return M(E,i({},e,{key:t}))})),M(S,null,M("h2",{className:N.a.externalGalleryHeader},"For more examples, check out my gallery"),M("div",{className:N.a.iconContainer},M("a",{href:"https://twitter.com/hornysharkat",target:"_blank",rel:"noreferrer"},M("img",{className:N.a.icon,src:"/images/logo-twitter.png"})),M("a",{href:"https://www.furaffinity.net/user/qundium",target:"_blank",rel:"noreferrer"},M("img",{className:N.a.icon,src:"/images/logo-furaffinity.png"})))),M(S,null,M("div",{className:N.a.drawInfoContainer},M("div",{className:N.a.drawInfoSection},M("h2",{className:N.a.drawInfoHeader},"What I will draw\u2026"),M("ul",null,c.map((function(e,t){return M("li",{className:N.a.drawInfoListItem,key:t},e)})))),M("div",{className:N.a.drawInfoSection},M("h2",{className:N.a.drawInfoHeader},"What I won\u2019t draw\u2026"),M("ul",null,m.map((function(e,t){return M("li",{className:N.a.drawInfoListItem,key:t},e)})))))),M(S,null,M("h2",{className:N.a.commissionNotesHeader},"Please note:"),M("ul",{className:N.a.commissionNoteList},l.map((function(e,t){return M("li",{className:N.a.commissionNoteListItem,key:t},e)})))),M(S,null,M("h2",{className:N.a.contactHeader},"Contact"),M("p",{className:N.a.contactText},"For commissions and questions, please contact me on Telegram!"),M("div",{className:N.a.iconContainer},M("a",{href:"https://t.me/hacony",target:"_blank",rel:"noreferrer"},M("img",{className:N.a.icon,src:"/images/logo-telegram.png"}))))))}var E=function(e){var t=e.header,n=e.descPoints,i=e.gallery,o=e.galleryHeight;return M(S,{wideContent:!0},M("div",{className:N.a.commissionTierContainer},i&&M(O,{srcs:i,height:o,padCount:6}),M("div",{className:N.a.commissionTierInfoContainer},M("div",{className:N.a.commissionTierInfo},M("h2",{className:N.a.commissionTierHeader},t),M("div",{className:N.a.commissionTierDescriptions},M("ul",null,n&&n.map((function(e,t){return M("li",{className:N.a.commissionTierDescription,key:t},e)}))))))))},S=function(e){var t=e.wideContent,n=e.children;return M("div",{className:N.a.contentRow},M("div",{className:_()(N.a.content,t&&N.a.wide)},n))}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var i;t.__esModule=!0,t.AmpStateContext=void 0;var o=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});t.AmpStateContext=o},ntbh:function(e,t){(function(t){e.exports=function(){var e={149:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"===typeof window&&(t=window)}e.exports=t}},n={};function i(t){if(n[t])return n[t].exports;var o=n[t]={exports:{}},r=!0;try{e[t](o,o.exports,i),r=!1}finally{r&&delete n[t]}return o.exports}return i.ab=t+"/",i(149)}()}).call(this,"/")},qMY7:function(e,t,n){e.exports={bannerContainer:"page-commission_bannerContainer__3h_aa",banner:"page-commission_banner__1J_qJ",bannerFade:"page-commission_bannerFade__Ftx1z",contentContainer:"page-commission_contentContainer__xnS8X",titleContainer:"page-commission_titleContainer__1FCH3",titleLogo:"page-commission_titleLogo__XPFaq",titleText:"page-commission_titleText__2i8mN",subtitleText:"page-commission_subtitleText__1gIOM",contentRow:"page-commission_contentRow__4-jmK",content:"page-commission_content__1Cbp7",wide:"page-commission_wide__f3Zk0",commissionTierHeader:"page-commission_commissionTierHeader__2DRNM",drawInfoHeader:"page-commission_drawInfoHeader__oJp_e",commissionNotesHeader:"page-commission_commissionNotesHeader__-X5AH",contactHeader:"page-commission_contactHeader__1FXR7",commissionTierInfoContainer:"page-commission_commissionTierInfoContainer__du1Jb",commissionTierInfo:"page-commission_commissionTierInfo__1IAwo",commissionTierDescriptions:"page-commission_commissionTierDescriptions__39i-z",commissionTierDescription:"page-commission_commissionTierDescription__1OnKk",drawInfoListItem:"page-commission_drawInfoListItem__25Jes",commissionNoteListItem:"page-commission_commissionNoteListItem__jrJ06",externalGalleryHeader:"page-commission_externalGalleryHeader__3AQzJ",contactText:"page-commission_contactText__1qslI",iconContainer:"page-commission_iconContainer__1UMUL",icon:"page-commission_icon__12w6X",drawInfoContainer:"page-commission_drawInfoContainer__gQODJ",drawInfoSection:"page-commission_drawInfoSection__31aHF",commissionNoteList:"page-commission_commissionNoteList__3CT6x"}}}]);