import { BookMobileNavigationDrawer } from "@/components/book/mobile-navigation-drawer";
import { ROUTE } from "@/constants/route";
import Link from "next/link";

export const KitMobileHeader = () => {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b bg-background px-4 md:hidden">
      <Link href={ROUTE.HOME}>유니버스 피아노</Link>
      <BookMobileNavigationDrawer />
    </header>
  );
};
