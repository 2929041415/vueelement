import Vue from 'vue'
import Router from 'vue-router'
import UserDeptCenter from '../modules/usercenter/deptcontent'
import UserGroupCenter from '../modules/usercenter/groupcontent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserDeptCenter',
      component: UserDeptCenter
    },
    {
      path: '/usergroup',
      name: 'UserGroupCenter',
      component: UserGroupCenter
    }
  ]
})
