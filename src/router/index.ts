/*
 * @version: V1.0.0
 * @Author: lixintao
 * @Date: 2023-10-30 10:32:26
 * @LastEditors: lixintao
 * @LastEditTime: 2025-05-26 13:43:06
 * @Descripttion: 路由
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './router.ts';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes(),
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.title) {
    // 判断是否有标题
    document.title = `${to.meta.title}`;
  }
  // 路由授权
  if (to.meta.authorize) {
    next();
  }
});

export default router;
