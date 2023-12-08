"use client";

import { siteConfig, siteContents } from "@/configs/site";
import { ROUTE } from "@/constants/route";
import { useSession } from "@/features/auth";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { CategoryTab } from "./category-tab";
import { HeaderNav } from "./header-nav";
import { NavigationMenuDialog } from "./navigation-menu-dialog";
import { UserMenu } from "./user-menu";

export const Header = () => {
  const { data: session, fetchStatus } = useSession();

  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-lg">
        <div className="border-b">
          <div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-0">
            <div className="flex gap-12">
              <Link href={ROUTE.HOME} className="flex items-center">
                <Image
                  width={40}
                  height={40}
                  src="/images/logo-icon.svg"
                  alt="사이트 로고"
                  priority
                />
                <span className="font-semibold">{siteConfig.name}</span>
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
