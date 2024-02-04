"use client";

import { Icon } from "@/components/common/icon";
import { ROUTE } from "@/constants/route";
import { getFormattedContentsByBook } from "@/lib/contentlayer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer } from "vaul";

interface BookMobileNavigationDrawerProps {
  book: string;
}

export const BookMobileNavigationDrawer = ({ book }: BookMobileNavigationDrawerProps) => {
  const contents = getFormattedContentsByBook(book);

  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Icon.Menu className="h-8 w-8 cursor-pointer rounded-full p-1.5 transition duration-200 hover:bg-content" />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 mt-24 flex max-h-[400px] flex-1 flex-col rounded-t-2xl bg-white p-2 outline-none">
          <div className="overflow-y-auto p-2">
            <div className="mb-4 flex h-14 items-center gap-2">
              <Drawer.Close className="flex h-full flex-1 items-center gap-4 rounded-lg border px-4 transition">
                <Icon.BookOpen />
                <p>책 목록</p>
              </Drawer.Close>
              <Drawer.Close className="flex h-full flex-1 items-center gap-4 rounded-lg border px-4 transition">
                <Icon.Home />
                <p>홈페이지</p>
              </Drawer.Close>
            </div>
            {contents.map((item, index) => (
              <div key={index} className="p-2">
                <DrawerSubtitle className="mt-2" title={item.category!} />
                <div className="flex flex-col">
                  {item.children.map((content, index) => (
                    <DrawerItem key={index} title={content.title} href={content.url} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
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
      className={cn(
        "flex w-full flex-1 rounded-lg py-4 font-medium text-muted-foreground transition",
        isActive && "font-semibold text-accent-foreground",
      )}
      href={ROUTE.BOOK.DETAIL(href)}
    >
      {title}
    </Link>
  );
};
