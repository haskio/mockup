/*! 
 Build based on gin-vue-admin 
 Time : 1689257244000 */
import{bj as e,a4 as l,D as t,bk as o,bl as a,T as n,A as s,a6 as i,_ as r,x as u,y as p,a as d,a5 as c,ag as v,Q as h,V as m,W as f,o as b,c as g,G as y,b as C,t as S,n as O,al as x,r as w,P as L,aG as T,H as I,C as E,ay as M,O as P,aR as V,ah as k,aS as D,b0 as z,bm as W,bh as q,bn as A,bo as B,aJ as K,a9 as H,bp as F,aC as R,bq as _,br as $,bs as j,k as Q,N,bt as G,a1 as U,aO as J,af as X,a2 as Y,bu as Z,U as ee,bv as le,d as te,w as oe,h as ae,X as ne,J as se,K as ie,e as re,m as ue,an as pe,ai as de,M as ce,I as ve,a7 as he}from"./index-c2e3c879.js";import{E as me,u as fe,a as be}from"./index-85ffef8d.js";import{E as ge}from"./scrollbar-fb423cb1.js";import{E as ye,t as Ce}from"./index-85cf0f80.js";import{e as Se}from"./strings-42b305d5.js";import{i as Oe}from"./isEqual-1fdac1d7.js";import{d as xe,C as we}from"./tag-670fab28.js";const Le=Symbol("ElSelectGroup"),Te=Symbol("ElSelect");var Ie=r(u({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const r=p("select"),u=d({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:m,itemSelected:f,isDisabled:b,select:g,hoverItem:y}=function(e,r){const u=l(Te),p=l(Le,{disabled:!1}),d=t((()=>"[object object]"===Object.prototype.toString.call(e.value).toLowerCase())),c=t((()=>u.props.multiple?g(u.props.modelValue,e.value):y(e.value,u.props.modelValue))),v=t((()=>{if(u.props.multiple){const e=u.props.modelValue||[];return!c.value&&e.length>=u.props.multipleLimit&&u.props.multipleLimit>0}return!1})),h=t((()=>e.label||(d.value?"":e.value))),m=t((()=>e.value||e.label||"")),f=t((()=>e.disabled||r.groupDisabled||v.value)),b=i(),g=(e=[],l)=>{if(d.value){const t=u.props.valueKey;return e&&e.some((e=>o(a(e,t))===a(l,t)))}return e&&e.includes(l)},y=(e,l)=>{if(d.value){const{valueKey:t}=u.props;return a(e,t)===a(l,t)}return e===l};n((()=>h.value),(()=>{e.created||u.props.remote||u.setSelected()})),n((()=>e.value),((l,t)=>{const{remote:o,valueKey:a}=u.props;if(Object.is(l,t)||(u.onOptionDestroy(t,b.proxy),u.onOptionCreate(b.proxy)),!e.created&&!o){if(a&&"object"==typeof l&&"object"==typeof t&&l[a]===t[a])return;u.setSelected()}})),n((()=>p.disabled),(()=>{r.groupDisabled=p.disabled}),{immediate:!0});const{queryChange:C}=o(u);return n(C,(l=>{const{query:t}=s(l),o=new RegExp(Se(t),"i");r.visible=o.test(h.value)||e.created,r.visible||u.filteredOptionsCount--}),{immediate:!0}),{select:u,currentLabel:h,currentValue:m,itemSelected:c,isDisabled:f,hoverItem:()=>{e.disabled||p.disabled||(u.hoverIndex=u.optionsArray.indexOf(b.proxy))}}}(e,u),{visible:C,hover:S}=c(u),O=i().proxy;return g.onOptionCreate(O),v((()=>{const e=O.value,{selected:l}=g,t=(g.props.multiple?l:[l]).some((e=>e.value===O.value));h((()=>{g.cachedOptions.get(e)!==O||t||g.cachedOptions.delete(e)})),g.onOptionDestroy(e,O)})),{ns:r,currentLabel:m,itemSelected:f,isDisabled:b,select:g,hoverItem:y,visible:C,hover:S,selectOptionClick:function(){!0!==e.disabled&&!0!==u.groupDisabled&&g.handleOptionSelect(O)},states:u}}}),[["render",function(e,l,t,o,a,n){return m((b(),g("li",{class:O([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...l)=>e.hoverItem&&e.hoverItem(...l)),onClick:l[1]||(l[1]=x(((...l)=>e.selectOptionClick&&e.selectOptionClick(...l)),["stop"]))},[y(e.$slots,"default",{},(()=>[C("span",null,S(e.currentLabel),1)]))],34)),[[f,e.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);var Ee=r(u({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=l(Te),o=p("select"),a=t((()=>e.props.popperClass)),n=t((()=>e.props.multiple)),s=t((()=>e.props.fitInputWidth)),i=w("");function r(){var l;i.value=`${null==(l=e.selectWrapper)?void 0:l.offsetWidth}px`}return L((()=>{r(),T(e.selectWrapper,r)})),{ns:o,minWidth:i,popperClass:a,isMultiple:n,isFitInputWidth:s}}}),[["render",function(e,l,t,o,a,n){return b(),g("div",{class:O([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:I({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[y(e.$slots,"default")],6)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);let Me=!1;const Pe=(l,s,i)=>{const{t:r}=E(),u=p("select");M({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},t((()=>!1===l.suffixTransition)));const d=w(null),c=w(null),v=w(null),m=w(null),f=w(null),b=w(null),g=w(null),y=w(-1),C=P({query:""}),S=P(""),O=w([]);let x=0;const{form:L,formItem:T}=V(),I=t((()=>!l.filterable||l.multiple||!s.visible)),Q=t((()=>l.disabled||(null==L?void 0:L.disabled))),N=t((()=>{const e=l.multiple?Array.isArray(l.modelValue)&&l.modelValue.length>0:void 0!==l.modelValue&&null!==l.modelValue&&""!==l.modelValue;return l.clearable&&!Q.value&&s.inputHovering&&e})),G=t((()=>l.remote&&l.filterable&&!l.remoteShowSuffix?"":l.suffixIcon)),U=t((()=>u.is("reverse",G.value&&s.visible&&l.suffixTransition))),J=t((()=>l.remote?300:0)),X=t((()=>l.loading?l.loadingText||r("el.select.loading"):(!l.remote||""!==s.query||0!==s.options.size)&&(l.filterable&&s.query&&s.options.size>0&&0===s.filteredOptionsCount?l.noMatchText||r("el.select.noMatch"):0===s.options.size?l.noDataText||r("el.select.noData"):null))),Y=t((()=>{const e=Array.from(s.options.values()),l=[];return O.value.forEach((t=>{const o=e.findIndex((e=>e.currentLabel===t));o>-1&&l.push(e[o])})),l.length?l:e})),Z=t((()=>Array.from(s.cachedOptions.values()))),ee=t((()=>{const e=Y.value.filter((e=>!e.created)).some((e=>e.currentLabel===s.query));return l.filterable&&l.allowCreate&&""!==s.query&&!e})),le=k(),te=t((()=>["small"].includes(le.value)?"small":"default")),oe=t({get:()=>s.visible&&!1!==X.value,set(e){s.visible=e}});n([()=>Q.value,()=>le.value,()=>null==L?void 0:L.size],(()=>{h((()=>{ae()}))})),n((()=>l.placeholder),(e=>{s.cachedPlaceHolder=s.currentPlaceholder=e;l.multiple&&Array.isArray(l.modelValue)&&l.modelValue.length>0&&(s.currentPlaceholder="")})),n((()=>l.modelValue),((e,t)=>{l.multiple&&(ae(),e&&e.length>0||c.value&&""!==s.query?s.currentPlaceholder="":s.currentPlaceholder=s.cachedPlaceHolder,l.filterable&&!l.reserveKeyword&&(s.query="",ne(s.query))),re(),l.filterable&&!l.multiple&&(s.inputLength=20),!Oe(e,t)&&l.validateEvent&&(null==T||T.validate("change").catch((e=>D())))}),{flush:"post",deep:!0}),n((()=>s.visible),(e=>{var t,o,a,n,r;e?(null==(o=null==(t=m.value)?void 0:t.updatePopper)||o.call(t),l.filterable&&(s.filteredOptionsCount=s.optionsCount,s.query=l.remote?"":s.selectedLabel,null==(n=null==(a=v.value)?void 0:a.focus)||n.call(a),l.multiple?null==(r=c.value)||r.focus():s.selectedLabel&&(s.currentPlaceholder=`${s.selectedLabel}`,s.selectedLabel=""),ne(s.query),l.multiple||l.remote||(C.value.query="",W(C),W(S)))):(l.filterable&&(z(l.filterMethod)&&l.filterMethod(""),z(l.remoteMethod)&&l.remoteMethod("")),c.value&&c.value.blur(),s.query="",s.previousQuery=null,s.selectedLabel="",s.inputLength=20,s.menuVisibleOnFocus=!1,pe(),h((()=>{c.value&&""===c.value.value&&0===s.selected.length&&(s.currentPlaceholder=s.cachedPlaceHolder)})),l.multiple||(s.selected&&(l.filterable&&l.allowCreate&&s.createdSelected&&s.createdLabel?s.selectedLabel=s.createdLabel:s.selectedLabel=s.selected.currentLabel,l.filterable&&(s.query=s.selectedLabel)),l.filterable&&(s.currentPlaceholder=s.cachedPlaceHolder))),i.emit("visible-change",e)})),n((()=>s.options.entries()),(()=>{var e,t,o;if(!q)return;null==(t=null==(e=m.value)?void 0:e.updatePopper)||t.call(e),l.multiple&&ae();const a=(null==(o=b.value)?void 0:o.querySelectorAll("input"))||[];Array.from(a).includes(document.activeElement)||re(),l.defaultFirstOption&&(l.filterable||l.remote)&&s.filteredOptionsCount&&ie()}),{flush:"post"}),n((()=>s.hoverIndex),(e=>{A(e)&&e>-1?y.value=Y.value[e]||{}:y.value={},Y.value.forEach((e=>{e.hover=y.value===e}))}));const ae=()=>{h((()=>{var l,t;if(!d.value)return;const o=d.value.$el.querySelector("input");x=x||(o.clientHeight>0?o.clientHeight+2:0);const a=f.value,n=(i=le.value||(null==L?void 0:L.size),e[i||"default"]);var i;const r=le.value||n===x||x<=0?n:x;!(null===o.offsetParent)&&(o.style.height=(0===s.selected.length?r:Math.max(a?a.clientHeight+(a.clientHeight>r?6:0):0,r))-2+"px"),s.visible&&!1!==X.value&&(null==(t=null==(l=m.value)?void 0:l.updatePopper)||t.call(l))}))},ne=async e=>{s.previousQuery===e||s.isOnComposition||(null!==s.previousQuery||!z(l.filterMethod)&&!z(l.remoteMethod)?(s.previousQuery=e,h((()=>{var e,l;s.visible&&(null==(l=null==(e=m.value)?void 0:e.updatePopper)||l.call(e))})),s.hoverIndex=-1,l.multiple&&l.filterable&&h((()=>{const e=15*c.value.value.length+20;s.inputLength=l.collapseTags?Math.min(50,e):e,se(),ae()})),l.remote&&z(l.remoteMethod)?(s.hoverIndex=-1,l.remoteMethod(e)):z(l.filterMethod)?(l.filterMethod(e),W(S)):(s.filteredOptionsCount=s.optionsCount,C.value.query=e,W(C),W(S)),l.defaultFirstOption&&(l.filterable||l.remote)&&s.filteredOptionsCount&&(await h(),ie())):s.previousQuery=e)},se=()=>{""!==s.currentPlaceholder&&(s.currentPlaceholder=c.value.value?"":s.cachedPlaceHolder)},ie=()=>{const e=Y.value.filter((e=>e.visible&&!e.disabled&&!e.states.groupDisabled)),l=e.find((e=>e.created)),t=e[0];s.hoverIndex=be(Y.value,l||t)},re=()=>{var e;if(!l.multiple){const t=ue(l.modelValue);return(null==(e=t.props)?void 0:e.created)?(s.createdLabel=t.props.value,s.createdSelected=!0):s.createdSelected=!1,s.selectedLabel=t.currentLabel,s.selected=t,void(l.filterable&&(s.query=s.selectedLabel))}s.selectedLabel="";const t=[];Array.isArray(l.modelValue)&&l.modelValue.forEach((e=>{t.push(ue(e))})),s.selected=t,h((()=>{ae()}))},ue=e=>{let t;const o="object"===B(e).toLowerCase(),n="null"===B(e).toLowerCase(),i="undefined"===B(e).toLowerCase();for(let u=s.cachedOptions.size-1;u>=0;u--){const n=Z.value[u];if(o?a(n.value,l.valueKey)===a(e,l.valueKey):n.value===e){t={value:e,currentLabel:n.currentLabel,isDisabled:n.isDisabled};break}}if(t)return t;const r={value:e,currentLabel:o?e.label:n||i?"":e};return l.multiple&&(r.hitState=!1),r},pe=()=>{setTimeout((()=>{const e=l.valueKey;l.multiple?s.selected.length>0?s.hoverIndex=Math.min.apply(null,s.selected.map((l=>Y.value.findIndex((t=>a(t,e)===a(l,e)))))):s.hoverIndex=-1:s.hoverIndex=Y.value.findIndex((e=>Le(e)===Le(s.selected)))}),300)},de=()=>{var e;s.inputWidth=null==(e=d.value)?void 0:e.$el.offsetWidth},ce=xe((()=>{l.filterable&&s.query!==s.selectedLabel&&(s.query=s.selectedLabel,ne(s.query))}),J.value),ve=xe((e=>{ne(e.target.value)}),J.value),he=e=>{Oe(l.modelValue,e)||i.emit(j,e)},me=e=>{e.stopPropagation();const t=l.multiple?[]:"";if(!R(t))for(const l of s.selected)l.isDisabled&&t.push(l.value);i.emit(F,t),he(t),s.hoverIndex=-1,s.visible=!1,i.emit("clear")},fe=e=>{var t;if(l.multiple){const o=(l.modelValue||[]).slice(),a=be(o,e.value);a>-1?o.splice(a,1):(l.multipleLimit<=0||o.length<l.multipleLimit)&&o.push(e.value),i.emit(F,o),he(o),e.created&&(s.query="",ne(""),s.inputLength=20),l.filterable&&(null==(t=c.value)||t.focus())}else i.emit(F,e.value),he(e.value),s.visible=!1;ge(),s.visible||h((()=>{ye(e)}))},be=(e=[],t)=>{if(!K(t))return e.indexOf(t);const n=l.valueKey;let s=-1;return e.some(((e,l)=>o(a(e,n))===a(t,n)&&(s=l,!0))),s},ge=()=>{const e=c.value||d.value;e&&(null==e||e.focus())},ye=e=>{var l,t,o,a,n;const s=Array.isArray(e)?e[0]:e;let i=null;if(null==s?void 0:s.value){const e=Y.value.filter((e=>e.value===s.value));e.length>0&&(i=e[0].$el)}if(m.value&&i){const e=null==(a=null==(o=null==(t=null==(l=m.value)?void 0:l.popperRef)?void 0:t.contentRef)?void 0:o.querySelector)?void 0:a.call(o,`.${u.be("dropdown","wrap")}`);e&&_(e,i)}null==(n=g.value)||n.handleScroll()},Ce=e=>{if(!Array.isArray(s.selected))return;const l=s.selected[s.selected.length-1];return l?!0===e||!1===e?(l.hitState=e,e):(l.hitState=!l.hitState,l.hitState):void 0},Se=()=>{s.visible=!1},we=e=>{var l;e&&!s.mouseEnter||Q.value||(s.menuVisibleOnFocus?s.menuVisibleOnFocus=!1:m.value&&m.value.isFocusInsideContent()||(s.visible=!s.visible),s.visible&&(null==(l=c.value||d.value)||l.focus()))},Le=e=>K(e.value)?a(e.value,l.valueKey):e.value,Te=t((()=>Y.value.filter((e=>e.visible)).every((e=>e.disabled)))),Ie=t((()=>s.selected.slice(0,l.maxCollapseTags))),Ee=t((()=>s.selected.slice(l.maxCollapseTags))),Pe=e=>{if(s.visible){if(0!==s.options.size&&0!==s.filteredOptionsCount&&!s.isOnComposition&&!Te.value){"next"===e?(s.hoverIndex++,s.hoverIndex===s.options.size&&(s.hoverIndex=0)):"prev"===e&&(s.hoverIndex--,s.hoverIndex<0&&(s.hoverIndex=s.options.size-1));const l=Y.value[s.hoverIndex];!0!==l.disabled&&!0!==l.states.groupDisabled&&l.visible||Pe(e),h((()=>ye(y.value)))}}else s.visible=!0};return{optionList:O,optionsArray:Y,selectSize:le,handleResize:()=>{var e,t;de(),null==(t=null==(e=m.value)?void 0:e.updatePopper)||t.call(e),l.multiple&&ae()},debouncedOnInputChange:ce,debouncedQueryChange:ve,deletePrevTag:e=>{if(e.code!==H.delete){if(e.target.value.length<=0&&!Ce()){const e=l.modelValue.slice();e.pop(),i.emit(F,e),he(e)}1===e.target.value.length&&0===l.modelValue.length&&(s.currentPlaceholder=s.cachedPlaceHolder)}},deleteTag:(e,t)=>{const o=s.selected.indexOf(t);if(o>-1&&!Q.value){const e=l.modelValue.slice();e.splice(o,1),i.emit(F,e),he(e),i.emit("remove-tag",t.value)}e.stopPropagation()},deleteSelected:me,handleOptionSelect:fe,scrollToOption:ye,readonly:I,resetInputHeight:ae,showClose:N,iconComponent:G,iconReverse:U,showNewOption:ee,collapseTagSize:te,setSelected:re,managePlaceholder:se,selectDisabled:Q,emptyText:X,toggleLastOptionHitState:Ce,resetInputState:e=>{e.code!==H.backspace&&Ce(!1),s.inputLength=15*c.value.value.length+20,ae()},handleComposition:e=>{const l=e.target.value;if("compositionend"===e.type)s.isOnComposition=!1,h((()=>ne(l)));else{const e=l[l.length-1]||"";s.isOnComposition=!$(e)}},onOptionCreate:e=>{s.optionsCount++,s.filteredOptionsCount++,s.options.set(e.value,e),s.cachedOptions.set(e.value,e)},onOptionDestroy:(e,l)=>{s.options.get(e)===l&&(s.optionsCount--,s.filteredOptionsCount--,s.options.delete(e))},handleMenuEnter:()=>{h((()=>ye(s.selected)))},handleFocus:e=>{Me?Me=!1:((l.automaticDropdown||l.filterable)&&(l.filterable&&!s.visible&&(s.menuVisibleOnFocus=!0),s.visible=!0),i.emit("focus",e))},blur:()=>{var e,l,t;s.visible=!1,null==(e=d.value)||e.blur(),null==(t=null==(l=v.value)?void 0:l.blur)||t.call(l)},handleBlur:e=>{setTimeout((()=>{var l;(null==(l=m.value)?void 0:l.isFocusInsideContent())?Me=!0:(s.visible&&Se(),i.emit("blur",e))}))},handleClearClick:e=>{me(e)},handleClose:Se,handleKeydownEscape:e=>{s.visible&&(e.preventDefault(),e.stopPropagation(),s.visible=!1)},toggleMenu:we,selectOption:()=>{s.visible?Y.value[s.hoverIndex]&&fe(Y.value[s.hoverIndex]):we()},getValueKey:Le,navigateOptions:Pe,dropMenuVisible:oe,queryChange:C,groupQueryChange:S,showTagList:Ie,collapseTagList:Ee,reference:d,input:c,iOSInput:v,tooltipRef:m,tags:f,selectWrapper:b,scrollbar:g,handleMouseEnter:()=>{s.mouseEnter=!0},handleMouseLeave:()=>{s.mouseEnter=!1}}};var Ve=u({name:"ElOptions",emits:["update-options"],setup(e,{slots:l,emit:t}){let o=[];return()=>{var e,a;const n=null==(e=l.default)?void 0:e.call(l),s=[];return n.length&&function e(l){Array.isArray(l)&&l.forEach((l=>{var t,o,a,n;const i=null==(t=(null==l?void 0:l.type)||{})?void 0:t.name;"ElOptionGroup"===i?e(R(l.children)||Array.isArray(l.children)||!z(null==(o=l.children)?void 0:o.default)?l.children:null==(a=l.children)?void 0:a.default()):"ElOption"===i?s.push(null==(n=l.props)?void 0:n.label):Array.isArray(l.children)&&e(l.children)}))}(null==(a=n[0])?void 0:a.children),function(e,l){if(e.length!==l.length)return!1;for(const[t]of e.entries())if(e[t]!=l[t])return!1;return!0}(s,o)||(o=s,t("update-options",s)),n}}});const ke="ElSelect",De=u({name:ke,componentName:ke,components:{ElInput:Q,ElSelectMenu:Ee,ElOption:Ie,ElOptions:Ve,ElTag:ye,ElScrollbar:ge,ElTooltip:me,ElIcon:N},directives:{ClickOutside:we},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:G},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},maxCollapseTags:{type:Number,default:1},teleported:fe.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:U,default:J},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:U,default:X},tagType:{...Ce.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:{type:Boolean,default:!1},suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:be,default:"bottom-start"}},emits:[F,j,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const o=p("select"),a=p("input"),{t:n}=E(),i=function(e){const{t:l}=E();return d({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,prefixWidth:11,mouseEnter:!1})}(e),{optionList:r,optionsArray:u,selectSize:v,readonly:m,handleResize:f,collapseTagSize:b,debouncedOnInputChange:g,debouncedQueryChange:y,deletePrevTag:C,deleteTag:S,deleteSelected:O,handleOptionSelect:x,scrollToOption:w,setSelected:I,resetInputHeight:M,managePlaceholder:P,showClose:V,selectDisabled:k,iconComponent:D,iconReverse:z,showNewOption:W,emptyText:q,toggleLastOptionHitState:A,resetInputState:B,handleComposition:K,onOptionCreate:H,onOptionDestroy:R,handleMenuEnter:_,handleFocus:$,blur:j,handleBlur:Q,handleClearClick:N,handleClose:G,handleKeydownEscape:U,toggleMenu:J,selectOption:X,getValueKey:ee,navigateOptions:le,dropMenuVisible:te,reference:oe,input:ae,iOSInput:ne,tooltipRef:se,tags:ie,selectWrapper:re,scrollbar:ue,queryChange:pe,groupQueryChange:de,handleMouseEnter:ce,handleMouseLeave:ve,showTagList:he,collapseTagList:me}=Pe(e,i,l),{focus:fe}=(be=oe,{focus:()=>{var e,l;null==(l=null==(e=be.value)?void 0:e.focus)||l.call(e)}});var be;const{inputWidth:ge,selected:ye,inputLength:Ce,filteredOptionsCount:Se,visible:Oe,selectedLabel:xe,hoverIndex:we,query:Le,inputHovering:Ie,currentPlaceholder:Ee,menuVisibleOnFocus:Me,isOnComposition:Ve,options:ke,cachedOptions:De,optionsCount:ze,prefixWidth:We}=c(i),qe=t((()=>{const l=[o.b()],t=s(v);return t&&l.push(o.m(t)),e.disabled&&l.push(o.m("disabled")),l})),Ae=t((()=>({maxWidth:s(ge)-32+"px",width:"100%"}))),Be=t((()=>({maxWidth:`${s(ge)>123?s(ge)-123:s(ge)-75}px`})));Y(Te,d({props:e,options:ke,optionsArray:u,cachedOptions:De,optionsCount:ze,filteredOptionsCount:Se,hoverIndex:we,handleOptionSelect:x,onOptionCreate:H,onOptionDestroy:R,selectWrapper:re,selected:ye,setSelected:I,queryChange:pe,groupQueryChange:de})),L((()=>{i.cachedPlaceHolder=Ee.value=e.placeholder||(()=>n("el.select.placeholder")),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(Ee.value=""),T(re,f),e.remote&&e.multiple&&M(),h((()=>{const e=oe.value&&oe.value.$el;if(e&&(ge.value=e.getBoundingClientRect().width,l.slots.prefix)){const l=e.querySelector(`.${a.e("prefix")}`);We.value=Math.max(l.getBoundingClientRect().width+11,30)}})),I()})),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(F,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(F,"");const Ke=t((()=>{var e,l;return null==(l=null==(e=se.value)?void 0:e.popperRef)?void 0:l.contentRef}));return{isIOS:Z,onOptionsRendered:e=>{r.value=e},prefixWidth:We,selectSize:v,readonly:m,handleResize:f,collapseTagSize:b,debouncedOnInputChange:g,debouncedQueryChange:y,deletePrevTag:C,deleteTag:S,deleteSelected:O,handleOptionSelect:x,scrollToOption:w,inputWidth:ge,selected:ye,inputLength:Ce,filteredOptionsCount:Se,visible:Oe,selectedLabel:xe,hoverIndex:we,query:Le,inputHovering:Ie,currentPlaceholder:Ee,menuVisibleOnFocus:Me,isOnComposition:Ve,options:ke,resetInputHeight:M,managePlaceholder:P,showClose:V,selectDisabled:k,iconComponent:D,iconReverse:z,showNewOption:W,emptyText:q,toggleLastOptionHitState:A,resetInputState:B,handleComposition:K,handleMenuEnter:_,handleFocus:$,blur:j,handleBlur:Q,handleClearClick:N,handleClose:G,handleKeydownEscape:U,toggleMenu:J,selectOption:X,getValueKey:ee,navigateOptions:le,dropMenuVisible:te,focus:fe,reference:oe,input:ae,iOSInput:ne,tooltipRef:se,popperPaneRef:Ke,tags:ie,selectWrapper:re,scrollbar:ue,wrapperKls:qe,selectTagsStyle:Ae,nsSelect:o,tagTextStyle:Be,handleMouseEnter:ce,handleMouseLeave:ve,showTagList:he,collapseTagList:me}}}),ze=["disabled","autocomplete"],We=["disabled"],qe={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};var Ae=r(De,[["render",function(e,l,t,o,a,n){const s=ee("el-tag"),i=ee("el-tooltip"),r=ee("el-icon"),u=ee("el-input"),p=ee("el-option"),d=ee("el-options"),c=ee("el-scrollbar"),v=ee("el-select-menu"),h=le("click-outside");return m((b(),g("div",{ref:"selectWrapper",class:O(e.wrapperKls),onMouseenter:l[21]||(l[21]=(...l)=>e.handleMouseEnter&&e.handleMouseEnter(...l)),onMouseleave:l[22]||(l[22]=(...l)=>e.handleMouseLeave&&e.handleMouseLeave(...l)),onClick:l[23]||(l[23]=x(((...l)=>e.toggleMenu&&e.toggleMenu(...l)),["stop"]))},[te(i,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:oe((()=>[C("div",{class:"select-trigger",onMouseenter:l[19]||(l[19]=l=>e.inputHovering=!0),onMouseleave:l[20]||(l[20]=l=>e.inputHovering=!1)},[e.multiple?(b(),g("div",{key:0,ref:"tags",class:O([e.nsSelect.e("tags"),e.nsSelect.is("disabled",e.selectDisabled)]),style:I(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(b(),ae(ne,{key:0,onAfterLeave:e.resetInputHeight},{default:oe((()=>[C("span",{class:O([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(b(!0),g(se,null,ie(e.showTagList,(l=>(b(),ae(s,{key:e.getValueKey(l),closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,hit:l.hitState,type:e.tagType,"disable-transitions":"",onClose:t=>e.deleteTag(t,l)},{default:oe((()=>[C("span",{class:O(e.nsSelect.e("tags-text")),style:I(e.tagTextStyle)},S(l.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])))),128)),e.selected.length>e.maxCollapseTags?(b(),ae(s,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:oe((()=>[e.collapseTagsTooltip?(b(),ae(i,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:oe((()=>[C("span",{class:O(e.nsSelect.e("tags-text"))},"+ "+S(e.selected.length-e.maxCollapseTags),3)])),content:oe((()=>[C("div",{class:O(e.nsSelect.e("collapse-tags"))},[(b(!0),g(se,null,ie(e.collapseTagList,(l=>(b(),g("div",{key:e.getValueKey(l),class:O(e.nsSelect.e("collapse-tag"))},[te(s,{class:"in-tooltip",closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,hit:l.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:t=>e.deleteTag(t,l)},{default:oe((()=>[C("span",{class:O(e.nsSelect.e("tags-text")),style:I({maxWidth:e.inputWidth-75+"px"})},S(l.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])],2)))),128))],2)])),_:1},8,["disabled","effect","teleported"])):(b(),g("span",{key:1,class:O(e.nsSelect.e("tags-text"))},"+ "+S(e.selected.length-e.maxCollapseTags),3))])),_:1},8,["size","type"])):re("v-if",!0)],2)])),_:1},8,["onAfterLeave"])):re("v-if",!0),e.collapseTags?re("v-if",!0):(b(),ae(ne,{key:1,onAfterLeave:e.resetInputHeight},{default:oe((()=>[C("span",{class:O([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}]),style:I(e.prefixWidth&&e.selected.length?{marginLeft:`${e.prefixWidth}px`}:"")},[(b(!0),g(se,null,ie(e.selected,(l=>(b(),ae(s,{key:e.getValueKey(l),closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,hit:l.hitState,type:e.tagType,"disable-transitions":"",onClose:t=>e.deleteTag(t,l)},{default:oe((()=>[C("span",{class:O(e.nsSelect.e("tags-text")),style:I({maxWidth:e.inputWidth-75+"px"})},S(l.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])))),128))],6)])),_:1},8,["onAfterLeave"])),e.filterable&&!e.selectDisabled?m((b(),g("input",{key:2,ref:"input","onUpdate:modelValue":l[0]||(l[0]=l=>e.query=l),type:"text",class:O([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize),e.nsSelect.is("disabled",e.selectDisabled)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:I({marginLeft:`${e.prefixWidth}px`,flexGrow:1,width:e.inputLength/(e.inputWidth-32)+"%",maxWidth:e.inputWidth-42+"px"}),onFocus:l[1]||(l[1]=(...l)=>e.handleFocus&&e.handleFocus(...l)),onBlur:l[2]||(l[2]=(...l)=>e.handleBlur&&e.handleBlur(...l)),onKeyup:l[3]||(l[3]=(...l)=>e.managePlaceholder&&e.managePlaceholder(...l)),onKeydown:[l[4]||(l[4]=(...l)=>e.resetInputState&&e.resetInputState(...l)),l[5]||(l[5]=ue(x((l=>e.navigateOptions("next")),["prevent"]),["down"])),l[6]||(l[6]=ue(x((l=>e.navigateOptions("prev")),["prevent"]),["up"])),l[7]||(l[7]=ue(((...l)=>e.handleKeydownEscape&&e.handleKeydownEscape(...l)),["esc"])),l[8]||(l[8]=ue(x(((...l)=>e.selectOption&&e.selectOption(...l)),["stop","prevent"]),["enter"])),l[9]||(l[9]=ue(((...l)=>e.deletePrevTag&&e.deletePrevTag(...l)),["delete"])),l[10]||(l[10]=ue((l=>e.visible=!1),["tab"]))],onCompositionstart:l[11]||(l[11]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onCompositionupdate:l[12]||(l[12]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onCompositionend:l[13]||(l[13]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onInput:l[14]||(l[14]=(...l)=>e.debouncedQueryChange&&e.debouncedQueryChange(...l))},null,46,ze)),[[pe,e.query]]):re("v-if",!0)],6)):re("v-if",!0),re(" fix: https://github.com/element-plus/element-plus/issues/11415 "),e.isIOS&&!e.multiple&&e.filterable&&e.readonly?(b(),g("input",{key:1,ref:"iOSInput",class:O([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize),e.nsSelect.em("input","iOS")]),disabled:e.selectDisabled,type:"text"},null,10,We)):re("v-if",!0),te(u,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[15]||(l[15]=l=>e.selectedLabel=l),type:"text",placeholder:"function"==typeof e.currentPlaceholder?e.currentPlaceholder():e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:O([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[16]||(l[16]=ue(x((l=>e.navigateOptions("next")),["stop","prevent"]),["down"])),l[17]||(l[17]=ue(x((l=>e.navigateOptions("prev")),["stop","prevent"]),["up"])),ue(x(e.selectOption,["stop","prevent"]),["enter"]),ue(e.handleKeydownEscape,["esc"]),l[18]||(l[18]=ue((l=>e.visible=!1),["tab"]))]},de({suffix:oe((()=>[e.iconComponent&&!e.showClose?(b(),ae(r,{key:0,class:O([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:oe((()=>[(b(),ae(ce(e.iconComponent)))])),_:1},8,["class"])):re("v-if",!0),e.showClose&&e.clearIcon?(b(),ae(r,{key:1,class:O([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:oe((()=>[(b(),ae(ce(e.clearIcon)))])),_:1},8,["class","onClick"])):re("v-if",!0)])),_:2},[e.$slots.prefix?{name:"prefix",fn:oe((()=>[C("div",qe,[y(e.$slots,"prefix")])]))}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)])),content:oe((()=>[te(v,null,{default:oe((()=>[m(te(c,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:O([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&0===e.filteredOptionsCount)])},{default:oe((()=>[e.showNewOption?(b(),ae(p,{key:0,value:e.query,created:!0},null,8,["value"])):re("v-if",!0),te(d,{onUpdateOptions:e.onOptionsRendered},{default:oe((()=>[y(e.$slots,"default")])),_:3},8,["onUpdateOptions"])])),_:3},8,["wrap-class","view-class","class"]),[[f,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&0===e.options.size)?(b(),g(se,{key:0},[e.$slots.empty?y(e.$slots,"empty",{key:0}):(b(),g("p",{key:1,class:O(e.nsSelect.be("dropdown","empty"))},S(e.emptyText),3))],64)):re("v-if",!0)])),_:3})])),_:3},8,["visible","placement","teleported","popper-class","popper-options","effect","transition","persistent","onShow"])],34)),[[h,e.handleClose,e.popperPaneRef]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);var Be=r(u({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const t=p("select"),a=w(!0),s=i(),r=w([]);Y(Le,d({...c(e)}));const u=l(Te);L((()=>{r.value=v(s.subTree)}));const v=e=>{const l=[];return Array.isArray(e.children)&&e.children.forEach((e=>{var t;e.type&&"ElOption"===e.type.name&&e.component&&e.component.proxy?l.push(e.component.proxy):(null==(t=e.children)?void 0:t.length)&&l.push(...v(e))})),l},{groupQueryChange:h}=o(u);return n(h,(()=>{a.value=r.value.some((e=>!0===e.visible))}),{flush:"post"}),{visible:a,ns:t}}}),[["render",function(e,l,t,o,a,n){return m((b(),g("ul",{class:O(e.ns.be("group","wrap"))},[C("li",{class:O(e.ns.be("group","title"))},S(e.label),3),C("li",null,[C("ul",{class:O(e.ns.b("group"))},[y(e.$slots,"default")],2)])],2)),[[f,e.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const Ke=ve(Ae,{Option:Ie,OptionGroup:Be}),He=he(Ie);he(Be);export{He as E,Ke as a};
