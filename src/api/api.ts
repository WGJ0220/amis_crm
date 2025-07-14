/*
 * @version: V1.0.0
 * @Author: lixintao
 * @Date: 2025-05-23 15:10:57
 * @LastEditors: lixintao
 * @LastEditTime: 2025-07-08 11:36:01
 * @Descripttion: 
 */
import { createAxios } from './base.ts';
const requestObj = createAxios({
  baseURL: '',
});

/**
 * 标准化接口调用
 * @param url 请求地址
 * @returns 返回统一格式 {flag: 0|错误码, msg: '状态信息', data: 响应数据}
 */
export const apiRequest = (url: string) => {
  return requestObj.request({
    url,
  });
};