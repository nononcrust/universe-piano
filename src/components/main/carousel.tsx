"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export const Carousel = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop
      className="h-[200px] rounded-xl border"
      pagination={{ clickable: true }}
    >
      <SwiperSlide className="bg-gray-100" />
      <SwiperSlide className="bg-gray-300" />
      <SwiperSlide className="bg-gray-100" />
      <SwiperSlide className="bg-gray-300" />
    </Swiper>
  );
};
