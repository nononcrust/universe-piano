"use client";

import landingBannerImage1 from "@/assets/images/landing/landing-banner-1.png";
import landingBannerImage2 from "@/assets/images/landing/landing-banner-2.png";
import landingBannerImage3 from "@/assets/images/landing/landing-banner-3.png";
import landingBannerImage4 from "@/assets/images/landing/landing-banner-4.png";
import { Badge } from "@/components/ui/badge";
import { ROUTE } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import "swiper/css/effect-fade";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Carousel = () => {
  return (
    <Swiper
      loop
      modules={[Autoplay, Pagination]}
      pagination
      slidesPerView={1}
      className="h-[320px]"
    >
      <SwiperSlide>
        <Study />
      </SwiperSlide>
      <SwiperSlide>
        <Consulting />
      </SwiperSlide>
      <SwiperSlide>
        <Tutoring />
      </SwiperSlide>
      <SwiperSlide>
        <FirstAuditionResult />
      </SwiperSlide>
    </Swiper>
  );
};

const Study = () => {
  return (
    <Link href={ROUTE.SERVICE.STUDY} className="flex h-full bg-violet-100">
      <div className="container relative md:pt-24">
        <div className="absolute z-10 mt-48 flex flex-col md:ml-4 md:mt-6">
          <div className="flex">
            <Badge className="font-medium" variant="primary">
              스터디
            </Badge>
          </div>
          <p className="mt-2 text-2xl font-semibold md:text-2xl">음대생을 위한 영어 스터디</p>
          <p className="z-10 mt-1 font-medium text-muted-foreground">
            2024년, 더욱 업그레이드되어 돌아왔습니다.
          </p>
        </div>
        <Image
          className="absolute right-6 top-6 md:right-16 md:top-[76px]"
          width={280}
          height={280}
          src={landingBannerImage2}
          alt=""
        />
      </div>
    </Link>
  );
};

const FirstAuditionResult = () => {
  return (
    <Link href={ROUTE.NEWS.AUDITION.LIST} className="flex h-full bg-violet-100">
      <div className="container relative md:pt-24">
        <div className="absolute z-10 mt-48 flex flex-col md:ml-4 md:mt-6">
          <div className="flex">
            <Badge className="font-medium" variant="primary">
              오디션 결과
            </Badge>
          </div>
          <p className="mt-2 text-2xl font-semibold md:text-2xl">1차 오디션 결과 발표</p>
          <p className="z-10 mt-1 font-medium text-muted-foreground">
            미국 음대 오디션 결과, 유니버스 피아노에서 확인하세요.
          </p>
        </div>
        <Image
          className="absolute right-8 top-8 md:right-[98px] md:top-[76px]"
          width={200}
          height={200}
          src={landingBannerImage1}
          alt=""
        />
      </div>
    </Link>
  );
};

const Consulting = () => {
  return (
    <Link href={ROUTE.SERVICE.CONSULTING} className="flex h-full bg-violet-100">
      <div className="container relative md:pt-24">
        <div className="absolute z-10 mt-48 flex flex-col md:ml-4 md:mt-6">
          <div className="flex">
            <Badge className="font-medium" variant="primary">
              컨설팅
            </Badge>
          </div>
          <p className="mt-2 text-2xl font-semibold md:text-2xl">2025 가을학기 컨설팅</p>
          <p className="z-10 mt-1 font-medium text-muted-foreground">
            합격률 100%, 석사 과정 입시 컨설팅
          </p>
        </div>
        <Image
          className="absolute right-8 top-8 md:right-24 md:top-12"
          width={300}
          height={300}
          src={landingBannerImage3}
          alt=""
        />
      </div>
    </Link>
  );
};

const Tutoring = () => {
  return (
    <Link href={ROUTE.SERVICE.TUTORING} className="flex h-full bg-violet-100">
      <div className="container relative md:pt-24">
        <div className="absolute z-10 mt-48 flex flex-col md:ml-4 md:mt-6">
          <div className="flex">
            <Badge className="font-medium" variant="primary">
              입시 과외
            </Badge>
          </div>
          <p className="mt-2 text-2xl font-semibold md:text-2xl">미국 음대 입시 과외</p>
          <p className="z-10 mt-1 font-medium text-muted-foreground">
            유니버스 피아노에서 국내 최초로 시작합니다.
          </p>
        </div>
        <Image
          className="absolute right-8 top-8 md:right-24 md:top-16"
          width={300}
          height={300}
          src={landingBannerImage4}
          alt=""
        />
      </div>
    </Link>
  );
};
