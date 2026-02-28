# AI Scena 项目说明

本仓库用于实现可嵌入的 AI 场景展示页面，包含：

- 参考金蝶官网第一屏的入口首页
- AI 场景列表页（3 行完整卡片）
- AI 场景详情页（概览 / 功能详情 / 应用案例 / 常见问题）

## 目录结构

- `app/`：前端项目（Vite）
- `app/src/`：核心源码
- `app/public/`：静态资源（Logo、首屏图等）

## 本地运行

```bash
cd app
npm install
npm run dev
```

默认地址以终端输出为准（例如 `http://localhost:5176/`）。

## 生产构建

```bash
cd app
npm run build
npm run preview
```

## 接入与部署文档

- 总体接入文档：`app/EMBED_INTEGRATION.md`
- 前端精简版：`app/FRONTEND_QUICK_START.md`
- 运维部署版：`app/OPS_DEPLOYMENT.md`

## 说明

- 菜单“解决方案 -> AI场景方案”可进入本项目 AI 场景展示页
- 项目支持 iframe 嵌入，也支持 Web Component 方式接入
