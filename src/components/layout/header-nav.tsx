"use client";

import { NavigationMenu } from "@/components/ui/navigation-menu";
import { headerNav } from "@/configs/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const HeaderNav = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenu.List className="flex gap-6">
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>
            <p className="text-[15px] text-sm font-medium text-sub transition hover:font-semibold hover:text-foreground">
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
        "flex items-center text-sm font-semibold text-sub transition hover:text-main",
        pathname.startsWith(getDomain(href)) && "text-main",
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
        <NavigationMenu.Link asChild>
          <a
            ref={ref}
            className={cn(
              "hover:bg-accent focus:bg-accent block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-main focus:text-main",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-sub">{children}</p>
          </a>
        </NavigationMenu.Link>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
