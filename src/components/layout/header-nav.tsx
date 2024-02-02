"use client";

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { headerNav } from "@/configs/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
        {headerNav.map((item, index) => (
          <HeaderNavItem key={index} title={item.title} href={item.href} />
        ))}
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
        "flex items-center text-sm font-semibold text-muted-foreground transition hover:text-accent-foreground",
        pathname.startsWith(getDomain(href)) && "text-accent-foreground",
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
