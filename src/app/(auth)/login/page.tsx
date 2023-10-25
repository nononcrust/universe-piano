"use client";

import { Button } from "@/components/ui/button";
import { URL } from "@/constants/url";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="container flex max-w-md flex-col items-center justify-center">
      <section className="flex flex-col items-center">
        <h1 className="mt-64 text-2xl font-bold text-foreground md:text-3xl">로그인</h1>
        <h2 className="mt-2 font-medium text-muted-foreground">
          미국 음대 입시를 위한 모든 것, 유니버스 피아노입니다.
        </h2>
        <Link href={URL.KAKAO_LOGIN}>
          <Button className="mt-16">카카오 계정으로 로그인</Button>
        </Link>
      </section>
    </main>
  );
}
