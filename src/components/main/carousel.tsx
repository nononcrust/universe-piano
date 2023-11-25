"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Carousel = () => {
  return (
    <Swiper
      loop
      modules={[Autoplay]}
      // autoplay={{ delay: 7000 }}
      className="h-[240px] border md:h-[320px]"
    >
      <SwiperSlide className="bg-indigo-400">
        <div className="container md:pt-16">
          <p className="mt-20 text-2xl font-bold text-white md:text-3xl">1차 오디션 결과 발표</p>
          <p className="mt-1 text-sm font-medium text-white md:text-base">
            {"미국 음대 오디션 결과, 유니버스 피아노에서 확인하세요."}
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-sky-400">
        <div className="container md:pt-16">
          <p className="mt-20 text-2xl font-bold text-white md:text-3xl">2025 가을학기 서비스</p>
          <p className="mt-1 whitespace-pre text-sm font-medium text-white md:text-base">
            {
              "컨설팅, 영어 스터디, 과외, 독학키트까지\n미국 음대 입시에 필요한 모든 것을 담았습니다."
            }
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[#AE9EF6]">
        <div className="container relative md:pt-16">
          <div className="absolute z-10 mt-32 flex flex-col md:mt-20">
            <p className="text-2xl font-bold text-white md:text-3xl">조작없는 후기 시리즈</p>
            <p className="z-10 mt-1 text-sm font-medium text-white md:text-base">
              후기 카톡 원본 공개! 크루분들이 직접 작성하신 후기를 확인하세요.
            </p>
          </div>
          <div className="absolute right-4 top-4 z-0">
            <div className="relative h-[200px] w-[300px] md:h-[300px] md:w-[400px]">
              <Image src="/images/carousel-contact.jpg" alt="carousel-image" fill />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-gray-400">
        <div className="container md:pt-16">
          <p className="mt-20 text-2xl font-bold text-white md:text-3xl">역대 전적</p>
          <p className="mt-1 text-sm font-medium text-white md:text-base">
            매년 100% 합격률 보장, 압도적인 결과로 증명합니다.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
