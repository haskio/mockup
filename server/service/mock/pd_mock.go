package mock

import (
	"fmt"
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
	"github.com/flipped-aurora/gin-vue-admin/server/model/mock"
	mockReq "github.com/flipped-aurora/gin-vue-admin/server/model/mock/request"
	"github.com/google/uuid"
)

type PdMockService struct {
}

// CreatePdMock 创建PdMock记录
// Author [piexlmax](https://github.com/piexlmax)
func (pdMockService *PdMockService) CreatePdMock(pdMock *mock.PdMock) (err error) {
	err = global.GVA_DB.Create(pdMock).Error
	return err
}

// DeletePdMock 删除PdMock记录
// Author [piexlmax](https://github.com/piexlmax)
func (pdMockService *PdMockService) DeletePdMock(pdMock mock.PdMock) (err error) {
	err = global.GVA_DB.Delete(&pdMock).Error
	return err
}

// DeletePdMockByIds 批量删除PdMock记录
// Author [piexlmax](https://github.com/piexlmax)
func (pdMockService *PdMockService) DeletePdMockByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]mock.PdMock{}, "id in ?", ids.Ids).Error
	return err
}

// UpdatePdMock 更新PdMock记录
// Author [piexlmax](https://github.com/piexlmax)
func (pdMockService *PdMockService) UpdatePdMock(pdMock mock.PdMock) (err error) {
	if pdMock.ShareStatus == true {
		pdMock.ShareUrl = uuid.New().String()
		fmt.Println(pdMock.ShareUrl)
	}

	err = global.GVA_DB.Save(&pdMock).Error
	return err
}

// GetPdMock 根据id获取PdMock记录
// Author [piexlmax](https://github.com/piexlmax)
func (pdMockService *PdMockService) GetPdMock(id uint) (pdMock mock.PdMock, err error) {
	err = global.GVA_DB.Where("id = ?", id).First(&pdMock).Error
	return
}

func (pdMockService *PdMockService) GetPdMockByUrl(ShareUrl string) (pdMock mock.PdMock, err error) {
	err = global.GVA_DB.Where("share_url = ?", ShareUrl).First(&pdMock).Error
	return
}

// GetPdMockInfoList 分页获取PdMock记录
// Author [piexlmax](https://github.com/piexlmax)
func (pdMockService *PdMockService) GetPdMockInfoList(info mockReq.PdMockSearch) (list []mock.PdMock, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(&mock.PdMock{})
	var pdMocks []mock.PdMock
	// 如果有条件搜索 下方会自动创建搜索语句
	if info.StartCreatedAt != nil && info.EndCreatedAt != nil {
		db = db.Where("created_at BETWEEN ? AND ?", info.StartCreatedAt, info.EndCreatedAt)
	}
	if info.Title != "" {
		db = db.Where("title LIKE ?", "%"+info.Title+"%")
	}
	err = db.Count(&total).Error
	if err != nil {
		return
	}

	err = db.Limit(limit).Offset(offset).Find(&pdMocks).Error
	return pdMocks, total, err
}
