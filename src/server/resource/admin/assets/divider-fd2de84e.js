/*! 
 Build based on gin-vue-admin 
 Time : 1691990628000 */
import{B as e,a3 as t,x as s,y as r,D as a,o as i,c as o,n,A as l,G as d,e as c,H as p,_ as u,I as v}from"./index-55b51a59.js";const f=e({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:t(String),default:"solid"}}),y=s({name:"ElDivider"});const m=v(u(s({...y,props:f,setup(e){const t=e,s=r("divider"),u=a((()=>s.cssVar({"border-style":t.borderStyle})));return(e,t)=>(i(),o("div",{class:n([l(s).b(),l(s).m(e.direction)]),style:p(l(u)),role:"separator"},[e.$slots.default&&"vertical"!==e.direction?(i(),o("div",{key:0,class:n([l(s).e("text"),l(s).is(e.contentPosition)])},[d(e.$slots,"default")],2)):c("v-if",!0)],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]));export{m as E};
