/*! 
 Build based on gin-vue-admin 
 Time : 1691990628000 */
import{k as t,g as e,s as r,a as n,b as a,c as o,n as c,d as s,i as b,S as i,e as u}from"./_Uint8Array-c958d774.js";import{bP as j,bQ as f,bj as y,b8 as l,bR as A}from"./index-55b51a59.js";import{c as p,k as v,g as d,a as m,b as w,d as g,e as x,i as S}from"./_initCloneObject-11c71fb8.js";const O=Object.getOwnPropertySymbols?function(t){for(var r=[];t;)n(r,e(t)),t=d(t);return r}:r;function U(t){return a(t,v,O)}var I=Object.prototype.hasOwnProperty;var h=/\w*$/;var F=j?j.prototype:void 0,E=F?F.valueOf:void 0;var M="[object Boolean]",B="[object Date]",D="[object Map]",k="[object Number]",C="[object RegExp]",P="[object Set]",R="[object String]",N="[object Symbol]",V="[object ArrayBuffer]",_="[object DataView]",G="[object Float32Array]",L="[object Float64Array]",Q="[object Int8Array]",W="[object Int16Array]",$="[object Int32Array]",q="[object Uint8Array]",z="[object Uint8ClampedArray]",H="[object Uint16Array]",J="[object Uint32Array]";function K(t,e,r){var n,a,o,c=t.constructor;switch(e){case V:return m(t);case M:case B:return new c(+t);case _:return function(t,e){var r=e?m(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,r);case G:case L:case Q:case W:case $:case q:case z:case H:case J:return w(t,r);case D:return new c;case k:case R:return new c(t);case C:return(o=new(a=t).constructor(a.source,h.exec(a))).lastIndex=a.lastIndex,o;case P:return new c;case N:return n=t,E?Object(E.call(n)):{}}}var T=c&&c.isMap;const X=T?s(T):function(t){return f(t)&&"[object Map]"==o(t)};var Y=c&&c.isSet;const Z=Y?s(Y):function(t){return f(t)&&"[object Set]"==o(t)};var tt="[object Arguments]",et="[object Function]",rt="[object Object]",nt={};function at(r,n,a,c,s,j){var f,d=1&n,m=2&n,w=4&n;if(a&&(f=s?a(r,c,s,j):a(r)),void 0!==f)return f;if(!y(r))return r;var h=l(r);if(h){if(f=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&I.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(r),!d)return g(r,f)}else{var F=o(r),E=F==et||"[object GeneratorFunction]"==F;if(b(r))return x(r,d);if(F==rt||F==tt||E&&!s){if(f=m||E?{}:S(r),!d)return m?function(t,e){return p(t,O(t),e)}(r,function(t,e){return t&&p(e,v(e),t)}(f,r)):function(t,r){return p(t,e(t),r)}(r,function(e,r){return e&&p(r,t(r),e)}(f,r))}else{if(!nt[F])return s?r:{};f=K(r,F,d)}}j||(j=new i);var M=j.get(r);if(M)return M;j.set(r,f),Z(r)?r.forEach((function(t){f.add(at(t,n,a,t,r,j))})):X(r)&&r.forEach((function(t,e){f.set(e,at(t,n,a,e,r,j))}));var B=h?void 0:(w?m?U:u:m?v:t)(r);return function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););}(B||r,(function(t,e){B&&(t=r[e=t]),A(f,e,at(t,n,a,e,r,j))})),f}nt[tt]=nt["[object Array]"]=nt["[object ArrayBuffer]"]=nt["[object DataView]"]=nt["[object Boolean]"]=nt["[object Date]"]=nt["[object Float32Array]"]=nt["[object Float64Array]"]=nt["[object Int8Array]"]=nt["[object Int16Array]"]=nt["[object Int32Array]"]=nt["[object Map]"]=nt["[object Number]"]=nt[rt]=nt["[object RegExp]"]=nt["[object Set]"]=nt["[object String]"]=nt["[object Symbol]"]=nt["[object Uint8Array]"]=nt["[object Uint8ClampedArray]"]=nt["[object Uint16Array]"]=nt["[object Uint32Array]"]=!0,nt["[object Error]"]=nt[et]=nt["[object WeakMap]"]=!1;export{at as b};
