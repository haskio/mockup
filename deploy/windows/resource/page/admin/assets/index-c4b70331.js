/*! 
 Build based on gin-vue-admin 
 Time : 1689330001000 */
import e from"./menuItem-47783b93.js";import o from"./asyncSubmenu-d5a14a5f.js";import{D as t,U as r,o as n,h as s,w as i,c as l,J as u,K as p,e as a,M as m}from"./index-05337088.js";/* empty css                *//* empty css               *//* empty css             */import"./_plugin-vue_export-helper-1b428a4d.js";import"./index-eb073551.js";import"./index-b2d1e0b1.js";import"./index-8956ea8a.js";const f={name:"AsideComponent"},d=Object.assign(f,{props:{routerInfo:{type:Object,default:()=>null},isCollapse:{default:function(){return!1},type:Boolean},theme:{default:function(){return{}},type:Object}},setup(f){const d=f,c=t((()=>d.routerInfo.children&&d.routerInfo.children.filter((e=>!e.hidden)).length?o:e));return(e,o)=>{const t=r("AsideComponent");return f.routerInfo.hidden?a("",!0):(n(),s(m(c.value),{key:0,"is-collapse":f.isCollapse,theme:f.theme,"router-info":f.routerInfo},{default:i((()=>[f.routerInfo.children&&f.routerInfo.children.length?(n(!0),l(u,{key:0},p(f.routerInfo.children,(e=>(n(),s(t,{key:e.name,"is-collapse":!1,"router-info":e,theme:f.theme},null,8,["router-info","theme"])))),128)):a("",!0)])),_:1},8,["is-collapse","theme","router-info"]))}}});export{d as default};