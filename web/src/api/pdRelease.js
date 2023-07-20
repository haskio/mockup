import service from '@/utils/request'

// @Tags PdRelease
// @Summary 创建PdRelease
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.PdRelease true "创建PdRelease"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /pdRelease/createPdRelease [post]
export const createPdRelease = (data) => {
  return service({
    url: '/pdRelease/createPdRelease',
    method: 'post',
    data
  })
}

// @Tags PdRelease
// @Summary 删除PdRelease
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.PdRelease true "删除PdRelease"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /pdRelease/deletePdRelease [delete]
export const deletePdRelease = (data) => {
  return service({
    url: '/pdRelease/deletePdRelease',
    method: 'delete',
    data
  })
}

// @Tags PdRelease
// @Summary 删除PdRelease
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除PdRelease"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /pdRelease/deletePdRelease [delete]
export const deletePdReleaseByIds = (data) => {
  return service({
    url: '/pdRelease/deletePdReleaseByIds',
    method: 'delete',
    data
  })
}

// @Tags PdRelease
// @Summary 更新PdRelease
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.PdRelease true "更新PdRelease"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /pdRelease/updatePdRelease [put]
export const updatePdRelease = (data) => {
  return service({
    url: '/pdRelease/updatePdRelease',
    method: 'put',
    data
  })
}

// @Tags PdRelease
// @Summary 用id查询PdRelease
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.PdRelease true "用id查询PdRelease"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /pdRelease/findPdRelease [get]
export const findPdRelease = (params) => {
  return service({
    url: '/pdRelease/findPdRelease',
    method: 'get',
    params
  })
}

// @Tags PdRelease
// @Summary 分页获取PdRelease列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取PdRelease列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /pdRelease/getPdReleaseList [get]
export const getPdReleaseList = (params) => {
  return service({
    url: '/pdRelease/getPdReleaseList',
    method: 'get',
    params
  })
}
