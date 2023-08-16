/*! 
 Build based on gin-vue-admin 
 Time : 1692158479000 */
import{u as e,r as a,o as l,c as t,d as o,b as u,w as s,g as i,t as r,A as d,j as p,k as n,E as m}from"./index-1ff099df.js";import{E as c}from"./dialog-27068302.js";import"./overlay-0160766f.js";import{E as v}from"./switch-a5975bae.js";import{E as f}from"./pagination-40e94015.js";/* empty css              */import"./tag-f7a0800d.js";import{E as y,a as g}from"./select-21b1b8de.js";import"./scrollbar-9aa071ce.js";/* empty css               */import{E as b,a as j}from"./table-column-de7bf8d5.js";import"./checkbox-32fa63ce.js";/* empty css                */import{E as _}from"./popover-4d4e6fa2.js";import{a as w,E as V}from"./form-item-3e2d1b42.js";/* empty css               */import{g as h,f as k,d as C,c as x,u as U}from"./sysDictionary-dbc54da8.js";import{W as D}from"./warningBar-a170b7ef.js";import{f as E,a as z}from"./format-1d83b82c.js";import"./isEqual-b0b762c8.js";import"./_Uint8Array-afa07aaa.js";import"./index-28f59547.js";import"./index-1943bb03.js";import"./strings-fce2883a.js";import"./_initCloneObject-c8404b30.js";import"./dropdown-4a685a7d.js";import"./_baseClone-0cad53bf.js";/* empty css             */import"./_plugin-vue_export-helper-1b428a4d.js";import"./date-225eaf4f.js";import"./dictionary-b3e77898.js";const q={class:"gva-search-box"},I={class:"gva-table-box"},S={class:"gva-btn-list"},A=u("p",null,"确定要删除吗？",-1),O={style:{"text-align":"right","margin-top":"8px"}},W={class:"gva-pagination"},B={class:"dialog-footer"},F={name:"SysDictionary"},H=Object.assign(F,{setup(F){const H=e(),T=a({name:null,type:null,status:!0,desc:null}),X=a({name:[{required:!0,message:"请输入字典名（中）",trigger:"blur"}],type:[{required:!0,message:"请输入字典名（英）",trigger:"blur"}],desc:[{required:!0,message:"请输入描述",trigger:"blur"}]}),Y=a(1),Z=a(0),$=a(10),G=a([]),J=a({}),K=()=>{J.value={}},L=()=>{Y.value=1,$.value=10,""===J.value.status&&(J.value.status=null),P()},M=e=>{$.value=e,P()},N=e=>{Y.value=e,P()},P=async()=>{const e=await h({page:Y.value,pageSize:$.value,...J.value});0===e.code&&(G.value=e.data.list,Z.value=e.data.total,Y.value=e.data.page,$.value=e.data.pageSize)};P();const Q=a(!1),R=a(""),ee=()=>{Q.value=!1,T.value={name:null,type:null,status:!0,desc:null}},ae=a(null),le=async()=>{ae.value.validate((async e=>{if(!e)return;let a;switch(R.value){case"create":default:a=await x(T.value);break;case"update":a=await U(T.value)}0===a.code&&(p.success("操作成功"),ee(),P())}))},te=()=>{R.value="create",Q.value=!0};return(e,a)=>{const h=n,x=w,U=y,F=g,oe=m,ue=V,se=b,ie=_,re=j,de=f,pe=v,ne=c;return l(),t("div",null,[o(D,{title:"获取字典且缓存方法已在前端utils/dictionary 已经封装完成 不必自己书写 使用方法查看文件内注释"}),u("div",q,[o(ue,{inline:!0,model:J.value},{default:s((()=>[o(x,{label:"字典名（中）"},{default:s((()=>[o(h,{modelValue:J.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>J.value.name=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),o(x,{label:"字典名（英）"},{default:s((()=>[o(h,{modelValue:J.value.type,"onUpdate:modelValue":a[1]||(a[1]=e=>J.value.type=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),o(x,{label:"状态",prop:"status"},{default:s((()=>[o(F,{modelValue:J.value.status,"onUpdate:modelValue":a[2]||(a[2]=e=>J.value.status=e),clear:"",placeholder:"请选择"},{default:s((()=>[o(U,{key:"true",label:"是",value:"true"}),o(U,{key:"false",label:"否",value:"false"})])),_:1},8,["modelValue"])])),_:1}),o(x,{label:"描述"},{default:s((()=>[o(h,{modelValue:J.value.desc,"onUpdate:modelValue":a[3]||(a[3]=e=>J.value.desc=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),o(x,null,{default:s((()=>[o(oe,{type:"primary",icon:"search",onClick:L},{default:s((()=>[i("查询")])),_:1}),o(oe,{icon:"refresh",onClick:K},{default:s((()=>[i("重置")])),_:1})])),_:1})])),_:1},8,["model"])]),u("div",I,[u("div",S,[o(oe,{type:"primary",icon:"plus",onClick:te},{default:s((()=>[i("新增")])),_:1})]),o(re,{ref:"multipleTable",data:G.value,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID"},{default:s((()=>[o(se,{type:"selection",width:"55"}),o(se,{align:"left",label:"日期",width:"180"},{default:s((e=>[i(r(d(E)(e.row.CreatedAt)),1)])),_:1}),o(se,{align:"left",label:"字典名（中）",prop:"name",width:"160"}),o(se,{align:"left",label:"字典名（英）",prop:"type",width:"120"}),o(se,{align:"left",label:"状态",prop:"status",width:"120"},{default:s((e=>[i(r(d(z)(e.row.status)),1)])),_:1}),o(se,{align:"left",label:"描述",prop:"desc",width:"280"}),o(se,{align:"left",label:"操作"},{default:s((e=>[o(oe,{icon:"document",type:"primary",link:"",onClick:a=>{return l=e.row,void H.push({name:"dictionaryDetail",params:{id:l.ID}});var l}},{default:s((()=>[i("详情")])),_:2},1032,["onClick"]),o(oe,{icon:"edit",type:"primary",link:"",onClick:a=>(async e=>{const a=await k({ID:e.ID,status:e.status});R.value="update",0===a.code&&(T.value=a.data.resysDictionary,Q.value=!0)})(e.row)},{default:s((()=>[i("变更")])),_:2},1032,["onClick"]),o(ie,{modelValue:e.row.visible,"onUpdate:modelValue":a=>e.row.visible=a,placement:"top",width:"160"},{reference:s((()=>[o(oe,{type:"primary",link:"",icon:"delete",style:{"margin-left":"10px"},onClick:a=>e.row.visible=!0},{default:s((()=>[i("删除")])),_:2},1032,["onClick"])])),default:s((()=>[A,u("div",O,[o(oe,{type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:s((()=>[i("取消")])),_:2},1032,["onClick"]),o(oe,{type:"primary",onClick:a=>(async e=>{e.visible=!1,0===(await C({ID:e.ID})).code&&(p({type:"success",message:"删除成功"}),1===G.value.length&&Y.value>1&&Y.value--,P())})(e.row)},{default:s((()=>[i("确定")])),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"]),u("div",W,[o(de,{"current-page":Y.value,"page-size":$.value,"page-sizes":[10,30,50,100],total:Z.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:N,onSizeChange:M},null,8,["current-page","page-size","total"])])]),o(ne,{modelValue:Q.value,"onUpdate:modelValue":a[8]||(a[8]=e=>Q.value=e),"before-close":ee,title:"create"===R.value?"添加字典":"修改字典"},{footer:s((()=>[u("div",B,[o(oe,{onClick:ee},{default:s((()=>[i("取 消")])),_:1}),o(oe,{type:"primary",onClick:le},{default:s((()=>[i("确 定")])),_:1})])])),default:s((()=>[o(ue,{ref_key:"dialogForm",ref:ae,model:T.value,rules:X.value,"label-width":"110px"},{default:s((()=>[o(x,{label:"字典名（中）",prop:"name"},{default:s((()=>[o(h,{modelValue:T.value.name,"onUpdate:modelValue":a[4]||(a[4]=e=>T.value.name=e),placeholder:"请输入字典名（中）",clearable:"",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),o(x,{label:"字典名（英）",prop:"type"},{default:s((()=>[o(h,{modelValue:T.value.type,"onUpdate:modelValue":a[5]||(a[5]=e=>T.value.type=e),placeholder:"请输入字典名（英）",clearable:"",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),o(x,{label:"状态",prop:"status",required:""},{default:s((()=>[o(pe,{modelValue:T.value.status,"onUpdate:modelValue":a[6]||(a[6]=e=>T.value.status=e),"active-text":"开启","inactive-text":"停用"},null,8,["modelValue"])])),_:1}),o(x,{label:"描述",prop:"desc"},{default:s((()=>[o(h,{modelValue:T.value.desc,"onUpdate:modelValue":a[7]||(a[7]=e=>T.value.desc=e),placeholder:"请输入描述",clearable:"",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}});export{H as default};
