---
title: 블로그를 시작합니다
description: Uniquefacturing 기술 블로그의 첫 글이자, 글 작성 방법을 정리한 안내서입니다.
pubDate: 2026-09-07
tags: [공지, 안내]
---

Uniquefacturing(UFAC)의 기술 블로그를 시작합니다. 영상인식 기반 재고인식, 무선통신 기반 조명제어 등 실제 프로젝트에서 얻은 경험을 정리해 올릴 예정입니다.

이 글은 동시에 **글을 어떻게 쓰는지** 보여주는 예시이기도 합니다. 새 글을 쓸 때 이 파일을 복사해서 시작하면 됩니다.

## 새 글 만들기

1. `src/content/blog/ko/` 폴더에 `원하는-슬러그.md` 파일을 만듭니다. 파일 이름이 그대로 URL이 됩니다.
2. 맨 위 `---` 사이에 제목, 설명, 날짜, 태그를 적습니다.
3. 아래에 본문을 마크다운으로 씁니다.
4. 영어 버전이 필요하면 `src/content/blog/en/` 폴더에 **같은 파일 이름**으로 하나 더 만듭니다.

아직 공개하고 싶지 않은 글은 `draft: true`를 추가하면 빌드에서 제외됩니다.

## 이미지 넣기

이미지는 md 파일 근처에 두고 상대 경로로 참조합니다. 빌드 때 자동으로 최적화됩니다.

![UFAC 마크](../images/ufac-mark.png)

```markdown
![UFAC 마크](../images/ufac-mark.png)
```

## 영상 넣기

짧은 데모 클립은 `public/videos/` 폴더에 넣고 HTML 태그로 삽입합니다. 마크다운 안에 HTML을 그대로 쓸 수 있습니다.

```html
<video src="/videos/demo.mp4" controls muted playsinline></video>
```

긴 영상은 YouTube에 올리고 embed 코드를 붙여 넣는 편이 좋습니다. 리포지토리 용량 제한 때문입니다.

## 코드 블록

```c
void led_set(uint8_t channel, uint8_t level) {
    pwm_write(channel, level);
}
```

> 인용문, 표, 목록 같은 일반 마크다운 문법이 모두 동작합니다.
