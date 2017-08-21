import * as types from '../mutation-types'
import * as schoolservice from '../../services/school'

/* 初始化数据 */
const state = {
  schooldatas: []
}

const mutations = {
  [types.SCHOOL_DATA_LIST] (state) {
    state.schooldatas = []
  }
}

const actions = {
  schoolist ({ commit, state }) {
    const data = schoolservice.query()
    console.log(data.data)
  }
}

export default {
  state,
  actions,
  mutations
}
