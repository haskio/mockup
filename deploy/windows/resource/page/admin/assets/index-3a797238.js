/*! 
 Build based on gin-vue-admin 
 Time : 1689257244000 */
import{az as e,aK as t,B as a,a3 as s,aE as l,bC as o,x as n,C as i,y as r,c9 as u,r as c,o as d,h as p,w as f,c as v,J as m,K as y,n as g,A as h,m as b,G as k,e as w,b as E,al as F,d as R,N as S,cp as T,t as C,H as $,ce as x,cf as L,bL as _,cq as U,cr as P,bd as j,_ as O,ak as D,a4 as B,O as q,aJ as A,cs as H,ct as K,T as z,aS as M,a8 as N,D as X,ag as J,a2 as W,ab as G,ai as I,aj as Q,I as V}from"./index-c2e3c879.js";import{E as Y}from"./index-a635a24a.js";import{c as Z}from"./cloneDeep-98e83b3f.js";import{i as ee}from"./isEqual-1fdac1d7.js";const te=Symbol("uploadContextKey");class ae extends Error{constructor(e,t,a,s){super(e),this.name="UploadAjaxError",this.status=t,this.method=a,this.url=s}}function se(e,t,a){let s;return s=a.response?`${a.response.error||a.response}`:a.responseText?`${a.responseText}`:`fail to ${t.method} ${e} ${a.status}`,new ae(s,a.status,t.method,e)}const le=["text","picture","picture-card"];let oe=1;const ne=()=>Date.now()+oe++,ie=a({action:{type:String,default:"#"},headers:{type:s(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>l({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:s(Array),default:()=>l([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:le,default:"text"},httpRequest:{type:s(Function),default:a=>{"undefined"==typeof XMLHttpRequest&&e("ElUpload","XMLHttpRequest is undefined");const s=new XMLHttpRequest,l=a.action;s.upload&&s.upload.addEventListener("progress",(e=>{const t=e;t.percent=e.total>0?e.loaded/e.total*100:0,a.onProgress(t)}));const o=new FormData;if(a.data)for(const[e,t]of Object.entries(a.data))Array.isArray(t)?o.append(e,...t):o.append(e,t);o.append(a.filename,a.file,a.file.name),s.addEventListener("error",(()=>{a.onError(se(l,a,s))})),s.addEventListener("load",(()=>{if(s.status<200||s.status>=300)return a.onError(se(l,a,s));a.onSuccess(function(e){const t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch(a){return t}}(s))})),s.open(a.method,l,!0),a.withCredentials&&"withCredentials"in s&&(s.withCredentials=!0);const n=a.headers||{};if(n instanceof Headers)n.forEach(((e,t)=>s.setRequestHeader(t,e)));else for(const[e,i]of Object.entries(n))t(i)||s.setRequestHeader(e,String(i));return s.send(o),s}},disabled:Boolean,limit:Number}),re=a({...ie,beforeUpload:{type:s(Function),default:o},beforeRemove:{type:s(Function)},onRemove:{type:s(Function),default:o},onChange:{type:s(Function),default:o},onPreview:{type:s(Function),default:o},onSuccess:{type:s(Function),default:o},onProgress:{type:s(Function),default:o},onError:{type:s(Function),default:o},onExceed:{type:s(Function),default:o}}),ue=a({files:{type:s(Array),default:()=>l([])},disabled:{type:Boolean,default:!1},handlePreview:{type:s(Function),default:o},listType:{type:String,values:le,default:"text"}}),ce=["onKeydown"],de=["src"],pe=["onClick"],fe=["title"],ve=["onClick"],me=["onClick"],ye=n({name:"ElUploadList"});var ge=O(n({...ye,props:ue,emits:{remove:e=>!!e},setup(e,{emit:t}){const{t:a}=i(),s=r("upload"),l=r("icon"),o=r("list"),n=u(),O=c(!1),D=e=>{t("remove",e)};return(e,t)=>(d(),p(j,{tag:"ul",class:g([h(s).b("list"),h(s).bm("list",e.listType),h(s).is("disabled",h(n))]),name:h(o).b()},{default:f((()=>[(d(!0),v(m,null,y(e.files,(o=>(d(),v("li",{key:o.uid||o.name,class:g([h(s).be("list","item"),h(s).is(o.status),{focusing:O.value}]),tabindex:"0",onKeydown:b((e=>!h(n)&&D(o)),["delete"]),onFocus:t[0]||(t[0]=e=>O.value=!0),onBlur:t[1]||(t[1]=e=>O.value=!1),onClick:t[2]||(t[2]=e=>O.value=!1)},[k(e.$slots,"default",{file:o},(()=>["picture"===e.listType||"uploading"!==o.status&&"picture-card"===e.listType?(d(),v("img",{key:0,class:g(h(s).be("list","item-thumbnail")),src:o.url,alt:""},null,10,de)):w("v-if",!0),"uploading"===o.status||"picture-card"!==e.listType?(d(),v("div",{key:1,class:g(h(s).be("list","item-info"))},[E("a",{class:g(h(s).be("list","item-name")),onClick:F((t=>e.handlePreview(o)),["prevent"])},[R(h(S),{class:g(h(l).m("document"))},{default:f((()=>[R(h(T))])),_:1},8,["class"]),E("span",{class:g(h(s).be("list","item-file-name")),title:o.name},C(o.name),11,fe)],10,pe),"uploading"===o.status?(d(),p(h(Y),{key:0,type:"picture-card"===e.listType?"circle":"line","stroke-width":"picture-card"===e.listType?6:2,percentage:Number(o.percentage),style:$("picture-card"===e.listType?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):w("v-if",!0)],2)):w("v-if",!0),E("label",{class:g(h(s).be("list","item-status-label"))},["text"===e.listType?(d(),p(h(S),{key:0,class:g([h(l).m("upload-success"),h(l).m("circle-check")])},{default:f((()=>[R(h(x))])),_:1},8,["class"])):["picture-card","picture"].includes(e.listType)?(d(),p(h(S),{key:1,class:g([h(l).m("upload-success"),h(l).m("check")])},{default:f((()=>[R(h(L))])),_:1},8,["class"])):w("v-if",!0)],2),h(n)?w("v-if",!0):(d(),p(h(S),{key:2,class:g(h(l).m("close")),onClick:e=>D(o)},{default:f((()=>[R(h(_))])),_:2},1032,["class","onClick"])),w(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),w(" This is a bug which needs to be fixed "),w(" TODO: Fix the incorrect navigation interaction "),h(n)?w("v-if",!0):(d(),v("i",{key:3,class:g(h(l).m("close-tip"))},C(h(a)("el.upload.deleteTip")),3)),"picture-card"===e.listType?(d(),v("span",{key:4,class:g(h(s).be("list","item-actions"))},[E("span",{class:g(h(s).be("list","item-preview")),onClick:t=>e.handlePreview(o)},[R(h(S),{class:g(h(l).m("zoom-in"))},{default:f((()=>[R(h(U))])),_:1},8,["class"])],10,ve),h(n)?w("v-if",!0):(d(),v("span",{key:0,class:g(h(s).be("list","item-delete")),onClick:e=>D(o)},[R(h(S),{class:g(h(l).m("delete"))},{default:f((()=>[R(h(P))])),_:1},8,["class"])],10,me))],2)):w("v-if",!0)]))],42,ce)))),128)),k(e.$slots,"append")])),_:3},8,["class","name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const he=a({disabled:{type:Boolean,default:!1}}),be={file:e=>D(e)},ke=["onDrop","onDragover"],we="ElUploadDrag",Ee=n({name:we});var Fe=O(n({...Ee,props:he,emits:be,setup(t,{emit:a}){const s=B(te);s||e(we,"usage: <el-upload><el-upload-dragger /></el-upload>");const l=r("upload"),o=c(!1),n=u(),i=e=>{if(n.value)return;o.value=!1,e.stopPropagation();const t=Array.from(e.dataTransfer.files),l=s.accept.value;if(!l)return void a("file",t);const i=t.filter((e=>{const{type:t,name:a}=e,s=a.includes(".")?`.${a.split(".").pop()}`:"",o=t.replace(/\/.*$/,"");return l.split(",").map((e=>e.trim())).filter((e=>e)).some((e=>e.startsWith(".")?s===e:/\/\*$/.test(e)?o===e.replace(/\/\*$/,""):!!/^[^/]+\/[^/]+$/.test(e)&&t===e))}));a("file",i)},p=()=>{n.value||(o.value=!0)};return(e,t)=>(d(),v("div",{class:g([h(l).b("dragger"),h(l).is("dragover",o.value)]),onDrop:F(i,["prevent"]),onDragover:F(p,["prevent"]),onDragleave:t[0]||(t[0]=F((e=>o.value=!1),["prevent"]))},[k(e.$slots,"default")],42,ke))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const Re=a({...ie,beforeUpload:{type:s(Function),default:o},onRemove:{type:s(Function),default:o},onStart:{type:s(Function),default:o},onSuccess:{type:s(Function),default:o},onProgress:{type:s(Function),default:o},onError:{type:s(Function),default:o},onExceed:{type:s(Function),default:o}}),Se=["onKeydown"],Te=["name","multiple","accept"],Ce=n({name:"ElUploadContent",inheritAttrs:!1});var $e=O(n({...Ce,props:Re,setup(e,{expose:t}){const a=e,s=r("upload"),l=u(),o=q({}),n=q(),i=e=>{if(0===e.length)return;const{autoUpload:t,limit:s,fileList:l,multiple:o,onStart:n,onExceed:i}=a;if(s&&l.length+e.length>s)i(e,l);else{o||(e=e.slice(0,1));for(const a of e){const e=a;e.uid=ne(),n(e),t&&c(e)}}},c=async e=>{if(n.value.value="",!a.beforeUpload)return m(e);let t,s={};try{const l=a.data,o=a.beforeUpload(e);s=A(a.data)?Z(a.data):a.data,t=await o,A(a.data)&&ee(l,s)&&(s=Z(a.data))}catch(o){t=!1}if(!1===t)return void a.onRemove(e);let l=e;t instanceof Blob&&(l=t instanceof File?t:new File([t],e.name,{type:e.type})),m(Object.assign(l,{uid:e.uid}),s)},m=(e,t)=>{const{headers:s,data:l,method:n,withCredentials:i,name:r,action:u,onProgress:c,onSuccess:d,onError:p,httpRequest:f}=a,{uid:v}=e,m={headers:s||{},withCredentials:i,file:e,data:null!=t?t:l,method:n,filename:r,action:u,onProgress:t=>{c(t,e)},onSuccess:t=>{d(t,e),delete o.value[v]},onError:t=>{p(t,e),delete o.value[v]}},y=f(m);o.value[v]=y,y instanceof Promise&&y.then(m.onSuccess,m.onError)},y=e=>{const t=e.target.files;t&&i(Array.from(t))},w=()=>{l.value||(n.value.value="",n.value.click())},R=()=>{w()};return t({abort:e=>{H(o.value).filter(e?([t])=>String(e.uid)===t:()=>!0).forEach((([e,t])=>{t instanceof XMLHttpRequest&&t.abort(),delete o.value[e]}))},upload:c}),(e,t)=>(d(),v("div",{class:g([h(s).b(),h(s).m(e.listType),h(s).is("drag",e.drag)]),tabindex:"0",onClick:w,onKeydown:b(F(R,["self"]),["enter","space"])},[e.drag?(d(),p(Fe,{key:0,disabled:h(l),onFile:i},{default:f((()=>[k(e.$slots,"default")])),_:3},8,["disabled"])):k(e.$slots,"default",{key:1}),E("input",{ref_key:"inputRef",ref:n,class:g(h(s).e("input")),name:e.name,multiple:e.multiple,accept:e.accept,type:"file",onChange:y,onClick:t[0]||(t[0]=F((()=>{}),["stop"]))},null,42,Te)],42,Se))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const xe="ElUpload",Le=(a,s)=>{const l=K(a,"fileList",void 0,{passive:!0}),o=e=>l.value.find((t=>t.uid===e.uid));function n(e){var t;null==(t=s.value)||t.abort(e)}return z((()=>a.listType),(e=>{"picture-card"!==e&&"picture"!==e||(l.value=l.value.map((e=>{const{raw:t,url:s}=e;if(!s&&t)try{e.url=URL.createObjectURL(t)}catch(o){a.onError(o,e,l.value)}return e})))})),z(l,(e=>{for(const t of e)t.uid||(t.uid=ne()),t.status||(t.status="success")}),{immediate:!0,deep:!0}),{uploadFiles:l,abort:n,clearFiles:function(e=["ready","uploading","success","fail"]){l.value=l.value.filter((t=>!e.includes(t.status)))},handleError:(e,t)=>{const s=o(t);s&&(console.error(e),s.status="fail",l.value.splice(l.value.indexOf(s),1),a.onError(e,s,l.value),a.onChange(s,l.value))},handleProgress:(e,t)=>{const s=o(t);s&&(a.onProgress(e,s,l.value),s.status="uploading",s.percentage=Math.round(e.percent))},handleStart:e=>{t(e.uid)&&(e.uid=ne());const s={name:e.name,percentage:0,status:"ready",size:e.size,raw:e,uid:e.uid};if("picture-card"===a.listType||"picture"===a.listType)try{s.url=URL.createObjectURL(e)}catch(o){M(xe,o.message),a.onError(o,s,l.value)}l.value=[...l.value,s],a.onChange(s,l.value)},handleSuccess:(e,t)=>{const s=o(t);s&&(s.status="success",s.response=e,a.onSuccess(e,s,l.value),a.onChange(s,l.value))},handleRemove:async t=>{const s=t instanceof File?o(t):t;s||e(xe,"file to be removed not found");const i=e=>{n(e);const t=l.value;t.splice(t.indexOf(e),1),a.onRemove(e,t),(e=>{var t;(null==(t=e.url)?void 0:t.startsWith("blob:"))&&URL.revokeObjectURL(e.url)})(e)};if(a.beforeRemove){!1!==await a.beforeRemove(s,l.value)&&i(s)}else i(s)},submit:function(){l.value.filter((({status:e})=>"ready"===e)).forEach((({raw:e})=>{var t;return e&&(null==(t=s.value)?void 0:t.upload(e))}))}}},_e=n({name:"ElUpload"});const Ue=V(O(n({..._e,props:re,setup(e,{expose:t}){const a=e,s=N(),l=u(),o=q(),{abort:n,submit:i,clearFiles:r,uploadFiles:c,handleStart:m,handleError:y,handleRemove:g,handleSuccess:b,handleProgress:E}=Le(a,o),F=X((()=>"picture-card"===a.listType)),S=X((()=>({...a,fileList:c.value,onStart:m,onProgress:E,onSuccess:b,onError:y,onRemove:g})));return J((()=>{c.value.forEach((({url:e})=>{(null==e?void 0:e.startsWith("blob:"))&&URL.revokeObjectURL(e)}))})),W(te,{accept:G(a,"accept")}),t({abort:n,submit:i,clearFiles:r,handleStart:m,handleRemove:g}),(e,t)=>(d(),v("div",null,[h(F)&&e.showFileList?(d(),p(ge,{key:0,disabled:h(l),"list-type":e.listType,files:h(c),"handle-preview":e.onPreview,onRemove:h(g)},I({append:f((()=>[R($e,Q({ref_key:"uploadRef",ref:o},h(S)),{default:f((()=>[h(s).trigger?k(e.$slots,"trigger",{key:0}):w("v-if",!0),!h(s).trigger&&h(s).default?k(e.$slots,"default",{key:1}):w("v-if",!0)])),_:3},16)])),_:2},[e.$slots.file?{name:"default",fn:f((({file:t})=>[k(e.$slots,"file",{file:t})]))}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):w("v-if",!0),!h(F)||h(F)&&!e.showFileList?(d(),p($e,Q({key:1,ref_key:"uploadRef",ref:o},h(S)),{default:f((()=>[h(s).trigger?k(e.$slots,"trigger",{key:0}):w("v-if",!0),!h(s).trigger&&h(s).default?k(e.$slots,"default",{key:1}):w("v-if",!0)])),_:3},16)):w("v-if",!0),e.$slots.trigger?k(e.$slots,"default",{key:2}):w("v-if",!0),k(e.$slots,"tip"),!h(F)&&e.showFileList?(d(),p(ge,{key:3,disabled:h(l),"list-type":e.listType,files:h(c),"handle-preview":e.onPreview,onRemove:h(g)},I({_:2},[e.$slots.file?{name:"default",fn:f((({file:t})=>[k(e.$slots,"file",{file:t})]))}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):w("v-if",!0)]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]));export{Ue as E};
