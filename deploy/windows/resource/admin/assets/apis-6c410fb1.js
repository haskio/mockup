/*! 
 Build based on gin-vue-admin 
 Time : 1691996246000 */
import{s as a,r as e,T as t,o as s,c as o,b as r,d as i,w as l,g as n,j as p,k as d,E as c}from"./index-86766df6.js";import{E as u}from"./tree-3d9c1f72.js";import"./checkbox-4b1fafc4.js";/* empty css               *//* empty css              */import{e as h}from"./api-554a576f.js";import{_ as m}from"./_plugin-vue_export-helper-1b428a4d.js";import"./index-e9538320.js";import"./isEqual-ba934af4.js";import"./_Uint8Array-e465cda2.js";const f={class:"clearfix sticky-button"},y={class:"tree-content"},v={name:"Apis"},b=m(Object.assign(v,{props:{row:{default:function(){return{}},type:Object}},setup(m,{expose:v}){const b=m,j=e({children:"children",label:"description"}),k=e(""),x=e([]),g=e([]),I=e("");(async()=>{const e=(await h()).data.apis;x.value=E(e);const t=await(s={authorityId:b.row.authorityId},a({url:"/casbin/getPolicyPathByAuthorityId",method:"post",data:s}));var s;I.value=b.row.authorityId,g.value=[],t.data.paths&&t.data.paths.forEach((a=>{g.value.push("p:"+a.path+"m:"+a.method)}))})();const w=e(!1),_=()=>{w.value=!0},E=a=>{const e={};a&&a.forEach((a=>{a.onlyId="p:"+a.path+"m:"+a.method,Object.prototype.hasOwnProperty.call(e,a.apiGroup)?e[a.apiGroup].push(a):Object.assign(e,{[a.apiGroup]:[a]})}));const t=[];for(const s in e){const a={ID:s,description:s+"组",children:e[s]};t.push(a)}return t},O=e(null),C=async()=>{const e=O.value.getCheckedNodes(!0);var t=[];e&&e.forEach((a=>{var e={path:a.path,method:a.method};t.push(e)}));var s;0===(await(s={authorityId:I.value,casbinInfos:t},a({url:"/casbin/updateCasbin",method:"post",data:s}))).code&&p({type:"success",message:"api设置成功"})};v({needConfirm:w,enterAndNext:()=>{C()}});const A=(a,e)=>!a||-1!==e.description.indexOf(a);return t(k,(a=>{O.value.filter(a)})),(a,e)=>{const t=d,p=c,h=u;return s(),o("div",null,[r("div",f,[i(t,{modelValue:k.value,"onUpdate:modelValue":e[0]||(e[0]=a=>k.value=a),class:"fitler",placeholder:"筛选"},null,8,["modelValue"]),i(p,{class:"fl-right",type:"primary",onClick:C},{default:l((()=>[n("确 定")])),_:1})]),r("div",y,[i(h,{ref_key:"apiTree",ref:O,data:x.value,"default-checked-keys":g.value,props:j.value,"default-expand-all":"","highlight-current":"","node-key":"onlyId","show-checkbox":"","filter-node-method":A,onCheck:_},null,8,["data","default-checked-keys","props"])])])}}}),[["__scopeId","data-v-bf5ba3a0"]]);export{b as default};
