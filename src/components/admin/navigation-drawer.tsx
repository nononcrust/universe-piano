"use client";

import { adminNav } from "@/configs/site";
import { ROUTE } from "@/constants/route";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Drawer } from "vaul";
import { Icon } from "../icon";

export const NavigationDrawer = () => {
  return (
    <nav className="hidden w-[240px] flex-col border-r pt-8 md:flex">
      <Link href={ROUTE.HOME} className="font-semibold">
        <div className="mx-4 mb-8 flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-gray-100">
          <Icon.ArrowLeft />
          사이트로 돌아가기
        </div>
      </Link>
      {adminNav.map((section, index) => (
        <NavigationDrawerSection key={index} title={section.title}>
          {section.items.map((item, index) => (
            <NavigationDrawerItem key={index} title={item.title} href={item.href} />
          ))}
        </NavigationDrawerSection>
      ))}
    </nav>
  );
};

interface NavigationDrawerSectionProps {
  title: string;
  children: React.ReactNode;
}

const NavigationDrawerSection = ({ title, children }: NavigationDrawerSectionProps) => {
  return (
    <div>
      <div className="p-4 text-xs font-medium text-muted-foreground">{title}</div>
      <ul>{children}</ul>
    </div>
  );
};

interface NavigationDrawerItemProps {
  title: string;
  href: string;
}

const NavigationDrawerItem = ({ title, href }: NavigationDrawerItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} className="flex flex-1">
      <li
        className={cn(
          "w-full flex-1 p-4 font-medium transition hover:bg-gray-100",
          isActive && "bg-gray-100",
        )}
      >
        {title}
      </li>
    </Link>
  );
};

interface MobileNavigationDrawerItemProps {
  title: string;
  href: string;
}

const MobileNavigationDrawerItem = ({ title, href }: MobileNavigationDrawerItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = pathname === href;

  return (
    <li
      className={cn(
        "flex w-full flex-1 rounded-lg p-4 font-medium transition hover:bg-gray-100",
        isActive && "bg-gray-100",
      )}
      onClick={() => router.push(href)}
    >
      {title}
    </li>
  );
};

export const MobileNavigationDrawer = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Icon.Menu className="h-8 w-8 cursor-pointer rounded-full p-1.5 transition duration-200 hover:bg-gray-100" />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 mt-24 flex max-h-[400px] flex-1 flex-col rounded-t-2xl bg-white p-2 outline-none">
          <div className="overflow-y-auto p-2">
            {adminNav.map((section, index) => (
              <NavigationDrawerSection key={index} title={section.title}>
                {section.items.map((item, index) => (
                  <Drawer.Close key={index} className="flex w-full flex-1 flex-col">
                    <MobileNavigationDrawerItem title={item.title} href={item.href} />
                  </Drawer.Close>
                ))}
              </NavigationDrawerSection>
            ))}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
