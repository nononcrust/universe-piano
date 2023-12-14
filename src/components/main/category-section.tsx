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
    <section className="container flex justify-center pt-8 md:pt-16">
      <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            title={category.title}
            icon={category.icon}
            href={category.href}
          />
        ))}
      </div>
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
    <div className="flex w-24 cursor-pointer flex-col items-center justify-center rounded-xl p-4 transition hover:bg-slate-100">
      <div className="flex items-center justify-center">{icon}</div>
      <p className="mt-2 text-center text-sm text-muted-foreground">{title}</p>
    </div>
  );
};
