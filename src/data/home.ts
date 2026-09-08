import type { Lang } from '../i18n';

/**
 * 홈 화면의 모든 문구와 목록은 이 파일에서 관리합니다.
 * 한국어는 ko, 영어는 en 블록을 고치면 됩니다.
 */

export const email = 'uni@u-fac.kr';

export interface Capability {
  title: string;
  blurb: string;
  keywords: string[];
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
  tagline: string;
  intro: string;
  sections: {
    tech: string;
    work: string;
    notes: string;
    notesMore: string;
    contact: string;
    contactLine: string;
  };
  capabilities: Capability[];
  projects: Project[];
}

export const home: Record<Lang, HomeContent> = {
  ko: {
    tagline: '기술 공방',
    intro: 'Uniquefacturing은 구상을 실물로 만드는 일을 합니다. 기획부터 완성까지 책임지고 함께합니다.',
    sections: {
      tech: '다루는 기술',
      work: '제작품들',
      notes: '노트',
      notesMore: '모든 노트',
      contact: '연락',
      contactLine: '기술에 관한 이야기는 언제든 환영합니다.',
    },
    capabilities: [
      {
        title: '하드웨어 · 펌웨어',
        blurb: '센서, 전원, 통신 하드웨어를 설계하고 MCU 펌웨어를 직접 작성합니다.',
        keywords: ['PCB', 'MCU', 'Firmware'],
      },
      {
        title: '임베디드 소프트웨어',
        blurb: '장치 위에서 돌아가는 시스템 소프트웨어와 제어 로직을 개발합니다.',
        keywords: ['Embedded Linux', 'C/C++', 'Python'],
      },
      {
        title: '영상인식',
        blurb: '카메라 영상에서 물체와 상태를 인식하는 모델을 현장 환경에 맞춰 구축합니다.',
        keywords: ['Computer Vision', 'Edge AI', '재고인식'],
      },
      {
        title: '무선통신',
        blurb: '다수의 장치를 안정적으로 묶어 제어하는 무선 네트워크를 설계합니다.',
        keywords: ['BLE', 'Mesh', '조명제어'],
      },
    ],
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
    tagline: 'Engineering Workshop',
    intro: 'Uniquefacturing turns concepts into real things. We take responsibility from planning through completion, working alongside you.',
    sections: {
      tech: 'What we work with',
      work: 'Builds',
      notes: 'Notes',
      notesMore: 'All notes',
      contact: 'Contact',
      contactLine: 'Conversations about technology are always welcome.',
    },
    capabilities: [
      {
        title: 'Hardware & firmware',
        blurb: 'Sensor, power, and communication hardware, with MCU firmware written in-house.',
        keywords: ['PCB', 'MCU', 'Firmware'],
      },
      {
        title: 'Embedded software',
        blurb: 'System software and control logic that runs on the device itself.',
        keywords: ['Embedded Linux', 'C/C++', 'Python'],
      },
      {
        title: 'Computer vision',
        blurb: 'Models that recognize objects and states from camera footage, tuned to the site.',
        keywords: ['Computer Vision', 'Edge AI', 'Inventory'],
      },
      {
        title: 'Wireless',
        blurb: 'Wireless networks that tie many devices together reliably for control.',
        keywords: ['BLE', 'Mesh', 'Lighting'],
      },
    ],
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
