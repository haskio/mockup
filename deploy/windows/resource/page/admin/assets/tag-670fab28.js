/*! 
 Build based on gin-vue-admin 
 Time : 1689257244000 */
import{be as n,bf as t,bg as e,bh as r,bi as i}from"./index-c2e3c879.js";var o=/\s/;var a=/^\s+/;function u(n){return n?n.slice(0,function(n){for(var t=n.length;t--&&o.test(n.charAt(t)););return t}(n)+1).replace(a,""):n}var s=NaN,c=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,d=/^0o[0-7]+$/i,l=parseInt;function v(e){if("number"==typeof e)return e;if(n(e))return s;if(t(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=t(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=u(e);var i=f.test(e);return i||d.test(e)?l(e.slice(2),i?2:8):c.test(e)?s:+e}const m=function(){return e.Date.now()};var p=Math.max,g=Math.min;function h(n,e,r){var i,o,a,u,s,c,f=0,d=!1,l=!1,h=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function b(t){var e=i,r=o;return i=o=void 0,f=t,u=n.apply(r,e)}function x(n){var t=n-c;return void 0===c||t>=e||t<0||l&&n-f>=a}function y(){var n=m();if(x(n))return T(n);s=setTimeout(y,function(n){var t=e-(n-c);return l?g(t,a-(n-f)):t}(n))}function T(n){return s=void 0,h&&i?b(n):(i=o=void 0,u)}function w(){var n=m(),t=x(n);if(i=arguments,o=this,c=n,t){if(void 0===s)return function(n){return f=n,s=setTimeout(y,e),d?b(n):u}(c);if(l)return clearTimeout(s),s=setTimeout(y,e),b(c)}return void 0===s&&(s=setTimeout(y,e)),u}return e=v(e)||0,t(r)&&(d=!!r.leading,a=(l="maxWait"in r)?p(v(r.maxWait)||0,e):a,h="trailing"in r?!!r.trailing:h),w.cancel=function(){void 0!==s&&clearTimeout(s),f=0,i=c=o=s=void 0},w.flush=function(){return void 0===s?u:T(m())},w}const b=new Map;let x;function y(n,t){let e=[];return Array.isArray(t.arg)?e=t.arg:i(t.arg)&&e.push(t.arg),function(r,i){const o=t.instance.popperRef,a=r.target,u=null==i?void 0:i.target,s=!t||!t.instance,c=!a||!u,f=n.contains(a)||n.contains(u),d=n===a,l=e.length&&e.some((n=>null==n?void 0:n.contains(a)))||e.length&&e.includes(u),v=o&&(o.contains(a)||o.contains(u));s||c||f||d||l||v||t.value(r,i)}}r&&(document.addEventListener("mousedown",(n=>x=n)),document.addEventListener("mouseup",(n=>{for(const t of b.values())for(const{documentHandler:e}of t)e(n,x)})));const T={beforeMount(n,t){b.has(n)||b.set(n,[]),b.get(n).push({documentHandler:y(n,t),bindingFn:t.value})},updated(n,t){b.has(n)||b.set(n,[]);const e=b.get(n),r=e.findIndex((n=>n.bindingFn===t.oldValue)),i={documentHandler:y(n,t),bindingFn:t.value};r>=0?e.splice(r,1,i):e.push(i)},unmounted(n){b.delete(n)}};export{T as C,h as d};
