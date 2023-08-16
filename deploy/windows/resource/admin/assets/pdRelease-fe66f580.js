/*! 
 Build based on gin-vue-admin 
 Time : 1691990628000 */
import{x as e,a4 as l,b2 as t,F as a,y as o,aA as n,aJ as s,B as i,A as r,o as u,c as d,b as c,J as p,K as m,h as v,d as f,_ as g,aO as b,ag as y,a7 as h,a2 as k,D as _,n as w,G as C,g as j,t as V,e as x,aG as S,I,a6 as D,a as E,T as A,P as N,b3 as F,b4 as T,af as z,r as U,l as O,w as R,j as P,E as q,an as M,b5 as L,V as B,W as H,$ as W,k as $}from"./index-55b51a59.js";import{E as G}from"./dialog-5b54abb9.js";import"./overlay-24c5ecb4.js";import{a as J,E as X}from"./form-item-68c1b6c2.js";/* empty css              */import{E as K}from"./pagination-ac61a556.js";import"./tag-4b0d6238.js";import"./select-fcf2e2fa.js";import"./scrollbar-9d29af78.js";/* empty css               */import{E as Y,a as Z}from"./table-column-a5359882.js";import"./checkbox-665ffa55.js";/* empty css                */import{E as Q}from"./popover-68f8fe21.js";import{E as ee}from"./card-b257da5c.js";/* empty css               */import{E as le}from"./switch-2a91b686.js";import{f as te,u as ae}from"./pdMock-046b213f.js";import{g as oe,d as ne,f as se,a as ie,c as re,u as ue}from"./pdRelease-c111c759.js";import{g as de}from"./image-81157f0c.js";/* empty css               *//* empty css                 */import{E as ce}from"./index-0bb40b90.js";import{f as pe}from"./format-3e7529c4.js";import"./_baseClone-7c51875e.js";import"./_Uint8Array-c958d774.js";import"./_initCloneObject-11c71fb8.js";import"./isEqual-201a2fd8.js";import"./index-a9b8d526.js";import"./index-78c734bf.js";import"./strings-2efbda10.js";import"./dropdown-d6a97327.js";import"./index-743c5db2.js";import"./cloneDeep-fd3e5ee2.js";import"./date-225eaf4f.js";import"./dictionary-b1774f74.js";import"./sysDictionary-f8e62231.js";const me=Symbol("elDescriptions");var ve=e({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String},type:{type:String}},setup:()=>({descriptions:l(me,{})}),render(){var e,l,i,r,u,d;const c=t(this.cell),{border:p,direction:m}=this.descriptions,v="vertical"===m,f=(null==(i=null==(l=null==(e=this.cell)?void 0:e.children)?void 0:l.label)?void 0:i.call(l))||c.label,g=null==(d=null==(u=null==(r=this.cell)?void 0:r.children)?void 0:u.default)?void 0:d.call(u),b=c.span,y=c.align?"is-".concat(c.align):"",h=c.labelAlign?"is-".concat(c.labelAlign):y,k=c.className,_=c.labelClassName,w={width:a(c.width),minWidth:a(c.minWidth)},C=o("descriptions");switch(this.type){case"label":return n(this.tag,{style:w,class:[C.e("cell"),C.e("label"),C.is("bordered-label",p),C.is("vertical-label",v),h,_],colSpan:v?b:1},f);case"content":return n(this.tag,{style:w,class:[C.e("cell"),C.e("content"),C.is("bordered-content",p),C.is("vertical-content",v),y,k],colSpan:v?b:2*b-1},g);default:return n("td",{style:w,class:[C.e("cell"),y],colSpan:b},[s(f)?void 0:n("span",{class:[C.e("label"),_]},f),n("span",{class:[C.e("content"),k]},g)])}}});const fe=i({row:{type:Array,default:()=>[]}}),ge={key:1},be=e({name:"ElDescriptionsRow"});var ye=g(e({...be,props:fe,setup(e){const t=l(me,{});return(e,l)=>"vertical"===r(t).direction?(u(),d(p,{key:0},[c("tr",null,[(u(!0),d(p,null,m(e.row,((e,l)=>(u(),v(r(ve),{key:"tr1-".concat(l),cell:e,tag:"th",type:"label"},null,8,["cell"])))),128))]),c("tr",null,[(u(!0),d(p,null,m(e.row,((e,l)=>(u(),v(r(ve),{key:"tr2-".concat(l),cell:e,tag:"td",type:"content"},null,8,["cell"])))),128))])],64)):(u(),d("tr",ge,[(u(!0),d(p,null,m(e.row,((e,l)=>(u(),d(p,{key:"tr3-".concat(l)},[r(t).border?(u(),d(p,{key:0},[f(r(ve),{cell:e,tag:"td",type:"label"},null,8,["cell"]),f(r(ve),{cell:e,tag:"td",type:"content"},null,8,["cell"])],64)):(u(),v(r(ve),{key:1,cell:e,tag:"td",type:"both"},null,8,["cell"]))],64)))),128))]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);const he=i({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:b,title:{type:String,default:""},extra:{type:String,default:""}}),ke=e({name:"ElDescriptions"});var _e=g(e({...ke,props:he,setup(e){const l=e,t=o("descriptions"),a=y(),n=h();k(me,l);const s=_((()=>[t.b(),t.m(a.value)])),i=(e,l,t,a=!1)=>(e.props||(e.props={}),l>t&&(e.props.span=t),a&&(e.props.span=l),e),f=()=>{var e;const t=S(null==(e=n.default)?void 0:e.call(n)).filter((e=>{var l;return"ElDescriptionsItem"===(null==(l=null==e?void 0:e.type)?void 0:l.name)})),a=[];let o=[],s=l.column,r=0;return t.forEach(((e,n)=>{var u;const d=(null==(u=e.props)?void 0:u.span)||1;if(n<t.length-1&&(r+=d>s?s:d),n===t.length-1){const t=l.column-r%l.column;return o.push(i(e,t,s,!0)),void a.push(o)}d<s?(s-=d,o.push(e)):(o.push(i(e,d,s)),a.push(o),s=l.column,o=[])})),a};return(e,l)=>(u(),d("div",{class:w(r(s))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(u(),d("div",{key:0,class:w(r(t).e("header"))},[c("div",{class:w(r(t).e("title"))},[C(e.$slots,"title",{},(()=>[j(V(e.title),1)]))],2),c("div",{class:w(r(t).e("extra"))},[C(e.$slots,"extra",{},(()=>[j(V(e.extra),1)]))],2)],2)):x("v-if",!0),c("div",{class:w(r(t).e("body"))},[c("table",{class:w([r(t).e("table"),r(t).is("bordered",e.border)])},[c("tbody",null,[(u(!0),d(p,null,m(f(),((e,l)=>(u(),v(ye,{key:l,row:e},null,8,["row"])))),128))])],2)],2)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/description.vue"]]),we=e({name:"ElDescriptionsItem",props:{label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}});const Ce=I(_e,{DescriptionsItem:we}),je=D(we),Ve=e=>e+"_"+(Date.now()+Math.floor(1e6*Math.random())),xe=()=>{const e="undefined"!=typeof window?window:global;return e&&"tinymce"in e?e.tinymce:null};function Se(e){return e?e.getContent():""}function Ie(e,l){l&&l.setContent(e)}function De(e,l=!0){e&&e.mode.set(l?"readonly":"design")}function Ee(e,l,t){return new Promise(((a,o)=>{let n,s,{images_upload_url:i,images_upload_credentials:r,custom_images_upload_header:u,custom_images_upload_param:d,custom_images_upload_callback:c}=e||{};n=new XMLHttpRequest,n.withCredentials=!!r,n.open("POST",i||""),u&&Object.keys(u).forEach((e=>{n.setRequestHeader(e,u[e])})),n.upload.onprogress=function(e){t(e.loaded/e.total*100)},n.onload=function(){if(403===n.status)return void o({message:"HTTP Error: "+n.status,remove:!0});if(n.status<200||n.status>=300)return void o("HTTP Error: "+n.status);let e=JSON.parse(n.responseText);if(!e)return void o("Invalid JSON: "+n.responseText);let l="function"==typeof c?c(e):e.location;l?a(l):o("Failed Path: location image path is error/empty")},n.onerror=function(){o("Image upload failed due to a XHR Transport error. Code: "+n.status)},s=new FormData,s.append("file",l.blob(),l.filename()),d&&Object.keys(d).forEach((e=>{s.append(e,d[e])})),n.send(s)}))}const Ae=(()=>{let e={status:{},loadedCallbacks:{}};const l=l=>{e.loadedCallbacks[l]&&(e.loadedCallbacks[l].forEach((e=>{"function"==typeof e.handler&&e.handler.call(e.scope)})),e.loadedCallbacks[l]=void 0)};return{load:(t,a,o)=>{a&&(e.loadedCallbacks[t]||(e.loadedCallbacks[t]=[]),e.loadedCallbacks[t].push({handler:a,scope:o||globalThis})),"LOADED"!==e.status[t]?"LOADING"!==e.status[t]&&(e.status[t]="LOADING",((e,l)=>{const t=document.createElement("script");t.id=Ve("tiny-script"),t.type="application/javascript",t.src=e,t.referrerPolicy="origin";const a=()=>{t.removeEventListener("load",a),l()};t.addEventListener("load",a),(document.head||document.body).appendChild(t)})(t,(()=>{e.status[t]="LOADED",l(t)}))):l(t)}}})(),Ne=["id"],Fe={key:0},Te={name:"Vue3Tinymce"},ze=Object.assign(Te,{props:{modelValue:String,setting:{type:Object,default:()=>({})},setup:Function,disabled:Boolean,scriptSrc:String,debug:Boolean},emits:["update:modelValue","init","change"],setup(e,{expose:l,emit:t}){const a=e;let o=!0;const n=E({editor:null,id:Ve("tinymce"),err:""}),s=()=>{var e;return String(null!=(e=a.modelValue)?e:"")},i=(e,l,t)=>{a.debug&&console.log("来自：".concat(e.type," | \n ").concat(l," \n ").concat(t||"--"))},r=(e,l)=>{l||(l=n.editor);const a=Se(l);i(e,a),t("update:modelValue",a),t("change",a)},m=()=>{var e;if(null===xe())return void(n.err="tinymce is null");a.debug&&console.warn("vue3-tinymce 进入debug模式");let l={...a.setting,selector:"#".concat(n.id),content_style:(i=null==(e=a.setting)?void 0:e.content_style,"body{font-size: 14px;} img{padding: 0 2px;} "+(i||"")),setup:e=>{n.editor=e,a.setup&&a.setup(e),e.on("init",(()=>(e=>{Ie(s(),e),a.disabled&&"readonly"!==e.mode.get()&&De(e),e.on("change input undo redo",(l=>{r(l,e)})),t("init",e)})(e)))}};var i;a.setting.custom_images_upload&&(l.images_upload_handler=(...e)=>Ee.apply(null,[a.setting,...e])),xe().init(l),o=!1};return A((()=>a.modelValue),((e,l)=>{if(n.editor&&n.editor.initialized&&l!==e&&e!==Se(n.editor)){if(i({type:"propsChanged to setContent"},e,l),null===e)return function(e,l){if(l){if(l.resetContent)return l.resetContent(e);l.setContent(e),l.setDirty(!1),l.undoManager.clear()}}("",n.editor);Ie(s(),n.editor)}})),A((()=>a.disabled),(e=>{n.editor&&n.editor.initialized&&De(n.editor,e)})),l({id:n.id,editor:n.editor}),N((()=>{var e;if(null!==xe())return void m();const l=null!=(e=a.scriptSrc)?e:"https://cdn.bootcdn.net/ajax/libs/tinymce/6.1.2/tinymce.min.js";Ae.load(l,m)})),F((()=>{o||m()})),T((()=>{var e;n.editor&&(null==(e=xe())||e.remove("#".concat(n.id)))})),z((()=>{var e;n.editor&&(null==(e=xe())||e.remove("#".concat(n.id)))})),(e,l)=>(u(),d(p,null,[c("div",{id:n.id,class:"tiny-textarea"},null,8,Ne),n.err?(u(),d("p",Fe,V(n.err),1)):x("",!0)],64))}});ze.install=function(e){e.component("Vue3Tinymce",ze)};const Ue={name:"UploadCommon",methods:{}},Oe=Object.assign(Ue,{props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:l}){const t=e,a=U(""),o=O(),n=U(!1),s=U(t.modelValue);A(s.value,(e=>{console.log(e),l("update:modelValue",e)}));const i=e=>{const{data:l}=e;l.file&&(s.value.push({name:l.file.name,url:l.file.url}),n.value=!1)},c=()=>{P({type:"error",message:"上传失败"}),n.value=!1};return(e,l)=>{const t=q,n=ce;return u(),d("div",null,[f(n,{multiple:"",action:"".concat(a.value,"/fileUploadAndDownload/upload?noSave=1"),headers:{"x-token":r(o).token},"on-error":c,"on-success":i,"show-file-list":!0,"file-list":s.value,class:"upload-btn"},{default:R((()=>[f(t,{type:"primary"},{default:R((()=>[j("上传文件")])),_:1})])),_:1},8,["action","headers","file-list"])])}}}),Re=c("br",null,null,-1),Pe={class:"gva-table-box"},qe={class:"gva-btn-list"},Me=c("p",null,"确定要删除吗？",-1),Le={style:{"text-align":"right","margin-top":"8px"}},Be={class:"gva-pagination"},He=c("text",null,"请上传原型生成的html文件包，只能上传zip格式。",-1),We=c("text",null,"请保证压缩包里有start.html文件。",-1),$e={class:"dialog-footer"},Ge=c("text",null,"请上传原型生成的html文件包，只能上传zip格式。",-1),Je=c("text",null,"请保证压缩包里有start.html文件。",-1),Xe={class:"dialog-footer"},Ke={name:"PdRelease"},Ye=Object.assign(Ke,{setup(e){const l=E({setting:{menubar:!1,height:380,toolbar:"bold italic underline h1 h2 blockquote codesample numlist bullist  link | removeformat fullscreen",plugins:"codesample  link  table lists fullscreen ",toolbar_mode:"sliding",nonbreaking_force_tab:!0,link_title:!1,link_default_target:"_blank",content_style:"body{font-size: 16px}",resize:"both"}}),t=M(),a="http://127.0.0.1//tinymce/tinymce.min.js";console.log("path:",a);const o=parseInt(t.params.id);L((e=>{"PdRelease"===e.name&&(s.mockupId=e.params.id),console.log("path:",a)}));const n=U({}),s=U({mockupId:0,title:"",releaseNote:"",mockup_html:"",mockupName:""}),i=E({title:[{required:!0,message:"",trigger:["input","blur"]}],mockupFile:[{required:!0,message:"",trigger:["input","blur"]}]}),p=E({title:[{required:!0,message:"",trigger:["input","blur"]}]}),m=async e=>{const l=await te({ID:e});0===l.code&&(n.value=l.data.repdMock,console.log("mockuoinfo:",n.value))};m(o);const v=async()=>{n.shareStatus=!n.shareStatus,await ae(n.value),m(o)};E({createdAt:[{validator:(e,l,t)=>{_.value.startCreatedAt&&!_.value.endCreatedAt?t(new Error("请填写结束日期")):!_.value.startCreatedAt&&_.value.endCreatedAt?t(new Error("请填写开始日期")):_.value.startCreatedAt&&_.value.endCreatedAt&&(_.value.startCreatedAt.getTime()===_.value.endCreatedAt.getTime()||_.value.startCreatedAt.getTime()>_.value.endCreatedAt.getTime())?t(new Error("开始日期应当早于结束日期")):t()},trigger:"change"}]});const g=U();U();const b=U(1),y=U(0),h=U(10),k=U([]),_=U({mockupId:Number(t.params.id)}),w=e=>{h.value=e,x()},C=e=>{b.value=e,x()},x=async()=>{const e=await oe({page:b.value,pageSize:h.value,..._.value});0===e.code&&(k.value=e.data.list,y.value=e.data.total,b.value=e.data.page,h.value=e.data.pageSize)};x();(async()=>{})();const S=U([]),I=e=>{S.value=e},D=U(!1),A=async()=>{const e=[];if(0===S.value.length)return void P({type:"warning",message:"请选择要删除的数据"});S.value&&S.value.map((l=>{e.push(l.ID)}));0===(await ne({ids:e})).code&&(P({type:"success",message:"删除成功"}),k.value.length===e.length&&b.value>1&&b.value--,D.value=!1,x())},N=U(""),F=async e=>{0===(await ie({ID:e.ID})).code&&(P({type:"success",message:"删除成功"}),1===k.value.length&&b.value>1&&b.value--,x())},T=U(!1),z=U(!1),O=()=>{N.value="create",T.value=!0},ce=()=>{T.value=!1,z.value=!1,s.value={releaseNote:"",mockup_html:""}},me=async()=>{var e;null==(e=g.value)||e.validate((async e=>{if(console.log("valid:",e),!e)return;let l;switch(N.value){case"create":s.value.mockupId=o,s.value.mockupFile=s.value.mockupFile[0].url,l=await re(s.value);break;case"update":s.value.mockupId=o,null!=s.value.mockupFile&&(s.value.mockupFile=s.value.mockupFile[0].url),l=await ue(s.value);break;default:l=await re(s.value)}0===l.code&&(P({type:"success",message:"创建/更改成功"}),ce(),x())}))},ve=window.location.protocol+"//"+window.location.host;return(e,t)=>{const o=le,m=je,_=q,x=Ce,E=ee,U=Q,P=Y,M=Z,L=K,te=$,ae=J,oe=X,ne=G;return u(),d("div",null,[f(E,null,{default:R((()=>[f(x,{title:n.value.title,column:2},{default:R((()=>[f(m,{label:"分享状态"},{default:R((()=>[f(o,{modelValue:n.value.shareStatus,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value.shareStatus=e),"active-text":"已开启分享","inactive-text":"未开启分享",onChange:v},null,8,["modelValue"])])),_:1}),f(m,{label:""}),f(m,{label:"访问链接"},{default:R((()=>[j(V(ve+"/pd/"+n.value.shareUrl),1)])),_:1}),f(m,{label:""},{default:R((()=>[f(_,{type:"primary",link:"",icon:"link",class:"table-button",onClick:t[1]||(t[1]=e=>(async e=>{console.log("url:",e),window.open(e,"_blank")})(ve+"/front/#/pd/"+n.value.shareUrl))},{default:R((()=>[j("访问")])),_:1})])),_:1}),f(m,{label:"备注1"},{default:R((()=>[j("每次关闭再开启的分享地址都不一样")])),_:1}),f(m,{label:""}),f(m,{label:"备注2"},{default:R((()=>[j("分享功能需要部署用户端系统，否则无法访问")])),_:1}),f(m,{label:""}),f(m,{label:"备注3"},{default:R((()=>[j("关闭分享后，原型将无法访问")])),_:1}),f(m,{label:""})])),_:1},8,["title"])])),_:1}),Re,c("div",Pe,[c("div",qe,[f(_,{type:"primary",icon:"plus",onClick:O},{default:R((()=>[j("新增")])),_:1}),f(U,{visible:D.value,"onUpdate:visible":t[4]||(t[4]=e=>D.value=e),placement:"top",width:"160"},{reference:R((()=>[f(_,{icon:"delete",style:{"margin-left":"10px"},disabled:!S.value.length,onClick:t[3]||(t[3]=e=>D.value=!0)},{default:R((()=>[j("删除")])),_:1},8,["disabled"])])),default:R((()=>[Me,c("div",Le,[f(_,{type:"primary",link:"",onClick:t[2]||(t[2]=e=>D.value=!1)},{default:R((()=>[j("取消")])),_:1}),f(_,{type:"primary",onClick:A},{default:R((()=>[j("确定")])),_:1})])])),_:1},8,["visible"])]),f(M,{ref:"multipleTable",style:{width:"100%"},"tooltip-effect":"dark",data:k.value,"row-key":"ID",onSelectionChange:I},{default:R((()=>[f(P,{type:"selection",width:"30"}),f(P,{align:"left",label:"版本",prop:"ID",width:"60"}),f(P,{align:"left",label:"标题",prop:"title"}),f(P,{align:"left",label:"发布日期",width:"160"},{default:R((e=>[j(V(r(pe)(e.row.CreatedAt)),1)])),_:1}),f(P,{align:"left",label:"发布日期",width:"160"}),f(P,{align:"left",label:"访问链接",prop:"mockup_html",width:"120"},{default:R((e=>[f(_,{type:"primary",link:"",icon:"link",class:"table-button",onClick:l=>(async e=>{console.log("url:",e),e+="start.html",window.open(de(e),"_blank")})(e.row.mockup_html)},{default:R((()=>[j("访问")])),_:2},1032,["onClick"])])),_:1}),f(P,{align:"left",label:"操作"},{default:R((e=>[f(_,{type:"primary",link:"",icon:"edit",class:"table-button",onClick:l=>(async e=>{const l=await se({ID:e.ID});N.value="update",console.log("type:",N),0===l.code&&(delete l.data.repdRelease.mockupFile,s.value=l.data.repdRelease,z.value=!0)})(e.row)},{default:R((()=>[j("编辑")])),_:2},1032,["onClick"]),f(_,{type:"primary",link:"",icon:"delete",onClick:l=>{return t=e.row,void W.confirm("确定要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{F(t)}));var t}},{default:R((()=>[j("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),c("div",Be,[f(L,{layout:"total, sizes, prev, pager, next, jumper","current-page":b.value,"page-size":h.value,"page-sizes":[10,30,50,100],total:y.value,onCurrentChange:C,onSizeChange:w},null,8,["current-page","page-size","total"])])]),f(ne,{modelValue:T.value,"onUpdate:modelValue":t[9]||(t[9]=e=>T.value=e),"before-close":ce,title:"添加发布","destroy-on-close":""},{footer:R((()=>[c("div",$e,[f(_,{onClick:ce},{default:R((()=>[j("取 消")])),_:1}),f(_,{type:"primary",onClick:me},{default:R((()=>[j("确 定")])),_:1})])])),default:R((()=>[f(oe,{model:s.value,"label-position":"right",ref_key:"elFormRef",ref:g,rules:i,"label-width":"auto"},{default:R((()=>[B(f(ae,{label:"产品ID:",prop:"mockupId",display:"disable"},{default:R((()=>[f(te,{modelValue:s.value.mockupId,"onUpdate:modelValue":t[5]||(t[5]=e=>s.value.mockupId=e),modelModifiers:{number:!0},clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1},512),[[H,!1]]),f(ae,{label:"标题",prop:"title"},{default:R((()=>[f(te,{modelValue:s.value.title,"onUpdate:modelValue":t[6]||(t[6]=e=>s.value.title=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),f(ae,{label:"发布说明:",prop:"releaseNote"},{default:R((()=>[f(r(ze),{modelValue:s.value.releaseNote,"onUpdate:modelValue":t[7]||(t[7]=e=>s.value.releaseNote=e),setting:l.setting,"script-src":a},null,8,["modelValue","setting"])])),_:1}),f(ae,{label:"文件:",prop:"mockupFile"},{default:R((()=>[f(Oe,{modelValue:s.value.mockupFile,"onUpdate:modelValue":t[8]||(t[8]=e=>s.value.mockupFile=e)},null,8,["modelValue"])])),_:1}),f(ae,{label:"说明："},{default:R((()=>[He,We])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"]),f(ne,{modelValue:z.value,"onUpdate:modelValue":t[14]||(t[14]=e=>z.value=e),"before-close":ce,title:"修改发布","destroy-on-close":""},{footer:R((()=>[c("div",Xe,[f(_,{onClick:ce},{default:R((()=>[j("取 消")])),_:1}),f(_,{type:"primary",onClick:me},{default:R((()=>[j("确 定")])),_:1})])])),default:R((()=>[f(oe,{model:s.value,"label-position":"right",ref_key:"elFormRef",ref:g,rules:p,"label-width":"80px"},{default:R((()=>[B(f(ae,{label:"产品ID:",prop:"mockupId",display:"disable"},{default:R((()=>[f(te,{modelValue:s.value.mockupId,"onUpdate:modelValue":t[10]||(t[10]=e=>s.value.mockupId=e),modelModifiers:{number:!0},clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1},512),[[H,!1]]),f(ae,{label:"标题",prop:"title"},{default:R((()=>[f(te,{modelValue:s.value.title,"onUpdate:modelValue":t[11]||(t[11]=e=>s.value.title=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),f(ae,{label:"发布说明:",prop:"releaseNote"},{default:R((()=>[f(r(ze),{modelValue:s.value.releaseNote,"onUpdate:modelValue":t[12]||(t[12]=e=>s.value.releaseNote=e),setting:l.setting},null,8,["modelValue","setting"])])),_:1}),f(ae,{label:"文件:",prop:"mockupFile"},{default:R((()=>[f(Oe,{modelValue:s.value.mockupFile,"onUpdate:modelValue":t[13]||(t[13]=e=>s.value.mockupFile=e)},null,8,["modelValue"])])),_:1}),f(ae,{label:"说明："},{default:R((()=>[Ge,Je])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}});export{Ye as default};