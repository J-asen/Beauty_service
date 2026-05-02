# 花糖亲子美妆预约

这是从静态 `index.html` 迁移后的 Next.js App Router 项目。

## 本地运行

```bash
npm install
npm run dev
```

默认访问地址通常是 `http://localhost:3000`。

当前 `npm run dev` 使用的是项目内的直连启动脚本 `[scripts/dev-server.cjs]`，目的是绕过某些 Windows 环境下 `next dev` 子进程 `spawn EPERM` 的问题。

如果安装依赖时提示网络连接被拒绝，通常是当前终端环境不能访问 npm registry。可以在系统终端进入项目目录后执行：

```bash
npm install --registry=https://registry.npmmirror.com --cache .npm-cache
```

## 构建

```bash
npm run build
```

Netlify 会使用 `netlify.toml` 中的配置执行 `npm run build`，发布目录为 `.next`。

## Supabase 预留

当前预约表单会提交到 `/api/bookings`，接口只做校验并返回成功，不会写入数据库。

后续接 Supabase 时，建议只在服务端接口里使用数据库写入逻辑。`SUPABASE_SERVICE_ROLE_KEY` 只能放在服务端环境变量里，不能加 `NEXT_PUBLIC_`，否则会暴露给浏览器。

可参考 `.env.example` 配置环境变量。
