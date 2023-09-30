"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const DEFAULT_MESSAGE = "존재하지 않는 페이지입니다";

interface NotFoundFallbackProps {
  message?: string;
}

export const NotFoundFallback = ({ message = DEFAULT_MESSAGE }: NotFoundFallbackProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 border border-red-500">
      <p className="text-muted-foreground">{message}</p>
      <Button onClick={router.back}>돌아가기</Button>
    </div>
  );
};
