/*! 
 Build based on gin-vue-admin 
 Time : 1691996246000 */
import{an as e,u as a,r as s,l,D as t,T as n,ao as u,R as o,o as r,c as i,d as v,w as m,J as c,K as p,h as d,b as y,H as g,A as f,g as h,t as b,ap as S,ak as I,V as q,W as O}from"./index-86766df6.js";import{E as k,a as w}from"./tab-pane-3302625f.js";import"./strings-4c3ca3f6.js";const C={class:"router-history"},N=["tab"],J={name:"HistoryComponent"},x=Object.assign(J,{setup(J){const x=e(),j=a(),V=e=>e.name+JSON.stringify(e.query)+JSON.stringify(e.params),E=s([]),A=s(""),T=s(!1),P=l(),R=e=>e.name+JSON.stringify(e.query)+JSON.stringify(e.params),L=s(0),H=s(0),K=s(!1),_=s(!1),D=s(""),U=t((()=>P.userInfo.authority.defaultRouter)),W=()=>{E.value=[{name:U.value,meta:{title:"首页"},query:{},params:{}}],j.push({name:U.value}),T.value=!1,sessionStorage.setItem("historys",JSON.stringify(E.value))},X=()=>{let e;const a=E.value.findIndex((a=>(V(a)===D.value&&(e=a),V(a)===D.value))),s=E.value.findIndex((e=>V(e)===A.value));E.value.splice(0,a),a>s&&j.push(e),sessionStorage.setItem("historys",JSON.stringify(E.value))},Y=()=>{let e;const a=E.value.findIndex((a=>(V(a)===D.value&&(e=a),V(a)===D.value))),s=E.value.findIndex((e=>V(e)===A.value));E.value.splice(a+1,E.value.length),a<s&&j.push(e),sessionStorage.setItem("historys",JSON.stringify(E.value))},$=()=>{let e;E.value=E.value.filter((a=>(V(a)===D.value&&(e=a),V(a)===D.value))),j.push(e),sessionStorage.setItem("historys",JSON.stringify(E.value))},z=e=>{if(!E.value.some((a=>((e,a)=>{if(e.name!==a.name)return!1;if(Object.keys(e.query).length!==Object.keys(a.query).length||Object.keys(e.params).length!==Object.keys(a.params).length)return!1;for(const s in e.query)if(e.query[s]!==a.query[s])return!1;for(const s in e.params)if(e.params[s]!==a.params[s])return!1;return!0})(a,e)))){const a={};a.name=e.name,a.meta={...e.meta},delete a.meta.matched,a.query=e.query,a.params=e.params,E.value.push(a)}window.sessionStorage.setItem("activeValue",V(e))},B=s({}),F=e=>{var a;const s=null==(a=null==e?void 0:e.props)?void 0:a.name;if(!s)return;const l=B.value[s];j.push({name:l.name,query:l.query,params:l.params})},G=e=>{const a=E.value.findIndex((a=>V(a)===e));V(x)===e&&(1===E.value.length?j.push({name:U.value}):a<E.value.length-1?j.push({name:E.value[a+1].name,query:E.value[a+1].query,params:E.value[a+1].params}):j.push({name:E.value[a-1].name,query:E.value[a-1].query,params:E.value[a-1].params})),E.value.splice(a,1)};n((()=>T.value),(()=>{T.value?document.body.addEventListener("click",(()=>{T.value=!1})):document.body.removeEventListener("click",(()=>{T.value=!1}))})),n((()=>x),((e,a)=>{"Login"!==e.name&&"Reload"!==e.name&&(E.value=E.value.filter((e=>!e.meta.closeTab)),z(e),sessionStorage.setItem("historys",JSON.stringify(E.value)),A.value=window.sessionStorage.getItem("activeValue"))}),{deep:!0}),n((()=>E.value),(()=>{sessionStorage.setItem("historys",JSON.stringify(E.value)),B.value={},E.value.forEach((e=>{B.value[V(e)]=e})),u.emit("setKeepAlive",E.value)}),{deep:!0});return(()=>{u.on("closeThisPage",(()=>{G(R(x))})),u.on("closeAllPage",(()=>{W()})),u.on("mobile",(e=>{_.value=e})),u.on("collapse",(e=>{K.value=e}));const e=[{name:U.value,meta:{title:"首页"},query:{},params:{}}];E.value=JSON.parse(sessionStorage.getItem("historys"))||e,window.sessionStorage.getItem("activeValue")?A.value=window.sessionStorage.getItem("activeValue"):A.value=V(x),z(x),"true"===window.sessionStorage.getItem("needCloseAll")&&(W(),window.sessionStorage.removeItem("needCloseAll"))})(),o((()=>{u.off("collapse"),u.off("mobile")})),(e,a)=>{const s=k,l=w;return r(),i("div",C,[v(l,{modelValue:A.value,"onUpdate:modelValue":a[0]||(a[0]=e=>A.value=e),closable:!(1===E.value.length&&e.$route.name===U.value),type:"card",onContextmenu:a[1]||(a[1]=I((e=>(e=>{if(1===E.value.length&&x.name===U.value)return!1;let a="";if(a="SPAN"===e.srcElement.nodeName?e.srcElement.offsetParent.id:e.srcElement.id,a){let s;T.value=!0,s=K.value?54:220,_.value&&(s=0),L.value=e.clientX-s,H.value=e.clientY+10,D.value=a.substring(4)}})(e)),["prevent"])),onTabClick:F,onTabRemove:G},{default:m((()=>[(r(!0),i(c,null,p(E.value,(e=>(r(),d(s,{key:R(e),label:e.meta.title,name:R(e),tab:e,class:"gva-tab"},{label:m((()=>[y("span",{tab:e,style:g({color:A.value===R(e)?f(P).activeColor:"#333"})},[y("i",{class:"dot",style:g({backgroundColor:A.value===R(e)?f(P).activeColor:"#ddd"})},null,4),h(" "+b(f(S)(e.meta.title,e)),1)],12,N)])),_:2},1032,["label","name","tab"])))),128))])),_:1},8,["modelValue","closable"]),q(y("ul",{style:g({left:L.value+"px",top:H.value+"px"}),class:"contextmenu"},[y("li",{onClick:W},"关闭所有"),y("li",{onClick:X},"关闭左侧"),y("li",{onClick:Y},"关闭右侧"),y("li",{onClick:$},"关闭其他")],4),[[O,T.value]])])}}});export{x as default};
