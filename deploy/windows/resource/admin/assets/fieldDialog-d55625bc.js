/*! 
 Build based on gin-vue-admin 
 Time : 1691990628000 */
import{r as e,o as l,c as a,d as o,w as u,J as t,K as d,h as r,k as i,E as s,q as p,v as m,b as n}from"./index-55b51a59.js";import{a as f,E as c}from"./form-item-68c1b6c2.js";import{E as v}from"./switch-2a91b686.js";/* empty css              */import"./tag-4b0d6238.js";import{E as b,a as y}from"./select-fcf2e2fa.js";import"./scrollbar-9d29af78.js";/* empty css               *//* empty css               */import{a as V,t as g}from"./stringFun-647a78e9.js";import{g as _}from"./sysDictionary-f8e62231.js";import{W as j}from"./warningBar-f0e3dc49.js";import{_ as T}from"./_plugin-vue_export-helper-1b428a4d.js";import"./_baseClone-7c51875e.js";import"./_Uint8Array-c958d774.js";import"./_initCloneObject-11c71fb8.js";import"./index-a9b8d526.js";import"./index-78c734bf.js";import"./strings-2efbda10.js";import"./isEqual-201a2fd8.js";/* empty css             */const h=(e=>(p("data-v-06e681e0"),e=e(),m(),e))((()=>n("span",{style:{"font-size":"12px"}},"自动填充",-1))),U={name:"FieldDialog"},N=T(Object.assign(U,{props:{dialogMiddle:{type:Object,default:function(){return{}}},typeOptions:{type:Array,default:function(){return[]}},typeSearchOptions:{type:Array,default:function(){return[]}}},setup(p,{expose:m}){const n=p,T=e({}),U=e([]),N=e({fieldName:[{required:!0,message:"请输入字段英文名",trigger:"blur"}],fieldDesc:[{required:!0,message:"请输入字段中文名",trigger:"blur"}],fieldJson:[{required:!0,message:"请输入字段格式化json",trigger:"blur"}],columnName:[{required:!0,message:"请输入数据库字段",trigger:"blur"}],fieldType:[{required:!0,message:"请选择字段类型",trigger:"blur"}]});(async()=>{T.value=n.dialogMiddle;const e=await _({page:1,pageSize:999999});U.value=e.data.list})();const E=()=>{T.value.fieldJson=V(T.value.fieldName),T.value.columnName=g(T.value.fieldJson)},w=e=>{const l=T.value.fieldType;return"string"!==l&&"LIKE"===e||"int"!==l&&"time.Time"!==l&&"float64"!==l&&("BETWEEN"===e||"NOT BETWEEN"===e)},x=()=>{T.value.fieldSearchType="",T.value.dictType=""},q=e(null);return m({fieldDialogFrom:q}),(e,m)=>{const n=i,V=s,g=f,_=b,O=y,D=v,J=c;return l(),a("div",null,[o(j,{title:"id , created_at , updated_at , deleted_at 会自动生成请勿重复创建。搜索时如果条件为LIKE只支持字符串"}),o(J,{ref_key:"fieldDialogFrom",ref:q,model:T.value,"label-width":"120px","label-position":"right",rules:N.value,class:"grid-form"},{default:u((()=>[o(g,{label:"字段名称",prop:"fieldName"},{default:u((()=>[o(n,{modelValue:T.value.fieldName,"onUpdate:modelValue":m[0]||(m[0]=e=>T.value.fieldName=e),autocomplete:"off",style:{width:"80%"}},null,8,["modelValue"]),o(V,{style:{width:"18%","margin-left":"2%"},onClick:E},{default:u((()=>[h])),_:1})])),_:1}),o(g,{label:"字段中文名",prop:"fieldDesc"},{default:u((()=>[o(n,{modelValue:T.value.fieldDesc,"onUpdate:modelValue":m[1]||(m[1]=e=>T.value.fieldDesc=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),o(g,{label:"字段JSON",prop:"fieldJson"},{default:u((()=>[o(n,{modelValue:T.value.fieldJson,"onUpdate:modelValue":m[2]||(m[2]=e=>T.value.fieldJson=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),o(g,{label:"数据库字段名",prop:"columnName"},{default:u((()=>[o(n,{modelValue:T.value.columnName,"onUpdate:modelValue":m[3]||(m[3]=e=>T.value.columnName=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),o(g,{label:"数据库字段描述",prop:"comment"},{default:u((()=>[o(n,{modelValue:T.value.comment,"onUpdate:modelValue":m[4]||(m[4]=e=>T.value.comment=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),o(g,{label:"字段类型",prop:"fieldType"},{default:u((()=>[o(O,{modelValue:T.value.fieldType,"onUpdate:modelValue":m[5]||(m[5]=e=>T.value.fieldType=e),style:{width:"100%"},placeholder:"请选择字段类型",clearable:"",onChange:x},{default:u((()=>[(l(!0),a(t,null,d(p.typeOptions,(e=>(l(),r(_,{key:e.value,label:e.label,value:e.value,disabled:e.disabled},null,8,["label","value","disabled"])))),128))])),_:1},8,["modelValue"])])),_:1}),o(g,{label:"enum"===T.value.fieldType?"枚举值":"类型长度",prop:"dataTypeLong"},{default:u((()=>[o(n,{modelValue:T.value.dataTypeLong,"onUpdate:modelValue":m[6]||(m[6]=e=>T.value.dataTypeLong=e),placeholder:"enum"===T.value.fieldType?"例:'北京','天津'":"数据库类型长度"},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),o(g,{label:"字段查询条件",prop:"fieldSearchType"},{default:u((()=>[o(O,{modelValue:T.value.fieldSearchType,"onUpdate:modelValue":m[7]||(m[7]=e=>T.value.fieldSearchType=e),style:{width:"100%"},placeholder:"请选择字段查询条件",clearable:""},{default:u((()=>[(l(!0),a(t,null,d(p.typeSearchOptions,(e=>(l(),r(_,{key:e.value,label:e.label,value:e.value,disabled:w(e.value)},null,8,["label","value","disabled"])))),128))])),_:1},8,["modelValue"])])),_:1}),o(g,{label:"关联字典",prop:"dictType"},{default:u((()=>[o(O,{modelValue:T.value.dictType,"onUpdate:modelValue":m[8]||(m[8]=e=>T.value.dictType=e),style:{width:"100%"},disabled:"int"!==T.value.fieldType,placeholder:"请选择字典",clearable:""},{default:u((()=>[(l(!0),a(t,null,d(U.value,(e=>(l(),r(_,{key:e.type,label:"".concat(e.type,"(").concat(e.name,")"),value:e.type},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1}),o(g,{label:"是否排序"},{default:u((()=>[o(D,{modelValue:T.value.sort,"onUpdate:modelValue":m[9]||(m[9]=e=>T.value.sort=e)},null,8,["modelValue"])])),_:1}),o(g,{label:"是否必填"},{default:u((()=>[o(D,{modelValue:T.value.require,"onUpdate:modelValue":m[10]||(m[10]=e=>T.value.require=e)},null,8,["modelValue"])])),_:1}),o(g,{label:"是否可清空"},{default:u((()=>[o(D,{modelValue:T.value.clearable,"onUpdate:modelValue":m[11]||(m[11]=e=>T.value.clearable=e)},null,8,["modelValue"])])),_:1}),o(g,{label:"校验失败文案"},{default:u((()=>[o(n,{modelValue:T.value.errorText,"onUpdate:modelValue":m[12]||(m[12]=e=>T.value.errorText=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])}}}),[["__scopeId","data-v-06e681e0"]]);export{N as default};
