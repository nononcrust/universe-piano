"use client";

import { KakaoLoginButton } from "@/components/kakao-login-button";
import { URL } from "@/constants/url";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="container flex min-h-screen max-w-sm flex-col">
      <section className="flex flex-col items-center">
        <div className="mt-64 flex items-center justify-start">
          <Image src="/images/logo.svg" width={64} height={64} alt="logo" />
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">유니버스 피아노</h1>
        </div>
        <h2 className="text-muted-foreground">미국 음대 입시를 위한 모든 것</h2>
        <Link href={URL.KAKAO_LOGIN}>
          <KakaoLoginButton className="mt-8 cursor-pointer" />
        </Link>
        <p className="absolute bottom-4 text-xs text-muted-foreground">
          © universepiano, Co., Ltd.. All Rights Reserved
        </p>
      </section>
    </main>
  );
}
