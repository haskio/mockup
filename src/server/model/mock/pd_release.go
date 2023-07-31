// 自动生成模板PdRelease
package mock

import (
	"github.com/flipped-aurora/gin-vue-admin/server/global"
)

// PdRelease 结构体
type PdRelease struct {
	global.GVA_MODEL
	MockupId    int    `json:"mockupId" form:"mockupId" gorm:"column:mockup_id;comment:关联原型id;"`
	Title       string `json:"title" form:"title" gorm:"column:title;comment:发布说明;"`
	ReleaseNote string `json:"releaseNote" form:"releaseNote" gorm:"column:release_note;type:longtext;comment:发布说明;"`
	MockupFile  string `json:"mockupFile" form:"mockupFile" gorm:"column:mockup_file;comment:原型文件;"`
	Mockup_html string `json:"mockup_html" form:"mockup_html" gorm:"column:mockup_html;comment:原型访问链接;"`
	CreatedBy   uint   `gorm:"column:created_by;comment:创建者"`
	UpdatedBy   uint   `gorm:"column:updated_by;comment:更新者"`
	DeletedBy   uint   `gorm:"column:deleted_by;comment:删除者"`
}

// TableName PdRelease 表名
func (PdRelease) TableName() string {
	return "pd_Release"
}
