# 其他

网页从 `items.json` 读取卡片。可按需要添加任意数量条目：

```json
{
  "title": "标题",
  "description": "简介",
  "label": "链接文字 →",
  "url": "链接地址",
  "external": true
}
```

- `external: true` 表示在新标签页打开外部链接。
- 站内链接不用写 `external`。
- 在 `items.json` 最外层数组中添加或删除对象，页面会自动显示对应数量的卡片。
