import { createRouter,createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue'
import Login from '../views/SesionView.vue'



const routes =[
    {
        path:'/home',
        name:'Home',
        component: Home
      },
      {
        path:'/',
        name:'Login',
        component: Login
      },
      {
        path:'/:catchAll(.*)',
        redirect:'/'
      }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router