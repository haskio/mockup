/*! 
 Build based on gin-vue-admin 
 Time : 1691990784000 */
import{C as a}from"./github-2f265950.js";import{f as s}from"./date-225eaf4f.js";/* empty css                                                                       */import{_ as e}from"./_plugin-vue_export-helper-1b428a4d.js";import{r as t,o,c as l,b as m,J as d,K as i,n as r,t as c,q as f,v as n}from"./index-bd3695e7.js";const p={class:"commit-table"},v=(a=>(f("data-v-8dfd54aa"),a=a(),n(),a))((()=>m("div",{class:"commit-table-title"}," 更新日志 ",-1))),u={class:"log"},_={class:"flex-1 flex key-box"},b={class:"flex-5 flex message"},g={class:"flex-3 flex form"},h={name:"DashboardTable"},x=e(Object.assign(h,{setup(e){const f=t(!0),n=t([]);return a(0).then((({data:a})=>{f.value=!1,a.forEach(((a,e)=>{a.commit.message&&e<10&&n.value.push({from:s(a.commit.author.date,"yyyy-MM-dd"),title:a.commit.author.name,showDayAndMonth:!0,message:a.commit.message})}))})),(a,s)=>(o(),l("div",p,[v,m("div",u,[(o(!0),l(d,null,i(n.value,((a,s)=>(o(),l("div",{key:s,class:"log-item"},[m("div",_,[m("span",{class:r(["key",s<3&&"top"])},c(s+1),3)]),m("div",b,c(a.message),1),m("div",g,c(a.from),1)])))),128))])]))}}),[["__scopeId","data-v-8dfd54aa"]]);export{x as default};
