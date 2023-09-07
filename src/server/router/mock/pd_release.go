package mock

import (
	"github.com/flipped-aurora/gin-vue-admin/server/api/v1"
	"github.com/flipped-aurora/gin-vue-admin/server/middleware"
	"github.com/gin-gonic/gin"
)

type PdReleaseRouter struct {
}

// InitPdReleaseRouter 初始化 PdRelease 路由信息
func (s *PdReleaseRouter) InitPdReleaseRouter(Router *gin.RouterGroup, RouterPub *gin.RouterGroup) {
	pdReleaseRouter := Router.Group("pdRelease").Use(middleware.OperationRecord())
	pdReleaseRouterWithoutRecord := Router.Group("pdRelease")

	pdPublicReleaseRouterWithoutRecord := RouterPub.Group("pdguest")

	var pdReleaseApi = v1.ApiGroupApp.MockApiGroup.PdReleaseApi
	{
		pdReleaseRouter.POST("createPdRelease", pdReleaseApi.CreatePdRelease)             // 新建PdRelease
		pdReleaseRouter.DELETE("deletePdRelease", pdReleaseApi.DeletePdRelease)           // 删除PdRelease
		pdReleaseRouter.DELETE("deletePdReleaseByIds", pdReleaseApi.DeletePdReleaseByIds) // 批量删除PdRelease
		pdReleaseRouter.PUT("updatePdRelease", pdReleaseApi.UpdatePdRelease)              // 更新PdRelease

		pdReleaseRouter.GET("getApproveStatus", pdReleaseApi.GetApproveStatus) // 更新PdRelease

	}
	{
		pdReleaseRouterWithoutRecord.GET("findPdRelease", pdReleaseApi.FindPdRelease)       // 根据ID获取PdRelease
		pdReleaseRouterWithoutRecord.GET("getPdReleaseList", pdReleaseApi.GetPdReleaseList) // 获取PdRelease列表
	}
	{
		pdPublicReleaseRouterWithoutRecord.GET("findPdRelease", pdReleaseApi.GetPdReleaseList) // 公开接口根据ID获取PdRelease
	}
}
