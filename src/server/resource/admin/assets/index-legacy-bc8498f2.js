/*! 
 Build based on gin-vue-admin 
 Time : 1691202957000 */
!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function n(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./index-legacy-a3f09ada.js"],(function(e,n){"use strict";var r,o,c,i,l,s,a,u,f,p,b,y,g,v,m,d,k,O,j,h,w,P,S;return{setters:[function(e){r=e.B,o=e.b6,c=e.x,i=e.ah,l=e.y,s=e.D,a=e.o,u=e.c,f=e.b,p=e.G,b=e.n,y=e.A,g=e.h,v=e.w,m=e.d,d=e.bL,k=e.al,O=e.N,j=e.e,h=e.H,w=e.X,P=e._,S=e.I}],execute:function(){var n=e("t",r({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:o,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean})),C={close:function(e){return e instanceof MouseEvent},click:function(e){return e instanceof MouseEvent}},E=c({name:"ElTag"}),_=c(t(t({},E),{},{props:n,emits:C,setup:function(e,t){var n=t.emit,r=e,o=i(),c=l("tag"),P=s((function(){var e=r.type,t=r.hit,n=r.effect,i=r.closable,l=r.round;return[c.b(),c.is("closable",i),c.m(e),c.m(o.value),c.m(n),c.is("hit",t),c.is("round",l)]})),S=function(e){n("close",e)},C=function(e){n("click",e)};return function(e,t){return e.disableTransitions?(a(),u("span",{key:0,class:b(y(P)),style:h({backgroundColor:e.color}),onClick:C},[f("span",{class:b(y(c).e("content"))},[p(e.$slots,"default")],2),e.closable?(a(),g(y(O),{key:0,class:b(y(c).e("close")),onClick:k(S,["stop"])},{default:v((function(){return[m(y(d))]})),_:1},8,["class","onClick"])):j("v-if",!0)],6)):(a(),g(w,{key:1,name:"".concat(y(c).namespace.value,"-zoom-in-center"),appear:""},{default:v((function(){return[f("span",{class:b(y(P)),style:h({backgroundColor:e.color}),onClick:C},[f("span",{class:b(y(c).e("content"))},[p(e.$slots,"default")],2),e.closable?(a(),g(y(O),{key:0,class:b(y(c).e("close")),onClick:k(S,["stop"])},{default:v((function(){return[m(y(d))]})),_:1},8,["class","onClick"])):j("v-if",!0)],6)]})),_:3},8,["name"]))}}}));e("E",S(P(_,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]])))}}}))}();
