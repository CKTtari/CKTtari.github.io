# Articles

每篇文章使用一个 Markdown 文件，并在文件开头填写 Front Matter：

```markdown
---
title: 文章标题
date: 2026-09-03
summary: 文章摘要
---

正文从这里开始。
```

将文章文件名和 `slug` 写入 `articles.json`：

```json
{
  "slug": "a-small-note",
  "file": "a-small-note.md"
}
```

文章插图放在 `assets/articles/images/`，正文中使用相对路径：

```markdown
![图片说明](images/example.jpg)
```

以后只需新增 `.md` 文件和一条 `articles.json` 记录，Writing 页面会自动列出文章。
