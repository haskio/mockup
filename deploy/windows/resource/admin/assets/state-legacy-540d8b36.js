/*! 
 Build based on gin-vue-admin 
 Time : 1691228829000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},u="function"==typeof Symbol?Symbol:{},a=u.iterator||"@@iterator",i=u.asyncIterator||"@@asyncIterator",c=u.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(O){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var u=e&&e.prototype instanceof p?e:p,a=Object.create(u.prototype),i=new k(r||[]);return o(a,"_invoke",{value:b(t,n,i)}),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}e.wrap=f;var d={};function p(){}function h(){}function v(){}var y={};l(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(j([])));m&&m!==n&&r.call(m,a)&&(y=m);var _=v.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function n(o,u,a,i){var c=s(t[o],t,u);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,i)}),(function(t){n("throw",t,a,i)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,i)}))}i(c.arg)}var u;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return u=u?u.then(o,o):o()}})}function b(t,e,n){var r="suspendedStart";return function(o,u){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw u;return G()}for(n.method=o,n.arg=u;;){var a=n.delegate;if(a){var i=C(a,n);if(i){if(i===d)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function C(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=s(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var u=o.arg;return u?u.done?(e[t.resultName]=u.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):u:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:G}}function G(){return{value:void 0,done:!0}}return h.prototype=v,o(_,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:h,configurable:!0}),h.displayName=l(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},x(w.prototype),l(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,o,u){void 0===u&&(u=Promise);var a=new w(f(t,n,r,o),u);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(_),l(_,c,"Generator"),l(_,a,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],a=u.completion;if("root"===u.tryLoc)return n("end");if(u.tryLoc<=this.prev){var i=r.call(u,"catchLoc"),c=r.call(u,"finallyLoc");if(i&&c){if(this.prev<u.catchLoc)return n(u.catchLoc,!0);if(this.prev<u.finallyLoc)return n(u.finallyLoc)}else if(i){if(this.prev<u.catchLoc)return n(u.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return n(u.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var u=o;break}}u&&("break"===t||"continue"===t)&&u.tryLoc<=e&&e<=u.finallyLoc&&(u=null);var a=u?u.completion:{};return a.type=t,a.arg=e,u?(this.method="next",this.next=u.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}function e(t,e,n,r,o,u,a){try{var i=t[u](a),c=i.value}catch(l){return void n(l)}i.done?e(c):Promise.resolve(c).then(r,o)}System.register(["./index-legacy-362f7fa2.js","./progress-legacy-6334c178.js","./card-legacy-294587fc.js","./col-legacy-dd19ad18.js","./system-legacy-0776f6fb.js","./index-legacy-a0340db2.js"],(function(n,r){"use strict";var o,u,a,i,c,l,f,s,d,p,h,v,y,g,m,_,x,w;return{setters:[function(t){o=t.r,u=t.R,a=t.o,i=t.c,c=t.d,l=t.w,f=t.h,s=t.b,d=t.g,p=t.t,h=t.e,v=t.J,y=t.K},null,function(t){g=t.E},function(t){m=t.E,_=t.a},function(t){x=t.g},function(t){w=t.E}],execute:function(){var r=document.createElement("style");r.textContent=".system_state{padding:10px}.card_item{height:280px}\n",document.head.appendChild(r);var b=s("div",null,"Runtime",-1),C=s("div",null,"Disk",-1),L=s("div",null,"CPU",-1),E=s("div",null,"Ram",-1),k={name:"State"};n("default",Object.assign(k,{setup:function(n){var r=o(null),k=o({}),j=o([{color:"#5cb87a",percentage:20},{color:"#e6a23c",percentage:40},{color:"#f56c6c",percentage:80}]),G=function(){var n,r=(n=t().mark((function e(){var n,r;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:n=t.sent,r=n.data,k.value=r.server;case 5:case"end":return t.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(o,u){var a=n.apply(t,r);function i(t){e(a,o,u,i,c,"next",t)}function c(t){e(a,o,u,i,c,"throw",t)}i(void 0)}))});return function(){return r.apply(this,arguments)}}();return G(),r.value=setInterval((function(){G()}),1e4),u((function(){clearInterval(r.value),r.value=null})),function(t,e){var n=m,r=_,o=g,u=w;return a(),i("div",null,[c(r,{gutter:15,class:"system_state"},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[k.value.os?(a(),f(o,{key:0,class:"card_item"},{header:l((function(){return[b]})),default:l((function(){return[s("div",null,[c(r,{gutter:10},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[d("os:")]})),_:1}),c(n,{span:12,textContent:p(k.value.os.goos)},null,8,["textContent"])]})),_:1}),c(r,{gutter:10},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[d("cpu nums:")]})),_:1}),c(n,{span:12,textContent:p(k.value.os.numCpu)},null,8,["textContent"])]})),_:1}),c(r,{gutter:10},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[d("compiler:")]})),_:1}),c(n,{span:12,textContent:p(k.value.os.compiler)},null,8,["textContent"])]})),_:1}),c(r,{gutter:10},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[d("go version:")]})),_:1}),c(n,{span:12,textContent:p(k.value.os.goVersion)},null,8,["textContent"])]})),_:1}),c(r,{gutter:10},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[d("goroutine nums:")]})),_:1}),c(n,{span:12,textContent:p(k.value.os.numGoroutine)},null,8,["textContent"])]})),_:1})])]})),_:1})):h("",!0)]})),_:1}),c(n,{span:12},{default:l((function(){return[k.value.disk?(a(),f(o,{key:0,class:"card_item"},{header:l((function(){return[C]})),default:l((function(){return[s("div",null,[c(r,{gutter:10},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[c(r,{gutter:10},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[d("total (MB)")]})),_:1}),c(n,{span:12,textContent:p(k.value.disk.totalMb)},null,8,["textContent"])]})),_:1}),c(r,{gutter:10},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[d("used (MB)")]})),_:1}),c(n,{span:12,textContent:p(k.value.disk.usedMb)},null,8,["textContent"])]})),_:1}),c(r,{gutter:10},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[d("total (GB)")]})),_:1}),c(n,{span:12,textContent:p(k.value.disk.totalGb)},null,8,["textContent"])]})),_:1}),c(r,{gutter:10},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[d("used (GB)")]})),_:1}),c(n,{span:12,textContent:p(k.value.disk.usedGb)},null,8,["textContent"])]})),_:1})]})),_:1}),c(n,{span:12},{default:l((function(){return[c(u,{type:"dashboard",percentage:k.value.disk.usedPercent,color:j.value},null,8,["percentage","color"])]})),_:1})]})),_:1})])]})),_:1})):h("",!0)]})),_:1})]})),_:1}),c(r,{gutter:15,class:"system_state"},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[k.value.cpu?(a(),f(o,{key:0,class:"card_item","body-style":{height:"180px","overflow-y":"scroll"}},{header:l((function(){return[L]})),default:l((function(){return[s("div",null,[c(r,{gutter:10},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[d("physical number of cores:")]})),_:1}),c(n,{span:12,textContent:p(k.value.cpu.cores)},null,8,["textContent"])]})),_:1}),(a(!0),i(v,null,y(k.value.cpu.cpus,(function(t,e){return a(),f(r,{key:e,gutter:10},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[d("core "+p(e)+":",1)]})),_:2},1024),c(n,{span:12},{default:l((function(){return[c(u,{type:"line",percentage:+t.toFixed(0),color:j.value},null,8,["percentage","color"])]})),_:2},1024)]})),_:2},1024)})),128))])]})),_:1})):h("",!0)]})),_:1}),c(n,{span:12},{default:l((function(){return[k.value.ram?(a(),f(o,{key:0,class:"card_item"},{header:l((function(){return[E]})),default:l((function(){return[s("div",null,[c(r,{gutter:10},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[c(r,{gutter:10},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[d("total (MB)")]})),_:1}),c(n,{span:12,textContent:p(k.value.ram.totalMb)},null,8,["textContent"])]})),_:1}),c(r,{gutter:10},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[d("used (MB)")]})),_:1}),c(n,{span:12,textContent:p(k.value.ram.usedMb)},null,8,["textContent"])]})),_:1}),c(r,{gutter:10},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[d("total (GB)")]})),_:1}),c(n,{span:12,textContent:p(k.value.ram.totalMb/1024)},null,8,["textContent"])]})),_:1}),c(r,{gutter:10},{default:l((function(){return[c(n,{span:12},{default:l((function(){return[d("used (GB)")]})),_:1}),c(n,{span:12,textContent:p((k.value.ram.usedMb/1024).toFixed(2))},null,8,["textContent"])]})),_:1})]})),_:1}),c(n,{span:12},{default:l((function(){return[c(u,{type:"dashboard",percentage:k.value.ram.usedPercent,color:j.value},null,8,["percentage","color"])]})),_:1})]})),_:1})])]})),_:1})):h("",!0)]})),_:1})]})),_:1})])}}}))}}}))}();
