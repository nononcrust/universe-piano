"use client";

import { ROUTE } from "@/constants/route";
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
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-8 w-8 cursor-pointer">
          <AvatarImage src={user.profileImage} />
          <AvatarFallback />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href={ROUTE.CART}>장바구니</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={ROUTE.MYPAGE.HOME}>마이페이지</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={logout}>로그아웃</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
