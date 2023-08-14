/*! 
 Build based on gin-vue-admin 
 Time : 1691990628000 */
import{ay as e,aJ as t,B as a,a3 as s,aD as l,bG as o,x as n,C as i,y as r,cc as u,r as c,o as d,h as p,w as f,c as v,J as m,K as y,n as h,A as g,m as b,G as k,e as w,b as R,ak as E,d as F,N as S,cs as T,t as x,H as C,ch as L,ci as _,bO as U,ct as $,cu as P,bh as O,_ as j,aj as D,a4 as B,O as q,aI as A,cv as H,cw as K,T as M,aR as z,a7 as N,D as X,af as J,a2 as W,aa as G,ah as I,ai as Q,I as V}from"./index-55b51a59.js";import{E as Y}from"./index-743c5db2.js";import{c as Z}from"./cloneDeep-fd3e5ee2.js";import{i as ee}from"./isEqual-201a2fd8.js";const te=Symbol("uploadContextKey");class ae extends Error{constructor(e,t,a,s){super(e),this.name="UploadAjaxError",this.status=t,this.method=a,this.url=s}}function se(e,t,a){let s;return s=a.response?"".concat(a.response.error||a.response):a.responseText?"".concat(a.responseText):"fail to ".concat(t.method," ").concat(e," ").concat(a.status),new ae(s,a.status,t.method,e)}const le=["text","picture","picture-card"];let oe=1;const ne=()=>Date.now()+oe++,ie=a({action:{type:String,default:"#"},headers:{type:s(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>l({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:s(Array),default:()=>l([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:le,default:"text"},httpRequest:{type:s(Function),default:a=>{"undefined"==typeof XMLHttpRequest&&e("ElUpload","XMLHttpRequest is undefined");const s=new XMLHttpRequest,l=a.action;s.upload&&s.upload.addEventListener("progress",(e=>{const t=e;t.percent=e.total>0?e.loaded/e.total*100:0,a.onProgress(t)}));const o=new FormData;if(a.data)for(const[e,t]of Object.entries(a.data))Array.isArray(t)?o.append(e,...t):o.append(e,t);o.append(a.filename,a.file,a.file.name),s.addEventListener("error",(()=>{a.onError(se(l,a,s))})),s.addEventListener("load",(()=>{if(s.status<200||s.status>=300)return a.onError(se(l,a,s));a.onSuccess(function(e){const t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch(a){return t}}(s))})),s.open(a.method,l,!0),a.withCredentials&&"withCredentials"in s&&(s.withCredentials=!0);const n=a.headers||{};if(n instanceof Headers)n.forEach(((e,t)=>s.setRequestHeader(t,e)));else for(const[e,i]of Object.entries(n))t(i)||s.setRequestHeader(e,String(i));return s.send(o),s}},disabled:Boolean,limit:Number}),re=a({...ie,beforeUpload:{type:s(Function),default:o},beforeRemove:{type:s(Function)},onRemove:{type:s(Function),default:o},onChange:{type:s(Function),default:o},onPreview:{type:s(Function),default:o},onSuccess:{type:s(Function),default:o},onProgress:{type:s(Function),default:o},onError:{type:s(Function),default:o},onExceed:{type:s(Function),default:o}}),ue=a({files:{type:s(Array),default:()=>l([])},disabled:{type:Boolean,default:!1},handlePreview:{type:s(Function),default:o},listType:{type:String,values:le,default:"text"}}),ce=["onKeydown"],de=["src"],pe=["onClick"],fe=["title"],ve=["onClick"],me=["onClick"],ye=n({name:"ElUploadList"});var he=j(n({...ye,props:ue,emits:{remove:e=>!!e},setup(e,{emit:t}){const{t:a}=i(),s=r("upload"),l=r("icon"),o=r("list"),n=u(),j=c(!1),D=e=>{t("remove",e)};return(e,t)=>(d(),p(O,{tag:"ul",class:h([g(s).b("list"),g(s).bm("list",e.listType),g(s).is("disabled",g(n))]),name:g(o).b()},{default:f((()=>[(d(!0),v(m,null,y(e.files,(o=>(d(),v("li",{key:o.uid||o.name,class:h([g(s).be("list","item"),g(s).is(o.status),{focusing:j.value}]),tabindex:"0",onKeydown:b((e=>!g(n)&&D(o)),["delete"]),onFocus:t[0]||(t[0]=e=>j.value=!0),onBlur:t[1]||(t[1]=e=>j.value=!1),onClick:t[2]||(t[2]=e=>j.value=!1)},[k(e.$slots,"default",{file:o},(()=>["picture"===e.listType||"uploading"!==o.status&&"picture-card"===e.listType?(d(),v("img",{key:0,class:h(g(s).be("list","item-thumbnail")),src:o.url,alt:""},null,10,de)):w("v-if",!0),"uploading"===o.status||"picture-card"!==e.listType?(d(),v("div",{key:1,class:h(g(s).be("list","item-info"))},[R("a",{class:h(g(s).be("list","item-name")),onClick:E((t=>e.handlePreview(o)),["prevent"])},[F(g(S),{class:h(g(l).m("document"))},{default:f((()=>[F(g(T))])),_:1},8,["class"]),R("span",{class:h(g(s).be("list","item-file-name")),title:o.name},x(o.name),11,fe)],10,pe),"uploading"===o.status?(d(),p(g(Y),{key:0,type:"picture-card"===e.listType?"circle":"line","stroke-width":"picture-card"===e.listType?6:2,percentage:Number(o.percentage),style:C("picture-card"===e.listType?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):w("v-if",!0)],2)):w("v-if",!0),R("label",{class:h(g(s).be("list","item-status-label"))},["text"===e.listType?(d(),p(g(S),{key:0,class:h([g(l).m("upload-success"),g(l).m("circle-check")])},{default:f((()=>[F(g(L))])),_:1},8,["class"])):["picture-card","picture"].includes(e.listType)?(d(),p(g(S),{key:1,class:h([g(l).m("upload-success"),g(l).m("check")])},{default:f((()=>[F(g(_))])),_:1},8,["class"])):w("v-if",!0)],2),g(n)?w("v-if",!0):(d(),p(g(S),{key:2,class:h(g(l).m("close")),onClick:e=>D(o)},{default:f((()=>[F(g(U))])),_:2},1032,["class","onClick"])),w(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),w(" This is a bug which needs to be fixed "),w(" TODO: Fix the incorrect navigation interaction "),g(n)?w("v-if",!0):(d(),v("i",{key:3,class:h(g(l).m("close-tip"))},x(g(a)("el.upload.deleteTip")),3)),"picture-card"===e.listType?(d(),v("span",{key:4,class:h(g(s).be("list","item-actions"))},[R("span",{class:h(g(s).be("list","item-preview")),onClick:t=>e.handlePreview(o)},[F(g(S),{class:h(g(l).m("zoom-in"))},{default:f((()=>[F(g($))])),_:1},8,["class"])],10,ve),g(n)?w("v-if",!0):(d(),v("span",{key:0,class:h(g(s).be("list","item-delete")),onClick:e=>D(o)},[F(g(S),{class:h(g(l).m("delete"))},{default:f((()=>[F(g(P))])),_:1},8,["class"])],10,me))],2)):w("v-if",!0)]))],42,ce)))),128)),k(e.$slots,"append")])),_:3},8,["class","name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const ge=a({disabled:{type:Boolean,default:!1}}),be={file:e=>D(e)},ke=["onDrop","onDragover"],we="ElUploadDrag",Re=n({name:we});var Ee=j(n({...Re,props:ge,emits:be,setup(t,{emit:a}){const s=B(te);s||e(we,"usage: <el-upload><el-upload-dragger /></el-upload>");const l=r("upload"),o=c(!1),n=u(),i=e=>{if(n.value)return;o.value=!1,e.stopPropagation();const t=Array.from(e.dataTransfer.files),l=s.accept.value;if(!l)return void a("file",t);const i=t.filter((e=>{const{type:t,name:a}=e,s=a.includes(".")?".".concat(a.split(".").pop()):"",o=t.replace(/\/.*$/,"");return l.split(",").map((e=>e.trim())).filter((e=>e)).some((e=>e.startsWith(".")?s===e:/\/\*$/.test(e)?o===e.replace(/\/\*$/,""):!!/^[^/]+\/[^/]+$/.test(e)&&t===e))}));a("file",i)},p=()=>{n.value||(o.value=!0)};return(e,t)=>(d(),v("div",{class:h([g(l).b("dragger"),g(l).is("dragover",o.value)]),onDrop:E(i,["prevent"]),onDragover:E(p,["prevent"]),onDragleave:t[0]||(t[0]=E((e=>o.value=!1),["prevent"]))},[k(e.$slots,"default")],42,ke))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const Fe=a({...ie,beforeUpload:{type:s(Function),default:o},onRemove:{type:s(Function),default:o},onStart:{type:s(Function),default:o},onSuccess:{type:s(Function),default:o},onProgress:{type:s(Function),default:o},onError:{type:s(Function),default:o},onExceed:{type:s(Function),default:o}}),Se=["onKeydown"],Te=["name","multiple","accept"],xe=n({name:"ElUploadContent",inheritAttrs:!1});var Ce=j(n({...xe,props:Fe,setup(e,{expose:t}){const a=e,s=r("upload"),l=u(),o=q({}),n=q(),i=e=>{if(0===e.length)return;const{autoUpload:t,limit:s,fileList:l,multiple:o,onStart:n,onExceed:i}=a;if(s&&l.length+e.length>s)i(e,l);else{o||(e=e.slice(0,1));for(const a of e){const e=a;e.uid=ne(),n(e),t&&c(e)}}},c=async e=>{if(n.value.value="",!a.beforeUpload)return m(e);let t,s={};try{const l=a.data,o=a.beforeUpload(e);s=A(a.data)?Z(a.data):a.data,t=await o,A(a.data)&&ee(l,s)&&(s=Z(a.data))}catch(o){t=!1}if(!1===t)return void a.onRemove(e);let l=e;t instanceof Blob&&(l=t instanceof File?t:new File([t],e.name,{type:e.type})),m(Object.assign(l,{uid:e.uid}),s)},m=(e,t)=>{const{headers:s,data:l,method:n,withCredentials:i,name:r,action:u,onProgress:c,onSuccess:d,onError:p,httpRequest:f}=a,{uid:v}=e,m={headers:s||{},withCredentials:i,file:e,data:null!=t?t:l,method:n,filename:r,action:u,onProgress:t=>{c(t,e)},onSuccess:t=>{d(t,e),delete o.value[v]},onError:t=>{p(t,e),delete o.value[v]}},y=f(m);o.value[v]=y,y instanceof Promise&&y.then(m.onSuccess,m.onError)},y=e=>{const t=e.target.files;t&&i(Array.from(t))},w=()=>{l.value||(n.value.value="",n.value.click())},F=()=>{w()};return t({abort:e=>{H(o.value).filter(e?([t])=>String(e.uid)===t:()=>!0).forEach((([e,t])=>{t instanceof XMLHttpRequest&&t.abort(),delete o.value[e]}))},upload:c}),(e,t)=>(d(),v("div",{class:h([g(s).b(),g(s).m(e.listType),g(s).is("drag",e.drag)]),tabindex:"0",onClick:w,onKeydown:b(E(F,["self"]),["enter","space"])},[e.drag?(d(),p(Ee,{key:0,disabled:g(l),onFile:i},{default:f((()=>[k(e.$slots,"default")])),_:3},8,["disabled"])):k(e.$slots,"default",{key:1}),R("input",{ref_key:"inputRef",ref:n,class:h(g(s).e("input")),name:e.name,multiple:e.multiple,accept:e.accept,type:"file",onChange:y,onClick:t[0]||(t[0]=E((()=>{}),["stop"]))},null,42,Te)],42,Se))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const Le="ElUpload",_e=(a,s)=>{const l=K(a,"fileList",void 0,{passive:!0}),o=e=>l.value.find((t=>t.uid===e.uid));function n(e){var t;null==(t=s.value)||t.abort(e)}return M((()=>a.listType),(e=>{"picture-card"!==e&&"picture"!==e||(l.value=l.value.map((e=>{const{raw:t,url:s}=e;if(!s&&t)try{e.url=URL.createObjectURL(t)}catch(o){a.onError(o,e,l.value)}return e})))})),M(l,(e=>{for(const t of e)t.uid||(t.uid=ne()),t.status||(t.status="success")}),{immediate:!0,deep:!0}),{uploadFiles:l,abort:n,clearFiles:function(e=["ready","uploading","success","fail"]){l.value=l.value.filter((t=>!e.includes(t.status)))},handleError:(e,t)=>{const s=o(t);s&&(console.error(e),s.status="fail",l.value.splice(l.value.indexOf(s),1),a.onError(e,s,l.value),a.onChange(s,l.value))},handleProgress:(e,t)=>{const s=o(t);s&&(a.onProgress(e,s,l.value),s.status="uploading",s.percentage=Math.round(e.percent))},handleStart:e=>{t(e.uid)&&(e.uid=ne());const s={name:e.name,percentage:0,status:"ready",size:e.size,raw:e,uid:e.uid};if("picture-card"===a.listType||"picture"===a.listType)try{s.url=URL.createObjectURL(e)}catch(o){z(Le,o.message),a.onError(o,s,l.value)}l.value=[...l.value,s],a.onChange(s,l.value)},handleSuccess:(e,t)=>{const s=o(t);s&&(s.status="success",s.response=e,a.onSuccess(e,s,l.value),a.onChange(s,l.value))},handleRemove:async t=>{const s=t instanceof File?o(t):t;s||e(Le,"file to be removed not found");const i=e=>{n(e);const t=l.value;t.splice(t.indexOf(e),1),a.onRemove(e,t),(e=>{var t;(null==(t=e.url)?void 0:t.startsWith("blob:"))&&URL.revokeObjectURL(e.url)})(e)};if(a.beforeRemove){!1!==await a.beforeRemove(s,l.value)&&i(s)}else i(s)},submit:function(){l.value.filter((({status:e})=>"ready"===e)).forEach((({raw:e})=>{var t;return e&&(null==(t=s.value)?void 0:t.upload(e))}))}}},Ue=n({name:"ElUpload"});const $e=V(j(n({...Ue,props:re,setup(e,{expose:t}){const a=e,s=N(),l=u(),o=q(),{abort:n,submit:i,clearFiles:r,uploadFiles:c,handleStart:m,handleError:y,handleRemove:h,handleSuccess:b,handleProgress:R}=_e(a,o),E=X((()=>"picture-card"===a.listType)),S=X((()=>({...a,fileList:c.value,onStart:m,onProgress:R,onSuccess:b,onError:y,onRemove:h})));return J((()=>{c.value.forEach((({url:e})=>{(null==e?void 0:e.startsWith("blob:"))&&URL.revokeObjectURL(e)}))})),W(te,{accept:G(a,"accept")}),t({abort:n,submit:i,clearFiles:r,handleStart:m,handleRemove:h}),(e,t)=>(d(),v("div",null,[g(E)&&e.showFileList?(d(),p(he,{key:0,disabled:g(l),"list-type":e.listType,files:g(c),"handle-preview":e.onPreview,onRemove:g(h)},I({append:f((()=>[F(Ce,Q({ref_key:"uploadRef",ref:o},g(S)),{default:f((()=>[g(s).trigger?k(e.$slots,"trigger",{key:0}):w("v-if",!0),!g(s).trigger&&g(s).default?k(e.$slots,"default",{key:1}):w("v-if",!0)])),_:3},16)])),_:2},[e.$slots.file?{name:"default",fn:f((({file:t})=>[k(e.$slots,"file",{file:t})]))}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):w("v-if",!0),!g(E)||g(E)&&!e.showFileList?(d(),p(Ce,Q({key:1,ref_key:"uploadRef",ref:o},g(S)),{default:f((()=>[g(s).trigger?k(e.$slots,"trigger",{key:0}):w("v-if",!0),!g(s).trigger&&g(s).default?k(e.$slots,"default",{key:1}):w("v-if",!0)])),_:3},16)):w("v-if",!0),e.$slots.trigger?k(e.$slots,"default",{key:2}):w("v-if",!0),k(e.$slots,"tip"),!g(E)&&e.showFileList?(d(),p(he,{key:3,disabled:g(l),"list-type":e.listType,files:g(c),"handle-preview":e.onPreview,onRemove:g(h)},I({_:2},[e.$slots.file?{name:"default",fn:f((({file:t})=>[k(e.$slots,"file",{file:t})]))}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):w("v-if",!0)]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]));export{$e as E};
