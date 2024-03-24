"use client";

import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constants/route";
import { useRouter } from "next/navigation";

const DEFAULT_MESSAGE = "존재하지 않는 페이지입니다";

interface NotFoundFallbackProps {
  message?: string;
}

export const NotFoundFallback = ({ message = DEFAULT_MESSAGE }: NotFoundFallbackProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <p className="text-sub">{message}</p>
      <Button onClick={() => router.push(ROUTE.HOME)}>홈으로 돌아가기</Button>
    </div>
  );
};
