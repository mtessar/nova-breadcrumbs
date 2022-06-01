(()=>{var e,r={622:(e,r,t)=>{Nova.booting((function(e,r){e.component("breadcrumbs",t(316).Z)}))},248:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var n=t(645),o=t.n(n)()((function(e){return e[1]}));o.push([e.id,".breadcrumbs{border-radius:10px;display:flex;flex-wrap:wrap;list-style:none;margin-top:0;padding:12px}.breadcrumbs .breadcrumbs-item{position:relative}.breadcrumbs .breadcrumbs-item a{color:rgba(var(--colors-primary-500));font-weight:600!important;margin-left:8px;margin-right:6px;text-decoration:none}.breadcrumbs .breadcrumbs-item span{display:inline-block;font-weight:600!important;margin-left:8px;margin-right:6px}.breadcrumbs .breadcrumbs-item:last-child:after{display:none}",""]);const a=o},645:e=>{"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t=e(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(e,t,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);n&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),r.push(s))}},r}},962:()=>{},379:(e,r,t)=>{"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(r){if(void 0===e[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[r]=t}return e[r]}}(),i=[];function c(e){for(var r=-1,t=0;t<i.length;t++)if(i[t].identifier===e){r=t;break}return r}function s(e,r){for(var t={},n=[],o=0;o<e.length;o++){var a=e[o],s=r.base?a[0]+r.base:a[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var d=c(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:h(f,r),references:1}),n.push(u)}return n}function l(e){var r=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=t.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){r.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(r);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var u,d=(u=[],function(e,r){return u[e]=r,u.filter(Boolean).join("\n")});function f(e,r,t,n){var o=t?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(r,o);else{var a=document.createTextNode(o),i=e.childNodes;i[r]&&e.removeChild(i[r]),i.length?e.insertBefore(a,i[r]):e.appendChild(a)}}function p(e,r,t){var n=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,v=0;function h(e,r){var t,n,o;if(r.singleton){var a=v++;t=m||(m=l(r)),n=f.bind(null,t,a,!1),o=f.bind(null,t,a,!0)}else t=l(r),n=p.bind(null,t,r),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else o()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var t=s(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<t.length;n++){var o=c(t[n]);i[o].references--}for(var a=s(e,r),l=0;l<t.length;l++){var u=c(t[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=a}}}},744:(e,r)=>{"use strict";r.Z=(e,r)=>{const t=e.__vccOpts||e;for(const[e,n]of r)t[e]=n;return t}},316:(e,r,t)=>{"use strict";t.d(r,{Z:()=>f});const n=Vue;var o={key:0,class:"breadcrumbs"},a={key:0},i=["href"];const c={props:["card","resource","resourceId","resourceName"],mounted:function(){},methods:{linkURI:function(e){var r,t;return"".concat(e.resourceName?"/resources/":"").concat(null!==(r=e.resourceName)&&void 0!==r?r:"","/").concat(null!==(t=e.resourceId)&&void 0!==t?t:"")},linkData:function(e){var r=new URLSearchParams;return e.viaResource&&r.set("viaResource",e.viaResource),e.viaResourceId&&r.set("viaResourceId",e.viaResourceId),e.viaRelationship&&r.set("viaRelationship",e.viaRelationship),Array.from(r.entries()).length>0?"?".concat(r.toString()):""},hashData:function(e){var r,t=new URLSearchParams;return e.tab&&t.set(null!==(r=e.tabQuery)&&void 0!==r?r:"tab",e.tab),Array.from(t.entries()).length>0?"#".concat(t.toString()):""},linkHref:function(e){var r;return null!==(r=e.url)&&void 0!==r?r:"".concat(this.linkURI(e)).concat(this.linkData(e)).concat(this.hashData(e))}},computed:{shouldShowBreadcrumbs:function(){return Object.keys(this.card.items).length>0}}};var s=t(379),l=t.n(s),u=t(248),d={insert:"head",singleton:!1};l()(u.Z,d);u.Z.locals;const f=(0,t(744).Z)(c,[["render",function(e,r,t,c,s,l){var u=(0,n.resolveComponent)("HeroIconSolidChevronRight"),d=(0,n.resolveComponent)("Card");return(0,n.openBlock)(),(0,n.createBlock)(d,{class:"flex flex-col justify-center"},{default:(0,n.withCtx)((function(){return[l.shouldShowBreadcrumbs?((0,n.openBlock)(),(0,n.createElementBlock)("div",o,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(t.card.items,(function(r,o){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{key:o,class:"breadcrumbs-item"},["span"===r.displayType?((0,n.openBlock)(),(0,n.createElementBlock)("span",a,[(0,n.renderSlot)(e.$slots,"default",{},(function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(r.label),1)]}))])):((0,n.openBlock)(),(0,n.createElementBlock)("a",{key:1,href:l.linkHref(r)},(0,n.toDisplayString)(r.label),9,i)),o<t.card.items.length-1?((0,n.openBlock)(),(0,n.createBlock)(u,{key:2,class:"chevron"})):(0,n.createCommentVNode)("",!0)])})),128))])):(0,n.createCommentVNode)("",!0)]})),_:3})}]])}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={id:e,exports:{}};return r[e](a,a.exports,n),a.exports}n.m=r,e=[],n.O=(r,t,o,a)=>{if(!t){var i=1/0;for(u=0;u<e.length;u++){for(var[t,o,a]=e[u],c=!0,s=0;s<t.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](t[s])))?t.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(u--,1);var l=o();void 0!==l&&(r=l)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,o,a]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={440:0,458:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var o,a,[i,c,s]=t,l=0;if(i.some((r=>0!==e[r]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var u=s(n)}for(r&&r(t);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},t=self.webpackChunkformfeed_nova_breadcrumbs=self.webpackChunkformfeed_nova_breadcrumbs||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n.nc=void 0,n.O(void 0,[458],(()=>n(622)));var o=n.O(void 0,[458],(()=>n(962)));o=n.O(o)})();