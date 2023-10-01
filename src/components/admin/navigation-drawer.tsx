"use client";

import { ROUTE } from "@/lib/constants/route";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "../icon";

const drawer = [
  {
    title: "유저 관리",
    items: [
      {
        title: "유저 목록",
        href: ROUTE.ADMIN.USER.LIST,
      },
    ],
  },
  {
    title: "공지사항 관리",
    items: [
      {
        title: "공지사항 목록",
        href: ROUTE.ADMIN.NOTICE.LIST,
      },
      {
        title: "공지사항 추가",
        href: ROUTE.ADMIN.NOTICE.CREATE,
      },
    ],
  },
  {
    title: "도움말 관리",
    items: [
      {
        title: "도움말 목록",
        href: ROUTE.ADMIN.SUPPORT.LIST,
      },
      {
        title: "도움말 추가",
        href: ROUTE.ADMIN.SUPPORT.CREATE,
      },
    ],
  },
];

export const NavigationDrawer = () => {
  return (
    <nav className="hidden w-[240px] flex-col border-r pt-8 md:flex">
      <div className="mb-8 flex items-center gap-3 p-4">
        <Icon.ArrowLeft />
        <Link href={ROUTE.HOME} className="font-semibold">
          사이트로 돌아가기
        </Link>
      </div>
      {drawer.map((section) => (
        <NavigationDrawerSection key={section.title} title={section.title}>
          {section.items.map((item) => (
            <NavigationDrawerItem key={item.title} title={item.title} href={item.href} />
          ))}
        </NavigationDrawerSection>
      ))}
    </nav>
  );
};

interface NavigationDrawerSectionProps {
  title: string;
  children: React.ReactNode;
}

const NavigationDrawerSection = ({ title, children }: NavigationDrawerSectionProps) => {
  return (
    <div>
      <div className="p-4 text-xs font-medium text-muted-foreground">{title}</div>
      <ul>{children}</ul>
    </div>
  );
};

interface NavigationDrawerItemProps {
  title: string;
  href: string;
}

const NavigationDrawerItem = ({ title, href }: NavigationDrawerItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href}>
      <li className={cn("p-4 font-medium", isActive && "bg-gray-100")}>{title}</li>
    </Link>
  );
};
