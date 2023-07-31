## 介绍
一个简单的用于管理产品原型的系统，毫无保留给个人及企业免费使用。



## 软件架构

本项目基于前后端分离架构：
服务端：gin+gorm  （基于go-vue-admin框架）
前端管理端： vue3、elementui
前端分享端： vue2、vuetify


| 目录  | 说明  |
|---|---|
| server | 后端  |
| web  | 前端管理端 |
| front | 前端分享端  |
| deploy  | 部署相关工具  |





## 功能截图

![](docs/01.png)
![](docs/02.png)
![](docs/03.png)
![](docs/04.png)
![](docs/05.png)



## 演示

### 分享端

[点击访问](http://pd.wuyusoft.com/pd/ea65a74f-dce0-4b04-bb9f-7e64aaa547b5)


### 管理端： 

http://pd.wuyusoft.com/admin

| #| 角色 |	 账号 | 	密码    |  权限 |
| :--: | :------: | :------: |:------: | ---------- |
|演示环境账号1 |产品经理 | 	pmtest1|	123456|发布原型|



## 部署方式
1.下载发布安装包（非源码）
2.部署数据库，创建数据库并导入初始化脚本
3.修改server/config.yaml 中对应的数据库信息
4.部署nginx和前端文件，请deploy中的nginx.conf配置内容。

提供了自行部署mysql、redis、nginx等服务的方式，也可以使用原有的服务。需要自行进行前端代码编译。



### 

默认管理账号：
admin
默认密码：
123456



## 问题反馈
1、欢迎大家使用，项目开源免费，无特殊授权要求。

2、交流咨询请加QQ群
功能使用：7834330。

## 感谢
感谢go-vue-admin、ele-admin-ui、vuetify等相关


## 捐赠
如果帮助到你，请作者喝杯茶。


![](docs/00.png)
