/*! 
 Build based on gin-vue-admin 
 Time : 1691991175000 */
System.register(["./index-legacy-49209d69.js","./upload-legacy-782983ec.js","./progress-legacy-6334c178.js","./icon-legacy-4309e40a.js","./index-legacy-c13bc25f.js","./index-legacy-5b2d0bc7.js","./cloneDeep-legacy-57541f22.js","./_baseClone-legacy-cc454665.js","./_Uint8Array-legacy-4eef4a1f.js","./_initCloneObject-legacy-8f986bb8.js","./isEqual-legacy-f5a3505b.js"],(function(e,l){"use strict";var n,a,t,u,c,o,s,i,r,d,g,f,j;return{setters:[function(e){n=e.l,a=e.r,t=e.U,u=e.o,c=e.c,o=e.d,s=e.w,i=e.A,r=e.b,d=e.g,g=e.j,f=e.N},null,null,null,function(e){j=e.E},null,null,null,null,null,null],execute:function(){var l=r("div",{class:"el-upload__text"},[d(" 拖拽或"),r("em",null,"点击上传")],-1),y=r("div",{class:"el-upload__tip"}," 请把安装包的zip拖拽至此处上传 ",-1);e("default",{__name:"index",setup:function(e){var r=n(),d=a(""),p=function(e){if(0===e.code){var l="";e.data&&e.data.forEach((function(e,n){l+="".concat(n+1,".").concat(e.msg,"\n")})),alert(l)}else g.error(e.msg)};return function(e,n){var a=t("upload-filled"),g=f,_=j;return u(),c("div",null,[o(_,{class:"upload-demo",drag:"",action:"".concat(d.value,"/autoCode/installPlugin"),headers:{"x-token":i(r).token},"show-file-list":!1,"on-success":p,"on-error":p,name:"plug"},{tip:s((function(){return[y]})),default:s((function(){return[o(g,{class:"el-icon--upload"},{default:s((function(){return[o(a)]})),_:1}),l]})),_:1},8,["action","headers"])])}}})}}}));
