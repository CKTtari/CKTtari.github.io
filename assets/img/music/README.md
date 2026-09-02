# Music data

`music.json` is the data source for the Archive Music page.

Each section contains an `id`, a Chinese `title`, and an `items` array. Each item uses:

```json
{
  "title": "作品名称",
  "artist": "艺人",
  "type": "Single / EP / Album / Compilation",
  "cover": "cover-file.jpg"
}
```

Put cover images in this folder and use their exact filenames in `cover`. The page displays the cover by default and shows the title, artist, and type on hover or keyboard focus.
