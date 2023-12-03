"use client";

import { ROUTE } from "@/constants/route";
import Image from "next/image";

const categories = [
  {
    title: "입시 컨설팅",
    href: ROUTE.HOME,
    icon: <Image src="/icons/010.아이디어.svg" alt="아이디어" width={40} height={40} />,
  },
  {
    title: "1:1 과외",
    href: ROUTE.HOME,
    icon: <Image src="/icons/006.화상회의.svg" alt="화상회의" width={40} height={40} />,
  },
  {
    title: "독학 키트",
    href: ROUTE.HOME,
    icon: <Image src="/icons/045.상자.svg" alt="상자" width={40} height={40} />,
  },
  {
    title: "후기",
    href: ROUTE.HOME,
    icon: <Image src="/icons/002.대화,채팅.svg" alt="채팅" width={40} height={40} />,
  },
  {
    title: "공지사항",
    href: ROUTE.HOME,
    icon: <Image src="/icons/016.공지.svg" alt="공지" width={40} height={40} />,
  },
  {
    title: "상담하기",
    href: ROUTE.HOME,
    icon: <Image src="/icons/035.상담,고객지원.svg" alt="상담" width={40} height={40} />,
  },
] as const;

export default function CategorySection() {
  return (
    <section className="container grid grid-cols-3 gap-8 pt-8 md:grid-cols-6 md:pt-16">
      {categories.map((category, index) => (
        <CategoryItem
          key={index}
          title={category.title}
          icon={category.icon}
          href={category.href}
        />
      ))}
    </section>
  );
}

interface CategoryItemProps {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const CategoryItem = ({ title, href, icon }: CategoryItemProps) => {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center transition md:hover:-translate-y-1.5">
      <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-gray-100">
        {icon}
      </div>
      <p className="mt-2 text-center text-sm text-muted-foreground">{title}</p>
    </div>
  );
};
