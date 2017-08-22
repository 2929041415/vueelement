import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store/main'
import { CHANGE_LOAD_STATUS } from './store/action-types'

Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  store.dispatch(CHANGE_LOAD_STATUS, true)
  next()
})

router.afterEach((to, from, next) => {
  store.dispatch(CHANGE_LOAD_STATUS, false)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
