!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["feeds/fixed-sidebars"]=t():n["feeds/fixed-sidebars"]=t()}(self,(function(){return function(){var n,t,e={178:function(n,t,e){var o=e(645)((function(n){return n[1]}));o.push([n.id,".international-header {\n  position: sticky !important;\n  top: 0 !important;\n}\n\n.van-popper-avatar,\n.van-popper-vip,\n.van-popper-favorite,\n.van-popper-history,\n.van-popper-upload,\n.popover-channe,\n.popover-game,\n.popover-live,\n.custom-navbar {\n  position: fixed !important;\n}\n\n.sticky-bar {\n  display: none !important;\n}\n\n.left-panel,\n.right-panel {\n  position: fixed !important;\n}\n\n.home-container {\n  --left-width: 244px;\n  --center-width: 632px;\n}\n@media screen and (min-width: 1921px) {\n  .home-container {\n    --left-width: 12.71vw;\n    --center-width: 32.92vw;\n  }\n}\n@media screen and (min-width: 2497px) {\n  .home-container {\n    --left-width: 317px;\n    --center-width: 822px;\n  }\n}\n\n.center-panel {\n  margin-left: calc(var(--left-width) + 8px) !important;\n}\n\n.right-panel {\n  margin-left: calc(var(--left-width) + 16px + var(--center-width)) !important;\n}\n\n.live-panel .live-up-list {\n  max-height: calc(100vh - 380px);\n  overflow: auto;\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n}\n.live-panel .live-up-list::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\nbody.feeds-filter-side-block-profile .live-panel .live-up-list {\n  max-height: calc(100vh - 180px);\n}\n\n.adaptive-scroll {\n  min-height: unset !important;\n}\n.adaptive-scroll .scroll-content {\n  position: static !important;\n}",""]),n.exports=o},645:function(n){"use strict";
// eslint-disable-next-line func-names
n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
t.i=function(n,e,o){"string"==typeof n&&(
// eslint-disable-next-line no-param-reassign
n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var p=0;p<n.length;p++){var c=[].concat(n[p]);o&&r[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),t.push(c))}},t}},871:function(n,t,e){var o=e(178);o&&o.__esModule&&(o=o.default),n.exports="string"==typeof o?o:o.toString()},30:function(n){"use strict";n.exports=coreApis.componentApis.feeds.disableProfilePopup}},o={};function r(n){var t=o[n];if(void 0!==t)return t.exports;var i=o[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(n){return Object.getPrototypeOf(n)}:function(n){return n.__proto__},r.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var i=Object.create(null);r.r(i);var a={};n=n||[null,t({}),t([]),t(t)];for(var p=2&o&&e;"object"==typeof p&&!~n.indexOf(p);p=t(p))Object.getOwnPropertyNames(p).forEach((function(n){a[n]=function(){return e[n]}}));return a.default=function(){return e},r.d(i,a),i},r.d=function(n,t){for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return n}});const n={name:"fixedFeedsSidebars",instantStyles:[{name:"fixed-sidebars-style",style:()=>Promise.resolve().then(r.t.bind(r,871,23)),important:!0}],displayName:"强制固定动态侧栏",description:{"zh-CN":"强制固定动态主页的顶栏和所有侧栏."},tags:[componentsTags.feeds],entry:async()=>{const{disableProfilePopup:n}=await Promise.resolve().then(r.t.bind(r,30,23));n()},urlInclude:[/^https:\/\/t\.bilibili\.com\/$/],commitHash:"c8ff2257c63cd444014671cd77d47b45382e94a6",coreVersion:"2.1.5"}}(),i=i.component}()}));