"use client";

import { siteConfig } from "@/configs/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icon } from "../icon";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

export const NavigationMenuDialog = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Icon.Menu />
      </SheetTrigger>
      <SheetContent side="left">
        <ListSection className="mt-4" title="유니버스 피아노">
          {siteConfig.mainNav.map((item, index) => (
            <ListItem key={index} href={item.href}>
              {item.title}
            </ListItem>
          ))}
        </ListSection>
      </SheetContent>
    </Sheet>
  );
};
interface ListSubHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  children: React.ReactNode;
}

const ListSection = ({ title, className, children }: ListSubHeaderProps) => {
  return (
    <div className={cn("mb-4", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        <SheetClose>
          <Icon.X />
        </SheetClose>
      </div>
      <ul className="mt-4 flex flex-col gap-2">{children}</ul>
    </div>
  );
};

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  href: string;
}

const ListItem = ({ children, href, onClick }: ListItemProps) => {
  return (
    <Link href={href}>
      <SheetClose className="flex w-full">
        <li
          className="flex-1 cursor-pointer border-b py-6 text-left text-lg text-muted-foreground"
          onClick={onClick}
        >
          {children}
        </li>
      </SheetClose>
    </Link>
  );
};
