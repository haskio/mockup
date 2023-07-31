import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Release from '../components/Release.vue'
import About from '../components/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{title:'无鱼原型管理系统'},
    children:[
      {path:'/',component:About ,meta:{title:'首页'},props:true},
    ]
  },
  {path: '/pd/:id', component: Release,meta:{title:'原型列表'}, props:true },
]

const router = new VueRouter({
  base: '/front/',
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router