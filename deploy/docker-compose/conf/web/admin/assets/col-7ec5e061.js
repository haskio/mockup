/*! 
 Build based on gin-vue-admin 
 Time : 1691853746000 */
import{B as t,x as e,y as a,D as s,a2 as u,o as n,h as c,w as l,G as r,n as o,A as p,H as f,M as d,_ as m,I as g,a3 as i,aD as b,a4 as y,br as h,aI as j}from"./index-0bfeb27f.js";const v=Symbol("rowContextKey"),x=t({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:["start","center","end","space-around","space-between","space-evenly"],default:"start"},align:{type:String,values:["top","middle","bottom"]}}),N=e({name:"ElRow"});const w=g(m(e({...N,props:x,setup(t){const e=t,m=a("row"),g=s((()=>e.gutter));u(v,{gutter:g});const i=s((()=>{const t={};return e.gutter?(t.marginRight=t.marginLeft="-".concat(e.gutter/2,"px"),t):t})),b=s((()=>[m.b(),m.is("justify-".concat(e.justify),"start"!==e.justify),m.is("align-".concat(e.align),!!e.align)]));return(t,e)=>(n(),c(d(t.tag),{class:o(p(b)),style:f(p(i))},{default:l((()=>[r(t.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]])),_=t({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:i([Number,Object]),default:()=>b({})},sm:{type:i([Number,Object]),default:()=>b({})},md:{type:i([Number,Object]),default:()=>b({})},lg:{type:i([Number,Object]),default:()=>b({})},xl:{type:i([Number,Object]),default:()=>b({})}}),E=e({name:"ElCol"});const O=g(m(e({...E,props:_,setup(t){const e=t,{gutter:u}=y(v,{gutter:s((()=>0))}),m=a("col"),g=s((()=>{const t={};return u.value&&(t.paddingLeft=t.paddingRight="".concat(u.value/2,"px")),t})),i=s((()=>{const t=[];["span","offset","pull","push"].forEach((a=>{const s=e[a];h(s)&&("span"===a?t.push(m.b("".concat(e[a]))):s>0&&t.push(m.b("".concat(a,"-").concat(e[a]))))}));return["xs","sm","md","lg","xl"].forEach((a=>{h(e[a])?t.push(m.b("".concat(a,"-").concat(e[a]))):j(e[a])&&Object.entries(e[a]).forEach((([e,s])=>{t.push("span"!==e?m.b("".concat(a,"-").concat(e,"-").concat(s)):m.b("".concat(a,"-").concat(s)))}))})),u.value&&t.push(m.is("guttered")),[m.b(),t]}));return(t,e)=>(n(),c(d(t.tag),{class:o(p(i)),style:f(p(g))},{default:l((()=>[r(t.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]));export{O as E,w as a};