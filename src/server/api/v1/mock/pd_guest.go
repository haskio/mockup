package mock

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/response"
	"github.com/flipped-aurora/gin-vue-admin/server/model/mock"
	"github.com/flipped-aurora/gin-vue-admin/server/service"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

type PdGuestApi struct {
}

var pdAllMockService = service.ServiceGroupApp.MockServiceGroup.PdMockService

// FindPdMockByShareUp 用id查询PdMock
// @Tags PdMock
// @Summary 用url查询PdMock
// @accept application/json
// @Produce application/json
// @Param data query mock.PdMock true "用用url查询PdMock
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /pdMock/findPdMock [get]
func (PdGuestApi *PdGuestApi) FindPdMockByUrl(c *gin.Context) {
	var pdMock mock.PdMock
	err := c.ShouldBindQuery(&pdMock)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}

	//fmt.Println("mockup", pdMock)
	//fmt.Println("url", pdMock.ShareUrl)

	if repdMock, err := pdMockService.GetPdMockByUrl(pdMock.ShareUrl); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", c)
	} else if repdMock.ShareStatus != true {
		response.FailWithMessage("该产品原型没有公开分享!", c)
	} else {
		response.OkWithData(gin.H{"repdMock": repdMock}, c)
	}
}
