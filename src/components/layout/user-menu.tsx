"use client";

import { AccessControl } from "@/components/shared/access-control";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { TIER_LABEL } from "@/constants/enum";
import { ROUTE } from "@/constants/route";
import { useAuth } from "@/hooks/use-auth";
import { useSession } from "@/services/auth";
import { Role } from "@prisma/client";
import Link from "next/link";

export const UserMenu = () => {
  const { data: session } = useSession();

  const auth = useAuth();

  if (!session) return null;

  const user = session.user;

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger className="rounded-full">
        <Avatar className="h-8 w-8 cursor-pointer">
          <Avatar.Image src={user.profileImage} />
          <Avatar.Fallback resource={user.profileImage} />
        </Avatar>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" className="translate-y-1">
        <div className="p-4 pr-12">
          <div className="flex gap-4">
            <Avatar className="h-12 w-12">
              <Avatar.Image src={user.profileImage} />
              <Avatar.Fallback resource={user.profileImage} />
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{user.nickname}</p>
                <Badge variant="secondary">{TIER_LABEL[user.tier]}</Badge>
              </div>
              <p className="text-sm text-sub">{user.email}</p>
            </div>
          </div>
        </div>
        <DropdownMenu.Item asChild className="px-4 py-2 font-medium">
          <Link href={ROUTE.MYPAGE.PROFILE}>마이페이지</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item asChild className="px-4 py-2 font-medium">
          <Link href={ROUTE.KIT.LIST}>나의 독학 키트</Link>
        </DropdownMenu.Item>
        <AccessControl role={Role.ADMIN}>
          <DropdownMenu.Item asChild className="px-4 py-2 font-medium">
            <Link href={ROUTE.ADMIN.HOME}>사이트 관리</Link>
          </DropdownMenu.Item>
        </AccessControl>
        <DropdownMenu.Separator />
        <DropdownMenu.Item className="px-4 py-2 font-medium" onClick={auth.logout}>
          로그아웃
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
