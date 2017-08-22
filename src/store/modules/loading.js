import * as types from '../mutation-types'
import * as actiontypes from '../action-types'

/* 初始化群组数据 */
const state = {
  loadingstatus: false
}

const mutations = {
  [types.CHANGE_LOAD_STATUS] (state, {data}) {
    state.loadingstatus = data
  }
}

const actions = {
  [actiontypes.CHANGE_LOAD_STATUS] ({ commit }, loadstatus) {
    const data = loadstatus
    commit(types.CHANGE_LOAD_STATUS, { data })
  }
}

export default {
  state,
  actions,
  mutations
}
