import axios from 'axios'
import { Message } from 'element-ui'
// 请求拦截器
axios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem('user-token')}`
  //   console.log(config)
  return config
}, function (err) {
  console.log(err)
})
axios.interceptors.response.use(function (res) {
  return res.data ? res.data : {}
}, function (err) {
  let status = err.response.status
  switch (status) {
    case 400:
      Message.error('400的错误自己看接口文档')
  }
})
