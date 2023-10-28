"use client";

import { siteConfig } from "@/configs/site";
import { ROUTE } from "@/constants/route";
import { useUserInfo } from "@/features/auth";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CategoryTab } from "./category-tab";
import { NavigationMenuDialog } from "./navigation-menu-dialog";
import { UserMenu } from "./user-menu";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}

export const Header = () => {
  const { data: user, fetchStatus } = useUserInfo();

  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-0">
          <NavigationMenuDialog />
          <div className="flex gap-12">
            <Link
              href={ROUTE.HOME}
              className="absolute left-1/2 top-0 flex h-16 -translate-x-1/2 items-center md:static md:left-auto md:translate-x-0"
            >
              <Image src="/images/logo.svg" width={40} height={40} alt="사이트 로고" />
              <span className="inline-block font-bold">{siteConfig.name}</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              {siteConfig.mainNav.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground transition hover:text-foreground",
                    pathname.startsWith(item.href) && "text-foreground",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          {!user && (
            <Link
              href={ROUTE.LOGIN}
              className={cn("text-sm", fetchStatus === "fetching" && "invisible")}
            >
              로그인
            </Link>
          )}
          {user && (
            <div className="flex items-center gap-3">
              {/* <Link href={ROUTE.PAYMENT} className="hidden sm:flex">
              <Icon.ShoppingCart className="h-8 w-8 rounded-full p-1.5 transition duration-200 hover:bg-gray-100" />
            </Link> */}
              <UserMenu />
            </div>
          )}
        </div>
      </header>
      {pathname.startsWith(ROUTE.REVIEW.LIST) && <CategoryTab categories={REVIEW_CATEGORIES} />}
      {pathname.startsWith(ROUTE.MYPAGE.HOME) && <CategoryTab categories={MYPAGE_CATEGORIES} />}
    </>
  );
};

const REVIEW_CATEGORIES = [
  {
    title: "컨설팅 후기",
    href: ROUTE.REVIEW.CONSULT.LIST,
  },

  {
    title: "스터디 후기",
    href: ROUTE.REVIEW.STUDY.LIST,
  },
];

const MYPAGE_CATEGORIES = [
  {
    title: "프로필",
    href: ROUTE.MYPAGE.HOME,
  },
  {
    title: "나의 리뷰",
    href: ROUTE.MYPAGE.REVIEW,
  },
  {
    title: "계정 설정",
    href: ROUTE.MYPAGE.ACCOUNT,
  },
];
