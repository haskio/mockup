/*! 
 Build based on gin-vue-admin 
 Time : 1691202957000 */
import{r as e,T as t,o as a,c as o,b as s,d as l,w as r,g as n,t as u,H as i,e as d,cT as c,cU as m,j as p,cV as y,Q as f,k as h,E as v}from"./index-136c7199.js";import{E as k}from"./dialog-9344b354.js";import"./overlay-f9cf00d8.js";import{E as j,a as w}from"./table-column-608ea9f7.js";import"./checkbox-c233821a.js";/* empty css                *//* empty css               */import"./scrollbar-332b3387.js";import"./tag-cf1d712a.js";import{E as I}from"./tree-2c249e96.js";/* empty css               *//* empty css              */import{u as g}from"./authority-fa24e648.js";import{g as b,s as _}from"./authorityBtn-a1443643.js";import{_ as C}from"./_plugin-vue_export-helper-1b428a4d.js";import"./index-ee88cfc2.js";import"./_Uint8Array-588558a9.js";import"./_initCloneObject-dfd52bb0.js";import"./isEqual-114134cb.js";import"./index-4c57b8e9.js";const x={class:"clearfix sticky-button"},R={class:"tree-content"},E={class:"custom-tree-node"},V={key:0},D={class:"dialog-footer"},N={name:"Menus"},A=C(Object.assign(N,{props:{row:{default:function(){return{}},type:Object}},emits:["changeRow"],setup(C,{expose:N,emit:A}){const B=C,O=e(""),T=e([]),U=e([]),Q=e(!1),S=e({children:"children",label:function(e){return e.meta.title}});(async()=>{const e=await c();T.value=e.data.menus;const t=(await m({authorityId:B.row.authorityId})).data.menus,a=[];t.forEach((e=>{t.some((t=>t.parentId===e.menuId))||a.push(Number(e.menuId))})),U.value=a})();const q=()=>{Q.value=!0},H=e(null),M=async()=>{const e=H.value.getCheckedNodes(!1,!0);0===(await y({menus:e,authorityId:B.row.authorityId})).code&&p({type:"success",message:"菜单设置成功!"})};N({enterAndNext:()=>{M()},needConfirm:Q});const P=e(!1),W=e([]),Y=e([]),Z=e();let $="";const z=e=>{Y.value=e},F=e=>{P.value=!0,W.value=e.menuBtn},G=()=>{P.value=!1},J=async()=>{const e=Y.value.map((e=>e.ID));0===(await _({menuID:$,selected:e,authorityId:B.row.authorityId})).code&&(p({type:"success",message:"设置成功"}),P.value=!1)},K=(e,t)=>!e||-1!==t.meta.title.indexOf(e);return t(O,(e=>{H.value.filter(e)})),(e,t)=>{const c=h,m=v,y=I,_=j,N=w,Q=k;return a(),o("div",null,[s("div",x,[l(c,{modelValue:O.value,"onUpdate:modelValue":t[0]||(t[0]=e=>O.value=e),class:"fitler",placeholder:"筛选"},null,8,["modelValue"]),l(m,{class:"fl-right",type:"primary",onClick:M},{default:r((()=>[n("确 定")])),_:1})]),s("div",R,[l(y,{ref_key:"menuTree",ref:H,data:T.value,"default-checked-keys":U.value,props:S.value,"default-expand-all":"","highlight-current":"","node-key":"ID","show-checkbox":"","filter-node-method":K,onCheck:q},{default:r((({node:e,data:t})=>[s("span",E,[s("span",null,u(e.label),1),s("span",null,[l(m,{type:"primary",link:"",style:i({color:C.row.defaultRouter===t.name?"#E6A23C":"#85ce61"}),disabled:!e.checked,onClick:()=>(async e=>{const t=await g({authorityId:B.row.authorityId,AuthorityName:B.row.authorityName,parentId:B.row.parentId,defaultRouter:e.name});0===t.code&&(p({type:"success",message:"设置成功"}),A("changeRow","defaultRouter",t.data.authority.defaultRouter))})(t)},{default:r((()=>[n(u(C.row.defaultRouter===t.name?"首页":"设为首页"),1)])),_:2},1032,["style","disabled","onClick"])]),t.menuBtn.length?(a(),o("span",V,[l(m,{type:"primary",link:"",onClick:()=>(async e=>{$=e.ID;const t=await b({menuID:$,authorityId:B.row.authorityId});0===t.code&&(F(e),await f(),t.data.selected&&t.data.selected.forEach((e=>{W.value.some((t=>{t.ID===e&&Z.value.toggleRowSelection(t,!0)}))})))})(t)},{default:r((()=>[n(" 分配按钮 ")])),_:2},1032,["onClick"])])):d("",!0)])])),_:1},8,["data","default-checked-keys","props"])]),l(Q,{modelValue:P.value,"onUpdate:modelValue":t[1]||(t[1]=e=>P.value=e),title:"分配按钮","destroy-on-close":""},{footer:r((()=>[s("div",D,[l(m,{onClick:G},{default:r((()=>[n("取 消")])),_:1}),l(m,{type:"primary",onClick:J},{default:r((()=>[n("确 定")])),_:1})])])),default:r((()=>[l(N,{ref_key:"btnTableRef",ref:Z,data:W.value,"row-key":"ID",onSelectionChange:z},{default:r((()=>[l(_,{type:"selection",width:"55"}),l(_,{label:"按钮名称",prop:"name"}),l(_,{label:"按钮备注",prop:"desc"})])),_:1},8,["data"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-541a467f"]]);export{A as default};
