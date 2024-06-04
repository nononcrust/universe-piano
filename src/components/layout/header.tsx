"use client";

import { CategoryTab } from "@/components/layout/category-tab";
import { HeaderNav } from "@/components/layout/header-nav";
import { NavigationMenuDialog } from "@/components/layout/navigation-menu-dialog";
import { UserMenu } from "@/components/layout/user-menu";
import { Button } from "@/components/ui/button";
import { siteConfig, siteContents } from "@/configs/site";
import { ROUTE } from "@/constants/route";
import { useSession } from "@/features/auth/use-session";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const { session, fetchStatus } = useSession();

  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-lg">
        <div className="border-b">
          <div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-0">
            <div className="flex gap-12">
              <Link href={ROUTE.HOME} className="flex items-center">
                <Image
                  width={48}
                  height={48}
                  src="/images/logo-icon.svg"
                  alt="사이트 로고"
                  priority
                />
                <span className="translate-y-[1px] font-semibold">{siteConfig.name}</span>
              </Link>
              <HeaderNav />
            </div>
            <NavigationMenuDialog />
            {session && (
              <div className="hidden md:flex">
                <UserMenu />
              </div>
            )}
            {!session && (
              <div className="hidden gap-2 md:flex">
                <Button asChild className="h-[32px] text-xs" variant="outlined">
                  <Link
                    href={ROUTE.LOGIN}
                    className={cn("text-sm", fetchStatus === "fetching" && "invisible")}
                  >
                    로그인
                  </Link>
                </Button>
                {/* <Button asChild className="h-[32px] text-xs">
                  <Link
                    href={ROUTE.LOGIN}
                    className={cn("text-sm", fetchStatus === "fetching" && "invisible")}
                  >
                    회원가입
                  </Link>
                </Button> */}
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
