/*! 
 Build based on gin-vue-admin 
 Time : 1689257244000 */
import{B as e,a1 as o,a3 as l,bp as a,b7 as t,bH as n,z as s,r as u,ck as c,cl as d,D as r,F as p,cm as f,T as i,Q as y,P as v,a6 as m,aD as C,bh as b}from"./index-c2e3c879.js";const B=e({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:o},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),g={close:()=>!0},D=e({...B,appendToBody:{type:Boolean,default:!1},beforeClose:{type:l(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),F={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[a]:e=>t(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},x=(e,o)=>{const l=m().emit,{nextZIndex:t}=n();let B="";const g=s(),D=s(),F=u(!1),x=u(!1),I=u(!1),S=u(e.zIndex||t());let h,O;const k=c("namespace",d),A=r((()=>{const o={},l=`--${k.value}-dialog`;return e.fullscreen||(e.top&&(o[`${l}-margin-top`]=e.top),e.width&&(o[`${l}-width`]=p(e.width))),o})),w=r((()=>e.alignCenter?{display:"flex"}:{}));function z(){null==O||O(),null==h||h(),e.openDelay&&e.openDelay>0?({stop:h}=C((()=>E()),e.openDelay)):E()}function N(){null==h||h(),null==O||O(),e.closeDelay&&e.closeDelay>0?({stop:O}=C((()=>M()),e.closeDelay)):M()}function P(){e.beforeClose?e.beforeClose((function(e){e||(x.value=!0,F.value=!1)})):N()}function E(){b&&(F.value=!0)}function M(){F.value=!1}return e.lockScroll&&f(F),i((()=>e.modelValue),(a=>{a?(x.value=!1,z(),I.value=!0,S.value=e.zIndex?S.value++:t(),y((()=>{l("open"),o.value&&(o.value.scrollTop=0)}))):F.value&&N()})),i((()=>e.fullscreen),(e=>{o.value&&(e?(B=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=B)})),v((()=>{e.modelValue&&(F.value=!0,I.value=!0,z())})),{afterEnter:function(){l("opened")},afterLeave:function(){l("closed"),l(a,!1),e.destroyOnClose&&(I.value=!1)},beforeLeave:function(){l("close")},handleClose:P,onModalClick:function(){e.closeOnClickModal&&P()},close:N,doClose:M,onOpenAutoFocus:function(){l("openAutoFocus")},onCloseAutoFocus:function(){l("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&P()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:g,bodyId:D,closed:x,style:A,overlayDialogStyle:w,rendered:I,visible:F,zIndex:S}};export{g as a,D as b,F as c,B as d,x as u};
