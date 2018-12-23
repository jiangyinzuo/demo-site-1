import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import StudentLogin from '@/components/StudentLogin'
import StudentHome from '@/components/studenthome/StudentHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/studentLogin',
      name: '/StudentLogin',
      component: StudentLogin
    },
    {
      path: '/studentHome',
      name: 'StudentHome',
      component: StudentHome
    }
  ]
})
