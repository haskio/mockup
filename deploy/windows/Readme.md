# windows 版本使用方法




## 1.创建数据库

在要使用的服务器上mysql数据库（8.0）后，创建mockup数据库。
字符集：utf8mb4
排序规则：utf8mb4_general_ci

如果是在本机安装，推荐使用phpstudy进行安装。

安装后，将部署文件下的sql文件里的mockup_mysql-8.sql 脚本导入到数据库中。
 
### 2.配置数据库信息
将数据库链接信息配置到config.yaml中的mysql节点中。




### 3.运行程序

启动server.exe 即可运行，运行后该窗口不可关闭。



### 访问链接
 

 管理端
 http://IP:8888/admin/

 默认管理员
 admin
 123456 

