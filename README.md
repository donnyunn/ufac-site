# ufac.dev

Uniquefacturing (UFAC) 홈페이지. Astro로 빌드해 GitHub Pages에 배포합니다.

## 개발

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 에 정적 파일 생성
npm run preview  # 빌드 결과 미리보기
```

## 구조

```
src/
  pages/            파일 경로 = URL (index.astro -> /, en/index.astro -> /en/)
  layouts/          공통 레이아웃 (BaseLayout, PostLayout)
  components/       헤더, 푸터, 글 목록
  content/blog/ko/  한국어 블로그 글 (.md)
  content/blog/en/  영어 블로그 글 (.md)
  content/blog/images/  글에서 쓰는 이미지
  styles/global.css
  i18n.ts           언어별 문자열과 경로 유틸
public/             그대로 복사되는 정적 파일 (CNAME, 로고, 영상)
.github/workflows/  push 시 자동 빌드·배포
```

## 글 쓰기

`src/content/blog/ko/슬러그.md` 파일을 만들고 상단에 메타데이터를 적습니다.

```markdown
---
title: 제목
description: 한 줄 요약
pubDate: 2026-09-07
tags: [vision]
draft: false
---

본문
```

영어 글은 `src/content/blog/en/`에 같은 파일 이름으로 둡니다. `master`에 push하면 1~2분 뒤 https://ufac.dev 에 반영됩니다.

이미지·영상 첨부 방법과 예시 글 형식은 [docs/blog-guide.ko.md](docs/blog-guide.ko.md)를 참고하세요. 새 글을 쓸 때 이 파일을 복사해서 시작하면 됩니다.
