/*! 
 Build based on gin-vue-admin 
 Time : 1689257244000 */
import{r as e,o as a,h as l,w as t,d as o,b as i,g as r,c as s,J as u,K as d,A as n,t as m,$ as p,j as c,k as v,E as g,N as h,T as y,e as f,d1 as b,d2 as w,d3 as I,d4 as j,d5 as k,Q as V,d6 as _}from"./index-c2e3c879.js";import{E as x}from"./dialog-ecbc8beb.js";import"./overlay-00b88249.js";import{a as C,E as U}from"./form-item-b1c403e0.js";/* empty css              */import{E as N}from"./pagination-39e7c0fc.js";import"./tag-670fab28.js";import"./select-2f885cd6.js";import"./scrollbar-fb423cb1.js";/* empty css               */import{E as z,a as S}from"./table-column-7526e107.js";import"./checkbox-29974445.js";/* empty css                */import{E}from"./popover-b1b738ea.js";import{E as D}from"./switch-96f4807c.js";import{E as O}from"./radio-b37db974.js";/* empty css               */import{g as T}from"./authority-cfa77076.js";import{C as J}from"./index-7f1ba68a.js";import{E as q}from"./drawer-04671c44.js";import{E as B}from"./image-viewer-1ad4af1b.js";/* empty css             */import{g as F}from"./image-39f3071b.js";import{_ as $,U as A,g as K,e as P}from"./common-2aed2ce3.js";import{W as M}from"./warningBar-8be6ee2f.js";import"./_baseClone-342534f4.js";import"./_Uint8Array-2c73f0ed.js";import"./_initCloneObject-b80ae579.js";import"./isEqual-1fdac1d7.js";import"./index-85ffef8d.js";import"./index-85cf0f80.js";import"./strings-42b305d5.js";import"./dropdown-4f3b3ce8.js";import"./rand-099990c4.js";import"./arrays-2c626d3b.js";import"./cloneDeep-98e83b3f.js";import"./_plugin-vue_export-helper-1b428a4d.js";/* empty css               *//* empty css                 */import"./index-3a797238.js";import"./index-a635a24a.js";const R={class:"gva-btn-list"},W={class:"media"},Z={class:"header-img-box-list"},H={class:"header-img-box-list"},Q=i("picture",null,null,-1),X=["onClick"],Y={__name:"index",props:{target:{type:Object,default:null},targetKey:{type:String,default:""}},emits:["enterImg"],setup(y,{expose:f,emit:b}){const w=e(""),I=e(""),j=e({}),k=e(1),V=e(0),_=e(20),x=e=>{_.value=e,D()},z=e=>{k.value=e,D()},S=e(!1),E=e([]),D=async()=>{const e=await K({page:k.value,pageSize:_.value,...j.value});0===e.code&&(E.value=e.data.list,V.value=e.data.total,k.value=e.data.page,_.value=e.data.pageSize,S.value=!0)};return f({open:D}),(e,f)=>{const O=v,T=C,J=g,K=U,Y=h,G=B,L=N,ee=q;return a(),l(ee,{modelValue:S.value,"onUpdate:modelValue":f[3]||(f[3]=e=>S.value=e),title:"媒体库",size:"650px"},{default:t((()=>[o(M,{title:"点击“文件名/备注”可以编辑文件名或者备注内容。"}),i("div",R,[o($,{imageCommon:I.value,"onUpdate:imageCommon":f[0]||(f[0]=e=>I.value=e),class:"upload-btn-media-library",onOnSuccess:D},null,8,["imageCommon"]),o(A,{imageUrl:w.value,"onUpdate:imageUrl":f[1]||(f[1]=e=>w.value=e),"file-size":512,"max-w-h":1080,class:"upload-btn-media-library",onOnSuccess:D},null,8,["imageUrl"]),o(K,{ref:"searchForm",inline:!0,model:j.value},{default:t((()=>[o(T,{label:""},{default:t((()=>[o(O,{modelValue:j.value.keyword,"onUpdate:modelValue":f[2]||(f[2]=e=>j.value.keyword=e),class:"keyword",placeholder:"请输入文件名或备注"},null,8,["modelValue"])])),_:1}),o(T,null,{default:t((()=>[o(J,{type:"primary",icon:"search",onClick:D},{default:t((()=>[r("查询")])),_:1})])),_:1})])),_:1},8,["model"])]),i("div",W,[(a(!0),s(u,null,d(E.value,((e,r)=>(a(),s("div",{key:r,class:"media-box"},[i("div",Z,[(a(),l(G,{key:r,src:n(F)(e.url),onClick:a=>{return l=e.url,t=y.target,o=y.targetKey,t&&o&&(t[o]=l),b("enterImg",l),void(S.value=!1);var l,t,o}},{error:t((()=>[i("div",H,[o(Y,null,{default:t((()=>[Q])),_:1})])])),_:2},1032,["src","onClick"]))]),i("div",{class:"img-title",onClick:a=>(async e=>{p.prompt("请输入文件名或者备注","编辑",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"不能为空",inputValue:e.name}).then((async({value:a})=>{e.name=a,0===(await P(e)).code&&(c({type:"success",message:"编辑成功!"}),D())})).catch((()=>{c({type:"info",message:"取消修改"})}))})(e)},m(e.name),9,X)])))),128))]),o(L,{"current-page":k.value,"page-size":_.value,total:V.value,style:{"justify-content":"center"},layout:"total, prev, pager, next, jumper",onCurrentChange:z,onSizeChange:x},null,8,["current-page","page-size","total"])])),_:1},8,["modelValue"])}}},G={class:"gva-table-box"},L={class:"gva-btn-list"},ee=i("p",null,"确定要删除此用户吗",-1),ae={style:{"text-align":"right","margin-top":"8px"}},le={class:"gva-pagination"},te={style:{height:"60vh",overflow:"auto",padding:"0 12px"}},oe=["src"],ie={key:1,class:"header-img-box"},re={class:"dialog-footer"},se={name:"User"},ue=Object.assign(se,{setup(u){const d=e("/api/"),n=(e,a)=>{e&&e.forEach((e=>{if(e.children&&e.children.length){const l={authorityId:e.authorityId,authorityName:e.authorityName,children:[]};n(e.children,l.children),a.push(l)}else{const l={authorityId:e.authorityId,authorityName:e.authorityName};a.push(l)}}))},m=e(1),h=e(0),q=e(10),B=e([]),F=e=>{q.value=e,A()},$=e=>{m.value=e,A()},A=async()=>{const e=await b({page:m.value,pageSize:q.value});0===e.code&&(B.value=e.data.list,h.value=e.data.total,m.value=e.data.page,q.value=e.data.pageSize)};y((()=>B.value),(()=>{K()}));(async()=>{A();const e=await T({page:1,pageSize:999});Z(e.data.list)})();const K=()=>{B.value&&B.value.forEach((e=>{e.authorityIds=e.authorities&&e.authorities.map((e=>e.authorityId))}))},P=e(null),R=()=>{P.value.open()},W=e([]),Z=e=>{W.value=[],n(e,W.value)},H=e({username:"",password:"",nickName:"",headerImg:"",authorityId:"",authorityIds:[],enable:1}),Q=e({userName:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,message:"最低5位字符",trigger:"blur"}],password:[{required:!0,message:"请输入用户密码",trigger:"blur"},{min:6,message:"最低6位字符",trigger:"blur"}],nickName:[{required:!0,message:"请输入用户昵称",trigger:"blur"}],phone:[{pattern:/^1([38][0-9]|4[014-9]|[59][0-35-9]|6[2567]|7[0-8])\d{8}$/,message:"请输入合法手机号",trigger:"blur"}],email:[{pattern:/^([0-9A-Za-z\-_.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g,message:"请输入正确的邮箱",trigger:"blur"}],authorityId:[{required:!0,message:"请选择用户角色",trigger:"blur"}]}),X=e(null),se=async()=>{H.value.authorityId=H.value.authorityIds[0],X.value.validate((async e=>{if(e){const e={...H.value};if("add"===ne.value){0===(await j(e)).code&&(c({type:"success",message:"创建成功"}),await A(),de())}if("edit"===ne.value){0===(await k(e)).code&&(c({type:"success",message:"编辑成功"}),await A(),de())}}}))},ue=e(!1),de=()=>{X.value.resetFields(),H.value.headerImg="",H.value.authorityIds=[],ue.value=!1},ne=e("add"),me=()=>{ne.value="add",ue.value=!0},pe={},ce=async(e,a,l)=>{if(a)return void(l||(pe[e.ID]=[...e.authorityIds]));await V();0===(await _({ID:e.ID,authorityIds:e.authorityIds})).code?c({type:"success",message:"角色设置成功"}):l?e.authorityIds=[l,...e.authorityIds]:(e.authorityIds=[...pe[e.ID]],delete pe[e.ID])};return(e,u)=>{const n=g,y=z,b=O,j=D,_=E,T=S,K=N,Z=v,pe=C,ve=U,ge=x;return a(),s("div",null,[o(M,{title:"注：右上角头像下拉可切换角色"}),i("div",G,[i("div",L,[o(n,{type:"primary",icon:"plus",onClick:me},{default:t((()=>[r("新增用户")])),_:1})]),o(T,{data:B.value,"row-key":"ID"},{default:t((()=>[o(y,{align:"left",label:"头像","min-width":"75"},{default:t((e=>[o(J,{style:{"margin-top":"8px"},"pic-src":e.row.headerImg},null,8,["pic-src"])])),_:1}),o(y,{align:"left",label:"ID","min-width":"50",prop:"ID"}),o(y,{align:"left",label:"用户名","min-width":"150",prop:"userName"}),o(y,{align:"left",label:"昵称","min-width":"150",prop:"nickName"}),o(y,{align:"left",label:"手机号","min-width":"180",prop:"phone"}),o(y,{align:"left",label:"邮箱","min-width":"180",prop:"email"}),o(y,{align:"left",label:"用户角色","min-width":"200"},{default:t((e=>[o(b,{modelValue:e.row.authorityIds,"onUpdate:modelValue":a=>e.row.authorityIds=a,options:W.value,"show-all-levels":!1,"collapse-tags":"",props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1,onVisibleChange:a=>{ce(e.row,a,0)},onRemoveTag:a=>{ce(e.row,!1,a)}},null,8,["modelValue","onUpdate:modelValue","options","onVisibleChange","onRemoveTag"])])),_:1}),o(y,{align:"left",label:"启用","min-width":"150"},{default:t((e=>[o(j,{modelValue:e.row.enable,"onUpdate:modelValue":a=>e.row.enable=a,"inline-prompt":"","active-value":1,"inactive-value":2,onChange:()=>{(async e=>{H.value=JSON.parse(JSON.stringify(e)),await V();const a={...H.value};0===(await k(a)).code&&(c({type:"success",message:(2===a.enable?"禁用":"启用")+"成功"}),await A(),H.value.headerImg="",H.value.authorityIds=[])})(e.row)}},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),o(y,{label:"操作","min-width":"250",fixed:"right"},{default:t((e=>[o(_,{modelValue:e.row.visible,"onUpdate:modelValue":a=>e.row.visible=a,placement:"top",width:"160"},{reference:t((()=>[o(n,{type:"primary",link:"",icon:"delete"},{default:t((()=>[r("删除")])),_:1})])),default:t((()=>[ee,i("div",ae,[o(n,{type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:t((()=>[r("取消")])),_:2},1032,["onClick"]),o(n,{type:"primary",onClick:a=>(async e=>{0===(await I({id:e.ID})).code&&(c.success("删除成功"),e.visible=!1,await A())})(e.row)},{default:t((()=>[r("确定")])),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"]),o(n,{type:"primary",link:"",icon:"edit",onClick:a=>{return l=e.row,ne.value="edit",H.value=JSON.parse(JSON.stringify(l)),void(ue.value=!0);var l}},{default:t((()=>[r("编辑")])),_:2},1032,["onClick"]),o(n,{type:"primary",link:"",icon:"magic-stick",onClick:a=>{return l=e.row,void p.confirm("是否将此用户密码重置为123456?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{const e=await w({ID:l.ID});0===e.code?c({type:"success",message:e.msg}):c({type:"error",message:e.msg})}));var l}},{default:t((()=>[r("重置密码")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),i("div",le,[o(K,{"current-page":m.value,"page-size":q.value,"page-sizes":[10,30,50,100],total:h.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:$,onSizeChange:F},null,8,["current-page","page-size","total"])])]),o(ge,{modelValue:ue.value,"onUpdate:modelValue":u[7]||(u[7]=e=>ue.value=e),"custom-class":"user-dialog",title:"用户","show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{footer:t((()=>[i("div",re,[o(n,{onClick:de},{default:t((()=>[r("取 消")])),_:1}),o(n,{type:"primary",onClick:se},{default:t((()=>[r("确 定")])),_:1})])])),default:t((()=>[i("div",te,[o(ve,{ref_key:"userForm",ref:X,rules:Q.value,model:H.value,"label-width":"80px"},{default:t((()=>["add"===ne.value?(a(),l(pe,{key:0,label:"用户名",prop:"userName"},{default:t((()=>[o(Z,{modelValue:H.value.userName,"onUpdate:modelValue":u[0]||(u[0]=e=>H.value.userName=e)},null,8,["modelValue"])])),_:1})):f("",!0),"add"===ne.value?(a(),l(pe,{key:1,label:"密码",prop:"password"},{default:t((()=>[o(Z,{modelValue:H.value.password,"onUpdate:modelValue":u[1]||(u[1]=e=>H.value.password=e)},null,8,["modelValue"])])),_:1})):f("",!0),o(pe,{label:"昵称",prop:"nickName"},{default:t((()=>[o(Z,{modelValue:H.value.nickName,"onUpdate:modelValue":u[2]||(u[2]=e=>H.value.nickName=e)},null,8,["modelValue"])])),_:1}),o(pe,{label:"手机号",prop:"phone"},{default:t((()=>[o(Z,{modelValue:H.value.phone,"onUpdate:modelValue":u[3]||(u[3]=e=>H.value.phone=e)},null,8,["modelValue"])])),_:1}),o(pe,{label:"邮箱",prop:"email"},{default:t((()=>[o(Z,{modelValue:H.value.email,"onUpdate:modelValue":u[4]||(u[4]=e=>H.value.email=e)},null,8,["modelValue"])])),_:1}),o(pe,{label:"用户角色",prop:"authorityId"},{default:t((()=>[o(b,{modelValue:H.value.authorityIds,"onUpdate:modelValue":u[5]||(u[5]=e=>H.value.authorityIds=e),style:{width:"100%"},options:W.value,"show-all-levels":!1,props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1},null,8,["modelValue","options"])])),_:1}),o(pe,{label:"启用",prop:"disabled"},{default:t((()=>[o(j,{modelValue:H.value.enable,"onUpdate:modelValue":u[6]||(u[6]=e=>H.value.enable=e),"inline-prompt":"","active-value":1,"inactive-value":2},null,8,["modelValue"])])),_:1}),o(pe,{label:"头像","label-width":"80px"},{default:t((()=>[i("div",{style:{display:"inline-block"},onClick:R},[H.value.headerImg?(a(),s("img",{key:0,alt:"头像",class:"header-img-box",src:H.value.headerImg&&"http"!==H.value.headerImg.slice(0,4)?d.value+H.value.headerImg:H.value.headerImg},null,8,oe)):(a(),s("div",ie,"从媒体库选择"))])])),_:1})])),_:1},8,["rules","model"])])])),_:1},8,["modelValue"]),o(Y,{ref_key:"chooseImg",ref:P,target:H.value,"target-key":"headerImg"},null,8,["target"])])}}});export{ue as default};