/*! 
 Build based on gin-vue-admin 
 Time : 1691202957000 */
import{s as e,r as a,a as l,o as t,c as o,d as s,b as i,w as u,g as m,j as d,k as r,E as n}from"./index-136c7199.js";import{a as p,E as c}from"./form-item-beb28df0.js";/* empty css               *//* empty css              */import{W as b}from"./warningBar-444fe9fa.js";import"./_baseClone-c7152a60.js";import"./_Uint8Array-588558a9.js";import"./_initCloneObject-dfd52bb0.js";/* empty css             */import"./_plugin-vue_export-helper-1b428a4d.js";const j=a=>e({url:"/email/emailTest",method:"post",data:a}),f={class:"gva-form-box"},_={name:"Email"},V=Object.assign(_,{setup(e){const _=a(null),V=l({to:"",subject:"",body:""}),y=async()=>{0===(await j()).code&&d.success("发送成功")},g=async()=>{0===(await j()).code&&d.success("发送成功,请查收")};return(e,a)=>{const l=r,d=p,j=n,x=c;return t(),o("div",null,[s(b,{title:"需要提前配置email配置文件，为防止不必要的垃圾邮件，在线体验功能不开放此功能体验。"}),i("div",f,[s(x,{ref_key:"emailForm",ref:_,"label-position":"right","label-width":"80px",model:V},{default:u((()=>[s(d,{label:"目标邮箱"},{default:u((()=>[s(l,{modelValue:V.to,"onUpdate:modelValue":a[0]||(a[0]=e=>V.to=e)},null,8,["modelValue"])])),_:1}),s(d,{label:"邮件"},{default:u((()=>[s(l,{modelValue:V.subject,"onUpdate:modelValue":a[1]||(a[1]=e=>V.subject=e)},null,8,["modelValue"])])),_:1}),s(d,{label:"邮件内容"},{default:u((()=>[s(l,{modelValue:V.body,"onUpdate:modelValue":a[2]||(a[2]=e=>V.body=e),type:"textarea"},null,8,["modelValue"])])),_:1}),s(d,null,{default:u((()=>[s(j,{onClick:y},{default:u((()=>[m("发送测试邮件")])),_:1}),s(j,{onClick:g},{default:u((()=>[m("发送邮件")])),_:1})])),_:1})])),_:1},8,["model"])])])}}});export{V as default};