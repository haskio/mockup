/*! 
 Build based on gin-vue-admin 
 Time : 1691228829000 */
import{d as e,u as t,E as o}from"./index-586999c8.js";import{B as r,b7 as a,x as s,D as p,y as i,r as n,A as l,F as d,o as f,h as c,w as u,c as b,n as v,t as m,e as h,G as g,g as w,aj as y,_ as x,cc as A,I as S}from"./index-705282a4.js";import{d as k}from"./dropdown-d2c71e78.js";const B=r({trigger:e.trigger,placement:k.placement,disabled:e.disabled,visible:t.visible,transition:t.transition,popperOptions:k.popperOptions,tabindex:k.tabindex,content:t.content,popperStyle:t.popperStyle,popperClass:t.popperClass,enterable:{...t.enterable,default:!0},effect:{...t.effect,default:"light"},teleported:t.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),C={"update:visible":e=>a(e),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},N=s({name:"ElPopover"}),R=s({...N,props:B,emits:C,setup(e,{expose:t,emit:r}){const a=e,s=p((()=>a["onUpdate:visible"])),x=i("popover"),A=n(),S=p((()=>{var e;return null==(e=l(A))?void 0:e.popperRef})),k=p((()=>[{width:d(a.width)},a.popperStyle])),B=p((()=>[x.b(),a.popperClass,{[x.m("plain")]:!!a.content}])),C=p((()=>a.transition==="".concat(x.namespace.value,"-fade-in-linear"))),N=()=>{r("before-enter")},R=()=>{r("before-leave")},_=()=>{r("after-enter")},j=()=>{r("update:visible",!1),r("after-leave")};return t({popperRef:S,hide:()=>{var e;null==(e=A.value)||e.hide()}}),(e,t)=>(f(),c(l(o),y({ref_key:"tooltipRef",ref:A},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":l(B),"popper-style":l(k),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":l(C),"onUpdate:visible":l(s),onBeforeShow:N,onBeforeHide:R,onShow:_,onHide:j}),{content:u((()=>[e.title?(f(),b("div",{key:0,class:v(l(x).e("title")),role:"title"},m(e.title),3)):h("v-if",!0),g(e.$slots,"default",{},(()=>[w(m(e.content),1)]))])),default:u((()=>[e.$slots.reference?g(e.$slots,"reference",{key:0}):h("v-if",!0)])),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});const _=(e,t)=>{const o=t.arg||t.value,r=null==o?void 0:o.popperRef;r&&(r.triggerRef=e)};const j=S(x(R,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]),{directive:A({mounted(e,t){_(e,t)},updated(e,t){_(e,t)}},"popover")});export{j as E};
