package mock

import (
	"github.com/flipped-aurora/gin-vue-admin/server/api/v1"
	"github.com/flipped-aurora/gin-vue-admin/server/middleware"
	"github.com/gin-gonic/gin"
)

type PdMockRouter struct {
}

// InitPdMockRouter 初始化 PdMock 路由信息
func (s *PdMockRouter) InitPdMockRouter(Router *gin.RouterGroup) {
	pdMockRouter := Router.Group("pdMock").Use(middleware.OperationRecord())
	pdMockRouterWithoutRecord := Router.Group("pdMock")
	var pdMockApi = v1.ApiGroupApp.MockApiGroup.PdMockApi
	{
		pdMockRouter.POST("createPdMock", pdMockApi.CreatePdMock)   // 新建PdMock
		pdMockRouter.DELETE("deletePdMock", pdMockApi.DeletePdMock) // 删除PdMock
		pdMockRouter.DELETE("deletePdMockByIds", pdMockApi.DeletePdMockByIds) // 批量删除PdMock
		pdMockRouter.PUT("updatePdMock", pdMockApi.UpdatePdMock)    // 更新PdMock
	}
	{
		pdMockRouterWithoutRecord.GET("findPdMock", pdMockApi.FindPdMock)        // 根据ID获取PdMock
		pdMockRouterWithoutRecord.GET("getPdMockList", pdMockApi.GetPdMockList)  // 获取PdMock列表
	}
}
