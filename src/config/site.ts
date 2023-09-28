export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "유니버스 피아노",
  description: "유니버스 피아노 홈페이지.",
  mainNav: [
    {
      title: "공지사항",
      href: "/notice",
    },
    {
      title: "커뮤니티",
      href: "/community",
    },
    {
      title: "리뷰",
      href: "/review",
    },
    {
      title: "고객지원",
      href: "/support",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
};
