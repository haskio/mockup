/*! 
 Build based on gin-vue-admin 
 Time : 1692158479000 */
import{a8 as e,as as t,_ as n,x as o,y as a,o as l,h as s,w as u,G as r,ai as i,X as c,at as p,au as d,av as v,D as m,aw as h,B as f,a1 as b,ax as x,a4 as M,ay as g,r as y,ae as I,az as k,a as C,T as S,a2 as E,P as w,af as T,aA as P,aB as A,N as O,V as B,W as z,J as N,a5 as j,aC as $,a3 as _,aD as L,aE as W,aF as q,aG as D,aH as G,aI as R,aJ as F,Q as V,aa as H,U as J,c as U,b as Q,n as X,g as Z,t as K,I as Y,a6 as ee}from"./index-1ff099df.js";import{_ as te}from"./index-39ef735f.js";import{E as ne}from"./index-28f59547.js";var oe=n(o({name:"ElMenuCollapseTransition",setup(){const e=a("menu");return{listeners:{onBeforeEnter:e=>e.style.opacity="0.2",onEnter(t,n){p(t,"".concat(e.namespace.value,"-opacity-transition")),t.style.opacity="1",n()},onAfterEnter(t){d(t,"".concat(e.namespace.value,"-opacity-transition")),t.style.opacity=""},onBeforeLeave(t){t.dataset||(t.dataset={}),v(t,e.m("collapse"))?(d(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),p(t,e.m("collapse"))):(p(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),d(t,e.m("collapse"))),t.style.width="".concat(t.scrollWidth,"px"),t.style.overflow="hidden"},onLeave(e){p(e,"horizontal-collapse-transition"),e.style.width="".concat(e.dataset.scrollWidth,"px")}}}}}),[["render",function(e,t,n,o,a,p){return l(),s(c,i({mode:"out-in"},e.listeners),{default:u((()=>[r(e.$slots,"default")])),_:3},16)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function ae(e,t){const n=m((()=>{let n=e.parent;const o=[t.value];for(;"ElMenu"!==n.type.name;)n.props.index&&o.unshift(n.props.index),n=n.parent;return o}));return{parentMenu:m((()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t})),indexPath:n}}function le(e){return m((()=>{const t=e.backgroundColor;return t?new h(t).shade(20).toString():""}))}const se=(e,t)=>{const n=a("menu");return m((()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":le(e).value||"","active-color":e.activeTextColor||"",level:"".concat(t)})))},ue=f({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},teleported:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:b},expandOpenIcon:{type:b},collapseCloseIcon:{type:b},collapseOpenIcon:{type:b}}),re="ElSubMenu";var ie=o({name:re,props:ue,setup(e,{slots:t,expose:n}){x({from:"popper-append-to-body",replacement:"teleported",scope:re,version:"2.3.0",ref:"https://element-plus.org/en-US/component/menu.html#submenu-attributes"},m((()=>void 0!==e.popperAppendToBody)));const o=j(),{indexPath:l,parentMenu:s}=ae(o,m((()=>e.index))),u=a("menu"),r=a("sub-menu"),i=M("rootMenu");i||g(re,"can not inject root menu");const c=M("subMenu:".concat(s.value.uid));c||g(re,"can not inject sub menu");const p=y({}),d=y({});let v;const h=y(!1),f=y(),b=y(null),_=m((()=>"horizontal"===U.value&&W.value?"bottom-start":"right-start")),L=m((()=>"horizontal"===U.value&&W.value||"vertical"===U.value&&!i.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?R.value?e.expandOpenIcon:e.expandCloseIcon:I:e.collapseCloseIcon&&e.collapseOpenIcon?R.value?e.collapseOpenIcon:e.collapseCloseIcon:k)),W=m((()=>0===c.level)),q=m((()=>{var t;const n=null!=(t=e.teleported)?t:e.popperAppendToBody;return void 0===n?W.value:n})),D=m((()=>i.props.collapse?"".concat(u.namespace.value,"-zoom-in-left"):"".concat(u.namespace.value,"-zoom-in-top"))),G=m((()=>"horizontal"===U.value&&W.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"])),R=m((()=>i.openedMenus.includes(e.index))),F=m((()=>{let e=!1;return Object.values(p.value).forEach((t=>{t.active&&(e=!0)})),Object.values(d.value).forEach((t=>{t.active&&(e=!0)})),e})),V=m((()=>i.props.backgroundColor||"")),H=m((()=>i.props.activeTextColor||"")),J=m((()=>i.props.textColor||"")),U=m((()=>i.props.mode)),Q=C({index:e.index,indexPath:l,active:F}),X=se(i.props,c.level+1),Z=m((()=>"horizontal"!==U.value?{color:J.value}:{borderBottomColor:F.value?i.props.activeTextColor?H.value:"":"transparent",color:F.value?H.value:J.value})),K=e=>{var t,n,o;e||null==(o=null==(n=null==(t=b.value)?void 0:t.popperRef)?void 0:n.popperInstanceRef)||o.destroy()},Y=()=>{"hover"===i.props.menuTrigger&&"horizontal"===i.props.mode||i.props.collapse&&"vertical"===i.props.mode||e.disabled||i.handleSubMenuClick({index:e.index,indexPath:l.value,active:F.value})},ee=(t,n=e.showTimeout)=>{var o;"focus"!==t.type&&("click"===i.props.menuTrigger&&"horizontal"===i.props.mode||!i.props.collapse&&"vertical"===i.props.mode||e.disabled||(c.mouseInChild.value=!0,null==v||v(),({stop:v}=$((()=>{i.openMenu(e.index,l.value)}),n)),q.value&&(null==(o=s.value.vnode.el)||o.dispatchEvent(new MouseEvent("mouseenter")))))},oe=(t=!1)=>{var n,a;"click"===i.props.menuTrigger&&"horizontal"===i.props.mode||!i.props.collapse&&"vertical"===i.props.mode||(null==v||v(),c.mouseInChild.value=!1,({stop:v}=$((()=>!h.value&&i.closeMenu(e.index,l.value)),e.hideTimeout)),q.value&&t&&"ElSubMenu"===(null==(n=o.parent)?void 0:n.type.name)&&(null==(a=c.handleMouseleave)||a.call(c,!0)))};S((()=>i.props.collapse),(e=>K(Boolean(e))));{const e=e=>{d.value[e.index]=e},t=e=>{delete d.value[e.index]};E("subMenu:".concat(o.uid),{addSubMenu:e,removeSubMenu:t,handleMouseleave:oe,mouseInChild:h,level:c.level+1})}return n({opened:R}),w((()=>{i.addSubMenu(Q),c.addSubMenu(Q)})),T((()=>{c.removeSubMenu(Q),i.removeSubMenu(Q)})),()=>{var n;const a=[null==(n=t.title)?void 0:n.call(t),P(O,{class:r.e("icon-arrow"),style:{transform:R.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&i.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>A(L.value)?P(o.appContext.components[L.value]):P(L.value)})],l=i.isMenuPopup?P(ne,{ref:b,visible:R.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:_.value,teleported:q.value,fallbackPlacements:G.value,transition:D.value,gpuAcceleration:!1},{content:()=>{var n;return P("div",{class:[u.m(U.value),u.m("popup-container"),e.popperClass],onMouseenter:e=>ee(e,100),onMouseleave:()=>oe(!0),onFocus:e=>ee(e,100)},[P("ul",{class:[u.b(),u.m("popup"),u.m("popup-".concat(_.value))],style:X.value},[null==(n=t.default)?void 0:n.call(t)])])},default:()=>P("div",{class:r.e("title"),style:[Z.value,{backgroundColor:V.value}],onClick:Y},a)}):P(N,{},[P("div",{class:r.e("title"),style:[Z.value,{backgroundColor:V.value}],ref:f,onClick:Y},a),P(te,{},{default:()=>{var e;return B(P("ul",{role:"menu",class:[u.b(),u.m("inline")],style:X.value},[null==(e=t.default)?void 0:e.call(t)]),[[z,R.value]])}})]);return P("li",{class:[r.b(),r.is("active",F.value),r.is("opened",R.value),r.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:R.value,onMouseenter:ee,onMouseleave:()=>oe(!0),onFocus:ee},[l])}}});const ce=f({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:_(Array),default:()=>L([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperEffect:{type:String,values:["dark","light"],default:"dark"}}),pe=e=>Array.isArray(e)&&e.every((e=>A(e)));var de=o({name:"ElMenu",props:ce,emits:{close:(e,t)=>A(e)&&pe(t),open:(e,t)=>A(e)&&pe(t),select:(e,t,n,o)=>A(e)&&pe(t)&&R(n)&&(void 0===o||o instanceof Promise)},setup(n,{emit:o,slots:l,expose:s}){const u=j(),r=u.appContext.config.globalProperties.$router,i=y(),c=a("menu"),p=a("sub-menu"),d=y(-1),v=y(n.defaultOpeneds&&!n.collapse?n.defaultOpeneds.slice(0):[]),h=y(n.defaultActive),f=y({}),b=y({}),x=m((()=>"horizontal"===n.mode||"vertical"===n.mode&&n.collapse)),M=(e,t)=>{v.value.includes(e)||(n.uniqueOpened&&(v.value=v.value.filter((e=>t.includes(e)))),v.value.push(e),o("open",e,t))},g=e=>{const t=v.value.indexOf(e);-1!==t&&v.value.splice(t,1)},I=(e,t)=>{g(e),o("close",e,t)},k=({index:e,indexPath:t})=>{v.value.includes(e)?I(e,t):M(e,t)},T=e=>{("horizontal"===n.mode||n.collapse)&&(v.value=[]);const{index:t,indexPath:a}=e;if(!F(t)&&!F(a))if(n.router&&r){const n=e.route||t,l=r.push(n).then((e=>(e||(h.value=t),e)));o("select",t,a,{index:t,indexPath:a,route:n},l)}else h.value=t,o("select",t,a,{index:t,indexPath:a})};let A=!0;const B=()=>{const e=()=>{d.value=-1,V((()=>{d.value=(()=>{var e,t;if(!i.value)return-1;const n=Array.from(null!=(t=null==(e=i.value)?void 0:e.childNodes)?t:[]).filter((e=>"#comment"!==e.nodeName&&("#text"!==e.nodeName||e.nodeValue))),o=Number.parseInt(getComputedStyle(i.value).paddingLeft,10),a=Number.parseInt(getComputedStyle(i.value).paddingRight,10),l=i.value.clientWidth-o-a;let s=0,u=0;return n.forEach(((e,t)=>{s+=e.offsetWidth||0,s<=l-64&&(u=t+1)})),u===n.length?-1:u})()}))};A?e():((e,t=33.34)=>{let n;return()=>{n&&clearTimeout(n),n=setTimeout((()=>{e()}),t)}})(e)(),A=!1};let z;S((()=>n.defaultActive),(e=>{f.value[e]||(h.value=""),(e=>{const t=f.value,o=t[e]||h.value&&t[h.value]||t[n.defaultActive];h.value=o?o.index:e})(e)})),S((()=>n.collapse),(e=>{e&&(v.value=[])})),S(f.value,(()=>{const e=h.value&&f.value[h.value];if(!e||"horizontal"===n.mode||n.collapse)return;e.indexPath.forEach((e=>{const t=b.value[e];t&&M(e,t.indexPath)}))})),W((()=>{"horizontal"===n.mode&&n.ellipsis?z=q(i,B).stop:null==z||z()}));{const e=e=>{b.value[e.index]=e},t=e=>{delete b.value[e.index]},o=e=>{f.value[e.index]=e},a=e=>{delete f.value[e.index]};E("rootMenu",C({props:n,openedMenus:v,items:f,subMenus:b,activeIndex:h,isMenuPopup:x,addMenuItem:o,removeMenuItem:a,addSubMenu:e,removeSubMenu:t,openMenu:M,closeMenu:I,handleMenuItemClick:T,handleSubMenuClick:k})),E("subMenu:".concat(u.uid),{addSubMenu:e,removeSubMenu:t,mouseInChild:y(!1),level:0})}w((()=>{"horizontal"===n.mode&&new class{constructor(e,t){this.domNode=e,this.init(t)}init(n){const o=this.domNode.childNodes;Array.from(o).forEach((o=>{1===o.nodeType&&new class{constructor(e,t){this.domNode=e,this.submenu=null,this.submenu=null,this.init(t)}init(n){this.domNode.setAttribute("tabindex","0");const o=this.domNode.querySelector(".".concat(n,"-menu"));o&&(this.submenu=new class{constructor(e,t){this.parent=e,this.domNode=t,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(e){e===this.subMenuItems.length?e=0:e<0&&(e=this.subMenuItems.length-1),this.subMenuItems[e].focus(),this.subIndex=e}addListeners(){const n=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,(o=>{o.addEventListener("keydown",(o=>{let a=!1;switch(o.code){case e.down:this.gotoSubIndex(this.subIndex+1),a=!0;break;case e.up:this.gotoSubIndex(this.subIndex-1),a=!0;break;case e.tab:t(n,"mouseleave");break;case e.enter:case e.space:a=!0,o.currentTarget.click()}return a&&(o.preventDefault(),o.stopPropagation()),!1}))}))}}(this,o)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",(n=>{let o=!1;switch(n.code){case e.down:t(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),o=!0;break;case e.up:t(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),o=!0;break;case e.tab:t(n.currentTarget,"mouseleave");break;case e.enter:case e.space:o=!0,n.currentTarget.click()}o&&n.preventDefault()}))}}(o,n)}))}}(u.vnode.el,c.namespace.value)}));s({open:e=>{const{indexPath:t}=b.value[e];t.forEach((e=>M(e,t)))},close:g,handleResize:B});return()=>{var e,t;let o=null!=(t=null==(e=l.default)?void 0:e.call(l))?t:[];const a=[];if("horizontal"===n.mode&&i.value){const e=D(o),t=-1===d.value?e:e.slice(0,d.value),l=-1===d.value?[]:e.slice(d.value);(null==l?void 0:l.length)&&n.ellipsis&&(o=t,a.push(P(ie,{index:"sub-menu-more",class:p.e("hide-arrow")},{title:()=>P(O,{class:p.e("icon-more")},{default:()=>P(G)}),default:()=>l})))}const s=se(n,0),u=P("ul",{key:String(n.collapse),role:"menubar",ref:i,style:s.value,class:{[c.b()]:!0,[c.m(n.mode)]:!0,[c.m("collapse")]:n.collapse}},[...o,...a]);return n.collapseTransition&&"vertical"===n.mode?P(oe,(()=>u)):u}}});const ve=f({index:{type:_([String,null]),default:null},route:{type:_([String,Object])},disabled:Boolean}),me="ElMenuItem";var he=n(o({name:me,components:{ElTooltip:ne},props:ve,emits:{click:e=>A(e.index)&&Array.isArray(e.indexPath)},setup(e,{emit:t}){const n=j(),o=M("rootMenu"),l=a("menu"),s=a("menu-item");o||g(me,"can not inject root menu");const{parentMenu:u,indexPath:r}=ae(n,H(e,"index")),i=M("subMenu:".concat(u.value.uid));i||g(me,"can not inject sub menu");const c=m((()=>e.index===o.activeIndex)),p=C({index:e.index,indexPath:r,active:c});return w((()=>{i.addSubMenu(p),o.addMenuItem(p)})),T((()=>{i.removeSubMenu(p),o.removeMenuItem(p)})),{parentMenu:u,rootMenu:o,active:c,nsMenu:l,nsMenuItem:s,handleClick:()=>{e.disabled||(o.handleMenuItemClick({index:e.index,indexPath:r.value,route:e.route}),t("click",p))}}}}),[["render",function(e,t,n,o,a,i){const c=J("el-tooltip");return l(),U("li",{class:X([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:t[0]||(t[0]=(...t)=>e.handleClick&&e.handleClick(...t))},["ElMenu"===e.parentMenu.type.name&&e.rootMenu.props.collapse&&e.$slots.title?(l(),s(c,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:u((()=>[r(e.$slots,"title")])),default:u((()=>[Q("div",{class:X(e.nsMenu.be("tooltip","trigger"))},[r(e.$slots,"default")],2)])),_:3},8,["effect"])):(l(),U(N,{key:1},[r(e.$slots,"default"),r(e.$slots,"title")],64))],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);var fe=n(o({name:"ElMenuItemGroup",props:{title:String},setup:()=>({ns:a("menu-item-group")})}),[["render",function(e,t,n,o,a,s){return l(),U("li",{class:X(e.ns.b())},[Q("div",{class:X(e.ns.e("title"))},[e.$slots.title?r(e.$slots,"title",{key:1}):(l(),U(N,{key:0},[Z(K(e.title),1)],64))],2),Q("ul",null,[r(e.$slots,"default")])],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const be=Y(de,{MenuItem:he,MenuItemGroup:fe,SubMenu:ie}),xe=ee(he);ee(fe);const Me=ee(ie);export{be as E,Me as a,xe as b};
