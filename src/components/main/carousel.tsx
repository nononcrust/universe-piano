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
      className="h-[160px] rounded-xl border md:h-[200px]"
      pagination={{ clickable: true }}
    >
      <SwiperSlide className="bg-gray-100" />
      <SwiperSlide className="bg-gray-200" />
      <SwiperSlide className="bg-gray-100" />
      <SwiperSlide className="bg-gray-200" />
    </Swiper>
  );
};
