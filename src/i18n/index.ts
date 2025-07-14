/*
 * @version: V1.0.0
 * @Author: lixintao
 * @Date: 2025-07-03 17:06:11
 * @LastEditors: lixintao
 * @LastEditTime: 2025-07-08 11:37:21
 * @Descripttion: 
 */
// src/i18n.js
import { createI18n } from 'vue-i18n';
import en from './locales/en.ts';
import zh from './locales/zh.ts';

const i18n = createI18n({
  locale: 'en', // 设置默认语言
  messages: {
    en,
    zh
  }
});

export default i18n;