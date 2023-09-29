"use client";

import { siteConfig } from "@/config/site";
import { useDialog } from "@/hooks/use-dialog";
import { ROUTE } from "@/lib/constants/route";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "../icon";
import { NavigationMenuDialog } from "./navigation-menu-dialog";

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
  const pathname = usePathname();

  const menuDialog = useDialog();

  return (
    <div className="flex gap-6 md:gap-10">
      <Icon.Menu className="cursor-pointer md:hidden" onClick={menuDialog.open} />
      <NavigationMenuDialog isOpen={menuDialog.isOpen} onClose={menuDialog.close} />
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
                  pathname === item.href && "text-foreground",
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
