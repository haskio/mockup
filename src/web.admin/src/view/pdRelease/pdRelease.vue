<template>
  <div>
    <el-card>
      <el-descriptions :title="mockupInfo.title" :column=2>
        <el-descriptions-item label="分享状态">
          <el-switch
            v-model="mockupInfo.shareStatus"
            active-text="已开启分享"
            inactive-text="未开启分享"  
            @change="changShare">
          </el-switch>
        </el-descriptions-item>

        <el-descriptions-item label="">
         
        </el-descriptions-item>

        <el-descriptions-item label="访问链接" >   {{  hostPath+ '/pd/'+ mockupInfo.shareUrl}}
          </el-descriptions-item>
        <el-descriptions-item label="">
          <el-button type="primary" link icon="link" class="table-button"
              @click="toMock(hostPath  + '/front/#/pd/'+ mockupInfo.shareUrl)">访问</el-button>
        </el-descriptions-item>
        <el-descriptions-item label="备注1">每次关闭再开启的分享地址都不一样</el-descriptions-item>
        <el-descriptions-item label="">
        </el-descriptions-item>
        <el-descriptions-item label="备注2">分享功能需要部署用户端系统，否则无法访问</el-descriptions-item>
        <el-descriptions-item label="">
        </el-descriptions-item>
        <el-descriptions-item label="备注3">关闭分享后，原型将无法访问</el-descriptions-item>
        <el-descriptions-item label="">        </el-descriptions-item>


    </el-descriptions>

    </el-card>
    <br>
    <div class="gva-table-box">
      <div class="gva-btn-list">
        <el-button type="primary" icon="plus" @click="openDialog">新增</el-button>
        <el-popover v-model:visible="deleteVisible" placement="top" width="160">
          <p>确定要删除吗？</p>
          <div style="text-align: right; margin-top: 8px;">
            <el-button type="primary" link @click="deleteVisible = false">取消</el-button>
            <el-button type="primary" @click="onDelete">确定</el-button>
          </div>
          <template #reference>
            <el-button icon="delete" style="margin-left: 10px;" :disabled="!multipleSelection.length"
              @click="deleteVisible = true">删除</el-button>
          </template>
        </el-popover>
      </div>

      <el-table ref="multipleTable" style="width: 100%" tooltip-effect="dark" :data="tableData" row-key="ID"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="30" />
        <el-table-column align="left" label="版本" prop="ID" width="60" />
        <el-table-column align="left" label="标题" prop="title" />
        <el-table-column align="left" label="发布日期" width="160">
          <template #default="scope">{{ formatDate(scope.row.CreatedAt) }}</template>
        </el-table-column>


        <el-table-column align="left" label="访问链接" prop="mockup_html" width="120">
          <template #default="scope">
            <el-button type="primary" link icon="link" class="table-button"
              @click="toHtml(scope.row.mockup_html)">访问</el-button>
          </template>

        </el-table-column>

        <el-table-column align="left" label="操作">
          <template #default="scope">
            <el-button type="primary" link icon="edit" class="table-button"
              @click="updatePdReleaseFunc(scope.row)">编辑</el-button>
            <el-button type="primary" link icon="delete" @click="deleteRow(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>


      <div class="gva-pagination">
        <el-pagination layout="total, sizes, prev, pager, next, jumper" :current-page="page" :page-size="pageSize"
          :page-sizes="[10, 30, 50, 100]" :total="total" @current-change="handleCurrentChange"
          @size-change="handleSizeChange" />
      </div>
    </div>

    <!-- 新增窗口 -->
    <el-dialog v-model="dialogFormVisible" :before-close="closeDialog" title="添加发布"
      destroy-on-close>
      <el-form :model="formData" label-position="right" ref="elFormRef" :rules="rule" label-width="80px">
        <el-form-item label="产品ID:" prop="mockupId" display="disable" v-show="false">
          <el-input v-model.number="formData.mockupId" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input  v-model="formData.title" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="发布说明:" prop="releaseNote">
          <vue3-tinymce v-model="formData.releaseNote" :setting="state.setting"  script-src="/tinymce/tinymce.min.js"/>
        </el-form-item>
        <el-form-item label="文件:" prop="mockupFile">
          <SelectFile v-model="formData.mockupFile" />
        </el-form-item>
        <el-form-item label="说明：">
          <text>请上传原型生成的html文件包，只能上传zip格式。</text>
          <text>请保证压缩包里有start.html文件。</text>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="closeDialog">取 消</el-button>
          <el-button type="primary" @click="enterDialog">确 定</el-button>
        </div>
      </template>
    </el-dialog>



      <!-- 编辑窗口 -->
      <el-dialog v-model="dialogEditFormVisible" :before-close="closeDialog" title="修改发布"
      destroy-on-close>
      <el-form :model="formData" label-position="right" ref="elFormRef" :rules="editRule" label-width="80px">
        <el-form-item label="产品ID:" prop="mockupId" display="disable" v-show="false">
          <el-input v-model.number="formData.mockupId" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input  v-model="formData.title" :clearable="true" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="发布说明:" prop="releaseNote"  >
          <vue3-tinymce v-model="formData.releaseNote" :setting="state.setting" />
        </el-form-item>
        <el-form-item label="文件:" prop="mockupFile">
          <SelectFile v-model="formData.mockupFile" />
        </el-form-item>
        <el-form-item label="说明：">
          <text>请上传原型生成的html文件包，只能上传zip格式。</text>
          <text>请保证压缩包里有start.html文件。</text>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="closeDialog">取 消</el-button>
          <el-button type="primary" @click="enterDialog">确 定</el-button>
        </div>
      </template>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'PdRelease'
}
</script>

<script setup>
import { findPdMock,updatePdMock } from '@/api/pdMock'
import Vue3Tinymce from '@jsdawn/vue3-tinymce';
import {
  createPdRelease,
  deletePdRelease,
  deletePdReleaseByIds,
  updatePdRelease,
  findPdRelease,
  getPdReleaseList
} from '@/api/pdRelease'
import { getUrl } from '@/utils/image'
// 文件选择组件
import SelectFile from '@/components/selectFile/selectFile.vue'

// 全量引入格式化工具 请按需保留
import { getDictFunc, formatDate, formatBoolean, filterDict } from '@/utils/format'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, reactive } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'



//tiny配置
const state = reactive({
  setting: {
    menubar: false,
    height: 220,
    min_width: 3024,
    toolbar:
    'bold italic underline h1 h2 blockquote codesample numlist bullist  link   | removeformat fullscreen',
    plugins: 'codesample  link  table lists    fullscreen ',
    toolbar_mode: 'sliding',
    nonbreaking_force_tab: true,
    link_title: false,
    link_default_target: '_blank',
    content_style: 'body{font-size: 16px}',
    resize: "both", 
  },
})


const route = useRoute()
// 自动化生成的字典（可能为空）以及字段
const path = import.meta.env.VITE_BASE_PATH + '/'

const mockupId = parseInt(route.params.id)   
onBeforeRouteUpdate((to) => {
  if (to.name === 'PdRelease') {
    formData.mockupId = to.params.id
  }
})


const mockupInfo = ref({})

const formData = ref({
  mockupId: 0,
  title:'',
  releaseNote: '',
  mockup_html: '',
  mockupName: ''
})

// 验证规则
const rule = reactive({
  title: [{
    required: true,
    message: '',
    trigger: ['input', 'blur'],
  },
  ],
  mockupFile: [{
    required: true,
    message: '',
    trigger: ['input', 'blur'],
  },
  ],
})


const editRule = reactive({
  title: [{
    required: true,
    message: '',
    trigger: ['input', 'blur'],
  },
  ],
})




const getMockupInfo = async (id) => {
  const res = await findPdMock({ ID: id })
  if (res.code === 0) {
    mockupInfo.value = res.data.repdMock
    console.log("mockuoinfo:",mockupId.value)
  }
}

getMockupInfo(mockupId)

const changShare = async () => {
  mockupInfo.shareStatus = !mockupInfo.shareStatus
  const res = await updatePdMock(mockupInfo.value)
  getMockupInfo(mockupId)
  
}

const searchRule = reactive({
  createdAt: [
    {
      validator: (rule, value, callback) => {
        if (searchInfo.value.startCreatedAt && !searchInfo.value.endCreatedAt) {
          callback(new Error('请填写结束日期'))
        } else if (!searchInfo.value.startCreatedAt && searchInfo.value.endCreatedAt) {
          callback(new Error('请填写开始日期'))
        } else if (searchInfo.value.startCreatedAt && searchInfo.value.endCreatedAt && (searchInfo.value.startCreatedAt.getTime() === searchInfo.value.endCreatedAt.getTime() || searchInfo.value.startCreatedAt.getTime() > searchInfo.value.endCreatedAt.getTime())) {
          callback(new Error('开始日期应当早于结束日期'))
        } else {
          callback()
        }
      }, trigger: 'change'
    }
  ],
})

const elFormRef = ref()
const elSearchFormRef = ref()

// =========== 表格控制部分 ===========
const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const tableData = ref([])
const searchInfo = ref({mockupId: Number(route.params.id)})

// 重置
const onReset = () => {
  searchInfo.value = {mockupId: Number(route.params.id)}
  getTableData()
}

// 搜索
const onSubmit = () => {
  elSearchFormRef.value?.validate(async (valid) => {
    if (!valid) return
    page.value = 1
    pageSize.value = 10
    getTableData()
  })
}

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}

// 修改页面容量
const handleCurrentChange = (val) => {
  page.value = val
  getTableData()
}

// 查询
const getTableData = async () => {
  const table = await getPdReleaseList({ page: page.value, pageSize: pageSize.value, ...searchInfo.value })
  if (table.code === 0) {
    tableData.value = table.data.list
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
  // console.log("table:",tableData);

}



getTableData()

// ============== 表格控制部分结束 ===============

// 获取需要的字典 可能为空 按需保留
const setOptions = async () => {
}

// 获取需要的字典 可能为空 按需保留
setOptions()


// 多选数据
const multipleSelection = ref([])
// 多选
const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

// 删除行
const deleteRow = (row) => {
  ElMessageBox.confirm('确定要删除吗?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    deletePdReleaseFunc(row)
  })
}


// 批量删除控制标记
const deleteVisible = ref(false)

// 多选删除
const onDelete = async () => {
  const ids = []
  if (multipleSelection.value.length === 0) {
    ElMessage({
      type: 'warning',
      message: '请选择要删除的数据'
    })
    return
  }
  multipleSelection.value &&
    multipleSelection.value.map(item => {
      ids.push(item.ID)
    })
  const res = await deletePdReleaseByIds({ ids })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
    if (tableData.value.length === ids.length && page.value > 1) {
      page.value--
    }
    deleteVisible.value = false
    getTableData()
  }
}

// 行为控制标记（弹窗内部需要增还是改）
const type = ref('')

// 更新行
const updatePdReleaseFunc = async (row) => {
  const res = await findPdRelease({ ID: row.ID })
  type.value = 'update'
  //console.log("res:", res);
  console.log("type:", type)
  if (res.code === 0) {
    //删掉返回的file文件的值
    delete res.data.repdRelease.mockupFile
    formData.value = res.data.repdRelease
    dialogEditFormVisible.value = true
  }
}


// 删除行
const deletePdReleaseFunc = async (row) => {
  const res = await deletePdRelease({ ID: row.ID })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
    if (tableData.value.length === 1 && page.value > 1) {
      page.value--
    }
    getTableData()
  }
}

// 弹窗控制标记
const dialogFormVisible = ref(false)
const dialogEditFormVisible = ref(false)

// 打开弹窗
const openDialog = () => {
  type.value = 'create'
  dialogFormVisible.value = true
}

// 关闭弹窗
const closeDialog = () => {
  dialogFormVisible.value = false
  dialogEditFormVisible.value = false
  formData.value = {
    releaseNote: '',
    mockup_html: '',
  }
}
// 弹窗确定
const enterDialog = async () => {
  elFormRef.value?.validate(async (valid) => {
    console.log('valid:',valid);
    if (!valid) return
    let res
    switch (type.value) {
      case 'create':
        formData.value.mockupId =  mockupId
        formData.value.mockupFile = formData.value.mockupFile[0].url
        res = await createPdRelease(formData.value)
        break
      case 'update':
        formData.value.mockupId =  mockupId
        if (formData.value.mockupFile != null )  {
          formData.value.mockupFile = formData.value.mockupFile[0].url
        }
        res = await updatePdRelease(formData.value)
        break
      default:
        res = await createPdRelease(formData.value)
        break
    }
    if (res.code === 0) {
      ElMessage({
        type: 'success',
        message: '创建/更改成功'
      })
      closeDialog()
      getTableData()
    }
  })
}

const downloadFile = (url) => {
  window.open(getUrl(url), '_blank')
}

//跳转链接
const toHtml = async (url) => {
  console.log('url:', url);
  url = url + 'start.html'
  window.open(getUrl(url), '_blank')
}

const hostPath =  window.location.protocol +  '//' + window.location.host
const toMock = async (url) => {
  //url = hostPath + url
  console.log('url:', url);
  window.open(url, '_blank')
}



</script>

<style>
.file-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.tox {
  width: 100%  !important;
}
</style>
