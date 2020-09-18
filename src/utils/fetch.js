// 1. 引入 axios
import axios from "axios"
// 配置公共的ulr 
let baseURL = 'https://www.linweiqin.cn/api/public/v1'

const instance = axios.create({
    baseURL,
    timeout: 7000,
    headers: {}
  });

// 配置一个 请求 的拦截器
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// 响应的拦截器
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

// 导出自定义的 axios
export default instance 