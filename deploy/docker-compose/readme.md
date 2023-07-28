## 


## Project setup
```
docker compose up -d
```

### 重启服务容器 （必需）
因初始化时，mysql 容器启动较慢，导致服务进程无法连上数据库，这时候使用则无法正常登录

```
docker  restart server
```

### 访问链接
```
 

 管理端
 http://IP:8880/admin/#/layout/dashboard

 默认管理员
 admin
 123456 

 用户端：
 http://IP:8880/

 接口
 http://IP:8888/