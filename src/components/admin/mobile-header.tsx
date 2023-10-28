import { ROUTE } from "@/constants/route";
import Link from "next/link";
import { Icon } from "../icon";
import { MobileNavigationDrawer } from "./navigation-drawer";

export const MobileHeader = () => {
  return (
    <header className="fixed top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-white px-4 md:hidden">
      <Link href={ROUTE.HOME} className="font-semibold">
        <div className="flex cursor-pointer items-center gap-2 text-sm">
          <Icon.ArrowLeft className="h-4 w-4" />
          사이트로 돌아가기
        </div>
      </Link>
      <MobileNavigationDrawer />
    </header>
  );
};