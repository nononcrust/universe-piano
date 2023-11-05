"use client";

import { Aos } from "../ui/aos";

export const HeroSection = () => {
  return (
    <section
      className="flex h-[320px] flex-1 justify-center bg-gray-100 bg-cover bg-center bg-no-repeat md:justify-start"
      style={{
        backgroundImage: "url(/images/hero.webp)",
      }}
    >
      <Aos className="flex-1">
        <div className="container flex h-full flex-1 items-center">
          <h1 className="text-2xl font-extrabold text-white md:text-4xl">
            <p>미국 음대 입시를 위한 모든 것,</p>
            <p className="mt-1 md:mt-2">유니버스 피아노에서 찾아보세요</p>
          </h1>
        </div>
      </Aos>
    </section>
  );
};
