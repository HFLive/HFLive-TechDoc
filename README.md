# HFLive TechDoc 技术文档集合站

HFLive TechDoc 是基于 [VitePress](https://vitepress.dev/) 的华附直播团队技术文档集合站。目前已整合迁移的内容有：

- HFLive13.0 技术指南

## 贡献指南

### 开发环境设置

您需要 [Node.js](https://nodejs.org/) v20 或更高版本和 [pnpm](https://pnpm.io/)。

在克隆仓库后，运行：

```sh
# 安装项目依赖
$ pnpm install
# 启动本地开发服务器
$ pnpm dev
```

执行上述命令后，访问 [http://localhost:5173](http://localhost:5173) 并尝试修改源代码。您将获得实时更新。

### 项目结构

- `.vitepress/`：站点与主题配置
- `index.md`：网站首页
- `docs/`：具体文档内容
