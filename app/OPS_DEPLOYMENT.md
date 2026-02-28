# AI 场景项目部署文档（运维版）

本文档用于将 `app/` 构建产物部署到生产环境，并支持被官网嵌入。

## 1. 构建

在项目目录执行：

```bash
cd app
npm ci
npm run build
```

构建产物目录：

- `app/dist/`

---

## 2. 推荐部署结构

建议部署到子路径，例如：

- `https://your-domain.com/ai-scena/`

静态文件根目录示例：

- `/var/www/ai-scena/dist`

---

## 3. Nginx 示例（子路径部署）

```nginx
server {
    listen 443 ssl http2;
    server_name your-domain.com;

    # 你的证书配置...
    # ssl_certificate ...
    # ssl_certificate_key ...

    # AI 场景项目
    location /ai-scena/ {
        alias /var/www/ai-scena/dist/;
        index index.html;
        try_files $uri $uri/ /ai-scena/index.html;
    }

    # 静态资源缓存（按需）
    location ~* ^/ai-scena/assets/.*\.(js|css|png|jpg|jpeg|gif|svg|webp|woff2?)$ {
        alias /var/www/ai-scena/dist/assets/;
        access_log off;
        expires 30d;
        add_header Cache-Control "public, max-age=2592000, immutable";
    }
}
```

> 若项目放在根路径 `/`，需要对应调整 `location` 与 `try_files`。

---

## 4. 允许 iframe 嵌入（如官网以 iframe 接入）

如果官网和项目同域可简化处理；跨域时需放开 `frame-ancestors`。

示例（仅允许指定官网域名嵌入）：

```nginx
add_header Content-Security-Policy "frame-ancestors 'self' https://www.kingdee.com" always;
```

> 不建议使用 `*` 全放开。

---

## 5. 发布步骤建议

1. 拉取最新代码
2. `npm ci && npm run build`
3. 同步 `dist/` 到服务器目录
4. `nginx -t` 校验配置
5. `nginx -s reload` 平滑重载
6. 回归检查页面与嵌入链路

---

## 6. 回滚策略

建议保留最近 2~3 个版本目录，例如：

- `/var/www/ai-scena/releases/2026-02-28-1/`
- `/var/www/ai-scena/releases/2026-02-28-2/`

通过软链切换：

```bash
ln -sfn /var/www/ai-scena/releases/2026-02-28-2 /var/www/ai-scena/dist
nginx -s reload
```

---

## 7. 线上验收清单

- [ ] `https://your-domain.com/ai-scena/` 可访问
- [ ] 首页首屏与设计一致
- [ ] “AI场景方案”跳转正常
- [ ] AI 场景列表/详情页交互正常
- [ ] 官网嵌入页面可正常显示（若 iframe）
- [ ] 无明显 4xx/5xx 错误日志

