/*! 
 Build based on gin-vue-admin 
 Time : 1691990784000 */
import{B as e,a1 as o,x as n,y as t,r as l,a2 as a,P as r,o as s,c as i,G as u,n as d,A as c,_ as p,a3 as m,a4 as v,b as f,h as g,w as h,M as b,N as w,t as y,a5 as k,I,a6 as _,a7 as E,D as x,H as C,a8 as F,a9 as S,aa as R,T,ab as B,U as j,d as M,ac as $,ad as D,z as K,Q as L,E as O,ae as P,C as A,F as G,af as z,ag as H,ah as N,ai as V,e as q,aj as U,ak as W,J as Y,al as J,u as Z,l as Q,Y as X,a as ee,V as oe,am as ne,g as te,K as le,an as ae,ao as re,X as se,ap as ie,W as ue,Z as de,aq as ce,a0 as pe}from"./index-bd3695e7.js";/* empty css                *//* empty css               *//* empty css               */import{E as me}from"./scrollbar-75b8e204.js";/* empty css             */import{a as ve,E as fe}from"./col-8adb3c59.js";import ge from"./index-1500ca1e.js";import he from"./history-f49e5bb0.js";import be from"./search-3b035e30.js";import we from"./bottomInfo-a4dde4cc.js";import{C as ye}from"./index-71e3ceaa.js";import{c as ke,E as Ie}from"./dialog-79af55de.js";import"./overlay-2955ed20.js";import _e from"./index-58128377.js";import{c as Ee,E as xe,O as Ce,w as Fe}from"./index-1ebc749a.js";import{c as Se,E as Re,d as Te,a as Be,C as je,b as Me,e as $e,f as De,g as Ke,F as Le,L as Oe}from"./dropdown-52dfb016.js";/* empty css                */import"./index-f83730f0.js";import"./menuItem-9e5b2e39.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./index-d620c979.js";import"./index-f577ec7c.js";import"./asyncSubmenu-a4a0f5f6.js";import"./tab-pane-262a6424.js";import"./strings-318d22c7.js";import"./index-4be230ee.js";import"./divider-081acef2.js";import"./drawer-6ea7b5c3.js";const Pe=Symbol("breadcrumbKey"),Ae=e({separator:{type:String,default:"/"},separatorIcon:{type:o}}),Ge=n({name:"ElBreadcrumb"});var ze=p(n({...Ge,props:Ae,setup(e){const o=e,n=t("breadcrumb"),p=l();return a(Pe,o),r((()=>{const e=p.value.querySelectorAll(".".concat(n.e("item")));e.length&&e[e.length-1].setAttribute("aria-current","page")})),(e,o)=>(s(),i("div",{ref_key:"breadcrumb",ref:p,class:d(c(n).b()),"aria-label":"Breadcrumb",role:"navigation"},[u(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);const He=e({to:{type:m([String,Object]),default:""},replace:{type:Boolean,default:!1}}),Ne=n({name:"ElBreadcrumbItem"});var Ve=p(n({...Ne,props:He,setup(e){const o=e,n=k(),a=v(Pe,void 0),r=t("breadcrumb"),p=n.appContext.config.globalProperties.$router,m=l(),I=()=>{o.to&&p&&(o.replace?p.replace(o.to):p.push(o.to))};return(e,o)=>{var n,t;return s(),i("span",{class:d(c(r).e("item"))},[f("span",{ref_key:"link",ref:m,class:d([c(r).e("inner"),c(r).is("link",!!e.to)]),role:"link",onClick:I},[u(e.$slots,"default")],2),(null==(n=c(a))?void 0:n.separatorIcon)?(s(),g(c(w),{key:0,class:d(c(r).e("separator"))},{default:h((()=>[(s(),g(b(c(a).separatorIcon)))])),_:1},8,["class"])):(s(),i("span",{key:1,class:d(c(r).e("separator")),role:"presentation"},y(null==(t=c(a))?void 0:t.separator),3))],2)}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const qe=I(ze,{BreadcrumbItem:Ve}),Ue=_(Ve),We=n({name:"ElContainer"});var Ye=p(n({...We,props:{direction:{type:String}},setup(e){const o=e,n=E(),l=t("container"),a=x((()=>{if("vertical"===o.direction)return!0;if("horizontal"===o.direction)return!1;if(n&&n.default){return n.default().some((e=>{const o=e.type.name;return"ElHeader"===o||"ElFooter"===o}))}return!1}));return(e,o)=>(s(),i("section",{class:d([c(l).b(),c(l).is("vertical",c(a))])},[u(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const Je=n({name:"ElAside"});var Ze=p(n({...Je,props:{width:{type:String,default:null}},setup(e){const o=e,n=t("aside"),l=x((()=>o.width?n.cssVarBlock({width:o.width}):{}));return(e,o)=>(s(),i("aside",{class:d(c(n).b()),style:C(c(l))},[u(e.$slots,"default")],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const Qe=n({name:"ElFooter"});var Xe=p(n({...Qe,props:{height:{type:String,default:null}},setup(e){const o=e,n=t("footer"),l=x((()=>o.height?n.cssVarBlock({height:o.height}):{}));return(e,o)=>(s(),i("footer",{class:d(c(n).b()),style:C(c(l))},[u(e.$slots,"default")],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const eo=n({name:"ElHeader"});var oo=p(n({...eo,props:{height:{type:String,default:null}},setup(e){const o=e,n=t("header"),l=x((()=>o.height?n.cssVarBlock({height:o.height}):{}));return(e,o)=>(s(),i("header",{class:d(c(n).b()),style:C(c(l))},[u(e.$slots,"default")],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const no=n({name:"ElMain"});var to=p(n({...no,setup(e){const o=t("main");return(e,n)=>(s(),i("main",{class:d(c(o).b())},[u(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const lo=I(Ye,{Aside:Ze,Footer:Xe,Header:oo,Main:to}),ao=_(Ze);_(Xe);const ro=_(oo),so=_(to),io=e({style:{type:m([String,Array,Object])},currentTabId:{type:m(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:m(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:uo,ElCollectionItem:co,COLLECTION_INJECTION_KEY:po,COLLECTION_ITEM_INJECTION_KEY:mo}=Se("RovingFocusGroup"),vo=Symbol("elRovingFocusGroup"),fo=Symbol("elRovingFocusGroupItem"),go={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},ho=(e,o,n)=>{const t=((e,o)=>{if("rtl"!==o)return e;switch(e){case F.right:return F.left;case F.left:return F.right;default:return e}})(e.key,n);if(!("vertical"===o&&[F.left,F.right].includes(t)||"horizontal"===o&&[F.up,F.down].includes(t)))return go[t]},bo=e=>{const{activeElement:o}=document;for(const n of e){if(n===o)return;if(n.focus(),o!==document.activeElement)return}},wo="currentTabIdChange",yo="rovingFocusGroup.entryFocus",ko={bubbles:!1,cancelable:!0},Io=n({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:io,emits:[wo,"entryFocus"],setup(e,{emit:o}){var n;const t=l(null!=(n=e.currentTabId||e.defaultCurrentTabId)?n:null),r=l(!1),s=l(!1),i=l(null),{getItems:u}=v(po,void 0),d=x((()=>[{outline:"none"},e.style])),p=Ee((o=>{var n;null==(n=e.onMousedown)||n.call(e,o)}),(()=>{s.value=!0})),m=Ee((o=>{var n;null==(n=e.onFocus)||n.call(e,o)}),(e=>{const o=!c(s),{target:n,currentTarget:l}=e;if(n===l&&o&&!c(r)){const e=new Event(yo,ko);if(null==l||l.dispatchEvent(e),!e.defaultPrevented){const e=u().filter((e=>e.focusable)),o=[e.find((e=>e.active)),e.find((e=>e.id===c(t))),...e].filter(Boolean).map((e=>e.ref));bo(o)}}s.value=!1})),f=Ee((o=>{var n;null==(n=e.onBlur)||n.call(e,o)}),(()=>{r.value=!1}));a(vo,{currentTabbedId:S(t),loop:R(e,"loop"),tabIndex:x((()=>c(r)?-1:0)),rovingFocusGroupRef:i,rovingFocusGroupRootStyle:d,orientation:R(e,"orientation"),dir:R(e,"dir"),onItemFocus:e=>{o(wo,e)},onItemShiftTab:()=>{r.value=!0},onBlur:f,onFocus:m,onMousedown:p}),T((()=>e.currentTabId),(e=>{t.value=null!=e?e:null})),B(i,yo,((...e)=>{o("entryFocus",...e)}))}});var _o=p(n({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:uo,ElRovingFocusGroupImpl:p(Io,[["render",function(e,o,n,t,l,a){return u(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]])}}),[["render",function(e,o,n,t,l,a){const r=j("el-roving-focus-group-impl"),i=j("el-focus-group-collection");return s(),g(i,null,{default:h((()=>[M(r,$(D(e.$attrs)),{default:h((()=>[u(e.$slots,"default")])),_:3},16)])),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);var Eo=p(n({components:{ElRovingFocusCollectionItem:co},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:n,loop:t,onItemFocus:r,onItemShiftTab:s}=v(vo,void 0),{getItems:i}=v(po,void 0),u=K(),d=l(null),p=Ee((e=>{o("mousedown",e)}),(o=>{e.focusable?r(c(u)):o.preventDefault()})),m=Ee((e=>{o("focus",e)}),(()=>{r(c(u))})),f=Ee((e=>{o("keydown",e)}),(e=>{const{key:o,shiftKey:n,target:l,currentTarget:a}=e;if(o===F.tab&&n)return void s();if(l!==a)return;const r=ho(e);if(r){e.preventDefault();let o=i().filter((e=>e.focusable)).map((e=>e.ref));switch(r){case"last":o.reverse();break;case"prev":case"next":{"prev"===r&&o.reverse();const e=o.indexOf(a);o=t.value?(d=e+1,(u=o).map(((e,o)=>u[(o+d)%u.length]))):o.slice(e+1);break}}L((()=>{bo(o)}))}var u,d})),g=x((()=>n.value===c(u)));return a(fo,{rovingFocusGroupItemRef:d,tabIndex:x((()=>c(g)?0:-1)),handleMousedown:p,handleFocus:m,handleKeydown:f}),{id:u,handleKeydown:f,handleFocus:m,handleMousedown:p}}}),[["render",function(e,o,n,t,l,a){const r=j("el-roving-focus-collection-item");return s(),g(r,{id:e.id,focusable:e.focusable,active:e.active},{default:h((()=>[u(e.$slots,"default")])),_:3},8,["id","focusable","active"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const xo=Symbol("elDropdown"),{ButtonGroup:Co}=O;var Fo=p(n({name:"ElDropdown",components:{ElButton:O,ElButtonGroup:Co,ElScrollbar:me,ElDropdownCollection:Re,ElTooltip:xe,ElRovingFocusGroup:_o,ElOnlyChild:Ce,ElIcon:w,ArrowDown:P},props:Te,emits:["visible-change","click","command"],setup(e,{emit:o}){const n=k(),r=t("dropdown"),{t:s}=A(),i=l(),u=l(),d=l(null),p=l(null),m=l(null),v=l(null),f=l(!1),g=[F.enter,F.space,F.down],h=x((()=>({maxHeight:G(e.maxHeight)}))),b=x((()=>[r.m(_.value)])),w=K().value,y=x((()=>e.id||w));function I(){var e;null==(e=d.value)||e.onClose()}T([i,R(e,"trigger")],(([e,o],[n])=>{var t,l,a;const r=U(o)?o:[o];(null==(t=null==n?void 0:n.$el)?void 0:t.removeEventListener)&&n.$el.removeEventListener("pointerenter",E),(null==(l=null==e?void 0:e.$el)?void 0:l.removeEventListener)&&e.$el.removeEventListener("pointerenter",E),(null==(a=null==e?void 0:e.$el)?void 0:a.addEventListener)&&r.includes("hover")&&e.$el.addEventListener("pointerenter",E)}),{immediate:!0}),z((()=>{var e,o;(null==(o=null==(e=i.value)?void 0:e.$el)?void 0:o.removeEventListener)&&i.value.$el.removeEventListener("pointerenter",E)}));const _=H();function E(){var e,o;null==(o=null==(e=i.value)?void 0:e.$el)||o.focus()}a(xo,{contentRef:p,role:x((()=>e.role)),triggerId:y,isUsingKeyboard:f,onItemEnter:function(){},onItemLeave:function(){const e=c(p);null==e||e.focus(),v.value=null}}),a("elDropdown",{instance:n,dropdownSize:_,handleClick:function(){I()},commandHandler:function(...e){o("command",...e)},trigger:R(e,"trigger"),hideOnClick:R(e,"hideOnClick")});return{t:s,ns:r,scrollbar:m,wrapStyle:h,dropdownTriggerKls:b,dropdownSize:_,triggerId:y,triggerKeys:g,currentTabId:v,handleCurrentTabIdChange:function(e){v.value=e},handlerMainButtonClick:e=>{o("click",e)},handleEntryFocus:function(e){f.value||(e.preventDefault(),e.stopImmediatePropagation())},handleClose:I,handleOpen:function(){var e;null==(e=d.value)||e.onOpen()},handleBeforeShowTooltip:function(){o("visible-change",!0)},handleShowTooltip:function(e){"keydown"===(null==e?void 0:e.type)&&p.value.focus()},handleBeforeHideTooltip:function(){o("visible-change",!1)},onFocusAfterTrapped:e=>{var o,n;e.preventDefault(),null==(n=null==(o=p.value)?void 0:o.focus)||n.call(o,{preventScroll:!0})},popperRef:d,contentRef:p,triggeringElementRef:i,referenceElementRef:u}}}),[["render",function(e,o,n,t,l,a){var r;const c=j("el-dropdown-collection"),p=j("el-roving-focus-group"),m=j("el-scrollbar"),v=j("el-only-child"),f=j("el-tooltip"),b=j("el-button"),w=j("arrow-down"),y=j("el-icon"),k=j("el-button-group");return s(),i("div",{class:d([e.ns.b(),e.ns.is("disabled",e.disabled)])},[M(f,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":"hover"===e.trigger?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":null==(r=e.referenceElementRef)?void 0:r.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":"hover"===e.trigger?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:"".concat(e.ns.namespace.value,"-zoom-in-top"),teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},N({content:h((()=>[M(m,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:h((()=>[M(p,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:h((()=>[M(c,null,{default:h((()=>[u(e.$slots,"dropdown")])),_:3})])),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])])),_:3},8,["wrap-style","view-class"])])),_:2},[e.splitButton?void 0:{name:"default",fn:h((()=>[M(v,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:h((()=>[u(e.$slots,"default")])),_:3},8,["id","tabindex"])]))}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(s(),g(k,{key:0},{default:h((()=>[M(b,V({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:h((()=>[u(e.$slots,"default")])),_:3},16,["size","type","disabled","tabindex","onClick"]),M(b,V({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:h((()=>[M(y,{class:d(e.ns.e("icon"))},{default:h((()=>[M(w)])),_:1},8,["class"])])),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])])),_:3})):q("v-if",!0)],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const So=n({name:"DropdownItemImpl",components:{ElIcon:w},props:Be,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const n=t("dropdown"),{role:l}=v(xo,void 0),{collectionItemRef:a}=v(je,void 0),{collectionItemRef:r}=v(mo,void 0),{rovingFocusGroupItemRef:s,tabIndex:i,handleFocus:u,handleKeydown:d,handleMousedown:c}=v(fo,void 0),p=ke(a,r,s),m=x((()=>"menu"===l.value?"menuitem":"navigation"===l.value?"link":"button")),f=Ee((e=>{const{code:n}=e;if(n===F.enter||n===F.space)return e.preventDefault(),e.stopImmediatePropagation(),o("clickimpl",e),!0}),d);return{ns:n,itemRef:p,dataset:{[Me]:""},role:m,tabIndex:i,handleFocus:u,handleKeydown:f,handleMousedown:c}}}),Ro=["aria-disabled","tabindex","role"];const To=()=>{const e=v("elDropdown",{}),o=x((()=>null==e?void 0:e.dropdownSize));return{elDropdown:e,_elDropdownSize:o}};var Bo=p(n({name:"ElDropdownItem",components:{ElDropdownCollectionItem:$e,ElRovingFocusItem:Eo,ElDropdownItemImpl:p(So,[["render",function(e,o,n,t,l,a){const r=j("el-icon");return s(),i(Y,null,[e.divided?(s(),i("li",V({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):q("v-if",!0),f("li",V({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=o=>e.$emit("clickimpl",o)),onFocus:o[1]||(o[1]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onKeydown:o[2]||(o[2]=W(((...o)=>e.handleKeydown&&e.handleKeydown(...o)),["self"])),onMousedown:o[3]||(o[3]=(...o)=>e.handleMousedown&&e.handleMousedown(...o)),onPointermove:o[4]||(o[4]=o=>e.$emit("pointermove",o)),onPointerleave:o[5]||(o[5]=o=>e.$emit("pointerleave",o))}),[e.icon?(s(),g(r,{key:0},{default:h((()=>[(s(),g(b(e.icon)))])),_:1})):q("v-if",!0),u(e.$slots,"default")],16,Ro)],64)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]])},inheritAttrs:!1,props:Be,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:n}){const{elDropdown:t}=To(),a=k(),r=l(null),s=x((()=>{var e,o;return null!=(o=null==(e=c(r))?void 0:e.textContent)?o:""})),{onItemEnter:i,onItemLeave:u}=v(xo,void 0),d=Ee((e=>(o("pointermove",e),e.defaultPrevented)),Fe((o=>{if(e.disabled)return void u(o);const n=o.currentTarget;n===document.activeElement||n.contains(document.activeElement)||(i(o),o.defaultPrevented||null==n||n.focus())}))),p=Ee((e=>(o("pointerleave",e),e.defaultPrevented)),Fe((e=>{u(e)})));return{handleClick:Ee((n=>{if(!e.disabled)return o("click",n),"keydown"!==n.type&&n.defaultPrevented}),(o=>{var n,l,r;e.disabled?o.stopImmediatePropagation():((null==(n=null==t?void 0:t.hideOnClick)?void 0:n.value)&&(null==(l=t.handleClick)||l.call(t)),null==(r=t.commandHandler)||r.call(t,e.command,a,o))})),handlePointerMove:d,handlePointerLeave:p,textContent:s,propsAndAttrs:x((()=>({...e,...n})))}}}),[["render",function(e,o,n,t,l,a){var r;const i=j("el-dropdown-item-impl"),d=j("el-roving-focus-item"),c=j("el-dropdown-collection-item");return s(),g(c,{disabled:e.disabled,"text-value":null!=(r=e.textValue)?r:e.textContent},{default:h((()=>[M(d,{focusable:!e.disabled},{default:h((()=>[M(i,V(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:h((()=>[u(e.$slots,"default")])),_:3},16,["onPointerleave","onPointermove","onClickimpl"])])),_:3},8,["focusable"])])),_:3},8,["disabled","text-value"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const jo=n({name:"ElDropdownMenu",props:De,setup(e){const o=t("dropdown"),{_elDropdownSize:n}=To(),l=n.value,{focusTrapRef:a,onKeydown:r}=v(J,void 0),{contentRef:s,role:i,triggerId:u}=v(xo,void 0),{collectionRef:d,getItems:p}=v(Ke,void 0),{rovingFocusGroupRef:m,rovingFocusGroupRootStyle:f,tabIndex:g,onBlur:h,onFocus:b,onMousedown:w}=v(vo,void 0),{collectionRef:y}=v(po,void 0),k=x((()=>[o.b("menu"),o.bm("menu",null==l?void 0:l.value)])),I=ke(s,d,a,m,y),_=Ee((o=>{var n;null==(n=e.onKeydown)||n.call(e,o)}),(e=>{const{currentTarget:o,code:n,target:t}=e;if(o.contains(t),F.tab===n&&e.stopImmediatePropagation(),e.preventDefault(),t!==c(s))return;if(!Le.includes(n))return;const l=p().filter((e=>!e.disabled)).map((e=>e.ref));Oe.includes(n)&&l.reverse(),bo(l)}));return{size:l,rovingFocusGroupRootStyle:f,tabIndex:g,dropdownKls:k,role:i,triggerId:u,dropdownListWrapperRef:I,handleKeydown:e=>{_(e),r(e)},onBlur:h,onFocus:b,onMousedown:w}}}),Mo=["role","aria-labelledby"];var $o=p(jo,[["render",function(e,o,n,t,l,a){return s(),i("ul",{ref:e.dropdownListWrapperRef,class:d(e.dropdownKls),style:C(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...o)=>e.onBlur&&e.onBlur(...o)),onFocus:o[1]||(o[1]=(...o)=>e.onFocus&&e.onFocus(...o)),onKeydown:o[2]||(o[2]=W(((...o)=>e.handleKeydown&&e.handleKeydown(...o)),["self"])),onMousedown:o[3]||(o[3]=W(((...o)=>e.onMousedown&&e.onMousedown(...o)),["self"]))},[u(e.$slots,"default")],46,Mo)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const Do=I(Fo,{DropdownItem:Bo,DropdownMenu:$o}),Ko=_(Bo),Lo=_($o),Oo={key:0,class:"quick-title"},Po=["onClick"],Ao={class:"dialog-footer"},Go={name:"CommandMenu"},zo=Object.assign(Go,{setup(e,{expose:o}){const n=Z(),t=Z(),a=Q(),r=X(),u=l(!1),d=l(""),c=ee([]),p=e=>{const o=[];return e.forEach((e=>{e.children&&e.children.length>0?o.push(...p(e.children)):e.meta.title&&e.meta.title.indexOf(d.value)>-1&&o.push({label:e.meta.title,func:()=>b(e)})})),o},m=()=>{const e={label:"跳转",children:[]},o=p(r.asyncRouters[0].children);e.children.push(...o),c.push(e)},v=()=>{const e={label:"操作",children:[]},o=[{label:"亮色主题",func:()=>w("light")},{label:"暗色主题",func:()=>w("dark")},{label:"退出登录",func:()=>a.LoginOut()}];e.children.push(...o.filter((e=>e.label.indexOf(d.value)>-1))),c.push(e)};m(),v();const b=e=>{var o,l;const a=e.name,s={},i={};(null==(o=r.routeMap[a])?void 0:o.parameters)&&(null==(l=r.routeMap[a])||l.parameters.forEach((e=>{"query"===e.type?s[e.key]=e.value:i[e.key]=e.value}))),a!==t.name&&(e.name.indexOf("http://")>-1||e.name.indexOf("https://")>-1?window.open(e.name):n.push({name:a,query:s,params:i}),u.value=!1)},w=e=>{null!==e?a.changeSideMode(e):a.changeSideMode("dark")},k=()=>{u.value=!1};return o({open:()=>{u.value=!0}}),T(d,(()=>{c.length=0,m(),v()})),(e,o)=>{const n=O,t=Ie;return s(),g(t,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=e=>u.value=e),width:"30%",class:"overlay","show-close":!1},{header:h((()=>[oe(f("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>d.value=e),class:"quick-input",placeholder:"请输入你需要快捷到达的功能"},null,512),[[ne,d.value]])])),footer:h((()=>[f("span",Ao,[M(n,{onClick:k},{default:h((()=>[te("关闭")])),_:1})])])),default:h((()=>[(s(!0),i(Y,null,le(c,((e,o)=>(s(),i("div",{key:o},[e.children.length?(s(),i("div",Oo,y(e.label),1)):q("",!0),(s(!0),i(Y,null,le(e.children,((e,n)=>(s(),i("div",{key:o+"-"+n,class:"quick-item",onClick:e.func},y(e.label),9,Po)))),128))])))),128))])),_:1},8,["modelValue"])}}}),Ho={key:0,class:"gvaIcon gvaIcon-arrow-double-right"},No={key:1,class:"gvaIcon gvaIcon-arrow-double-left"},Vo={class:"right-box"},qo={class:"dp-flex justify-content-center align-items height-full width-full"},Uo={class:"header-avatar",style:{cursor:"pointer"}},Wo={style:{"font-weight":"600"}},Yo=f("div",null,"指令菜单",-1),Jo={style:{"margin-left":"8px"}},Zo={class:"button"},Qo=f("span",{class:"button"},"K",-1),Xo={name:"Layout"},en=Object.assign(Xo,{setup(e){const o=Z(),n=ae(),t=X(),a=l(!1),u=l(!0),p=l(!1),m=l("");l(!1);const v=()=>{"WIN"===window.localStorage.getItem("osType")?m.value="Ctrl":m.value="⌘";window.addEventListener("keydown",(e=>{e.ctrlKey&&"k"===e.key&&(e.preventDefault(),I())}));const e=document.body.clientWidth;e<1e3?(p.value=!0,u.value=!1,a.value=!0):e>=1e3&&e<1200?(p.value=!1,u.value=!1,a.value=!0):(p.value=!1,u.value=!0,a.value=!1)};v();const k=l(),I=()=>{k.value.open()},_=l(!1);r((()=>{re.emit("collapse",a.value),re.emit("mobile",p.value),re.on("reload",$),re.on("showLoading",(()=>{_.value=!0})),re.on("closeLoading",(()=>{_.value=!1})),window.onresize=()=>(v(),re.emit("collapse",a.value),void re.emit("mobile",p.value)),E.loadingInstance&&E.loadingInstance.close()}));const E=Q(),F=x((()=>"dark"===E.sideMode?"#fff":"light"===E.sideMode?"#191a23":E.baseColor)),S=x((()=>"dark"===E.sideMode?"#191a23":"light"===E.sideMode?"#fff":E.sideMode)),R=x((()=>n.meta.matched)),T=l(!0);let B=null;const $=async()=>{B&&window.clearTimeout(B),B=window.setTimeout((async()=>{if(n.meta.keepAlive)T.value=!1,await L(),T.value=!0;else{const e=n.meta.title;o.push({name:"Reload",params:{title:e}})}}),400)},D=l(!1),K=()=>{a.value=!a.value,u.value=!a.value,D.value=!a.value,re.emit("collapse",a.value)},O=()=>{o.push({name:"person"})};return(e,o)=>{const l=ve,r=ao,v=fe,x=Ue,B=qe,$=j("arrow-down"),L=w,P=Ko,A=Lo,G=Do,z=ro,H=j("router-view"),N=so,V=lo,U=pe;return s(),g(V,{class:"layout-cont"},{default:h((()=>[M(V,{class:d([u.value?"openside":"hideside",p.value?"mobile":""])},{default:h((()=>[M(l,{class:d([D.value?"shadowBg":""]),onClick:o[0]||(o[0]=e=>(D.value=!D.value,u.value=!!a.value,void K()))},null,8,["class"]),M(r,{class:"main-cont main-left gva-aside"},{default:h((()=>[f("div",{class:"tilte",style:C({background:S.value})},[u.value?(s(),i("div",{key:0,class:"tit-text",style:C({color:F.value})},"无鱼原型管理",4)):q("",!0)],4),M(ge,{class:"aside"})])),_:1}),M(N,{class:"main-cont main-right"},{default:h((()=>[M(se,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:h((()=>[f("div",{style:C({width:"calc(100% - ".concat(p.value?"0px":a.value?"54px":"220px",")")}),class:"topfix"},[M(l,null,{default:h((()=>[M(v,null,{default:h((()=>[M(z,{class:"header-cont"},{default:h((()=>[M(l,{class:"pd-0"},{default:h((()=>[M(v,{xs:2,lg:1,md:1,sm:1,xl:1,style:{"z-index":"100"}},{default:h((()=>[f("div",{class:"menu-total",onClick:K},[a.value?(s(),i("div",Ho)):(s(),i("div",No))])])),_:1}),M(v,{xs:10,lg:14,md:14,sm:9,xl:14,pull:1},{default:h((()=>[oe(M(B,{class:"breadcrumb"},{default:h((()=>[(s(!0),i(Y,null,le(R.value.slice(1,R.value.length),(e=>(s(),g(x,{key:e.path},{default:h((()=>[te(y(c(ie)(e.meta.title,c(n))),1)])),_:2},1024)))),128))])),_:1},512),[[ue,!p.value]])])),_:1}),M(v,{xs:12,lg:9,md:9,sm:14,xl:9},{default:h((()=>[f("div",Vo,[M(be),M(G,null,{dropdown:h((()=>[M(A,{class:"dropdown-group"},{default:h((()=>[M(P,null,{default:h((()=>[f("span",Wo," 当前角色："+y(c(E).userInfo.authority.authorityName),1)])),_:1}),c(E).userInfo.authorities?(s(!0),i(Y,{key:0},le(c(E).userInfo.authorities.filter((e=>e.authorityId!==c(E).userInfo.authorityId)),(e=>(s(),g(P,{key:e.authorityId,onClick:o=>(async e=>{0===(await ce({authorityId:e})).code&&(window.sessionStorage.setItem("needCloseAll","true"),window.location.reload())})(e.authorityId)},{default:h((()=>[f("span",null," 切换为："+y(e.authorityName),1)])),_:2},1032,["onClick"])))),128)):q("",!0),M(P,{icon:"avatar"},{default:h((()=>[f("div",{class:"command-box",style:{display:"flex"},onClick:I},[Yo,f("div",Jo,[f("span",Zo,y(m.value),1),te(" + "),Qo])])])),_:1}),M(P,{icon:"avatar",onClick:O},{default:h((()=>[te("个人信息")])),_:1}),M(P,{icon:"reading-lamp",onClick:c(E).LoginOut},{default:h((()=>[te("登 出")])),_:1},8,["onClick"])])),_:1})])),default:h((()=>[f("div",qo,[f("span",Uo,[M(ye),oe(f("span",{style:{"margin-left":"5px"}},y(c(E).userInfo.nickName),513),[[ue,!p.value]]),M(L,null,{default:h((()=>[M($)])),_:1})])])])),_:1})])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),M(he,{ref:"layoutHistoryComponent"},null,512)],4)])),_:1}),T.value?oe((s(),g(H,{key:0,"element-loading-text":"正在加载中",class:"admin-box"},{default:h((({Component:e})=>[f("div",null,[M(se,{mode:"out-in",name:"el-fade-in-linear"},{default:h((()=>[(s(),g(de,{include:c(t).keepAliveRouters},[(s(),g(b(e)))],1032,["include"]))])),_:2},1024)])])),_:1})),[[U,_.value]]):q("",!0),M(we),M(_e),M(zo,{ref_key:"command",ref:k},null,512)])),_:1})])),_:1},8,["class"])])),_:1})}}});export{en as default};
