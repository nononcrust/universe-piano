"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Carousel = () => {
  return (
    <Swiper
      loop
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 7000 }}
      className="h-[200px] rounded-xl border md:h-[240px]"
      pagination={{ clickable: true }}
    >
      <SwiperSlide className="bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-300 px-4 py-3 md:px-6 md:py-5">
        <p className="text-xl font-bold text-white md:text-3xl">1차 오디션 결과 발표</p>
        <p className="mt-1 text-sm font-medium text-white md:text-base">
          {"미국 음대 오디션 결과, 유니버스 피아노에서 확인하세요."}
        </p>
      </SwiperSlide>
      <SwiperSlide className="bg-gradient-to-r from-gray-400 to-white px-4 py-3 md:px-6 md:py-5">
        <p className="text-xl font-bold text-white md:text-3xl">2025 가을학기 서비스</p>
        <p className="mt-1 whitespace-pre text-sm font-medium text-white md:text-base">
          {"컨설팅, 영어 스터디, 과외, 독학키트까지\n미국 음대 입시에 필요한 모든 것을 담았습니다."}
        </p>
      </SwiperSlide>
      <SwiperSlide className="bg-gradient-to-r from-blue-700 to-blue-500 px-4 py-3 md:px-6 md:py-5">
        <p className="text-xl font-bold text-white md:text-3xl">조작없는 후기 시리즈</p>
        <p className="mt-1 text-sm font-medium text-white md:text-base">
          후기 카톡 원본 공개! 크루분들이 직접 작성하신 후기를 확인하세요.
        </p>
      </SwiperSlide>
      <SwiperSlide className="bg-gray-400 px-4 py-3 md:px-6 md:py-5">
        <p className="text-xl font-bold text-white md:text-3xl">역대 전적</p>
        <p className="mt-1 text-sm font-medium text-white md:text-base">
          매년 100% 합격률 보장, 압도적인 결과로 증명합니다.
        </p>
      </SwiperSlide>
    </Swiper>
  );
};
