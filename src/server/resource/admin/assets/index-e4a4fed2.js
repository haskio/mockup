/*! 
 Build based on gin-vue-admin 
 Time : 1691990628000 */
import{u as a,r as t,o as e,c as i,b as n,d as o,w as l,g as s,t as r,A as p,h as c,$ as d,j as u,E as m}from"./index-55b51a59.js";import{E as f}from"./pagination-ac61a556.js";/* empty css              */import"./tag-4b0d6238.js";import"./select-fcf2e2fa.js";import"./scrollbar-9d29af78.js";/* empty css               */import{E as g,a as y}from"./table-column-a5359882.js";import"./checkbox-665ffa55.js";/* empty css                *//* empty css               */import{f as b,h as j,r as w}from"./autoCode-2b3ff15e.js";import{f as v}from"./format-3e7529c4.js";import{_ as h}from"./_plugin-vue_export-helper-1b428a4d.js";import{E as C}from"./index-78c734bf.js";import"./isEqual-201a2fd8.js";import"./_Uint8Array-c958d774.js";import"./index-a9b8d526.js";import"./strings-2efbda10.js";import"./_initCloneObject-11c71fb8.js";import"./date-225eaf4f.js";import"./dictionary-b1774f74.js";import"./sysDictionary-f8e62231.js";const _={class:"gva-table-box"},k={class:"gva-btn-list"},x={class:"gva-pagination"},T={name:"AutoCodeAdmin"},B=h(Object.assign(T,{setup(h){const T=a(),B=t(1),z=t(0),N=t(10),D=t([]),E=a=>{N.value=a,A()},I=a=>{B.value=a,A()},A=async()=>{const a=await b({page:B.value,pageSize:N.value});0===a.code&&(D.value=a.data.list,z.value=a.data.total,B.value=a.data.page,N.value=a.data.pageSize)};A();const S=async(a,t)=>{t?d.confirm("此操作将删除自动创建的文件和api（会删除表！！！）, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{d.confirm("此操作将删除自动创建的文件和api（会删除表！！！）, 请继续确认！！！","会删除表",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{d.confirm("此操作将删除自动创建的文件和api（会删除表！！！）, 请继续确认！！！","会删除表",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await w({id:Number(a.ID),deleteTable:t})).code&&(u.success("回滚成功"),A())}))}))})):d.confirm("此操作将删除自动创建的文件和api, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await w({id:Number(a.ID),deleteTable:t})).code&&(u.success("回滚成功"),A())}))},q=a=>{a?T.push({name:"autoCodeEdit",params:{id:a.ID}}):T.push({name:"autoCode"})};return(a,t)=>{const b=m,w=g,h=C,T=y,O=f;return e(),i("div",null,[n("div",_,[n("div",k,[o(b,{type:"primary",icon:"plus",onClick:t[0]||(t[0]=a=>q(null))},{default:l((()=>[s("新增")])),_:1})]),o(T,{data:D.value},{default:l((()=>[o(w,{type:"selection",width:"55"}),o(w,{align:"left",label:"id",width:"60",prop:"ID"}),o(w,{align:"left",label:"日期",width:"180"},{default:l((a=>[s(r(p(v)(a.row.CreatedAt)),1)])),_:1}),o(w,{align:"left",label:"结构体名","min-width":"150",prop:"structName"}),o(w,{align:"left",label:"结构体描述","min-width":"150",prop:"structCNName"}),o(w,{align:"left",label:"表名称","min-width":"150",prop:"tableName"}),o(w,{align:"left",label:"回滚标记","min-width":"150",prop:"flag"},{default:l((a=>[a.row.flag?(e(),c(h,{key:0,type:"danger",effect:"dark"},{default:l((()=>[s(" 已回滚 ")])),_:1})):(e(),c(h,{key:1,type:"success",effect:"dark"},{default:l((()=>[s(" 未回滚 ")])),_:1}))])),_:1}),o(w,{align:"left",label:"操作","min-width":"240"},{default:l((a=>[n("div",null,[o(b,{type:"primary",link:"",disabled:1===a.row.flag,onClick:t=>S(a.row,!0)},{default:l((()=>[s("回滚(删表)")])),_:2},1032,["disabled","onClick"]),o(b,{type:"primary",link:"",disabled:1===a.row.flag,onClick:t=>S(a.row,!1)},{default:l((()=>[s("回滚(不删表)")])),_:2},1032,["disabled","onClick"]),o(b,{type:"primary",link:"",onClick:t=>q(a.row)},{default:l((()=>[s("复用")])),_:2},1032,["onClick"]),o(b,{type:"primary",link:"",onClick:t=>(async a=>{d.confirm("此操作将删除本历史, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await j({id:Number(a.ID)})).code&&(u.success("删除成功"),A())}))})(a.row)},{default:l((()=>[s("删除")])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"]),n("div",x,[o(O,{"current-page":B.value,"page-size":N.value,"page-sizes":[10,30,50,100],total:z.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:I,onSizeChange:E},null,8,["current-page","page-size","total"])])])])}}}),[["__scopeId","data-v-80a1aa2e"]]);export{B as default};
