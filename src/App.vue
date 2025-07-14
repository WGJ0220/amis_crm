<!--
 * @version: V1.0.0
 * @Author: lixintao
 * @Date: 2025-01-14 10:36:26
 * @LastEditors: lixintao
 * @LastEditTime: 2025-07-08 13:50:03
 * @Descripttion: 
-->
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
const router = useRouter();
import { ref } from 'vue';
import { useTheme } from '@/stores/theme';
const theme = useTheme();
const isDev = process.env.NODE_ENV === 'development';
const storageMenu = JSON.parse(localStorage.menuList || '{}').children || [];
const menuList = ref([...storageMenu]);
const selectedKeys = ref<string[]>([]);
const openKeys = ref<string[]>([]);
const locale = ref<any>({});
const menuClick = (item: any) => {
  try {
    const {keyPath} = item;
    router.push({name: keyPath[1]});
  } catch (e) {
    console.warn(e);
  }
};
onMounted(() => {});
</script>

<template>
  <a-layout class="a-layout" v-if="isDev">
      <a-layout-sider
        :style="{
          overflowX: 'hidden',
          overflowY: 'auto',
          height: '100vh',
          width: '200px',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }"
      >
        <a-menu
          v-model:selectedKeys="selectedKeys"
          v-model:openKeys="openKeys"
          mode="inline"
          :style="{ height: '100%', borderRight: 0, background: 'f9f9f9' }"
          @click="menuClick"
        >
          <a-sub-menu v-for="menuSub in menuList" :key="menuSub.name">
            <template #title>
              <span>
                <user-outlined />
                {{ menuSub.title }}
              </span>
            </template>
            <a-menu-item
              v-for="menuItem in menuSub.children"
              :key="menuItem.name"
            >
              {{ menuItem.title }}
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout :style="{ marginLeft: '200px' }">
        <a-layout-content class="a-layout-content">
          <a-config-provider :locale="locale">
            <router-view />
          </a-config-provider>
        </a-layout-content>
      </a-layout>
  </a-layout>
  <a-config-provider :locale="locale" :theme="{
    token: theme.antdToken || {},
  }" v-else>
    <router-view />
  </a-config-provider>
</template>

<style scoped>
</style>
