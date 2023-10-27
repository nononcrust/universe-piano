"use client";

import { ROUTE } from "@/constants/route";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "../icon";

const contents = [
  {
    title: "안내",
    children: [
      {
        title: "공지사항",
        href: ROUTE.NOTICE.LIST,
      },
      {
        title: "자주 묻는 질문",
        href: ROUTE.SUPPORT,
      },
    ],
  },
  {
    title: "서비스",
    children: [
      {
        title: "입시 컨설팅",
        href: ROUTE.HOME,
      },
      {
        title: "유학 컨설팅",
        href: ROUTE.HOME,
      },
      {
        title: "오디션",
        href: ROUTE.HOME,
      },
    ],
  },
  {
    title: "고객센터",
    children: [
      {
        title: "채널톡",
        href: ROUTE.HOME,
      },
      {
        title: "1:1 문의",
        href: ROUTE.HOME,
      },
    ],
  },
  {
    title: "이용약관",
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
] as const;

export const Footer = () => {
  const pathname = usePathname();

  const isAdminPage = pathname.startsWith(ROUTE.ADMIN.HOME);

  if (isAdminPage) return null;

  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {contents.map((section) => (
            <div key={section.title} className="flex flex-col">
              <p className="font-medium">{section.title}</p>
              <div className="mt-2">
                {section.children.map((item) => (
                  <p
                    key={item.title}
                    className="mt-1 text-sm text-muted-foreground transition hover:text-accent-foreground"
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-sm text-muted-foreground">
          <p>
            (주)유니버스 피아노 | 대표이사: 김원붕 | 사업자번호: 120-39-190283 | 통신판매업
            신고번호: 제 2023-용인기흥-2730
          </p>
          <p>
            경기도 용인시 성복 2로 220 304 | nononcrust@gmail.com | 개인정보책임관리자: 김원붕 |
            문의: 채널톡
          </p>
        </div>
        <div className="mt-4 flex gap-2">
          <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-400 transition hover:bg-gray-500">
            <Icon.Instagram className="text-white" size={18} />
          </div>
          <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-400 transition hover:bg-gray-500">
            <Icon.Youtube className="text-white" size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
};
