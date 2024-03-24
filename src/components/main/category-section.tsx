"use client";

import chatIcon from "@/assets/icons/002-chat.svg";
import conferenceIcon from "@/assets/icons/006-conference.svg";
import ideaIcon from "@/assets/icons/010-idea.svg";
import noticeIcon from "@/assets/icons/016-notice.svg";
import supportIcon from "@/assets/icons/035-support.svg";
import storageIcon from "@/assets/icons/045-storage.svg";
import { ROUTE } from "@/constants/route";
import Image from "next/image";

const categories = [
  {
    title: "입시 컨설팅",
    href: ROUTE.HOME,
    icon: <Image priority src={ideaIcon} alt="아이디어" width={40} height={40} />,
  },
  {
    title: "1:1 과외",
    href: ROUTE.HOME,
    icon: <Image priority src={conferenceIcon} alt="화상회의" width={40} height={40} />,
  },
  {
    title: "독학 키트",
    href: ROUTE.HOME,
    icon: <Image priority src={storageIcon} alt="상자" width={40} height={40} />,
  },
  {
    title: "후기",
    href: ROUTE.HOME,
    icon: <Image priority src={chatIcon} alt="채팅" width={40} height={40} />,
  },
  {
    title: "공지사항",
    href: ROUTE.HOME,
    icon: <Image priority src={noticeIcon} alt="공지" width={40} height={40} />,
  },
  {
    title: "상담하기",
    href: ROUTE.HOME,
    icon: <Image priority src={supportIcon} alt="상담" width={40} height={40} />,
  },
] as const;

export default function CategorySection() {
  return (
    <section className="container flex overflow-x-auto pt-4 scrollbar-hide md:justify-center md:pt-12">
      <div className="flex min-w-fit md:gap-4">
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

const CategoryItem = ({ title, icon }: CategoryItemProps) => {
  return (
    <div className="group flex w-24 cursor-pointer flex-col items-center justify-center rounded-xl p-4">
      <div className="flex items-center justify-center rounded-2xl bg-content-light p-4 transition md:group-hover:-translate-y-1">
        <div className="flex items-center justify-center">{icon}</div>
      </div>
      <p className="text-sub mt-2 text-center text-sm">{title}</p>
    </div>
  );
};
