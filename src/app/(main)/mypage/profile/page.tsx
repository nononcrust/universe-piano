"use client";

import { Icon } from "@/components/icon";
import { PageSubtitle } from "@/components/layout/page-subtitle";
import { PageTitle } from "@/components/layout/page-title";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
          <Avatar className="h-20 w-20">
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
        {/* <IconButton>
          <Link href={ROUTE.MYPAGE.ACCOUNT}>
          <Icon.Settings />
          </Link>
        </IconButton> */}
        <Link href={ROUTE.MYPAGE.ACCOUNT}>
          <Button variant="outline">프로필 수정</Button>
        </Link>
      </div>
      <PageSubtitle className="mt-20" title="적립금" />
      <div className="mt-4 flex items-center justify-between gap-3">
        <p>
          사용 가능한 적립금:
          <span className="ml-2 font-semibold text-primary">{user.point} P</span>
        </p>
      </div>
      <PageSubtitle className="mt-20" title="추가 정보" />
      <Separator className="mt-4" />
      <div className="mt-6 flex flex-col">
        <Link
          className="flex items-center justify-between py-2 transition md:hover:translate-x-2"
          href={ROUTE.KIT.LIST}
        >
          <p className="flex-1 font-medium">나의 독학 키트</p>
          <Icon.ChevronRight className="ml-2 h-5 w-5 text-muted-foreground" />
        </Link>
        <Link
          className="flex items-center justify-between py-2 transition md:hover:translate-x-2"
          href={ROUTE.MYPAGE.ORDER}
        >
          <p className="flex-1 font-medium">구매 내역</p>
          <Icon.ChevronRight className="ml-2 h-5 w-5 text-muted-foreground" />
        </Link>
        <Link
          className="flex items-center justify-between py-2 transition md:hover:translate-x-2"
          href={ROUTE.MYPAGE.ACTIVITY}
        >
          <p className="flex-1 font-medium">활동</p>
          <Icon.ChevronRight className="ml-2 h-5 w-5 text-muted-foreground" />
        </Link>
      </div>
    </main>
  );
}
