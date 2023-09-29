"use client";

import { ROUTE } from "@/lib/constants/route";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavigationDrawer = () => {
  return (
    <nav className="w-[240px] border-r pt-8">
      <NavigationDrawerSection title="공지사항 관리">
        <NavigationDrawerItem title="공지사항 목록" href={ROUTE.ADMIN.NOTICE} />
        <NavigationDrawerItem title="공지사항 추가" href={ROUTE.ADMIN.NOTICE_CREATE} />
      </NavigationDrawerSection>
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
      <div className="p-4 text-sm font-semibold text-muted-foreground">{title}</div>
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
