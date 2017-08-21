import * as types from '../mutation-types'
import * as schoolservice from '../../services/school'

/* 初始化数据 */
const state = {
  schooldatas: [],
  schooltree: []
}

const mutations = {
  [types.SCHOOL_DATA_LIST] (state, {data}) {
    state.schooldatas = data
  },
  [types.SCHOOL_TREE_LIST] (state, {data}) {
    state.schooltree = data
  }
}

const actions = {
  schoolist ({ commit, state }) {
    schoolservice.query().then(value => {
      const data = value.rows
      data.map((schooobj) => {
        const obj = schooobj
        obj.label = schooobj.name
        return obj
      })
      commit(types.SCHOOL_DATA_LIST, { data })
    })
  },
  schootreelist ({ commit, state }) {
    schoolservice.schooltree().then(value => {
      const data = value
      commit(types.SCHOOL_TREE_LIST, { data })
    })
  }
}

export default {
  state,
  actions,
  mutations
}
