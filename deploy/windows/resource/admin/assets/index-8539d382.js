/*! 
 Build based on gin-vue-admin 
 Time : 1691228829000 */
import{B as e,b6 as s,bn as a,a1 as r,a3 as t,x as c,y as i,r as l,D as n,aC as u,F as p,T as o,o as m,c as v,H as d,A as y,h as f,w as g,M as S,N as h,G as I,n as k,_,I as b,l as z,J as T,e as j}from"./index-705282a4.js";import{_ as x}from"./_plugin-vue_export-helper-1b428a4d.js";const q=e({size:{type:[Number,String],values:s,default:"",validator:e=>a(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:r},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:t(String),default:"cover"}}),A={error:e=>e instanceof Event},B=["src","alt","srcset"],C=c({name:"ElAvatar"});const E=b(_(c({...C,props:q,emits:A,setup(e,{emit:s}){const r=e,t=i("avatar"),c=l(!1),_=n((()=>{const{size:e,icon:s,shape:a}=r,c=[t.b()];return u(e)&&c.push(t.m(e)),s&&c.push(t.m("icon")),a&&c.push(t.m(a)),c})),b=n((()=>{const{size:e}=r;return a(e)?t.cssVarBlock({size:p(e)||""}):void 0})),z=n((()=>({objectFit:r.fit})));function T(e){c.value=!0,s("error",e)}return o((()=>r.src),(()=>c.value=!1)),(e,s)=>(m(),v("span",{class:k(y(_)),style:d(y(b))},[!e.src&&!e.srcSet||c.value?e.icon?(m(),f(y(h),{key:1},{default:g((()=>[(m(),f(S(e.icon)))])),_:1})):I(e.$slots,"default",{key:2}):(m(),v("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:d(y(z)),onError:T},null,44,B))],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]])),w={class:"headerAvatar"},F=["src"],N=["src"],$=["src"],D={name:"CustomPic"},G=x(Object.assign(D,{props:{picType:{type:String,required:!1,default:"avatar"},picSrc:{type:String,required:!1,default:""}},setup(e){const s=e,a=l("/"),r=l("/admin/assets/noBody-745c3d16.png"),t=z(),c=n((()=>""===s.picSrc?""!==t.userInfo.headerImg&&"http"===t.userInfo.headerImg.slice(0,4)?t.userInfo.headerImg:a.value+t.userInfo.headerImg:""!==s.picSrc&&"http"===s.picSrc.slice(0,4)?s.picSrc:a.value+s.picSrc)),i=n((()=>s.picSrc&&"http"!==s.picSrc.slice(0,4)?a.value+s.picSrc:s.picSrc));return(s,a)=>{const l=E;return m(),v("span",w,["avatar"===e.picType?(m(),v(T,{key:0},[y(t).userInfo.headerImg?(m(),f(l,{key:0,size:30,src:c.value},null,8,["src"])):(m(),f(l,{key:1,size:30,src:r.value},null,8,["src"]))],64)):j("",!0),"img"===e.picType?(m(),v(T,{key:1},[y(t).userInfo.headerImg?(m(),v("img",{key:0,src:c.value,class:"avatar"},null,8,F)):(m(),v("img",{key:1,src:r.value,class:"avatar"},null,8,N))],64)):j("",!0),"file"===e.picType?(m(),v("img",{key:2,src:i.value,class:"file"},null,8,$)):j("",!0)])}}}),[["__scopeId","data-v-9774a207"]]);export{G as C};