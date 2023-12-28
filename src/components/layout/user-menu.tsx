"use client";

import { AccessControl } from "@/components/access-control";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TIER_LABEL } from "@/constants/enum";
import { ROUTE } from "@/constants/route";
import { useSession } from "@/features/auth";
import { useAuth } from "@/hooks/use-auth";
import { Role } from "@prisma/client";
import Link from "next/link";

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
        <div className="p-4 pr-12">
          <div className="flex gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.profileImage} />
              <AvatarFallback resource={user.profileImage} />
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{user.nickname}</p>
                <Badge variant="secondary">{TIER_LABEL[user.tier]}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>
        </div>
        <DropdownMenuItem asChild className="px-4 py-2 font-medium">
          <Link href={ROUTE.MYPAGE.PROFILE}>마이페이지</Link>
        </DropdownMenuItem>
        {/* <DropdownMenuItem asChild className="px-4 py-2 font-medium">
          <Link href={ROUTE.KIT.LIST}>나의 독학 키트</Link>
        </DropdownMenuItem> */}
        <AccessControl role={Role.ADMIN}>
          <DropdownMenuItem asChild className="px-4 py-2 font-medium">
            <Link href={ROUTE.ADMIN.HOME}>사이트 관리</Link>
          </DropdownMenuItem>
        </AccessControl>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="px-4 py-2 font-medium" onClick={auth.logout}>
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
