"use client";

import { KakaoLoginButton } from "@/components/kakao-login-button";
import { KAKAO_LOGIN_URL } from "@/features/kakao";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex h-[calc(100dvh)] items-center md:min-h-screen md:bg-gray-50 md:py-16">
      <section className="container flex max-w-sm flex-col items-center justify-center rounded-2xl bg-white py-28 md:border">
        <Image src="/images/logo.svg" width={128} height={128} alt="logo" />
        <h1 className="text-lg font-medium text-foreground md:text-xl">
          미국 음대 입시를 위한 모든 것
        </h1>
        <h2 className="mt-2 whitespace-pre text-center text-muted-foreground">
          카카오 계정으로 손쉽게 로그인하세요.
        </h2>
        <Link href={KAKAO_LOGIN_URL} replace>
          <KakaoLoginButton className="mt-8" />
        </Link>
      </section>
    </main>
  );
}
