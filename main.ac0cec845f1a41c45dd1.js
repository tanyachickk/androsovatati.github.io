!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n(2),n(7),n(1)},function(e,t,n){"use strict";window.onload=function(){var e="menu__item_active",t=0,n=0,o=document.getElementsByClassName("content-slider")[0],r=document.getElementsByClassName("slide").length,s=document.getElementById("current-slide"),a=document.getElementById("slides-count"),l=document.getElementsByClassName("info__title")[0],i=document.getElementsByClassName("menu__item"),c=document.getElementsByClassName("content-block"),d=document.getElementById("menu-icon"),u=document.getElementById("menu-close-icon"),m=document.getElementById("menu"),f=document.getElementsByClassName("socials")[0],y=document.getElementById("next-btn"),v=document.getElementById("prev-btn"),p=null;function _(e){return e<10&&e>0?"0"+e:""+e}function E(e,t){var n=this,o=!1;return function(){for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];o||(e.apply(n,s),o=!0,setTimeout(function(){o=!1},t))}}function b(e){clearTimeout(p),p=setTimeout(function(){e||window.event;var n=e.deltaY||e.detail||e.wheelDelta;n>0&&t<3?E(g,5e3)():n<0&&t>0&&E(L,5e3)()},35)}function g(){i[t].classList.remove(e),t++,l.style.transform="translateX("+-100*t+"%)";for(var n=1;n<=t;n++)c[n].style.top=0;if(3===t)for(var o=0;o<t;o++)c[o].style.opacity=0;else for(var r=0;r<t;r++)c[r].style.opacity=1;i[t].classList.add(e)}function L(){i[t].classList.remove(e),t--,l.style.transform="translateX("+-100*t+"%)";for(var n=t+1;n<=3;n++)c[n].style.top="100%";for(var o=0;o<=t;o++)c[o].style.opacity=1;i[t].classList.add(e)}function h(){m.style.opacity=0,setTimeout(function(){m.style.zIndex=-1},300),!1}setTimeout(function(){l.style.transition="transform .5s ease-in-out",o.style.transition="transform .5s ease-in-out",l.style.transform="translateX(0)",o.style.transform="translateX(0)",a.innerText=_(r),s.innerText=_(n+1)},500);for(var w=function(n){i[n].addEventListener("click",function(){i[t].classList.remove(e);var o=t<n;if(t=n,o){l.style.transform="translateX("+-100*t+"%)";for(var r=1;r<=t;r++)c[r].style.top=0;if(3===t)for(var s=0;s<t;s++)c[s].style.opacity=0;else for(var a=0;a<t;a++)c[a].style.opacity=1}else{l.style.transform="translateX("+-100*t+"%)";for(var d=t+1;d<=3;d++)c[d].style.top="100%";for(var u=0;u<=t;u++)c[u].style.opacity=1}i[n].classList.add(e),f.style.display=n>0?"none":"flex",h()})},x=0;x<i.length;x++)w(x);y.addEventListener("click",function(){n<r-1&&(n++,o.style.transform="translateX("+-100*n+"%)",s.innerText=_(n+1),n===r-1?y.classList.add("header-controls__arrow_disabled"):(v.classList.remove("header-controls__arrow_disabled"),y.classList.remove("header-controls__arrow_disabled")))}),v.addEventListener("click",function(){n>0&&(n--,o.style.transform="translateX("+-100*n+"%)",s.innerText=_(n+1),0===n?v.classList.add("header-controls__arrow_disabled"):(v.classList.remove("header-controls__arrow_disabled"),y.classList.remove("header-controls__arrow_disabled")))}),d.addEventListener("click",function(){m.style.opacity=1,m.style.zIndex=100,!0}),u.addEventListener("click",function(){h()}),document.addEventListener?("onwheel"in document?document.addEventListener("wheel",b):"onmousewheel"in document?document.addEventListener("mousewheel",b):document.addEventListener("MozMousePixelScroll",b),document.addEventListener("keydown",function(e){var n=e.keyCode;(37===n||38===n)&&t>0?L():(39===n||40===n)&&t<3&&g()})):document.attachEvent("onmousewheel",b)}},function(e,t){},,,,,function(e,t){}]);
//# sourceMappingURL=main.ac0cec845f1a41c45dd1.js.map