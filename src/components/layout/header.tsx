"use client";

import { headerNav, siteConfig, siteContents } from "@/configs/site";
import { ROUTE } from "@/constants/route";
import { useUserInfo } from "@/features/auth";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
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

  const getDomain = (href: string) => {
    return `/${href.split("/")[1]}`;
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-lg">
        <div className="border-b">
          <div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-0">
            <div className="flex gap-12">
              <Link href={ROUTE.HOME} className="top-0 flex h-16 items-center">
                <Image src="/images/logo.svg" width={40} height={40} alt="사이트 로고" priority />
                <span className="inline-block font-medium">{siteConfig.name}</span>
              </Link>
              <nav className="hidden gap-6 md:flex">
                {headerNav.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground transition hover:text-foreground",
                      pathname.startsWith(getDomain(item.href)) && "text-foreground",
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
            <NavigationMenuDialog />
            {!user && (
              <div className="hidden gap-2 md:flex">
                <Button asChild size="sm" className="h-[32px] text-xs" variant="secondary">
                  <Link
                    href={ROUTE.LOGIN}
                    className={cn("text-sm", fetchStatus === "fetching" && "invisible")}
                  >
                    로그인
                  </Link>
                </Button>
                {/* <Button asChild size="sm" className="h-[32px] text-xs">
                  <Link
                    href={ROUTE.LOGIN}
                    className={cn("text-sm", fetchStatus === "fetching" && "invisible")}
                  >
                    회원가입
                  </Link>
                </Button> */}
              </div>
            )}
            {user && (
              <div className="hidden md:flex">
                <UserMenu />
              </div>
            )}
          </div>
        </div>
        {Object.values(siteContents).map((content, index) =>
          pathname.startsWith(content.href) ? (
            <CategoryTab key={index} categories={content.children} />
          ) : null,
        )}
      </header>
    </>
  );
};
