/*! 
 Build based on gin-vue-admin 
 Time : 1691991175000 */
import{bA as e,a3 as t,D as n,a$ as o,T as r,P as a,a5 as i,bl as s,ba as l,A as p,O as u,r as c,af as f,bB as d,bC as v,bD as m,bE as g,bF as h,B as b,br as y,a2 as w,x,G as O,_ as R,y as A,a4 as k,o as E,c as T,n as S,H as C,bG as B,V as j,bH as M,aI as P,J as F,bI as L,bJ as D,d as I,bK as _,bm as H,aJ as W,h as q,w as N,ai as U,e as $,bL as z,bd as V,bM as K,I as Z,a8 as J,aj as X,aa as G,W as Y,X as Q,bN as ee,aU as te,z as ne,a9 as oe,b4 as re,t as ae}from"./index-74cee4c8.js";const ie=(e,t,{checkForDefaultPrevented:n=!0}={})=>o=>{const r=null==e?void 0:e(o);if(!1===n||!r)return null==t?void 0:t(o)},se=e=>t=>"mouse"===t.pointerType?e(t):void 0;const le=e({type:t(Boolean),default:null}),pe=e({type:t(Function)}),ue=e=>{const t="update:".concat(e),p="onUpdate:".concat(e);return{useModelToggle:({indicator:u,toggleReason:c,shouldHideWhenRouteChanges:f,shouldProceed:d,onShow:v,onHide:m})=>{const g=i(),{emit:h}=g,b=g.props,y=n((()=>o(b[p]))),w=n((()=>null===b[e])),x=e=>{!0!==u.value&&(u.value=!0,c&&(c.value=e),o(v)&&v(e))},O=e=>{!1!==u.value&&(u.value=!1,c&&(c.value=e),o(m)&&m(e))},R=e=>{if(!0===b.disabled||o(d)&&!d())return;const n=y.value&&s;n&&h(t,!0),!w.value&&n||x(e)},A=e=>{if(!0===b.disabled||!s)return;const n=y.value&&s;n&&h(t,!1),!w.value&&n||O(e)},k=e=>{l(e)&&(b.disabled&&e?y.value&&h(t,!1):u.value!==e&&(e?x():O()))};return r((()=>b[e]),k),f&&void 0!==g.appContext.config.globalProperties.$route&&r((()=>({...g.proxy.$route})),(()=>{f.value&&u.value&&A()})),a((()=>{k(b[e])})),{hide:A,show:R,toggle:()=>{u.value?A():R()},hasUpdateHandler:y}},useModelToggleProps:{[e]:le,[p]:pe},useModelToggleEmits:[t]}};ue("modelValue");var ce="top",fe="bottom",de="right",ve="left",me="auto",ge=[ce,fe,de,ve],he="start",be="end",ye="clippingParents",we="viewport",xe="popper",Oe="reference",Re=ge.reduce((function(e,t){return e.concat([t+"-"+he,t+"-"+be])}),[]),Ae=[].concat(ge,[me]).reduce((function(e,t){return e.concat([t,t+"-"+he,t+"-"+be])}),[]),ke=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Ee(e){return e?(e.nodeName||"").toLowerCase():null}function Te(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Se(e){return e instanceof Te(e).Element||e instanceof Element}function Ce(e){return e instanceof Te(e).HTMLElement||e instanceof HTMLElement}function Be(e){return"undefined"!=typeof ShadowRoot&&(e instanceof Te(e).ShadowRoot||e instanceof ShadowRoot)}var je={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];!Ce(r)||!Ee(r)||(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});!Ce(o)||!Ee(o)||(Object.assign(o.style,a),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};function Me(e){return e.split("-")[0]}var Pe=Math.max,Fe=Math.min,Le=Math.round;function De(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(Ce(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(o=Le(n.width)/i||1),a>0&&(r=Le(n.height)/a||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function Ie(e){var t=De(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function _e(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Be(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function He(e){return Te(e).getComputedStyle(e)}function We(e){return["table","td","th"].indexOf(Ee(e))>=0}function qe(e){return((Se(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ne(e){return"html"===Ee(e)?e:e.assignedSlot||e.parentNode||(Be(e)?e.host:null)||qe(e)}function Ue(e){return Ce(e)&&"fixed"!==He(e).position?e.offsetParent:null}function $e(e){for(var t=Te(e),n=Ue(e);n&&We(n)&&"static"===He(n).position;)n=Ue(n);return n&&("html"===Ee(n)||"body"===Ee(n)&&"static"===He(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&Ce(e)&&"fixed"===He(e).position)return null;var n=Ne(e);for(Be(n)&&(n=n.host);Ce(n)&&["html","body"].indexOf(Ee(n))<0;){var o=He(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}function ze(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ve(e,t,n){return Pe(e,Fe(t,n))}function Ke(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Ze(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var Je={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,s=Me(n.placement),l=ze(s),p=[ve,de].indexOf(s)>=0?"height":"width";if(a&&i){var u=function(e,t){return Ke("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Ze(e,ge))}(r.padding,n),c=Ie(a),f="y"===l?ce:ve,d="y"===l?fe:de,v=n.rects.reference[p]+n.rects.reference[l]-i[l]-n.rects.popper[p],m=i[l]-n.rects.reference[l],g=$e(a),h=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=v/2-m/2,y=u[f],w=h-c[p]-u[d],x=h/2-c[p]/2+b,O=Ve(y,x,w),R=l;n.modifiersData[o]=((t={})[R]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"==typeof o&&!(o=t.elements.popper.querySelector(o))||!_e(t.elements.popper,o)||(t.elements.arrow=o))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Xe(e){return e.split("-")[1]}var Ge={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ye(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,s=e.position,l=e.gpuAcceleration,p=e.adaptive,u=e.roundOffsets,c=e.isFixed,f=i.x,d=void 0===f?0:f,v=i.y,m=void 0===v?0:v,g="function"==typeof u?u({x:d,y:m}):{x:d,y:m};d=g.x,m=g.y;var h=i.hasOwnProperty("x"),b=i.hasOwnProperty("y"),y=ve,w=ce,x=window;if(p){var O=$e(n),R="clientHeight",A="clientWidth";if(O===Te(n)&&("static"!==He(O=qe(n)).position&&"absolute"===s&&(R="scrollHeight",A="scrollWidth")),r===ce||(r===ve||r===de)&&a===be)w=fe,m-=(c&&O===x&&x.visualViewport?x.visualViewport.height:O[R])-o.height,m*=l?1:-1;if(r===ve||(r===ce||r===fe)&&a===be)y=de,d-=(c&&O===x&&x.visualViewport?x.visualViewport.width:O[A])-o.width,d*=l?1:-1}var k,E=Object.assign({position:s},p&&Ge),T=!0===u?function(e){var t=e.x,n=e.y,o=window.devicePixelRatio||1;return{x:Le(t*o)/o||0,y:Le(n*o)/o||0}}({x:d,y:m}):{x:d,y:m};return d=T.x,m=T.y,l?Object.assign({},E,((k={})[w]=b?"0":"",k[y]=h?"0":"",k.transform=(x.devicePixelRatio||1)<=1?"translate("+d+"px, "+m+"px)":"translate3d("+d+"px, "+m+"px, 0)",k)):Object.assign({},E,((t={})[w]=b?m+"px":"",t[y]=h?d+"px":"",t.transform="",t))}var Qe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,a=n.adaptive,i=void 0===a||a,s=n.roundOffsets,l=void 0===s||s,p={placement:Me(t.placement),variation:Xe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Ye(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ye(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},et={passive:!0};var tt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=void 0===r||r,i=o.resize,s=void 0===i||i,l=Te(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",n.update,et)})),s&&l.addEventListener("resize",n.update,et),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",n.update,et)})),s&&l.removeEventListener("resize",n.update,et)}},data:{}},nt={left:"right",right:"left",bottom:"top",top:"bottom"};function ot(e){return e.replace(/left|right|bottom|top/g,(function(e){return nt[e]}))}var rt={start:"end",end:"start"};function at(e){return e.replace(/start|end/g,(function(e){return rt[e]}))}function it(e){var t=Te(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function st(e){return De(qe(e)).left+it(e).scrollLeft}function lt(e){var t=He(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function pt(e){return["html","body","#document"].indexOf(Ee(e))>=0?e.ownerDocument.body:Ce(e)&&lt(e)?e:pt(Ne(e))}function ut(e,t){var n;void 0===t&&(t=[]);var o=pt(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),a=Te(o),i=r?[a].concat(a.visualViewport||[],lt(o)?o:[]):o,s=t.concat(i);return r?s:s.concat(ut(Ne(i)))}function ct(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ft(e,t){return t===we?ct(function(e){var t=Te(e),n=qe(e),o=t.visualViewport,r=n.clientWidth,a=n.clientHeight,i=0,s=0;return o&&(r=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=o.offsetLeft,s=o.offsetTop)),{width:r,height:a,x:i+st(e),y:s}}(e)):Se(t)?function(e){var t=De(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ct(function(e){var t,n=qe(e),o=it(e),r=null==(t=e.ownerDocument)?void 0:t.body,a=Pe(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=Pe(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-o.scrollLeft+st(e),l=-o.scrollTop;return"rtl"===He(r||n).direction&&(s+=Pe(n.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:s,y:l}}(qe(e)))}function dt(e,t,n){var o="clippingParents"===t?function(e){var t=ut(Ne(e)),n=["absolute","fixed"].indexOf(He(e).position)>=0&&Ce(e)?$e(e):e;return Se(n)?t.filter((function(e){return Se(e)&&_e(e,n)&&"body"!==Ee(e)})):[]}(e):[].concat(t),r=[].concat(o,[n]),a=r[0],i=r.reduce((function(t,n){var o=ft(e,n);return t.top=Pe(o.top,t.top),t.right=Fe(o.right,t.right),t.bottom=Fe(o.bottom,t.bottom),t.left=Pe(o.left,t.left),t}),ft(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function vt(e){var t,n=e.reference,o=e.element,r=e.placement,a=r?Me(r):null,i=r?Xe(r):null,s=n.x+n.width/2-o.width/2,l=n.y+n.height/2-o.height/2;switch(a){case ce:t={x:s,y:n.y-o.height};break;case fe:t={x:s,y:n.y+n.height};break;case de:t={x:n.x+n.width,y:l};break;case ve:t={x:n.x-o.width,y:l};break;default:t={x:n.x,y:n.y}}var p=a?ze(a):null;if(null!=p){var u="y"===p?"height":"width";switch(i){case he:t[p]=t[p]-(n[u]/2-o[u]/2);break;case be:t[p]=t[p]+(n[u]/2-o[u]/2)}}return t}function mt(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=void 0===o?e.placement:o,a=n.boundary,i=void 0===a?ye:a,s=n.rootBoundary,l=void 0===s?we:s,p=n.elementContext,u=void 0===p?xe:p,c=n.altBoundary,f=void 0!==c&&c,d=n.padding,v=void 0===d?0:d,m=Ke("number"!=typeof v?v:Ze(v,ge)),g=u===xe?Oe:xe,h=e.rects.popper,b=e.elements[f?g:u],y=dt(Se(b)?b:b.contextElement||qe(e.elements.popper),i,l),w=De(e.elements.reference),x=vt({reference:w,element:h,strategy:"absolute",placement:r}),O=ct(Object.assign({},h,x)),R=u===xe?O:w,A={top:y.top-R.top+m.top,bottom:R.bottom-y.bottom+m.bottom,left:y.left-R.left+m.left,right:R.right-y.right+m.right},k=e.modifiersData.offset;if(u===xe&&k){var E=k[r];Object.keys(A).forEach((function(e){var t=[de,fe].indexOf(e)>=0?1:-1,n=[ce,fe].indexOf(e)>=0?"y":"x";A[e]+=E[n]*t}))}return A}var gt={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,a=void 0===r||r,i=n.altAxis,s=void 0===i||i,l=n.fallbackPlacements,p=n.padding,u=n.boundary,c=n.rootBoundary,f=n.altBoundary,d=n.flipVariations,v=void 0===d||d,m=n.allowedAutoPlacements,g=t.options.placement,h=Me(g),b=l||(h===g||!v?[ot(g)]:function(e){if(Me(e)===me)return[];var t=ot(e);return[at(e),t,at(t)]}(g)),y=[g].concat(b).reduce((function(e,n){return e.concat(Me(n)===me?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,a=n.rootBoundary,i=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,p=void 0===l?Ae:l,u=Xe(o),c=u?s?Re:Re.filter((function(e){return Xe(e)===u})):ge,f=c.filter((function(e){return p.indexOf(e)>=0}));0===f.length&&(f=c);var d=f.reduce((function(t,n){return t[n]=mt(e,{placement:n,boundary:r,rootBoundary:a,padding:i})[Me(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:c,padding:p,flipVariations:v,allowedAutoPlacements:m}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,R=!0,A=y[0],k=0;k<y.length;k++){var E=y[k],T=Me(E),S=Xe(E)===he,C=[ce,fe].indexOf(T)>=0,B=C?"width":"height",j=mt(t,{placement:E,boundary:u,rootBoundary:c,altBoundary:f,padding:p}),M=C?S?de:ve:S?fe:ce;w[B]>x[B]&&(M=ot(M));var P=ot(M),F=[];if(a&&F.push(j[T]<=0),s&&F.push(j[M]<=0,j[P]<=0),F.every((function(e){return e}))){A=E,R=!1;break}O.set(E,F)}if(R)for(var L=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},D=v?3:1;D>0;D--){if("break"===L(D))break}t.placement!==A&&(t.modifiersData[o]._skip=!0,t.placement=A,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ht(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function bt(e){return[ce,de,fe,ve].some((function(t){return e[t]>=0}))}var yt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=mt(t,{elementContext:"reference"}),s=mt(t,{altBoundary:!0}),l=ht(i,o),p=ht(s,r,a),u=bt(l),c=bt(p);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:p,isReferenceHidden:u,hasPopperEscaped:c},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":c})}};var wt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,a=void 0===r?[0,0]:r,i=Ae.reduce((function(e,n){return e[n]=function(e,t,n){var o=Me(e),r=[ve,ce].indexOf(o)>=0?-1:1,a="function"==typeof n?n(Object.assign({},t,{placement:e})):n,i=a[0],s=a[1];return i=i||0,s=(s||0)*r,[ve,de].indexOf(o)>=0?{x:s,y:i}:{x:i,y:s}}(n,t.rects,a),e}),{}),s=i[t.placement],l=s.x,p=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=p),t.modifiersData[o]=i}};var xt={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=vt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var Ot={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,a=void 0===r||r,i=n.altAxis,s=void 0!==i&&i,l=n.boundary,p=n.rootBoundary,u=n.altBoundary,c=n.padding,f=n.tether,d=void 0===f||f,v=n.tetherOffset,m=void 0===v?0:v,g=mt(t,{boundary:l,rootBoundary:p,padding:c,altBoundary:u}),h=Me(t.placement),b=Xe(t.placement),y=!b,w=ze(h),x=function(e){return"x"===e?"y":"x"}(w),O=t.modifiersData.popperOffsets,R=t.rects.reference,A=t.rects.popper,k="function"==typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,E="number"==typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),T=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,S={x:0,y:0};if(O){if(a){var C,B="y"===w?ce:ve,j="y"===w?fe:de,M="y"===w?"height":"width",P=O[w],F=P+g[B],L=P-g[j],D=d?-A[M]/2:0,I=b===he?R[M]:A[M],_=b===he?-A[M]:-R[M],H=t.elements.arrow,W=d&&H?Ie(H):{width:0,height:0},q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},N=q[B],U=q[j],$=Ve(0,R[M],W[M]),z=y?R[M]/2-D-$-N-E.mainAxis:I-$-N-E.mainAxis,V=y?-R[M]/2+D+$+U+E.mainAxis:_+$+U+E.mainAxis,K=t.elements.arrow&&$e(t.elements.arrow),Z=K?"y"===w?K.clientTop||0:K.clientLeft||0:0,J=null!=(C=null==T?void 0:T[w])?C:0,X=P+V-J,G=Ve(d?Fe(F,P+z-J-Z):F,P,d?Pe(L,X):L);O[w]=G,S[w]=G-P}if(s){var Y,Q="x"===w?ce:ve,ee="x"===w?fe:de,te=O[x],ne="y"===x?"height":"width",oe=te+g[Q],re=te-g[ee],ae=-1!==[ce,ve].indexOf(h),ie=null!=(Y=null==T?void 0:T[x])?Y:0,se=ae?oe:te-R[ne]-A[ne]-ie+E.altAxis,le=ae?te+R[ne]+A[ne]-ie-E.altAxis:re,pe=d&&ae?function(e,t,n){var o=Ve(e,t,n);return o>n?n:o}(se,te,le):Ve(d?se:oe,te,d?le:re);O[x]=pe,S[x]=pe-te}t.modifiersData[o]=S}},requiresIfExists:["offset"]};function Rt(e,t,n){void 0===n&&(n=!1);var o=Ce(t),r=Ce(t)&&function(e){var t=e.getBoundingClientRect(),n=Le(t.width)/e.offsetWidth||1,o=Le(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),a=qe(t),i=De(e,r),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(o||!o&&!n)&&(("body"!==Ee(t)||lt(a))&&(s=function(e){return e!==Te(e)&&Ce(e)?function(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):it(e)}(t)),Ce(t)?((l=De(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=st(a))),{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function At(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}function kt(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var Et={placement:"bottom",modifiers:[],strategy:"absolute"};function Tt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function St(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,a=void 0===r?Et:r;return function(e,t,n){void 0===n&&(n=a);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},Et,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},i=[],s=!1,l={state:r,setOptions:function(n){var s="function"==typeof n?n(r.options):n;p(),r.options=Object.assign({},a,r.options,s),r.scrollParents={reference:Se(e)?ut(e):e.contextElement?ut(e.contextElement):[],popper:ut(t)};var u=function(e){var t=At(e);return ke.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,r.options.modifiers)));return r.orderedModifiers=u.filter((function(e){return e.enabled})),r.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,a=e.effect;if("function"==typeof a){var s=a({state:r,name:t,instance:l,options:o}),p=function(){};i.push(s||p)}})),l.update()},forceUpdate:function(){if(!s){var e=r.elements,t=e.reference,n=e.popper;if(Tt(t,n)){r.rects={reference:Rt(t,$e(n),"fixed"===r.options.strategy),popper:Ie(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<r.orderedModifiers.length;o++)if(!0!==r.reset){var a=r.orderedModifiers[o],i=a.fn,p=a.options,u=void 0===p?{}:p,c=a.name;"function"==typeof i&&(r=i({state:r,options:u,name:c,instance:l})||r)}else r.reset=!1,o=-1}}},update:kt((function(){return new Promise((function(e){l.forceUpdate(),e(r)}))})),destroy:function(){p(),s=!0}};if(!Tt(e,t))return l;function p(){i.forEach((function(e){return e()})),i=[]}return l.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}St(),St({defaultModifiers:[tt,xt,Qe,je]});var Ct=St({defaultModifiers:[tt,xt,Qe,je,wt,gt,Ot,Je,yt]});const Bt=(e,t,o={})=>{const a={name:"updateState",enabled:!0,phase:"write",fn:({state:e})=>{const t=function(e){const t=Object.keys(e.elements),n=d(t.map((t=>[t,e.styles[t]||{}]))),o=d(t.map((t=>[t,e.attributes[t]])));return{styles:n,attributes:o}}(e);Object.assign(l.value,t)},requires:["computeStyles"]},i=n((()=>{const{onFirstUpdate:e,placement:t,strategy:n,modifiers:r}=p(o);return{onFirstUpdate:e,placement:t||"bottom",strategy:n||"absolute",modifiers:[...r||[],a,{name:"applyStyles",enabled:!1}]}})),s=u(),l=c({styles:{popper:{position:p(i).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),v=()=>{s.value&&(s.value.destroy(),s.value=void 0)};return r(i,(e=>{const t=p(s);t&&t.setOptions(e)}),{deep:!0}),r([e,t],(([e,t])=>{v(),e&&t&&(s.value=Ct(e,t,p(i)))})),f((()=>{v()})),{state:n((()=>{var e;return{...(null==(e=p(s))?void 0:e.state)||{}}})),styles:n((()=>p(l).styles)),attributes:n((()=>p(l).attributes)),update:()=>{var e;return null==(e=p(s))?void 0:e.update()},forceUpdate:()=>{var e;return null==(e=p(s))?void 0:e.forceUpdate()},instanceRef:n((()=>p(s)))}};function jt(){let e;const t=()=>window.clearTimeout(e);return v((()=>t())),{registerTimeout:(n,o)=>{t(),e=window.setTimeout(n,o)},cancelTimeout:t}}let Mt;const Pt=()=>{const e=g(),t=h(),o=n((()=>"".concat(e.value,"-popper-container-").concat(t.prefix))),r=n((()=>"#".concat(o.value)));return{id:o,selector:r}},Ft=()=>{const{id:e,selector:t}=Pt();return m((()=>{s&&(Mt||document.body.querySelector(t.value)||(Mt=(e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t})(e.value)))})),{id:e,selector:t}},Lt=b({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),Dt=({showAfter:e,hideAfter:t,autoClose:n,open:o,close:r})=>{const{registerTimeout:a}=jt(),{registerTimeout:i,cancelTimeout:s}=jt();return{onOpen:t=>{a((()=>{o(t);const e=p(n);y(e)&&e>0&&i((()=>{r(t)}),e)}),p(e))},onClose:e=>{s(),a((()=>{r(e)}),p(t))}}},It=Symbol("elForwardRef"),_t=Symbol("popper"),Ht=Symbol("popperContent"),Wt=b({role:{type:String,values:["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],default:"tooltip"}}),qt=x({name:"ElPopper",inheritAttrs:!1});var Nt=R(x({...qt,props:Wt,setup(e,{expose:t}){const o=e,r={triggerRef:c(),popperInstanceRef:c(),contentRef:c(),referenceRef:c(),role:n((()=>o.role))};return t(r),w(_t,r),(e,t)=>O(e.$slots,"default")}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);const Ut=b({arrowOffset:{type:Number,default:5}}),$t=x({name:"ElPopperArrow",inheritAttrs:!1});var zt=R(x({...$t,props:Ut,setup(e,{expose:t}){const n=e,o=A("popper"),{arrowOffset:a,arrowRef:i,arrowStyle:s}=k(Ht,void 0);return r((()=>n.arrowOffset),(e=>{a.value=e})),f((()=>{i.value=void 0})),t({arrowRef:i}),(e,t)=>(E(),T("span",{ref_key:"arrowRef",ref:i,class:S(p(o).e("arrow")),style:C(p(s)),"data-popper-arrow":""},null,6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);const Vt=x({name:"ElOnlyChild",setup(e,{slots:t,attrs:n}){var o;const r=k(It),a=(i=null!=(o=null==r?void 0:r.setForwardRef)?o:B,{mounted(e){i(e)},updated(e){i(e)},unmounted(){i(null)}});var i;return()=>{var e;const o=null==(e=t.default)?void 0:e.call(t,n);if(!o)return null;if(o.length>1)return null;const r=Kt(o);return r?j(M(r,n),[[a]]):null}}});function Kt(e){if(!e)return null;const t=e;for(const n of t){if(P(n))switch(n.type){case D:continue;case L:case"svg":return Zt(n);case F:return Kt(n.children);default:return n}return Zt(n)}return null}function Zt(e){const t=A("only-child");return I("span",{class:t.e("content")},[e])}const Jt=b({virtualRef:{type:t(Object)},virtualTriggering:Boolean,onMouseenter:{type:t(Function)},onMouseleave:{type:t(Function)},onClick:{type:t(Function)},onKeydown:{type:t(Function)},onFocus:{type:t(Function)},onBlur:{type:t(Function)},onContextmenu:{type:t(Function)},id:String,open:Boolean}),Xt=x({name:"ElPopperTrigger",inheritAttrs:!1});var Gt=R(x({...Xt,props:Jt,setup(e,{expose:t}){const o=e,{role:i,triggerRef:s}=k(_t,void 0);var l;l=s,w(It,{setForwardRef:e=>{l.value=e}});const u=n((()=>d.value?o.id:void 0)),c=n((()=>{if(i&&"tooltip"===i.value)return o.open&&o.id?o.id:void 0})),d=n((()=>{if(i&&"tooltip"!==i.value)return i.value})),v=n((()=>d.value?"".concat(o.open):void 0));let m;return a((()=>{r((()=>o.virtualRef),(e=>{e&&(s.value=_(e))}),{immediate:!0}),r(s,((e,t)=>{null==m||m(),m=void 0,H(e)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach((n=>{var r;const a=o[n];a&&(e.addEventListener(n.slice(2).toLowerCase(),a),null==(r=null==t?void 0:t.removeEventListener)||r.call(t,n.slice(2).toLowerCase(),a))})),m=r([u,c,d,v],(t=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(((n,o)=>{W(t[o])?e.removeAttribute(n):e.setAttribute(n,t[o])}))}),{immediate:!0})),H(t)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((e=>t.removeAttribute(e)))}),{immediate:!0})})),f((()=>{null==m||m(),m=void 0})),t({triggerRef:s}),(e,t)=>e.virtualTriggering?$("v-if",!0):(E(),q(p(Vt),U({key:0},e.$attrs,{"aria-controls":p(u),"aria-describedby":p(c),"aria-expanded":p(v),"aria-haspopup":p(d)}),{default:N((()=>[O(e.$slots,"default")])),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);const Yt=b({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:t(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:Ae,default:"bottom"},popperOptions:{type:t(Object),default:()=>({})},strategy:{type:String,values:["fixed","absolute"],default:"absolute"}}),Qt=b({...Yt,id:String,style:{type:t([String,Array,Object])},className:{type:t([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:t([String,Array,Object])},popperStyle:{type:t([String,Array,Object])},referenceEl:{type:t(Object)},triggerTargetEl:{type:t(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number}),en={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},tn=(e,t=[])=>{const{placement:n,strategy:o,popperOptions:r}=e,a={placement:n,strategy:o,...r,modifiers:[...nn(e),...t]};return function(e,t){t&&(e.modifiers=[...e.modifiers,...null!=t?t:[]])}(a,null==r?void 0:r.modifiers),a};function nn(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:o}=e;return[{name:"offset",options:{offset:[0,null!=t?t:12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:o}},{name:"computeStyles",options:{gpuAcceleration:n}}]}const on=e=>{const{popperInstanceRef:t,contentRef:o,triggerRef:i,role:l}=k(_t,void 0),u=c(),f=c(),d=n((()=>({name:"eventListeners",enabled:!!e.visible}))),v=n((()=>{var e;const t=p(u),n=null!=(e=p(f))?e:0;return{name:"arrow",enabled:(o=t,!(void 0===o)),options:{element:t,padding:n}};var o})),m=n((()=>({onFirstUpdate:()=>{w()},...tn(e,[p(v),p(d)])}))),g=n((()=>(e=>{if(s)return _(e)})(e.referenceEl)||p(i))),{attributes:h,state:b,styles:y,update:w,forceUpdate:x,instanceRef:O}=Bt(g,o,m);return r(O,(e=>t.value=e)),a((()=>{r((()=>{var e;return null==(e=p(g))?void 0:e.getBoundingClientRect()}),(()=>{w()}))})),{attributes:h,arrowRef:u,contentRef:o,instanceRef:O,state:b,styles:y,role:l,forceUpdate:x,update:w}},rn=x({name:"ElPopperContent"});var an=R(x({...rn,props:Qt,emits:en,setup(e,{expose:t,emit:o}){const i=e,{focusStartRef:s,trapped:l,onFocusAfterReleased:u,onFocusAfterTrapped:d,onFocusInTrap:v,onFocusoutPrevented:m,onReleaseRequested:g}=((e,t)=>{const n=c(!1),o=c();return{focusStartRef:o,trapped:n,onFocusAfterReleased:e=>{var n;"pointer"!==(null==(n=e.detail)?void 0:n.focusReason)&&(o.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:t=>{e.visible&&!n.value&&(t.target&&(o.value=t.target),n.value=!0)},onFocusoutPrevented:t=>{e.trapping||("pointer"===t.detail.focusReason&&t.preventDefault(),n.value=!1)},onReleaseRequested:()=>{n.value=!1,t("close")}}})(i,o),{attributes:h,arrowRef:b,contentRef:y,styles:x,instanceRef:R,role:S,update:C}=on(i),{ariaModal:j,arrowStyle:M,contentAttrs:P,contentClass:F,contentStyle:L,updateZIndex:D}=((e,{attributes:t,styles:o,role:r})=>{const{nextZIndex:a}=z(),i=A("popper"),s=n((()=>p(t).popper)),l=c(e.zIndex||a()),u=n((()=>[i.b(),i.is("pure",e.pure),i.is(e.effect),e.popperClass])),f=n((()=>[{zIndex:p(l)},p(o).popper,e.popperStyle||{}]));return{ariaModal:n((()=>"dialog"===r.value?"false":void 0)),arrowStyle:n((()=>p(o).arrow||{})),contentAttrs:s,contentClass:u,contentStyle:f,contentZIndex:l,updateZIndex:()=>{l.value=e.zIndex||a()}}})(i,{styles:x,attributes:h,role:S}),_=k(V,void 0),q=c();let $;w(Ht,{arrowStyle:M,arrowRef:b,arrowOffset:q}),_&&(_.addInputId||_.removeInputId)&&w(V,{..._,addInputId:B,removeInputId:B});const Z=(e=!0)=>{C(),e&&D()},J=()=>{Z(!1),i.visible&&i.focusOnShow?l.value=!0:!1===i.visible&&(l.value=!1)};return a((()=>{r((()=>i.triggerTargetEl),((e,t)=>{null==$||$(),$=void 0;const n=p(e||y.value),o=p(t||y.value);H(n)&&($=r([S,()=>i.ariaLabel,j,()=>i.id],(e=>{["role","aria-label","aria-modal","id"].forEach(((t,o)=>{W(e[o])?n.removeAttribute(t):n.setAttribute(t,e[o])}))}),{immediate:!0})),o!==n&&H(o)&&["role","aria-label","aria-modal","id"].forEach((e=>{o.removeAttribute(e)}))}),{immediate:!0}),r((()=>i.visible),J,{immediate:!0})})),f((()=>{null==$||$(),$=void 0})),t({popperContentRef:y,popperInstanceRef:R,updatePopper:Z,contentStyle:L}),(e,t)=>(E(),T("div",U({ref_key:"contentRef",ref:y},p(P),{style:p(L),class:p(F),tabindex:"-1",onMouseenter:t[0]||(t[0]=t=>e.$emit("mouseenter",t)),onMouseleave:t[1]||(t[1]=t=>e.$emit("mouseleave",t))}),[I(p(K),{trapped:p(l),"trap-on-focus-in":!0,"focus-trap-el":p(y),"focus-start-el":p(s),onFocusAfterTrapped:p(d),onFocusAfterReleased:p(u),onFocusin:p(v),onFocusoutPrevented:p(m),onReleaseRequested:p(g)},{default:N((()=>[O(e.$slots,"default")])),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);const sn=Z(Nt),ln=Symbol("elTooltip"),pn=b({...Lt,...Qt,appendTo:{type:t([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:t(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean}),un=b({...Jt,disabled:Boolean,trigger:{type:t([String,Array]),default:"hover"},triggerKeys:{type:t(Array),default:()=>[J.enter,J.space]}}),{useModelToggleProps:cn,useModelToggleEmits:fn,useModelToggle:dn}=ue("visible"),vn=b({...Wt,...cn,...pn,...un,...Ut,showArrow:{type:Boolean,default:!0}}),mn=[...fn,"before-show","before-hide","show","hide","open","close"],gn=(e,t,n)=>o=>{((e,t)=>X(e)?e.includes(t):e===t)(p(e),t)&&n(o)},hn=x({name:"ElTooltipTrigger"});var bn=R(x({...hn,props:un,setup(e,{expose:t}){const n=e,o=A("tooltip"),{controlled:r,id:a,open:i,onOpen:s,onClose:l,onToggle:u}=k(ln,void 0),f=c(null),d=()=>{if(p(r)||n.disabled)return!0},v=G(n,"trigger"),m=ie(d,gn(v,"hover",s)),g=ie(d,gn(v,"hover",l)),h=ie(d,gn(v,"click",(e=>{0===e.button&&u(e)}))),b=ie(d,gn(v,"focus",s)),y=ie(d,gn(v,"focus",l)),w=ie(d,gn(v,"contextmenu",(e=>{e.preventDefault(),u(e)}))),x=ie(d,(e=>{const{code:t}=e;n.triggerKeys.includes(t)&&(e.preventDefault(),u(e))}));return t({triggerRef:f}),(e,t)=>(E(),q(p(Gt),{id:p(a),"virtual-ref":e.virtualRef,open:p(i),"virtual-triggering":e.virtualTriggering,class:S(p(o).e("trigger")),onBlur:p(y),onClick:p(h),onContextmenu:p(w),onFocus:p(b),onMouseenter:p(m),onMouseleave:p(g),onKeydown:p(x)},{default:N((()=>[O(e.$slots,"default")])),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);const yn=x({name:"ElTooltipContent",inheritAttrs:!1});var wn=R(x({...yn,props:pn,setup(e,{expose:t}){const o=e,{selector:a}=Pt(),i=A("tooltip"),s=c(null),l=c(!1),{controlled:u,id:d,open:v,trigger:m,onClose:g,onOpen:h,onShow:b,onHide:y,onBeforeShow:w,onBeforeHide:x}=k(ln,void 0),R=n((()=>o.transition||"".concat(i.namespace.value,"-fade-in-linear"))),T=n((()=>o.persistent));f((()=>{l.value=!0}));const S=n((()=>!!p(T)||p(v))),C=n((()=>!o.disabled&&p(v))),B=n((()=>o.appendTo||a.value)),M=n((()=>{var e;return null!=(e=o.style)?e:{}})),P=n((()=>!p(v))),F=()=>{y()},L=()=>{if(p(u))return!0},D=ie(L,(()=>{o.enterable&&"hover"===p(m)&&h()})),_=ie(L,(()=>{"hover"===p(m)&&g()})),H=()=>{var e,t;null==(t=null==(e=s.value)?void 0:e.updatePopper)||t.call(e),null==w||w()},W=()=>{null==x||x()},z=()=>{b(),K=te(n((()=>{var e;return null==(e=s.value)?void 0:e.popperContentRef})),(()=>{if(p(u))return;"hover"!==p(m)&&g()}))},V=()=>{o.virtualTriggering||g()};let K;return r((()=>p(v)),(e=>{e||null==K||K()}),{flush:"post"}),r((()=>o.content),(()=>{var e,t;null==(t=null==(e=s.value)?void 0:e.updatePopper)||t.call(e)})),t({contentRef:s}),(e,t)=>(E(),q(ee,{disabled:!e.teleported,to:p(B)},[I(Q,{name:p(R),onAfterLeave:F,onBeforeEnter:H,onAfterEnter:z,onBeforeLeave:W},{default:N((()=>[p(S)?j((E(),q(p(an),U({key:0,id:p(d),ref_key:"contentRef",ref:s},e.$attrs,{"aria-label":e.ariaLabel,"aria-hidden":p(P),"boundaries-padding":e.boundariesPadding,"fallback-placements":e.fallbackPlacements,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,placement:e.placement,"popper-options":e.popperOptions,strategy:e.strategy,effect:e.effect,enterable:e.enterable,pure:e.pure,"popper-class":e.popperClass,"popper-style":[e.popperStyle,p(M)],"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,visible:p(C),"z-index":e.zIndex,onMouseenter:p(D),onMouseleave:p(_),onBlur:V,onClose:p(g)}),{default:N((()=>[l.value?$("v-if",!0):O(e.$slots,"default",{key:0})])),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[Y,p(C)]]):$("v-if",!0)])),_:3},8,["name"])],8,["disabled","to"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);const xn=["innerHTML"],On={key:1},Rn=x({name:"ElTooltip"});const An=Z(R(x({...Rn,props:vn,emits:mn,setup(e,{expose:t,emit:o}){const a=e;Ft();const i=ne(),s=c(),u=c(),f=()=>{var e;const t=p(s);t&&(null==(e=t.popperInstanceRef)||e.update())},d=c(!1),v=c(),{show:m,hide:g,hasUpdateHandler:h}=dn({indicator:d,toggleReason:v}),{onOpen:b,onClose:y}=Dt({showAfter:G(a,"showAfter"),hideAfter:G(a,"hideAfter"),autoClose:G(a,"autoClose"),open:m,close:g}),x=n((()=>l(a.visible)&&!h.value));w(ln,{controlled:x,id:i,open:oe(d),trigger:G(a,"trigger"),onOpen:e=>{b(e)},onClose:e=>{y(e)},onToggle:e=>{p(d)?y(e):b(e)},onShow:()=>{o("show",v.value)},onHide:()=>{o("hide",v.value)},onBeforeShow:()=>{o("before-show",v.value)},onBeforeHide:()=>{o("before-hide",v.value)},updatePopper:f}),r((()=>a.disabled),(e=>{e&&d.value&&(d.value=!1)}));return re((()=>d.value&&g())),t({popperRef:s,contentRef:u,isFocusInsideContent:e=>{var t,n;const o=null==(n=null==(t=u.value)?void 0:t.contentRef)?void 0:n.popperContentRef,r=(null==e?void 0:e.relatedTarget)||document.activeElement;return o&&o.contains(r)},updatePopper:f,onOpen:b,onClose:y,hide:g}),(e,t)=>(E(),q(p(sn),{ref_key:"popperRef",ref:s,role:e.role},{default:N((()=>[I(bn,{disabled:e.disabled,trigger:e.trigger,"trigger-keys":e.triggerKeys,"virtual-ref":e.virtualRef,"virtual-triggering":e.virtualTriggering},{default:N((()=>[e.$slots.default?O(e.$slots,"default",{key:0}):$("v-if",!0)])),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),I(wn,{ref_key:"contentRef",ref:u,"aria-label":e.ariaLabel,"boundaries-padding":e.boundariesPadding,content:e.content,disabled:e.disabled,effect:e.effect,enterable:e.enterable,"fallback-placements":e.fallbackPlacements,"hide-after":e.hideAfter,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,persistent:e.persistent,"popper-class":e.popperClass,"popper-style":e.popperStyle,placement:e.placement,"popper-options":e.popperOptions,pure:e.pure,"raw-content":e.rawContent,"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,"show-after":e.showAfter,strategy:e.strategy,teleported:e.teleported,transition:e.transition,"virtual-triggering":e.virtualTriggering,"z-index":e.zIndex,"append-to":e.appendTo},{default:N((()=>[O(e.$slots,"content",{},(()=>[e.rawContent?(E(),T("span",{key:0,innerHTML:e.content},null,8,xn)):(E(),T("span",On,ae(e.content),1))])),e.showArrow?(E(),q(p(zt),{key:0,"arrow-offset":e.arrowOffset},null,8,["arrow-offset"])):$("v-if",!0)])),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])])),_:3},8,["role"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]));export{An as E,Vt as O,ln as T,Ae as a,Dt as b,ie as c,un as d,pn as u,se as w,Ct as y};
