"use client";

import { Icon } from "@/components/common/icon";
import { cn } from "@/lib/utils";
import { Drawer } from "vaul";

const drawer = [
  {
    title: "들어가기 전에",
    href: "/ebook/1",
  },
  {
    title: "피아노의 구성",
    href: "/ebook/2",
  },
  {
    title: "피아노의 구성",
    href: "/ebook/3",
  },
  {
    title: "피아노의 구성",
    href: "/ebook/4",
  },
  {
    title: "피아노의 구성",
    href: "/ebook/5",
  },
  {
    title: "피아노의 구성",
    href: "/ebook/6",
  },
  {
    title: "피아노의 구성",
    href: "/ebook/7",
  },
  {
    title: "피아노의 구성",
    href: "/ebook/8",
  },
  {
    title: "피아노의 구성",
    href: "/ebook/9",
  },
];

export const BookMobileNavigationDrawer = () => {
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
            {drawer.map((item, index) => (
              <Drawer.Close key={index} className="flex w-full flex-col">
                <BookMobileNavigationDrwerItem title={item.title} href={item.href} />
              </Drawer.Close>
            ))}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

interface BookMobileNavigationDrwerItemProps {
  title: string;
  href: string;
}

const BookMobileNavigationDrwerItem = ({ title, href }: BookMobileNavigationDrwerItemProps) => {
  return (
    <li
      className={cn(
        "flex w-full flex-1 rounded-lg p-4 font-medium transition hover:bg-content",
        // isActive && "bg-content",
      )}
      // onClick={() => router.push(href)}
    >
      {title}
    </li>
  );
};
