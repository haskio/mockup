/*! 
 Build based on gin-vue-admin 
 Time : 1692158479000 */
import{an as e,u as a,r as l,a as o,o as r,c as s,b as t,d as u,w as p,g as d,j as m,k as i,E as c}from"./index-1ff099df.js";import{a as n,E as f}from"./form-item-3e2d1b42.js";/* empty css               *//* empty css              */import{f as b,c as v,u as j}from"./pdRelease-238e1b55.js";import"./date-225eaf4f.js";import"./dictionary-b3e77898.js";/* empty css               *//* empty css                 */import"./_baseClone-0cad53bf.js";import"./_Uint8Array-afa07aaa.js";import"./_initCloneObject-c8404b30.js";import"./sysDictionary-dbc54da8.js";const k={class:"gva-form-box"},_={name:"PdRelease"},y=Object.assign(_,{setup(_){const y=e(),g=a(),h=l(""),V=l({mockupId:0,releaseNote:"",mockup_html:""}),I=o({mockupId:[{required:!0,message:"",trigger:["input","blur"]}],mockupFile:[{required:!0,message:"",trigger:["input","blur"]}]}),w=l();(async()=>{if(y.query.id){const e=await b({ID:y.query.id});0===e.code&&(V.value=e.data.repdRelease,h.value="update")}else h.value="create"})();const U=async()=>{var e;null==(e=w.value)||e.validate((async e=>{if(!e)return;let a;switch(h.value){case"create":default:a=await v(V.value);break;case"update":a=await j(V.value)}0===a.code&&m({type:"success",message:"创建/更改成功"})}))},q=()=>{g.go(-1)};return(e,a)=>{const l=i,o=n,m=c,b=f;return r(),s("div",null,[t("div",k,[u(b,{model:V.value,ref_key:"elFormRef",ref:w,"label-position":"right",rules:I,"label-width":"80px"},{default:p((()=>[u(o,{label:"产品ID:",prop:"mockupId"},{default:p((()=>[u(l,{modelValue:V.value.mockupId,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value.mockupId=e),modelModifiers:{number:!0},clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),u(o,{label:"发布说明:",prop:"releaseNote"},{default:p((()=>[u(l,{modelValue:V.value.releaseNote,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value.releaseNote=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),u(o,{label:"原型文件:",prop:"mockupFile"}),u(o,{label:"原型访问链接:",prop:"mockup_html"},{default:p((()=>[u(l,{modelValue:V.value.mockup_html,"onUpdate:modelValue":a[2]||(a[2]=e=>V.value.mockup_html=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),u(o,null,{default:p((()=>[u(m,{type:"primary",onClick:U},{default:p((()=>[d("保存")])),_:1}),u(m,{type:"primary",onClick:q},{default:p((()=>[d("返回")])),_:1})])),_:1})])),_:1},8,["model","rules"])])])}}});export{y as default};
