/*! 
 Build based on gin-vue-admin 
 Time : 1691202957000 */
import{r as a,o as t,c as e,d as r,b as o,w as l,g as u,J as i,K as s,h as n,t as d,j as c,E as h}from"./index-136c7199.js";import{E as y,a as p}from"./checkbox-c233821a.js";/* empty css               */import{s as f}from"./authority-fa24e648.js";import{W as m}from"./warningBar-444fe9fa.js";import"./isEqual-114134cb.js";import"./_Uint8Array-588558a9.js";/* empty css             */import"./_plugin-vue_export-helper-1b428a4d.js";const v={class:"clearfix sticky-button",style:{margin:"18px"}},g={class:"tree-content"},I={name:"Datas"},w=Object.assign(I,{props:{row:{default:function(){return{}},type:Object},authority:{default:function(){return[]},type:Array}},emits:["changeRow"],setup(I,{expose:w,emit:j}){const _=I,x=a([]),A=a(!1),b=a=>{a&&a.forEach((a=>{const t={};t.authorityId=a.authorityId,t.authorityName=a.authorityName,x.value.push(t),a.children&&a.children.length&&b(a.children)}))},k=a([]);b(_.authority),_.row.dataAuthorityId&&_.row.dataAuthorityId.forEach((a=>{const t=x.value&&x.value.filter((t=>t.authorityId===a.authorityId))&&x.value.filter((t=>t.authorityId===a.authorityId))[0];k.value.push(t)}));const C=()=>{k.value=[...x.value],j("changeRow","dataAuthorityId",k.value),A.value=!0},E=()=>{k.value=x.value.filter((a=>a.authorityId===_.row.authorityId)),j("changeRow","dataAuthorityId",k.value),A.value=!0},N=()=>{const a=[];R(_.row,a),k.value=x.value.filter((t=>a.indexOf(t.authorityId)>-1)),j("changeRow","dataAuthorityId",k.value),A.value=!0},R=(a,t)=>{t.push(a.authorityId),a.children&&a.children.forEach((a=>{R(a,t)}))},O=async()=>{0===(await f(_.row)).code&&c({type:"success",message:"资源设置成功"})},V=()=>{j("changeRow","dataAuthorityId",k.value),A.value=!0};return w({enterAndNext:()=>{O()},needConfirm:A}),(a,c)=>{const f=h,I=y,w=p;return t(),e("div",null,[r(m,{title:"此功能仅用于创建角色和角色的many2many关系表，具体使用还须自己结合表实现业务，详情参考示例代码（客户示例）。此功能不建议使用，建议使用插件市场【组织管理功能（点击前往）】来管理资源权限。",href:"https://plugin.gin-vue-admin.com/#/layout/newPluginInfo?id=36"}),o("div",v,[r(f,{class:"fl-right",type:"primary",onClick:O},{default:l((()=>[u("确 定")])),_:1}),r(f,{class:"fl-left",type:"primary",onClick:C},{default:l((()=>[u("全选")])),_:1}),r(f,{class:"fl-left",type:"primary",onClick:E},{default:l((()=>[u("本角色")])),_:1}),r(f,{class:"fl-left",type:"primary",onClick:N},{default:l((()=>[u("本角色及子角色")])),_:1})]),o("div",g,[r(w,{modelValue:k.value,"onUpdate:modelValue":c[0]||(c[0]=a=>k.value=a),onChange:V},{default:l((()=>[(t(!0),e(i,null,s(x.value,((a,e)=>(t(),n(I,{key:e,label:a},{default:l((()=>[u(d(a.authorityName),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])])}}});export{w as default};
