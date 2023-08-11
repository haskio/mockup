package core

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"time"

	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/initialize"
	"github.com/flipped-aurora/gin-vue-admin/server/service/system"
	"go.uber.org/zap"
)

type server interface {
	ListenAndServe() error
}

func RunWindowsServer() {
	if global.GVA_CONFIG.System.UseMultipoint || global.GVA_CONFIG.System.UseRedis {
		// 初始化redis服务
		initialize.Redis()
	}

	// 从db加载jwt数据
	if global.GVA_DB != nil {
		system.LoadAll()
	}

	gin.SetMode(gin.ReleaseMode)

	Router := initialize.Routers()
	Router.Static("/form-generator", "./resource/page")
	Router.Static("/mockup/", "./uploads/mockup")

	//Router.LoadHTMLGlob("./resource/front/*.html")
	//Router.LoadHTMLFiles("./resource/front/static/*.html")

	// 代理管理端
	Router.Static("/admin", "./resource/admin")

	//代理用户端
	Router.Static("/pd/css", "./resource/front/css")
	Router.Static("/pd/js", "./resource/front/js")

	Router.Static("/front", "./resource/front")

	address := fmt.Sprintf(":%d", global.GVA_CONFIG.System.Addr)
	s := initServer(address, Router)
	// 保证文本顺序输出
	// In order to ensure that the text order output can be deleted
	time.Sleep(10 * time.Microsecond)
	global.GVA_LOG.Info("server run success on ", zap.String("address", address))

	fmt.Printf(`
	默认自动化文档地址:http://127.0.0.1%s/swagger/index.html

	默认系统后台运行地址:http://127.0.0.1:8888/admin

`, address)
	global.GVA_LOG.Error(s.ListenAndServe().Error())
}
