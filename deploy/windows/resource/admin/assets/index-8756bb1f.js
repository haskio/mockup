/*! 
 Build based on gin-vue-admin 
 Time : 1691996246000 */
import{B as s,b9 as a,x as e,ag as l,y as o,D as n,o as t,c,b as i,G as r,n as u,A as p,h as d,w as f,d as k,bO as g,ak as m,N as b,e as y,H as v,X as C,_ as h,I as _}from"./index-86766df6.js";const B=s({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:a,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),E={close:s=>s instanceof MouseEvent,click:s=>s instanceof MouseEvent},S=e({name:"ElTag"});const w=_(h(e({...S,props:B,emits:E,setup(s,{emit:a}){const e=s,h=l(),_=o("tag"),B=n((()=>{const{type:s,hit:a,effect:l,closable:o,round:n}=e;return[_.b(),_.is("closable",o),_.m(s),_.m(h.value),_.m(l),_.is("hit",a),_.is("round",n)]})),E=s=>{a("close",s)},S=s=>{a("click",s)};return(s,a)=>s.disableTransitions?(t(),c("span",{key:0,class:u(p(B)),style:v({backgroundColor:s.color}),onClick:S},[i("span",{class:u(p(_).e("content"))},[r(s.$slots,"default")],2),s.closable?(t(),d(p(b),{key:0,class:u(p(_).e("close")),onClick:m(E,["stop"])},{default:f((()=>[k(p(g))])),_:1},8,["class","onClick"])):y("v-if",!0)],6)):(t(),d(C,{key:1,name:"".concat(p(_).namespace.value,"-zoom-in-center"),appear:""},{default:f((()=>[i("span",{class:u(p(B)),style:v({backgroundColor:s.color}),onClick:S},[i("span",{class:u(p(_).e("content"))},[r(s.$slots,"default")],2),s.closable?(t(),d(p(b),{key:0,class:u(p(_).e("close")),onClick:m(E,["stop"])},{default:f((()=>[k(p(g))])),_:1},8,["class","onClick"])):y("v-if",!0)],6)])),_:3},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]));export{w as E,B as t};
