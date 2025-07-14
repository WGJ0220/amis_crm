import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{html,js,vue,jsx,tsx}', // 根据你的项目结构调整路径
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config;
