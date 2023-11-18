"use client";

import { ROUTE } from "@/constants/route";
import { useUserInfo } from "@/features/auth";
import { useAuth } from "@/hooks/use-auth";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const UserMenu = () => {
  const { logout } = useAuth();
  const { data: user } = useUserInfo();

  const isAdmin = true;

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-8 w-8 cursor-pointer">
          <AvatarImage src={user.profileImage} />
          <AvatarFallback resource={user.profileImage} />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="translate-y-1">
        {/* <DropdownMenuItem asChild className="px-4 py-2">
          <Link href={ROUTE.CART}>장바구니</Link>
        </DropdownMenuItem> */}
        <DropdownMenuItem asChild className="px-4 py-2">
          <Link href={ROUTE.MYPAGE.PROFILE}>마이페이지</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="px-4 py-2">
          <Link href={ROUTE.EBOOK.LIST}>나의 서재</Link>
        </DropdownMenuItem>
        {isAdmin && (
          <DropdownMenuItem asChild className="px-4 py-2">
            <Link href={ROUTE.ADMIN.HOME}>사이트 관리</Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem className="px-4 py-2" onClick={logout}>
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
