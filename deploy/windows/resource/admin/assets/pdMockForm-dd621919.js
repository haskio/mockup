/*! 
 Build based on gin-vue-admin 
 Time : 1692158479000 */
import{an as e,u as a,r as t,a as s,o as l,c as r,b as i,d as o,w as u,g as d,j as n,k as c,E as p}from"./index-1ff099df.js";import{a as m,E as f}from"./form-item-3e2d1b42.js";/* empty css               *//* empty css              */import{f as v,c as y,u as j}from"./pdMock-4b7d1ef9.js";import"./date-225eaf4f.js";import"./dictionary-b3e77898.js";import"./_baseClone-0cad53bf.js";import"./_Uint8Array-afa07aaa.js";import"./_initCloneObject-c8404b30.js";import"./sysDictionary-dbc54da8.js";const b={class:"gva-form-box"},_={name:"PdMock"},g=Object.assign(_,{setup(_){const g=e(),k=a(),w=t(""),h=t({title:""}),x=s({title:[{required:!0,message:"",trigger:["input","blur"]}]}),C=t();(async()=>{if(g.query.id){const e=await v({ID:g.query.id});0===e.code&&(h.value=e.data.repdMock,w.value="update")}else w.value="create"})();const V=async()=>{var e;null==(e=C.value)||e.validate((async e=>{if(!e)return;let a;switch(w.value){case"create":default:a=await y(h.value);break;case"update":a=await j(h.value)}0===a.code&&n({type:"success",message:"创建/更改成功"})}))},q=()=>{k.go(-1)};return(e,a)=>{const t=c,s=m,n=p,v=f;return l(),r("div",null,[i("div",b,[o(v,{model:h.value,ref_key:"elFormRef",ref:C,"label-position":"right",rules:x,"label-width":"80px"},{default:u((()=>[o(s,{label:"名称:",prop:"title"},{default:u((()=>[o(t,{modelValue:h.value.title,"onUpdate:modelValue":a[0]||(a[0]=e=>h.value.title=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),o(s,null,{default:u((()=>[o(n,{type:"primary",onClick:V},{default:u((()=>[d("保存")])),_:1}),o(n,{type:"primary",onClick:q},{default:u((()=>[d("返回")])),_:1})])),_:1})])),_:1},8,["model","rules"])])])}}});export{g as default};
