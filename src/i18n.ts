export type Lang = 'ko' | 'en';

export const ui = {
  ko: {
    nav_about: '소개',
    nav_focus: '주력 분야',
    nav_blog: '블로그',
    nav_contact: '연락처',
    switch_label: 'EN',
    blog_title: '블로그',
    blog_description: 'Uniquefacturing의 기술 노트',
    blog_empty: '아직 게시된 글이 없습니다.',
    back_to_list: '← 블로그 목록',
    updated: '수정',
    menu_open: '메뉴 열기',
    home_label: 'Uniquefacturing 홈',
  },
  en: {
    nav_about: 'About',
    nav_focus: 'Focus',
    nav_blog: 'Blog',
    nav_contact: 'Contact',
    switch_label: 'KO',
    blog_title: 'Blog',
    blog_description: 'Technical notes from Uniquefacturing',
    blog_empty: 'No posts yet.',
    back_to_list: '← All posts',
    updated: 'Updated',
    menu_open: 'Open menu',
    home_label: 'Uniquefacturing home',
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}

/** 언어별 URL 접두사. ko -> '', en -> '/en' */
export function prefix(lang: Lang): string {
  return lang === 'en' ? '/en' : '';
}

/** 현재 경로에서 반대 언어의 경로를 계산합니다. */
export function altPath(pathname: string, target: Lang): string {
  const koPath = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return target === 'en' ? `/en${koPath}` : koPath;
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
