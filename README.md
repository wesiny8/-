# GitHub Pages 版本

`github-pages/` 是作品集的纯静态版本，可直接部署到 GitHub Pages。它保留黑色左右对开文件夹、便利贴详情、移动端滚动、关闭操作和减少动态效果支持。

GitHub Pages 不运行服务端程序，所以管理员登录、数据库写入和图片上传继续由原 Sites 网站提供。静态页面顶部的“管理内容”会打开受保护的 Sites 管理页。

仓库启用 GitHub Pages 并将 Source 设为 **GitHub Actions** 后，`.github/workflows/pages.yml` 会在每次推送到 `main` 时发布 `github-pages/`。

