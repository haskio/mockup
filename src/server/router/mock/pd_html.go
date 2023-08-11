package mock

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type PdHtml struct {
}

// InitPdReleaseRouter 初始化 PdRelease 路由信息
func (s *PdHtml) InitHtml(Router *gin.RouterGroup) {
	pdHtmlRouter := Router.Group("front")

	pdHtmlRouter.GET("pd", func(ctx *gin.Context) {
		ctx.HTML(http.StatusOK, "./resource/front/index.html", gin.H{
			"title": "原型列表",
		})
	})
}
