import { ROUTE } from "@/constants/route";
import Link from "next/link";
import { EbookMobileNavigationDrawer } from "./navigation-drawer";

export const EbookMobileHeader = () => {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b bg-background px-4 md:hidden">
      <Link href={ROUTE.HOME}>유니버스 피아노</Link>
      <EbookMobileNavigationDrawer />
    </header>
  );
};
