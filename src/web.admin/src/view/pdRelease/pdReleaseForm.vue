<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="产品ID:" prop="mockupId">
          <el-input v-model.number="formData.mockupId" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="发布说明:" prop="releaseNote">
          <el-input v-model="formData.releaseNote" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="原型文件:" prop="mockupFile">
       </el-form-item>
        <el-form-item label="原型访问链接:" prop="mockup_html">
          <el-input v-model="formData.mockup_html" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
          <el-button type="primary" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PdRelease'
}
</script>

<script setup>
import {
  createPdRelease,
  updatePdRelease,
  findPdRelease
} from '@/api/pdRelease'

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
import SelectFile from '@/components/selectFile/selectFile.vue'
const route = useRoute()
const router = useRouter()

const type = ref('')
const formData = ref({
            mockupId: 0,
            releaseNote: '',
            mockup_html: '',
        })
// 验证规则
const rule = reactive({
               mockupId : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
               mockupFile : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
})

const elFormRef = ref()

// 初始化方法
const init = async () => {
 // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
      const res = await findPdRelease({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data.repdRelease
        type.value = 'update'
      }
    } else {
      type.value = 'create'
    }
}

init()
// 保存按钮
const save = async() => {
      elFormRef.value?.validate( async (valid) => {
         if (!valid) return
            let res
           switch (type.value) {
             case 'create':
               res = await createPdRelease(formData.value)
               break
             case 'update':
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
           }
       })
}

// 返回按钮
const back = () => {
    router.go(-1)
}

</script>

<style>
</style>
