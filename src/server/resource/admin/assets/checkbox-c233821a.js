/*! 
 Build based on gin-vue-admin 
 Time : 1691202957000 */
import{c6 as e,bM as a,b5 as l,c7 as n,c0 as t,bW as o,c1 as i,c8 as u,aP as s,bp as r,aC as d,bn as c,b7 as b,a4 as v,D as m,aY as h,c9 as f,aR as p,T as k,aS as x,Q as g,a6 as y,r as C,ak as L,aJ as B,bk as S,ah as I,ca as E,x as w,a8 as F,y as z,o as V,h as D,w as _,b as N,n as O,A as G,V as A,c as j,c4 as R,cb as U,G as $,J as M,g as J,t as P,e as q,M as H,_ as K,H as Q,B as T,a3 as W,a2 as Y,a5 as X,I as Z,a7 as ee}from"./index-136c7199.js";import{i as ae}from"./isEqual-114134cb.js";import{m as le,a as ne,p as te}from"./_Uint8Array-588558a9.js";function oe(e){return e}var ie=Date.now;var ue=e?function(a,l){return e(a,"toString",{configurable:!0,enumerable:!1,value:(n=l,function(){return n}),writable:!0});var n}:oe;var se,re,de;const ce=(se=ue,re=0,de=0,function(){var e=ie(),a=16-(e-de);if(de=e,a>0){if(++re>=800)return arguments[0]}else re=0;return se.apply(void 0,arguments)});var be=Math.max;function ve(e,a,l){return a=be(void 0===a?e.length-1:a,0),function(){for(var n=arguments,t=-1,o=be(n.length-a,0),i=Array(o);++t<o;)i[t]=n[a+t];t=-1;for(var u=Array(a+1);++t<a;)u[t]=n[t];return u[a]=l(i),function(e,a,l){switch(l.length){case 0:return e.call(a);case 1:return e.call(a,l[0]);case 2:return e.call(a,l[0],l[1]);case 3:return e.call(a,l[0],l[1],l[2])}return e.apply(a,l)}(e,this,u)}}var me=a?a.isConcatSpreadable:void 0;function he(e){return l(e)||le(e)||!!(me&&e&&e[me])}function fe(e,a,l,n,t){var o=-1,i=e.length;for(l||(l=he),t||(t=[]);++o<i;){var u=e[o];a>0&&l(u)?a>1?fe(u,a-1,l,n,t):ne(t,u):n||(t[t.length]=u)}return t}function pe(e){return(null==e?0:e.length)?fe(e,1):[]}function ke(e,a){return null!=e&&a in Object(e)}function xe(e,a){return null!=e&&function(e,a,i){for(var u=-1,s=(a=n(a,e)).length,r=!1;++u<s;){var d=t(a[u]);if(!(r=null!=e&&i(e,d)))break;e=e[d]}return r||++u!=s?r:!!(s=null==e?0:e.length)&&te(s)&&o(d,s)&&(l(e)||le(e))}(e,a,ke)}function ge(e,a){return function(e,a,l){for(var t=-1,o=a.length,s={};++t<o;){var r=a[t],d=i(e,r);l(d,r)&&u(s,n(r,e),d)}return s}(e,a,(function(a,l){return xe(e,l)}))}var ye=function(e){return ce(ve(e,void 0,pe),e+"")}((function(e,a){return null==e?{}:ge(e,a)}));const Ce=ye,Le={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:s,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},Be={[r]:e=>d(e)||c(e)||b(e),change:e=>d(e)||c(e)||b(e)},Se=Symbol("checkboxGroupContextKey"),Ie=(e,{model:a,isLimitExceeded:l,hasOwnLabel:n,isDisabled:t,isLabeledByFormItem:o})=>{const i=v(Se,void 0),{formItem:u}=p(),{emit:s}=y();function r(a){var l,n;return a===e.trueLabel||!0===a?null==(l=e.trueLabel)||l:null!=(n=e.falseLabel)&&n}const d=m((()=>(null==i?void 0:i.validateEvent)||e.validateEvent));return k((()=>e.modelValue),(()=>{d.value&&(null==u||u.validate("change").catch((e=>x())))})),{handleChange:function(e){if(l.value)return;const a=e.target;s("change",r(a.checked),e)},onClickRoot:async function(i){if(!l.value&&!n.value&&!t.value&&o.value){i.composedPath().some((e=>"LABEL"===e.tagName))||(a.value=r([!1,e.falseLabel].includes(a.value)),await g(),function(e,a){s("change",r(e),a)}(a.value,i))}}}},Ee=(e,a)=>{const{formItem:l}=p(),{model:n,isGroup:t,isLimitExceeded:o}=(e=>{const a=C(!1),{emit:l}=y(),n=v(Se,void 0),t=m((()=>!1===h(n))),o=C(!1);return{model:m({get(){var l,o;return t.value?null==(l=null==n?void 0:n.modelValue)?void 0:l.value:null!=(o=e.modelValue)?o:a.value},set(e){var i,u;t.value&&L(e)?(o.value=void 0!==(null==(i=null==n?void 0:n.max)?void 0:i.value)&&e.length>(null==n?void 0:n.max.value),!1===o.value&&(null==(u=null==n?void 0:n.changeEvent)||u.call(n,e))):(l(r,e),a.value=e)}}),isGroup:t,isLimitExceeded:o}})(e),{isFocused:i,isChecked:u,checkboxButtonSize:s,checkboxSize:d,hasOwnLabel:c}=((e,a,{model:l})=>{const n=v(Se,void 0),t=C(!1),o=m((()=>{const a=l.value;return b(a)?a:L(a)?B(e.label)?a.map(S).some((a=>ae(a,e.label))):a.map(S).includes(e.label):null!=a?a===e.trueLabel:!!a}));return{checkboxButtonSize:I(m((()=>{var e;return null==(e=null==n?void 0:n.size)?void 0:e.value})),{prop:!0}),isChecked:o,isFocused:t,checkboxSize:I(m((()=>{var e;return null==(e=null==n?void 0:n.size)?void 0:e.value}))),hasOwnLabel:m((()=>!(!a.default&&!e.label)))}})(e,a,{model:n}),{isDisabled:k}=(({model:e,isChecked:a})=>{const l=v(Se,void 0),n=m((()=>{var n,t;const o=null==(n=null==l?void 0:l.max)?void 0:n.value,i=null==(t=null==l?void 0:l.min)?void 0:t.value;return!h(o)&&e.value.length>=o&&!a.value||!h(i)&&e.value.length<=i&&a.value}));return{isDisabled:f(m((()=>(null==l?void 0:l.disabled.value)||n.value))),isLimitDisabled:n}})({model:n,isChecked:u}),{inputId:x,isLabeledByFormItem:g}=E(e,{formItemContext:l,disableIdGeneration:c,disableIdManagement:t}),{handleChange:w,onClickRoot:F}=Ie(e,{model:n,isLimitExceeded:o,hasOwnLabel:c,isDisabled:k,isLabeledByFormItem:g});return((e,{model:a})=>{e.checked&&(L(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0)})(e,{model:n}),{inputId:x,isLabeledByFormItem:g,isChecked:u,isDisabled:k,isFocused:i,checkboxButtonSize:s,checkboxSize:d,hasOwnLabel:c,model:n,handleChange:w,onClickRoot:F}},we=["tabindex","role","aria-checked"],Fe=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],ze=["id","aria-hidden","disabled","value","name","tabindex"],Ve=w({name:"ElCheckbox"});var De=K(w({...Ve,props:Le,emits:Be,setup(e){const a=e,l=F(),{inputId:n,isLabeledByFormItem:t,isChecked:o,isDisabled:i,isFocused:u,checkboxSize:s,hasOwnLabel:r,model:d,handleChange:c,onClickRoot:b}=Ee(a,l),v=z("checkbox"),h=m((()=>[v.b(),v.m(s.value),v.is("disabled",i.value),v.is("bordered",a.border),v.is("checked",o.value)])),f=m((()=>[v.e("input"),v.is("disabled",i.value),v.is("checked",o.value),v.is("indeterminate",a.indeterminate),v.is("focus",u.value)]));return(e,a)=>(V(),D(H(!G(r)&&G(t)?"span":"label"),{class:O(G(h)),"aria-controls":e.indeterminate?e.controls:null,onClick:G(b)},{default:_((()=>[N("span",{class:O(G(f)),tabindex:e.indeterminate?0:void 0,role:e.indeterminate?"checkbox":void 0,"aria-checked":e.indeterminate?"mixed":void 0},[e.trueLabel||e.falseLabel?A((V(),j("input",{key:0,id:G(n),"onUpdate:modelValue":a[0]||(a[0]=e=>R(d)?d.value=e:null),class:O(G(v).e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",name:e.name,tabindex:e.tabindex,disabled:G(i),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...e)=>G(c)&&G(c)(...e)),onFocus:a[2]||(a[2]=e=>u.value=!0),onBlur:a[3]||(a[3]=e=>u.value=!1)},null,42,Fe)),[[U,G(d)]]):A((V(),j("input",{key:1,id:G(n),"onUpdate:modelValue":a[4]||(a[4]=e=>R(d)?d.value=e:null),class:O(G(v).e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",disabled:G(i),value:e.label,name:e.name,tabindex:e.tabindex,onChange:a[5]||(a[5]=(...e)=>G(c)&&G(c)(...e)),onFocus:a[6]||(a[6]=e=>u.value=!0),onBlur:a[7]||(a[7]=e=>u.value=!1)},null,42,ze)),[[U,G(d)]]),N("span",{class:O(G(v).e("inner"))},null,2)],10,we),G(r)?(V(),j("span",{key:0,class:O(G(v).e("label"))},[$(e.$slots,"default"),e.$slots.default?q("v-if",!0):(V(),j(M,{key:0},[J(P(e.label),1)],64))],2)):q("v-if",!0)])),_:3},8,["class","aria-controls","onClick"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const _e=["name","tabindex","disabled","true-value","false-value"],Ne=["name","tabindex","disabled","value"],Oe=w({name:"ElCheckboxButton"});var Ge=K(w({...Oe,props:Le,emits:Be,setup(e){const a=e,l=F(),{isFocused:n,isChecked:t,isDisabled:o,checkboxButtonSize:i,model:u,handleChange:s}=Ee(a,l),r=v(Se,void 0),d=z("checkbox"),c=m((()=>{var e,a,l,n;const t=null!=(a=null==(e=null==r?void 0:r.fill)?void 0:e.value)?a:"";return{backgroundColor:t,borderColor:t,color:null!=(n=null==(l=null==r?void 0:r.textColor)?void 0:l.value)?n:"",boxShadow:t?"-1px 0 0 0 ".concat(t):void 0}})),b=m((()=>[d.b("button"),d.bm("button",i.value),d.is("disabled",o.value),d.is("checked",t.value),d.is("focus",n.value)]));return(e,a)=>(V(),j("label",{class:O(G(b))},[e.trueLabel||e.falseLabel?A((V(),j("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=e=>R(u)?u.value=e:null),class:O(G(d).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:G(o),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...e)=>G(s)&&G(s)(...e)),onFocus:a[2]||(a[2]=e=>n.value=!0),onBlur:a[3]||(a[3]=e=>n.value=!1)},null,42,_e)),[[U,G(u)]]):A((V(),j("input",{key:1,"onUpdate:modelValue":a[4]||(a[4]=e=>R(u)?u.value=e:null),class:O(G(d).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:G(o),value:e.label,onChange:a[5]||(a[5]=(...e)=>G(s)&&G(s)(...e)),onFocus:a[6]||(a[6]=e=>n.value=!0),onBlur:a[7]||(a[7]=e=>n.value=!1)},null,42,Ne)),[[U,G(u)]]),e.$slots.default||e.label?(V(),j("span",{key:2,class:O(G(d).be("button","inner")),style:Q(G(t)?G(c):void 0)},[$(e.$slots,"default",{},(()=>[J(P(e.label),1)]))],6)):q("v-if",!0)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const Ae=T({modelValue:{type:W(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:s,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),je={[r]:e=>L(e),change:e=>L(e)},Re=w({name:"ElCheckboxGroup"});var Ue=K(w({...Re,props:Ae,emits:je,setup(e,{emit:a}){const l=e,n=z("checkbox"),{formItem:t}=p(),{inputId:o,isLabeledByFormItem:i}=E(l,{formItemContext:t}),u=async e=>{a(r,e),await g(),a("change",e)},s=m({get:()=>l.modelValue,set(e){u(e)}});return Y(Se,{...Ce(X(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:s,changeEvent:u}),k((()=>l.modelValue),(()=>{l.validateEvent&&(null==t||t.validate("change").catch((e=>x())))})),(e,a)=>{var l;return V(),D(H(e.tag),{id:G(o),class:O(G(n).b("group")),role:"group","aria-label":G(i)?void 0:e.label||"checkbox-group","aria-labelledby":G(i)?null==(l=G(t))?void 0:l.labelId:void 0},{default:_((()=>[$(e.$slots,"default")])),_:3},8,["id","class","aria-label","aria-labelledby"])}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const $e=Z(De,{CheckboxButton:Ge,CheckboxGroup:Ue});ee(Ge);const Me=ee(Ue);export{$e as E,Me as a,fe as b,pe as f,xe as h,oe as i,ve as o,ce as s};
