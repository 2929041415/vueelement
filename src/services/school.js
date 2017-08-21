import request from '../utils/request'
import api from '../utils/api'

/* 查询接口 */
export function query (params) {
  return request.Post(api.schoolist, params)
}

export function schooltree (params) {
  return request.Post(api.schooltree, params)
}
