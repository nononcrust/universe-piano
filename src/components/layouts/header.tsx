"use client";

import { siteConfig } from "@/config/site";
import { useAuth } from "@/hooks/use-auth";
import { ROUTE } from "@/lib/constants/route";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { NavigationMenuDialog } from "./navigation-menu-dialog";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}

export const Header = () => {
  const { user, logout } = useAuth();

  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-0">
        <NavigationMenuDialog />
        <div className="flex gap-12">
          <Link href={ROUTE.HOME} className="flex items-center">
            <Image src="/images/logo.svg" width={40} height={40} alt="사이트 로고" />
            <span className="inline-block font-bold">{siteConfig.name}</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {siteConfig.mainNav.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground",
                      pathname === item.href && "text-foreground",
                    )}
                  >
                    {item.title}
                  </Link>
                ),
            )}
          </nav>
        </div>
        {!user && (
          <Link className="text-sm" href={ROUTE.LOGIN}>
            로그인
          </Link>
        )}
        {user && (
          <Avatar className="h-8 w-8 cursor-pointer" onClick={logout}>
            <AvatarImage src={user.profileImage} />
            <AvatarFallback />
          </Avatar>
        )}
      </div>
    </header>
  );
};
