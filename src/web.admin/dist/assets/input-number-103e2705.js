/*! 
 Build based on gin-vue-admin 
 Time : 1691996246000 */
import{B as e,aO as a,br as n,bw as l,cD as t,aJ as r,bt as u,x as s,C as i,y as o,r as c,a as m,aQ as d,D as p,aX as b,ag as v,cc as N,T as f,P as y,be as h,o as g,c as x,V as I,A as V,n as S,m as w,d as k,w as A,h as E,ae as F,c_ as B,N as _,e as K,aW as O,cB as T,ak as C,k as M,_ as P,ay as z,aB as D,aR as j,I as G}from"./index-86766df6.js";import{v as W}from"./index-e49845a9.js";const Y=e({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:a,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||n(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt("".concat(e),10)},validateEvent:{type:Boolean,default:!0}}),J={[l]:(e,a)=>a!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[t]:e=>n(e)||r(e),[u]:e=>n(e)||r(e)},Q=["aria-label","onKeydown"],R=["aria-label","onKeydown"],X=s({name:"ElInputNumber"});const q=G(P(s({...X,props:Y,emits:J,setup(e,{expose:a,emit:s}){const P=e,{t:G}=i(),Y=o("input-number"),J=c(),X=m({currentValue:P.modelValue,userInput:null}),{formItem:q}=d(),H=p((()=>n(P.modelValue)&&P.modelValue<=P.min)),L=p((()=>n(P.modelValue)&&P.modelValue>=P.max)),U=p((()=>{const e=le(P.step);return b(P.precision)?Math.max(le(P.modelValue),e):(P.precision,P.precision)})),Z=p((()=>P.controls&&"right"===P.controlsPosition)),$=v(),ee=N(),ae=p((()=>{if(null!==X.userInput)return X.userInput;let e=X.currentValue;if(r(e))return"";if(n(e)){if(Number.isNaN(e))return"";b(P.precision)||(e=e.toFixed(P.precision))}return e})),ne=(e,a)=>{if(b(a)&&(a=U.value),0===a)return Math.round(e);let n=String(e);const l=n.indexOf(".");if(-1===l)return e;if(!n.replace(".","").split("")[l+a])return e;const t=n.length;return"5"===n.charAt(t-1)&&(n="".concat(n.slice(0,Math.max(0,t-1)),"6")),Number.parseFloat(Number(n).toFixed(a))},le=e=>{if(r(e))return 0;const a=e.toString(),n=a.indexOf(".");let l=0;return-1!==n&&(l=a.length-n-1),l},te=(e,a=1)=>n(e)?ne(e+P.step*a):X.currentValue,re=()=>{if(P.readonly||ee.value||L.value)return;const e=Number(ae.value)||0,a=te(e);ie(a),s(t,X.currentValue)},ue=()=>{if(P.readonly||ee.value||H.value)return;const e=Number(ae.value)||0,a=te(e,-1);ie(a),s(t,X.currentValue)},se=(e,a)=>{const{max:n,min:l,step:t,precision:i,stepStrictly:o,valueOnClear:c}=P;n<l&&z("InputNumber","min should not be greater than max.");let m=Number(e);if(r(e)||Number.isNaN(m))return null;if(""===e){if(null===c)return null;m=D(c)?{min:l,max:n}[c]:c}return o&&(m=ne(Math.round(m/t)*t,i)),b(i)||(m=ne(m,i)),(m>n||m<l)&&(m=m>n?n:l,a&&s(u,m)),m},ie=(e,a=!0)=>{var n;const t=X.currentValue,r=se(e);a?t!==r&&(X.userInput=null,s(u,r),s(l,r,t),P.validateEvent&&(null==(n=null==q?void 0:q.validate)||n.call(q,"change").catch((e=>j()))),X.currentValue=r):s(u,r)},oe=e=>{X.userInput=e;const a=""===e?null:Number(e);s(t,a),ie(a,!1)},ce=e=>{const a=""!==e?Number(e):"";(n(a)&&!Number.isNaN(a)||""===e)&&ie(a),X.userInput=null},me=e=>{s("focus",e)},de=e=>{var a;s("blur",e),P.validateEvent&&(null==(a=null==q?void 0:q.validate)||a.call(q,"blur").catch((e=>j())))};return f((()=>P.modelValue),(e=>{const a=se(X.userInput),l=se(e,!0);n(a)||a&&a===l||(X.currentValue=l,X.userInput=null)}),{immediate:!0}),y((()=>{var e;const{min:a,max:l,modelValue:t}=P,r=null==(e=J.value)?void 0:e.input;if(r.setAttribute("role","spinbutton"),Number.isFinite(l)?r.setAttribute("aria-valuemax",String(l)):r.removeAttribute("aria-valuemax"),Number.isFinite(a)?r.setAttribute("aria-valuemin",String(a)):r.removeAttribute("aria-valuemin"),r.setAttribute("aria-valuenow",String(X.currentValue)),r.setAttribute("aria-disabled",String(ee.value)),!n(t)&&null!=t){let e=Number(t);Number.isNaN(e)&&(e=null),s(u,e)}})),h((()=>{var e;const a=null==(e=J.value)?void 0:e.input;null==a||a.setAttribute("aria-valuenow","".concat(X.currentValue))})),a({focus:()=>{var e,a;null==(a=null==(e=J.value)?void 0:e.focus)||a.call(e)},blur:()=>{var e,a;null==(a=null==(e=J.value)?void 0:e.blur)||a.call(e)}}),(e,a)=>(g(),x("div",{class:S([V(Y).b(),V(Y).m(V($)),V(Y).is("disabled",V(ee)),V(Y).is("without-controls",!e.controls),V(Y).is("controls-right",V(Z))]),onDragstart:a[1]||(a[1]=C((()=>{}),["prevent"]))},[e.controls?I((g(),x("span",{key:0,role:"button","aria-label":V(G)("el.inputNumber.decrease"),class:S([V(Y).e("decrease"),V(Y).is("disabled",V(H))]),onKeydown:w(ue,["enter"])},[k(V(_),null,{default:A((()=>[V(Z)?(g(),E(V(F),{key:0})):(g(),E(V(B),{key:1}))])),_:1})],42,Q)),[[V(W),ue]]):K("v-if",!0),e.controls?I((g(),x("span",{key:1,role:"button","aria-label":V(G)("el.inputNumber.increase"),class:S([V(Y).e("increase"),V(Y).is("disabled",V(L))]),onKeydown:w(re,["enter"])},[k(V(_),null,{default:A((()=>[V(Z)?(g(),E(V(O),{key:0})):(g(),E(V(T),{key:1}))])),_:1})],42,R)),[[V(W),re]]):K("v-if",!0),k(V(M),{id:e.id,ref_key:"input",ref:J,type:"number",step:e.step,"model-value":V(ae),placeholder:e.placeholder,readonly:e.readonly,disabled:V(ee),size:V($),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:a[0]||(a[0]=C((()=>{}),["prevent"])),onKeydown:[w(C(re,["prevent"]),["up"]),w(C(ue,["prevent"]),["down"])],onBlur:de,onFocus:me,onInput:oe,onChange:ce},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]));export{q as E};
