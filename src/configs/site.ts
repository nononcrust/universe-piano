import { ROUTE } from "@/constants/route";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "유니버스 피아노",
  title: "유니버스 피아노 - 미국 음대 입시의 모든것",
  description: "유니버스 피아노 홈페이지",
  mainNav: [
    {
      title: "소개",
      href: ROUTE.ABOUT,
    },
    {
      title: "전자책",
      href: ROUTE.PRODUCT.LIST,
    },
    {
      title: "후기",
      href: ROUTE.REVIEW.LIST,
    },
    {
      title: "공지사항",
      href: ROUTE.NOTICE.LIST,
    },
    {
      title: "고객지원",
      href: ROUTE.SUPPORT,
    },
  ],
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
};
