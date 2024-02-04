"use client";

import { PageSubtitle } from "@/components/layout/page-subtitle";
import { PageTitle } from "@/components/layout/page-title";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ROUTE } from "@/constants/route";
import { useAuth } from "@/hooks/use-auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WithdrawalPage() {
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const auth = useAuth();

  const router = useRouter();

  const onWithdrawal = async () => {
    if (isLoading) return;

    setIsLoading(true);
    await auth.withdrawal();
    setIsLoading(false);
    router.push(ROUTE.HOME);
  };

  return (
    <main className="container pb-16">
      <PageTitle title="회원탈퇴" />
      <PageSubtitle className="mt-16" title="탈퇴하기 전에 반드시 확인해주세요." />
      <div className="mt-4 flex flex-col gap-2">
        <p className="list-item list-inside">
          탈퇴 시, 등록한 서비스의 모든 정보가 영구적으로 삭제됩니다.
        </p>
        <p className="list-item list-inside list-disc">
          회원님의 게시물, 댓글 등의 모든 활동 내역이 삭제됩니다.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-8">
        <div className="flex flex-row items-center space-x-2 space-y-0">
          <Checkbox
            id="withdrawal-checkbox"
            className="h-5 w-5 rounded-md"
            checked={checked}
            onCheckedChange={() => setChecked(!checked)}
          />
          <label htmlFor="withdrawal-checkbox" className="text-base">
            해당 내용을 모두 읽었습니다.
          </label>
        </div>
        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="max-md:h-14 max-md:text-base" disabled={!checked}>
                탈퇴하기
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>정말로 탈퇴하시겠습니까?</AlertDialogTitle>
                <AlertDialogDescription>
                  탈퇴한 계정은 복구할 수 없습니다. 신중히 결정해주세요.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>돌아가기</AlertDialogCancel>
                <AlertDialogAction onClick={onWithdrawal}>탈퇴하기</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button className="max-md:h-14 max-md:text-base" variant="outline" asChild>
            <Link href={ROUTE.MYPAGE.ACCOUNT}>돌아가기</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
