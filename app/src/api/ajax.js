//对于axios进行二次封装
import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css"

console.log(nprogress);
const requests = axios.create({
  baseURL: ' http://gmall-h5-api.atguigu.cn/api',
  timeout: 5000
})
//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
  //config:配置对象，对象里面有一个属性很重要，header 请求头
  nprogress.start()
  return config
})
//响应拦截器 
requests.interceptors.response.use((res) => {
  //成功的回调函数，
  nprogress.done()
  return res.data;

}, (error) => {
  //相应失败的回调函数
  return Promise.reject(new Error('faile'))

})

export default requests;