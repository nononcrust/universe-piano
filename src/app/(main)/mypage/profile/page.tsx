"use client";

import { Icon } from "@/components/icon";
import { PageSubtitle } from "@/components/layout/page-subtitle";
import { PageTitle } from "@/components/layout/page-title";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { IconButton } from "@/components/ui/icon-button";
import { TIER_LABEL } from "@/constants/enum";
import { ROUTE } from "@/constants/route";
import { useSession } from "@/features/auth";
import Link from "next/link";

export default function MyProfilePage() {
  const { data: session } = useSession();

  if (!session) return null;

  const user = session.user;

  return (
    <main className="container pb-16">
      <PageTitle title="프로필" />
      <PageSubtitle className="mt-8" title="기본 정보" />
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user.profileImage} />
            <AvatarFallback />
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-medium">{user.nickname}</p>
              <Badge variant="secondary">{TIER_LABEL[user.tier]}</Badge>
            </div>
            <p className="text-muted-foreground">{user.email}</p>
          </div>
        </div>
        <IconButton>
          <Link href={ROUTE.MYPAGE.ACCOUNT}>
            <Icon.Settings />
          </Link>
        </IconButton>
      </div>
      <PageSubtitle className="mt-20" title="적립금" />
      <div className="mt-4 flex items-center gap-3">
        사용 가능한 적립금:
        <p className="font-semibold text-primary">{user.point} P</p>
      </div>
    </main>
  );
}
