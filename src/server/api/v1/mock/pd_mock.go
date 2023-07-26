package mock

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/response"
	"github.com/flipped-aurora/gin-vue-admin/server/model/mock"
	mockReq "github.com/flipped-aurora/gin-vue-admin/server/model/mock/request"
	"github.com/flipped-aurora/gin-vue-admin/server/service"
	"github.com/flipped-aurora/gin-vue-admin/server/utils"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

type PdMockApi struct {
}

var pdMockService = service.ServiceGroupApp.MockServiceGroup.PdMockService

// CreatePdMock 创建PdMock
// @Tags PdMock
// @Summary 创建PdMock
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body mock.PdMock true "创建PdMock"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /pdMock/createPdMock [post]
func (pdMockApi *PdMockApi) CreatePdMock(c *gin.Context) {
	var pdMock mock.PdMock
	var uid = utils.GetUserID(c)
	err := c.ShouldBindJSON(&pdMock)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	pdMock.Uid = int(uid)
	verify := utils.Rules{
		"Title": {utils.NotEmpty()},
	}
	if err := utils.Verify(pdMock, verify); err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := pdMockService.CreatePdMock(&pdMock); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// DeletePdMock 删除PdMock
// @Tags PdMock
// @Summary 删除PdMock
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body mock.PdMock true "删除PdMock"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /pdMock/deletePdMock [delete]
func (pdMockApi *PdMockApi) DeletePdMock(c *gin.Context) {
	var pdMock mock.PdMock
	err := c.ShouldBindJSON(&pdMock)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := pdMockService.DeletePdMock(pdMock); err != nil {
		global.GVA_LOG.Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// DeletePdMockByIds 批量删除PdMock
// @Tags PdMock
// @Summary 批量删除PdMock
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除PdMock"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /pdMock/deletePdMockByIds [delete]
func (pdMockApi *PdMockApi) DeletePdMockByIds(c *gin.Context) {
	var IDS request.IdsReq
	err := c.ShouldBindJSON(&IDS)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := pdMockService.DeletePdMockByIds(IDS); err != nil {
		global.GVA_LOG.Error("批量删除失败!", zap.Error(err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// UpdatePdMock 更新PdMock
// @Tags PdMock
// @Summary 更新PdMock
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body mock.PdMock true "更新PdMock"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /pdMock/updatePdMock [put]
func (pdMockApi *PdMockApi) UpdatePdMock(c *gin.Context) {
	var pdMock mock.PdMock
	err := c.ShouldBindJSON(&pdMock)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	verify := utils.Rules{
		"Title": {utils.NotEmpty()},
	}
	if err := utils.Verify(pdMock, verify); err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := pdMockService.UpdatePdMock(pdMock); err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// FindPdMock 用id查询PdMock
// @Tags PdMock
// @Summary 用id查询PdMock
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query mock.PdMock true "用id查询PdMock"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /pdMock/findPdMock [get]
func (pdMockApi *PdMockApi) FindPdMock(c *gin.Context) {
	var pdMock mock.PdMock
	err := c.ShouldBindQuery(&pdMock)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if repdMock, err := pdMockService.GetPdMock(pdMock.ID); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", c)
	} else {

		response.OkWithData(gin.H{"repdMock": repdMock}, c)
	}
}

// GetPdMockList 分页获取PdMock列表
// @Tags PdMock
// @Summary 分页获取PdMock列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query mockReq.PdMockSearch true "分页获取PdMock列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /pdMock/getPdMockList [get]
func (pdMockApi *PdMockApi) GetPdMockList(c *gin.Context) {
	var pageInfo mockReq.PdMockSearch
	var uid = utils.GetUserID(c)
	err := c.ShouldBindQuery(&pageInfo)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if list, total, err := pdMockService.GetPdMockInfoList(uid, pageInfo); err != nil {
		global.GVA_LOG.Error("获取失败!", zap.Error(err))
		response.FailWithMessage("获取失败", c)
	} else if uid == 0 {
		global.GVA_LOG.Error("获取用户信息!", zap.Error(err))
		response.FailWithMessage("用户信息不存在，请刷新或者重新登录后再试", c)
	} else {
		response.OkWithDetailed(response.PageResult{
			List:     list,
			Total:    total,
			Page:     pageInfo.Page,
			PageSize: pageInfo.PageSize,
		}, "获取成功", c)
	}
}
