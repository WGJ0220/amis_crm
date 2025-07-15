/*
 * @version: V1.0.0
 * @Author: lixintao
 * @Date: 2024-12-17 17:06:48
 * @LastEditors: lixintao
 * @LastEditTime: 2025-07-11 15:09:18
 * @Descripttion: 
 */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
// 自动引入组件
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// qiankun
import qiankun from "vite-plugin-qiankun";
const target = 'https://b2byyzt-oversea-test.10jqka.com.cn';
// const target = 'http://120.76.228.84:8066';
export default defineConfig(({ command, mode }) => {
  const envMap = loadEnv(mode, process.cwd(), '');
  return {
    base: envMap.VITE_APP_BASEURL,
    plugins: [
      vue(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
          }),
        ],
      }),
      qiankun("data_center", {
        useDevMode: true,
      }),
    ],
    resolve: {
      alias: {
        '@': '/src',
        '@styles': '/src/styles',
      },
    },
    css: {
      modules: {
        generateScopedName: '[name]_[local]_[hash:base64:5]'
      },
    },
    server: {
      host: '127.0.0.1',
      port: 9091,
      cors: true,
      proxy: {
        '/simulated-stocks-web-saas': {
          target,
          changeOrigin: true,
        },
        '/yyzt-web': {
          target,
          changeOrigin: true,
        }
      }
    },
    build: {
      outDir: 'data_center',
    },
  }
});
