import * as types from '../mutation-types'
import * as actiontypes from '../action-types'
import * as deptservice from '../../services/dept'

/* 初始化群组数据 */
const state = {
  depttree: [],
  modalstatus: false,
  modalshowstatus: false
}

const mutations = {
  [types.CHANGE_DEPT_MODAL] (state, {data}) {
    state.modalshowstatus = false
    state.modalstatus = data
  },
  [types.DEPT_DATA_ACTION] (state, {data}) {
    state.depttree = data
  }
}

const actions = {
  [actiontypes.CHANGE_DEPT_MODAL] ({ commit }, data) {
    commit(types.CHANGE_DEPT_MODAL, { data })
  },
  [actiontypes.DEPT_DATA_ACTION] ({ commit, state }) {
    deptservice.querytree().then(value => {
      const data = value
      commit(types.DEPT_DATA_ACTION, { data })
    })
  }
}

export default {
  state,
  actions,
  mutations
}
