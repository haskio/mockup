/*! 
 Build based on gin-vue-admin 
 Time : 1691991175000 */
import{r as e,o as a,c as l,d as o,b as t,w as s,g as i,j as r,$ as p,E as d,k as u}from"./index-74cee4c8.js";import{E as m}from"./dialog-e3da6ecd.js";import"./overlay-b00a48a8.js";import{a as n,E as c}from"./form-item-a9b67415.js";/* empty css              */import{E as f,a as g}from"./table-column-39b930bd.js";import"./checkbox-825af685.js";/* empty css                *//* empty css               */import"./scrollbar-9c5a80d2.js";import"./tag-880a7758.js";/* empty css               */import{i as b,d as v,j}from"./autoCode-56528bf3.js";import{W as k}from"./warningBar-7cbe2c2c.js";import{_ as w}from"./_plugin-vue_export-helper-1b428a4d.js";import"./_baseClone-ebc65aeb.js";import"./_Uint8Array-cd1b76a1.js";import"./_initCloneObject-144c54df.js";import"./index-0d752b74.js";import"./isEqual-e3133432.js";/* empty css             */const _={class:"gva-table-box"},y={class:"gva-btn-list"},V={class:"dialog-footer"},h={name:"AutoPkg"},x=w(Object.assign(h,{setup(w){const h=e({packageName:"",label:"",desc:""}),x=e({packageName:[{required:!0,message:"请输入包名",trigger:"blur"},{validator:(e,a,l)=>{/^\d+$/.test(a[0])?l(new Error("不能够以数字开头")):l()},trigger:"blur"}]}),C=e(!1),N=()=>{C.value=!1,h.value={packageName:"",label:"",desc:""}},E=e(null),U=async()=>{E.value.validate((async e=>{if(e){0===(await b(h.value)).code&&r({type:"success",message:"添加成功",showClose:!0}),T(),N()}}))},B=e([]),T=async()=>{const e=await v();0===e.code&&(B.value=e.data.pkgs)};return T(),(e,b)=>{const v=d,w=f,P=g,$=u,q=n,A=c,I=m;return a(),l("div",null,[o(k,{href:"https://www.bilibili.com/video/BV1kv4y1g7nT?p=3",title:"此功能为开发环境使用，不建议发布到生产，具体使用效果请看视频https://www.bilibili.com/video/BV1kv4y1g7nT?p=3"}),t("div",_,[t("div",y,[o(v,{type:"primary",icon:"plus",onClick:b[0]||(b[0]=e=>{C.value=!0})},{default:s((()=>[i("新增")])),_:1})]),o(P,{data:B.value},{default:s((()=>[o(w,{align:"left",label:"id",width:"60",prop:"ID"}),o(w,{align:"left",label:"包名",width:"150",prop:"packageName"}),o(w,{align:"left",label:"展示名",width:"150",prop:"label"}),o(w,{align:"left",label:"描述","min-width":"150",prop:"desc"}),o(w,{align:"left",label:"操作",width:"200"},{default:s((e=>[o(v,{icon:"delete",type:"primary",link:"",onClick:a=>(async e=>{p.confirm("此操作仅删除数据库中的pkg存储，后端相应目录结构请自行删除与数据库保持一致！","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await j(e)).code&&(r({type:"success",message:"删除成功!"}),T())}))})(e.row)},{default:s((()=>[i("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),o(I,{modelValue:C.value,"onUpdate:modelValue":b[4]||(b[4]=e=>C.value=e),"before-close":N,title:"创建Package"},{footer:s((()=>[t("div",V,[o(v,{onClick:N},{default:s((()=>[i("取 消")])),_:1}),o(v,{type:"primary",onClick:U},{default:s((()=>[i("确 定")])),_:1})])])),default:s((()=>[o(k,{title:"新增Pkg用于自动化代码使用"}),o(A,{ref_key:"pkgForm",ref:E,model:h.value,rules:x.value,"label-width":"80px"},{default:s((()=>[o(q,{label:"包名",prop:"packageName"},{default:s((()=>[o($,{modelValue:h.value.packageName,"onUpdate:modelValue":b[1]||(b[1]=e=>h.value.packageName=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),o(q,{label:"展示名",prop:"label"},{default:s((()=>[o($,{modelValue:h.value.label,"onUpdate:modelValue":b[2]||(b[2]=e=>h.value.label=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),o(q,{label:"描述",prop:"desc"},{default:s((()=>[o($,{modelValue:h.value.desc,"onUpdate:modelValue":b[3]||(b[3]=e=>h.value.desc=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-881ef95f"]]);export{x as default};
