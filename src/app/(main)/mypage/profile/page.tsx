"use client";

import { PageSubtitle } from "@/components/layout/page-subtitle";
import { PageTitle } from "@/components/layout/page-title";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TIER_LABEL } from "@/constants/enum";
import { ROUTE } from "@/constants/route";
import { useUserInfo } from "@/features/auth";
import Link from "next/link";

export default function MyProfilePage() {
  const { data: user } = useUserInfo();

  if (!user) return null;

  return (
    <main className="container pb-16">
      <PageTitle title="프로필" />
      <PageSubtitle className="mt-8" title="기본 정보" />
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={user.profileImage} />
            <AvatarFallback />
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold">{user.nickname}</p>
              <Badge variant="secondary">{TIER_LABEL[user.tier]}</Badge>
            </div>
            <p className="text-muted-foreground">{user.email}</p>
          </div>
        </div>
        <Button variant="secondary" asChild>
          <Link href={ROUTE.MYPAGE.ACCOUNT}>프로필 수정</Link>
        </Button>
      </div>
      <PageSubtitle className="mt-20" title="적립금" />
      <p className="mt-2">
        사용 가능한 적립금: <strong className="text-primary">0 P</strong>
      </p>
    </main>
  );
}
