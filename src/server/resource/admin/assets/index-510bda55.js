/*! 
 Build based on gin-vue-admin 
 Time : 1691996246000 */
import e from"./menuItem-13a18ec5.js";import o from"./asyncSubmenu-3122bc56.js";import{D as t,U as r,o as n,h as s,w as i,c as l,J as u,K as p,e as a,M as m}from"./index-86766df6.js";/* empty css                *//* empty css               *//* empty css             */import"./_plugin-vue_export-helper-1b428a4d.js";import"./index-418e3d53.js";import"./index-80510c43.js";import"./index-e9538320.js";const f={name:"AsideComponent"},d=Object.assign(f,{props:{routerInfo:{type:Object,default:()=>null},isCollapse:{default:function(){return!1},type:Boolean},theme:{default:function(){return{}},type:Object}},setup(f){const d=f,c=t((()=>d.routerInfo.children&&d.routerInfo.children.filter((e=>!e.hidden)).length?o:e));return(e,o)=>{const t=r("AsideComponent");return f.routerInfo.hidden?a("",!0):(n(),s(m(c.value),{key:0,"is-collapse":f.isCollapse,theme:f.theme,"router-info":f.routerInfo},{default:i((()=>[f.routerInfo.children&&f.routerInfo.children.length?(n(!0),l(u,{key:0},p(f.routerInfo.children,(e=>(n(),s(t,{key:e.name,"is-collapse":!1,"router-info":e,theme:f.theme},null,8,["router-info","theme"])))),128)):a("",!0)])),_:1},8,["is-collapse","theme","router-info"]))}}});export{d as default};
