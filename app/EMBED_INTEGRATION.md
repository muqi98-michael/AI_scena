# AI 场景项目嵌入接入文档

本文档用于指导金蝶官网（或其他外部 Web 系统）嵌入本项目并在其页面内展示。

## 1. 项目地址约定

- **示例线上地址**：`https://your-domain.com/ai-scena/`
- **本地开发地址**：`http://localhost:5176/`

> 生产环境请统一使用 HTTPS。

---

## 2. 嵌入方案一：iframe（推荐，最快上线）

适用于快速接入、强隔离场景。对官网改动最小，稳定性高。

### 2.1 示例代码

```html
<iframe
  src="https://your-domain.com/ai-scena/"
  style="width: 100%; height: 100vh; border: 0;"
  loading="lazy"
  referrerpolicy="strict-origin-when-cross-origin"
></iframe>
```

### 2.2 推荐配置

- `width`: `100%`
- `height`: 按页面需求（如 `900px` / `100vh`）
- `border`: `0`
- `loading`: `lazy`

### 2.3 优点

- 样式、脚本完全隔离，不影响官网现有系统
- 上线风险低，维护简单

---

## 3. 嵌入方案二：Web Component（深度集成）

适用于希望将本项目作为“页面内组件”直接渲染在官网 DOM 的场景。

### 3.1 示例代码

```html
<script type="module" src="https://your-domain.com/ai-scena/assets/index-xxxx.js"></script>
<ai-scene-app demo-video-url="https://your-cdn.com/demo.mp4"></ai-scene-app>
```

### 3.2 说明

- 组件标签：`<ai-scene-app>`
- 可选属性：
  - `demo-video-url`: 详情页右侧演示视频地址

### 3.3 注意

- 构建产物带 hash（`index-xxxx.js`），每次发布可能变化
- 建议后续提供稳定 SDK 入口文件（如 `ai-scena-widget.js`）

---

## 4. 官网菜单跳转建议

若官网菜单“解决方案 -> AI场景方案”需要直接进入本项目，可直接跳转到：

- `https://your-domain.com/ai-scena/`

如需直达内部某个视图（例如直接进 AI 场景页而非入口页），建议后续增加 URL 参数约定，例如：

- `https://your-domain.com/ai-scena/?view=ai`

---

## 5. 部署与安全要求

1. 使用 HTTPS 域名部署
2. 若采用 iframe，确保服务端响应头允许被官网域名嵌入（`frame-ancestors`）
3. 静态资源建议走 CDN，加速首屏加载
4. 如需跨页通信（宿主页面与 iframe），使用 `window.postMessage`

---

## 6. 联调检查清单

- [ ] 官网页面可正常加载嵌入内容
- [ ] 首屏样式与设计稿一致
- [ ] 菜单“AI场景方案”跳转路径正确
- [ ] 卡片列表/详情页可正常切换
- [ ] 视频资源可播放（若配置了 `demo-video-url`）
- [ ] 移动端/窄屏显示正常

---

## 7. 常见问题

### Q1：嵌入后显示空白？

- 检查 `src` 地址是否可访问
- 检查是否被 CSP 或 `frame-ancestors` 拦截

### Q2：样式冲突？

- 采用 iframe 可完全规避
- Web Component 模式下已使用 Shadow DOM，冲突概率较低

### Q3：如何控制高度？

- iframe 模式由宿主控制 `height`
- 组件模式可由宿主容器样式控制

