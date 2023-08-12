/*! 
 Build based on gin-vue-admin 
 Time : 1691853746000 */
import{O as e,aG as a,cy as t,B as l,a3 as s,aD as o,x as n,a4 as r,ay as i,y as u,r as c,T as d,Q as v,aF as p,o as b,c as m,n as f,A as h,H as y,_ as g,a5 as x,cz as C,cA as P,D as w,P as N,be as k,d as T,N as B,aZ as S,az as R,bO as A,a8 as E,ax as F,a2 as _,cB as z,G as K,bt as L,aX as V,aB as O,br as j,a7 as q,cC as D,a as G,R as H,V as M,W,e as X,I,a6 as Q}from"./index-0bfeb27f.js";import{c as U}from"./strings-b3c40925.js";const Y=(l,s)=>{const o={},n=e([]);return{children:n,addChild:e=>{o[e.uid]=e,n.value=((e,l,s)=>a(e.subTree).filter((e=>{var a;return t(e)&&(null==(a=e.type)?void 0:a.name)===l&&!!e.component})).map((e=>e.component.uid)).map((e=>s[e])).filter((e=>!!e)))(l,s,o)},removeChild:e=>{delete o[e],n.value=n.value.filter((a=>a.uid!==e))}}},Z=Symbol("tabsRootContextKey"),$=l({tabs:{type:s(Array),default:()=>o([])}}),J="ElTabBar",ee=n({name:J});var ae=g(n({...ee,props:$,setup(e,{expose:a}){const t=e,l=x(),s=r(Z);s||i(J,"<el-tabs><el-tab-bar /></el-tabs>");const o=u("tabs"),n=c(),g=c(),C=()=>g.value=(()=>{let e=0,a=0;const o=["top","bottom"].includes(s.props.tabPosition)?"width":"height",n="width"===o?"x":"y",r="x"===n?"left":"top";return t.tabs.every((s=>{var n,i;const u=null==(i=null==(n=l.parent)?void 0:n.refs)?void 0:i["tab-".concat(s.uid)];if(!u)return!1;if(!s.active)return!0;e=u["offset".concat(U(r))],a=u["client".concat(U(o))];const c=window.getComputedStyle(u);return"width"===o&&(t.tabs.length>1&&(a-=Number.parseFloat(c.paddingLeft)+Number.parseFloat(c.paddingRight)),e+=Number.parseFloat(c.paddingLeft)),!1})),{[o]:"".concat(a,"px"),transform:"translate".concat(U(n),"(").concat(e,"px)")}})();return d((()=>t.tabs),(async()=>{await v(),C()}),{immediate:!0}),p(n,(()=>C())),a({ref:n,update:C}),(e,a)=>(b(),m("div",{ref_key:"barRef",ref:n,class:f([h(o).e("active-bar"),h(o).is(h(s).props.tabPosition)]),style:y(g.value)},null,6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const te=l({panes:{type:s(Array),default:()=>o([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),le="ElTabNav",se=n({name:le,props:te,emits:{tabClick:(e,a,t)=>t instanceof Event,tabRemove:(e,a)=>a instanceof Event},setup(e,{expose:a,emit:t}){const l=x(),s=r(Z);s||i(le,"<el-tabs><tab-nav /></el-tabs>");const o=u("tabs"),n=C(),b=P(),m=c(),f=c(),h=c(),y=c(),g=c(!1),F=c(0),_=c(!1),z=c(!0),K=w((()=>["top","bottom"].includes(s.props.tabPosition)?"width":"height")),L=w((()=>{const e="width"===K.value?"X":"Y";return{transform:"translate".concat(e,"(-").concat(F.value,"px)")}})),V=()=>{if(!m.value)return;const e=m.value["offset".concat(U(K.value))],a=F.value;if(!a)return;const t=a>e?a-e:0;F.value=t},O=()=>{if(!m.value||!f.value)return;const e=f.value["offset".concat(U(K.value))],a=m.value["offset".concat(U(K.value))],t=F.value;if(e-t<=a)return;const l=e-t>2*a?t+a:e-a;F.value=l},j=async()=>{const e=f.value;if(!(g.value&&h.value&&m.value&&e))return;await v();const a=h.value.querySelector(".is-active");if(!a)return;const t=m.value,l=["top","bottom"].includes(s.props.tabPosition),o=a.getBoundingClientRect(),n=t.getBoundingClientRect(),r=l?e.offsetWidth-n.width:e.offsetHeight-n.height,i=F.value;let u=i;l?(o.left<n.left&&(u=i-(n.left-o.left)),o.right>n.right&&(u=i+o.right-n.right)):(o.top<n.top&&(u=i-(n.top-o.top)),o.bottom>n.bottom&&(u=i+(o.bottom-n.bottom))),u=Math.max(u,0),F.value=Math.min(u,r)},q=()=>{var a;if(!f.value||!m.value)return;e.stretch&&(null==(a=y.value)||a.update());const t=f.value["offset".concat(U(K.value))],l=m.value["offset".concat(U(K.value))],s=F.value;l<t?(g.value=g.value||{},g.value.prev=s,g.value.next=s+l<t,t-s<l&&(F.value=t-l)):(g.value=!1,s>0&&(F.value=0))},D=e=>{const a=e.code,{up:t,down:l,left:s,right:o}=E;if(![t,l,s,o].includes(a))return;const n=Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),r=n.indexOf(e.target);let i;i=a===s||a===t?0===r?n.length-1:r-1:r<n.length-1?r+1:0,n[i].focus({preventScroll:!0}),n[i].click(),G()},G=()=>{z.value&&(_.value=!0)},H=()=>_.value=!1;return d(n,(e=>{"hidden"===e?z.value=!1:"visible"===e&&setTimeout((()=>z.value=!0),50)})),d(b,(e=>{e?setTimeout((()=>z.value=!0),50):z.value=!1})),p(h,q),N((()=>setTimeout((()=>j()),0))),k((()=>q())),a({scrollToActiveTab:j,removeFocus:H}),d((()=>e.panes),(()=>l.update()),{flush:"post",deep:!0}),()=>{const a=g.value?[T("span",{class:[o.e("nav-prev"),o.is("disabled",!g.value.prev)],onClick:V},[T(B,null,{default:()=>[T(S,null,null)]})]),T("span",{class:[o.e("nav-next"),o.is("disabled",!g.value.next)],onClick:O},[T(B,null,{default:()=>[T(R,null,null)]})])]:null,l=e.panes.map(((a,l)=>{var n,r,i,u;const c=a.uid,d=a.props.disabled,v=null!=(r=null!=(n=a.props.name)?n:a.index)?r:"".concat(l),p=!d&&(a.isClosable||e.editable);a.index="".concat(l);const b=p?T(B,{class:"is-icon-close",onClick:e=>t("tabRemove",a,e)},{default:()=>[T(A,null,null)]}):null,m=(null==(u=(i=a.slots).label)?void 0:u.call(i))||a.props.label,f=!d&&a.active?0:-1;return T("div",{ref:"tab-".concat(c),class:[o.e("item"),o.is(s.props.tabPosition),o.is("active",a.active),o.is("disabled",d),o.is("closable",p),o.is("focus",_.value)],id:"tab-".concat(v),key:"tab-".concat(c),"aria-controls":"pane-".concat(v),role:"tab","aria-selected":a.active,tabindex:f,onFocus:()=>G(),onBlur:()=>H(),onClick:e=>{H(),t("tabClick",a,v,e)},onKeydown:e=>{!p||e.code!==E.delete&&e.code!==E.backspace||t("tabRemove",a,e)}},[m,b])}));return T("div",{ref:h,class:[o.e("nav-wrap"),o.is("scrollable",!!g.value),o.is(s.props.tabPosition)]},[a,T("div",{class:o.e("nav-scroll"),ref:m},[T("div",{class:[o.e("nav"),o.is(s.props.tabPosition),o.is("stretch",e.stretch&&["top","bottom"].includes(s.props.tabPosition))],ref:f,style:L.value,role:"tablist",onKeydown:D},[e.type?null:T(ae,{ref:y,tabs:[...e.panes]},null),l])])])}}}),oe=l({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:s(Function),default:()=>!0},stretch:Boolean}),ne=e=>O(e)||j(e);var re=n({name:"ElTabs",props:oe,emits:{[L]:e=>ne(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>ne(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>ne(e),tabAdd:()=>!0},setup(e,{emit:a,slots:t,expose:l}){var s,o;const n=u("tabs"),{children:r,addChild:i,removeChild:p}=Y(x(),"ElTabPane"),b=c(),m=c(null!=(o=null!=(s=e.modelValue)?s:e.activeName)?o:"0"),f=async t=>{var l,s,o;if(m.value!==t&&!V(t))try{!1!==await(null==(l=e.beforeLeave)?void 0:l.call(e,t,m.value))&&((e=>{m.value=e,a(L,e),a("tabChange",e)})(t),null==(o=null==(s=b.value)?void 0:s.removeFocus)||o.call(s))}catch(n){}},h=(e,t,l)=>{e.props.disabled||(f(t),a("tabClick",e,l))},y=(e,t)=>{e.props.disabled||V(e.props.name)||(t.stopPropagation(),a("edit",e.props.name,"remove"),a("tabRemove",e.props.name))},g=()=>{a("edit",void 0,"add"),a("tabAdd")};return F({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},w((()=>!!e.activeName))),d((()=>e.activeName),(e=>f(e))),d((()=>e.modelValue),(e=>f(e))),d(m,(async()=>{var e;await v(),null==(e=b.value)||e.scrollToActiveTab()})),_(Z,{props:e,currentName:m,registerPane:i,unregisterPane:p}),l({currentName:m}),()=>{const a=e.editable||e.addable?T("span",{class:n.e("new-tab"),tabindex:"0",onClick:g,onKeydown:e=>{e.code===E.enter&&g()}},[T(B,{class:n.is("icon-plus")},{default:()=>[T(z,null,null)]})]):null,l=T("div",{class:[n.e("header"),n.is(e.tabPosition)]},[a,T(se,{ref:b,currentName:m.value,editable:e.editable,type:e.type,panes:r.value,stretch:e.stretch,onTabClick:h,onTabRemove:y},null)]),s=T("div",{class:n.e("content")},[K(t,"default")]);return T("div",{class:[n.b(),n.m(e.tabPosition),{[n.m("card")]:"card"===e.type,[n.m("border-card")]:"border-card"===e.type}]},[..."bottom"!==e.tabPosition?[l,s]:[s,l]])}}});const ie=l({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ue=["id","aria-hidden","aria-labelledby"],ce="ElTabPane",de=n({name:ce});var ve=g(n({...de,props:ie,setup(e){const a=e,t=x(),l=q(),s=r(Z);s||i(ce,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const o=u("tab-pane"),n=c(),v=w((()=>a.closable||s.props.closable)),p=D((()=>{var e;return s.currentName.value===(null!=(e=a.name)?e:n.value)})),y=c(p.value),g=w((()=>{var e;return null!=(e=a.name)?e:n.value})),C=D((()=>!a.lazy||y.value||p.value));d(p,(e=>{e&&(y.value=!0)}));const P=G({uid:t.uid,slots:l,props:a,paneName:g,active:p,index:n,isClosable:v});return N((()=>{s.registerPane(P)})),H((()=>{s.unregisterPane(P.uid)})),(e,a)=>h(C)?M((b(),m("div",{key:0,id:"pane-".concat(h(g)),class:f(h(o).b()),role:"tabpanel","aria-hidden":!h(p),"aria-labelledby":"tab-".concat(h(g))},[K(e.$slots,"default")],10,ue)),[[W,h(p)]]):X("v-if",!0)}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const pe=I(re,{TabPane:ve}),be=Q(ve);export{be as E,pe as a};
