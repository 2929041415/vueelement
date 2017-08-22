import request from '../utils/request'
import api from '../utils/api'

/* 查询接口 */
export function querytree (params) {
  return request.Post(api.schooltree, params)
}

