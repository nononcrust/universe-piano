"use client";

import KakaoIcon from "@/assets/icons/kakao.svg";
import { kakaoEnabledRoutes, siteConfig } from "@/configs/site";
import { ROUTE } from "@/constants/route";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const FloatingKakaoButton = () => {
  const [isPressing, setIsPressing] = useState(false);
  const pathname = usePathname();

  const isKakaoEnabledRoute =
    pathname === ROUTE.HOME || kakaoEnabledRoutes.some((route) => pathname.startsWith(route));

  const onPointerUp = () => {
    setIsPressing(false);

    document.removeEventListener("pointerup", onPointerUp);
  };

  const onPointerDown = () => {
    setIsPressing(true);

    document.addEventListener("pointerup", onPointerUp);
  };

  if (!isKakaoEnabledRoute) return null;

  return (
    <Link
      className={cn(
        "bg-kakao fixed bottom-6 right-6 z-50 flex size-[56px] select-none items-center justify-center overflow-hidden rounded-[20px] drop-shadow-md hover:drop-shadow-lg",
        isPressing && "scale-95",
        !isPressing && "transition-transform",
      )}
      aria-label="카카오톡 오픈채팅"
      href={siteConfig.links.kakao}
      target="_blank"
      onPointerDown={onPointerDown}
      draggable={false}
    >
      <KakaoIcon className="translate-y-[1px]" width={38} height={38} />
    </Link>
  );
};
