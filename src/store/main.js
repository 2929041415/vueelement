import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import school from './modules/school'
import group from './modules/group'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    school,
    group
  }
})
