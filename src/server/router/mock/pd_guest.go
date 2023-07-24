package mock

import (
	"github.com/flipped-aurora/gin-vue-admin/server/api/v1"
	"github.com/gin-gonic/gin"
)

type PdGuestRouter struct {
}

// InitPdReleaseRouter 初始化 PdRelease 路由信息
func (s *PdGuestRouter) InitPdGuestRouter(Router *gin.RouterGroup) {
	PdGuestRouter := Router.Group("pdguest")
	var PdGuestApi = v1.ApiGroupApp.MockApiGroup.PdGuestApi
	{
		PdGuestRouter.GET("findPdUrl", PdGuestApi.FindPdMockByUrl) // 根据url获取PdRelease
		//PdGuestRouter.GET("getPdReleaseList", PdGuestRouter.GetPdReleaseList) // 获取PdRelease列表
	}
}
