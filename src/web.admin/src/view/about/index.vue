<template>
  <div>
    <el-row :gutter="10">

      <el-col :span="12">
        <el-card>
          <template #header>
            <div>无鱼软件</div>
          </template>
          <div>
            <el-row>
              <el-col>
                官网: <a href="http://www.wuyu-soft.com">http://www.wuyu-soft.com </a>
              </el-col>
            </el-row>
            <el-row>
              <el-col>仓库地址： </el-col>


                <el-col>gitee  <a href="https://gitee.com/wy-soft/mockup">https://gitee.com/wy-soft/mockup  </a>  </el-col>


                <el-col>github  <a href="https://github.com/haskio/mockup">https://github.com/haskio/mockup  </a>  </el-col>

            </el-row>
            <el-row>QQ群：7834330</el-row>
          </div>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card>
          <template #header>
            <el-divider>本系统使用gva框架</el-divider>
          </template>
          <div>
            <el-row>
              <el-col :span="8" :offset="8">
                <a href="https://github.com/flipped-aurora/gin-vue-admin">
                  <img
                    class="org-img dom-center"
                    src="@/assets/logo.png"
                    alt="gin-vue-admin"
                  >
                </a>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>


    
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<script setup>
import { ref } from 'vue'
import { Commits, Members } from '@/api/github'
import { formatTimeToStr } from '@/utils/date'
const page = ref(0)

const loadMore = () => {
  page.value++
  loadCommits()
}

const dataTimeline = ref([])
const loadCommits = () => {
  Commits(page.value).then(({ data }) => {
    data.forEach((element) => {
      if (element.commit.message) {
        dataTimeline.value.push({
          from: formatTimeToStr(element.commit.author.date, 'yyyy-MM-dd'),
          title: element.commit.author.name,
          showDayAndMonth: true,
          message: element.commit.message,
        })
      }
    })
  })
}

const members = ref([])
const loadMembers = () => {
  Members().then(({ data }) => {
    members.value = data
    members.value.sort()
  })
}

loadCommits()
loadMembers()

</script>

<style scoped>
.load-more {
  margin-left: 120px;
}

.avatar-img {
  float: left;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  margin-top: 15px;
}

.org-img {
  height: 150px;
  width: 150px;
}

.author-name {
  float: left;
  line-height: 65px !important;
  margin-left: 10px;
  color: darkblue;
  line-height: 100px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.dom-center {
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
