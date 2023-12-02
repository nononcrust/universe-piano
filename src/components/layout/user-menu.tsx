"use client";

import { ROUTE } from "@/constants/route";
import { useSession } from "@/features/auth";
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
  const { data: session } = useSession();

  const auth = useAuth();

  if (!session) return null;

  const user = session.user;

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
          <Link href={ROUTE.KIT.LIST}>나의 서재</Link>
        </DropdownMenuItem>
        {/* <AccessControl role={Role.ADMIN}> */}
        <DropdownMenuItem asChild className="px-4 py-2">
          <Link href={ROUTE.ADMIN.HOME}>사이트 관리</Link>
        </DropdownMenuItem>
        {/* </AccessControl> */}
        <DropdownMenuItem className="px-4 py-2" onClick={auth.logout}>
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
