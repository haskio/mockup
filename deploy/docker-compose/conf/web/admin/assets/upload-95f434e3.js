/*! 
 Build based on gin-vue-admin 
 Time : 1692158479000 */
import{r as a,V as e,o as t,c as l,b as o,d as i,w as s,g as n,t as r,A as p,$ as m,j as u,k as c,E as d,a0 as g}from"./index-1ff099df.js";/* empty css                */import{E as f}from"./pagination-40e94015.js";/* empty css              */import"./tag-f7a0800d.js";import"./select-21b1b8de.js";import"./scrollbar-9aa071ce.js";/* empty css               */import{E as v,a as j}from"./table-column-de7bf8d5.js";import"./checkbox-32fa63ce.js";/* empty css                */import{a as h,E as w}from"./form-item-3e2d1b42.js";/* empty css               */import{_ as y,U as b,g as _,d as x,e as C}from"./common-c73c2dea.js";import{C as k}from"./index-1e25b822.js";import{f as U}from"./format-1d83b82c.js";import{W as E}from"./warningBar-a170b7ef.js";import{_ as z}from"./_plugin-vue_export-helper-1b428a4d.js";import{E as O}from"./index-1943bb03.js";import"./isEqual-b0b762c8.js";import"./_Uint8Array-afa07aaa.js";import"./index-28f59547.js";import"./strings-fce2883a.js";import"./_initCloneObject-c8404b30.js";import"./_baseClone-0cad53bf.js";/* empty css               *//* empty css                 */import"./image-81157f0c.js";import"./index-7d53cbc8.js";import"./index-37169e48.js";import"./cloneDeep-95d444f8.js";import"./date-225eaf4f.js";import"./dictionary-b3e77898.js";import"./sysDictionary-dbc54da8.js";/* empty css             */const S=(a,e)=>{var t=new Image;t.setAttribute("crossOrigin","anonymous"),t.onload=function(){var a=document.createElement("canvas");a.width=t.width,a.height=t.height,a.getContext("2d").drawImage(t,0,0,t.width,t.height);var l=a.toDataURL("image/png"),o=document.createElement("a"),i=new MouseEvent("click");o.download=e||"photo",o.href=l,o.dispatchEvent(i)},t.src=a},V={class:"gva-table-box"},A={class:"gva-btn-list"},B=["onClick"],T={class:"gva-pagination"},D={name:"Upload"},I=z(Object.assign(D,{setup(z){const D=a(""),I=a(""),q=a(""),L=a(1),M=a(0),W=a(10),$=a({}),F=a([]),P=a=>{W.value=a,X()},R=a=>{L.value=a,X()},X=async()=>{const a=await _({page:L.value,pageSize:W.value,...$.value});0===a.code&&(F.value=a.data.list,M.value=a.data.total,L.value=a.data.page,W.value=a.data.pageSize)};X();return(a,_)=>{const z=c,Y=h,Z=d,G=w,H=v,J=O,K=j,N=f,Q=g;return e((t(),l("div",null,[o("div",V,[i(E,{title:"点击“文件名/备注”可以编辑文件名或者备注内容。"}),o("div",A,[i(y,{imageCommon:q.value,"onUpdate:imageCommon":_[0]||(_[0]=a=>q.value=a),class:"upload-btn",onOnSuccess:X},null,8,["imageCommon"]),i(b,{imageUrl:I.value,"onUpdate:imageUrl":_[1]||(_[1]=a=>I.value=a),"file-size":512,"max-w-h":1080,class:"upload-btn",onOnSuccess:X},null,8,["imageUrl"]),i(G,{ref:"searchForm",inline:!0,model:$.value},{default:s((()=>[i(Y,{label:""},{default:s((()=>[i(z,{modelValue:$.value.keyword,"onUpdate:modelValue":_[2]||(_[2]=a=>$.value.keyword=a),class:"keyword",placeholder:"请输入文件名或备注"},null,8,["modelValue"])])),_:1}),i(Y,null,{default:s((()=>[i(Z,{type:"primary",icon:"search",onClick:X},{default:s((()=>[n("查询")])),_:1})])),_:1})])),_:1},8,["model"])]),i(K,{data:F.value},{default:s((()=>[i(H,{align:"left",label:"预览",width:"100"},{default:s((a=>[i(k,{"pic-type":"file","pic-src":a.row.url},null,8,["pic-src"])])),_:1}),i(H,{align:"left",label:"日期",prop:"UpdatedAt",width:"180"},{default:s((a=>[o("div",null,r(p(U)(a.row.UpdatedAt)),1)])),_:1}),i(H,{align:"left",label:"文件名/备注",prop:"name",width:"180"},{default:s((a=>[o("div",{class:"name",onClick:e=>(async a=>{m.prompt("请输入文件名或者备注","编辑",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"不能为空",inputValue:a.name}).then((async({value:e})=>{a.name=e,0===(await C(a)).code&&(u({type:"success",message:"编辑成功!"}),X())})).catch((()=>{u({type:"info",message:"取消修改"})}))})(a.row)},r(a.row.name),9,B)])),_:1}),i(H,{align:"left",label:"链接",prop:"url","min-width":"300"}),i(H,{align:"left",label:"标签",prop:"tag",width:"100"},{default:s((a=>[i(J,{type:"jpg"===a.row.tag?"primary":"success","disable-transitions":""},{default:s((()=>[n(r(a.row.tag),1)])),_:2},1032,["type"])])),_:1}),i(H,{align:"left",label:"操作",width:"160"},{default:s((a=>[i(Z,{icon:"download",type:"primary",link:"",onClick:e=>{var t;(t=a.row).url.indexOf("http://")>-1||t.url.indexOf("https://")>-1?S(t.url,t.name):S(D.value+"/"+t.url,t.name)}},{default:s((()=>[n("下载")])),_:2},1032,["onClick"]),i(Z,{icon:"delete",type:"primary",link:"",onClick:e=>(async a=>{m.confirm("此操作将永久删除文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await x(a)).code&&(u({type:"success",message:"删除成功!"}),1===F.value.length&&L.value>1&&L.value--,X())})).catch((()=>{u({type:"info",message:"已取消删除"})}))})(a.row)},{default:s((()=>[n("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),o("div",T,[i(N,{"current-page":L.value,"page-size":W.value,"page-sizes":[10,30,50,100],style:{float:"right",padding:"20px"},total:M.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:R,onSizeChange:P},null,8,["current-page","page-size","total"])])])])),[[Q,a.fullscreenLoading,void 0,{fullscreen:!0,lock:!0}]])}}}),[["__scopeId","data-v-caa96911"]]);export{I as default};