"use client";

import { ROUTE } from "@/lib/constants/route";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "../icon";

export const NavigationDrawer = () => {
  return (
    <nav className="flex w-[240px] flex-col border-r pt-8">
      <div className="mb-8 flex items-center gap-3 p-4">
        <Icon.ArrowLeft />
        <Link href={ROUTE.HOME}>사이트로 돌아가기</Link>
      </div>
      <NavigationDrawerSection title="공지사항 관리">
        <NavigationDrawerItem title="공지사항 목록" href={ROUTE.ADMIN.NOTICE.LIST} />
        <NavigationDrawerItem title="공지사항 추가" href={ROUTE.ADMIN.NOTICE.CREATE} />
      </NavigationDrawerSection>
      <NavigationDrawerSection title="도움말 관리">
        <NavigationDrawerItem title="도움말 목록" href={ROUTE.ADMIN.SUPPORT.LIST} />
        <NavigationDrawerItem title="도움말 추가" href={ROUTE.ADMIN.SUPPORT.CREATE} />
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
