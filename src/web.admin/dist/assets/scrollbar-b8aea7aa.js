/*! 
 Build based on gin-vue-admin 
 Time : 1691228829000 */
import{B as e,_ as a,x as l,a4 as t,y as s,az as r,r as o,D as n,ag as i,ac as u,ab as c,o as v,h as m,w as f,V as p,b as d,n as h,A as y,H as g,W as w,X as b,bh as S,c as z,d as x,J as _,a3 as E,bn as k,F as T,T as L,aG as H,Q as B,a2 as R,a as C,P as N,ba as A,G as M,M as W,e as X,aJ as Y,I as j}from"./index-705282a4.js";const P={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},G=Symbol("scrollbarContextKey"),I=e({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean});var J=a(l({__name:"thumb",props:I,setup(e){const a=e,l=t(G),z=s("scrollbar");l||r("Thumb","can not inject scrollbar context");const x=o(),_=o(),E=o({}),k=o(!1);let T=!1,L=!1,H=S?document.onselectstart:null;const B=n((()=>P[a.vertical?"vertical":"horizontal"])),R=n((()=>(({move:e,size:a,bar:l})=>({[l.size]:a,transform:"translate".concat(l.axis,"(").concat(e,"%)")}))({size:a.size,move:a.move,bar:B.value}))),C=n((()=>x.value[B.value.offset]**2/l.wrapElement[B.value.scrollSize]/a.ratio/_.value[B.value.offset])),N=e=>{var a;if(e.stopPropagation(),e.ctrlKey||[1,2].includes(e.button))return;null==(a=window.getSelection())||a.removeAllRanges(),M(e);const l=e.currentTarget;l&&(E.value[B.value.axis]=l[B.value.offset]-(e[B.value.client]-l.getBoundingClientRect()[B.value.direction]))},A=e=>{if(!_.value||!x.value||!l.wrapElement)return;const a=100*(Math.abs(e.target.getBoundingClientRect()[B.value.direction]-e[B.value.client])-_.value[B.value.offset]/2)*C.value/x.value[B.value.offset];l.wrapElement[B.value.scroll]=a*l.wrapElement[B.value.scrollSize]/100},M=e=>{e.stopImmediatePropagation(),T=!0,document.addEventListener("mousemove",W),document.addEventListener("mouseup",X),H=document.onselectstart,document.onselectstart=()=>!1},W=e=>{if(!x.value||!_.value)return;if(!1===T)return;const a=E.value[B.value.axis];if(!a)return;const t=100*(-1*(x.value.getBoundingClientRect()[B.value.direction]-e[B.value.client])-(_.value[B.value.offset]-a))*C.value/x.value[B.value.offset];l.wrapElement[B.value.scroll]=t*l.wrapElement[B.value.scrollSize]/100},X=()=>{T=!1,E.value[B.value.axis]=0,document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",X),Y(),L&&(k.value=!1)};i((()=>{Y(),document.removeEventListener("mouseup",X)}));const Y=()=>{document.onselectstart!==H&&(document.onselectstart=H)};return u(c(l,"scrollbarElement"),"mousemove",(()=>{L=!1,k.value=!!a.size})),u(c(l,"scrollbarElement"),"mouseleave",(()=>{L=!0,k.value=T})),(e,a)=>(v(),m(b,{name:y(z).b("fade"),persisted:""},{default:f((()=>[p(d("div",{ref_key:"instance",ref:x,class:h([y(z).e("bar"),y(z).is(y(B).key)]),onMousedown:A},[d("div",{ref_key:"thumb",ref:_,class:h(y(z).e("thumb")),style:g(y(R)),onMousedown:N},null,38)],34),[[w,e.always||k.value]])])),_:1},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);var K=a(l({__name:"bar",props:e({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),setup(e,{expose:a}){const l=e,t=o(0),s=o(0);return a({handleScroll:e=>{if(e){const a=e.offsetHeight-4,r=e.offsetWidth-4;s.value=100*e.scrollTop/a*l.ratioY,t.value=100*e.scrollLeft/r*l.ratioX}}}),(e,a)=>(v(),z(_,null,[x(J,{move:t.value,ratio:e.ratioX,size:e.width,always:e.always},null,8,["move","ratio","size","always"]),x(J,{move:s.value,ratio:e.ratioY,size:e.height,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const O=e({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:E([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),q={scroll:({scrollTop:e,scrollLeft:a})=>[e,a].every(k)},D=l({name:"ElScrollbar"});const F=j(a(l({...D,props:O,emits:q,setup(e,{expose:a,emit:l}){const t=e,r=s("scrollbar");let i,c;const p=o(),w=o(),b=o(),S=o("0"),x=o("0"),_=o(),E=o(1),j=o(1),P=n((()=>{const e={};return t.height&&(e.height=T(t.height)),t.maxHeight&&(e.maxHeight=T(t.maxHeight)),[t.wrapStyle,e]})),I=n((()=>[t.wrapClass,r.e("wrap"),{[r.em("wrap","hidden-default")]:!t.native}])),J=n((()=>[r.e("view"),t.viewClass])),O=()=>{var e;w.value&&(null==(e=_.value)||e.handleScroll(w.value),l("scroll",{scrollTop:w.value.scrollTop,scrollLeft:w.value.scrollLeft}))};const q=()=>{if(!w.value)return;const e=w.value.offsetHeight-4,a=w.value.offsetWidth-4,l=e**2/w.value.scrollHeight,s=a**2/w.value.scrollWidth,r=Math.max(l,t.minSize),o=Math.max(s,t.minSize);E.value=l/(e-l)/(r/(e-r)),j.value=s/(a-s)/(o/(a-o)),x.value=r+4<e?"".concat(r,"px"):"",S.value=o+4<a?"".concat(o,"px"):""};return L((()=>t.noresize),(e=>{e?(null==i||i(),null==c||c()):(({stop:i}=H(b,q)),c=u("resize",q))}),{immediate:!0}),L((()=>[t.maxHeight,t.height]),(()=>{t.native||B((()=>{var e;q(),w.value&&(null==(e=_.value)||e.handleScroll(w.value))}))})),R(G,C({scrollbarElement:p,wrapElement:w})),N((()=>{t.native||B((()=>{q()}))})),A((()=>q())),a({wrapRef:w,update:q,scrollTo:function(e,a){Y(e)?w.value.scrollTo(e):k(e)&&k(a)&&w.value.scrollTo(e,a)},setScrollTop:e=>{k(e)&&(w.value.scrollTop=e)},setScrollLeft:e=>{k(e)&&(w.value.scrollLeft=e)},handleScroll:O}),(e,a)=>(v(),z("div",{ref_key:"scrollbarRef",ref:p,class:h(y(r).b())},[d("div",{ref_key:"wrapRef",ref:w,class:h(y(I)),style:g(y(P)),onScroll:O},[(v(),m(W(e.tag),{ref_key:"resizeRef",ref:b,class:h(y(J)),style:g(e.viewStyle)},{default:f((()=>[M(e.$slots,"default")])),_:3},8,["class","style"]))],38),e.native?X("v-if",!0):(v(),m(K,{key:0,ref_key:"barRef",ref:_,height:x.value,width:S.value,always:e.always,"ratio-x":j.value,"ratio-y":E.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]));export{F as E};
