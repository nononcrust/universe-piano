"use client";

import { ROUTE } from "@/constants/route";
import { getFormattedContentsByBook } from "@/lib/contentlayer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "../common/icon";

interface BookNavigationDrawerProps {
  book: string;
}

export const BookNavigationDrawer = ({ book }: BookNavigationDrawerProps) => {
  const contents = getFormattedContentsByBook(book);

  return (
    <nav className="hidden w-[320px] flex-col divide-y overflow-y-auto border-r p-10 scrollbar-hide md:flex">
      <div className="mb-4">
        <button className="group flex items-center text-sm">
          <Icon.ChevronLeft className="mr-1 h-4 w-4 transition-all group-hover:-translate-x-1" />
          목록으로 돌아가기
        </button>
      </div>
      {contents.map((item, index) => (
        <div key={index}>
          <DrawerSubtitle className="mt-4" title={item.category!} />
          <div className="flex flex-col">
            {item.children.map((content, index) => (
              <DrawerItem key={index} title={content.title} href={content.url} />
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
};

interface DrawerSubtitleProps {
  title: string;
  className?: string;
}

const DrawerSubtitle = ({ title, className, ...props }: DrawerSubtitleProps) => {
  return (
    <div className={cn("text-sm font-medium uppercase text-primary", className)} {...props}>
      {title}
    </div>
  );
};

interface DrawerItemProps {
  title: string;
  href: string;
}

const DrawerItem = ({ title, href }: DrawerItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === ROUTE.BOOK.DETAIL(href);

  return (
    <Link
      scroll={false}
      href={ROUTE.BOOK.DETAIL(href)}
      className={cn(
        "py-4 text-muted-foreground transition hover:text-accent-foreground",
        isActive && "font-semibold text-accent-foreground",
      )}
    >
      {title}
    </Link>
  );
};
