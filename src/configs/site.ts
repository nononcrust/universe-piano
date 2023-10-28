import { ROUTE } from "@/constants/route";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "유니버스 피아노",
  title: "유니버스 피아노 - 미국 음대 입시의 모든것",
  description: "유니버스 피아노 홈페이지",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
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
  mainNav: [
    // {
    //   title: "소개",
    //   href: ROUTE.ABOUT,
    // },
    {
      title: "공지사항",
      href: ROUTE.NOTICE.LIST,
    },
    {
      title: "리뷰",
      href: ROUTE.REVIEW.LIST,
    },
    {
      title: "스토어",
      href: ROUTE.PRODUCT.LIST,
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
