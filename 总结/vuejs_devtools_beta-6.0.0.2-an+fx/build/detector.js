(function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=292)})({119:function(e,t,o){"use strict";function n(){}Object.defineProperty(t,"__esModule",{value:!0}),t.installToast=void 0,t.installToast=n},292:function(e,t,o){"use strict";o.r(t);var n=o(119),i=o(6);function r(e){setTimeout(()=>{var t,o=!(!window.__NUXT__&&!window.$nuxt);if(o)return window.$nuxt&&(t=window.$nuxt.$root.constructor),void e.postMessage({devtoolsEnabled:t&&t.config.devtools,vueDetected:!0,nuxtDetected:!0},"*");var n=!!window.__VUE__;if(n)e.postMessage({devtoolsEnabled:!0,vueDetected:!0},"*");else{for(var i,r=document.querySelectorAll("*"),s=0;s<r.length;s++)if(r[s].__vue__){i=r[s];break}if(i){var a=Object.getPrototypeOf(i.__vue__).constructor;while(a.super)a=a.super;e.postMessage({devtoolsEnabled:a.config.devtools,vueDetected:!0},"*")}}},100)}function s(e){var t=";("+e.toString()+")(window)";if(i["isFirefox"])window.eval(t);else{var o=document.createElement("script");o.textContent=t,document.documentElement.appendChild(o),o.parentNode.removeChild(o)}}window.addEventListener("message",e=>{e.source===window&&e.data.vueDetected&&chrome.runtime.sendMessage(e.data)}),document instanceof HTMLDocument&&(s(r),s(n["installToast"]))},5:function(e,t){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(n){"object"===typeof window&&(o=window)}e.exports=o},6:function(e,t,o){"use strict";(function(e){function o(e){e.prototype.hasOwnProperty("$isChrome")||(Object.defineProperties(e.prototype,{$isChrome:{get:()=>t.isChrome},$isFirefox:{get:()=>t.isFirefox},$isWindows:{get:()=>t.isWindows},$isMac:{get:()=>t.isMac},$isLinux:{get:()=>t.isLinux},$keys:{get:()=>t.keys}}),t.isWindows&&document.body.classList.add("platform-windows"),t.isMac&&document.body.classList.add("platform-mac"),t.isLinux&&document.body.classList.add("platform-linux"))}Object.defineProperty(t,"__esModule",{value:!0}),t.initEnv=t.keys=t.isLinux=t.isMac=t.isWindows=t.isFirefox=t.isChrome=t.target=t.isBrowser=void 0,t.isBrowser="undefined"!==typeof navigator,t.target=t.isBrowser?window:"undefined"!==typeof e?e:{},t.isChrome="undefined"!==typeof t.target.chrome&&!!t.target.chrome.devtools,t.isFirefox=t.isBrowser&&navigator.userAgent.indexOf("Firefox")>-1,t.isWindows=t.isBrowser&&0===navigator.platform.indexOf("Win"),t.isMac=t.isBrowser&&"MacIntel"===navigator.platform,t.isLinux=t.isBrowser&&0===navigator.platform.indexOf("Linux"),t.keys={ctrl:t.isMac?"&#8984;":"Ctrl",shift:"Shift",alt:t.isMac?"&#8997;":"Alt",del:"Del",enter:"Enter",esc:"Esc"},t.initEnv=o}).call(this,o(5))}});