"use client";

import { NavigationMenu } from "@/components/ui/navigation-menu";
import { ROUTE } from "@/constants/route";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ColoredIcon } from "../shared/colored-icon";
import { Icon } from "../shared/icon";

const SERVICES = [
  {
    title: "입시 컨설팅",
    description: "미국 음대 입시생을 위한 1:1 맞춤형 컨설팅",
    href: ROUTE.SERVICE.CONSULTING,
    icon: <ColoredIcon.Idea />,
  },
  {
    title: "미국 음대 입시 과외",
    description: "단기간에 완성하는 맞춤형 입시 과외!",
    href: ROUTE.SERVICE.STUDY,
    icon: <ColoredIcon.Chat />,
  },
  {
    title: "영어 스터디",
    description: "음대생을 위한 영어 스터디",
    href: ROUTE.SERVICE.TUTORING,
    icon: <ColoredIcon.Pencil />,
  },
  // {
  //   title: "독학 키트",
  //   description: "독학러를 위한 유학 준비 키트",
  //   href: ROUTE.SERVICE.KIT,
  //   icon: <ColoredIcon.Storage />,
  // },
  // {
  //   title: "부분 컨설팅",
  //   description: "미국 음대 입시 관련 부분 컨설팅",
  //   href: ROUTE.SERVICE.PARTIAL_CONSULTING,
  //   icon: <ColoredIcon.Todo />,
  // },
] as const;

export const HeaderNav = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenu.List className="flex gap-6">
        <HeaderNavItem title="소개" href={ROUTE.ABOUT.COMPANY} />
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className={cn(
              "text-sm font-medium text-sub transition-colors",
              "hover:font-semibold hover:text-main",
            )}
          >
            서비스
            <Icon.ChevronDown
              className={cn(
                "ml-0.5 h-4 w-4 transition",
                "duration-200 group-data-[state=open]:rotate-180",
              )}
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-1">
              {SERVICES.map((service) => (
                <ListItem key={service.title} {...service} />
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <HeaderNavItem title="소식" href={ROUTE.NEWS.NOTICE.LIST} />
        <HeaderNavItem title="고객지원" href={ROUTE.SUPPORT} />
      </NavigationMenu.List>
    </NavigationMenu>
  );
};

interface HeaderNavItemProps {
  title: string;
  href: string;
}

const HeaderNavItem = ({ title, href }: HeaderNavItemProps) => {
  const pathname = usePathname();

  const getDomain = (href: string) => {
    return `/${href.split("/")[1]}`;
  };

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center text-sm font-semibold text-sub transition-colors hover:text-main",
        pathname.startsWith(getDomain(href)) && "text-main",
      )}
    >
      {title}
    </Link>
  );
};

interface ListItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const ListItem = ({ title, description, icon, href }: ListItemProps) => {
  return (
    <li className="rounded-md transition hover:bg-gray-100">
      <NavigationMenu.Link asChild>
        <Link
          href={href}
          className={cn(
            "flex select-none gap-4 rounded-md p-3 leading-none no-underline transition-colors",
            "hover:bg-accent hover:text-main",
          )}
        >
          <div className="h-9 w-9 rounded-md bg-content p-2">{icon}</div>
          <div className="flex flex-1 flex-col gap-1">
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-sub">{description}</p>
          </div>
        </Link>
      </NavigationMenu.Link>
    </li>
  );
};
