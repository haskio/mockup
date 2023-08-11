/*! 
 Build based on gin-vue-admin 
 Time : 1689330001000 */
import{B as e,a3 as t,x as a,y as s,D as r,cd as n,ce as o,aO as l,cf as i,bL as c,b0 as u,aC as p,o as d,c as f,n as h,A as y,b as g,H as v,G as b,t as k,e as m,h as x,w,M as $,N,_ as B,I}from"./index-05337088.js";const D=e({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:e=>e>=0&&e<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:t(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:t([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:t(Function),default:e=>`${e}%`}}),F=["aria-valuenow"],S={viewBox:"0 0 100 100"},T=["d","stroke","stroke-width"],W=["d","stroke","opacity","stroke-linecap","stroke-width"],_={key:0},L=a({name:"ElProgress"});const M=I(B(a({...L,props:D,setup(e){const t=e,a={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},B=s("progress"),I=r((()=>({width:`${t.percentage}%`,animationDuration:`${t.duration}s`,backgroundColor:V(t.percentage)}))),D=r((()=>(t.strokeWidth/t.width*100).toFixed(1))),L=r((()=>["circle","dashboard"].includes(t.type)?Number.parseInt(""+(50-Number.parseFloat(D.value)/2),10):0)),M=r((()=>{const e=L.value,a="dashboard"===t.type;return`\n          M 50 50\n          m 0 ${a?"":"-"}${e}\n          a ${e} ${e} 0 1 1 0 ${a?"-":""}${2*e}\n          a ${e} ${e} 0 1 1 0 ${a?"":"-"}${2*e}\n          `})),A=r((()=>2*Math.PI*L.value)),C=r((()=>"dashboard"===t.type?.75:1)),E=r((()=>`${-1*A.value*(1-C.value)/2}px`)),P=r((()=>({strokeDasharray:`${A.value*C.value}px, ${A.value}px`,strokeDashoffset:E.value}))),j=r((()=>({strokeDasharray:`${A.value*C.value*(t.percentage/100)}px, ${A.value}px`,strokeDashoffset:E.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"}))),z=r((()=>{let e;return e=t.color?V(t.percentage):a[t.status]||a.default,e})),G=r((()=>"warning"===t.status?n:"line"===t.type?"success"===t.status?o:l:"success"===t.status?i:c)),H=r((()=>"line"===t.type?12+.4*t.strokeWidth:.111111*t.width+2)),O=r((()=>t.format(t.percentage)));const V=e=>{var a;const{color:s}=t;if(u(s))return s(e);if(p(s))return s;{const t=function(e){const t=100/e.length;return e.map(((e,a)=>p(e)?{color:e,percentage:(a+1)*t}:e)).sort(((e,t)=>e.percentage-t.percentage))}(s);for(const a of t)if(a.percentage>e)return a.color;return null==(a=t[t.length-1])?void 0:a.color}};return(e,t)=>(d(),f("div",{class:h([y(B).b(),y(B).m(e.type),y(B).is(e.status),{[y(B).m("without-text")]:!e.showText,[y(B).m("text-inside")]:e.textInside}]),role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"},["line"===e.type?(d(),f("div",{key:0,class:h(y(B).b("bar"))},[g("div",{class:h(y(B).be("bar","outer")),style:v({height:`${e.strokeWidth}px`})},[g("div",{class:h([y(B).be("bar","inner"),{[y(B).bem("bar","inner","indeterminate")]:e.indeterminate},{[y(B).bem("bar","inner","striped")]:e.striped},{[y(B).bem("bar","inner","striped-flow")]:e.stripedFlow}]),style:v(y(I))},[(e.showText||e.$slots.default)&&e.textInside?(d(),f("div",{key:0,class:h(y(B).be("bar","innerText"))},[b(e.$slots,"default",{percentage:e.percentage},(()=>[g("span",null,k(y(O)),1)]))],2)):m("v-if",!0)],6)],6)],2)):(d(),f("div",{key:1,class:h(y(B).b("circle")),style:v({height:`${e.width}px`,width:`${e.width}px`})},[(d(),f("svg",S,[g("path",{class:h(y(B).be("circle","track")),d:y(M),stroke:`var(${y(B).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-width":y(D),fill:"none",style:v(y(P))},null,14,T),g("path",{class:h(y(B).be("circle","path")),d:y(M),stroke:y(z),fill:"none",opacity:e.percentage?1:0,"stroke-linecap":e.strokeLinecap,"stroke-width":y(D),style:v(y(j))},null,14,W)]))],6)),!e.showText&&!e.$slots.default||e.textInside?m("v-if",!0):(d(),f("div",{key:2,class:h(y(B).e("text")),style:v({fontSize:`${y(H)}px`})},[b(e.$slots,"default",{percentage:e.percentage},(()=>[e.status?(d(),x(y(N),{key:1},{default:w((()=>[(d(),x($(y(G))))])),_:1})):(d(),f("span",_,k(y(O)),1))]))],6))],10,F))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]));export{M as E};
