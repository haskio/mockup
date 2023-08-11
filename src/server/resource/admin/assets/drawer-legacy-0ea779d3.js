/*! 
 Build based on gin-vue-admin 
 Time : 1691202957000 */
!function(){function e(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function r(r){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?e(Object(l),!0).forEach((function(e){t(r,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(l)):e(Object(l)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(l,e))}))}return r}function t(e,r,t){return(r=function(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,r||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}System.register(["./index-legacy-a3f09ada.js","./overlay-legacy-8fea5f1f.js"],(function(e,t){"use strict";var a,l,o,n,i,d,s,f,c,u,b,p,w,v,m,y,g,h,_,x,k,O,C,j,S,z,E,P,R,I,D,L,$,A;return{setters:[function(e){a=e.B,l=e._,o=e.x,n=e.ci,i=e.bI,d=e.N,s=e.bL,f=e.ay,c=e.D,u=e.r,b=e.y,p=e.C,w=e.F,v=e.U,m=e.o,y=e.h,g=e.d,h=e.w,_=e.V,x=e.b,k=e.aj,O=e.al,C=e.n,j=e.c,S=e.G,z=e.t,E=e.e,P=e.W,R=e.X,I=e.bJ,D=e.I},function(e){L=e.b,$=e.c,A=e.u}],execute:function(){var t=document.createElement("style");t.textContent=".el-drawer{--el-drawer-bg-color: var(--el-dialog-bg-color, var(--el-bg-color));--el-drawer-padding-primary: var(--el-dialog-padding-primary, 20px)}.el-drawer{position:absolute;box-sizing:border-box;background-color:var(--el-drawer-bg-color);display:flex;flex-direction:column;box-shadow:var(--el-box-shadow-dark);overflow:hidden;transition:all var(--el-transition-duration)}.el-drawer .rtl,.el-drawer .ltr,.el-drawer .ttb,.el-drawer .btt{transform:translate(0)}.el-drawer__sr-focus:focus{outline:none!important}.el-drawer__header{align-items:center;color:#72767b;display:flex;margin-bottom:32px;padding:var(--el-drawer-padding-primary);padding-bottom:0}.el-drawer__header>:first-child{flex:1}.el-drawer__title{margin:0;flex:1;line-height:inherit;font-size:1rem}.el-drawer__footer{padding:var(--el-drawer-padding-primary);padding-top:10px;text-align:right}.el-drawer__close-btn{display:inline-flex;border:none;cursor:pointer;font-size:var(--el-font-size-extra-large);color:inherit;background-color:transparent;outline:none}.el-drawer__close-btn:focus i,.el-drawer__close-btn:hover i{color:var(--el-color-primary)}.el-drawer__body{flex:1;padding:var(--el-drawer-padding-primary);overflow:auto}.el-drawer__body>*{box-sizing:border-box}.el-drawer.ltr,.el-drawer.rtl{height:100%;top:0;bottom:0}.el-drawer.ttb,.el-drawer.btt{width:100%;left:0;right:0}.el-drawer.ltr{left:0}.el-drawer.rtl{right:0}.el-drawer.ttb{top:0}.el-drawer.btt{bottom:0}.el-drawer-fade-enter-active,.el-drawer-fade-leave-active{transition:all var(--el-transition-duration)}.el-drawer-fade-enter-from,.el-drawer-fade-enter-active,.el-drawer-fade-enter-to,.el-drawer-fade-leave-from,.el-drawer-fade-leave-active,.el-drawer-fade-leave-to{overflow:hidden!important}.el-drawer-fade-enter-from,.el-drawer-fade-leave-to{opacity:0}.el-drawer-fade-enter-to,.el-drawer-fade-leave-from{opacity:1}.el-drawer-fade-enter-from .rtl,.el-drawer-fade-leave-to .rtl{transform:translate(100%)}.el-drawer-fade-enter-from .ltr,.el-drawer-fade-leave-to .ltr{transform:translate(-100%)}.el-drawer-fade-enter-from .ttb,.el-drawer-fade-leave-to .ttb{transform:translateY(-100%)}.el-drawer-fade-enter-from .btt,.el-drawer-fade-leave-to .btt{transform:translateY(100%)}\n",document.head.appendChild(t);var B=a(r(r({},L),{},{direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0}})),T=o({name:"ElDrawer",components:{ElOverlay:n,ElFocusTrap:i,ElIcon:d,Close:s},inheritAttrs:!1,props:B,emits:$,setup:function(e,t){var a=t.slots;f({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},c((function(){return!!a.title}))),f({scope:"el-drawer",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/drawer.html#attributes",type:"Attribute"},c((function(){return!!e.customClass})));var l=u(),o=u(),n=b("drawer"),i=p().t,d=c((function(){return"rtl"===e.direction||"ltr"===e.direction})),s=c((function(){return w(e.size)}));return r(r({},A(e,l)),{},{drawerRef:l,focusStartRef:o,isHorizontal:d,drawerSize:s,ns:n,t:i})}}),H=["aria-label","aria-labelledby","aria-describedby"],q=["id"],F=["aria-label"],N=["id"];var U=l(T,[["render",function(e,r,t,a,l,o){var n=v("close"),i=v("el-icon"),d=v("el-focus-trap"),s=v("el-overlay");return m(),y(I,{to:"body",disabled:!e.appendToBody},[g(R,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:h((function(){return[_(g(s,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:h((function(){return[g(d,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:h((function(){return[x("div",k({ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId},e.$attrs,{class:[e.ns.b(),e.direction,e.visible&&"open",e.customClass],style:e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize,role:"dialog",onClick:r[1]||(r[1]=O((function(){}),["stop"]))}),[x("span",{ref:"focusStartRef",class:C(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(m(),j("header",{key:0,class:C(e.ns.e("header"))},[e.$slots.title?S(e.$slots,"title",{key:1},(function(){return[E(" DEPRECATED SLOT ")]})):S(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},(function(){return[e.$slots.title?E("v-if",!0):(m(),j("span",{key:0,id:e.titleId,role:"heading",class:C(e.ns.e("title"))},z(e.title),11,q))]})),e.showClose?(m(),j("button",{key:2,"aria-label":e.t("el.drawer.close"),class:C(e.ns.e("close-btn")),type:"button",onClick:r[0]||(r[0]=function(){return e.handleClose&&e.handleClose.apply(e,arguments)})},[g(i,{class:C(e.ns.e("close"))},{default:h((function(){return[g(n)]})),_:1},8,["class"])],10,F)):E("v-if",!0)],2)):E("v-if",!0),e.rendered?(m(),j("div",{key:1,id:e.bodyId,class:C(e.ns.e("body"))},[S(e.$slots,"default")],10,N)):E("v-if",!0),e.$slots.footer?(m(),j("div",{key:2,class:C(e.ns.e("footer"))},[S(e.$slots,"footer")],2)):E("v-if",!0)],16,H)]})),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])]})),_:3},8,["mask","overlay-class","z-index","onClick"]),[[P,e.visible]])]})),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]);e("E",D(U))}}}))}();
