/*! 
 Build based on gin-vue-admin 
 Time : 1689257244000 */
!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function t(t){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?e(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./index-legacy-19cb2f04.js","./index-legacy-625aef3d.js","./dropdown-legacy-57553495.js"],(function(e,o){"use strict";var n,p,i,l,a,c,s,u,f,d,v,b,g,y,h,m,w,x,O,j,S,P,_,k,z;return{setters:[function(e){n=e.d,p=e.u,i=e.E},function(e){l=e.B,a=e.b7,c=e.x,s=e.D,u=e.y,f=e.r,d=e.A,v=e.F,b=e.o,g=e.h,y=e.w,h=e.c,m=e.n,w=e.t,x=e.e,O=e.G,j=e.g,S=e.aj,P=e._,_=e.cc,k=e.I},function(e){z=e.d}],execute:function(){var o=document.createElement("style");o.textContent=".el-popover{--el-popover-bg-color: var(--el-bg-color-overlay);--el-popover-font-size: var(--el-font-size-base);--el-popover-border-color: var(--el-border-color-lighter);--el-popover-padding: 12px;--el-popover-padding-large: 18px 20px;--el-popover-title-font-size: 16px;--el-popover-title-text-color: var(--el-text-color-primary);--el-popover-border-radius: 4px}.el-popover.el-popper{background:var(--el-popover-bg-color);min-width:150px;border-radius:var(--el-popover-border-radius);border:1px solid var(--el-popover-border-color);padding:var(--el-popover-padding);z-index:var(--el-index-popper);color:var(--el-text-color-regular);line-height:1.4;text-align:justify;font-size:var(--el-popover-font-size);box-shadow:var(--el-box-shadow-light);word-break:break-all;box-sizing:border-box}.el-popover.el-popper--plain{padding:var(--el-popover-padding-large)}.el-popover__title{color:var(--el-popover-title-text-color);font-size:var(--el-popover-title-font-size);line-height:1;margin-bottom:12px}.el-popover__reference:focus:not(.focusing),.el-popover__reference:focus:hover{outline-width:0}.el-popover.el-popper.is-dark{--el-popover-bg-color: var(--el-text-color-primary);--el-popover-border-color: var(--el-text-color-primary);--el-popover-title-text-color: var(--el-bg-color);color:var(--el-bg-color)}.el-popover.el-popper:focus:active,.el-popover.el-popper:focus{outline-width:0}\n",document.head.appendChild(o);var A=l({trigger:n.trigger,placement:z.placement,disabled:n.disabled,visible:p.visible,transition:p.transition,popperOptions:z.popperOptions,tabindex:z.tabindex,content:p.content,popperStyle:p.popperStyle,popperClass:p.popperClass,enterable:t(t({},p.enterable),{},{default:!0}),effect:t(t({},p.effect),{},{default:"light"}),teleported:p.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),C={"update:visible":function(e){return a(e)},"before-enter":function(){return!0},"before-leave":function(){return!0},"after-enter":function(){return!0},"after-leave":function(){return!0}},E=c({name:"ElPopover"}),N=c(t(t({},E),{},{props:A,emits:C,setup:function(e,t){var o=t.expose,n=t.emit,p=e,l=s((function(){return p["onUpdate:visible"]})),a=u("popover"),c=f(),P=s((function(){var e;return null==(e=d(c))?void 0:e.popperRef})),_=s((function(){return[{width:v(p.width)},p.popperStyle]})),k=s((function(){return[a.b(),p.popperClass,r({},a.m("plain"),!!p.content)]})),z=s((function(){return p.transition==="".concat(a.namespace.value,"-fade-in-linear")})),A=function(){n("before-enter")},C=function(){n("before-leave")},E=function(){n("after-enter")},N=function(){n("update:visible",!1),n("after-leave")};return o({popperRef:P,hide:function(){var e;null==(e=c.value)||e.hide()}}),function(e,t){return b(),g(d(i),S({ref_key:"tooltipRef",ref:c},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":d(k),"popper-style":d(_),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":d(z),"onUpdate:visible":d(l),onBeforeShow:A,onBeforeHide:C,onShow:E,onHide:N}),{content:y((function(){return[e.title?(b(),h("div",{key:0,class:m(d(a).e("title")),role:"title"},w(e.title),3)):x("v-if",!0),O(e.$slots,"default",{},(function(){return[j(w(e.content),1)]}))]})),default:y((function(){return[e.$slots.reference?O(e.$slots,"reference",{key:0}):x("v-if",!0)]})),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"])}}})),B=P(N,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]),D=function(e,t){var r=t.arg||t.value,o=null==r?void 0:r.popperRef;o&&(o.triggerRef=e)},R=_({mounted:function(e,t){D(e,t)},updated:function(e,t){D(e,t)}},"popover");e("E",k(B,{directive:R}))}}}))}();
