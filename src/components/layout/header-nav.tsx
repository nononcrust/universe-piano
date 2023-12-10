"use client";

import { ROUTE } from "@/constants/route";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";

const SERVICES: { title: string; href: string; description: string }[] = [
  {
    title: "입시 컨설팅",
    href: ROUTE.SERVICE.CONSULTING,
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "미국 음대 입시 과외",
    href: ROUTE.SERVICE.TUTORING,
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "스터디",
    href: ROUTE.HOME,
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "독학 키트",
    href: ROUTE.SERVICE.PRODUCT.LIST,
    description: "Visually or semantically separates content.",
  },
];

export const HeaderNav = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="flex gap-6">
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>
            <p className="text-[15px] text-sm font-medium text-muted-foreground transition hover:font-semibold hover:text-foreground">
              서비스
            </p>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[320px] md:grid-cols-1">
              {SERVICES.map((service) => (
                <ListItem key={service.title} title={service.title} href={service.href}>
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

        <HeaderNavItem title="소개" href={ROUTE.ABOUT.COMPANY} />
        <HeaderNavItem title="서비스" href={ROUTE.SERVICE.CONSULTING} />
        <HeaderNavItem title="소식" href={ROUTE.NEWS.NOTICE.LIST} />
        <HeaderNavItem title="고객지원" href={ROUTE.SUPPORT} />
      </NavigationMenuList>
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
        "flex items-center text-[15px] font-semibold transition hover:text-blue-600",
        pathname.startsWith(getDomain(href)) && "text-blue-600",
      )}
    >
      {title}
    </Link>
  );
};

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
