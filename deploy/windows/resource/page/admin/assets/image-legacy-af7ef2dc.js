/*! 
 Build based on gin-vue-admin 
 Time : 1689330001000 */
!function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(n=r.key,a=void 0,"symbol"==typeof(a=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(n,"string"))?a:String(a)),r)}var n,a}System.register([],(function(t,i){"use strict";return{execute:function(){var i=function(){function t(e,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1920;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.file=e,this.fileSize=i,this.maxWH=r}var i,r,n;return i=t,(r=[{key:"compress",value:function(){var e=this,t=this.file.type,i=this.file.size/1024;return new Promise((function(r){var n=new FileReader;n.readAsDataURL(e.file),n.onload=function(){var a=document.createElement("canvas"),o=document.createElement("img");o.src=n.result,o.onload=function(){var n=a.getContext("2d"),l=e.dWH(o.width,o.height,e.maxWH);a.width=l.width,a.height=l.height,n.clearRect(0,0,a.width,a.height),n.drawImage(o,0,0,a.width,a.height);var u=a.toDataURL(t,.9),h=e.fileSizeKB(u);h>e.fileSize&&console.log("图片尺寸太大!"+i+" >> "+h);var f=e.dataURLtoBlob(u,t),c=new File([f],e.file.name);r(c)}}}))}},{key:"dWH",value:function(e,t,i){var r={width:e,height:t};return Math.max(e,t)>i?e>t?(r.width=i,r.height=Math.round(t*(i/e)),r):(r.height=i,r.width=Math.round(e*(i/t)),r):r}},{key:"fileSizeKB",value:function(e){return Math.round(3*e.split(",")[1].length/4/1024)}},{key:"dataURLtoBlob",value:function(e,t){for(var i=atob(e.split(",")[1]),r=e.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(i.length),a=new Uint8Array(n),o=0;o<i.length;o++)a[o]=i.charCodeAt(o);return t&&(r=t),new Blob([n],{type:r,lastModifiedDate:new Date})}}])&&e(i.prototype,r),n&&e(i,n),Object.defineProperty(i,"prototype",{writable:!1}),t}();t("I",i);t("g",(function(e){return e&&"http"!==e.slice(0,4)?"/api/"+e:e}))}}}))}();
