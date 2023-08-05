/*! 
 Build based on gin-vue-admin 
 Time : 1691228829000 */
import{s as e,a as l,r as a,o as u,c as o,d,w as t,g as m,J as s,e as n,K as i,h as V,b as p,j as r,k as v,E as c}from"./index-705282a4.js";import{a as b,E as f}from"./form-item-26e276c5.js";import{E as _,a as y}from"./collapse-item-676305d2.js";import{E as U}from"./switch-d08f9663.js";/* empty css               *//* empty css                *//* empty css               */import{E as q}from"./input-number-dd03a426.js";/* empty css              */import{E as g}from"./checkbox-59197a78.js";import"./tag-03de541d.js";import{E as h,a as w}from"./select-f422150a.js";import"./scrollbar-b8aea7aa.js";import{a as k,s as x}from"./system-989a4ad0.js";import{E as j}from"./index-586999c8.js";import"./_baseClone-39b1660f.js";import"./_Uint8Array-24a3c252.js";import"./_initCloneObject-acf8bf06.js";import"./index-1e0f49f6.js";import"./rand-099990c4.js";import"./index-6dfe0bc7.js";import"./isEqual-221d581a.js";import"./index-c7c2266c.js";import"./strings-5cc13f5a.js";const z={class:"system"},S=p("h2",null,"本地文件配置",-1),M=p("h2",null,"qiniu上传配置",-1),C=p("h2",null,"腾讯云COS上传配置",-1),E=p("h2",null,"阿里云OSS上传配置",-1),O=p("h2",null,"华为云Obs上传配置",-1),K={class:"gva-btn-list"},W={name:"Config"},I=Object.assign(W,{setup(W){const I=l([]),R=a({system:{"iplimit-count":0,"iplimit-time":0},jwt:{},mysql:{},pgsql:{},excel:{},autocode:{},redis:{},qiniu:{},"tencent-cos":{},"aliyun-oss":{},"hua-wei-obs":{},captcha:{},zap:{},local:{},email:{},timer:{detail:{}}}),T=async()=>{const e=await k();0===e.code&&(R.value=e.data.config)};T();const A=()=>{},D=async()=>{0===(await x({config:R.value})).code&&(r({type:"success",message:"配置文件设置成功"}),await T())},N=async()=>{var l;0===(await e({url:"/email/emailTest",method:"post",data:l})).code?(r({type:"success",message:"邮件发送成功"}),await T()):r({type:"error",message:"邮件发送失败"})};return(e,l)=>{const a=h,r=w,k=b,x=v,W=g,T=q,B=j,F=_,H=c,Z=U,G=y,J=f;return u(),o("div",z,[d(J,{ref:"form",model:R.value,"label-width":"240px"},{default:t((()=>[d(G,{modelValue:I,"onUpdate:modelValue":l[97]||(l[97]=e=>I=e)},{default:t((()=>[d(F,{title:"系统配置",name:"1"},{default:t((()=>[d(k,{label:"环境值"},{default:t((()=>[d(r,{modelValue:R.value.system.env,"onUpdate:modelValue":l[0]||(l[0]=e=>R.value.system.env=e),style:{width:"100%"}},{default:t((()=>[d(a,{value:"public"}),d(a,{value:"develop"})])),_:1},8,["modelValue"])])),_:1}),d(k,{label:"端口值"},{default:t((()=>[d(x,{modelValue:R.value.system.addr,"onUpdate:modelValue":l[1]||(l[1]=e=>R.value.system.addr=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"数据库类型"},{default:t((()=>[d(r,{modelValue:R.value.system["db-type"],"onUpdate:modelValue":l[2]||(l[2]=e=>R.value.system["db-type"]=e),style:{width:"100%"}},{default:t((()=>[d(a,{value:"mysql"}),d(a,{value:"pgsql"})])),_:1},8,["modelValue"])])),_:1}),d(k,{label:"Oss类型"},{default:t((()=>[d(r,{modelValue:R.value.system["oss-type"],"onUpdate:modelValue":l[3]||(l[3]=e=>R.value.system["oss-type"]=e),style:{width:"100%"}},{default:t((()=>[d(a,{value:"local"}),d(a,{value:"qiniu"}),d(a,{value:"tencent-cos"}),d(a,{value:"aliyun-oss"}),d(a,{value:"huawei-obs"})])),_:1},8,["modelValue"])])),_:1}),d(k,{label:"多点登录拦截"},{default:t((()=>[d(W,{modelValue:R.value.system["use-multipoint"],"onUpdate:modelValue":l[4]||(l[4]=e=>R.value.system["use-multipoint"]=e)},{default:t((()=>[m("开启")])),_:1},8,["modelValue"])])),_:1}),d(k,{label:"开启redis"},{default:t((()=>[d(W,{modelValue:R.value.system["use-redis"],"onUpdate:modelValue":l[5]||(l[5]=e=>R.value.system["use-redis"]=e)},{default:t((()=>[m("开启")])),_:1},8,["modelValue"])])),_:1}),d(k,{label:"限流次数"},{default:t((()=>[d(T,{modelValue:R.value.system["iplimit-count"],"onUpdate:modelValue":l[6]||(l[6]=e=>R.value.system["iplimit-count"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"限流时间"},{default:t((()=>[d(T,{modelValue:R.value.system["iplimit-time"],"onUpdate:modelValue":l[7]||(l[7]=e=>R.value.system["iplimit-time"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(B,{content:"请修改完成后，注意一并修改前端env环境下的VITE_BASE_PATH",placement:"top-start"},{default:t((()=>[d(k,{label:"全局路由前缀"},{default:t((()=>[d(x,{modelValue:R.value.system["router-prefix"],"onUpdate:modelValue":l[8]||(l[8]=e=>R.value.system["router-prefix"]=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(F,{title:"jwt签名",name:"2"},{default:t((()=>[d(k,{label:"jwt签名"},{default:t((()=>[d(x,{modelValue:R.value.jwt["signing-key"],"onUpdate:modelValue":l[9]||(l[9]=e=>R.value.jwt["signing-key"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"有效期"},{default:t((()=>[d(x,{modelValue:R.value.jwt["expires-time"],"onUpdate:modelValue":l[10]||(l[10]=e=>R.value.jwt["expires-time"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"缓冲期"},{default:t((()=>[d(x,{modelValue:R.value.jwt["buffer-time"],"onUpdate:modelValue":l[11]||(l[11]=e=>R.value.jwt["buffer-time"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"签发者"},{default:t((()=>[d(x,{modelValue:R.value.jwt.issuer,"onUpdate:modelValue":l[12]||(l[12]=e=>R.value.jwt.issuer=e)},null,8,["modelValue"])])),_:1})])),_:1}),d(F,{title:"Zap日志配置",name:"3"},{default:t((()=>[d(k,{label:"级别"},{default:t((()=>[d(x,{modelValue:R.value.zap.level,"onUpdate:modelValue":l[13]||(l[13]=e=>R.value.zap.level=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"输出"},{default:t((()=>[d(x,{modelValue:R.value.zap.format,"onUpdate:modelValue":l[14]||(l[14]=e=>R.value.zap.format=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"日志前缀"},{default:t((()=>[d(x,{modelValue:R.value.zap.prefix,"onUpdate:modelValue":l[15]||(l[15]=e=>R.value.zap.prefix=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"日志文件夹"},{default:t((()=>[d(x,{modelValue:R.value.zap.director,"onUpdate:modelValue":l[16]||(l[16]=e=>R.value.zap.director=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"编码级"},{default:t((()=>[d(x,{modelValue:R.value.zap["encode-level"],"onUpdate:modelValue":l[17]||(l[17]=e=>R.value.zap["encode-level"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"栈名"},{default:t((()=>[d(x,{modelValue:R.value.zap["stacktrace-key"],"onUpdate:modelValue":l[18]||(l[18]=e=>R.value.zap["stacktrace-key"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"日志留存时间(默认以天为单位)"},{default:t((()=>[d(x,{modelValue:R.value.zap["max-age"],"onUpdate:modelValue":l[19]||(l[19]=e=>R.value.zap["max-age"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"显示行"},{default:t((()=>[d(W,{modelValue:R.value.zap["show-line"],"onUpdate:modelValue":l[20]||(l[20]=e=>R.value.zap["show-line"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"输出控制台"},{default:t((()=>[d(W,{modelValue:R.value.zap["log-in-console"],"onUpdate:modelValue":l[21]||(l[21]=e=>R.value.zap["log-in-console"]=e)},null,8,["modelValue"])])),_:1})])),_:1}),d(F,{title:"Redis admin数据库配置",name:"4"},{default:t((()=>[d(k,{label:"库"},{default:t((()=>[d(x,{modelValue:R.value.redis.db,"onUpdate:modelValue":l[22]||(l[22]=e=>R.value.redis.db=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"地址"},{default:t((()=>[d(x,{modelValue:R.value.redis.addr,"onUpdate:modelValue":l[23]||(l[23]=e=>R.value.redis.addr=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"密码"},{default:t((()=>[d(x,{modelValue:R.value.redis.password,"onUpdate:modelValue":l[24]||(l[24]=e=>R.value.redis.password=e)},null,8,["modelValue"])])),_:1})])),_:1}),d(F,{title:"邮箱配置",name:"5"},{default:t((()=>[d(k,{label:"接收者邮箱"},{default:t((()=>[d(x,{modelValue:R.value.email.to,"onUpdate:modelValue":l[25]||(l[25]=e=>R.value.email.to=e),placeholder:"可多个，以逗号分隔"},null,8,["modelValue"])])),_:1}),d(k,{label:"端口"},{default:t((()=>[d(x,{modelValue:R.value.email.port,"onUpdate:modelValue":l[26]||(l[26]=e=>R.value.email.port=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"发送者邮箱"},{default:t((()=>[d(x,{modelValue:R.value.email.from,"onUpdate:modelValue":l[27]||(l[27]=e=>R.value.email.from=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"host"},{default:t((()=>[d(x,{modelValue:R.value.email.host,"onUpdate:modelValue":l[28]||(l[28]=e=>R.value.email.host=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"是否为ssl"},{default:t((()=>[d(W,{modelValue:R.value.email["is-ssl"],"onUpdate:modelValue":l[29]||(l[29]=e=>R.value.email["is-ssl"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"secret"},{default:t((()=>[d(x,{modelValue:R.value.email.secret,"onUpdate:modelValue":l[30]||(l[30]=e=>R.value.email.secret=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"测试邮件"},{default:t((()=>[d(H,{onClick:N},{default:t((()=>[m("测试邮件")])),_:1})])),_:1})])),_:1}),d(F,{title:"验证码配置",name:"7"},{default:t((()=>[d(k,{label:"字符长度"},{default:t((()=>[d(x,{modelValue:R.value.captcha["key-long"],"onUpdate:modelValue":l[31]||(l[31]=e=>R.value.captcha["key-long"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"平台宽度"},{default:t((()=>[d(x,{modelValue:R.value.captcha["img-width"],"onUpdate:modelValue":l[32]||(l[32]=e=>R.value.captcha["img-width"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"图片高度"},{default:t((()=>[d(x,{modelValue:R.value.captcha["img-height"],"onUpdate:modelValue":l[33]||(l[33]=e=>R.value.captcha["img-height"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1})])),_:1}),d(F,{title:"数据库配置",name:"9"},{default:t((()=>["mysql"===R.value.system["db-type"]?(u(),o(s,{key:0},[d(k,{label:"用户名"},{default:t((()=>[d(x,{modelValue:R.value.mysql.username,"onUpdate:modelValue":l[34]||(l[34]=e=>R.value.mysql.username=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"密码"},{default:t((()=>[d(x,{modelValue:R.value.mysql.password,"onUpdate:modelValue":l[35]||(l[35]=e=>R.value.mysql.password=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"地址"},{default:t((()=>[d(x,{modelValue:R.value.mysql.path,"onUpdate:modelValue":l[36]||(l[36]=e=>R.value.mysql.path=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"数据库"},{default:t((()=>[d(x,{modelValue:R.value.mysql["db-name"],"onUpdate:modelValue":l[37]||(l[37]=e=>R.value.mysql["db-name"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"前缀"},{default:t((()=>[d(x,{modelValue:R.value.mysql.refix,"onUpdate:modelValue":l[38]||(l[38]=e=>R.value.mysql.refix=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"复数表"},{default:t((()=>[d(Z,{modelValue:R.value.mysql.singular,"onUpdate:modelValue":l[39]||(l[39]=e=>R.value.mysql.singular=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"引擎"},{default:t((()=>[d(x,{modelValue:R.value.mysql.engine,"onUpdate:modelValue":l[40]||(l[40]=e=>R.value.mysql.engine=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"maxIdleConns"},{default:t((()=>[d(x,{modelValue:R.value.mysql["max-idle-conns"],"onUpdate:modelValue":l[41]||(l[41]=e=>R.value.mysql["max-idle-conns"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"maxOpenConns"},{default:t((()=>[d(x,{modelValue:R.value.mysql["max-open-conns"],"onUpdate:modelValue":l[42]||(l[42]=e=>R.value.mysql["max-open-conns"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"写入日志"},{default:t((()=>[d(W,{modelValue:R.value.mysql["log-zap"],"onUpdate:modelValue":l[43]||(l[43]=e=>R.value.mysql["log-zap"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"日志模式"},{default:t((()=>[d(x,{modelValue:R.value.mysql["log-mode"],"onUpdate:modelValue":l[44]||(l[44]=e=>R.value.mysql["log-mode"]=e)},null,8,["modelValue"])])),_:1})],64)):n("",!0),"pgsql"===R.value.system["db-type"]?(u(),o(s,{key:1},[d(k,{label:"用户名"},{default:t((()=>[d(x,{modelValue:R.value.pgsql.username,"onUpdate:modelValue":l[45]||(l[45]=e=>R.value.pgsql.username=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"密码"},{default:t((()=>[d(x,{modelValue:R.value.pgsql.password,"onUpdate:modelValue":l[46]||(l[46]=e=>R.value.pgsql.password=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"地址"},{default:t((()=>[d(x,{modelValue:R.value.pgsql.path,"onUpdate:modelValue":l[47]||(l[47]=e=>R.value.pgsql.path=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"数据库"},{default:t((()=>[d(x,{modelValue:R.value.pgsql.dbname,"onUpdate:modelValue":l[48]||(l[48]=e=>R.value.pgsql.dbname=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"前缀"},{default:t((()=>[d(x,{modelValue:R.value.pgsql.refix,"onUpdate:modelValue":l[49]||(l[49]=e=>R.value.pgsql.refix=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"复数表"},{default:t((()=>[d(Z,{modelValue:R.value.pgsql.singular,"onUpdate:modelValue":l[50]||(l[50]=e=>R.value.pgsql.singular=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"引擎"},{default:t((()=>[d(x,{modelValue:R.value.pgsql.engine,"onUpdate:modelValue":l[51]||(l[51]=e=>R.value.pgsql.engine=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"maxIdleConns"},{default:t((()=>[d(x,{modelValue:R.value.pgsql["max-idle-conns"],"onUpdate:modelValue":l[52]||(l[52]=e=>R.value.pgsql["max-idle-conns"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"maxOpenConns"},{default:t((()=>[d(x,{modelValue:R.value.pgsql["max-open-conns"],"onUpdate:modelValue":l[53]||(l[53]=e=>R.value.pgsql["max-open-conns"]=e),modelModifiers:{number:!0}},null,8,["modelValue"])])),_:1}),d(k,{label:"写入日志"},{default:t((()=>[d(W,{modelValue:R.value.pgsql["log-zap"],"onUpdate:modelValue":l[54]||(l[54]=e=>R.value.pgsql["log-zap"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"日志模式"},{default:t((()=>[d(x,{modelValue:R.value.pgsql["log-mode"],"onUpdate:modelValue":l[55]||(l[55]=e=>R.value.pgsql["log-mode"]=e)},null,8,["modelValue"])])),_:1})],64)):n("",!0)])),_:1}),d(F,{title:"oss配置",name:"10"},{default:t((()=>["local"===R.value.system["oss-type"]?(u(),o(s,{key:0},[S,d(k,{label:"本地文件访问路径"},{default:t((()=>[d(x,{modelValue:R.value.local.path,"onUpdate:modelValue":l[56]||(l[56]=e=>R.value.local.path=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"本地文件存储路径"},{default:t((()=>[d(x,{modelValue:R.value.local["store-path"],"onUpdate:modelValue":l[57]||(l[57]=e=>R.value.local["store-path"]=e)},null,8,["modelValue"])])),_:1})],64)):n("",!0),"qiniu"===R.value.system["oss-type"]?(u(),o(s,{key:1},[M,d(k,{label:"存储区域"},{default:t((()=>[d(x,{modelValue:R.value.qiniu.zone,"onUpdate:modelValue":l[58]||(l[58]=e=>R.value.qiniu.zone=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"空间名称"},{default:t((()=>[d(x,{modelValue:R.value.qiniu.bucket,"onUpdate:modelValue":l[59]||(l[59]=e=>R.value.qiniu.bucket=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"CDN加速域名"},{default:t((()=>[d(x,{modelValue:R.value.qiniu["img-path"],"onUpdate:modelValue":l[60]||(l[60]=e=>R.value.qiniu["img-path"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"是否使用https"},{default:t((()=>[d(W,{modelValue:R.value.qiniu["use-https"],"onUpdate:modelValue":l[61]||(l[61]=e=>R.value.qiniu["use-https"]=e)},{default:t((()=>[m("开启")])),_:1},8,["modelValue"])])),_:1}),d(k,{label:"accessKey"},{default:t((()=>[d(x,{modelValue:R.value.qiniu["access-key"],"onUpdate:modelValue":l[62]||(l[62]=e=>R.value.qiniu["access-key"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"secretKey"},{default:t((()=>[d(x,{modelValue:R.value.qiniu["secret-key"],"onUpdate:modelValue":l[63]||(l[63]=e=>R.value.qiniu["secret-key"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"上传是否使用CDN上传加速"},{default:t((()=>[d(W,{modelValue:R.value.qiniu["use-cdn-domains"],"onUpdate:modelValue":l[64]||(l[64]=e=>R.value.qiniu["use-cdn-domains"]=e)},{default:t((()=>[m("开启")])),_:1},8,["modelValue"])])),_:1})],64)):n("",!0),"tencent-cos"===R.value.system["oss-type"]?(u(),o(s,{key:2},[C,d(k,{label:"存储桶名称"},{default:t((()=>[d(x,{modelValue:R.value["tencent-cos"].bucket,"onUpdate:modelValue":l[65]||(l[65]=e=>R.value["tencent-cos"].bucket=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"所属地域"},{default:t((()=>[d(x,{modelValue:R.value["tencent-cos"].region,"onUpdate:modelValue":l[66]||(l[66]=e=>R.value["tencent-cos"].region=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"secretID"},{default:t((()=>[d(x,{modelValue:R.value["tencent-cos"]["secret-id"],"onUpdate:modelValue":l[67]||(l[67]=e=>R.value["tencent-cos"]["secret-id"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"secretKey"},{default:t((()=>[d(x,{modelValue:R.value["tencent-cos"]["secret-key"],"onUpdate:modelValue":l[68]||(l[68]=e=>R.value["tencent-cos"]["secret-key"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"路径前缀"},{default:t((()=>[d(x,{modelValue:R.value["tencent-cos"]["path-prefix"],"onUpdate:modelValue":l[69]||(l[69]=e=>R.value["tencent-cos"]["path-prefix"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"访问域名"},{default:t((()=>[d(x,{modelValue:R.value["tencent-cos"]["base-url"],"onUpdate:modelValue":l[70]||(l[70]=e=>R.value["tencent-cos"]["base-url"]=e)},null,8,["modelValue"])])),_:1})],64)):n("",!0),"aliyun-oss"===R.value.system["oss-type"]?(u(),o(s,{key:3},[E,d(k,{label:"区域"},{default:t((()=>[d(x,{modelValue:R.value["aliyun-oss"].endpoint,"onUpdate:modelValue":l[71]||(l[71]=e=>R.value["aliyun-oss"].endpoint=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"accessKeyId"},{default:t((()=>[d(x,{modelValue:R.value["aliyun-oss"]["access-key-id"],"onUpdate:modelValue":l[72]||(l[72]=e=>R.value["aliyun-oss"]["access-key-id"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"accessKeySecret"},{default:t((()=>[d(x,{modelValue:R.value["aliyun-oss"]["access-key-secret"],"onUpdate:modelValue":l[73]||(l[73]=e=>R.value["aliyun-oss"]["access-key-secret"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"存储桶名称"},{default:t((()=>[d(x,{modelValue:R.value["aliyun-oss"]["bucket-name"],"onUpdate:modelValue":l[74]||(l[74]=e=>R.value["aliyun-oss"]["bucket-name"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"访问域名"},{default:t((()=>[d(x,{modelValue:R.value["aliyun-oss"]["bucket-url"],"onUpdate:modelValue":l[75]||(l[75]=e=>R.value["aliyun-oss"]["bucket-url"]=e)},null,8,["modelValue"])])),_:1})],64)):n("",!0),"huawei-obs"===R.value.system["oss-type"]?(u(),o(s,{key:4},[O,d(k,{label:"路径"},{default:t((()=>[d(x,{modelValue:R.value["hua-wei-obs"].path,"onUpdate:modelValue":l[76]||(l[76]=e=>R.value["hua-wei-obs"].path=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"存储桶名称"},{default:t((()=>[d(x,{modelValue:R.value["hua-wei-obs"].bucket,"onUpdate:modelValue":l[77]||(l[77]=e=>R.value["hua-wei-obs"].bucket=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"区域"},{default:t((()=>[d(x,{modelValue:R.value["hua-wei-obs"].endpoint,"onUpdate:modelValue":l[78]||(l[78]=e=>R.value["hua-wei-obs"].endpoint=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"accessKey"},{default:t((()=>[d(x,{modelValue:R.value["hua-wei-obs"]["access-key"],"onUpdate:modelValue":l[79]||(l[79]=e=>R.value["hua-wei-obs"]["access-key"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"secretKey"},{default:t((()=>[d(x,{modelValue:R.value["hua-wei-obs"]["secret-key"],"onUpdate:modelValue":l[80]||(l[80]=e=>R.value["hua-wei-obs"]["secret-key"]=e)},null,8,["modelValue"])])),_:1})],64)):n("",!0)])),_:1}),d(F,{title:"Excel上传配置",name:"11"},{default:t((()=>[d(k,{label:"合成目标地址"},{default:t((()=>[d(x,{modelValue:R.value.excel.dir,"onUpdate:modelValue":l[81]||(l[81]=e=>R.value.excel.dir=e)},null,8,["modelValue"])])),_:1})])),_:1}),d(F,{title:"自动化代码配置",name:"12"},{default:t((()=>[d(k,{label:"是否自动重启(linux)"},{default:t((()=>[d(W,{modelValue:R.value.autocode["transfer-restart"],"onUpdate:modelValue":l[82]||(l[82]=e=>R.value.autocode["transfer-restart"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"root(项目根路径)"},{default:t((()=>[d(x,{modelValue:R.value.autocode.root,"onUpdate:modelValue":l[83]||(l[83]=e=>R.value.autocode.root=e),disabled:""},null,8,["modelValue"])])),_:1}),d(k,{label:"Server(后端代码地址)"},{default:t((()=>[d(x,{modelValue:R.value.autocode["transfer-restart"],"onUpdate:modelValue":l[84]||(l[84]=e=>R.value.autocode["transfer-restart"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"SApi(后端api文件夹地址)"},{default:t((()=>[d(x,{modelValue:R.value.autocode["server-api"],"onUpdate:modelValue":l[85]||(l[85]=e=>R.value.autocode["server-api"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"SInitialize(后端Initialize文件夹)"},{default:t((()=>[d(x,{modelValue:R.value.autocode["server-initialize"],"onUpdate:modelValue":l[86]||(l[86]=e=>R.value.autocode["server-initialize"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"SModel(后端Model文件地址)"},{default:t((()=>[d(x,{modelValue:R.value.autocode["server-model"],"onUpdate:modelValue":l[87]||(l[87]=e=>R.value.autocode["server-model"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"SRequest(后端Request文件夹地址)"},{default:t((()=>[d(x,{modelValue:R.value.autocode["server-request"],"onUpdate:modelValue":l[88]||(l[88]=e=>R.value.autocode["server-request"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"SRouter(后端Router文件夹地址)"},{default:t((()=>[d(x,{modelValue:R.value.autocode["server-router"],"onUpdate:modelValue":l[89]||(l[89]=e=>R.value.autocode["server-router"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"SService(后端Service文件夹地址)"},{default:t((()=>[d(x,{modelValue:R.value.autocode["server-service"],"onUpdate:modelValue":l[90]||(l[90]=e=>R.value.autocode["server-service"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"Web(前端文件夹地址)"},{default:t((()=>[d(x,{modelValue:R.value.autocode.web,"onUpdate:modelValue":l[91]||(l[91]=e=>R.value.autocode.web=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"WApi(后端WApi文件夹地址)"},{default:t((()=>[d(x,{modelValue:R.value.autocode["web-api"],"onUpdate:modelValue":l[92]||(l[92]=e=>R.value.autocode["web-api"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"WForm(后端WForm文件夹地址)"},{default:t((()=>[d(x,{modelValue:R.value.autocode["web-form"],"onUpdate:modelValue":l[93]||(l[93]=e=>R.value.autocode["web-form"]=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"WTable(后端WTable文件夹地址)"},{default:t((()=>[d(x,{modelValue:R.value.autocode["web-table"],"onUpdate:modelValue":l[94]||(l[94]=e=>R.value.autocode["web-table"]=e)},null,8,["modelValue"])])),_:1})])),_:1}),d(F,{title:"Timer(定时任务)",name:"13"},{default:t((()=>[d(k,{label:"Start（是否启用）"},{default:t((()=>[d(W,{modelValue:R.value.timer.start,"onUpdate:modelValue":l[95]||(l[95]=e=>R.value.timer.start=e)},null,8,["modelValue"])])),_:1}),d(k,{label:"Spec(CRON表达式)"},{default:t((()=>[d(x,{modelValue:R.value.timer.spec,"onUpdate:modelValue":l[96]||(l[96]=e=>R.value.timer.spec=e)},null,8,["modelValue"])])),_:1}),(u(!0),o(s,null,i(R.value.timer.detail,((e,l)=>(u(),o(s,null,[(u(!0),o(s,null,i(e,((a,m)=>(u(),o("div",{key:m},[(u(),V(k,{key:l+m,label:m},{default:t((()=>[d(x,{modelValue:e[m],"onUpdate:modelValue":l=>e[m]=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"]))])))),128))],64)))),256))])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["model"]),p("div",K,[d(H,{type:"primary",onClick:D},{default:t((()=>[m("立即更新")])),_:1}),d(H,{type:"primary",onClick:A},{default:t((()=>[m("重启服务（开发中）")])),_:1})])])}}});export{I as default};
