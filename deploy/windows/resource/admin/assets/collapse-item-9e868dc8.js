/*! 
 Build based on gin-vue-admin 
 Time : 1691202957000 */
import{B as e,a3 as a,aE as s,bp as l,bs as t,bn as i,r as o,T as n,a2 as r,y as c,D as d,x as u,o as m,c as p,G as v,n as b,A as f,_ as h,a4 as C,b as K,m as y,al as g,g as k,t as x,d as A,w as N,aA as I,N as _,V as w,W as E,I as B,a7 as V}from"./index-136c7199.js";import{c as j}from"./form-item-beb28df0.js";import{_ as H}from"./index-4c57b8e9.js";import{g as S}from"./rand-099990c4.js";const F=e=>typeof i(e),W=e({accordion:Boolean,modelValue:{type:a([Array,String,Number]),default:()=>s([])}}),$={[l]:F,[t]:F},O=Symbol("collapseContextKey"),T=u({name:"ElCollapse"});var D=h(u({...T,props:W,emits:$,setup(e,{expose:a,emit:s}){const i=e,{activeNames:u,setActiveNames:h}=((e,a)=>{const s=o(j(e.modelValue)),i=i=>{s.value=i;const o=e.accordion?s.value[0]:s.value;a(l,o),a(t,o)};return n((()=>e.modelValue),(()=>s.value=j(e.modelValue)),{deep:!0}),r(O,{activeNames:s,handleItemClick:a=>{if(e.accordion)i([s.value[0]===a?"":a]);else{const e=[...s.value],l=e.indexOf(a);l>-1?e.splice(l,1):e.push(a),i(e)}}}),{activeNames:s,setActiveNames:i}})(i,s),{rootKls:C}=(()=>{const e=c("collapse");return{rootKls:d((()=>e.b()))}})();return a({activeNames:u,setActiveNames:h}),(e,a)=>(m(),p("div",{class:b(f(C)),role:"tablist","aria-multiselectable":"true"},[v(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse.vue"]]);const G=e({title:{type:String,default:""},name:{type:a([String,Number]),default:()=>S()},disabled:Boolean}),U=["aria-expanded","aria-controls","aria-describedby"],q=["id","tabindex"],z=["id","aria-hidden","aria-labelledby"],J=u({name:"ElCollapseItem"});var L=h(u({...J,props:G,setup(e,{expose:a}){const s=e,{focusing:l,id:t,isActive:i,handleFocus:n,handleHeaderClick:r,handleEnterClick:u}=(e=>{const a=C(O),s=o(!1),l=o(!1),t=o(S()),i=d((()=>null==a?void 0:a.activeNames.value.includes(e.name)));return{focusing:s,id:t,isActive:i,handleFocus:()=>{setTimeout((()=>{l.value?l.value=!1:s.value=!0}),50)},handleHeaderClick:()=>{e.disabled||(null==a||a.handleItemClick(e.name),s.value=!1,l.value=!0)},handleEnterClick:()=>{null==a||a.handleItemClick(e.name)}}})(s),{arrowKls:h,headKls:B,rootKls:V,itemWrapperKls:j,itemContentKls:F,scopedContentId:W,scopedHeadId:$}=((e,{focusing:a,isActive:s,id:l})=>{const t=c("collapse"),i=d((()=>[t.b("item"),t.is("active",f(s)),t.is("disabled",e.disabled)])),o=d((()=>[t.be("item","header"),t.is("active",f(s)),{focusing:f(a)&&!e.disabled}]));return{arrowKls:d((()=>[t.be("item","arrow"),t.is("active",f(s))])),headKls:o,rootKls:i,itemWrapperKls:d((()=>t.be("item","wrap"))),itemContentKls:d((()=>t.be("item","content"))),scopedContentId:d((()=>t.b("content-".concat(f(l))))),scopedHeadId:d((()=>t.b("head-".concat(f(l)))))}})(s,{focusing:l,isActive:i,id:t});return a({isActive:i}),(e,a)=>(m(),p("div",{class:b(f(V))},[K("div",{role:"tab","aria-expanded":f(i),"aria-controls":f(W),"aria-describedby":f(W)},[K("div",{id:f($),class:b(f(B)),role:"button",tabindex:e.disabled?-1:0,onClick:a[0]||(a[0]=(...e)=>f(r)&&f(r)(...e)),onKeypress:a[1]||(a[1]=y(g(((...e)=>f(u)&&f(u)(...e)),["stop","prevent"]),["space","enter"])),onFocus:a[2]||(a[2]=(...e)=>f(n)&&f(n)(...e)),onBlur:a[3]||(a[3]=e=>l.value=!1)},[v(e.$slots,"title",{},(()=>[k(x(e.title),1)])),A(f(_),{class:b(f(h))},{default:N((()=>[A(f(I))])),_:1},8,["class"])],42,q)],8,U),A(f(H),null,{default:N((()=>[w(K("div",{id:f(W),class:b(f(j)),role:"tabpanel","aria-hidden":!f(i),"aria-labelledby":f($)},[K("div",{class:b(f(F))},[v(e.$slots,"default")],2)],10,z),[[E,f(i)]])])),_:3})],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse-item.vue"]]);const M=B(D,{CollapseItem:L}),P=V(L);export{P as E,M as a};
