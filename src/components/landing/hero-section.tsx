"use client";

import { ROUTE } from "@/constants/route";
import { channel } from "@/lib/channel-io";
import Link from "next/link";
import { Icon } from "../icon";
import { Aos } from "../ui/aos";
import { Button } from "../ui/button";

export const HeroSection = () => {
  return (
    <section
      className="h-[700px] flex-1 justify-center bg-gray-100 bg-cover bg-center bg-no-repeat md:justify-start"
      style={{
        backgroundImage: "url(/images/hero.webp)",
      }}
    >
      <Aos>
        <div className="container">
          <h1 className="from- pt-60 text-2xl font-extrabold text-white md:text-4xl">
            <p>
              <span className="bg-blue-500">미국 음대 입시</span>를 위한 모든 것,
            </p>
            <p className="mt-1 md:mt-2">유니버스 피아노에서 찾아보세요</p>
          </h1>
          <h2 className="mt-2 text-base font-medium text-white md:text-lg">
            입시 상담부터 유학 준비까지 유니버스 피아노가 함께합니다.
          </h2>
          <div className="mt-4 flex gap-4">
            <Button
              variant="outline"
              onClick={channel.showMessenger}
              className="md:h-12 md:px-6 md:text-base"
            >
              상담 문의
            </Button>
          </div>
          <div className="mt-12">
            <Link href={ROUTE.NEWS.AUDITION.LIST} className="flex items-center">
              <p className="text-lg font-medium text-white underline">2차 오디션 결과 보러가기</p>

              <Icon.ChevronRight className="h-6 w-6 text-white" />
            </Link>
          </div>
        </div>
      </Aos>
    </section>
  );
};
