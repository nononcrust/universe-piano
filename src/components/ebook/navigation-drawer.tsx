"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Drawer } from "vaul";
import { Icon } from "../icon";

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

export const EbookNavigationDrawer = () => {
  return (
    <nav className="hidden w-[240px] flex-col border-r pt-16 md:flex">
      {drawer.map((item, index) => (
        <EbookNavigationDrawerItem key={index} title={item.title} href={item.href} />
      ))}
    </nav>
  );
};

interface EbookNavigationDrawerItemProps {
  title: string;
  href: string;
}

const EbookNavigationDrawerItem = ({ title, href }: EbookNavigationDrawerItemProps) => {
  return (
    <Link href={href} className="p-4 text-muted-foreground transition hover:text-accent-foreground">
      {title}
    </Link>
  );
};

export const EbookMobileNavigationDrawer = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Icon.Menu className="h-8 w-8 cursor-pointer rounded-full p-1.5 transition duration-200 hover:bg-gray-100" />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 mt-24 flex max-h-[400px] flex-1 flex-col rounded-t-2xl bg-white p-2 outline-none">
          <div className="overflow-y-auto p-2">
            {drawer.map((item, index) => (
              <EbookMobileNavigationDrwerItem key={index} title={item.title} href={item.href} />
            ))}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

interface EbookMobileNavigationDrwerItemProps {
  title: string;
  href: string;
}

const EbookMobileNavigationDrwerItem = ({ title, href }: EbookMobileNavigationDrwerItemProps) => {
  return (
    <li
      className={cn(
        "flex w-full flex-1 rounded-lg p-4 font-medium transition hover:bg-gray-100",
        // isActive && "bg-gray-100",
      )}
      // onClick={() => router.push(href)}
    >
      {title}
    </li>
  );
};
