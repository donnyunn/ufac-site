import type { Lang } from '../i18n';

/**
 * 홈 화면의 모든 문구는 이 파일에서 관리합니다.
 * 한국어는 ko, 영어는 en 블록을 고치면 됩니다.
 *
 * 홈은 위에서 아래로 읽는 6개의 단락(beat)으로 구성됩니다.
 *   hero → problem → work → method → edge → cta
 */

export const email = 'uni@u-fac.kr';

export interface Item {
  name: string;
  note: string;
}

export interface Project {
  title: string;
  blurb: string;
  tags: string[];
  /** public/ 기준 경로. 예: /images/projects/foo.jpg */
  image: string;
  imageAlt: string;
  /** 자세한 글이 있으면 블로그 경로. 예: /blog/foo/ */
  href?: string;
}

export interface HomeContent {
  /** 1. 첫 문구 */
  hero: { eyebrow: string; lines: string[] };
  /** 2. 문제 제기 */
  problem: { lines: string[] };
  /** 3. 우리가 하는 일 */
  work: { title: string; items: Item[] };
  /** 4. 우리의 방식. note는 단계 아래 한 줄 */
  method: { title: string; steps: Item[]; note: string };
  /** 5. 차별점 */
  edge: { title: string; lines: string[] };
  /** 6. 마지막 CTA */
  cta: { title: string; lines: string[]; button: string };
  /** 푸터 */
  footer: { contact: string; contactLine: string };
  /** 제작품 섹션. 사진이 준비되면 showProjects를 true로 */
  showProjects: boolean;
  projectsTitle: string;
  projects: Project[];
}

export const home: Record<Lang, HomeContent> = {
  ko: {
    hero: {
      eyebrow: 'Uniquefacturing · 기술 공방',
      lines: ['작은 기술 공방이지만,', '그래도 어려운 건 다 만들어냅니다.'],
    },
    problem: {
      lines: ['만들어야 하는 것은 있는데', '어디서부터 시작해야 할지 모르겠다면.'],
    },
    work: {
      title: '우리가 하는 일',
      items: [
        { name: 'Hardware', note: '회로 설계와 보드 제작' },
        { name: 'Software', note: '펌웨어부터 응용 소프트웨어까지' },
        { name: 'Wireless', note: 'BLE, Mesh, Thread 등의 무선 연결' },
        { name: 'Network', note: '여러 장치를 하나로 묶는 통신 구조 설계' },
        { name: 'Solution', note: '현장에 맞춘 알고리즘 구성' },
        { name: 'Prototype', note: '직접 확인 가능한 동작 시제품' },
      ],
    },
    method: {
      title: '우리의 방식',
      steps: [
        { name: '고민합니다', note: '무엇이 진짜 문제인지부터' },
        { name: '만들어봅니다', note: '작게, 그리고 빠르게' },
        { name: '테스트합니다', note: '실제 현장 조건에서' },
        { name: '개선합니다', note: '될 때까지' },
      ],
      note: '구상부터 제작, 설치와 현장 테스트까지 직접 합니다.',
    },
    edge: {
      title: '차별점',
      lines: ['작은 팀이라 빠르고,', '직접 만들기 때문에 깊게 이해합니다.'],
    },
    cta: {
      title: '만들고 싶은 것이 있으신가요?',
      lines: ['아직 아이디어 단계여도 괜찮습니다.', '같이 만들어볼 수 있는 방법부터 찾아드리겠습니다.'],
      button: '메일로 이야기 시작하기',
    },
    footer: {
      contact: '연락',
      contactLine: '기술에 관한 이야기는 언제든 환영합니다.',
    },
    showProjects: false,
    projectsTitle: '제작품들',
    projects: [
      {
        title: '영상 인식 솔루션',
        blurb: '카메라로 대상물을 자동 파악하는 장치와 인식 파이프라인.',
        tags: ['Vision', 'Edge', 'Hardware'],
        image: '/images/projects/placeholder-1.svg',
        imageAlt: '영상 인식 솔루션 사진 (준비 중)',
      },
      {
        title: '무선 제어 시스템',
        blurb: '수십 개의 장치를 무선으로 동시 제어하는 컨트롤러와 관리 도구.',
        tags: ['Wireless', 'Firmware', 'Control'],
        image: '/images/projects/placeholder-2.svg',
        imageAlt: '무선 제어 시스템 사진 (준비 중)',
      },
      {
        title: '하드웨어 시제품 개발',
        blurb: '구상 단계의 아이디어를 의뢰 받아 실제 제품으로 구현한 사례.',
        tags: ['Prototype', 'PCB', 'Enclosure'],
        image: '/images/projects/placeholder-3.svg',
        imageAlt: '하드웨어 시제품 사진 (준비 중)',
      },
    ],
  },
  en: {
    hero: {
      eyebrow: 'Uniquefacturing · Engineering Workshop',
      lines: ['A small engineering workshop,', 'but the hard things still get built here.'],
    },
    problem: {
      lines: ['You know what needs to be built,', 'but not where to start.'],
    },
    work: {
      title: 'What we do',
      items: [
        { name: 'Hardware', note: 'Circuit design and board bring-up' },
        { name: 'Software', note: 'From firmware to application software' },
        { name: 'Wireless', note: 'BLE, Mesh, Thread, and other radio links' },
        { name: 'Network', note: 'Designing the communication structure that ties devices together' },
        { name: 'Solution', note: 'Algorithms tailored to the actual site' },
        { name: 'Prototype', note: 'Working prototypes you can verify yourself' },
      ],
    },
    method: {
      title: 'How we work',
      steps: [
        { name: 'Think', note: 'Start from the real problem' },
        { name: 'Build', note: 'Small and fast' },
        { name: 'Test', note: 'Under field conditions' },
        { name: 'Refine', note: 'Until it works' },
      ],
      note: 'From concept to build, installation, and field testing, all done in-house.',
    },
    edge: {
      title: 'What makes us different',
      lines: ['A small team, so we move fast.', 'We build it ourselves, so we understand it deeply.'],
    },
    cta: {
      title: 'Have something you want to build?',
      lines: ['An idea is enough to start.', 'We will begin by finding a way to build it together.'],
      button: 'Start with an email',
    },
    footer: {
      contact: 'Contact',
      contactLine: 'Conversations about technology are always welcome.',
    },
    showProjects: false,
    projectsTitle: 'Builds',
    projects: [
      {
        title: 'Vision recognition solution',
        blurb: 'A device and recognition pipeline that identifies objects automatically from camera images.',
        tags: ['Vision', 'Edge', 'Hardware'],
        image: '/images/projects/placeholder-1.svg',
        imageAlt: 'Vision recognition solution photo (coming soon)',
      },
      {
        title: 'Wireless control system',
        blurb: 'A controller and management tool that drives dozens of devices at once over a wireless link.',
        tags: ['Wireless', 'Firmware', 'Control'],
        image: '/images/projects/placeholder-2.svg',
        imageAlt: 'Wireless control system photo (coming soon)',
      },
      {
        title: 'Hardware prototype development',
        blurb: 'Concept-stage ideas, commissioned and realized as working products.',
        tags: ['Prototype', 'PCB', 'Enclosure'],
        image: '/images/projects/placeholder-3.svg',
        imageAlt: 'Hardware prototype photo (coming soon)',
      },
    ],
  },
};
