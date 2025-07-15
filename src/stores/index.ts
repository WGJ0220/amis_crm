import { defineStore } from 'pinia';

// 创建一个页面跳转时的状态，用于标记新增（add），修改/编辑（edit），查看/详情（detail）状态
export const usePageInfo = defineStore('pageInfo', {
    state: () => {
        return {
          type: 'add',
          pageData: {}
        }
    },
});
