# 项目名称

基于 Vue 3 的前端项目，使用 Vite 构建工具和 Tailwind CSS 框架。

## 技术栈

- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite
- **UI 组件库**: Ant Design Vue 4.x
- **状态管理**: Pinia
- **路由**: Vue Router 4
- **HTTP 客户端**: Axios
- **国际化**: Vue I18n
- **图表库**: ECharts 5
- **CSS 框架**: Tailwind CSS

## 环境要求

- Node.js 18+
- npm 10+

## 项目安装与运行

**安装依赖**

```
pnpm install
```

**开发环境运行**

```
pnpm dev
```

此命令会同时启动：

- Vite 开发服务器
- Tailwind CSS 监听编译

**其他命令**

- **构建生产环境**:

  ```
  pnpm build
  ```

- **测试环境构建**:

  ```
  pnpm testing
  ```

- **预览生产构建**:

  ```
  pnpm preview
  ```

## 项目结构说明

```
项目根目录/
├── public/                # 静态资源
├── src/
│   ├── assets/            # 静态资源
│   ├── components/        # 公共组件
│   ├── composables/       # 组合式函数
│   ├── pages/             # 页面组件
│   ├── router/            # 路由配置
│   ├── stores/            # Pinia 状态管理
│   ├── styles/            # 样式文件
│   │   └── index.css      # Tailwind CSS 入口文件
│   ├── utils/             # 工具函数
│   ├── App.vue            # 根组件
│   └── main.ts            # 应用入口
├── tailwind.config.js     # Tailwind 配置
├── tsconfig.json          # TypeScript 配置
└── vite.config.ts         # Vite 配置
```

## 主要功能特性

1. **状态管理**: 使用 Pinia 进行全局状态管理
2. **国际化**: 支持多语言 (Vue I18n)
3. **UI 组件**: 基于 Ant Design Vue 的组件库
4. **图表**: 使用 ECharts 实现数据可视化
5. **API 请求**: 使用 Axios 进行 HTTP 请求
6. **CSS 工具**: 使用 Tailwind CSS 进行样式开发

## 开发指南

### 添加新页面

1. 在 `src/pages` 下创建新的 Vue 组件
2. 在 `src/router` 中配置新路由
3. 如需状态管理，在 `src/stores` 中创建新的 store

### 样式开发

使用 Tailwind CSS 工具类进行样式开发，如需自定义样式，可在 `src/styles/index.css` 中添加。

### API 调用

项目已集成 Axios，建议将 API 请求封装在 `src/utils` 或各 store 中。

## 注意事项

1. 生产环境构建前会自动运行 `vue-tsc` 进行类型检查
2. Tailwind CSS 会监听 `src/styles/index.css` 并输出到 `public/tail.css`
3. 项目使用了 Vue 3 的 Composition API 风格
