"use client";

import { siteConfig } from "@/config/site";
import { ROUTE } from "@/lib/constants/route";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NavigationDrawer } from "./navigation-drawer";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}

interface MainNavProps {
  items: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <NavigationDrawer />
      <Link href={ROUTE.HOME} className="flex items-center space-x-2">
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <nav className="hidden gap-6 md:flex">
        {items.map(
          (item, index) =>
            item.href && (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-medium text-muted-foreground",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                {item.title}
              </Link>
            ),
        )}
      </nav>
    </div>
  );
}
