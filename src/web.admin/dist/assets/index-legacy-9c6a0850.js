/*! 
 Build based on gin-vue-admin 
 Time : 1691996246000 */
System.register(["./index-legacy-a1fdc544.js","./_plugin-vue_export-helper-legacy-c6aa7c23.js"],(function(e,n){"use strict";var r,t,l,c,i,u,s;return{setters:[function(e){r=e.S,t=e.P,l=e.R,c=e.r,i=e.o,u=e.c},function(e){s=e._}],execute:function(){var n=document.createElement("style");n.textContent=".screenfull-svg[data-v-944c2140]{width:16px;height:16px;cursor:pointer;vertical-align:middle;margin-right:32px;fill:rgba(0,0,0,.45)}\n",document.head.appendChild(n);var o={exports:{}};
/*!
			* screenfull
			* v5.2.0 - 2021-11-03
			* (c) Sindre Sorhus; MIT License
			*/!function(e){!function(){var n="undefined"!=typeof window&&void 0!==window.document?window.document:{},r=e.exports,t=function(){for(var e,r=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],t=0,l=r.length,c={};t<l;t++)if((e=r[t])&&e[1]in n){for(t=0;t<e.length;t++)c[r[0][t]]=e[t];return c}return!1}(),l={change:t.fullscreenchange,error:t.fullscreenerror},c={request:function(e,r){return new Promise(function(l,c){var i=function(){this.off("change",i),l()}.bind(this);this.on("change",i);var u=(e=e||n.documentElement)[t.requestFullscreen](r);u instanceof Promise&&u.then(i).catch(c)}.bind(this))},exit:function(){return new Promise(function(e,r){if(this.isFullscreen){var l=function(){this.off("change",l),e()}.bind(this);this.on("change",l);var c=n[t.exitFullscreen]();c instanceof Promise&&c.then(l).catch(r)}else e()}.bind(this))},toggle:function(e,n){return this.isFullscreen?this.exit():this.request(e,n)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,r){var t=l[e];t&&n.addEventListener(t,r,!1)},off:function(e,r){var t=l[e];t&&n.removeEventListener(t,r,!1)},raw:t};t?(Object.defineProperties(c,{isFullscreen:{get:function(){return Boolean(n[t.fullscreenElement])}},element:{enumerable:!0,get:function(){return n[t.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(n[t.fullscreenEnabled])}}}),r?e.exports=c:window.screenfull=c):r?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}}()}(o);var a=r(o.exports),f={key:0,class:"gvaIcon gvaIcon-fullscreen-expand"},d={key:1,class:"gvaIcon gvaIcon-fullscreen-shrink"},h={name:"Screenfull"};e("default",s(Object.assign(h,{props:{width:{type:Number,default:22},height:{type:Number,default:22},fill:{type:String,default:"#48576a"}},setup:function(e){t((function(){a.isEnabled&&a.on("change",s)})),l((function(){a.off("change")}));var n=function(){a.isEnabled&&a.toggle()},r=c(!0),s=function(){r.value=!a.isFullscreen};return function(e,t){return i(),u("div",{onClick:n},[r.value?(i(),u("div",f)):(i(),u("div",d))])}}}),[["__scopeId","data-v-944c2140"]]))}}}));
