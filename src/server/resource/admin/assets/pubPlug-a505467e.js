/*! 
 Build based on gin-vue-admin 
 Time : 1691228829000 */
import{r as a,o as s,c as e,d as t,b as o,w as l,g as u,j as p,k as r,E as i}from"./index-705282a4.js";/* empty css               *//* empty css              */import{W as n}from"./warningBar-b27b05e7.js";import{l as m}from"./autoCode-b5dce136.js";/* empty css             */import"./_plugin-vue_export-helper-1b428a4d.js";const c={class:"gva-plugin-pub"},d={class:"plugin-pub-btn-list"},g={__name:"pubPlug",setup(g){const j=a(""),v=async()=>{const a=await m({plugName:j.value});0===a.code&&p.success(a.msg)};return(a,p)=>{const m=r,g=i;return s(),e("div",c,[t(n,{title:"目前只支持标准插件（通过插件模板生成的标准目录插件），非标准插件请自行打包"}),o("div",d,[t(m,{modelValue:j.value,"onUpdate:modelValue":p[0]||(p[0]=a=>j.value=a),placeholder:"插件模板处填写的【插件名】"},null,8,["modelValue"]),t(g,{type:"primary",onClick:v},{default:l((()=>[u("打包插件")])),_:1})])])}}};export{g as default};
