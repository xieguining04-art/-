# TengYoda Logistics 文章发布系统使用说明

本网站已加入 GitHub Pages 原生 Jekyll Blog 系统。现有 HTML 页面继续保留，不需要 WordPress 或数据库。

## 发布一篇新文章

1. 登录 GitHub，打开当前网站仓库。
2. 打开 `_posts` 文件夹。
3. 点击 **Add file → Create new file**。
4. 文件名必须使用：`YYYY-MM-DD-英文关键词.md`。
   例如：`2026-08-25-40hq-container-capacity.md`
5. 复制 `_templates/article-template.md` 的内容。
6. 修改文章标题、SEO 标题、description、category 和正文。
7. 点击 **Commit changes**。
8. GitHub Pages 会自动构建。文章会自动出现在 `https://tengyodalogistics.com/blog.html`。

## 文章网址

文件名：`2026-08-25-40hq-container-capacity.md`

生成网址通常为：`https://tengyodalogistics.com/blog/40hq-container-capacity/`

## 删除文章

进入 `_posts`，打开对应 `.md` 文件并删除，Commit 后网站会自动更新。

## SEO 发布规则

- 每篇文章只解决一个主要搜索问题。
- `title` 自然可读；`seo_title` 尽量包含核心关键词。
- `description` 建议约 150–160 个英文字符。
- 正文尽量使用真实运输经验，不要大量复制其他网站内容。
- 使用 H2/H3 分层，不要在正文再次使用 H1。
- 文章内适当链接到 Services、Routes、Quote 和其他相关文章。
- 运价、法规、船期等会变化的信息，要写清日期或条件并定期更新。

## 推荐发布频率

每周 1–2 篇即可。优先发布真实客户经常询问的问题和真实运输案例。
