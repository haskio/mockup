/*! 
 Build based on gin-vue-admin 
 Time : 1691996246000 */
import{B as e,a3 as t,x as a,y as s,D as r,cg as n,ch as o,aN as c,ci as l,bO as i,a$ as p,aB as u,o as d,c as f,n as h,A as y,b as g,H as k,G as v,t as b,e as m,h as x,w,M as N,N as B,_ as I,I as D}from"./index-86766df6.js";const F=e({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:e=>e>=0&&e<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:t(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:t([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:t(Function),default:e=>"".concat(e,"%")}}),S=["aria-valuenow"],T={viewBox:"0 0 100 100"},$=["d","stroke","stroke-linecap","stroke-width"],W=["d","stroke","opacity","stroke-linecap","stroke-width"],_={key:0},L=a({name:"ElProgress"});const M=D(I(a({...L,props:F,setup(e){const t=e,a={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},I=s("progress"),D=r((()=>({width:"".concat(t.percentage,"%"),animationDuration:"".concat(t.duration,"s"),backgroundColor:V(t.percentage)}))),F=r((()=>(t.strokeWidth/t.width*100).toFixed(1))),L=r((()=>["circle","dashboard"].includes(t.type)?Number.parseInt("".concat(50-Number.parseFloat(F.value)/2),10):0)),M=r((()=>{const e=L.value,a="dashboard"===t.type;return"\n          M 50 50\n          m 0 ".concat(a?"":"-").concat(e,"\n          a ").concat(e," ").concat(e," 0 1 1 0 ").concat(a?"-":"").concat(2*e,"\n          a ").concat(e," ").concat(e," 0 1 1 0 ").concat(a?"":"-").concat(2*e,"\n          ")})),A=r((()=>2*Math.PI*L.value)),E=r((()=>"dashboard"===t.type?.75:1)),P=r((()=>{const e=-1*A.value*(1-E.value)/2;return"".concat(e,"px")})),j=r((()=>({strokeDasharray:"".concat(A.value*E.value,"px, ").concat(A.value,"px"),strokeDashoffset:P.value}))),z=r((()=>({strokeDasharray:"".concat(A.value*E.value*(t.percentage/100),"px, ").concat(A.value,"px"),strokeDashoffset:P.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"}))),C=r((()=>{let e;return e=t.color?V(t.percentage):a[t.status]||a.default,e})),G=r((()=>"warning"===t.status?n:"line"===t.type?"success"===t.status?o:c:"success"===t.status?l:i)),H=r((()=>"line"===t.type?12+.4*t.strokeWidth:.111111*t.width+2)),O=r((()=>t.format(t.percentage)));const V=e=>{var a;const{color:s}=t;if(p(s))return s(e);if(u(s))return s;{const t=function(e){const t=100/e.length;return e.map(((e,a)=>u(e)?{color:e,percentage:(a+1)*t}:e)).sort(((e,t)=>e.percentage-t.percentage))}(s);for(const a of t)if(a.percentage>e)return a.color;return null==(a=t[t.length-1])?void 0:a.color}};return(e,t)=>(d(),f("div",{class:h([y(I).b(),y(I).m(e.type),y(I).is(e.status),{[y(I).m("without-text")]:!e.showText,[y(I).m("text-inside")]:e.textInside}]),role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"},["line"===e.type?(d(),f("div",{key:0,class:h(y(I).b("bar"))},[g("div",{class:h(y(I).be("bar","outer")),style:k({height:"".concat(e.strokeWidth,"px")})},[g("div",{class:h([y(I).be("bar","inner"),{[y(I).bem("bar","inner","indeterminate")]:e.indeterminate},{[y(I).bem("bar","inner","striped")]:e.striped},{[y(I).bem("bar","inner","striped-flow")]:e.stripedFlow}]),style:k(y(D))},[(e.showText||e.$slots.default)&&e.textInside?(d(),f("div",{key:0,class:h(y(I).be("bar","innerText"))},[v(e.$slots,"default",{percentage:e.percentage},(()=>[g("span",null,b(y(O)),1)]))],2)):m("v-if",!0)],6)],6)],2)):(d(),f("div",{key:1,class:h(y(I).b("circle")),style:k({height:"".concat(e.width,"px"),width:"".concat(e.width,"px")})},[(d(),f("svg",T,[g("path",{class:h(y(I).be("circle","track")),d:y(M),stroke:"var(".concat(y(I).cssVarName("fill-color-light"),", #e5e9f2)"),"stroke-linecap":e.strokeLinecap,"stroke-width":y(F),fill:"none",style:k(y(j))},null,14,$),g("path",{class:h(y(I).be("circle","path")),d:y(M),stroke:y(C),fill:"none",opacity:e.percentage?1:0,"stroke-linecap":e.strokeLinecap,"stroke-width":y(F),style:k(y(z))},null,14,W)]))],6)),!e.showText&&!e.$slots.default||e.textInside?m("v-if",!0):(d(),f("div",{key:2,class:h(y(I).e("text")),style:k({fontSize:"".concat(y(H),"px")})},[v(e.$slots,"default",{percentage:e.percentage},(()=>[e.status?(d(),x(y(B),{key:1},{default:w((()=>[(d(),x(N(y(G))))])),_:1})):(d(),f("span",_,b(y(O)),1))]))],6))],10,S))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]));export{M as E};
