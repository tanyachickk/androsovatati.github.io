!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n(2),n(7),n(1)},function(e,t,n){"use strict";window.onload=function(){var e="menu__item_active",t=0,n=0,o=window.innerHeight>window.innerWidth,r=document.getElementsByClassName("content-slider")[0],s=document.getElementsByClassName("slide").length,i=document.getElementById("current-slide"),a=document.getElementById("slides-count"),l=document.getElementsByClassName("info__title")[0],c=document.getElementsByClassName("menu__item"),d=document.getElementsByClassName("content-block"),u=document.getElementById("menu-icon"),m=document.getElementById("menu-close-icon"),f=document.getElementById("menu"),y=document.getElementsByClassName("socials")[0],v=document.getElementById("next-btn"),p=document.getElementById("prev-btn"),_=null;function w(e){return e<10&&e>0?"0"+e:""+e}function E(e,t){var n=this,o=!1;return function(){for(var r=arguments.length,s=Array(r),i=0;i<r;i++)s[i]=arguments[i];o||(e.apply(n,s),o=!0,setTimeout(function(){o=!1},t))}}function g(e){clearTimeout(_),_=setTimeout(function(){e||window.event;var n=e.deltaY||e.detail||e.wheelDelta;n>0&&t<3?E(L,5e3)():n<0&&t>0&&E(b,5e3)()},35)}function L(){c[t].classList.remove(e),t++,l.style.transform="translateX("+-100*t+"%)";for(var n=1;n<=t;n++)d[n].style.top=0;if(3===t)for(var o=0;o<t;o++)d[o].style.opacity=0;else for(var r=0;r<t;r++)d[r].style.opacity=1;c[t].classList.add(e)}function b(){c[t].classList.remove(e),t--,l.style.transform="translateX("+-100*t+"%)";for(var n=t+1;n<=3;n++)d[n].style.top="100%";for(var o=0;o<=t;o++)d[o].style.opacity=1;c[t].classList.add(e)}function h(){f.style.opacity=0,setTimeout(function(){f.style.zIndex=-1},300),!1}function x(){f.style.opacity=1,f.style.zIndex=100,!0}setTimeout(function(){l.style.transition="transform .5s ease-in-out",r.style.transition="transform .5s ease-in-out",l.style.transform="translateX(0)",r.style.transform="translateX(0)",a.innerText=w(s),i.innerText=w(n+1)},500);for(var B=function(n){c[n].addEventListener("click",function(){c[t].classList.remove(e);var r=t<n;if(t=n,r){l.style.transform="translateX("+-100*t+"%)";for(var s=1;s<=t;s++)d[s].style.top=0;if(3===t)for(var i=0;i<t;i++)d[i].style.opacity=0;else for(var a=0;a<t;a++)d[a].style.opacity=1}else{l.style.transform="translateX("+-100*t+"%)";for(var u=t+1;u<=3;u++)d[u].style.top="100%";for(var m=0;m<=t;m++)d[m].style.opacity=1}c[n].classList.add(e),y.style.display=n>0?"none":"flex",o&&h()})},T=0;T<c.length;T++)B(T);v.addEventListener("click",function(){n<s-1&&(n++,r.style.transform="translateX("+-100*n+"%)",i.innerText=w(n+1),n===s-1?v.classList.add("header-controls__arrow_disabled"):(p.classList.remove("header-controls__arrow_disabled"),v.classList.remove("header-controls__arrow_disabled")))}),p.addEventListener("click",function(){n>0&&(n--,r.style.transform="translateX("+-100*n+"%)",i.innerText=w(n+1),0===n?p.classList.add("header-controls__arrow_disabled"):(p.classList.remove("header-controls__arrow_disabled"),v.classList.remove("header-controls__arrow_disabled")))}),u.addEventListener("click",function(){x()}),m.addEventListener("click",function(){h()}),window.addEventListener("resize",function(e){(o=window.innerHeight>window.innerWidth)||x()}),document.addEventListener?("onwheel"in document?document.addEventListener("wheel",g):"onmousewheel"in document?document.addEventListener("mousewheel",g):document.addEventListener("MozMousePixelScroll",g),document.addEventListener("keydown",function(e){var n=e.keyCode;(37===n||38===n)&&t>0?b():(39===n||40===n)&&t<3&&L()})):document.attachEvent("onmousewheel",g)}},function(e,t){},,,,,function(e,t){}]);
//# sourceMappingURL=main.bee7bb6b7e38f40c5a8c.js.map