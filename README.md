# Uniquefacturing 홈페이지

Uniquefacturing (UFAC) 의 공식 홈페이지 소스입니다. Astro로 빌드해 GitHub Pages에 배포합니다.

- 사이트: https://u-fac.kr (영어: https://u-fac.kr/en/)
- 성격: 외주 영업용이 아니라 보유 기술을 조용히 소개하는 쇼케이스
- 언어: 한국어 기본, 영어 병행

## 개발

```bash
npm install
npm run dev      # http://localhost:4321 에서 실시간 미리보기
npm run build    # dist/ 에 정적 파일 생성
npm run preview  # 빌드 결과 미리보기
```

`master` 브랜치에 push하면 GitHub Actions가 자동으로 빌드·배포합니다. 1~2분 뒤 사이트에 반영됩니다. 빌드 오류가 있으면 배포가 실패하고 이전 버전이 유지되므로, push 전에 `npm run build`로 확인하는 것을 권장합니다.

## 홈 화면 구성

1. 첫 화면: 마크, 태그라인 "기술 공방 / Engineering Workshop", 소개 한 문장
2. 다루는 기술: 역량 타일 4개 (하드웨어·펌웨어, 임베디드 소프트웨어, 영상인식, 무선통신)
3. 제작품들: 프로젝트 카드 3개 (사진, 한 줄 설명, 태그)
4. 노트: 블로그 최신 글 3개 (자동)
5. 푸터: 연락 이메일

## 어디를 고치면 되는지

| 바꾸고 싶은 것 | 파일 |
|---|---|
| 홈 화면의 모든 문구, 기술 타일, 프로젝트 카드, 이메일 | `src/data/home.ts` (ko / en 블록) |
| 헤더 메뉴 이름, 블로그 페이지 문구 | `src/i18n.ts` |
| 색상, 글꼴, 여백, 카드 모양 | `src/styles/global.css` |
| 홈 화면의 섹션 구조 | `src/components/Home.astro` |
| 헤더, 푸터 | `src/components/Header.astro`, `Footer.astro` |
| 페이지 공통 head (파비콘, OG 태그 등) | `src/layouts/BaseLayout.astro` |
| 새 페이지 추가 | `src/pages/` 에 `.astro` 파일 생성 (경로가 URL이 됨) |
| 사이트 도메인 | `astro.config.mjs` 의 `site` |

## 폴더 구조

```
src/
  pages/              파일 경로 = URL (index.astro -> /, en/index.astro -> /en/)
    blog/             노트 목록과 글 페이지 (한국어)
    en/blog/          노트 목록과 글 페이지 (영어)
  layouts/            BaseLayout (공통 head·헤더·푸터), PostLayout (글 페이지)
  components/         Home, Header, Footer, PostList
  data/home.ts        홈 화면 문구와 목록 (ko / en)
  i18n.ts             언어별 UI 문자열, 언어 전환 경로 계산
  content.config.ts   블로그 컬렉션 정의
  content/blog/ko/    한국어 노트 (.md)
  content/blog/en/    영어 노트 (.md, 한국어와 같은 파일 이름)
  content/blog/images/  노트에서 쓰는 이미지 (빌드 시 자동 최적화)
  styles/global.css
public/               그대로 복사되는 정적 파일
  CNAME               커스텀 도메인
  images/logo/png/    로고 PNG 원본
  images/logo/svg/    로고 SVG (logo-no-background: 워드마크+마크, mark-*: 마크 단독)
  images/projects/    프로젝트 카드 사진 (현재는 placeholder-*.svg)
docs/                 내부 참고 문서 (사이트에 게시되지 않음)
.github/workflows/    push 시 자동 빌드·배포
```

## 브랜드

- 마크 색: `#0f3fff`, 워드마크 색: `#010c80`
- 헤더는 `logo-no-background.svg`, 파비콘·첫 화면·푸터는 `mark-color.svg` / `mark-white.svg`

## 노트 (블로그) 쓰기

`src/content/blog/ko/슬러그.md` 파일을 만들고 상단에 메타데이터를 적습니다. 파일 이름이 URL이 됩니다.

```markdown
---
title: 제목
description: 한 줄 요약
pubDate: 2026-09-08
tags: [vision]
draft: false
---

본문
```

영어 글은 `src/content/blog/en/`에 같은 파일 이름으로 둡니다. `draft: true`면 빌드에서 제외됩니다. 글이 하나도 없을 때 빌드에 나오는 "collection is empty" 경고는 정상입니다.

이미지·영상 첨부 방법과 예시 글 형식은 [docs/blog-guide.ko.md](docs/blog-guide.ko.md)를 참고하세요. 새 글을 쓸 때 이 파일을 복사해서 시작하면 됩니다.

## 프로젝트 사진 교체

`public/images/projects/` 에 사진을 넣고 `src/data/home.ts` 의 `image` 경로를 바꿉니다. 카드 비율은 4:3이며, 다른 비율은 가운데 기준으로 잘려 표시됩니다.

## 도메인과 배포

- 도메인: `u-fac.kr` (Squarespace Domains에서 DNS 관리). `ufac.dev`는 이 도메인으로 리다이렉트됩니다.
- GitHub Pages 배포 방식은 GitHub Actions입니다. 커스텀 도메인은 리포지토리 Settings → Pages 의 값이 기준이며, 루트의 `CNAME` 파일은 GitHub이 그 설정에 맞춰 자동 관리합니다.
- 도메인의 메일은 Google Workspace가 담당하므로 DNS의 MX, SPF, DKIM 레코드는 건드리지 않습니다.
