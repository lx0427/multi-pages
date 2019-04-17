import axios from 'axios'

// 设置默认请求token
axios.defaults.headers.common['Authorization'] = window.sessionStorage.token ? window.sessionStorage.token : ''

// 大多数的web服务器只能识别form的post的请求，即请求头Content-Type为'application/x-www-form-urlencoded'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 添加请求拦截器
axios.interceptors.request.use(function (request) {
  // 在发送请求之前做些什么
  return request
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response && response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default axios
