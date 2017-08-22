import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import school from './modules/school'
import group from './modules/group'
import dept from './modules/dept'
import loadmodule from './modules/loading'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    school,
    group,
    dept,
    loadmodule
  }
})
