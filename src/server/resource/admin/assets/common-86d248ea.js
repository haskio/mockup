/*! 
 Build based on gin-vue-admin 
 Time : 1691990628000 */
import{s as e,r as a,l as s,o,c as t,d as r,w as l,g as n,A as i,j as p,E as d}from"./index-55b51a59.js";/* empty css               *//* empty css                 *//* empty css               */import{I as u}from"./image-81157f0c.js";import{_ as m}from"./_plugin-vue_export-helper-1b428a4d.js";import{E as c}from"./index-0bb40b90.js";const f=a=>e({url:"/fileUploadAndDownload/getFileList",method:"post",data:a}),g=a=>e({url:"/fileUploadAndDownload/deleteFile",method:"post",data:a}),j=a=>e({url:"/fileUploadAndDownload/editFileName",method:"post",data:a}),y={name:"UploadImage",methods:{}},h=m(Object.assign(y,{props:{imageUrl:{type:String,default:""},fileSize:{type:Number,default:2048},maxWH:{type:Number,default:1920}},emits:["on-success"],setup(e,{emit:m}){const f=e,g=a(""),j=s(),y=e=>{const a="image/jpeg"===e.type,s="image/png"===e.type;if(!a&&!s)return p.error("上传头像图片只能是 jpg或png 格式!"),!1;const o=e.size/1024<f.fileSize;if(!o){return new u(e,f.fileSize,f.maxWH).compress()}return o},h=e=>{const{data:a}=e;a.file&&m("on-success",a.file.url)};return(e,a)=>{const s=d,p=c;return o(),t("div",null,[r(p,{action:"".concat(g.value,"/fileUploadAndDownload/upload"),headers:{"x-token":i(j).token},"show-file-list":!1,"on-success":h,"before-upload":y,multiple:!1},{default:l((()=>[r(s,{type:"primary"},{default:l((()=>[n("压缩上传")])),_:1})])),_:1},8,["action","headers"])])}}}),[["__scopeId","data-v-9f59623f"]]),_={name:"UploadCommon",methods:{}},v=Object.assign(_,{emits:["on-success"],setup(e,{emit:u}){const m=a(""),f=s(),g=a(!1),j=e=>{g.value=!0;const a="image/jpeg"===e.type,s="image/png"===e.type,o=e.size/1024/1024<.5;return a||s||(p.error("上传图片只能是 jpg或png 格式!"),g.value=!1),o||(p.error("未压缩的上传图片大小不能超过 500KB，请使用压缩上传"),g.value=!1),(s||a)&&o},y=e=>{const{data:a}=e;a.file&&u("on-success",a.file.url)},h=()=>{p({type:"error",message:"上传失败"}),g.value=!1};return(e,a)=>{const s=d,p=c;return o(),t("div",null,[r(p,{action:"".concat(m.value,"/fileUploadAndDownload/upload"),"before-upload":j,headers:{"x-token":i(f).token},"on-error":h,"on-success":y,"show-file-list":!1,class:"upload-btn"},{default:l((()=>[r(s,{type:"primary"},{default:l((()=>[n("普通上传")])),_:1})])),_:1},8,["action","headers"])])}}});export{h as U,v as _,g as d,j as e,f as g};