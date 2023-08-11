/*! 
 Build based on gin-vue-admin 
 Time : 1689330001000 */
System.register(["./index-legacy-f9f85020.js","./upload-legacy-782983ec.js","./progress-legacy-6334c178.js","./button-legacy-ce556deb.js","./image-legacy-af7ef2dc.js","./_plugin-vue_export-helper-legacy-c6aa7c23.js","./index-legacy-c5a176a7.js"],(function(e,t){"use strict";var n,a,o,r,i,l,u,d,c,s,p,f,g,m;return{setters:[function(e){n=e.s,a=e.r,o=e.l,r=e.o,i=e.c,l=e.d,u=e.w,d=e.g,c=e.A,s=e.j,p=e.E},null,null,null,function(e){f=e.I},function(e){g=e._},function(e){m=e.E}],execute:function(){var t=document.createElement("style");t.textContent=".image-uploader[data-v-c73174ca]{border:1px dashed #d9d9d9;width:180px;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.image-uploader[data-v-c73174ca]{border-color:#409eff}.image-uploader-icon[data-v-c73174ca]{font-size:28px;color:#8c939d;width:178px;height:178px;line-height:178px;text-align:center}.image[data-v-c73174ca]{width:178px;height:178px;display:block}\n",document.head.appendChild(t),e("g",(function(e){return n({url:"/fileUploadAndDownload/getFileList",method:"post",data:e})})),e("d",(function(e){return n({url:"/fileUploadAndDownload/deleteFile",method:"post",data:e})})),e("e",(function(e){return n({url:"/fileUploadAndDownload/editFileName",method:"post",data:e})}));var v={name:"UploadImage",methods:{}},h=(e("U",g(Object.assign(v,{props:{imageUrl:{type:String,default:""},fileSize:{type:Number,default:2048},maxWH:{type:Number,default:1920}},emits:["on-success"],setup:function(e,t){var n=t.emit,g=e,v=a("/api"),h=o(),y=function(e){var t="image/jpeg"===e.type,n="image/png"===e.type;if(!t&&!n)return s.error("上传头像图片只能是 jpg或png 格式!"),!1;var a=e.size/1024<g.fileSize;return a||new f(e,g.fileSize,g.maxWH).compress()},x=function(e){var t=e.data;t.file&&n("on-success",t.file.url)};return function(e,t){var n=p,a=m;return r(),i("div",null,[l(a,{action:"".concat(v.value,"/fileUploadAndDownload/upload"),headers:{"x-token":c(h).token},"show-file-list":!1,"on-success":x,"before-upload":y,multiple:!1},{default:u((function(){return[l(n,{type:"primary"},{default:u((function(){return[d("压缩上传")]})),_:1})]})),_:1},8,["action","headers"])])}}}),[["__scopeId","data-v-c73174ca"]])),{name:"UploadCommon",methods:{}});e("_",Object.assign(h,{emits:["on-success"],setup:function(e,t){var n=t.emit,f=a("/api"),g=o(),v=a(!1),h=function(e){v.value=!0;var t="image/jpeg"===e.type,n="image/png"===e.type,a=e.size/1024/1024<.5;return t||n||(s.error("上传图片只能是 jpg或png 格式!"),v.value=!1),a||(s.error("未压缩的上传图片大小不能超过 500KB，请使用压缩上传"),v.value=!1),(n||t)&&a},y=function(e){var t=e.data;t.file&&n("on-success",t.file.url)},x=function(){s({type:"error",message:"上传失败"}),v.value=!1};return function(e,t){var n=p,a=m;return r(),i("div",null,[l(a,{action:"".concat(f.value,"/fileUploadAndDownload/upload"),"before-upload":h,headers:{"x-token":c(g).token},"on-error":x,"on-success":y,"show-file-list":!1,class:"upload-btn"},{default:u((function(){return[l(n,{type:"primary"},{default:u((function(){return[d("普通上传")]})),_:1})]})),_:1},8,["action","headers"])])}}}))}}}));
