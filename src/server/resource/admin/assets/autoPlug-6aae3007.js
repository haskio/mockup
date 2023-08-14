/*! 
 Build based on gin-vue-admin 
 Time : 1691990628000 */
import{a as e,o as l,c as a,b as o,d as u,w as s,h as n,J as t,K as d,A as p,cB as r,c_ as i,e as m,g as c,j as V,$ as b,k as f,E as y}from"./index-55b51a59.js";import{a as k,E as h}from"./form-item-68c1b6c2.js";/* empty css               *//* empty css              */import"./tag-4b0d6238.js";import{E as g,a as v}from"./select-fcf2e2fa.js";import"./scrollbar-9d29af78.js";/* empty css               */import{E as _}from"./checkbox-665ffa55.js";import{b as U}from"./stringFun-647a78e9.js";import{k as j}from"./autoCode-2b3ff15e.js";import{_ as R}from"./_plugin-vue_export-helper-1b428a4d.js";import"./_baseClone-7c51875e.js";import"./_Uint8Array-c958d774.js";import"./_initCloneObject-11c71fb8.js";import"./index-a9b8d526.js";import"./index-78c734bf.js";import"./strings-2efbda10.js";import"./isEqual-201a2fd8.js";const q={class:"gva-table-box"},C=R({__name:"autoPlug",setup(R){const C=e({plugName:"",routerGroup:"",hasGlobal:!0,hasRequest:!0,hasResponse:!0,global:[{key:"",type:"",desc:""}],request:[{key:"",type:"",desc:""}],response:[{key:"",type:"",desc:""}]}),G=()=>{C.plugName=U(C.plugName)},x=async()=>{if(!C.plugName||!C.routerGroup)return void V.error("插件名称和插件路由组为必填项");if(C.hasGlobal){if(C.global.some((e=>{if(!e.key||!e.type)return!0})))return void V.error("全局属性的key和type为必填项")}if(C.hasRequest){if(C.request.some((e=>{if(!e.key||!e.type)return!0})))return void V.error("请求属性的key和type为必填项")}if(C.hasResponse){if(C.response.some((e=>{if(!e.key||!e.type)return!0})))return void V.error("响应属性的key和type为必填项")}0===(await j(C)).code&&b("创建成功，插件已自动写入后端plugin目录下，请按照自己的逻辑进行创造")},w=e=>{e.push({key:"",value:""})},N=(e,l)=>{1!==e.length?e.splice(l,1):V.warning("至少有一个全局属性")};return(e,V)=>{const b=f,U=k,j=_,R=g,E=v,A=y,B=h;return l(),a("div",null,[o("div",q,[u(B,{"label-width":"140px",class:"plug-form"},{default:s((()=>[u(U,{label:"插件名"},{default:s((()=>[u(b,{modelValue:C.plugName,"onUpdate:modelValue":V[0]||(V[0]=e=>C.plugName=e),placeholder:"必填（英文大写字母开头）",onBlur:G},null,8,["modelValue"])])),_:1}),u(U,{label:"路由组"},{default:s((()=>[u(b,{modelValue:C.routerGroup,"onUpdate:modelValue":V[1]||(V[1]=e=>C.routerGroup=e),placeholder:"将会作为插件路由组使用"},null,8,["modelValue"])])),_:1}),u(U,{label:"使用全局属性"},{default:s((()=>[u(j,{modelValue:C.hasGlobal,"onUpdate:modelValue":V[2]||(V[2]=e=>C.hasGlobal=e)},null,8,["modelValue"])])),_:1}),C.hasGlobal?(l(),n(U,{key:0,label:"全局属性"},{default:s((()=>[(l(!0),a(t,null,d(C.global,((e,n)=>(l(),a("div",{key:n,class:"plug-row"},[o("span",null,[u(b,{modelValue:e.key,"onUpdate:modelValue":l=>e.key=l,placeholder:"key 必填"},null,8,["modelValue","onUpdate:modelValue"])]),o("span",null,[u(E,{modelValue:e.type,"onUpdate:modelValue":l=>e.type=l,placeholder:"type 必填"},{default:s((()=>[u(R,{label:"string",value:"string"}),u(R,{label:"int",value:"int"}),u(R,{label:"float32",value:"float32"}),u(R,{label:"float64",value:"float64"}),u(R,{label:"bool",value:"bool"})])),_:2},1032,["modelValue","onUpdate:modelValue"])]),o("span",null,[u(b,{modelValue:e.desc,"onUpdate:modelValue":l=>e.desc=l,placeholder:"备注 必填"},null,8,["modelValue","onUpdate:modelValue"])]),o("span",null,[u(A,{icon:p(r),circle:"",onClick:V[3]||(V[3]=e=>w(C.global))},null,8,["icon"])]),o("span",null,[u(A,{icon:p(i),circle:"",onClick:e=>N(C.global,n)},null,8,["icon","onClick"])])])))),128))])),_:1})):m("",!0),u(U,{label:"使用Request"},{default:s((()=>[u(j,{modelValue:C.hasRequest,"onUpdate:modelValue":V[4]||(V[4]=e=>C.hasRequest=e)},null,8,["modelValue"])])),_:1}),C.hasRequest?(l(),n(U,{key:1,label:"Request"},{default:s((()=>[(l(!0),a(t,null,d(C.request,((e,n)=>(l(),a("div",{key:n,class:"plug-row"},[o("span",null,[u(b,{modelValue:e.key,"onUpdate:modelValue":l=>e.key=l,placeholder:"key 必填"},null,8,["modelValue","onUpdate:modelValue"])]),o("span",null,[u(E,{modelValue:e.type,"onUpdate:modelValue":l=>e.type=l,placeholder:"type 必填"},{default:s((()=>[u(R,{label:"string",value:"string"}),u(R,{label:"int",value:"int"}),u(R,{label:"float32",value:"float32"}),u(R,{label:"float64",value:"float64"}),u(R,{label:"bool",value:"bool"})])),_:2},1032,["modelValue","onUpdate:modelValue"])]),o("span",null,[u(b,{modelValue:e.desc,"onUpdate:modelValue":l=>e.desc=l,placeholder:"备注 必填"},null,8,["modelValue","onUpdate:modelValue"])]),o("span",null,[u(A,{icon:p(r),circle:"",onClick:V[5]||(V[5]=e=>w(C.request))},null,8,["icon"])]),o("span",null,[u(A,{icon:p(i),circle:"",onClick:e=>N(C.request,n)},null,8,["icon","onClick"])])])))),128))])),_:1})):m("",!0),u(U,{label:"使用Response"},{default:s((()=>[u(j,{modelValue:C.hasResponse,"onUpdate:modelValue":V[6]||(V[6]=e=>C.hasResponse=e)},null,8,["modelValue"])])),_:1}),C.hasResponse?(l(),n(U,{key:2,label:"Response"},{default:s((()=>[(l(!0),a(t,null,d(C.response,((e,n)=>(l(),a("div",{key:n,class:"plug-row"},[o("span",null,[u(b,{modelValue:e.key,"onUpdate:modelValue":l=>e.key=l,placeholder:"key 必填"},null,8,["modelValue","onUpdate:modelValue"])]),o("span",null,[u(E,{modelValue:e.type,"onUpdate:modelValue":l=>e.type=l,placeholder:"type 必填"},{default:s((()=>[u(R,{label:"string",value:"string"}),u(R,{label:"int",value:"int"}),u(R,{label:"float32",value:"float32"}),u(R,{label:"float64",value:"float64"}),u(R,{label:"bool",value:"bool"})])),_:2},1032,["modelValue","onUpdate:modelValue"])]),o("span",null,[u(b,{modelValue:e.desc,"onUpdate:modelValue":l=>e.desc=l,placeholder:"备注 必填"},null,8,["modelValue","onUpdate:modelValue"])]),o("span",null,[u(A,{icon:p(r),circle:"",onClick:V[7]||(V[7]=e=>w(C.response))},null,8,["icon"])]),o("span",null,[u(A,{icon:p(i),circle:"",onClick:e=>N(C.response,n)},null,8,["icon","onClick"])])])))),128))])),_:1})):m("",!0),u(U,null,{default:s((()=>[u(A,{type:"primary",onClick:x},{default:s((()=>[c("创建")])),_:1})])),_:1})])),_:1})])])}}},[["__scopeId","data-v-a6df940b"]]);export{C as default};
