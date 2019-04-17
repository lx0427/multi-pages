import axios from 'axios'

let http = axios.create({
  headers: {
    // 设置默认请求token
    'Authorization': window.sessionStorage.token ? window.sessionStorage.token : '',
    // 大多数的web服务器只能识别form的post的请求，即请求头Content-Type为'application/x-www-form-urlencoded'
    post: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  }
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // console.log(config.headers, '请求配置')
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response && response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default http
