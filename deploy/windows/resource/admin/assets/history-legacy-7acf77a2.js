/*! 
 Build based on gin-vue-admin 
 Time : 1691991175000 */
!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function t(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./index-legacy-49209d69.js","./tab-pane-legacy-e748f972.js","./strings-legacy-5257a3b2.js"],(function(n,a){"use strict";var r,u,o,i,l,s,c,v,f,m,p,d,y,g,b,h,O,S,x,w,j,k,I,q,C,P;return{setters:[function(e){r=e.an,u=e.u,o=e.r,i=e.l,l=e.D,s=e.T,c=e.ao,v=e.R,f=e.o,m=e.c,p=e.d,d=e.w,y=e.J,g=e.K,b=e.h,h=e.b,O=e.H,S=e.A,x=e.g,w=e.t,j=e.ap,k=e.ak,I=e.V,q=e.W},function(e){C=e.E,P=e.a},null],execute:function(){var a=document.createElement("style");a.textContent='.contextmenu{width:100px;margin:0;border:1px solid #ccc;background:#fff;z-index:3000;position:absolute;list-style-type:none;padding:5px 0;border-radius:4px;font-size:14px;color:#333;box-shadow:2px 2px 3px rgba(0,0,0,.2)}.el-tabs__item .el-icon-close{color:initial!important}.el-tabs__item .dot{content:"";width:9px;height:9px;margin-right:8px;display:inline-block;border-radius:50%;transition:background-color .2s}.contextmenu li{margin:0;padding:7px 16px}.contextmenu li:hover{background:#f2f2f2;cursor:pointer}\n',document.head.appendChild(a);var N={class:"router-history"},J=["tab"],E={name:"HistoryComponent"};n("default",Object.assign(E,{setup:function(n){var a=r(),E=u(),V=function(e){return e.name+JSON.stringify(e.query)+JSON.stringify(e.params)},A=o([]),T=o(""),_=o(!1),D=i(),R=function(e){return e.name+JSON.stringify(e.query)+JSON.stringify(e.params)},L=o(0),z=o(0),H=o(!1),K=o(!1),U=o(""),W=l((function(){return D.userInfo.authority.defaultRouter})),X=function(){A.value=[{name:W.value,meta:{title:"首页"},query:{},params:{}}],E.push({name:W.value}),_.value=!1,sessionStorage.setItem("historys",JSON.stringify(A.value))},Y=function(){var e,t=A.value.findIndex((function(t){return V(t)===U.value&&(e=t),V(t)===U.value})),n=A.value.findIndex((function(e){return V(e)===T.value}));A.value.splice(0,t),t>n&&E.push(e),sessionStorage.setItem("historys",JSON.stringify(A.value))},$=function(){var e,t=A.value.findIndex((function(t){return V(t)===U.value&&(e=t),V(t)===U.value})),n=A.value.findIndex((function(e){return V(e)===T.value}));A.value.splice(t+1,A.value.length),t<n&&E.push(e),sessionStorage.setItem("historys",JSON.stringify(A.value))},B=function(){var e;A.value=A.value.filter((function(t){return V(t)===U.value&&(e=t),V(t)===U.value})),E.push(e),sessionStorage.setItem("historys",JSON.stringify(A.value))},F=function(n){if(!A.value.some((function(e){return function(e,t){if(e.name!==t.name)return!1;if(Object.keys(e.query).length!==Object.keys(t.query).length||Object.keys(e.params).length!==Object.keys(t.params).length)return!1;for(var n in e.query)if(e.query[n]!==t.query[n])return!1;for(var a in e.params)if(e.params[a]!==t.params[a])return!1;return!0}(e,n)}))){var a={};a.name=n.name,a.meta=function(n){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?e(Object(r),!0).forEach((function(e){t(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}({},n.meta),delete a.meta.matched,a.query=n.query,a.params=n.params,A.value.push(a)}window.sessionStorage.setItem("activeValue",V(n))},G=o({}),M=function(e){var t,n=null==e||null===(t=e.props)||void 0===t?void 0:t.name;if(n){var a=G.value[n];E.push({name:a.name,query:a.query,params:a.params})}},Q=function(e){var t=A.value.findIndex((function(t){return V(t)===e}));V(a)===e&&(1===A.value.length?E.push({name:W.value}):t<A.value.length-1?E.push({name:A.value[t+1].name,query:A.value[t+1].query,params:A.value[t+1].params}):E.push({name:A.value[t-1].name,query:A.value[t-1].query,params:A.value[t-1].params})),A.value.splice(t,1)};s((function(){return _.value}),(function(){_.value?document.body.addEventListener("click",(function(){_.value=!1})):document.body.removeEventListener("click",(function(){_.value=!1}))})),s((function(){return a}),(function(e,t){"Login"!==e.name&&"Reload"!==e.name&&(A.value=A.value.filter((function(e){return!e.meta.closeTab})),F(e),sessionStorage.setItem("historys",JSON.stringify(A.value)),T.value=window.sessionStorage.getItem("activeValue"))}),{deep:!0}),s((function(){return A.value}),(function(){sessionStorage.setItem("historys",JSON.stringify(A.value)),G.value={},A.value.forEach((function(e){G.value[V(e)]=e})),c.emit("setKeepAlive",A.value)}),{deep:!0});return function(){c.on("closeThisPage",(function(){Q(R(a))})),c.on("closeAllPage",(function(){X()})),c.on("mobile",(function(e){K.value=e})),c.on("collapse",(function(e){H.value=e}));var e=[{name:W.value,meta:{title:"首页"},query:{},params:{}}];A.value=JSON.parse(sessionStorage.getItem("historys"))||e,window.sessionStorage.getItem("activeValue")?T.value=window.sessionStorage.getItem("activeValue"):T.value=V(a),F(a),"true"===window.sessionStorage.getItem("needCloseAll")&&(X(),window.sessionStorage.removeItem("needCloseAll"))}(),v((function(){c.off("collapse"),c.off("mobile")})),function(e,t){var n=C,r=P;return f(),m("div",N,[p(r,{modelValue:T.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return T.value=e}),closable:!(1===A.value.length&&e.$route.name===W.value),type:"card",onContextmenu:t[1]||(t[1]=k((function(e){return function(e){if(1===A.value.length&&a.name===W.value)return!1;var t,n="";(n="SPAN"===e.srcElement.nodeName?e.srcElement.offsetParent.id:e.srcElement.id)&&(_.value=!0,t=H.value?54:220,K.value&&(t=0),L.value=e.clientX-t,z.value=e.clientY+10,U.value=n.substring(4))}(e)}),["prevent"])),onTabClick:M,onTabRemove:Q},{default:d((function(){return[(f(!0),m(y,null,g(A.value,(function(e){return f(),b(n,{key:R(e),label:e.meta.title,name:R(e),tab:e,class:"gva-tab"},{label:d((function(){return[h("span",{tab:e,style:O({color:T.value===R(e)?S(D).activeColor:"#333"})},[h("i",{class:"dot",style:O({backgroundColor:T.value===R(e)?S(D).activeColor:"#ddd"})},null,4),x(" "+w(S(j)(e.meta.title,e)),1)],12,J)]})),_:2},1032,["label","name","tab"])})),128))]})),_:1},8,["modelValue","closable"]),I(h("ul",{style:O({left:L.value+"px",top:z.value+"px"}),class:"contextmenu"},[h("li",{onClick:X},"关闭所有"),h("li",{onClick:Y},"关闭左侧"),h("li",{onClick:$},"关闭右侧"),h("li",{onClick:B},"关闭其他")],4),[[q,_.value]])])}}}))}}}))}();