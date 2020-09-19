import Vue from 'vue'
import VueRouter from 'vue-router'
import { Login,Register } from '@/components/'
import navs from '@/utils/navs'

Vue.use(VueRouter)

let arr = []

navs.map(ele=>{
  arr.push({path:ele.path,component:ele.comm})
})

const routes = [
  ...arr,
  {path: '/login',components:{login:Login}},
  {path: '/register',components:{register:Register}},
  {path:'/*',redirect:'/home'}
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {   //to即将要进入的目标，from即将要离开的目标
  //判断如果进入的不是登录页面就进入下一层判断
  if(to.path=='/cart'){
    //判断有没有token有就不干事
    if(localStorage.getItem('token')){
      next()
    }else{
      //否则跳回登录页面
      next('/login')
    }
  }else{
    next()
  }
})

//解决router新版本报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

export default router
