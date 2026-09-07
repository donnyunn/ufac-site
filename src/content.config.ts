import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 블로그 글: src/content/blog/ko/*.md (한국어), src/content/blog/en/*.md (영어)
// 파일 이름이 URL 슬러그가 됩니다. 예) ko/hello-ufac.md -> /blog/hello-ufac/
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
