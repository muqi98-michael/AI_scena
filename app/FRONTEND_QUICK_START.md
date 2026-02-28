# AI 场景嵌入（前端精简版）

这是一页版接入说明，适合官网前端同学快速落地。

## 1) 最快方式：iframe

```html
<iframe
  src="https://your-domain.com/ai-scena/"
  style="width: 100%; height: 100vh; border: 0;"
  loading="lazy"
></iframe>
```

### 推荐
- 页面容器给满宽
- 高度先用 `100vh`，再按设计改为固定值（如 `900px`）
- 如果只在一屏展示，可将父容器 `overflow: hidden`

---

## 2) 深度集成：Web Component

```html
<script type="module" src="https://your-domain.com/ai-scena/assets/index-xxxx.js"></script>
<ai-scene-app demo-video-url="https://your-cdn.com/demo.mp4"></ai-scene-app>
```

### 可用属性
- `demo-video-url`：详情页右侧视频地址

---

## 3) 官网菜单如何跳转

菜单“解决方案 -> AI场景方案”点击后直接跳转：

- `https://your-domain.com/ai-scena/`

如需后续支持“直达某页”，建议约定 URL 参数，例如：

- `?view=ai`

---

## 4) 联调快速检查

- [ ] 嵌入后页面正常显示
- [ ] 点击“AI场景方案”能进入本项目
- [ ] AI 卡片列表、详情页切换正常
- [ ] 视频可播放（若配置了 `demo-video-url`）

---

## 5) 常见问题

### 看到旧内容
- 强刷浏览器缓存（Mac：`Cmd + Shift + R`）

### iframe 空白
- 检查目标 URL 可访问
- 检查是否被 CSP / `frame-ancestors` 拦截
