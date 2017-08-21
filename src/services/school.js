import request from '../utils/request'
import api from '../utils/api'

/* 查询接口 */
export async function query (params) {
  const result = await request({
    url: api.schoolist,
    method: 'post',
    data: params
  })
  return result
}
