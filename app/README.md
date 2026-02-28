# Calicat 图层驱动 Web 应用（本地轻量版）

基于 Calicat MCP 提取的图层结构实现了一个可本地运行的 AI 场景概览页，并按“可嵌入其他 Web 应用”的方式设计为 Web Component。

## 本地运行

```bash
npm install
npm run dev
```

默认访问地址：`http://localhost:5173`

## 生产构建

```bash
npm run build
npm run preview
```

## 作为组件嵌入其他 Web 应用

1. 在宿主应用中引入构建产物（例如 `dist/assets/*.js`）。
2. 在页面中使用自定义元素：

```html
<ai-scene-app
  title="企业级 AI 场景库"
  subtitle="按业务分类聚合，支持搜索与详情事件。"
></ai-scene-app>
```

3. 监听卡片点击事件：

```js
document
  .querySelector("ai-scene-app")
  .addEventListener("card-click", (e) => {
    console.log("用户点击卡片：", e.detail);
  });
```

## 对集成友好的设计点

- 使用 Shadow DOM，降低宿主 CSS 冲突风险。
- 对外只暴露少量属性与事件，方便二次封装成 SDK。
- 数据结构集中在 `src/ai-scene-app.js`，后续可替换为后端接口或 MCP 实时数据。
