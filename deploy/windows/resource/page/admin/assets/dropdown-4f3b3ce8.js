/*! 
 Build based on gin-vue-admin 
 Time : 1689257244000 */
import{_ as e,x as t,G as o,r as l,a2 as n,a4 as a,P as r,A as s,ag as i,B as p,a3 as u,a1 as c,a9 as d}from"./index-c2e3c879.js";import{d as m,u as f}from"./index-85ffef8d.js";var g=e(t({inheritAttrs:!1}),[["render",function(e,t,l,n,a,r){return o(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);var y=e(t({name:"ElCollectionItem",inheritAttrs:!1}),[["render",function(e,t,l,n,a,r){return o(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const C="data-el-collection-item",E=e=>{const t=`El${e}Collection`,o=`${t}Item`,p=Symbol(t),u=Symbol(o),c={...g,name:t,setup(){const e=l(null),t=new Map;n(p,{itemMap:t,getItems:()=>{const o=s(e);if(!o)return[];const l=Array.from(o.querySelectorAll(`[${C}]`));return[...t.values()].sort(((e,t)=>l.indexOf(e.ref)-l.indexOf(t.ref)))},collectionRef:e})}},d={...y,name:o,setup(e,{attrs:t}){const o=l(null),c=a(p,void 0);n(u,{collectionItemRef:o}),r((()=>{const e=s(o);e&&c.itemMap.set(e,{ref:e,...t})})),i((()=>{const e=s(o);c.itemMap.delete(e)}))}};return{COLLECTION_INJECTION_KEY:p,COLLECTION_ITEM_INJECTION_KEY:u,ElCollection:c,ElCollectionItem:d}},I=p({trigger:m.trigger,effect:{...f.effect,default:"light"},type:{type:u(String)},placement:{type:u(String),default:"bottom"},popperOptions:{type:u(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:u([Number,String]),default:0},maxHeight:{type:u([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:u(Object)},teleported:f.teleported}),O=p({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:c}}),N=p({onKeydown:{type:u(Function)}}),b=[d.down,d.pageDown,d.home],_=[d.up,d.pageUp,d.end],S=[...b,..._],{ElCollection:T,ElCollectionItem:h,COLLECTION_INJECTION_KEY:x,COLLECTION_ITEM_INJECTION_KEY:L}=E("Dropdown");export{L as C,T as E,S as F,_ as L,O as a,C as b,E as c,I as d,h as e,N as f,x as g};
