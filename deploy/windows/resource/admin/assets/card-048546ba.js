/*! 
 Build based on gin-vue-admin 
 Time : 1691990784000 */
import{B as a,a3 as e,x as s,y as t,o as r,c as d,n as o,A as l,G as n,g as c,t as y,e as p,b as h,H as i,_ as u,I as v}from"./index-bd3695e7.js";const f=a({header:{type:String,default:""},bodyStyle:{type:e([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),m=s({name:"ElCard"});const b=v(u(s({...m,props:f,setup(a){const e=t("card");return(a,s)=>(r(),d("div",{class:o([l(e).b(),l(e).is("".concat(a.shadow,"-shadow"))])},[a.$slots.header||a.header?(r(),d("div",{key:0,class:o(l(e).e("header"))},[n(a.$slots,"header",{},(()=>[c(y(a.header),1)]))],2)):p("v-if",!0),h("div",{class:o(l(e).e("body")),style:i(a.bodyStyle)},[n(a.$slots,"default")],6)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]));export{b as E};