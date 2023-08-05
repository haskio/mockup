/*! 
 Build based on gin-vue-admin 
 Time : 1689257244000 */
import{B as e,bt as a,a1 as t,a3 as i,bp as l,b7 as n,aC as o,bn as c,bs as s,cA as r,x as v,aR as u,ah as d,y as p,ca as f,c9 as m,D as b,r as h,F as y,T as g,aS as k,P as x,o as C,c as S,b as I,A as V,n as w,m as T,h as B,w as _,M as N,N as P,e as E,t as A,d as z,c5 as F,H as K,al as j,_ as D,ay as H,Q as M,cB as Q,az as R,a6 as U,I as q}from"./index-c2e3c879.js";const G=e({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:a},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:t},inactiveIcon:{type:t},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:i(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1}}),J={[l]:e=>n(e)||o(e)||c(e),[s]:e=>n(e)||o(e)||c(e),[r]:e=>n(e)||o(e)||c(e)},L=["onClick"],O=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],W=["aria-hidden"],X=["aria-hidden"],Y=["aria-hidden"],Z="ElSwitch",$=v({name:Z});const ee=q(D(v({...$,props:G,emits:J,setup(e,{expose:a,emit:t}){const i=e,o=U(),{formItem:c}=u(),v=d(),D=p("switch");[['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]].forEach((e=>{H({from:e[0],replacement:e[1],scope:Z,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},b((()=>{var a;return!!(null==(a=o.vnode.props)?void 0:a[e[2]])})))}));const{inputId:q}=f(i,{formItemContext:c}),G=m(b((()=>i.loading))),J=h(!1!==i.modelValue),$=h(),ee=h(),ae=b((()=>[D.b(),D.m(v.value),D.is("disabled",G.value),D.is("checked",oe.value)])),te=b((()=>[D.e("label"),D.em("label","left"),D.is("active",!oe.value)])),ie=b((()=>[D.e("label"),D.em("label","right"),D.is("active",oe.value)])),le=b((()=>({width:y(i.width)})));g((()=>i.modelValue),(()=>{J.value=!0})),g((()=>i.value),(()=>{J.value=!1}));const ne=b((()=>J.value?i.modelValue:i.value)),oe=b((()=>ne.value===i.activeValue));[i.activeValue,i.inactiveValue].includes(ne.value)||(t(l,i.inactiveValue),t(s,i.inactiveValue),t(r,i.inactiveValue)),g(oe,(e=>{var a;$.value.checked=e,i.validateEvent&&(null==(a=null==c?void 0:c.validate)||a.call(c,"change").catch((e=>k())))}));const ce=()=>{const e=oe.value?i.inactiveValue:i.activeValue;t(l,e),t(s,e),t(r,e),M((()=>{$.value.checked=oe.value}))},se=()=>{if(G.value)return;const{beforeChange:e}=i;if(!e)return void ce();const a=e();[Q(a),n(a)].includes(!0)||R(Z,"beforeChange must return type `Promise<boolean>` or `boolean`"),Q(a)?a.then((e=>{e&&ce()})).catch((e=>{})):a&&ce()},re=b((()=>D.cssVarBlock({...i.activeColor?{"on-color":i.activeColor}:null,...i.inactiveColor?{"off-color":i.inactiveColor}:null,...i.borderColor?{"border-color":i.borderColor}:null})));return x((()=>{$.value.checked=oe.value})),a({focus:()=>{var e,a;null==(a=null==(e=$.value)?void 0:e.focus)||a.call(e)},checked:oe}),(e,a)=>(C(),S("div",{class:w(V(ae)),style:K(V(re)),onClick:j(se,["prevent"])},[I("input",{id:V(q),ref_key:"input",ref:$,class:w(V(D).e("input")),type:"checkbox",role:"switch","aria-checked":V(oe),"aria-disabled":V(G),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:V(G),tabindex:e.tabindex,onChange:ce,onKeydown:T(se,["enter"])},null,42,O),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?E("v-if",!0):(C(),S("span",{key:0,class:w(V(te))},[e.inactiveIcon?(C(),B(V(P),{key:0},{default:_((()=>[(C(),B(N(e.inactiveIcon)))])),_:1})):E("v-if",!0),!e.inactiveIcon&&e.inactiveText?(C(),S("span",{key:1,"aria-hidden":V(oe)},A(e.inactiveText),9,W)):E("v-if",!0)],2)),I("span",{ref_key:"core",ref:ee,class:w(V(D).e("core")),style:K(V(le))},[e.inlinePrompt?(C(),S("div",{key:0,class:w(V(D).e("inner"))},[e.activeIcon||e.inactiveIcon?(C(),B(V(P),{key:0,class:w(V(D).is("icon"))},{default:_((()=>[(C(),B(N(V(oe)?e.activeIcon:e.inactiveIcon)))])),_:1},8,["class"])):e.activeText||e.inactiveText?(C(),S("span",{key:1,class:w(V(D).is("text")),"aria-hidden":!V(oe)},A(V(oe)?e.activeText:e.inactiveText),11,X)):E("v-if",!0)],2)):E("v-if",!0),I("div",{class:w(V(D).e("action"))},[e.loading?(C(),B(V(P),{key:0,class:w(V(D).is("loading"))},{default:_((()=>[z(V(F))])),_:1},8,["class"])):E("v-if",!0)],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?E("v-if",!0):(C(),S("span",{key:1,class:w(V(ie))},[e.activeIcon?(C(),B(V(P),{key:0},{default:_((()=>[(C(),B(N(e.activeIcon)))])),_:1})):E("v-if",!0),!e.activeIcon&&e.activeText?(C(),S("span",{key:1,"aria-hidden":!V(oe)},A(e.activeText),9,Y)):E("v-if",!0)],2))],14,L))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]));export{ee as E};
