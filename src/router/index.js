import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Userlist from '../views/Userlist.vue'
import Stock from '../views/Stock.vue'

Vue.use(VueRouter)

const routes = [

  {path:'/login', component:Login},
  
  //redirect to login from '#'
  {path:'/', redirect:'/login'},

  {path:"/home",component:Home, name:'Home', 
    children:[
    {name:"Userlist",path:'userlist',component:Userlist},
    {name:"Stock",path:'stock',component:Stock}
  ]}
  
]



const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.path==='/login'){
    return next()
  }else{
    if(localStorage.getItem('token') === 'login'){
      next()
    }else{
      next('/login')
    }
  }
})
export default router
