import service from '@/utils/request'

// @Tags PdMock
// @Summary 创建PdMock
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.PdMock true "创建PdMock"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /pdMock/createPdMock [post]
export const createPdMock = (data) => {
  return service({
    url: '/pdMock/createPdMock',
    method: 'post',
    data
  })
}

// @Tags PdMock
// @Summary 删除PdMock
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.PdMock true "删除PdMock"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /pdMock/deletePdMock [delete]
export const deletePdMock = (data) => {
  return service({
    url: '/pdMock/deletePdMock',
    method: 'delete',
    data
  })
}

// @Tags PdMock
// @Summary 删除PdMock
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除PdMock"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /pdMock/deletePdMock [delete]
export const deletePdMockByIds = (data) => {
  return service({
    url: '/pdMock/deletePdMockByIds',
    method: 'delete',
    data
  })
}

// @Tags PdMock
// @Summary 更新PdMock
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.PdMock true "更新PdMock"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /pdMock/updatePdMock [put]
export const updatePdMock = (data) => {
  return service({
    url: '/pdMock/updatePdMock',
    method: 'put',
    data
  })
}

// @Tags PdMock
// @Summary 用id查询PdMock
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.PdMock true "用id查询PdMock"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /pdMock/findPdMock [get]
export const findPdMock = (params) => {
  return service({
    url: '/pdMock/findPdMock',
    method: 'get',
    params
  })
}

// @Tags PdMock
// @Summary 分页获取PdMock列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取PdMock列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /pdMock/getPdMockList [get]
export const getPdMockList = (params) => {
  return service({
    url: '/pdMock/getPdMockList',
    method: 'get',
    params
  })
}
