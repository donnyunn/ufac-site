---
title: Starting the blog
description: The first post on the Uniquefacturing tech blog, doubling as a guide to how posts are written.
pubDate: 2026-09-07
tags: [notice, guide]
---

This is the start of the Uniquefacturing (UFAC) tech blog. Expect notes drawn from real projects, such as vision-based inventory recognition and wireless lighting control.

This post is also an example of **how a post is written**. Copy this file to start a new one.

## Creating a post

1. Add `your-slug.md` under `src/content/blog/en/`. The file name becomes the URL.
2. Fill in the title, description, date, and tags between the `---` lines at the top.
3. Write the body in Markdown below.
4. For a Korean version, add a file with the **same name** under `src/content/blog/ko/`.

Add `draft: true` to keep a post out of the build until it is ready.

## Images

Keep images near the Markdown file and reference them with a relative path. They are optimized automatically at build time.

![UFAC mark](../images/ufac-mark.png)

```markdown
![UFAC mark](../images/ufac-mark.png)
```

## Video

Short demo clips go in `public/videos/` and are embedded with a plain HTML tag. HTML works inside Markdown.

```html
<video src="/videos/demo.mp4" controls muted playsinline></video>
```

For longer footage, upload to YouTube and paste the embed code, since the repository has size limits.

## Code blocks

```c
void led_set(uint8_t channel, uint8_t level) {
    pwm_write(channel, level);
}
```

> Blockquotes, tables, lists, and the rest of standard Markdown all work.
