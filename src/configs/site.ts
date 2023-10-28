import { ROUTE } from "@/constants/route";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "유니버스 피아노",
  title: "유니버스 피아노 - 미국 음대 입시의 모든것",
  description: "유니버스 피아노 홈페이지",
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
  },
  contents: {
    // about: {
    //   title: "소개",
    //   href: ROUTE.ABOUT,
    //   children: [
    //     {
    //       title: "유니버스 피아노",
    //       href: ROUTE.HOME,
    //     },
    //     {
    //       title: "대표의 스토리",
    //       href: ROUTE.HOME,
    //     },
    //   ],
    // },
    notice: {
      title: "소식",
      href: ROUTE.NOTICE.LIST,
      children: [
        {
          title: "공지사항",
          href: ROUTE.NOTICE.ANNOUNCEMENTS.LIST,
        },
        {
          title: "2차 오디션 결과 발표",
          href: ROUTE.NOTICE.AUDITION_RESULT.LIST,
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
      href: ROUTE.SERVICE.PRODUCT.LIST,
      children: [
        {
          title: "미국 음대 입시 과외",
          href: ROUTE.HOME,
        },
        {
          title: "입시 컨설팅",
          href: ROUTE.HOME,
        },
        {
          title: "전자책",
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
  },
  mainNav: [
    {
      title: "소식",
      href: ROUTE.NOTICE.ANNOUNCEMENTS.LIST,
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
  ],
  adminNav: [
    {
      title: "유저 관리",
      items: [
        {
          title: "유저 목록",
          href: ROUTE.ADMIN.USER.LIST,
        },
      ],
    },
    {
      title: "상품 관리",
      items: [
        {
          title: "상품 목록",
          href: ROUTE.ADMIN.PRODUCT.LIST,
        },
        {
          title: "상품 추가",
          href: ROUTE.ADMIN.PRODUCT.CREATE,
        },
      ],
    },
    {
      title: "주문 관리",
      items: [
        {
          title: "주문 목록",
          href: ROUTE.ADMIN.ORDER.LIST,
        },
      ],
    },
    {
      title: "후기 관리",
      items: [
        {
          title: "후기 목록",
          href: ROUTE.ADMIN.REVIEW.LIST,
        },
      ],
    },
    {
      title: "문의 관리",
      items: [
        {
          title: "문의 목록",
          href: ROUTE.ADMIN.QUESTION.LIST,
        },
      ],
    },
    {
      title: "공지사항 관리",
      items: [
        {
          title: "공지사항 목록",
          href: ROUTE.ADMIN.NOTICE.LIST,
        },
        {
          title: "공지사항 추가",
          href: ROUTE.ADMIN.NOTICE.CREATE,
        },
      ],
    },
    {
      title: "도움말 관리",
      items: [
        {
          title: "도움말 목록",
          href: ROUTE.ADMIN.SUPPORT.LIST,
        },
        {
          title: "도움말 추가",
          href: ROUTE.ADMIN.SUPPORT.CREATE,
        },
      ],
    },
  ],
};

export const footerNav = {
  ...siteConfig.contents,
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
