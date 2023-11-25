"use client";

import { ROUTE } from "@/constants/route";
import Image from "next/image";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const categories = [
  {
    title: "입시 컨설팅",
    href: ROUTE.HOME,
    icon: <Image src="/images/idea.svg" width={48} height={48} alt="idea" />,
  },
  {
    title: "1:1 과외",
    href: ROUTE.HOME,
    icon: <Image src="/images/beginner.svg" width={48} height={48} alt="idea" />,
  },
  {
    title: "독학 키트",
    href: ROUTE.HOME,
    icon: <Image src="/images/toolbox.svg" width={48} height={48} alt="idea" />,
  },
  {
    title: "수강생 후기",
    href: ROUTE.HOME,
    icon: <Image src="/images/chat.svg" width={48} height={48} alt="idea" />,
  },
  {
    title: "공지사항",
    href: ROUTE.HOME,
    icon: <Image src="/images/commercial.svg" width={48} height={48} alt="idea" />,
  },
  {
    title: "상담하기",
    href: ROUTE.HOME,
    icon: <Image src="/images/laptop.svg" width={48} height={48} alt="idea" />,
  },
] as const;

export default function CategorySection() {
  return (
    <>
      <section className="grid-row-gap-7 container mt-16 hidden grid-flow-col grid-cols-none gap-y-8 md:grid">
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            title={category.title}
            icon={category.icon}
            href={category.href}
          />
        ))}
      </section>
      <CategoryCarousel />
    </>
  );
}

const CategoryCarousel = () => {
  return (
    <Swiper
      spaceBetween={16}
      freeMode
      slidesPerView="auto"
      modules={[FreeMode]}
      className="mt-8 flex pl-4 pr-4 md:hidden"
    >
      {categories.map((category, index) => (
        <SwiperSlide key={index}>
          <CategoryItem title={category.title} icon={category.icon} href={category.href} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

interface CategoryItemProps {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const CategoryItem = ({ title, href, icon }: CategoryItemProps) => {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-gray-100 transition hover:bg-gray-200">
        {icon}
      </div>
      <p className="mt-2 text-center text-sm font-medium">{title}</p>
    </div>
  );
};
