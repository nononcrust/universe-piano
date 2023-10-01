"use client";

import { ROUTE } from "@/lib/constants/route";
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
        <ListSection className="mt-4" title="소개">
          <ListItem href={ROUTE.ABOUT}>처음 오신 분들께</ListItem>
          <ListItem href={ROUTE.ABOUT}>대표의 스토리</ListItem>
          <ListItem href={ROUTE.NOTICE}>공지사항</ListItem>
          <ListItem href={ROUTE.SUPPORT}>고객센터</ListItem>
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
      <h2 className="mb-2 text-lg font-semibold text-foreground">{title}</h2>
      <ul className="flex flex-col gap-2">{children}</ul>
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
        <li className="cursor-pointer text-muted-foreground" onClick={onClick}>
          {children}
        </li>
      </SheetClose>
    </Link>
  );
};
