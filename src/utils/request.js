import axios from 'axios'
import qs from 'qs'
import { CHANGE_LOAD_STATUS } from '../store/action-types'
import store from '../store/main'

/* 请求时的拦截 */
axios.interceptors.request.use(function (config) {
  store.dispatch(CHANGE_LOAD_STATUS, true)
  return config
}, function (error) {
  return Promise.reject(error)
})

/* 响应时拦截 */
axios.interceptors.response.use(function (response) {
  store.dispatch(CHANGE_LOAD_STATUS, false)
  return response
}, function (error) {
  return Promise.reject(error)
})

/* 全局配置 */
/* 超时时间 */
axios.defaults.timeout = 15000
axios.defaults.baseURL = '/uums/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

class request {
  static Get (url) {
    /* 通过Promise完成异步操作，将数据进行初步处理输出为Json对象 */
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then((res) => {
          switch (res.status) {
            case 0:
              break
            default:
              resolve(res.data)
              break
          }
        }).catch((error) => {
          reject(error)
        })
    })
  }
  static Post (url, data) {
    /* 通过Promise完成异步操作，将数据进行初步处理输出为Json对象 */
    const cloneData = qs.stringify(data, { skipNulls: true })
    const P = new Promise((resolve, reject) => {
      axios.post(url, cloneData)
        .then((res) => {
          switch (res.status) {
            case 0:
              break
            default:
              resolve(res.data)
              break
          }
        }).catch((error) => {
          reject(error)
        })
    })
    return P
  }
}

export default request
