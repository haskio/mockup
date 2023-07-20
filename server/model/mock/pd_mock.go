// 自动生成模板PdMock
package mock

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
)

// PdMock 结构体
type PdMock struct {
	global.GVA_MODEL
	Title       string `json:"title" form:"title" gorm:"column:title;comment:;"`
	ShareUrl    string `json:"shareUrl" form:"shareUrl" gorm:"column:share_url;comment:;"`
	ShareStatus bool   `json:"shareStatus" form:"shareStatus" gorm:"column:share_status;comment:;"`
}

// TableName PdMock 表名
func (PdMock) TableName() string {
	return "pd_Mock"
}
