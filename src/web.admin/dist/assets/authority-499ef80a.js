/*! 
 Build based on gin-vue-admin 
 Time : 1691996246000 */
import{r as a,o as e,c as t,d as l,b as o,w as r,g as i,h as u,e as d,$ as s,j as n,E as m,k as p}from"./index-86766df6.js";import{E as y}from"./drawer-5fb95baf.js";import"./overlay-97a4f192.js";import{E as h,a as v}from"./tab-pane-3302625f.js";import{E as c}from"./dialog-842d993f.js";import{a as f,E as I}from"./form-item-98a8635f.js";/* empty css              */import{E as g}from"./radio-97513809.js";/* empty css               */import"./tag-0c99d6ff.js";import"./checkbox-4b1fafc4.js";import"./scrollbar-45d4f9d0.js";import{E as b,a as j}from"./table-column-e9063494.js";/* empty css                *//* empty css               */import{g as w,d as _,c as k,u as C,a as N}from"./authority-99505a6e.js";import V from"./menus-ee8e7b6e.js";import x from"./apis-6c410fb1.js";import E from"./datas-f767d580.js";import{W as A}from"./warningBar-33da73b9.js";import"./strings-4c3ca3f6.js";import"./_baseClone-427f7008.js";import"./_Uint8Array-e465cda2.js";import"./_initCloneObject-b8657ee7.js";import"./rand-099990c4.js";import"./isEqual-ba934af4.js";import"./arrays-2c626d3b.js";import"./cloneDeep-e46cbe90.js";import"./index-418e3d53.js";import"./index-8756bb1f.js";import"./tree-3d9c1f72.js";import"./index-e9538320.js";import"./authorityBtn-40a0a30b.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./api-554a576f.js";/* empty css             */const U={class:"authority"},z={class:"gva-table-box"},B={class:"gva-btn-list"},D={class:"dialog-footer"},q={name:"Authority"},S=Object.assign(q,{setup(q){const S=a([{authorityId:0,authorityName:"根角色"}]),F=a(!1),O=a("add"),R=a({}),$=a("新增角色"),P=a(!1),T=a(!1),W=a({}),K=a({authorityId:0,authorityName:"",parentId:0}),M=a({authorityId:[{required:!0,message:"请输入角色ID",trigger:"blur"},{validator:(a,e,t)=>/^[0-9]*[1-9][0-9]*$/.test(e)?t():t(new Error("请输入正整数")),trigger:"blur",message:"必须为正整数"}],authorityName:[{required:!0,message:"请输入角色名",trigger:"blur"}],parentId:[{required:!0,message:"请选择父角色",trigger:"blur"}]}),Q=a(1),Y=a(0),Z=a(999),G=a([]),H=a({}),J=async()=>{const a=await w({page:Q.value,pageSize:Z.value,...H.value});0===a.code&&(G.value=a.data.list,Y.value=a.data.total,Q.value=a.data.page,Z.value=a.data.pageSize)};J();const L=(a,e)=>{R.value[a]=e},X=a(null),aa=a(null),ea=a(null),ta=(a,e)=>{const t=[X,aa,ea];e&&t[e].value.needConfirm&&(t[e].value.enterAndNext(),t[e].value.needConfirm=!1)},la=a(null),oa=()=>{la.value&&la.value.resetFields(),K.value={authorityId:0,authorityName:"",parentId:0}},ra=()=>{oa(),P.value=!1,T.value=!1},ia=()=>{la.value.validate((async a=>{if(a){switch(K.value.authorityId=Number(K.value.authorityId),O.value){case"add":0===(await N(K.value)).code&&(n({type:"success",message:"添加成功!"}),J(),ra());break;case"edit":0===(await C(K.value)).code&&(n({type:"success",message:"添加成功!"}),J(),ra());break;case"copy":{const a={authority:{authorityId:0,authorityName:"",datauthorityId:[],parentId:0},oldAuthorityId:0};a.authority.authorityId=K.value.authorityId,a.authority.authorityName=K.value.authorityName,a.authority.parentId=K.value.parentId,a.authority.dataAuthorityId=W.value.dataAuthorityId,a.oldAuthorityId=W.value.authorityId;0===(await k(a)).code&&(n({type:"success",message:"复制成功！"}),J())}}oa(),P.value=!1}}))},ua=()=>{S.value=[{authorityId:0,authorityName:"根角色"}],da(G.value,S.value,!1)},da=(a,e,t)=>{K.value.authorityId=String(K.value.authorityId),a&&a.forEach((a=>{if(a.children&&a.children.length){const l={authorityId:a.authorityId,authorityName:a.authorityName,disabled:t||a.authorityId===K.value.authorityId,children:[]};da(a.children,l.children,t||a.authorityId===K.value.authorityId),e.push(l)}else{const l={authorityId:a.authorityId,authorityName:a.authorityName,disabled:t||a.authorityId===K.value.authorityId};e.push(l)}}))},sa=a=>{oa(),$.value="新增角色",O.value="add",K.value.parentId=a,ua(),P.value=!0};return(a,w)=>{const k=m,C=b,N=j,q=g,T=f,Y=p,Z=I,H=c,oa=h,da=v,na=y;return e(),t("div",U,[l(A,{title:"注：右上角头像下拉可切换角色"}),o("div",z,[o("div",B,[l(k,{type:"primary",icon:"plus",onClick:w[0]||(w[0]=a=>sa(0))},{default:r((()=>[i("新增角色")])),_:1})]),l(N,{data:G.value,"tree-props":{children:"children",hasChildren:"hasChildren"},"row-key":"authorityId",style:{width:"100%"}},{default:r((()=>[l(C,{label:"角色ID","min-width":"180",prop:"authorityId"}),l(C,{align:"left",label:"角色名称","min-width":"180",prop:"authorityName"}),l(C,{align:"left",label:"操作",width:"460"},{default:r((a=>[l(k,{icon:"setting",type:"primary",link:"",onClick:e=>{return t=a.row,F.value=!0,void(R.value=t);var t}},{default:r((()=>[i("设置权限")])),_:2},1032,["onClick"]),l(k,{icon:"plus",type:"primary",link:"",onClick:e=>sa(a.row.authorityId)},{default:r((()=>[i("新增子角色")])),_:2},1032,["onClick"]),l(k,{icon:"copy-document",type:"primary",link:"",onClick:e=>(a=>{ua(),$.value="拷贝角色",O.value="copy";for(const e in K.value)K.value[e]=a[e];W.value=a,P.value=!0})(a.row)},{default:r((()=>[i("拷贝")])),_:2},1032,["onClick"]),l(k,{icon:"edit",type:"primary",link:"",onClick:e=>(a=>{ua(),$.value="编辑角色",O.value="edit";for(const e in K.value)K.value[e]=a[e];ua(),P.value=!0})(a.row)},{default:r((()=>[i("编辑")])),_:2},1032,["onClick"]),l(k,{icon:"delete",type:"primary",link:"",onClick:e=>{return t=a.row,void s.confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await _({authorityId:t.authorityId})).code&&(n({type:"success",message:"删除成功!"}),1===G.value.length&&Q.value>1&&Q.value--,J())})).catch((()=>{n({type:"info",message:"已取消删除"})}));var t}},{default:r((()=>[i("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),l(H,{modelValue:P.value,"onUpdate:modelValue":w[4]||(w[4]=a=>P.value=a),title:$.value},{footer:r((()=>[o("div",D,[l(k,{onClick:ra},{default:r((()=>[i("取 消")])),_:1}),l(k,{type:"primary",onClick:ia},{default:r((()=>[i("确 定")])),_:1})])])),default:r((()=>[l(Z,{ref_key:"authorityForm",ref:la,model:K.value,rules:M.value,"label-width":"80px"},{default:r((()=>[l(T,{label:"父级角色",prop:"parentId"},{default:r((()=>[l(q,{modelValue:K.value.parentId,"onUpdate:modelValue":w[1]||(w[1]=a=>K.value.parentId=a),style:{width:"100%"},disabled:"add"===O.value,options:S.value,props:{checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])])),_:1}),l(T,{label:"角色ID",prop:"authorityId"},{default:r((()=>[l(Y,{modelValue:K.value.authorityId,"onUpdate:modelValue":w[2]||(w[2]=a=>K.value.authorityId=a),disabled:"edit"===O.value,autocomplete:"off",maxlength:"15"},null,8,["modelValue","disabled"])])),_:1}),l(T,{label:"角色姓名",prop:"authorityName"},{default:r((()=>[l(Y,{modelValue:K.value.authorityName,"onUpdate:modelValue":w[3]||(w[3]=a=>K.value.authorityName=a),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"]),F.value?(e(),u(na,{key:0,modelValue:F.value,"onUpdate:modelValue":w[5]||(w[5]=a=>F.value=a),"custom-class":"auth-drawer","with-header":!1,size:"40%",title:"角色配置"},{default:r((()=>[l(da,{"before-leave":ta,type:"border-card"},{default:r((()=>[l(oa,{label:"角色菜单"},{default:r((()=>[l(V,{ref_key:"menus",ref:X,row:R.value,onChangeRow:L},null,8,["row"])])),_:1}),l(oa,{label:"角色api"},{default:r((()=>[l(x,{ref_key:"apis",ref:aa,row:R.value,onChangeRow:L},null,8,["row"])])),_:1}),l(oa,{label:"资源权限"},{default:r((()=>[l(E,{ref_key:"datas",ref:ea,authority:G.value,row:R.value,onChangeRow:L},null,8,["authority","row"])])),_:1})])),_:1})])),_:1},8,["modelValue"])):d("",!0)])}}});export{S as default};
