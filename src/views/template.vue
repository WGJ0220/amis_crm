<!--
 * @version: V1.0.0
 * @Author: lixintao
 * @Date: 2025-05-23 14:34:08
 * @LastEditors: lixintao
 * @LastEditTime: 2025-07-08 13:27:33
 * @Descripttion: 
-->
<script setup lang="ts">
// const env = import.meta.env.VITE_APP_ENV;
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <!-- <p>{{ env }}</p> -->
  <p>{{ t('message.hello', {name: 'word'}) }}</p>
</template>