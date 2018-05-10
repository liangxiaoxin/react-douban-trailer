/**
 * Created by liangyongxin on 2017/11/20.
 */
import axios from 'axios';

// 创建axios实例
const service = axios.create({
  baseURL: '/api', // api的base_url
  timeout: 30000                  // 请求超时时间
});
// 修改fatch axios 默认配置 加上token
// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  return config;
}, error => {
  Promise.reject(error);
});
// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    let { data } = response;
    console.log( response )

    return data;
  },

  error => {
    console.log('err' + error);// for debug

    return Promise.reject(error);
  }
);

export default service;
