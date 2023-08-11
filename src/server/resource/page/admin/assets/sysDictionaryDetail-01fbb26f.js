/*! 
 Build based on gin-vue-admin 
 Time : 1689257244000 */
import{s as e,ao as a,b2 as l,r as t,o as i,c as o,b as s,d as r,w as u,g as d,t as n,A as p,j as m,k as c,E as v}from"./index-c2e3c879.js";import{E as y}from"./dialog-ecbc8beb.js";import"./overlay-00b88249.js";import{E as f}from"./switch-96f4807c.js";import{E as b}from"./pagination-39e7c0fc.js";/* empty css              */import"./tag-670fab28.js";import{E as g,a as D}from"./select-2f885cd6.js";import"./scrollbar-fb423cb1.js";/* empty css               */import{E as j,a as h}from"./table-column-7526e107.js";import"./checkbox-29974445.js";/* empty css                */import{E as _}from"./popover-b1b738ea.js";import{a as w,E as V}from"./form-item-b1c403e0.js";/* empty css               */import{E as k}from"./input-number-18fa89d8.js";import{f as C,a as x}from"./format-798ac90e.js";import"./isEqual-1fdac1d7.js";import"./_Uint8Array-2c73f0ed.js";import"./index-85ffef8d.js";import"./index-85cf0f80.js";import"./strings-42b305d5.js";import"./_initCloneObject-b80ae579.js";import"./dropdown-4f3b3ce8.js";import"./_baseClone-342534f4.js";import"./index-e4a608dc.js";import"./date-225eaf4f.js";import"./dictionary-179a34b2.js";import"./sysDictionary-bbae9ca7.js";const U=a=>e({url:"/sysDictionaryDetail/createSysDictionaryDetail",method:"post",data:a}),E={class:"gva-search-box"},I={class:"gva-table-box"},S={class:"gva-btn-list"},z=s("p",null,"确定要删除吗？",-1),q={style:{"text-align":"right","margin-top":"8px"}},A={class:"gva-pagination"},N={class:"dialog-footer"},M={name:"SysDictionaryDetail"},O=Object.assign(M,{setup(M){const O=a();l((e=>{"dictionaryDetail"===e.name&&(W.value.sysDictionaryID=e.params.id,J())}));const F=t({label:null,value:null,status:!0,sort:null}),G=t({label:[{required:!0,message:"请输入展示值",trigger:"blur"}],value:[{required:!0,message:"请输入字典值",trigger:"blur"}],sort:[{required:!0,message:"排序标记",trigger:"blur"}]}),H=t(1),L=t(0),R=t(10),T=t([]),W=t({sysDictionaryID:Number(O.params.id)}),X=()=>{W.value={sysDictionaryID:Number(O.params.id)},J()},Y=()=>{H.value=1,R.value=10,""===W.value.status&&(W.value.status=null),J()},Z=e=>{R.value=e,J()},B=e=>{H.value=e,J()},J=async()=>{const a=await(l={page:H.value,pageSize:R.value,...W.value},e({url:"/sysDictionaryDetail/getSysDictionaryDetailList",method:"get",params:l}));var l;0===a.code&&(T.value=a.data.list,L.value=a.data.total,H.value=a.data.page,R.value=a.data.pageSize)};J();const K=t(""),P=t(!1),Q=async a=>{const l=await(t={ID:a.ID},e({url:"/sysDictionaryDetail/findSysDictionaryDetail",method:"get",params:t}));var t;K.value="update",0===l.code&&(F.value=l.data.reSysDictionaryDetail,P.value=!0)},$=()=>{P.value=!1,F.value={label:null,value:null,status:!0,sort:null,sysDictionaryID:""}},ee=async a=>{a.visible=!1;var l;0===(await(l={ID:a.ID},e({url:"/sysDictionaryDetail/deleteSysDictionaryDetail",method:"delete",data:l}))).code&&(m({type:"success",message:"删除成功"}),1===T.value.length&&H.value>1&&H.value--,J())},ae=t(null),le=async()=>{F.value.sysDictionaryID=Number(O.params.id),ae.value.validate((async a=>{if(!a)return;let l;switch(K.value){case"create":default:l=await U(F.value);break;case"update":l=await(t=F.value,e({url:"/sysDictionaryDetail/updateSysDictionaryDetail",method:"put",data:t}))}var t;0===l.code&&(m({type:"success",message:"创建/更改成功"}),$(),J())}))},te=()=>{K.value="create",P.value=!0};return(e,a)=>{const l=c,t=w,m=k,U=g,M=D,O=v,J=V,ie=j,oe=_,se=h,re=b,ue=f,de=y;return i(),o("div",null,[s("div",E,[r(J,{inline:!0,model:W.value},{default:u((()=>[r(t,{label:"展示值"},{default:u((()=>[r(l,{modelValue:W.value.label,"onUpdate:modelValue":a[0]||(a[0]=e=>W.value.label=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),r(t,{label:"字典值"},{default:u((()=>[r(m,{modelValue:W.value.value,"onUpdate:modelValue":a[1]||(a[1]=e=>W.value.value=e),placeholder:"搜索条件",min:"-2147483648",max:"2147483647"},null,8,["modelValue"])])),_:1}),r(t,{label:"启用状态",prop:"status"},{default:u((()=>[r(M,{modelValue:W.value.status,"onUpdate:modelValue":a[2]||(a[2]=e=>W.value.status=e),placeholder:"请选择"},{default:u((()=>[r(U,{key:"true",label:"是",value:"true"}),r(U,{key:"false",label:"否",value:"false"})])),_:1},8,["modelValue"])])),_:1}),r(t,null,{default:u((()=>[r(O,{type:"primary",icon:"search",onClick:Y},{default:u((()=>[d("查询")])),_:1}),r(O,{icon:"refresh",onClick:X},{default:u((()=>[d("重置")])),_:1})])),_:1})])),_:1},8,["model"])]),s("div",I,[s("div",S,[r(O,{type:"primary",icon:"plus",onClick:te},{default:u((()=>[d("新增字典项")])),_:1})]),r(se,{ref:"multipleTable",data:T.value,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID"},{default:u((()=>[r(ie,{type:"selection",width:"55"}),r(ie,{align:"left",label:"日期",width:"180"},{default:u((e=>[d(n(p(C)(e.row.CreatedAt)),1)])),_:1}),r(ie,{align:"left",label:"展示值",prop:"label",width:"120"}),r(ie,{align:"left",label:"字典值",prop:"value",width:"120"}),r(ie,{align:"left",label:"启用状态",prop:"status",width:"120"},{default:u((e=>[d(n(p(x)(e.row.status)),1)])),_:1}),r(ie,{align:"left",label:"排序标记",prop:"sort",width:"120"}),r(ie,{align:"left",label:"操作"},{default:u((e=>[r(O,{type:"primary",link:"",icon:"edit",onClick:a=>Q(e.row)},{default:u((()=>[d("变更")])),_:2},1032,["onClick"]),r(oe,{modelValue:e.row.visible,"onUpdate:modelValue":a=>e.row.visible=a,placement:"top",width:"160"},{reference:u((()=>[r(O,{type:"primary",link:"",icon:"delete",onClick:a=>e.row.visible=!0},{default:u((()=>[d("删除")])),_:2},1032,["onClick"])])),default:u((()=>[z,s("div",q,[r(O,{type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:u((()=>[d("取消")])),_:2},1032,["onClick"]),r(O,{type:"primary",onClick:a=>ee(e.row)},{default:u((()=>[d("确定")])),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"]),s("div",A,[r(re,{"current-page":H.value,"page-size":R.value,"page-sizes":[10,30,50,100],total:L.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:B,onSizeChange:Z},null,8,["current-page","page-size","total"])])]),r(de,{modelValue:P.value,"onUpdate:modelValue":a[7]||(a[7]=e=>P.value=e),"before-close":$,title:"create"===K.value?"添加字典项":"修改字典项"},{footer:u((()=>[s("div",N,[r(O,{onClick:$},{default:u((()=>[d("取 消")])),_:1}),r(O,{type:"primary",onClick:le},{default:u((()=>[d("确 定")])),_:1})])])),default:u((()=>[r(J,{ref_key:"dialogForm",ref:ae,model:F.value,rules:G.value,"label-width":"110px"},{default:u((()=>[r(t,{label:"展示值",prop:"label"},{default:u((()=>[r(l,{modelValue:F.value.label,"onUpdate:modelValue":a[3]||(a[3]=e=>F.value.label=e),placeholder:"请输入展示值",clearable:"",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),r(t,{label:"字典值",prop:"value"},{default:u((()=>[r(m,{modelValue:F.value.value,"onUpdate:modelValue":a[4]||(a[4]=e=>F.value.value=e),modelModifiers:{number:!0},"step-strictly":"",step:1,placeholder:"请输入字典值",clearable:"",style:{width:"100%"},min:"-2147483648",max:"2147483647"},null,8,["modelValue"])])),_:1}),r(t,{label:"启用状态",prop:"status",required:""},{default:u((()=>[r(ue,{modelValue:F.value.status,"onUpdate:modelValue":a[5]||(a[5]=e=>F.value.status=e),"active-text":"开启","inactive-text":"停用"},null,8,["modelValue"])])),_:1}),r(t,{label:"排序标记",prop:"sort"},{default:u((()=>[r(m,{modelValue:F.value.sort,"onUpdate:modelValue":a[6]||(a[6]=e=>F.value.sort=e),modelModifiers:{number:!0},placeholder:"排序标记"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}});export{O as default};
