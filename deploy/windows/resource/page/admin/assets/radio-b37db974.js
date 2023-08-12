/*! 
 Build based on gin-vue-admin 
 Time : 1689257244000 */
import{B as e,aP as a,bp as l,aC as t,bn as n,b7 as o,bs as s,r as i,a4 as d,D as r,ah as u,c9 as c,x as p,y as v,o as h,c as f,b as m,V as b,cN as g,A as y,c4 as k,n as x,G as C,g as N,t as w,al as E,_ as S,Q as $,H as V,z as _,aR as L,ca as B,P as T,a2 as D,a as z,a5 as M,T as F,aS as R,I,a7 as H,aB as P,N as A,cf as q,c5 as j,aA as K,U as G,e as U,h as O,w as W,d as Z,J as Q,C as Y,K as J,a6 as X,aM as ee,b0 as ae,aY as le,a3 as te,bC as ne,cO as oe,cP as se,bh as ie,bq as de,a9 as re,cQ as ue,cR as ce,aQ as pe,cB as ve,cS as he,aG as fe,k as me,aO as be,af as ge,m as ye,an as ke,W as xe,br as Ce}from"./index-c2e3c879.js";import{E as Ne}from"./scrollbar-fb423cb1.js";import{b as we,E as Ee}from"./checkbox-29974445.js";import{g as Se}from"./rand-099990c4.js";import{c as $e}from"./strings-42b305d5.js";import{i as Ve}from"./isEqual-1fdac1d7.js";import{u as _e,c as Le}from"./arrays-2c626d3b.js";import{c as Be}from"./cloneDeep-98e83b3f.js";import{u as Te,E as De}from"./index-85ffef8d.js";import{t as ze,E as Me}from"./index-85cf0f80.js";import{d as Fe,C as Re}from"./tag-670fab28.js";const Ie=e({size:a,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),He=e({...Ie,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),Pe={[l]:e=>t(e)||n(e)||o(e),[s]:e=>t(e)||n(e)||o(e)},Ae=Symbol("radioGroupKey"),qe=(e,a)=>{const t=i(),n=d(Ae,void 0),o=r((()=>!!n)),s=r({get:()=>o.value?n.modelValue:e.modelValue,set(s){o.value?n.changeEvent(s):a&&a(l,s),t.value.checked=e.modelValue===e.label}}),p=u(r((()=>null==n?void 0:n.size))),v=c(r((()=>null==n?void 0:n.disabled))),h=i(!1),f=r((()=>v.value||o.value&&s.value!==e.label?-1:0));return{radioRef:t,isGroup:o,radioGroup:n,focus:h,size:p,disabled:v,tabIndex:f,modelValue:s}},je=["value","name","disabled"],Ke=p({name:"ElRadio"});var Ge=S(p({...Ke,props:He,emits:Pe,setup(e,{emit:a}){const l=e,t=v("radio"),{radioRef:n,radioGroup:o,focus:s,size:i,disabled:d,modelValue:r}=qe(l,a);function u(){$((()=>a("change",r.value)))}return(e,a)=>{var l;return h(),f("label",{class:x([y(t).b(),y(t).is("disabled",y(d)),y(t).is("focus",y(s)),y(t).is("bordered",e.border),y(t).is("checked",y(r)===e.label),y(t).m(y(i))])},[m("span",{class:x([y(t).e("input"),y(t).is("disabled",y(d)),y(t).is("checked",y(r)===e.label)])},[b(m("input",{ref_key:"radioRef",ref:n,"onUpdate:modelValue":a[0]||(a[0]=e=>k(r)?r.value=e:null),class:x(y(t).e("original")),value:e.label,name:e.name||(null==(l=y(o))?void 0:l.name),disabled:y(d),type:"radio",onFocus:a[1]||(a[1]=e=>s.value=!0),onBlur:a[2]||(a[2]=e=>s.value=!1),onChange:u},null,42,je),[[g,y(r)]]),m("span",{class:x(y(t).e("inner"))},null,2)],2),m("span",{class:x(y(t).e("label")),onKeydown:a[3]||(a[3]=E((()=>{}),["stop"]))},[C(e.$slots,"default",{},(()=>[N(w(e.label),1)]))],34)],2)}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const Ue=e({...Ie,name:{type:String,default:""}}),Oe=["value","name","disabled"],We=p({name:"ElRadioButton"});var Ze=S(p({...We,props:Ue,setup(e){const a=e,l=v("radio"),{radioRef:t,focus:n,size:o,disabled:s,modelValue:i,radioGroup:d}=qe(a),u=r((()=>({backgroundColor:(null==d?void 0:d.fill)||"",borderColor:(null==d?void 0:d.fill)||"",boxShadow:(null==d?void 0:d.fill)?`-1px 0 0 0 ${d.fill}`:"",color:(null==d?void 0:d.textColor)||""})));return(e,a)=>{var r;return h(),f("label",{class:x([y(l).b("button"),y(l).is("active",y(i)===e.label),y(l).is("disabled",y(s)),y(l).is("focus",y(n)),y(l).bm("button",y(o))])},[b(m("input",{ref_key:"radioRef",ref:t,"onUpdate:modelValue":a[0]||(a[0]=e=>k(i)?i.value=e:null),class:x(y(l).be("button","original-radio")),value:e.label,type:"radio",name:e.name||(null==(r=y(d))?void 0:r.name),disabled:y(s),onFocus:a[1]||(a[1]=e=>n.value=!0),onBlur:a[2]||(a[2]=e=>n.value=!1)},null,42,Oe),[[g,y(i)]]),m("span",{class:x(y(l).be("button","inner")),style:V(y(i)===e.label?y(u):{}),onKeydown:a[3]||(a[3]=E((()=>{}),["stop"]))},[C(e.$slots,"default",{},(()=>[N(w(e.label),1)]))],38)],2)}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const Qe=e({id:{type:String,default:void 0},size:a,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),Ye=Pe,Je=["id","aria-label","aria-labelledby"],Xe=p({name:"ElRadioGroup"});var ea=S(p({...Xe,props:Qe,emits:Ye,setup(e,{emit:a}){const t=e,n=v("radio"),o=_(),s=i(),{formItem:d}=L(),{inputId:u,isLabeledByFormItem:c}=B(t,{formItemContext:d});T((()=>{const e=s.value.querySelectorAll("[type=radio]"),a=e[0];!Array.from(e).some((e=>e.checked))&&a&&(a.tabIndex=0)}));const p=r((()=>t.name||o.value));return D(Ae,z({...M(t),changeEvent:e=>{a(l,e),$((()=>a("change",e)))},name:p})),F((()=>t.modelValue),(()=>{t.validateEvent&&(null==d||d.validate("change").catch((e=>R())))})),(e,a)=>(h(),f("div",{id:y(u),ref_key:"radioGroupRef",ref:s,class:x(y(n).b("group")),role:"radiogroup","aria-label":y(c)?void 0:e.label||"radio-group","aria-labelledby":y(c)?y(d).labelId:void 0},[C(e.$slots,"default")],10,Je))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const aa=I(Ge,{RadioButton:Ze,RadioGroup:ea});H(ea),H(Ze);var la=p({name:"NodeContent",setup:()=>({ns:v("cascader-node")}),render(){const{ns:e}=this,{node:a,panel:l}=this.$parent,{data:t,label:n}=a,{renderLabelFn:o}=l;return P("span",{class:e.e("label")},o?o({node:a,data:t}):n)}});const ta=Symbol(),na=p({name:"ElCascaderNode",components:{ElCheckbox:Ee,ElRadio:aa,NodeContent:la,ElIcon:A,Check:q,Loading:j,ArrowRight:K},props:{node:{type:Object,required:!0},menuId:String},emits:["expand"],setup(e,{emit:a}){const l=d(ta),t=v("cascader-node"),n=r((()=>l.isHoverMenu)),o=r((()=>l.config.multiple)),s=r((()=>l.config.checkStrictly)),i=r((()=>{var e;return null==(e=l.checkedNodes[0])?void 0:e.uid})),u=r((()=>e.node.isDisabled)),c=r((()=>e.node.isLeaf)),p=r((()=>s.value&&!c.value||!u.value)),h=r((()=>m(l.expandingNode))),f=r((()=>s.value&&l.checkedNodes.some(m))),m=a=>{var l;const{level:t,uid:n}=e.node;return(null==(l=null==a?void 0:a.pathNodes[t-1])?void 0:l.uid)===n},b=()=>{h.value||l.expandNode(e.node)},g=a=>{const{node:t}=e;a!==t.checked&&l.handleCheckChange(t,a)},y=()=>{l.lazyLoad(e.node,(()=>{c.value||b()}))},k=()=>{const{node:a}=e;p.value&&!a.loading&&(a.loaded?b():y())},x=a=>{e.node.loaded?(g(a),!s.value&&b()):y()};return{panel:l,isHoverMenu:n,multiple:o,checkStrictly:s,checkedNodeId:i,isDisabled:u,isLeaf:c,expandable:p,inExpandingPath:h,inCheckedPath:f,ns:t,handleHoverExpand:e=>{n.value&&(k(),!c.value&&a("expand",e))},handleExpand:k,handleClick:()=>{n.value&&!c.value||(!c.value||u.value||s.value||o.value?k():x(!0))},handleCheck:x,handleSelectCheck:a=>{s.value?(g(a),e.node.loaded&&b()):x(a)}}}}),oa=["id","aria-haspopup","aria-owns","aria-expanded","tabindex"],sa=m("span",null,null,-1);var ia=S(p({name:"ElCascaderMenu",components:{Loading:j,ElIcon:A,ElScrollbar:Ne,ElCascaderNode:S(na,[["render",function(e,a,l,t,n,o){const s=G("el-checkbox"),i=G("el-radio"),d=G("check"),r=G("el-icon"),u=G("node-content"),c=G("loading"),p=G("arrow-right");return h(),f("li",{id:`${e.menuId}-${e.node.uid}`,role:"menuitem","aria-haspopup":!e.isLeaf,"aria-owns":e.isLeaf?null:e.menuId,"aria-expanded":e.inExpandingPath,tabindex:e.expandable?-1:void 0,class:x([e.ns.b(),e.ns.is("selectable",e.checkStrictly),e.ns.is("active",e.node.checked),e.ns.is("disabled",!e.expandable),e.inExpandingPath&&"in-active-path",e.inCheckedPath&&"in-checked-path"]),onMouseenter:a[2]||(a[2]=(...a)=>e.handleHoverExpand&&e.handleHoverExpand(...a)),onFocus:a[3]||(a[3]=(...a)=>e.handleHoverExpand&&e.handleHoverExpand(...a)),onClick:a[4]||(a[4]=(...a)=>e.handleClick&&e.handleClick(...a))},[U(" prefix "),e.multiple?(h(),O(s,{key:0,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:e.isDisabled,onClick:a[0]||(a[0]=E((()=>{}),["stop"])),"onUpdate:modelValue":e.handleSelectCheck},null,8,["model-value","indeterminate","disabled","onUpdate:modelValue"])):e.checkStrictly?(h(),O(i,{key:1,"model-value":e.checkedNodeId,label:e.node.uid,disabled:e.isDisabled,"onUpdate:modelValue":e.handleSelectCheck,onClick:a[1]||(a[1]=E((()=>{}),["stop"]))},{default:W((()=>[U("\n        Add an empty element to avoid render label,\n        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485\n      "),sa])),_:1},8,["model-value","label","disabled","onUpdate:modelValue"])):e.isLeaf&&e.node.checked?(h(),O(r,{key:2,class:x(e.ns.e("prefix"))},{default:W((()=>[Z(d)])),_:1},8,["class"])):U("v-if",!0),U(" content "),Z(u),U(" postfix "),e.isLeaf?U("v-if",!0):(h(),f(Q,{key:3},[e.node.loading?(h(),O(r,{key:0,class:x([e.ns.is("loading"),e.ns.e("postfix")])},{default:W((()=>[Z(c)])),_:1},8,["class"])):(h(),O(r,{key:1,class:x(["arrow-right",e.ns.e("postfix")])},{default:W((()=>[Z(p)])),_:1},8,["class"]))],64))],42,oa)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/node.vue"]])},props:{nodes:{type:Array,required:!0},index:{type:Number,required:!0}},setup(e){const a=X(),l=v("cascader-menu"),{t:t}=Y(),n=Se();let o=null,s=null;const u=d(ta),c=i(null),p=r((()=>!e.nodes.length)),h=r((()=>!u.initialLoaded)),f=r((()=>`cascader-menu-${n}-${e.index}`)),m=()=>{s&&(clearTimeout(s),s=null)},b=()=>{c.value&&(c.value.innerHTML="",m())};return{ns:l,panel:u,hoverZone:c,isEmpty:p,isLoading:h,menuId:f,t:t,handleExpand:e=>{o=e.target},handleMouseMove:e=>{if(u.isHoverMenu&&o&&c.value)if(o.contains(e.target)){m();const l=a.vnode.el,{left:t}=l.getBoundingClientRect(),{offsetWidth:n,offsetHeight:s}=l,i=e.clientX-t,d=o.offsetTop,r=d+o.offsetHeight;c.value.innerHTML=`\n          <path style="pointer-events: auto;" fill="transparent" d="M${i} ${d} L${n} 0 V${d} Z" />\n          <path style="pointer-events: auto;" fill="transparent" d="M${i} ${r} L${n} ${s} V${r} Z" />\n        `}else s||(s=window.setTimeout(b,u.config.hoverThreshold))},clearHoverZone:b}}}),[["render",function(e,a,l,t,n,o){const s=G("el-cascader-node"),i=G("loading"),d=G("el-icon"),r=G("el-scrollbar");return h(),O(r,{key:e.menuId,tag:"ul",role:"menu",class:x(e.ns.b()),"wrap-class":e.ns.e("wrap"),"view-class":[e.ns.e("list"),e.ns.is("empty",e.isEmpty)],onMousemove:e.handleMouseMove,onMouseleave:e.clearHoverZone},{default:W((()=>{var a;return[(h(!0),f(Q,null,J(e.nodes,(a=>(h(),O(s,{key:a.uid,node:a,"menu-id":e.menuId,onExpand:e.handleExpand},null,8,["node","menu-id","onExpand"])))),128)),e.isLoading?(h(),f("div",{key:0,class:x(e.ns.e("empty-text"))},[Z(d,{size:"14",class:x(e.ns.is("loading"))},{default:W((()=>[Z(i)])),_:1},8,["class"]),N(" "+w(e.t("el.cascader.loading")),1)],2)):e.isEmpty?(h(),f("div",{key:1,class:x(e.ns.e("empty-text"))},w(e.t("el.cascader.noData")),3)):(null==(a=e.panel)?void 0:a.isHoverMenu)?(h(),f("svg",{key:2,ref:"hoverZone",class:x(e.ns.e("hover-zone"))},null,2)):U("v-if",!0)]})),_:1},8,["class","wrap-class","view-class","onMousemove","onMouseleave"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/menu.vue"]]);let da=0;class ra{constructor(e,a,l,t=!1){this.data=e,this.config=a,this.parent=l,this.root=t,this.uid=da++,this.checked=!1,this.indeterminate=!1,this.loading=!1;const{value:n,label:o,children:s}=a,i=e[s],d=(e=>{const a=[e];let{parent:l}=e;for(;l;)a.unshift(l),l=l.parent;return a})(this);this.level=t?0:l?l.level+1:1,this.value=e[n],this.label=e[o],this.pathNodes=d,this.pathValues=d.map((e=>e.value)),this.pathLabels=d.map((e=>e.label)),this.childrenData=i,this.children=(i||[]).map((e=>new ra(e,a,this))),this.loaded=!a.lazy||this.isLeaf||!ee(i)}get isDisabled(){const{data:e,parent:a,config:l}=this,{disabled:t,checkStrictly:n}=l;return(ae(t)?t(e,this):!!e[t])||!n&&(null==a?void 0:a.isDisabled)}get isLeaf(){const{data:e,config:a,childrenData:l,loaded:t}=this,{lazy:n,leaf:o}=a,s=ae(o)?o(e,this):e[o];return le(s)?!(n&&!t)&&!(Array.isArray(l)&&l.length):!!s}get valueByOption(){return this.config.emitPath?this.pathValues:this.value}appendChild(e){const{childrenData:a,children:l}=this,t=new ra(e,this.config,this);return Array.isArray(a)?a.push(e):this.childrenData=[e],l.push(t),t}calcText(e,a){const l=e?this.pathLabels.join(a):this.label;return this.text=l,l}broadcast(e,...a){const l=`onParent${$e(e)}`;this.children.forEach((t=>{t&&(t.broadcast(e,...a),t[l]&&t[l](...a))}))}emit(e,...a){const{parent:l}=this,t=`onChild${$e(e)}`;l&&(l[t]&&l[t](...a),l.emit(e,...a))}onParentCheck(e){this.isDisabled||this.setCheckState(e)}onChildCheck(){const{children:e}=this,a=e.filter((e=>!e.isDisabled)),l=!!a.length&&a.every((e=>e.checked));this.setCheckState(l)}setCheckState(e){const a=this.children.length,l=this.children.reduce(((e,a)=>e+(a.checked?1:a.indeterminate?.5:0)),0);this.checked=this.loaded&&this.children.filter((e=>!e.isDisabled)).every((e=>e.loaded&&e.checked))&&e,this.indeterminate=this.loaded&&l!==a&&l>0}doCheck(e){if(this.checked===e)return;const{checkStrictly:a,multiple:l}=this.config;a||!l?this.checked=e:(this.broadcast("check",e),this.setCheckState(e),this.emit("check"))}}const ua=(e,a)=>e.reduce(((e,l)=>(l.isLeaf?e.push(l):(!a&&e.push(l),e=e.concat(ua(l.children,a))),e)),[]);class ca{constructor(e,a){this.config=a;const l=(e||[]).map((e=>new ra(e,this.config)));this.nodes=l,this.allNodes=ua(l,!1),this.leafNodes=ua(l,!0)}getNodes(){return this.nodes}getFlattedNodes(e){return e?this.leafNodes:this.allNodes}appendNode(e,a){const l=a?a.appendChild(e):new ra(e,this.config);a||this.nodes.push(l),this.allNodes.push(l),l.isLeaf&&this.leafNodes.push(l)}appendNodes(e,a){e.forEach((e=>this.appendNode(e,a)))}getNodeByValue(e,a=!1){if(!e&&0!==e)return null;return this.getFlattedNodes(a).find((a=>Ve(a.value,e)||Ve(a.pathValues,e)))||null}getSameNode(e){if(!e)return null;return this.getFlattedNodes(!1).find((({value:a,level:l})=>Ve(e.value,a)&&e.level===l))||null}}const pa=e({modelValue:{type:te([Number,String,Array])},options:{type:te(Array),default:()=>[]},props:{type:te(Object),default:()=>({})}}),va={expandTrigger:"click",multiple:!1,checkStrictly:!1,emitPath:!0,lazy:!1,lazyLoad:ne,value:"value",label:"label",children:"children",leaf:"leaf",disabled:"disabled",hoverThreshold:500},ha=e=>{if(!e)return 0;const a=e.id.split("-");return Number(a[a.length-2])};var fa=S(p({name:"ElCascaderPanel",components:{ElCascaderMenu:ia},props:{...pa,border:{type:Boolean,default:!0},renderLabel:Function},emits:[l,s,"close","expand-change"],setup(e,{emit:a,slots:t}){let n=!1;const o=v("cascader"),d=(e=>r((()=>({...va,...e.props}))))(e);let u=null;const c=i(!0),p=i([]),h=i(null),f=i([]),m=i(null),b=i([]),g=r((()=>"hover"===d.value.expandTrigger)),y=r((()=>e.renderLabel||t.default)),k=(e,a)=>{const l=d.value;(e=e||new ra({},l,void 0,!0)).loading=!0;l.lazyLoad(e,(l=>{const t=e,n=t.root?null:t;l&&(null==u||u.appendNodes(l,n)),t.loading=!1,t.loaded=!0,t.childrenData=t.childrenData||[],a&&a(l)}))},x=(e,l)=>{var t;const{level:n}=e,o=f.value.slice(0,n);let s;e.isLeaf?s=e.pathNodes[n-2]:(s=e,o.push(e.children)),(null==(t=m.value)?void 0:t.uid)!==(null==s?void 0:s.uid)&&(m.value=e,f.value=o,!l&&a("expand-change",(null==e?void 0:e.pathValues)||[]))},C=(e,l,t=!0)=>{const{checkStrictly:o,multiple:s}=d.value,i=b.value[0];n=!0,!s&&(null==i||i.doCheck(!1)),e.doCheck(l),S(),t&&!s&&!o&&a("close"),!t&&!s&&!o&&N(e)},N=e=>{e&&(e=e.parent,N(e),e&&x(e))},w=e=>null==u?void 0:u.getFlattedNodes(e),E=e=>{var a;return null==(a=w(e))?void 0:a.filter((e=>!1!==e.checked))},S=()=>{var e;const{checkStrictly:a,multiple:l}=d.value,t=((e,a)=>{const l=a.slice(0),t=l.map((e=>e.uid)),n=e.reduce(((e,a)=>{const n=t.indexOf(a.uid);return n>-1&&(e.push(a),l.splice(n,1),t.splice(n,1)),e}),[]);return n.push(...l),n})(b.value,E(!a)),n=t.map((e=>e.valueByOption));b.value=t,h.value=l?n:null!=(e=n[0])?e:null},V=(a=!1,l=!1)=>{const{modelValue:t}=e,{lazy:o,multiple:s,checkStrictly:i}=d.value,r=!i;var p;if(c.value&&!n&&(l||!Ve(t,h.value)))if(o&&!a){const e=_e(null!=(p=Le(t))&&p.length?we(p,1/0):[]).map((e=>null==u?void 0:u.getNodeByValue(e))).filter((e=>!!e&&!e.loaded&&!e.loading));e.length?e.forEach((e=>{k(e,(()=>V(!1,l)))})):V(!0,l)}else{const e=s?Le(t):[t],a=_e(e.map((e=>null==u?void 0:u.getNodeByValue(e,r))));_(a,l),h.value=Be(t)}},_=(e,a=!0)=>{const{checkStrictly:l}=d.value,t=b.value,n=e.filter((e=>!!e&&(l||e.isLeaf))),o=null==u?void 0:u.getSameNode(m.value),s=a&&o||n[0];s?s.pathNodes.forEach((e=>x(e,!0))):m.value=null,t.forEach((e=>e.doCheck(!1))),n.forEach((e=>e.doCheck(!0))),b.value=n,$(L)},L=()=>{ie&&p.value.forEach((e=>{const a=null==e?void 0:e.$el;if(a){const e=a.querySelector(`.${o.namespace.value}-scrollbar__wrap`),l=a.querySelector(`.${o.b("node")}.${o.is("active")}`)||a.querySelector(`.${o.b("node")}.in-active-path`);de(e,l)}}))};return D(ta,z({config:d,expandingNode:m,checkedNodes:b,isHoverMenu:g,initialLoaded:c,renderLabelFn:y,lazyLoad:k,expandNode:x,handleCheckChange:C})),F([d,()=>e.options],(()=>{const{options:a}=e,l=d.value;n=!1,u=new ca(a,l),f.value=[u.getNodes()],l.lazy&&ee(e.options)?(c.value=!1,k(void 0,(e=>{e&&(u=new ca(e,l),f.value=[u.getNodes()]),c.value=!0,V(!1,!0)}))):V(!1,!0)}),{deep:!0,immediate:!0}),F((()=>e.modelValue),(()=>{n=!1,V()}),{deep:!0}),F((()=>h.value),(t=>{Ve(t,e.modelValue)||(a(l,t),a(s,t))})),se((()=>p.value=[])),T((()=>!ee(e.modelValue)&&V())),{ns:o,menuList:p,menus:f,checkedNodes:b,handleKeyDown:e=>{const a=e.target,{code:l}=e;switch(l){case re.up:case re.down:{e.preventDefault();const t=l===re.up?-1:1;ue(ce(a,t,`.${o.b("node")}[tabindex="-1"]`));break}case re.left:{e.preventDefault();const l=p.value[ha(a)-1],t=null==l?void 0:l.$el.querySelector(`.${o.b("node")}[aria-expanded="true"]`);ue(t);break}case re.right:{e.preventDefault();const l=p.value[ha(a)+1],t=null==l?void 0:l.$el.querySelector(`.${o.b("node")}[tabindex="-1"]`);ue(t);break}case re.enter:(e=>{if(!e)return;const a=e.querySelector("input");a?a.click():oe(e)&&e.click()})(a)}},handleCheckChange:C,getFlattedNodes:w,getCheckedNodes:E,clearCheckedNodes:()=>{b.value.forEach((e=>e.doCheck(!1))),S(),f.value=f.value.slice(0,1),m.value=null,a("expand-change",[])},calculateCheckedValue:S,scrollToExpandingNode:L}}}),[["render",function(e,a,l,t,n,o){const s=G("el-cascader-menu");return h(),f("div",{class:x([e.ns.b("panel"),e.ns.is("bordered",e.border)]),onKeydown:a[0]||(a[0]=(...a)=>e.handleKeyDown&&e.handleKeyDown(...a))},[(h(!0),f(Q,null,J(e.menus,((a,l)=>(h(),O(s,{key:l,ref_for:!0,ref:a=>e.menuList[l]=a,index:l,nodes:[...a]},null,8,["index","nodes"])))),128))],34)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/index.vue"]]);fa.install=e=>{e.component(fa.name,fa)};const ma=fa,ba=e({...pa,size:a,placeholder:String,disabled:Boolean,clearable:Boolean,filterable:Boolean,filterMethod:{type:te(Function),default:(e,a)=>e.text.includes(a)},separator:{type:String,default:" / "},showAllLevels:{type:Boolean,default:!0},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},debounce:{type:Number,default:300},beforeFilter:{type:te(Function),default:()=>!0},popperClass:{type:String,default:""},teleported:Te.teleported,tagType:{...ze.type,default:"info"},validateEvent:{type:Boolean,default:!0}}),ga={[l]:e=>!!e||null===e,[s]:e=>!!e||null===e,focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,visibleChange:e=>o(e),expandChange:e=>!!e,removeTag:e=>!!e},ya={key:0},ka=["placeholder","onKeydown"],xa=["onClick"],Ca=p({name:"ElCascader"});var Na=S(p({...Ca,props:ba,emits:ga,setup(e,{expose:a,emit:t}){const n=e,o={modifiers:[{name:"arrowPosition",enabled:!0,phase:"main",fn:({state:e})=>{const{modifiersData:a,placement:l}=e;["right","left","bottom","top"].includes(l)||(a.arrow.x=35)},requires:["arrow"]}]},d=pe();let c=0,p=0;const g=v("cascader"),N=v("input"),{t:S}=Y(),{form:_,formItem:B}=L(),D=i(null),z=i(null),M=i(null),I=i(null),H=i(null),P=i(!1),j=i(!1),K=i(!1),G=i(!1),X=i(""),ee=i(""),ae=i([]),le=i([]),te=i([]),ne=i(!1),oe=r((()=>d.style)),se=r((()=>n.disabled||(null==_?void 0:_.disabled))),de=r((()=>n.placeholder||S("el.cascader.placeholder"))),we=r((()=>ee.value||ae.value.length>0||ne.value?"":de.value)),Ee=u(),Se=r((()=>["small"].includes(Ee.value)?"small":"default")),$e=r((()=>!!n.props.multiple)),Ve=r((()=>!n.filterable||$e.value)),_e=r((()=>$e.value?ee.value:X.value)),Le=r((()=>{var e;return(null==(e=I.value)?void 0:e.checkedNodes)||[]})),Te=r((()=>!(!n.clearable||se.value||K.value||!j.value)&&!!Le.value.length)),ze=r((()=>{const{showAllLevels:e,separator:a}=n,l=Le.value;return l.length?$e.value?"":l[0].calcText(e,a):""})),Ie=r({get:()=>Be(n.modelValue),set(e){t(l,e),t(s,e),n.validateEvent&&(null==B||B.validate("change").catch((e=>R())))}}),He=r((()=>[g.b(),g.m(Ee.value),g.is("disabled",se.value),d.class])),Pe=r((()=>[N.e("icon"),"icon-arrow-down",g.is("reverse",P.value)])),Ae=r((()=>g.is("focus",P.value||G.value))),qe=r((()=>{var e,a;return null==(a=null==(e=D.value)?void 0:e.popperRef)?void 0:a.contentRef})),je=e=>{var a,l,o;se.value||(e=null!=e?e:!P.value)!==P.value&&(P.value=e,null==(l=null==(a=z.value)?void 0:a.input)||l.setAttribute("aria-expanded",`${e}`),e?(Ke(),$(null==(o=I.value)?void 0:o.scrollToExpandingNode)):n.filterable&&aa(),t("visibleChange",e))},Ke=()=>{$((()=>{var e;null==(e=D.value)||e.updatePopper()}))},Ge=()=>{K.value=!1},Ue=e=>{const{showAllLevels:a,separator:l}=n;return{node:e,key:e.uid,text:e.calcText(a,l),hitState:!1,closable:!se.value&&!e.isDisabled,isCollapseTag:!1}},Oe=e=>{var a;const l=e.node;l.doCheck(!1),null==(a=I.value)||a.calculateCheckedValue(),t("removeTag",l.valueByOption)},We=()=>{var e,a;const{filterMethod:l,showAllLevels:t,separator:o}=n,s=null==(a=null==(e=I.value)?void 0:e.getFlattedNodes(!n.props.checkStrictly))?void 0:a.filter((e=>!e.isDisabled&&(e.calcText(t,o),l(e,_e.value))));$e.value&&(ae.value.forEach((e=>{e.hitState=!1})),le.value.forEach((e=>{e.hitState=!1}))),K.value=!0,te.value=s,Ke()},Ze=()=>{var e;let a;a=K.value&&H.value?H.value.$el.querySelector(`.${g.e("suggestion-item")}`):null==(e=I.value)?void 0:e.$el.querySelector(`.${g.b("node")}[tabindex="-1"]`),a&&(a.focus(),!K.value&&a.click())},Qe=()=>{var e,a;const l=null==(e=z.value)?void 0:e.input,t=M.value,n=null==(a=H.value)?void 0:a.$el;if(ie&&l){if(n){n.querySelector(`.${g.e("suggestion-list")}`).style.minWidth=`${l.offsetWidth}px`}if(t){const{offsetHeight:e}=t,a=ae.value.length>0?`${Math.max(e+6,c)}px`:`${c}px`;l.style.height=a,Ke()}}},Ye=e=>{Ke(),t("expandChange",e)},Je=e=>{var a;const l=null==(a=e.target)?void 0:a.value;if("compositionend"===e.type)ne.value=!1,$((()=>ia(l)));else{const e=l[l.length-1]||"";ne.value=!Ce(e)}},Xe=e=>{if(!ne.value)switch(e.code){case re.enter:je();break;case re.down:je(!0),$(Ze),e.preventDefault();break;case re.esc:!0===P.value&&(e.preventDefault(),e.stopPropagation(),je(!1));break;case re.tab:je(!1)}},ea=()=>{var e;null==(e=I.value)||e.clearCheckedNodes(),!P.value&&n.filterable&&aa(),je(!1)},aa=()=>{const{value:e}=ze;X.value=e,ee.value=e},la=e=>{const a=e.target,{code:l}=e;switch(l){case re.up:case re.down:{const e=l===re.up?-1:1;ue(ce(a,e,`.${g.e("suggestion-item")}[tabindex="-1"]`));break}case re.enter:a.click()}},ta=()=>{const e=ae.value,a=e[e.length-1];p=ee.value?0:p+1,!a||!p||n.collapseTags&&e.length>1||(a.hitState?Oe(a):a.hitState=!0)},na=e=>{const a=e.target,l=g.e("search-input");a.className===l&&(G.value=!0),t("focus",e)},oa=e=>{G.value=!1,t("blur",e)},sa=Fe((()=>{const{value:e}=_e;if(!e)return;const a=n.beforeFilter(e);ve(a)?a.then(We).catch((()=>{})):!1!==a?We():Ge()}),n.debounce),ia=(e,a)=>{!P.value&&je(!0),(null==a?void 0:a.isComposing)||(e?sa():Ge())};return F(K,Ke),F([Le,se],(()=>{if(!$e.value)return;const e=Le.value,a=[],l=[];if(e.forEach((e=>l.push(Ue(e)))),le.value=l,e.length){const[l,...t]=e,o=t.length;a.push(Ue(l)),o&&(n.collapseTags?a.push({key:-1,text:`+ ${o}`,closable:!1,isCollapseTag:!0}):t.forEach((e=>a.push(Ue(e)))))}ae.value=a})),F(ae,(()=>{$((()=>Qe()))})),F(ze,aa,{immediate:!0}),T((()=>{const e=z.value.input,a=Number.parseFloat(he(N.cssVarName("input-height"),e).value)-2;c=e.offsetHeight||a,fe(e,Qe)})),a({getCheckedNodes:e=>{var a;return null==(a=I.value)?void 0:a.getCheckedNodes(e)},cascaderPanelRef:I,togglePopperVisible:je,contentRef:qe}),(e,a)=>(h(),O(y(De),{ref_key:"tooltipRef",ref:D,visible:P.value,teleported:e.teleported,"popper-class":[y(g).e("dropdown"),e.popperClass],"popper-options":o,"fallback-placements":["bottom-start","bottom","top-start","top","right","left"],"stop-popper-mouse-event":!1,"gpu-acceleration":!1,placement:"bottom-start",transition:`${y(g).namespace.value}-zoom-in-top`,effect:"light",pure:"",persistent:"",onHide:Ge},{default:W((()=>[b((h(),f("div",{class:x(y(He)),style:V(y(oe)),onClick:a[5]||(a[5]=()=>je(!y(Ve)||void 0)),onKeydown:Xe,onMouseenter:a[6]||(a[6]=e=>j.value=!0),onMouseleave:a[7]||(a[7]=e=>j.value=!1)},[Z(y(me),{ref_key:"input",ref:z,modelValue:X.value,"onUpdate:modelValue":a[1]||(a[1]=e=>X.value=e),placeholder:y(we),readonly:y(Ve),disabled:y(se),"validate-event":!1,size:y(Ee),class:x(y(Ae)),tabindex:y($e)&&e.filterable&&!y(se)?-1:void 0,onCompositionstart:Je,onCompositionupdate:Je,onCompositionend:Je,onFocus:na,onBlur:oa,onInput:ia},{suffix:W((()=>[y(Te)?(h(),O(y(A),{key:"clear",class:x([y(N).e("icon"),"icon-circle-close"]),onClick:E(ea,["stop"])},{default:W((()=>[Z(y(be))])),_:1},8,["class","onClick"])):(h(),O(y(A),{key:"arrow-down",class:x(y(Pe)),onClick:a[0]||(a[0]=E((e=>je()),["stop"]))},{default:W((()=>[Z(y(ge))])),_:1},8,["class"]))])),_:1},8,["modelValue","placeholder","readonly","disabled","size","class","tabindex"]),y($e)?(h(),f("div",{key:0,ref_key:"tagWrapper",ref:M,class:x(y(g).e("tags"))},[(h(!0),f(Q,null,J(ae.value,(a=>(h(),O(y(Me),{key:a.key,type:e.tagType,size:y(Se),hit:a.hitState,closable:a.closable,"disable-transitions":"",onClose:e=>Oe(a)},{default:W((()=>[!1===a.isCollapseTag?(h(),f("span",ya,w(a.text),1)):(h(),O(y(De),{key:1,disabled:P.value||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],placement:"bottom",effect:"light"},{default:W((()=>[m("span",null,w(a.text),1)])),content:W((()=>[m("div",{class:x(y(g).e("collapse-tags"))},[(h(!0),f(Q,null,J(le.value.slice(1),((a,l)=>(h(),f("div",{key:l,class:x(y(g).e("collapse-tag"))},[(h(),O(y(Me),{key:a.key,class:"in-tooltip",type:e.tagType,size:y(Se),hit:a.hitState,closable:a.closable,"disable-transitions":"",onClose:e=>Oe(a)},{default:W((()=>[m("span",null,w(a.text),1)])),_:2},1032,["type","size","hit","closable","onClose"]))],2)))),128))],2)])),_:2},1032,["disabled"]))])),_:2},1032,["type","size","hit","closable","onClose"])))),128)),e.filterable&&!y(se)?b((h(),f("input",{key:0,"onUpdate:modelValue":a[2]||(a[2]=e=>ee.value=e),type:"text",class:x(y(g).e("search-input")),placeholder:y(ze)?"":y(de),onInput:a[3]||(a[3]=e=>ia(ee.value,e)),onClick:a[4]||(a[4]=E((e=>je(!0)),["stop"])),onKeydown:ye(ta,["delete"]),onCompositionstart:Je,onCompositionupdate:Je,onCompositionend:Je,onFocus:na,onBlur:oa},null,42,ka)),[[ke,ee.value]]):U("v-if",!0)],2)):U("v-if",!0)],38)),[[y(Re),()=>je(!1),y(qe)]])])),content:W((()=>[b(Z(y(ma),{ref_key:"cascaderPanelRef",ref:I,modelValue:y(Ie),"onUpdate:modelValue":a[8]||(a[8]=e=>k(Ie)?Ie.value=e:null),options:e.options,props:n.props,border:!1,"render-label":e.$slots.default,onExpandChange:Ye,onClose:a[9]||(a[9]=a=>e.$nextTick((()=>je(!1))))},null,8,["modelValue","options","props","render-label"]),[[xe,!K.value]]),e.filterable?b((h(),O(y(Ne),{key:0,ref_key:"suggestionPanel",ref:H,tag:"ul",class:x(y(g).e("suggestion-panel")),"view-class":y(g).e("suggestion-list"),onKeydown:la},{default:W((()=>[te.value.length?(h(!0),f(Q,{key:0},J(te.value,(e=>(h(),f("li",{key:e.uid,class:x([y(g).e("suggestion-item"),y(g).is("checked",e.checked)]),tabindex:-1,onClick:a=>(e=>{var a,l;const{checked:t}=e;$e.value?null==(a=I.value)||a.handleCheckChange(e,!t,!1):(!t&&(null==(l=I.value)||l.handleCheckChange(e,!0,!1)),je(!1))})(e)},[m("span",null,w(e.text),1),e.checked?(h(),O(y(A),{key:0},{default:W((()=>[Z(y(q))])),_:1})):U("v-if",!0)],10,xa)))),128)):C(e.$slots,"empty",{key:1},(()=>[m("li",{class:x(y(g).e("empty-text"))},w(y(S)("el.cascader.noMatch")),3)]))])),_:3},8,["class","view-class"])),[[xe,K.value]]):U("v-if",!0)])),_:3},8,["visible","teleported","popper-class","transition"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader/src/cascader.vue"]]);Na.install=e=>{e.component(Na.name,Na)};const wa=Na;export{wa as E};