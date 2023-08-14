/*! 
 Build based on gin-vue-admin 
 Time : 1691996246000 */
import{r as e,o as a,c as l,b as t,d as o,w as u,J as i,K as s,h as r,g as p,t as d,j as n,$ as m,k as c,E as v,q as f,v as g}from"./index-86766df6.js";import{E as h}from"./dialog-842d993f.js";import"./overlay-97a4f192.js";import{E as b}from"./pagination-5a084d3e.js";/* empty css              */import"./tag-0c99d6ff.js";import{E as y,a as _}from"./select-030ce5c1.js";import"./scrollbar-45d4f9d0.js";/* empty css               */import{E as V,a as j}from"./table-column-e9063494.js";import"./checkbox-4b1fafc4.js";/* empty css                */import{E as w}from"./popover-4fec4a9a.js";import{a as k,E as C}from"./form-item-98a8635f.js";/* empty css               */import{g as x,d as U,f as A,a as E,u as G,c as I,b as z}from"./api-554a576f.js";import{t as P}from"./stringFun-647a78e9.js";import{W as q}from"./warningBar-33da73b9.js";import{_ as S}from"./_plugin-vue_export-helper-1b428a4d.js";import"./isEqual-ba934af4.js";import"./_Uint8Array-e465cda2.js";import"./index-418e3d53.js";import"./index-8756bb1f.js";import"./strings-4c3ca3f6.js";import"./_initCloneObject-b8657ee7.js";import"./dropdown-ddefb0df.js";import"./_baseClone-427f7008.js";/* empty css             */const T=e=>(f("data-v-968123e7"),e=e(),g(),e),D={class:"gva-search-box"},F={class:"gva-table-box"},B={class:"gva-btn-list"},K=T((()=>t("p",null,"确定要删除吗？",-1))),O={style:{"text-align":"right","margin-top":"8px"}},L=T((()=>t("p",null,"确定要刷新Casbin缓存吗？",-1))),W={style:{"text-align":"right","margin-top":"8px"}},$={class:"gva-pagination"},J={class:"dialog-footer"},R={name:"Api"},X=S(Object.assign(R,{setup(f){const g=e=>{const a=R.value.filter((a=>a.value===e))[0];return a&&"".concat(a.label)},S=e([]),T=e({path:"",apiGroup:"",method:"",description:""}),R=e([{value:"POST",label:"创建",type:"success"},{value:"GET",label:"查看",type:""},{value:"PUT",label:"更新",type:"warning"},{value:"DELETE",label:"删除",type:"danger"}]),X=e(""),Y=e({path:[{required:!0,message:"请输入api路径",trigger:"blur"}],apiGroup:[{required:!0,message:"请输入组名称",trigger:"blur"}],method:[{required:!0,message:"请选择请求方式",trigger:"blur"}],description:[{required:!0,message:"请输入api介绍",trigger:"blur"}]}),Z=e(1),H=e(0),M=e(10),N=e([]),Q=e({}),ee=()=>{Q.value={}},ae=()=>{Z.value=1,M.value=10,ue()},le=e=>{M.value=e,ue()},te=e=>{Z.value=e,ue()},oe=({prop:e,order:a})=>{e&&("ID"===e&&(e="id"),Q.value.orderKey=P(e),Q.value.desc="descending"===a),ue()},ue=async()=>{const e=await x({page:Z.value,pageSize:M.value,...Q.value});0===e.code&&(N.value=e.data.list,H.value=e.data.total,Z.value=e.data.page,M.value=e.data.pageSize)};ue();const ie=e=>{S.value=e},se=e(!1),re=async()=>{const e=S.value.map((e=>e.ID)),a=await U({ids:e});0===a.code&&(n({type:"success",message:a.msg}),N.value.length===e.length&&Z.value>1&&Z.value--,se.value=!1,ue())},pe=e(!1),de=async()=>{const e=await A();0===e.code&&n({type:"success",message:e.msg}),pe.value=!1},ne=e(null),me=e("新增Api"),ce=e(!1),ve=e=>{switch(e){case"addApi":me.value="新增Api";break;case"edit":me.value="编辑Api"}X.value=e,ce.value=!0},fe=()=>{ne.value.resetFields(),T.value={path:"",apiGroup:"",method:"",description:""},ce.value=!1},ge=async()=>{ne.value.validate((async e=>{if(e)switch(X.value){case"addApi":0===(await I(T.value)).code&&n({type:"success",message:"添加成功",showClose:!0}),ue(),fe();break;case"edit":0===(await G(T.value)).code&&n({type:"success",message:"编辑成功",showClose:!0}),ue(),fe();break;default:n({type:"error",message:"未知操作",showClose:!0})}}))};return(e,f)=>{const x=c,U=k,A=y,G=_,I=v,P=C,X=w,he=V,be=j,ye=b,_e=h;return a(),l("div",null,[t("div",D,[o(P,{ref:"searchForm",inline:!0,model:Q.value},{default:u((()=>[o(U,{label:"路径"},{default:u((()=>[o(x,{modelValue:Q.value.path,"onUpdate:modelValue":f[0]||(f[0]=e=>Q.value.path=e),placeholder:"路径"},null,8,["modelValue"])])),_:1}),o(U,{label:"描述"},{default:u((()=>[o(x,{modelValue:Q.value.description,"onUpdate:modelValue":f[1]||(f[1]=e=>Q.value.description=e),placeholder:"描述"},null,8,["modelValue"])])),_:1}),o(U,{label:"API组"},{default:u((()=>[o(x,{modelValue:Q.value.apiGroup,"onUpdate:modelValue":f[2]||(f[2]=e=>Q.value.apiGroup=e),placeholder:"api组"},null,8,["modelValue"])])),_:1}),o(U,{label:"请求"},{default:u((()=>[o(G,{modelValue:Q.value.method,"onUpdate:modelValue":f[3]||(f[3]=e=>Q.value.method=e),clearable:"",placeholder:"请选择"},{default:u((()=>[(a(!0),l(i,null,s(R.value,(e=>(a(),r(A,{key:e.value,label:"".concat(e.label,"(").concat(e.value,")"),value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),o(U,null,{default:u((()=>[o(I,{type:"primary",icon:"search",onClick:ae},{default:u((()=>[p("查询")])),_:1}),o(I,{icon:"refresh",onClick:ee},{default:u((()=>[p("重置")])),_:1})])),_:1})])),_:1},8,["model"])]),t("div",F,[t("div",B,[o(I,{type:"primary",icon:"plus",onClick:f[4]||(f[4]=e=>ve("addApi"))},{default:u((()=>[p("新增")])),_:1}),o(X,{modelValue:se.value,"onUpdate:modelValue":f[7]||(f[7]=e=>se.value=e),placement:"top",width:"160"},{reference:u((()=>[o(I,{icon:"delete",disabled:!S.value.length,style:{"margin-left":"10px"},onClick:f[6]||(f[6]=e=>se.value=!0)},{default:u((()=>[p("删除")])),_:1},8,["disabled"])])),default:u((()=>[K,t("div",O,[o(I,{type:"primary",link:"",onClick:f[5]||(f[5]=e=>se.value=!1)},{default:u((()=>[p("取消")])),_:1}),o(I,{type:"primary",onClick:re},{default:u((()=>[p("确定")])),_:1})])])),_:1},8,["modelValue"]),o(X,{modelValue:pe.value,"onUpdate:modelValue":f[10]||(f[10]=e=>pe.value=e),placement:"top",width:"160"},{reference:u((()=>[o(I,{icon:"Refresh",style:{"margin-left":"10px"},onClick:f[9]||(f[9]=e=>pe.value=!0)},{default:u((()=>[p("刷新缓存")])),_:1})])),default:u((()=>[L,t("div",W,[o(I,{type:"primary",link:"",onClick:f[8]||(f[8]=e=>pe.value=!1)},{default:u((()=>[p("取消")])),_:1}),o(I,{type:"primary",onClick:de},{default:u((()=>[p("确定")])),_:1})])])),_:1},8,["modelValue"])]),o(be,{data:N.value,onSortChange:oe,onSelectionChange:ie},{default:u((()=>[o(he,{type:"selection",width:"55"}),o(he,{align:"left",label:"id","min-width":"60",prop:"ID",sortable:"custom"}),o(he,{align:"left",label:"API路径","min-width":"150",prop:"path",sortable:"custom"}),o(he,{align:"left",label:"API分组","min-width":"150",prop:"apiGroup",sortable:"custom"}),o(he,{align:"left",label:"API简介","min-width":"150",prop:"description",sortable:"custom"}),o(he,{align:"left",label:"请求","min-width":"150",prop:"method",sortable:"custom"},{default:u((e=>[t("div",null,d(e.row.method)+" / "+d(g(e.row.method)),1)])),_:1}),o(he,{align:"left",fixed:"right",label:"操作",width:"200"},{default:u((e=>[o(I,{icon:"edit",type:"primary",link:"",onClick:a=>(async e=>{const a=await E({id:e.ID});T.value=a.data.api,ve("edit")})(e.row)},{default:u((()=>[p("编辑")])),_:2},1032,["onClick"]),o(I,{icon:"delete",type:"primary",link:"",onClick:a=>(async e=>{m.confirm("此操作将永久删除所有角色下该api, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await z(e)).code&&(n({type:"success",message:"删除成功!"}),1===N.value.length&&Z.value>1&&Z.value--,ue())}))})(e.row)},{default:u((()=>[p("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),t("div",$,[o(ye,{"current-page":Z.value,"page-size":M.value,"page-sizes":[10,30,50,100],total:H.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:te,onSizeChange:le},null,8,["current-page","page-size","total"])])]),o(_e,{modelValue:ce.value,"onUpdate:modelValue":f[15]||(f[15]=e=>ce.value=e),"before-close":fe,title:me.value},{footer:u((()=>[t("div",J,[o(I,{onClick:fe},{default:u((()=>[p("取 消")])),_:1}),o(I,{type:"primary",onClick:ge},{default:u((()=>[p("确 定")])),_:1})])])),default:u((()=>[o(q,{title:"新增API，需要在角色管理内配置权限才可使用"}),o(P,{ref_key:"apiForm",ref:ne,model:T.value,rules:Y.value,"label-width":"80px"},{default:u((()=>[o(U,{label:"路径",prop:"path"},{default:u((()=>[o(x,{modelValue:T.value.path,"onUpdate:modelValue":f[11]||(f[11]=e=>T.value.path=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),o(U,{label:"请求",prop:"method"},{default:u((()=>[o(G,{modelValue:T.value.method,"onUpdate:modelValue":f[12]||(f[12]=e=>T.value.method=e),placeholder:"请选择",style:{width:"100%"}},{default:u((()=>[(a(!0),l(i,null,s(R.value,(e=>(a(),r(A,{key:e.value,label:"".concat(e.label,"(").concat(e.value,")"),value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),o(U,{label:"api分组",prop:"apiGroup"},{default:u((()=>[o(x,{modelValue:T.value.apiGroup,"onUpdate:modelValue":f[13]||(f[13]=e=>T.value.apiGroup=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),o(U,{label:"api简介",prop:"description"},{default:u((()=>[o(x,{modelValue:T.value.description,"onUpdate:modelValue":f[14]||(f[14]=e=>T.value.description=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-968123e7"]]);export{X as default};
