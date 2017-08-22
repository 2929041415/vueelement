import * as types from '../mutation-types'
import * as actiontypes from '../action-types'
import * as groupservice from '../../services/group'

/* 初始化群组数据 */
const state = {
  grouptree: []
}

const mutations = {
  [types.GROUP_TREE_LIST] (state, {data}) {
    state.grouptree = data
  }
}

const actions = {
  [actiontypes.GROUP_DATA_ACTION] ({ commit }) {
    groupservice.querytree().then(value => {
      const data = value.map((value) => {
        const text = value.text
        const nodes = value.nodes
        return { text, nodes }
      })
      commit(types.GROUP_TREE_LIST, { data })
    })
  }
}

export default {
  state,
  actions,
  mutations
}
