"use client";

import carouselImage3 from "@/assets/images/landing/landing-carousel-3.jpg";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Carousel = () => {
  return (
    <Swiper loop modules={[Autoplay]} autoplay={{ delay: 700000 }} className="h-[400px]">
      <SwiperSlide className="bg-[#D7E8FF]">
        <div className="container relative md:pt-16">
          <div className="z-10flex absolute z-10 mt-72 flex-col md:mt-28">
            <p className="text-2xl font-bold md:text-3xl">1차 오디션 결과 발표</p>
            <p className="z-10 mt-1 font-medium text-muted-foreground md:text-xl">
              미국 음대 오디션 결과, 유니버스 피아노에서 확인하세요.
            </p>
          </div>
          <Image
            className="absolute -right-12 top-1/2 mt-12 md:mt-8"
            priority
            src={carouselImage3}
            width={400}
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-content">
        <div className="container relative md:pt-16">
          <div className="absolute z-10 mt-24 flex flex-col md:mt-20">
            <p className="text-xl font-semibold md:text-2xl">2025 가을학기 서비스</p>
            <p className="z-10 mt-1 whitespace-pre text-sm font-medium text-muted-foreground md:text-base">
              {
                "컨설팅, 영어 스터디, 과외, 독학키트까지\n미국 음대 입시에 필요한 모든 것을 담았습니다."
              }
            </p>
          </div>
          <div className="absolute right-8 top-14 z-0 md:right-8 md:top-24">
            {/* <div className="relative h-[140px] w-[140px] md:h-[160px] md:w-[160px]">
              <Image
                priority
                src="/images/black_cat.png"
                alt="고양이"
                fill
                sizes="(min-width: 768px) 200px, 200px"
              />
            </div> */}
          </div>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide className="bg-content">
        <div className="container px-8 pt-24 md:px-16 md:pt-36">
          <p className="text-2xl font-bold md:text-3xl">조작없는 후기 시리즈</p>
          <p className="mt-1 text-sm font-medium md:text-base">
            후기 카톡 원본 공개! 크루분들이 직접 작성하신 후기를 확인하세요.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-content">
        <div className="container px-8 pt-24 md:px-16 md:pt-36">
          <p className="text-2xl font-bold md:text-3xl">역대 전적</p>
          <p className="mt-1 text-sm font-medium md:text-base">
            매년 100% 합격률 보장, 압도적인 결과로 증명합니다.
          </p>
        </div>
      </SwiperSlide> */}
      {/* <SwiperSlide className="bg-indigo-400">
        <div className="container relative md:pt-16">
          <div className="absolute z-10 mt-32 flex flex-col md:mt-20">
            <p className="text-2xl font-bold text-white md:text-3xl">1차 오디션 결과 발표</p>
            <p className="z-10 mt-1 text-sm font-medium text-white md:text-base">
              미국 음대 오디션 결과, 유니버스 피아노에서 확인하세요.
            </p>
          </div>
          <div className="absolute -right-4 top-6 z-0 md:right-4 md:top-8">
            <div className="relative h-[200px] w-[270px] md:h-[260px] md:w-[340px]">
              <Image
                priority
                src="/images/3d-megaphone.png"
                alt="carousel-image"
                fill
                sizes="(min-width: 768px) 340px, 270px"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-emerald-400">
        <div className="container relative md:pt-16">
          <div className="absolute z-10 mt-28 flex flex-col md:mt-20">
            <p className="text-2xl font-bold text-white md:text-3xl">2025 가을학기 서비스</p>
            <p className="z-10 mt-1 whitespace-pre text-sm font-medium text-white md:text-base">
              {
                "컨설팅, 영어 스터디, 과외, 독학키트까지\n미국 음대 입시에 필요한 모든 것을 담았습니다."
              }
            </p>
          </div>
          <div className="absolute right-4 top-12 z-0 md:right-12">
            <div className="relative h-[160px] w-[200px] md:h-[220px] md:w-[280px]">
              <Image
                priority
                src="/images/3d-sparkle.png"
                alt="carousel-image"
                fill
                sizes="(min-width: 768px) 340px, 270px"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[#9FBAFF]">
        <div className="container relative md:pt-16">
          <div className="absolute z-10 mt-32 flex flex-col md:mt-20">
            <p className="text-2xl font-bold text-white md:text-3xl">조작없는 후기 시리즈</p>
            <p className="z-10 mt-1 text-sm font-medium text-white md:text-base">
              후기 카톡 원본 공개! 크루분들이 직접 작성하신 후기를 확인하세요.
            </p>
          </div>
          <div className="absolute -right-4 top-6 z-0 md:right-4">
            <div className="relative h-[200px] w-[300px] md:h-[300px] md:w-[400px]">
              <Image
                priority
                src="/images/3d-checklist.jpg"
                alt="carousel-image"
                fill
                sizes="(min-width: 768px) 340px, 270px"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[#C9BBEE]">
        <div className="container relative md:pt-16">
          <div className="absolute z-10 mt-32 flex flex-col md:mt-20">
            <p className="text-2xl font-bold text-white md:text-3xl">역대 전적</p>
            <p className="z-10 mt-1 text-sm font-medium text-white md:text-base">
              매년 100% 합격률 보장, 압도적인 결과로 증명합니다.
            </p>
          </div>
          <div className="absolute -right-4 top-6 z-0 md:right-4">
            <div className="relative h-[200px] w-[300px] md:h-[300px] md:w-[400px]">
              <Image
                priority
                src="/images/3d-clipboard.jpg"
                alt="carousel-image"
                fill
                sizes="(min-width: 768px) 340px, 270px"
              />
            </div>
          </div>
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
};
