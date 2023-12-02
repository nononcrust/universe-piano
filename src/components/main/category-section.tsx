"use client";

import { ROUTE } from "@/constants/route";
import { Icon } from "../icon";

const categories = [
  {
    title: "입시 컨설팅",
    href: ROUTE.HOME,
    icon: <Icon.Flag className="h-8 w-8" />,
  },
  {
    title: "1:1 과외",
    href: ROUTE.HOME,
    icon: <Icon.Star className="h-8 w-8" />,
  },
  {
    title: "독학 키트",
    href: ROUTE.HOME,
    icon: <Icon.BookOpen className="h-8 w-8" />,
  },
  {
    title: "후기",
    href: ROUTE.HOME,
    icon: <Icon.Leaf className="h-8 w-8" />,
  },
  {
    title: "공지사항",
    href: ROUTE.HOME,
    icon: <Icon.Megaphone className="h-8 w-8" />,
  },
  {
    title: "상담하기",
    href: ROUTE.HOME,
    icon: <Icon.User className="h-8 w-8" />,
  },
] as const;

export default function CategorySection() {
  return (
    <section className="container flex overflow-x-auto pt-8 md:justify-center md:pt-16">
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
    <div className="flex min-w-[90px] cursor-pointer flex-col items-center justify-center transition md:min-w-[120px] md:hover:-translate-y-1.5">
      <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-gray-100">
        {icon}
      </div>
      <p className="mt-2 text-center text-sm font-medium">{title}</p>
    </div>
  );
};
