/*! 
 Build based on gin-vue-admin 
 Time : 1691228829000 */
import{B as e,a1 as o,x as n,y as t,r as l,a2 as a,P as r,o as s,c as i,G as u,n as d,A as c,_ as p,a3 as m,a4 as f,a5 as v,b as g,h,w as b,M as w,N as y,t as k,a6 as I,I as _,a7 as E,a8 as x,D as C,H as F,a9 as S,aa as R,ab as T,T as B,ac as j,U as M,d as $,ad as D,ae as K,z as L,Q as O,E as P,af as A,C as G,F as z,ag as H,ah as N,ai as V,aj as q,e as U,ak as W,al as Y,J,am as Z,u as Q,l as X,Y as ee,a as oe,V as ne,an as te,g as le,K as ae,ao as re,ap as se,X as ie,aq as ue,W as de,Z as ce,ar as pe,a0 as me}from"./index-705282a4.js";/* empty css                *//* empty css               *//* empty css               */import{E as fe}from"./scrollbar-b8aea7aa.js";/* empty css             */import{a as ve,E as ge}from"./col-10b70383.js";import he from"./index-3ac1d929.js";import be from"./history-4ab5b4ae.js";import we from"./search-1f508b6f.js";import ye from"./bottomInfo-7730b26f.js";import{C as ke}from"./index-8539d382.js";import{c as Ie,E as _e}from"./dialog-d78ef494.js";import"./overlay-7a08aeb2.js";import Ee from"./index-d19cb94d.js";import{c as xe,E as Ce,O as Fe,w as Se}from"./index-586999c8.js";import{c as Re,E as Te,d as Be,a as je,C as Me,b as $e,e as De,f as Ke,g as Le,F as Oe,L as Pe}from"./dropdown-d2c71e78.js";/* empty css                */import"./index-5572f0f3.js";import"./menuItem-52bf94b2.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./index-a4f226a5.js";import"./index-1e0f49f6.js";import"./asyncSubmenu-3e42485a.js";import"./tab-pane-2a765fb4.js";import"./strings-5cc13f5a.js";import"./index-9ac0ed56.js";import"./divider-d9601b17.js";import"./drawer-95f700da.js";const Ae=Symbol("breadcrumbKey"),Ge=e({separator:{type:String,default:"/"},separatorIcon:{type:o}}),ze=n({name:"ElBreadcrumb"});var He=p(n({...ze,props:Ge,setup(e){const o=e,n=t("breadcrumb"),p=l();return a(Ae,o),r((()=>{const e=p.value.querySelectorAll(".".concat(n.e("item")));e.length&&e[e.length-1].setAttribute("aria-current","page")})),(e,o)=>(s(),i("div",{ref_key:"breadcrumb",ref:p,class:d(c(n).b()),"aria-label":"Breadcrumb",role:"navigation"},[u(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);const Ne=e({to:{type:m([String,Object]),default:""},replace:{type:Boolean,default:!1}}),Ve=n({name:"ElBreadcrumbItem"});var qe=p(n({...Ve,props:Ne,setup(e){const o=e,n=I(),a=f(Ae,void 0),r=t("breadcrumb"),{separator:p,separatorIcon:m}=v(a),_=n.appContext.config.globalProperties.$router,E=l(),x=()=>{o.to&&_&&(o.replace?_.replace(o.to):_.push(o.to))};return(e,o)=>(s(),i("span",{class:d(c(r).e("item"))},[g("span",{ref_key:"link",ref:E,class:d([c(r).e("inner"),c(r).is("link",!!e.to)]),role:"link",onClick:x},[u(e.$slots,"default")],2),c(m)?(s(),h(c(y),{key:0,class:d(c(r).e("separator"))},{default:b((()=>[(s(),h(w(c(m))))])),_:1},8,["class"])):(s(),i("span",{key:1,class:d(c(r).e("separator")),role:"presentation"},k(c(p)),3))],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const Ue=_(He,{BreadcrumbItem:qe}),We=E(qe),Ye=n({name:"ElContainer"});var Je=p(n({...Ye,props:{direction:{type:String}},setup(e){const o=e,n=x(),l=t("container"),a=C((()=>{if("vertical"===o.direction)return!0;if("horizontal"===o.direction)return!1;if(n&&n.default){return n.default().some((e=>{const o=e.type.name;return"ElHeader"===o||"ElFooter"===o}))}return!1}));return(e,o)=>(s(),i("section",{class:d([c(l).b(),c(l).is("vertical",c(a))])},[u(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const Ze=n({name:"ElAside"});var Qe=p(n({...Ze,props:{width:{type:String,default:null}},setup(e){const o=e,n=t("aside"),l=C((()=>o.width?n.cssVarBlock({width:o.width}):{}));return(e,o)=>(s(),i("aside",{class:d(c(n).b()),style:F(c(l))},[u(e.$slots,"default")],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const Xe=n({name:"ElFooter"});var eo=p(n({...Xe,props:{height:{type:String,default:null}},setup(e){const o=e,n=t("footer"),l=C((()=>o.height?n.cssVarBlock({height:o.height}):{}));return(e,o)=>(s(),i("footer",{class:d(c(n).b()),style:F(c(l))},[u(e.$slots,"default")],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const oo=n({name:"ElHeader"});var no=p(n({...oo,props:{height:{type:String,default:null}},setup(e){const o=e,n=t("header"),l=C((()=>o.height?n.cssVarBlock({height:o.height}):{}));return(e,o)=>(s(),i("header",{class:d(c(n).b()),style:F(c(l))},[u(e.$slots,"default")],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const to=n({name:"ElMain"});var lo=p(n({...to,setup(e){const o=t("main");return(e,n)=>(s(),i("main",{class:d(c(o).b())},[u(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const ao=_(Je,{Aside:Qe,Footer:eo,Header:no,Main:lo}),ro=E(Qe);E(eo);const so=E(no),io=E(lo),uo=e({style:{type:m([String,Array,Object])},currentTabId:{type:m(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:m(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:co,ElCollectionItem:po,COLLECTION_INJECTION_KEY:mo,COLLECTION_ITEM_INJECTION_KEY:fo}=Re("RovingFocusGroup"),vo=Symbol("elRovingFocusGroup"),go=Symbol("elRovingFocusGroupItem"),ho={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},bo=(e,o,n)=>{const t=((e,o)=>{if("rtl"!==o)return e;switch(e){case S.right:return S.left;case S.left:return S.right;default:return e}})(e.key,n);if(!("vertical"===o&&[S.left,S.right].includes(t)||"horizontal"===o&&[S.up,S.down].includes(t)))return ho[t]},wo=e=>{const{activeElement:o}=document;for(const n of e){if(n===o)return;if(n.focus(),o!==document.activeElement)return}},yo="currentTabIdChange",ko="rovingFocusGroup.entryFocus",Io={bubbles:!1,cancelable:!0},_o=n({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:uo,emits:[yo,"entryFocus"],setup(e,{emit:o}){var n;const t=l(null!=(n=e.currentTabId||e.defaultCurrentTabId)?n:null),r=l(!1),s=l(!1),i=l(null),{getItems:u}=f(mo,void 0),d=C((()=>[{outline:"none"},e.style])),p=xe((o=>{var n;null==(n=e.onMousedown)||n.call(e,o)}),(()=>{s.value=!0})),m=xe((o=>{var n;null==(n=e.onFocus)||n.call(e,o)}),(e=>{const o=!c(s),{target:n,currentTarget:l}=e;if(n===l&&o&&!c(r)){const e=new Event(ko,Io);if(null==l||l.dispatchEvent(e),!e.defaultPrevented){const e=u().filter((e=>e.focusable)),o=[e.find((e=>e.active)),e.find((e=>e.id===c(t))),...e].filter(Boolean).map((e=>e.ref));wo(o)}}s.value=!1})),v=xe((o=>{var n;null==(n=e.onBlur)||n.call(e,o)}),(()=>{r.value=!1}));a(vo,{currentTabbedId:R(t),loop:T(e,"loop"),tabIndex:C((()=>c(r)?-1:0)),rovingFocusGroupRef:i,rovingFocusGroupRootStyle:d,orientation:T(e,"orientation"),dir:T(e,"dir"),onItemFocus:e=>{o(yo,e)},onItemShiftTab:()=>{r.value=!0},onBlur:v,onFocus:m,onMousedown:p}),B((()=>e.currentTabId),(e=>{t.value=null!=e?e:null})),j(i,ko,((...e)=>{o("entryFocus",...e)}))}});var Eo=p(n({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:co,ElRovingFocusGroupImpl:p(_o,[["render",function(e,o,n,t,l,a){return u(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]])}}),[["render",function(e,o,n,t,l,a){const r=M("el-roving-focus-group-impl"),i=M("el-focus-group-collection");return s(),h(i,null,{default:b((()=>[$(r,D(K(e.$attrs)),{default:b((()=>[u(e.$slots,"default")])),_:3},16)])),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);var xo=p(n({components:{ElRovingFocusCollectionItem:po},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:n,loop:t,onItemFocus:r,onItemShiftTab:s}=f(vo,void 0),{getItems:i}=f(mo,void 0),u=L(),d=l(null),p=xe((e=>{o("mousedown",e)}),(o=>{e.focusable?r(c(u)):o.preventDefault()})),m=xe((e=>{o("focus",e)}),(()=>{r(c(u))})),v=xe((e=>{o("keydown",e)}),(e=>{const{key:o,shiftKey:n,target:l,currentTarget:a}=e;if(o===S.tab&&n)return void s();if(l!==a)return;const r=bo(e);if(r){e.preventDefault();let o=i().filter((e=>e.focusable)).map((e=>e.ref));switch(r){case"last":o.reverse();break;case"prev":case"next":{"prev"===r&&o.reverse();const e=o.indexOf(a);o=t.value?(d=e+1,(u=o).map(((e,o)=>u[(o+d)%u.length]))):o.slice(e+1);break}}O((()=>{wo(o)}))}var u,d})),g=C((()=>n.value===c(u)));return a(go,{rovingFocusGroupItemRef:d,tabIndex:C((()=>c(g)?0:-1)),handleMousedown:p,handleFocus:m,handleKeydown:v}),{id:u,handleKeydown:v,handleFocus:m,handleMousedown:p}}}),[["render",function(e,o,n,t,l,a){const r=M("el-roving-focus-collection-item");return s(),h(r,{id:e.id,focusable:e.focusable,active:e.active},{default:b((()=>[u(e.$slots,"default")])),_:3},8,["id","focusable","active"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const Co=Symbol("elDropdown"),{ButtonGroup:Fo}=P;var So=p(n({name:"ElDropdown",components:{ElButton:P,ElButtonGroup:Fo,ElScrollbar:fe,ElDropdownCollection:Te,ElTooltip:Ce,ElRovingFocusGroup:Eo,ElOnlyChild:Fe,ElIcon:y,ArrowDown:A},props:Be,emits:["visible-change","click","command"],setup(e,{emit:o}){const n=I(),r=t("dropdown"),{t:s}=G(),i=l(),u=l(),d=l(null),p=l(null),m=l(null),f=l(null),v=l(!1),g=[S.enter,S.space,S.down],h=C((()=>({maxHeight:z(e.maxHeight)}))),b=C((()=>[r.m(_.value)])),w=L().value,y=C((()=>e.id||w));function k(){var e;null==(e=d.value)||e.onClose()}B([i,T(e,"trigger")],(([e,o],[n])=>{var t,l,a;const r=W(o)?o:[o];(null==(t=null==n?void 0:n.$el)?void 0:t.removeEventListener)&&n.$el.removeEventListener("pointerenter",E),(null==(l=null==e?void 0:e.$el)?void 0:l.removeEventListener)&&e.$el.removeEventListener("pointerenter",E),(null==(a=null==e?void 0:e.$el)?void 0:a.addEventListener)&&r.includes("hover")&&e.$el.addEventListener("pointerenter",E)}),{immediate:!0}),H((()=>{var e,o;(null==(o=null==(e=i.value)?void 0:e.$el)?void 0:o.removeEventListener)&&i.value.$el.removeEventListener("pointerenter",E)}));const _=N();function E(){var e,o;null==(o=null==(e=i.value)?void 0:e.$el)||o.focus()}a(Co,{contentRef:p,role:C((()=>e.role)),triggerId:y,isUsingKeyboard:v,onItemEnter:function(){},onItemLeave:function(){const e=c(p);null==e||e.focus(),f.value=null}}),a("elDropdown",{instance:n,dropdownSize:_,handleClick:function(){k()},commandHandler:function(...e){o("command",...e)},trigger:T(e,"trigger"),hideOnClick:T(e,"hideOnClick")});return{t:s,ns:r,scrollbar:m,wrapStyle:h,dropdownTriggerKls:b,dropdownSize:_,triggerId:y,triggerKeys:g,currentTabId:f,handleCurrentTabIdChange:function(e){f.value=e},handlerMainButtonClick:e=>{o("click",e)},handleEntryFocus:function(e){v.value||(e.preventDefault(),e.stopImmediatePropagation())},handleClose:k,handleOpen:function(){var e;null==(e=d.value)||e.onOpen()},handleBeforeShowTooltip:function(){o("visible-change",!0)},handleShowTooltip:function(e){"keydown"===(null==e?void 0:e.type)&&p.value.focus()},handleBeforeHideTooltip:function(){o("visible-change",!1)},onFocusAfterTrapped:e=>{var o,n;e.preventDefault(),null==(n=null==(o=p.value)?void 0:o.focus)||n.call(o,{preventScroll:!0})},popperRef:d,contentRef:p,triggeringElementRef:i,referenceElementRef:u}}}),[["render",function(e,o,n,t,l,a){var r;const c=M("el-dropdown-collection"),p=M("el-roving-focus-group"),m=M("el-scrollbar"),f=M("el-only-child"),v=M("el-tooltip"),g=M("el-button"),w=M("arrow-down"),y=M("el-icon"),k=M("el-button-group");return s(),i("div",{class:d([e.ns.b(),e.ns.is("disabled",e.disabled)])},[$(v,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":"hover"===e.trigger?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":null==(r=e.referenceElementRef)?void 0:r.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":"hover"===e.trigger?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:"".concat(e.ns.namespace.value,"-zoom-in-top"),teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},V({content:b((()=>[$(m,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:b((()=>[$(p,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:b((()=>[$(c,null,{default:b((()=>[u(e.$slots,"dropdown")])),_:3})])),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])])),_:3},8,["wrap-style","view-class"])])),_:2},[e.splitButton?void 0:{name:"default",fn:b((()=>[$(f,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:b((()=>[u(e.$slots,"default")])),_:3},8,["id","tabindex"])]))}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(s(),h(k,{key:0},{default:b((()=>[$(g,q({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:b((()=>[u(e.$slots,"default")])),_:3},16,["size","type","disabled","tabindex","onClick"]),$(g,q({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:b((()=>[$(y,{class:d(e.ns.e("icon"))},{default:b((()=>[$(w)])),_:1},8,["class"])])),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])])),_:3})):U("v-if",!0)],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const Ro=n({name:"DropdownItemImpl",components:{ElIcon:y},props:je,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const n=t("dropdown"),{role:l}=f(Co,void 0),{collectionItemRef:a}=f(Me,void 0),{collectionItemRef:r}=f(fo,void 0),{rovingFocusGroupItemRef:s,tabIndex:i,handleFocus:u,handleKeydown:d,handleMousedown:c}=f(go,void 0),p=Ie(a,r,s),m=C((()=>"menu"===l.value?"menuitem":"navigation"===l.value?"link":"button")),v=xe((e=>{const{code:n}=e;if(n===S.enter||n===S.space)return e.preventDefault(),e.stopImmediatePropagation(),o("clickimpl",e),!0}),d);return{ns:n,itemRef:p,dataset:{[$e]:""},role:m,tabIndex:i,handleFocus:u,handleKeydown:v,handleMousedown:c}}}),To=["aria-disabled","tabindex","role"];const Bo=()=>{const e=f("elDropdown",{}),o=C((()=>null==e?void 0:e.dropdownSize));return{elDropdown:e,_elDropdownSize:o}};var jo=p(n({name:"ElDropdownItem",components:{ElDropdownCollectionItem:De,ElRovingFocusItem:xo,ElDropdownItemImpl:p(Ro,[["render",function(e,o,n,t,l,a){const r=M("el-icon");return s(),i(J,null,[e.divided?(s(),i("li",q({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):U("v-if",!0),g("li",q({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=o=>e.$emit("clickimpl",o)),onFocus:o[1]||(o[1]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onKeydown:o[2]||(o[2]=Y(((...o)=>e.handleKeydown&&e.handleKeydown(...o)),["self"])),onMousedown:o[3]||(o[3]=(...o)=>e.handleMousedown&&e.handleMousedown(...o)),onPointermove:o[4]||(o[4]=o=>e.$emit("pointermove",o)),onPointerleave:o[5]||(o[5]=o=>e.$emit("pointerleave",o))}),[e.icon?(s(),h(r,{key:0},{default:b((()=>[(s(),h(w(e.icon)))])),_:1})):U("v-if",!0),u(e.$slots,"default")],16,To)],64)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]])},inheritAttrs:!1,props:je,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:n}){const{elDropdown:t}=Bo(),a=I(),r=l(null),s=C((()=>{var e,o;return null!=(o=null==(e=c(r))?void 0:e.textContent)?o:""})),{onItemEnter:i,onItemLeave:u}=f(Co,void 0),d=xe((e=>(o("pointermove",e),e.defaultPrevented)),Se((o=>{if(e.disabled)return void u(o);const n=o.currentTarget;n===document.activeElement||n.contains(document.activeElement)||(i(o),o.defaultPrevented||null==n||n.focus())}))),p=xe((e=>(o("pointerleave",e),e.defaultPrevented)),Se((e=>{u(e)})));return{handleClick:xe((n=>{if(!e.disabled)return o("click",n),"keydown"!==n.type&&n.defaultPrevented}),(o=>{var n,l,r;e.disabled?o.stopImmediatePropagation():((null==(n=null==t?void 0:t.hideOnClick)?void 0:n.value)&&(null==(l=t.handleClick)||l.call(t)),null==(r=t.commandHandler)||r.call(t,e.command,a,o))})),handlePointerMove:d,handlePointerLeave:p,textContent:s,propsAndAttrs:C((()=>({...e,...n})))}}}),[["render",function(e,o,n,t,l,a){var r;const i=M("el-dropdown-item-impl"),d=M("el-roving-focus-item"),c=M("el-dropdown-collection-item");return s(),h(c,{disabled:e.disabled,"text-value":null!=(r=e.textValue)?r:e.textContent},{default:b((()=>[$(d,{focusable:!e.disabled},{default:b((()=>[$(i,q(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:b((()=>[u(e.$slots,"default")])),_:3},16,["onPointerleave","onPointermove","onClickimpl"])])),_:3},8,["focusable"])])),_:3},8,["disabled","text-value"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const Mo=n({name:"ElDropdownMenu",props:Ke,setup(e){const o=t("dropdown"),{_elDropdownSize:n}=Bo(),l=n.value,{focusTrapRef:a,onKeydown:r}=f(Z,void 0),{contentRef:s,role:i,triggerId:u}=f(Co,void 0),{collectionRef:d,getItems:p}=f(Le,void 0),{rovingFocusGroupRef:m,rovingFocusGroupRootStyle:v,tabIndex:g,onBlur:h,onFocus:b,onMousedown:w}=f(vo,void 0),{collectionRef:y}=f(mo,void 0),k=C((()=>[o.b("menu"),o.bm("menu",null==l?void 0:l.value)])),I=Ie(s,d,a,m,y),_=xe((o=>{var n;null==(n=e.onKeydown)||n.call(e,o)}),(e=>{const{currentTarget:o,code:n,target:t}=e;if(o.contains(t),S.tab===n&&e.stopImmediatePropagation(),e.preventDefault(),t!==c(s))return;if(!Oe.includes(n))return;const l=p().filter((e=>!e.disabled)).map((e=>e.ref));Pe.includes(n)&&l.reverse(),wo(l)}));return{size:l,rovingFocusGroupRootStyle:v,tabIndex:g,dropdownKls:k,role:i,triggerId:u,dropdownListWrapperRef:I,handleKeydown:e=>{_(e),r(e)},onBlur:h,onFocus:b,onMousedown:w}}}),$o=["role","aria-labelledby"];var Do=p(Mo,[["render",function(e,o,n,t,l,a){return s(),i("ul",{ref:e.dropdownListWrapperRef,class:d(e.dropdownKls),style:F(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...o)=>e.onBlur&&e.onBlur(...o)),onFocus:o[1]||(o[1]=(...o)=>e.onFocus&&e.onFocus(...o)),onKeydown:o[2]||(o[2]=Y(((...o)=>e.handleKeydown&&e.handleKeydown(...o)),["self"])),onMousedown:o[3]||(o[3]=Y(((...o)=>e.onMousedown&&e.onMousedown(...o)),["self"]))},[u(e.$slots,"default")],46,$o)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const Ko=_(So,{DropdownItem:jo,DropdownMenu:Do}),Lo=E(jo),Oo=E(Do),Po={key:0,class:"quick-title"},Ao=["onClick"],Go={class:"dialog-footer"},zo={name:"CommandMenu"},Ho=Object.assign(zo,{setup(e,{expose:o}){const n=Q(),t=Q(),a=X(),r=ee(),u=l(!1),d=l(""),c=oe([]),p=e=>{const o=[];return e.forEach((e=>{e.children&&e.children.length>0?o.push(...p(e.children)):e.meta.title&&e.meta.title.indexOf(d.value)>-1&&o.push({label:e.meta.title,func:()=>v(e)})})),o},m=()=>{const e={label:"跳转",children:[]},o=p(r.asyncRouters[0].children);e.children.push(...o),c.push(e)},f=()=>{const e={label:"操作",children:[]},o=[{label:"亮色主题",func:()=>w("light")},{label:"暗色主题",func:()=>w("dark")},{label:"退出登录",func:()=>a.LoginOut()}];e.children.push(...o.filter((e=>e.label.indexOf(d.value)>-1))),c.push(e)};m(),f();const v=e=>{var o,l;const a=e.name,s={},i={};(null==(o=r.routeMap[a])?void 0:o.parameters)&&(null==(l=r.routeMap[a])||l.parameters.forEach((e=>{"query"===e.type?s[e.key]=e.value:i[e.key]=e.value}))),a!==t.name&&(e.name.indexOf("http://")>-1||e.name.indexOf("https://")>-1?window.open(e.name):n.push({name:a,query:s,params:i}),u.value=!1)},w=e=>{null!==e?a.changeSideMode(e):a.changeSideMode("dark")},y=()=>{u.value=!1};return o({open:()=>{u.value=!0}}),B(d,(()=>{c.length=0,m(),f()})),(e,o)=>{const n=P,t=_e;return s(),h(t,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=e=>u.value=e),width:"30%",class:"overlay","show-close":!1},{header:b((()=>[ne(g("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>d.value=e),class:"quick-input",placeholder:"请输入你需要快捷到达的功能"},null,512),[[te,d.value]])])),footer:b((()=>[g("span",Go,[$(n,{onClick:y},{default:b((()=>[le("关闭")])),_:1})])])),default:b((()=>[(s(!0),i(J,null,ae(c,((e,o)=>(s(),i("div",{key:o},[e.children.length?(s(),i("div",Po,k(e.label),1)):U("",!0),(s(!0),i(J,null,ae(e.children,((e,n)=>(s(),i("div",{key:o+"-"+n,class:"quick-item",onClick:e.func},k(e.label),9,Ao)))),128))])))),128))])),_:1},8,["modelValue"])}}}),No={key:0,class:"gvaIcon gvaIcon-arrow-double-right"},Vo={key:1,class:"gvaIcon gvaIcon-arrow-double-left"},qo={class:"right-box"},Uo={class:"dp-flex justify-content-center align-items height-full width-full"},Wo={class:"header-avatar",style:{cursor:"pointer"}},Yo={style:{"font-weight":"600"}},Jo=g("div",null,"指令菜单",-1),Zo={style:{"margin-left":"8px"}},Qo={class:"button"},Xo=g("span",{class:"button"},"K",-1),en={name:"Layout"},on=Object.assign(en,{setup(e){const o=Q(),n=re(),t=ee(),a=l(!1),u=l(!0),p=l(!1),m=l("");l(!1);const f=()=>{"WIN"===window.localStorage.getItem("osType")?m.value="Ctrl":m.value="⌘";window.addEventListener("keydown",(e=>{e.ctrlKey&&"k"===e.key&&(e.preventDefault(),I())}));const e=document.body.clientWidth;e<1e3?(p.value=!0,u.value=!1,a.value=!0):e>=1e3&&e<1200?(p.value=!1,u.value=!1,a.value=!0):(p.value=!1,u.value=!0,a.value=!1)};f();const v=l(),I=()=>{v.value.open()},_=l(!1);r((()=>{se.emit("collapse",a.value),se.emit("mobile",p.value),se.on("reload",j),se.on("showLoading",(()=>{_.value=!0})),se.on("closeLoading",(()=>{_.value=!1})),window.onresize=()=>(f(),se.emit("collapse",a.value),void se.emit("mobile",p.value)),E.loadingInstance&&E.loadingInstance.close()}));const E=X(),x=C((()=>"dark"===E.sideMode?"#fff":"light"===E.sideMode?"#191a23":E.baseColor)),S=C((()=>"dark"===E.sideMode?"#191a23":"light"===E.sideMode?"#fff":E.sideMode)),R=C((()=>n.meta.matched)),T=l(!0);let B=null;const j=async()=>{B&&window.clearTimeout(B),B=window.setTimeout((async()=>{if(n.meta.keepAlive)T.value=!1,await O(),T.value=!0;else{const e=n.meta.title;o.push({name:"Reload",params:{title:e}})}}),400)},D=l(!1),K=()=>{a.value=!a.value,u.value=!a.value,D.value=!a.value,se.emit("collapse",a.value)},L=()=>{o.push({name:"person"})};return(e,o)=>{const l=ve,r=ro,f=ge,C=We,B=Ue,j=M("arrow-down"),O=y,P=Lo,A=Oo,G=Ko,z=so,H=M("router-view"),N=io,V=ao,q=me;return s(),h(V,{class:"layout-cont"},{default:b((()=>[$(V,{class:d([u.value?"openside":"hideside",p.value?"mobile":""])},{default:b((()=>[$(l,{class:d([D.value?"shadowBg":""]),onClick:o[0]||(o[0]=e=>(D.value=!D.value,u.value=!!a.value,void K()))},null,8,["class"]),$(r,{class:"main-cont main-left gva-aside"},{default:b((()=>[g("div",{class:"tilte",style:F({background:S.value})},[u.value?(s(),i("div",{key:0,class:"tit-text",style:F({color:x.value})},"无鱼原型管理",4)):U("",!0)],4),$(he,{class:"aside"})])),_:1}),$(N,{class:"main-cont main-right"},{default:b((()=>[$(ie,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:b((()=>[g("div",{style:F({width:"calc(100% - ".concat(p.value?"0px":a.value?"54px":"220px",")")}),class:"topfix"},[$(l,null,{default:b((()=>[$(f,null,{default:b((()=>[$(z,{class:"header-cont"},{default:b((()=>[$(l,{class:"pd-0"},{default:b((()=>[$(f,{xs:2,lg:1,md:1,sm:1,xl:1,style:{"z-index":"100"}},{default:b((()=>[g("div",{class:"menu-total",onClick:K},[a.value?(s(),i("div",No)):(s(),i("div",Vo))])])),_:1}),$(f,{xs:10,lg:14,md:14,sm:9,xl:14,pull:1},{default:b((()=>[ne($(B,{class:"breadcrumb"},{default:b((()=>[(s(!0),i(J,null,ae(R.value.slice(1,R.value.length),(e=>(s(),h(C,{key:e.path},{default:b((()=>[le(k(c(ue)(e.meta.title,c(n))),1)])),_:2},1024)))),128))])),_:1},512),[[de,!p.value]])])),_:1}),$(f,{xs:12,lg:9,md:9,sm:14,xl:9},{default:b((()=>[g("div",qo,[$(we),$(G,null,{dropdown:b((()=>[$(A,{class:"dropdown-group"},{default:b((()=>[$(P,null,{default:b((()=>[g("span",Yo," 当前角色："+k(c(E).userInfo.authority.authorityName),1)])),_:1}),c(E).userInfo.authorities?(s(!0),i(J,{key:0},ae(c(E).userInfo.authorities.filter((e=>e.authorityId!==c(E).userInfo.authorityId)),(e=>(s(),h(P,{key:e.authorityId,onClick:o=>(async e=>{0===(await pe({authorityId:e})).code&&(window.sessionStorage.setItem("needCloseAll","true"),window.location.reload())})(e.authorityId)},{default:b((()=>[g("span",null," 切换为："+k(e.authorityName),1)])),_:2},1032,["onClick"])))),128)):U("",!0),$(P,{icon:"avatar"},{default:b((()=>[g("div",{class:"command-box",style:{display:"flex"},onClick:I},[Jo,g("div",Zo,[g("span",Qo,k(m.value),1),le(" + "),Xo])])])),_:1}),$(P,{icon:"avatar",onClick:L},{default:b((()=>[le("个人信息")])),_:1}),$(P,{icon:"reading-lamp",onClick:c(E).LoginOut},{default:b((()=>[le("登 出")])),_:1},8,["onClick"])])),_:1})])),default:b((()=>[g("div",Uo,[g("span",Wo,[$(ke),ne(g("span",{style:{"margin-left":"5px"}},k(c(E).userInfo.nickName),513),[[de,!p.value]]),$(O,null,{default:b((()=>[$(j)])),_:1})])])])),_:1})])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),$(be,{ref:"layoutHistoryComponent"},null,512)],4)])),_:1}),T.value?ne((s(),h(H,{key:0,"element-loading-text":"正在加载中",class:"admin-box"},{default:b((({Component:e})=>[g("div",null,[$(ie,{mode:"out-in",name:"el-fade-in-linear"},{default:b((()=>[(s(),h(ce,{include:c(t).keepAliveRouters},[(s(),h(w(e)))],1032,["include"]))])),_:2},1024)])])),_:1})),[[q,_.value]]):U("",!0),$(ye),$(Ee),$(Ho,{ref_key:"command",ref:v},null,512)])),_:1})])),_:1},8,["class"])])),_:1})}}});export{on as default};
