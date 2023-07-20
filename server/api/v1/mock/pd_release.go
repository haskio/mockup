package mock

import (
	"fmt"
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

type PdReleaseApi struct {
}

var pdReleaseService = service.ServiceGroupApp.MockServiceGroup.PdReleaseService

// CreatePdRelease 创建PdRelease
// @Tags PdRelease
// @Summary 创建PdRelease
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body mock.PdRelease true "创建PdRelease"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /pdRelease/createPdRelease [post]
func (pdReleaseApi *PdReleaseApi) CreatePdRelease(c *gin.Context) {
	var pdRelease mock.PdRelease
	err := c.ShouldBindJSON(&pdRelease)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	pdRelease.CreatedBy = utils.GetUserID(c)
	verify := utils.Rules{
		"MockupId":   {utils.NotEmpty()},
		"MockupFile": {utils.NotEmpty()},
	}
	if err := utils.Verify(pdRelease, verify); err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := pdReleaseService.CreatePdRelease(&pdRelease); err != nil {
		global.GVA_LOG.Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// DeletePdRelease 删除PdRelease
// @Tags PdRelease
// @Summary 删除PdRelease
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body mock.PdRelease true "删除PdRelease"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /pdRelease/deletePdRelease [delete]
func (pdReleaseApi *PdReleaseApi) DeletePdRelease(c *gin.Context) {
	var pdRelease mock.PdRelease
	err := c.ShouldBindJSON(&pdRelease)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	pdRelease.DeletedBy = utils.GetUserID(c)
	if err := pdReleaseService.DeletePdRelease(pdRelease); err != nil {
		global.GVA_LOG.Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败", c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// DeletePdReleaseByIds 批量删除PdRelease
// @Tags PdRelease
// @Summary 批量删除PdRelease
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除PdRelease"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"批量删除成功"}"
// @Router /pdRelease/deletePdReleaseByIds [delete]
func (pdReleaseApi *PdReleaseApi) DeletePdReleaseByIds(c *gin.Context) {
	var IDS request.IdsReq
	err := c.ShouldBindJSON(&IDS)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	deletedBy := utils.GetUserID(c)
	if err := pdReleaseService.DeletePdReleaseByIds(IDS, deletedBy); err != nil {
		global.GVA_LOG.Error("批量删除失败!", zap.Error(err))
		response.FailWithMessage("批量删除失败", c)
	} else {
		response.OkWithMessage("批量删除成功", c)
	}
}

// UpdatePdRelease 更新PdRelease
// @Tags PdRelease
// @Summary 更新PdRelease
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body mock.PdRelease true "更新PdRelease"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /pdRelease/updatePdRelease [put]
func (pdReleaseApi *PdReleaseApi) UpdatePdRelease(c *gin.Context) {
	var pdRelease mock.PdRelease
	err := c.ShouldBindJSON(&pdRelease)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	pdRelease.UpdatedBy = utils.GetUserID(c)
	verify := utils.Rules{
		"MockupId":   {utils.NotEmpty()},
		"MockupFile": {utils.NotEmpty()},
	}
	if err := utils.Verify(pdRelease, verify); err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := pdReleaseService.UpdatePdRelease(pdRelease); err != nil {
		global.GVA_LOG.Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败", c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// FindPdRelease 用id查询PdRelease
// @Tags PdRelease
// @Summary 用id查询PdRelease
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query mock.PdRelease true "用id查询PdRelease"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /pdRelease/findPdRelease [get]
func (pdReleaseApi *PdReleaseApi) FindPdRelease(c *gin.Context) {
	var pdRelease mock.PdRelease
	err := c.ShouldBindQuery(&pdRelease)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if repdRelease, err := pdReleaseService.GetPdRelease(pdRelease.ID); err != nil {
		global.GVA_LOG.Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", c)
	} else {
		fmt.Println("MockupFile:", repdRelease.MockupFile)
		response.OkWithData(gin.H{"repdRelease": repdRelease}, c)
	}
}

// GetPdReleaseList 分页获取PdRelease列表
// @Tags PdRelease
// @Summary 分页获取PdRelease列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query mockReq.PdReleaseSearch true "分页获取PdRelease列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /pdRelease/getPdReleaseList [get]
func (pdReleaseApi *PdReleaseApi) GetPdReleaseList(c *gin.Context) {
	var pageInfo mockReq.PdReleaseSearch
	err := c.ShouldBindQuery(&pageInfo)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if list, total, err := pdReleaseService.GetPdReleaseInfoList(pageInfo); err != nil {
		global.GVA_LOG.Error("获取失败!", zap.Error(err))
		response.FailWithMessage("获取失败", c)
	} else {
		response.OkWithDetailed(response.PageResult{
			List:     list,
			Total:    total,
			Page:     pageInfo.Page,
			PageSize: pageInfo.PageSize,
		}, "获取成功", c)
	}
}
