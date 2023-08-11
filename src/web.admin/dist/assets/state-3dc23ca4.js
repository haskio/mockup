/*! 
 Build based on gin-vue-admin 
 Time : 1691228829000 */
import{r as t,R as e,o as a,c as l,d as n,w as u,h as s,b as o,g as d,t as r,e as p,J as c,K as f}from"./index-705282a4.js";/* empty css                 */import{E as _}from"./card-a4681bf9.js";import{E as i,a as v}from"./col-10b70383.js";import{g}from"./system-989a4ad0.js";import{E as m}from"./index-14811586.js";const x=o("div",null,"Runtime",-1),C=o("div",null,"Disk",-1),y=o("div",null,"CPU",-1),b=o("div",null,"Ram",-1),k={name:"State"},h=Object.assign(k,{setup(k){const h=t(null),M=t({}),B=t([{color:"#5cb87a",percentage:20},{color:"#e6a23c",percentage:40},{color:"#f56c6c",percentage:80}]),j=async()=>{const{data:t}=await g();M.value=t.server};return j(),h.value=setInterval((()=>{j()}),1e4),e((()=>{clearInterval(h.value),h.value=null})),(t,e)=>{const g=i,k=v,h=_,j=m;return a(),l("div",null,[n(k,{gutter:15,class:"system_state"},{default:u((()=>[n(g,{span:12},{default:u((()=>[M.value.os?(a(),s(h,{key:0,class:"card_item"},{header:u((()=>[x])),default:u((()=>[o("div",null,[n(k,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("os:")])),_:1}),n(g,{span:12,textContent:r(M.value.os.goos)},null,8,["textContent"])])),_:1}),n(k,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("cpu nums:")])),_:1}),n(g,{span:12,textContent:r(M.value.os.numCpu)},null,8,["textContent"])])),_:1}),n(k,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("compiler:")])),_:1}),n(g,{span:12,textContent:r(M.value.os.compiler)},null,8,["textContent"])])),_:1}),n(k,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("go version:")])),_:1}),n(g,{span:12,textContent:r(M.value.os.goVersion)},null,8,["textContent"])])),_:1}),n(k,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("goroutine nums:")])),_:1}),n(g,{span:12,textContent:r(M.value.os.numGoroutine)},null,8,["textContent"])])),_:1})])])),_:1})):p("",!0)])),_:1}),n(g,{span:12},{default:u((()=>[M.value.disk?(a(),s(h,{key:0,class:"card_item"},{header:u((()=>[C])),default:u((()=>[o("div",null,[n(k,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[n(k,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("total (MB)")])),_:1}),n(g,{span:12,textContent:r(M.value.disk.totalMb)},null,8,["textContent"])])),_:1}),n(k,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("used (MB)")])),_:1}),n(g,{span:12,textContent:r(M.value.disk.usedMb)},null,8,["textContent"])])),_:1}),n(k,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("total (GB)")])),_:1}),n(g,{span:12,textContent:r(M.value.disk.totalGb)},null,8,["textContent"])])),_:1}),n(k,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("used (GB)")])),_:1}),n(g,{span:12,textContent:r(M.value.disk.usedGb)},null,8,["textContent"])])),_:1})])),_:1}),n(g,{span:12},{default:u((()=>[n(j,{type:"dashboard",percentage:M.value.disk.usedPercent,color:B.value},null,8,["percentage","color"])])),_:1})])),_:1})])])),_:1})):p("",!0)])),_:1})])),_:1}),n(k,{gutter:15,class:"system_state"},{default:u((()=>[n(g,{span:12},{default:u((()=>[M.value.cpu?(a(),s(h,{key:0,class:"card_item","body-style":{height:"180px","overflow-y":"scroll"}},{header:u((()=>[y])),default:u((()=>[o("div",null,[n(k,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("physical number of cores:")])),_:1}),n(g,{span:12,textContent:r(M.value.cpu.cores)},null,8,["textContent"])])),_:1}),(a(!0),l(c,null,f(M.value.cpu.cpus,((t,e)=>(a(),s(k,{key:e,gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("core "+r(e)+":",1)])),_:2},1024),n(g,{span:12},{default:u((()=>[n(j,{type:"line",percentage:+t.toFixed(0),color:B.value},null,8,["percentage","color"])])),_:2},1024)])),_:2},1024)))),128))])])),_:1})):p("",!0)])),_:1}),n(g,{span:12},{default:u((()=>[M.value.ram?(a(),s(h,{key:0,class:"card_item"},{header:u((()=>[b])),default:u((()=>[o("div",null,[n(k,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[n(k,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("total (MB)")])),_:1}),n(g,{span:12,textContent:r(M.value.ram.totalMb)},null,8,["textContent"])])),_:1}),n(k,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("used (MB)")])),_:1}),n(g,{span:12,textContent:r(M.value.ram.usedMb)},null,8,["textContent"])])),_:1}),n(k,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("total (GB)")])),_:1}),n(g,{span:12,textContent:r(M.value.ram.totalMb/1024)},null,8,["textContent"])])),_:1}),n(k,{gutter:10},{default:u((()=>[n(g,{span:12},{default:u((()=>[d("used (GB)")])),_:1}),n(g,{span:12,textContent:r((M.value.ram.usedMb/1024).toFixed(2))},null,8,["textContent"])])),_:1})])),_:1}),n(g,{span:12},{default:u((()=>[n(j,{type:"dashboard",percentage:M.value.ram.usedPercent,color:B.value},null,8,["percentage","color"])])),_:1})])),_:1})])])),_:1})):p("",!0)])),_:1})])),_:1})])}}});export{h as default};
