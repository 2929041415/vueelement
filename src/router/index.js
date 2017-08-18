import Vue from 'vue'
import Router from 'vue-router'
import UserCenter from '../modules/usercenter/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserCenter',
      component: UserCenter
    }
  ]
})
