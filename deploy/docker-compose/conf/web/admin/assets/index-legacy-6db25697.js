/*! 
 Build based on gin-vue-admin 
 Time : 1689330001000 */
System.register(["./menuItem-legacy-7c9cc4ee.js","./asyncSubmenu-legacy-b1ba66dc.js","./index-legacy-f9f85020.js","./tooltip-legacy-b3c86740.js","./popper-legacy-e36fa054.js","./icon-legacy-4309e40a.js","./_plugin-vue_export-helper-legacy-c6aa7c23.js","./index-legacy-39caac83.js","./index-legacy-3fbbc0b5.js","./index-legacy-b89bd3dd.js"],(function(e,n){"use strict";var t,r,u,l,o,i,c,f,s,a,d,p;return{setters:[function(e){t=e.default},function(e){r=e.default},function(e){u=e.D,l=e.U,o=e.o,i=e.h,c=e.w,f=e.c,s=e.J,a=e.K,d=e.e,p=e.M},null,null,null,null,null,null,null],execute:function(){var n={name:"AsideComponent"};e("default",Object.assign(n,{props:{routerInfo:{type:Object,default:function(){return null}},isCollapse:{default:function(){return!1},type:Boolean},theme:{default:function(){return{}},type:Object}},setup:function(e){var n=e,h=u((function(){return n.routerInfo.children&&n.routerInfo.children.filter((function(e){return!e.hidden})).length?r:t}));return function(n,t){var r=l("AsideComponent");return e.routerInfo.hidden?d("",!0):(o(),i(p(h.value),{key:0,"is-collapse":e.isCollapse,theme:e.theme,"router-info":e.routerInfo},{default:c((function(){return[e.routerInfo.children&&e.routerInfo.children.length?(o(!0),f(s,{key:0},a(e.routerInfo.children,(function(n){return o(),i(r,{key:n.name,"is-collapse":!1,"router-info":n,theme:e.theme},null,8,["router-info","theme"])})),128)):d("",!0)]})),_:1},8,["is-collapse","theme","router-info"]))}}}))}}}));
