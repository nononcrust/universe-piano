"use client";

import { PageSubtitle } from "@/components/layout/page-subtitle";
import { PageTitle } from "@/components/layout/page-title";
import { Icon } from "@/components/shared/icon";
import { UserRoleBadge } from "@/components/shared/user-role-badge";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ROUTE } from "@/constants/route";
import { useSession } from "@/features/auth/use-session";
import Link from "next/link";

export default function MyProfilePage() {
  const { session } = useSession();

  if (!session) return null;

  const user = session.user;

  return (
    <main className="container pb-16">
      <PageTitle title="프로필" />
      <PageSubtitle className="mt-8" title="기본 정보" />
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12 md:h-20 md:w-20">
            <Avatar.Image src={user.profileImage} />
            <Avatar.Fallback />
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="text-lg font-medium md:text-2xl">{user.nickname}</p>
              <UserRoleBadge />
            </div>
            <p className="text-sm text-sub md:text-base">{user.email}</p>
          </div>
        </div>
        <Button variant="outlined" asChild>
          <Link href={ROUTE.MYPAGE.ACCOUNT}>프로필 수정</Link>
        </Button>
      </div>
      <PageSubtitle className="mt-20" title="적립금" />
      <div className="mt-4 flex items-center justify-between gap-3">
        <p>
          사용 가능한 적립금:
          <span className="text-foreground ml-2 font-semibold">{user.point} P</span>
        </p>
      </div>
      <PageSubtitle className="mt-20" title="추가 정보" />
      <Separator className="mt-4" />
      <div className="mt-6 flex flex-col">
        <Link
          className="flex items-center justify-between py-2 transition-opacity md:hover:opacity-80"
          href={ROUTE.KIT.LIST}
        >
          <p className="flex-1 font-medium">나의 독학 키트</p>
          <Icon.ChevronRight className="ml-2 h-5 w-5 text-sub" />
        </Link>
        <Link
          className="flex items-center justify-between py-2 transition-opacity md:hover:opacity-80"
          href={ROUTE.MYPAGE.ORDER}
        >
          <p className="flex-1 font-medium">구매 내역</p>
          <Icon.ChevronRight className="ml-2 h-5 w-5 text-sub" />
        </Link>
        {/* <Link
          className="flex items-center justify-between py-2 transition md:hover:opacity-80"
          href={ROUTE.MYPAGE.ACTIVITY}
        >
          <p className="flex-1 font-medium">활동</p>
          <Icon.ChevronRight className="ml-2 h-5 w-5 text-sub" />
        </Link> */}
      </div>
    </main>
  );
}
