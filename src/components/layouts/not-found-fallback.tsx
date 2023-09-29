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
    <div className="flex flex-col">
      <p>{message}</p>
      <Button variant="secondary" onClick={router.back}>
        돌아가기
      </Button>
    </div>
  );
};
