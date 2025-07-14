/*
 * @version: V1.0.0
 * @Author: lixintao
 * @Date: 2025-01-14 10:36:26
 * @LastEditors: lixintao
 * @LastEditTime: 2025-07-07 11:18:45
 * @Descripttion: 
 */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { message } from 'ant-design-vue';
const timeout = 3000;
const logoutFlag = 401;
const requestMap = new Map();
export const createAxios = (config?: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    timeout, //超时配置
    withCredentials: true, //跨域携带cookie
    ...config, // 自定义配置覆盖基本配置
  });
  // 添加请求拦截器
  instance.interceptors.request.use(
    function (instanceConfig) {
      instanceConfig.cancelToken = new axios.CancelToken(cancel => {
        // 是否允许重复请求
        if (!instanceConfig.headers.repeatRequest) {
          const requestData = JSON.stringify(instanceConfig.url);
          if (requestMap.has(requestData)) {
            // 3秒内map中存在该请求，不再重复发起
            if (
              new Date().getTime() - requestMap.get(requestData) <
              timeout
            ) {
              cancel('重复请求');
            }
          } else {
            // 存储请求
            requestMap.set(requestData, new Date().getTime());
          }
        }
      });
      // 在发送请求之前做些什么 默认增加鉴权token
      instanceConfig.headers.token = localStorage.getItem('Token');
      return instanceConfig;
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );

  // 添加响应拦截器
  instance.interceptors.response.use(
    function (response) {
      const requestData = JSON.stringify(response.config.url);
      // 请求获得响应后，将该请求从map中移除，以使后面的请求正常发送。
      if (requestMap.has(requestData)) {
        requestMap.delete(requestData);
      }
      console.log('response', response);
      // 对响应数据做点什么
      const { msg, flag, data } = response.data;
      if (flag !== 0) {
        message.error(msg);
        return Promise.reject(msg);
      } else {
        // 正常返回
        return Promise.resolve(data);
      }
    },
    function (error) {
      // 对响应错误做点什么
      if (error.response) {
        if (error.response.status === logoutFlag) {
          // 跳转登陆
          return error;
        }
      }
      return Promise.reject(error);
    }
  );
  return instance;
};
