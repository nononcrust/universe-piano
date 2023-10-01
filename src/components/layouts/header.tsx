"use client";

import { MainNav } from "@/components/layouts/main-nav";
import { siteConfig } from "@/config/site";
import { useAuth } from "@/hooks/use-auth";
import { ROUTE } from "@/lib/constants/route";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
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
