/*! 
 Build based on gin-vue-admin 
 Time : 1691996246000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},a=l.iterator||"@@iterator",u=l.asyncIterator||"@@asyncIterator",i=l.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(U){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var l=t&&t.prototype instanceof d?t:d,a=Object.create(l.prototype),u=new E(r||[]);return o(a,"_invoke",{value:V(e,n,u)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(U){return{type:"throw",arg:U}}}t.wrap=s;var p={};function d(){}function h(){}function y(){}var v={};c(v,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(L([])));g&&g!==n&&r.call(g,a)&&(v=g);var b=y.prototype=d.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function n(o,l,a,u){var i=f(e[o],e,l);if("throw"!==i.type){var c=i.arg,s=c.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,a,u)}),(function(e){n("throw",e,a,u)})):t.resolve(s).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,u)}))}u(i.arg)}var l;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return l=l?l.then(o,o):o()}})}function V(e,t,n){var r="suspendedStart";return function(o,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw l;return{value:void 0,done:!0}}for(n.method=o,n.arg=l;;){var a=n.delegate;if(a){var u=x(a,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var i=f(e,t,n);if("normal"===i.type){if(r=n.done?"completed":"suspendedYield",i.arg===p)continue;return{value:i.arg,done:n.done}}"throw"===i.type&&(r="completed",n.method="throw",n.arg=i.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=f(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var l=o.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function L(e){if(e||""===e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return h.prototype=y,o(b,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:h,configurable:!0}),h.displayName=c(y,i,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,i,"GeneratorFunction")),e.prototype=Object.create(b),e},t.awrap=function(e){return{__await:e}},w(k.prototype),c(k.prototype,u,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,l){void 0===l&&(l=Promise);var a=new k(s(e,n,r,o),l);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(b),c(b,i,"Generator"),c(b,a,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=L,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var l=this.tryEntries[o],a=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var u=r.call(l,"catchLoc"),i=r.call(l,"finallyLoc");if(u&&i){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(u){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var l=o;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var a=l?l.completion:{};return a.type=e,a.arg=t,l?(this.method="next",this.next=l.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}function t(e,t,n,r,o,l,a){try{var u=e[l](a),i=u.value}catch(c){return void n(c)}u.done?t(i):Promise.resolve(i).then(r,o)}System.register(["./index-legacy-a1fdc544.js","./form-item-legacy-ddfc36e6.js","./button-legacy-ce556deb.js","./input-legacy-13394860.js","./tag-legacy-1b62f402.js","./select-legacy-8c2062ac.js","./scrollbar-legacy-1b1c68d0.js","./popper-legacy-e36fa054.js","./checkbox-legacy-9277738a.js","./stringFun-legacy-7a0441ab.js","./autoCode-legacy-0b534474.js","./_plugin-vue_export-helper-legacy-c6aa7c23.js","./_baseClone-legacy-14d978dd.js","./_Uint8Array-legacy-d5d4d190.js","./_initCloneObject-legacy-996a3212.js","./index-legacy-fef78ec5.js","./index-legacy-951593a1.js","./strings-legacy-c07b801f.js","./isEqual-legacy-1a1b3525.js"],(function(n,r){"use strict";var o,l,a,u,i,c,s,f,p,d,h,y,v,m,g,b,w,k,V,x,_,j,E,L,U,G;return{setters:[function(e){o=e.a,l=e.o,a=e.c,u=e.b,i=e.d,c=e.w,s=e.h,f=e.J,p=e.K,d=e.A,h=e.cB,y=e.c_,v=e.e,m=e.g,g=e.j,b=e.$,w=e.k,k=e.E},function(e){V=e.a,x=e.E},null,null,null,function(e){_=e.E,j=e.a},null,null,function(e){E=e.E},function(e){L=e.b},function(e){U=e.k},function(e){G=e._},null,null,null,null,null,null,null],execute:function(){var r=document.createElement("style");r.textContent=".plug-form[data-v-a6df940b]{width:680px}.plug-row[data-v-a6df940b]{display:flex;align-items:center;width:100%}.plug-row+.plug-row[data-v-a6df940b]{margin-top:12px}.plug-row>span[data-v-a6df940b]{margin-left:8px}\n",document.head.appendChild(r);var C={class:"gva-table-box"},O={__name:"autoPlug",setup:function(n){var r=o({plugName:"",routerGroup:"",hasGlobal:!0,hasRequest:!0,hasResponse:!0,global:[{key:"",type:"",desc:""}],request:[{key:"",type:"",desc:""}],response:[{key:"",type:"",desc:""}]}),G=function(){r.plugName=L(r.plugName)},O=function(){var n,o=(n=e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.plugName&&r.routerGroup){e.next=3;break}return g.error("插件名称和插件路由组为必填项"),e.abrupt("return");case 3:if(!r.hasGlobal){e.next=8;break}if(!r.global.some((function(e){if(!e.key||!e.type)return!0}))){e.next=8;break}return g.error("全局属性的key和type为必填项"),e.abrupt("return");case 8:if(!r.hasRequest){e.next=13;break}if(!r.request.some((function(e){if(!e.key||!e.type)return!0}))){e.next=13;break}return g.error("请求属性的key和type为必填项"),e.abrupt("return");case 13:if(!r.hasResponse){e.next=18;break}if(!r.response.some((function(e){if(!e.key||!e.type)return!0}))){e.next=18;break}return g.error("响应属性的key和type为必填项"),e.abrupt("return");case 18:return e.next=20,U(r);case 20:0===e.sent.code&&b("创建成功，插件已自动写入后端plugin目录下，请按照自己的逻辑进行创造");case 22:case"end":return e.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,l){var a=n.apply(e,r);function u(e){t(a,o,l,u,i,"next",e)}function i(e){t(a,o,l,u,i,"throw",e)}u(void 0)}))});return function(){return o.apply(this,arguments)}}(),N=function(e){e.push({key:"",value:""})},R=function(e,t){1!==e.length?e.splice(t,1):g.warning("至少有一个全局属性")};return function(e,t){var n=w,o=V,g=E,b=_,L=j,U=k,q=x;return l(),a("div",null,[u("div",C,[i(q,{"label-width":"140px",class:"plug-form"},{default:c((function(){return[i(o,{label:"插件名"},{default:c((function(){return[i(n,{modelValue:r.plugName,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.plugName=e}),placeholder:"必填（英文大写字母开头）",onBlur:G},null,8,["modelValue"])]})),_:1}),i(o,{label:"路由组"},{default:c((function(){return[i(n,{modelValue:r.routerGroup,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.routerGroup=e}),placeholder:"将会作为插件路由组使用"},null,8,["modelValue"])]})),_:1}),i(o,{label:"使用全局属性"},{default:c((function(){return[i(g,{modelValue:r.hasGlobal,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.hasGlobal=e})},null,8,["modelValue"])]})),_:1}),r.hasGlobal?(l(),s(o,{key:0,label:"全局属性"},{default:c((function(){return[(l(!0),a(f,null,p(r.global,(function(e,o){return l(),a("div",{key:o,class:"plug-row"},[u("span",null,[i(n,{modelValue:e.key,"onUpdate:modelValue":function(t){return e.key=t},placeholder:"key 必填"},null,8,["modelValue","onUpdate:modelValue"])]),u("span",null,[i(L,{modelValue:e.type,"onUpdate:modelValue":function(t){return e.type=t},placeholder:"type 必填"},{default:c((function(){return[i(b,{label:"string",value:"string"}),i(b,{label:"int",value:"int"}),i(b,{label:"float32",value:"float32"}),i(b,{label:"float64",value:"float64"}),i(b,{label:"bool",value:"bool"})]})),_:2},1032,["modelValue","onUpdate:modelValue"])]),u("span",null,[i(n,{modelValue:e.desc,"onUpdate:modelValue":function(t){return e.desc=t},placeholder:"备注 必填"},null,8,["modelValue","onUpdate:modelValue"])]),u("span",null,[i(U,{icon:d(h),circle:"",onClick:t[3]||(t[3]=function(e){return N(r.global)})},null,8,["icon"])]),u("span",null,[i(U,{icon:d(y),circle:"",onClick:function(e){return R(r.global,o)}},null,8,["icon","onClick"])])])})),128))]})),_:1})):v("",!0),i(o,{label:"使用Request"},{default:c((function(){return[i(g,{modelValue:r.hasRequest,"onUpdate:modelValue":t[4]||(t[4]=function(e){return r.hasRequest=e})},null,8,["modelValue"])]})),_:1}),r.hasRequest?(l(),s(o,{key:1,label:"Request"},{default:c((function(){return[(l(!0),a(f,null,p(r.request,(function(e,o){return l(),a("div",{key:o,class:"plug-row"},[u("span",null,[i(n,{modelValue:e.key,"onUpdate:modelValue":function(t){return e.key=t},placeholder:"key 必填"},null,8,["modelValue","onUpdate:modelValue"])]),u("span",null,[i(L,{modelValue:e.type,"onUpdate:modelValue":function(t){return e.type=t},placeholder:"type 必填"},{default:c((function(){return[i(b,{label:"string",value:"string"}),i(b,{label:"int",value:"int"}),i(b,{label:"float32",value:"float32"}),i(b,{label:"float64",value:"float64"}),i(b,{label:"bool",value:"bool"})]})),_:2},1032,["modelValue","onUpdate:modelValue"])]),u("span",null,[i(n,{modelValue:e.desc,"onUpdate:modelValue":function(t){return e.desc=t},placeholder:"备注 必填"},null,8,["modelValue","onUpdate:modelValue"])]),u("span",null,[i(U,{icon:d(h),circle:"",onClick:t[5]||(t[5]=function(e){return N(r.request)})},null,8,["icon"])]),u("span",null,[i(U,{icon:d(y),circle:"",onClick:function(e){return R(r.request,o)}},null,8,["icon","onClick"])])])})),128))]})),_:1})):v("",!0),i(o,{label:"使用Response"},{default:c((function(){return[i(g,{modelValue:r.hasResponse,"onUpdate:modelValue":t[6]||(t[6]=function(e){return r.hasResponse=e})},null,8,["modelValue"])]})),_:1}),r.hasResponse?(l(),s(o,{key:2,label:"Response"},{default:c((function(){return[(l(!0),a(f,null,p(r.response,(function(e,o){return l(),a("div",{key:o,class:"plug-row"},[u("span",null,[i(n,{modelValue:e.key,"onUpdate:modelValue":function(t){return e.key=t},placeholder:"key 必填"},null,8,["modelValue","onUpdate:modelValue"])]),u("span",null,[i(L,{modelValue:e.type,"onUpdate:modelValue":function(t){return e.type=t},placeholder:"type 必填"},{default:c((function(){return[i(b,{label:"string",value:"string"}),i(b,{label:"int",value:"int"}),i(b,{label:"float32",value:"float32"}),i(b,{label:"float64",value:"float64"}),i(b,{label:"bool",value:"bool"})]})),_:2},1032,["modelValue","onUpdate:modelValue"])]),u("span",null,[i(n,{modelValue:e.desc,"onUpdate:modelValue":function(t){return e.desc=t},placeholder:"备注 必填"},null,8,["modelValue","onUpdate:modelValue"])]),u("span",null,[i(U,{icon:d(h),circle:"",onClick:t[7]||(t[7]=function(e){return N(r.response)})},null,8,["icon"])]),u("span",null,[i(U,{icon:d(y),circle:"",onClick:function(e){return R(r.response,o)}},null,8,["icon","onClick"])])])})),128))]})),_:1})):v("",!0),i(o,null,{default:c((function(){return[i(U,{type:"primary",onClick:O},{default:c((function(){return[m("创建")]})),_:1})]})),_:1})]})),_:1})])])}}};n("default",G(O,[["__scopeId","data-v-a6df940b"]]))}}}))}();
