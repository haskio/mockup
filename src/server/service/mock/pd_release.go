package mock

import (
	"archive/zip"
	"bytes"
	"errors"
	"github.com/flipped-aurora/gin-vue-admin/server/global"
	"github.com/flipped-aurora/gin-vue-admin/server/model/common/request"
	"github.com/flipped-aurora/gin-vue-admin/server/model/mock"
	mockReq "github.com/flipped-aurora/gin-vue-admin/server/model/mock/request"
	"github.com/google/uuid"
	"golang.org/x/text/encoding/simplifiedchinese"
	"golang.org/x/text/transform"
	"gorm.io/gorm"
	"io/ioutil"
)

type PdReleaseService struct {
}

// CreatePdRelease 创建PdRelease记录
// Author [piexlmax](https://github.com/piexlmax)
func (pdReleaseService *PdReleaseService) CreatePdRelease(pdRelease *mock.PdRelease) (err error) {

	//mockPath := "uploads/mockup"

	//mockFilePath := mockPath + file[0]

	//err = global.DeCompress(file[1], mock)
	isApprove := global.GVA_CONFIG.MockupApprove.Approve

	if isApprove == true {
		pdRelease.IsApprove = 2
	} else {
		pdRelease.IsApprove = 0
	}

	path := pdRelease.MockupFile

	reader, err := zip.OpenReader(path)

	if err != nil {
		global.GVA_LOG.Error("文件打开失败，或者不是压缩文件")
		return err
	}

	defer reader.Close()
	var firtDir string

	for _, f := range reader.File {
		if !f.FileInfo().IsDir() {
			return errors.New("缩文件中不包含文件夹，请重新上传")
		}

		if f.Flags == 0 {
			i := bytes.NewReader([]byte(f.Name))
			decoder := transform.NewReader(i, simplifiedchinese.GB18030.NewDecoder())
			content, _ := ioutil.ReadAll(decoder)
			firtDir = string(content)
		} else {
			firtDir = f.Name
		}
		break
	}

	u1 := uuid.New()
	destPath := "uploads/mockup/" + u1.String()

	if err = global.UnzipSource(path, destPath); err != nil {
		global.GVA_LOG.Error("文件解压失败")
		return err
	}
	destPath = "mockup/" + u1.String()

	pdRelease.Mockup_html = destPath + "/" + firtDir
	//fmt.Println("html:", pdRelease.Mockup_html)
	err = global.GVA_DB.Create(pdRelease).Error
	return err
}

// DeletePdRelease 删除PdRelease记录
// Author [piexlmax](https://github.com/piexlmax)
func (pdReleaseService *PdReleaseService) DeletePdRelease(pdRelease mock.PdRelease) (err error) {
	err = global.GVA_DB.Transaction(func(tx *gorm.DB) error {
		if err := tx.Model(&mock.PdRelease{}).Where("id = ?", pdRelease.ID).Update("deleted_by", pdRelease.DeletedBy).Error; err != nil {
			return err
		}
		if err = tx.Delete(&pdRelease).Error; err != nil {
			return err
		}
		return nil
	})
	return err
}

// DeletePdReleaseByIds 批量删除PdRelease记录
// Author [piexlmax](https://github.com/piexlmax)
func (pdReleaseService *PdReleaseService) DeletePdReleaseByIds(ids request.IdsReq, deleted_by uint) (err error) {
	err = global.GVA_DB.Transaction(func(tx *gorm.DB) error {
		if err := tx.Model(&mock.PdRelease{}).Where("id in ?", ids.Ids).Update("deleted_by", deleted_by).Error; err != nil {
			return err
		}
		if err := tx.Where("id in ?", ids.Ids).Delete(&mock.PdRelease{}).Error; err != nil {
			return err
		}
		return nil
	})
	return err
}

// UpdatePdRelease 更新PdRelease记录
// Author [piexlmax](https://github.com/piexlmax)
func (pdReleaseService *PdReleaseService) UpdatePdRelease(pdRelease mock.PdRelease) (err error) {
	err = global.GVA_DB.Save(&pdRelease).Error
	return err
}

// GetPdRelease 根据id获取PdRelease记录
// Author [piexlmax](https://github.com/piexlmax)
func (pdReleaseService *PdReleaseService) GetPdRelease(id uint) (pdRelease mock.PdRelease, err error) {
	err = global.GVA_DB.Where("id = ?", id).First(&pdRelease).Error
	pdRelease.MockupFile = ""
	// isApprove := global.GVA_CONFIG.MockupApprove.Approve

	return
}

// GetPdReleaseInfoList 分页获取PdRelease记录
// Author [piexlmax](https://github.com/piexlmax)
func (pdReleaseService *PdReleaseService) GetPdReleaseInfoList(info mockReq.PdReleaseSearch) (list []mock.PdRelease, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	db := global.GVA_DB.Model(&mock.PdRelease{})
	var pdReleases []mock.PdRelease
	// 如果有条件搜索 下方会自动创建搜索语句
	if info.StartCreatedAt != nil && info.EndCreatedAt != nil {
		db = db.Order("ID desc").Where("created_at BETWEEN ? AND ?  ADN mockup_id = ? ", info.StartCreatedAt, info.EndCreatedAt, info.MockupId)
	}

	if info.MockupId != 0 {
		db = db.Order("ID desc").Where("mockup_id = ?", info.MockupId)
	}
	err = db.Where("mockup_id = ?", info.MockupId).Count(&total).Error
	if err != nil {
		return
	}

	err = db.Limit(limit).Offset(offset).Where("mockup_id = ?", info.MockupId).Find(&pdReleases).Error
	return pdReleases, total, err
}

// GetPdRelease 根据id获取PdRelease记录
// Author [piexlmax](https://github.com/piexlmax)
func (pdReleaseService *PdReleaseService) GetApprove() (isApprove bool) {

	isApprove = global.GVA_CONFIG.MockupApprove.Approve

	return isApprove
}
