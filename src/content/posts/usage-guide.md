---
title: 博客使用简明教程
published: 2026-10-24
description: '本站的搭建来源、文章与媒体文件的存放位置，以及日常写作和发布流程速查。'
image: ''
tags: [教程, 博客]
category: 教程
draft: false
lang: ''
slug: usage-guide
---

## 一、模板来源

本站使用 **Firefly** 主题模板搭建。

- 模板项目：[CuteLeaf/Firefly](https://github.com/CuteLeaf/Firefly)
- 上游项目：Firefly 基于 [saicaca/fuwari](https://github.com/saicaca/fuwari) 二次开发
- 技术栈：Astro + Svelte + Tailwind CSS
- 开源协议：MIT License（使用时需保留原作者版权声明）

## 二、博客文档的存储路径

所有内容都以 Markdown 文件形式存放在 `src/content/` 目录下（以下均为相对项目根目录的路径）：

| 内容类型 | 存储路径 | 说明 |
| --- | --- | --- |
| 博客文章 | `src/content/posts/` | 一篇 `.md` 或 `.mdx` 文件对应一篇文章 |
| 动态（说说） | `src/content/dynamic/` | 一个文件对应一条动态 |
| 项目展示 | `src/content/projects/` | 对应 `/projects/` 页面 |
| 固定页面 | `src/content/spec/` | `about.md`、`guestbook.md`、`friends.mdx` |

### 新建文章

在项目根目录执行：

```bash
pnpm new-post -- 文章文件名
```

会生成 `src/content/posts/文章文件名.md`，文件路径即文章 URL：`/posts/文章文件名/`。

### 文章头部信息（Frontmatter）

```yaml
---
title: 文章标题
published: 2026-10-24
description: 文章摘要
image: ./cover.avif      # 封面，留空或填 "api" 使用随机图
tags: [标签1, 标签2]
category: 分类
draft: false             # true 为草稿，不会发布
lang: zh-CN              # 仅在文章语言与站点语言不同时填写
pinned: false            # 是否置顶
comment: true            # 是否允许评论
---
```

## 三、媒体文件的存储路径

媒体文件（图片、音频、视频等）有两个存放位置，按用途选择：

### 1. 需要构建优化的图片 → `src/assets/`

```text
src/assets/images/          头像、Logo、壁纸等
src/content/posts/images/   文章配图（也可直接放在文章同目录）
```

引用方式：写相对路径，不加开头的 `/`，例如 `image: ./cover.avif` 或 `assets/images/avatar.avif`。Astro 会在构建时压缩并转换为 WebP/AVIF，适合体积较大的图片，但会增加构建时间。

### 2. 原样访问的静态文件 → `public/`

```text
public/favicon/                 网站图标
public/assets/images/           广告图、赞助二维码等
public/assets/music/            本地音乐（含 cover 封面、lrc 歌词）
public/assets/videos/           背景视频
public/gallery/<相册id>/        相册图片（目录名与 galleryConfig 中的 id 一致）
public/pio/                     看板娘模型文件
```

引用方式：以 `/` 开头，例如 `/favicon/firefly-32.png`、`/gallery/firefly-2026/1.avif`。这些文件不会被优化，请自行压缩后再上传。

> 简单判断：图片要自动压缩进 `src/assets/`；图标、音乐、视频、相册等按固定 URL 访问的放 `public/`。

## 四、使用终端同步修改到仓库

本地改完文章或配置后，需要提交并推送到 GitHub，线上部署平台才会更新。在项目根目录（`Firefly/`）打开 PowerShell，按三步走：

```bash
# 1. 查看当前有哪些改动
git status

# 2. 暂存并提交改动（说明文字按实际内容填写）
git add .
git commit -m "docs: 更新博客内容"

# 3. 推送到远程仓库
git push
```

### 首次使用需配置身份

新电脑只需执行一次：

```bash
git config --global user.name "AWEI"
git config --global user.email "1762936742@qq.com"
```

### 确认远程仓库地址

```bash
git remote -v
```

如果 `origin` 指向的是模板作者的仓库（`CuteLeaf/Firefly`），你没有推送权限，需要换成自己的仓库：

```bash
git remote set-url origin https://github.com/你的用户名/你的仓库名.git
```

本文档所在的仓库 `origin` 已是 `https://github.com/AwayM0/Firefly`，可直接推送。首次 `git push` 时浏览器会弹出 GitHub 授权窗口，登录确认一次即可，之后不再询问。

### 推送前先拉取远程更新

多人协作或换设备编辑时，先拉取再提交，避免冲突：

```bash
git pull --rebase
git push
```

### 只想提交某一篇文章

```bash
git add src/content/posts/文章文件名.md
git commit -m "docs: 新增文章"
git push
```

## 五、常用命令

```bash
pnpm dev                    # 本地开发预览，http://localhost:4321
pnpm build                  # 构建静态站点到 dist/
pnpm preview                # 预览构建结果
pnpm new-post -- 文件名     # 新建文章
pnpm new-d 动态内容         # 新建一条动态
```

站点标题、导航、头像、评论、壁纸等外观配置统一在 `src/config/` 目录下修改。

---

*本教程会随站点配置调整持续更新。*
