import { ROUTE } from "@/constants/route";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "유니버스 피아노",
  title: "유니버스 피아노 - 미국 음대 입시의 모든것",
  description: "유니버스 피아노 홈페이지",
  icons: [
    { rel: "shortcut icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  links: {
    instagram: "https://www.instagram.com/universe_piano",
    kakao: "https://open.kakao.com/o/sy3BCAif",
    blog: "https://blog.naver.com/universepiano",
    cafe: "https://cafe.naver.com/universepianousa",
    email: "universepiano@naver.com",
    mobile: "010-2134-7370",
  },
  openGraph: {
    title: "유니버스 피아노",
    type: "website",
    locale: "ko_KR",
    url: "https://universe-piano.vercel.app",
    siteName: "유니버스 피아노",
    description: "미국 음대 입시의 모든것, 유니버스 피아노",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 628,
      },
    ],
  } as OpenGraph,
};

export const headerNav = [
  {
    title: "소개",
    href: ROUTE.ABOUT.LIST,
  },
  {
    title: "소식",
    href: ROUTE.NEWS.NOTICE.LIST,
  },
  {
    title: "리뷰",
    href: ROUTE.REVIEW.CONSULT.LIST,
  },
  {
    title: "서비스",
    href: ROUTE.SERVICE.PRODUCT.LIST,
  },
  {
    title: "고객지원",
    href: ROUTE.SUPPORT,
  },
];

export const siteContents = {
  about: {
    title: "소개",
    href: ROUTE.ABOUT.LIST,
    children: [
      {
        title: "유니버스 피아노",
        href: ROUTE.ABOUT.COMPANY,
      },
      {
        title: "대표의 스토리",
        href: ROUTE.ABOUT.STORY,
      },
    ],
  },
  notice: {
    title: "소식",
    href: ROUTE.NEWS.LIST,
    children: [
      {
        title: "공지사항",
        href: ROUTE.NEWS.NOTICE.LIST,
      },
      {
        title: "오디션 결과 발표",
        href: ROUTE.NEWS.AUDITION.LIST,
      },
    ],
  },
  review: {
    title: "리뷰",
    href: ROUTE.REVIEW.LIST,
    children: [
      {
        title: "컨설팅 후기",
        href: ROUTE.REVIEW.CONSULT.LIST,
      },
      {
        title: "스터디 후기",
        href: ROUTE.REVIEW.STUDY.LIST,
      },
    ],
  },
  service: {
    title: "서비스",
    href: ROUTE.SERVICE.LIST,
    children: [
      {
        title: "미국 음대 입시 과외",
        href: "/service/tutoring",
      },
      {
        title: "입시 컨설팅",
        href: "/service/consulting",
      },
      {
        title: "독학 키트",
        href: ROUTE.SERVICE.PRODUCT.LIST,
      },
    ],
  },
  support: {
    title: "고객지원",
    href: ROUTE.SUPPORT,
    children: [
      {
        title: "자주 묻는 질문",
        href: ROUTE.SUPPORT,
      },
    ],
  },
  mypage: {
    title: "마이페이지",
    href: ROUTE.MYPAGE.HOME,
    children: [
      {
        title: "프로필",
        href: ROUTE.MYPAGE.PROFILE,
      },
      {
        title: "활동",
        href: ROUTE.MYPAGE.ACTIVITY,
      },
      {
        title: "계정 설정",
        href: ROUTE.MYPAGE.ACCOUNT,
      },
    ],
  },
};

export const footerNav = {
  about: {
    title: "소개",
    href: ROUTE.ABOUT.LIST,
    children: [
      {
        title: "유니버스 피아노",
        href: ROUTE.ABOUT.COMPANY,
      },
      {
        title: "대표의 스토리",
        href: ROUTE.ABOUT.STORY,
      },
    ],
  },
  notice: {
    title: "소식",
    href: ROUTE.NEWS.LIST,
    children: [
      {
        title: "공지사항",
        href: ROUTE.NEWS.NOTICE.LIST,
      },
      {
        title: "오디션 결과 발표",
        href: ROUTE.NEWS.AUDITION.LIST,
      },
    ],
  },
  review: {
    title: "리뷰",
    href: ROUTE.REVIEW.LIST,
    children: [
      {
        title: "컨설팅 후기",
        href: ROUTE.REVIEW.CONSULT.LIST,
      },
      {
        title: "스터디 후기",
        href: ROUTE.REVIEW.STUDY.LIST,
      },
    ],
  },
  service: {
    title: "서비스",
    href: ROUTE.SERVICE.LIST,
    children: [
      {
        title: "미국 음대 입시 과외",
        href: "/service/tutoring",
      },
      {
        title: "입시 컨설팅",
        href: "/service/consulting",
      },
      {
        title: "독학 키트",
        href: ROUTE.SERVICE.PRODUCT.LIST,
      },
    ],
  },
  support: {
    title: "고객지원",
    href: ROUTE.SUPPORT,
    children: [
      {
        title: "자주 묻는 질문",
        href: ROUTE.SUPPORT,
      },
    ],
  },
  terms: {
    title: "이용약관",
    href: ROUTE.TERMS.LIST,
    children: [
      {
        title: "서비스 이용약관",
        href: ROUTE.TERMS.SERVICE,
      },
      {
        title: "개인정보 처리방침",
        href: ROUTE.TERMS.PRIVACY,
      },
    ],
  },
};

export const adminNav = [
  {
    title: "유저 관리",
    items: [
      {
        title: "유저 목록",
        href: ROUTE.ADMIN.USER.LIST,
      },
    ],
  },
  // {
  //   title: "상품 관리",
  //   items: [
  //     {
  //       title: "상품 목록",
  //       href: ROUTE.ADMIN.PRODUCT.LIST,
  //     },
  //     {
  //       title: "상품 추가",
  //       href: ROUTE.ADMIN.PRODUCT.CREATE,
  //     },
  //   ],
  // },
  {
    title: "주문 관리",
    items: [
      {
        title: "주문 목록",
        href: ROUTE.ADMIN.ORDER.LIST,
      },
    ],
  },
  // {
  //   title: "후기 관리",
  //   items: [
  //     {
  //       title: "후기 목록",
  //       href: ROUTE.ADMIN.REVIEW.LIST,
  //     },
  //   ],
  // },
  // {
  //   title: "문의 관리",
  //   items: [
  //     {
  //       title: "문의 목록",
  //       href: ROUTE.ADMIN.QUESTION.LIST,
  //     },
  //   ],
  // },
  {
    title: "소식 관리",
    items: [
      {
        title: "공지사항 목록",
        href: ROUTE.ADMIN.NOTICE.LIST,
      },
      {
        title: "공지사항 추가",
        href: ROUTE.ADMIN.NOTICE.CREATE,
      },
      {
        title: "오디션 결과 목록",
        href: ROUTE.ADMIN.AUDITION.LIST,
      },
      {
        title: "오디션 결과 추가",
        href: ROUTE.ADMIN.AUDITION.CREATE,
      },
    ],
  },
];
