/*! 
 Build based on gin-vue-admin 
 Time : 1691228829000 */
System.register(["./index-legacy-362f7fa2.js","./scrollbar-legacy-129a1c21.js","./tooltip-legacy-b3c86740.js","./popper-legacy-e36fa054.js","./index-legacy-8edef096.js","./index-legacy-a8fd3c81.js","./menuItem-legacy-a0295972.js","./icon-legacy-4309e40a.js","./_plugin-vue_export-helper-legacy-c6aa7c23.js","./index-legacy-4080fec4.js","./asyncSubmenu-legacy-822adcfc.js","./index-legacy-f9591f3e.js"],(function(e,n){"use strict";var l,t,o,i,a,r,u,m,c,s,d,v,p,b,h,g,f,x,_,y,z,w;return{setters:[function(e){l=e.ao,t=e.u,o=e.l,i=e.Y,a=e.r,r=e.T,u=e.R,m=e.ap,c=e.o,s=e.c,d=e.d,v=e.w,p=e.X,b=e.J,h=e.K,g=e.A,f=e.h,x=e.e,_=e.H},function(e){y=e.E},null,null,function(e){z=e.default},function(e){w=e.E},null,null,null,null,null,null],execute:function(){var n=document.createElement("style");n.textContent=".fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.fade-in-linear-enter-from,.fade-in-linear-leave-to{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.el-fade-in-linear-enter-from,.el-fade-in-linear-leave-to{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-fade-in-enter-from,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-zoom-in-center-enter-from,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transform:scaleY(1);transition:var(--el-transition-md-fade);transform-origin:center top}.el-zoom-in-top-enter-active[data-popper-placement^=top],.el-zoom-in-top-leave-active[data-popper-placement^=top]{transform-origin:center bottom}.el-zoom-in-top-enter-from,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transform:scaleY(1);transition:var(--el-transition-md-fade);transform-origin:center bottom}.el-zoom-in-bottom-enter-from,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transform:scale(1);transition:var(--el-transition-md-fade);transform-origin:top left}.el-zoom-in-left-enter-from,.el-zoom-in-left-leave-active{opacity:0;transform:scale(.45)}.collapse-transition{transition:var(--el-transition-duration) height ease-in-out,var(--el-transition-duration) padding-top ease-in-out,var(--el-transition-duration) padding-bottom ease-in-out}.el-collapse-transition-leave-active,.el-collapse-transition-enter-active{transition:var(--el-transition-duration) max-height ease-in-out,var(--el-transition-duration) padding-top ease-in-out,var(--el-transition-duration) padding-bottom ease-in-out}.horizontal-collapse-transition{transition:var(--el-transition-duration) width ease-in-out,var(--el-transition-duration) padding-left ease-in-out,var(--el-transition-duration) padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter-from,.el-list-leave-to{opacity:0;transform:translateY(-30px)}.el-list-leave-active{position:absolute!important}.el-opacity-transition{transition:opacity var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}:root{--el-menu-active-color: var(--el-color-primary);--el-menu-text-color: var(--el-text-color-primary);--el-menu-hover-text-color: var(--el-color-primary);--el-menu-bg-color: var(--el-fill-color-blank);--el-menu-hover-bg-color: var(--el-color-primary-light-9);--el-menu-item-height: 56px;--el-menu-sub-item-height: calc(var(--el-menu-item-height) - 6px);--el-menu-horizontal-sub-item-height: 36px;--el-menu-item-font-size: var(--el-font-size-base);--el-menu-item-hover-fill: var(--el-color-primary-light-9);--el-menu-border-color: var(--el-border-color);--el-menu-base-level-padding: 20px;--el-menu-level-padding: 20px;--el-menu-icon-width: 24px}.el-menu{border-right:solid 1px var(--el-menu-border-color);list-style:none;position:relative;margin:0;padding-left:0;background-color:var(--el-menu-bg-color);box-sizing:border-box}.el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-menu-item,.el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-sub-menu__title,.el-menu--vertical:not(.el-menu--collapse):not(.el-menu--popup-container) .el-menu-item-group__title{white-space:nowrap;padding-left:calc(var(--el-menu-base-level-padding) + var(--el-menu-level) * var(--el-menu-level-padding))}.el-menu--horizontal{display:flex;flex-wrap:nowrap;border-bottom:solid 1px var(--el-menu-border-color);border-right:none}.el-menu--horizontal>.el-menu-item{display:inline-flex;justify-content:center;align-items:center;height:100%;margin:0;border-bottom:2px solid transparent;color:var(--el-menu-text-color)}.el-menu--horizontal>.el-menu-item a,.el-menu--horizontal>.el-menu-item a:hover{color:inherit}.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus{background-color:#fff}.el-menu--horizontal>.el-sub-menu:focus,.el-menu--horizontal>.el-sub-menu:hover{outline:none}.el-menu--horizontal>.el-sub-menu:hover .el-sub-menu__title{color:var(--el-menu-hover-text-color)}.el-menu--horizontal>.el-sub-menu.is-active .el-sub-menu__title{border-bottom:2px solid var(--el-menu-active-color);color:var(--el-menu-active-color)}.el-menu--horizontal>.el-sub-menu .el-sub-menu__title{height:100%;border-bottom:2px solid transparent;color:var(--el-menu-text-color)}.el-menu--horizontal>.el-sub-menu .el-sub-menu__title:hover{background-color:var(--el-bg-color-overlay)}.el-menu--horizontal .el-menu .el-menu-item,.el-menu--horizontal .el-menu .el-sub-menu__title{background-color:var(--el-menu-bg-color);display:flex;align-items:center;height:var(--el-menu-horizontal-sub-item-height);line-height:var(--el-menu-horizontal-sub-item-height);padding:0 10px;color:var(--el-menu-text-color)}.el-menu--horizontal .el-menu .el-sub-menu__title{padding-right:40px}.el-menu--horizontal .el-menu .el-menu-item.is-active,.el-menu--horizontal .el-menu .el-sub-menu.is-active>.el-sub-menu__title{color:var(--el-menu-active-color)}.el-menu--horizontal .el-menu-item:not(.is-disabled):hover,.el-menu--horizontal .el-menu-item:not(.is-disabled):focus{outline:none;color:var(--el-menu-hover-text-color);background-color:var(--el-menu-hover-bg-color)}.el-menu--horizontal>.el-menu-item.is-active{border-bottom:2px solid var(--el-menu-active-color);color:var(--el-menu-active-color)!important}.el-menu--collapse{width:calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2)}.el-menu--collapse>.el-menu-item [class^=el-icon],.el-menu--collapse>.el-sub-menu>.el-sub-menu__title [class^=el-icon],.el-menu--collapse>.el-menu-item-group>ul>.el-sub-menu>.el-sub-menu__title [class^=el-icon]{margin:0;vertical-align:middle;width:var(--el-menu-icon-width);text-align:center}.el-menu--collapse>.el-menu-item .el-sub-menu__icon-arrow,.el-menu--collapse>.el-sub-menu>.el-sub-menu__title .el-sub-menu__icon-arrow,.el-menu--collapse>.el-menu-item-group>ul>.el-sub-menu>.el-sub-menu__title .el-sub-menu__icon-arrow{display:none}.el-menu--collapse>.el-menu-item>span,.el-menu--collapse>.el-sub-menu>.el-sub-menu__title>span,.el-menu--collapse>.el-menu-item-group>ul>.el-sub-menu>.el-sub-menu__title>span{height:0;width:0;overflow:hidden;visibility:hidden;display:inline-block}.el-menu--collapse>.el-menu-item.is-active i{color:inherit}.el-menu--collapse .el-menu .el-sub-menu{min-width:200px}.el-menu--popup{z-index:100;min-width:200px;border:none;padding:5px 0;border-radius:var(--el-border-radius-small);box-shadow:var(--el-box-shadow-light)}.el-menu .el-icon{flex-shrink:0}.el-menu-item{display:flex;align-items:center;height:var(--el-menu-item-height);line-height:var(--el-menu-item-height);font-size:var(--el-menu-item-font-size);color:var(--el-menu-text-color);padding:0 var(--el-menu-base-level-padding);list-style:none;cursor:pointer;position:relative;transition:border-color var(--el-transition-duration),background-color var(--el-transition-duration),color var(--el-transition-duration);box-sizing:border-box;white-space:nowrap}.el-menu-item *{vertical-align:bottom}.el-menu-item i{color:inherit}.el-menu-item:hover,.el-menu-item:focus{outline:none}.el-menu-item:hover{background-color:var(--el-menu-hover-bg-color)}.el-menu-item.is-disabled{opacity:.25;cursor:not-allowed;background:none!important}.el-menu-item [class^=el-icon]{margin-right:5px;width:var(--el-menu-icon-width);text-align:center;font-size:18px;vertical-align:middle}.el-menu-item.is-active{color:var(--el-menu-active-color)}.el-menu-item.is-active i{color:inherit}.el-menu-item .el-menu-tooltip__trigger{position:absolute;left:0;top:0;height:100%;width:100%;display:inline-flex;align-items:center;box-sizing:border-box;padding:0 var(--el-menu-base-level-padding)}.el-sub-menu{list-style:none;margin:0;padding-left:0}.el-sub-menu__title{display:flex;align-items:center;height:var(--el-menu-item-height);line-height:var(--el-menu-item-height);font-size:var(--el-menu-item-font-size);color:var(--el-menu-text-color);padding:0 var(--el-menu-base-level-padding);list-style:none;cursor:pointer;position:relative;transition:border-color var(--el-transition-duration),background-color var(--el-transition-duration),color var(--el-transition-duration);box-sizing:border-box;white-space:nowrap;padding-right:calc(var(--el-menu-base-level-padding) + var(--el-menu-icon-width))}.el-sub-menu__title *{vertical-align:bottom}.el-sub-menu__title i{color:inherit}.el-sub-menu__title:hover,.el-sub-menu__title:focus{outline:none}.el-sub-menu__title.is-disabled{opacity:.25;cursor:not-allowed;background:none!important}.el-sub-menu__title:hover{background-color:var(--el-menu-hover-bg-color)}.el-sub-menu .el-menu{border:none}.el-sub-menu .el-menu-item{height:var(--el-menu-sub-item-height);line-height:var(--el-menu-sub-item-height)}.el-sub-menu__hide-arrow .el-sub-menu__icon-arrow{display:none!important}.el-sub-menu.is-active .el-sub-menu__title{border-bottom-color:var(--el-menu-active-color)}.el-sub-menu.is-disabled .el-sub-menu__title,.el-sub-menu.is-disabled .el-menu-item{opacity:.25;cursor:not-allowed;background:none!important}.el-sub-menu .el-icon{vertical-align:middle;margin-right:5px;width:var(--el-menu-icon-width);text-align:center;font-size:18px}.el-sub-menu .el-icon.el-sub-menu__icon-more{margin-right:0!important}.el-sub-menu .el-sub-menu__icon-arrow{position:absolute;top:50%;right:var(--el-menu-base-level-padding);margin-top:-6px;transition:transform var(--el-transition-duration);font-size:12px;margin-right:0;width:inherit}.el-menu-item-group>ul{padding:0}.el-menu-item-group__title{padding:7px 0 7px var(--el-menu-base-level-padding);line-height:normal;font-size:12px;color:var(--el-text-color-secondary)}.horizontal-collapse-transition .el-sub-menu__title .el-sub-menu__icon-arrow{transition:var(--el-transition-duration-fast);opacity:0}.el-sub-menu__title:hover,.el-menu-item:hover{background:transparent}.el-scrollbar .el-scrollbar__view{height:100%}.menu-info .menu-contorl{line-height:52px;font-size:20px;display:table-cell;vertical-align:middle}\n",document.head.appendChild(n);var k={name:"Aside"};e("default",Object.assign(k,{setup:function(e){var n=l(),k=t(),j=o(),T=i(),Y=a({}),B=function(){switch(j.sideMode){case"#fff":Y.value={background:"#fff",activeBackground:"var(--el-color-primary)",activeText:"#fff",normalText:"#333",hoverBackground:"rgba(64, 158, 255, 0.08)",hoverText:"#333"};break;case"#191a23":Y.value={background:"#191a23",activeBackground:"var(--el-color-primary)",activeText:"#fff",normalText:"#fff",hoverBackground:"rgba(64, 158, 255, 0.08)",hoverText:"#fff"}}};B();var M=a("");r((function(){return n}),(function(){M.value=n.meta.activeName||n.name}),{deep:!0}),r((function(){return j.sideMode}),(function(){B()}));var E=a(!1);M.value=n.meta.activeName||n.name,document.body.clientWidth<1e3&&(E.value=!E.value),m.on("collapse",(function(e){E.value=e})),u((function(){m.off("collapse")}));var q=function(e,l,t,o){var i,a,r={},u={};(null===(i=T.routeMap[e])||void 0===i?void 0:i.parameters)&&(null===(a=T.routeMap[e])||void 0===a||a.parameters.forEach((function(e){"query"===e.type?r[e.key]=e.value:u[e.key]=e.value}))),e!==n.name&&(e.indexOf("http://")>-1||e.indexOf("https://")>-1?window.open(e):k.push({name:e,query:r,params:u}))};return function(e,n){var l=w,t=y;return c(),s("div",{style:_({background:g(j).sideMode})},[d(t,{style:{height:"calc(100vh - 60px)"}},{default:v((function(){return[d(p,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:v((function(){return[d(l,{collapse:E.value,"collapse-transition":!1,"default-active":M.value,"background-color":Y.value.background,"active-text-color":Y.value.active,class:"el-menu-vertical","unique-opened":"",onSelect:q},{default:v((function(){return[(c(!0),s(b,null,h(g(T).asyncRouters[0].children,(function(e){return c(),s(b,null,[e.hidden?x("",!0):(c(),f(z,{key:e.name,"is-collapse":E.value,"router-info":e,theme:Y.value},null,8,["is-collapse","router-info","theme"]))],64)})),256))]})),_:1},8,["collapse","default-active","background-color","active-text-color"])]})),_:1})]})),_:1})],4)}}}))}}}));
