/*! 
 Build based on gin-vue-admin 
 Time : 1691228829000 */
import{l as s,r as a,U as o,o as e,c as t,d as l,w as i,A as r,b as n,g as d,j as p,N as c}from"./index-705282a4.js";/* empty css               *//* empty css                 *//* empty css             */import{E as m}from"./index-aa813834.js";import"./index-14811586.js";import"./cloneDeep-4f27332c.js";import"./_baseClone-39b1660f.js";import"./_Uint8Array-24a3c252.js";import"./_initCloneObject-acf8bf06.js";import"./isEqual-221d581a.js";const u=n("div",{class:"el-upload__text"},[d(" 拖拽或"),n("em",null,"点击上传")],-1),j=n("div",{class:"el-upload__tip"}," 请把安装包的zip拖拽至此处上传 ",-1),_={__name:"index",setup(n){const d=s(),_=a(""),f=s=>{if(0===s.code){let a="";s.data&&s.data.forEach(((s,o)=>{a+="".concat(o+1,".").concat(s.msg,"\n")})),alert(a)}else p.error(s.msg)};return(s,a)=>{const n=o("upload-filled"),p=c,g=m;return e(),t("div",null,[l(g,{class:"upload-demo",drag:"",action:"".concat(_.value,"/autoCode/installPlugin"),headers:{"x-token":r(d).token},"show-file-list":!1,"on-success":f,"on-error":f,name:"plug"},{tip:i((()=>[j])),default:i((()=>[l(p,{class:"el-icon--upload"},{default:i((()=>[l(n)])),_:1}),u])),_:1},8,["action","headers"])])}}};export{_ as default};
