import { MobileNavigationDrawer } from "@/components/admin/navigation-drawer";
import { Icon } from "@/components/icon";
import { ROUTE } from "@/constants/route";
import Link from "next/link";

export const MobileHeader = () => {
  return (
    <header className="fixed top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-white px-4 md:hidden">
      <Link href={ROUTE.HOME} className="font-medium">
        <div className="flex cursor-pointer items-center gap-2">
          <Icon.ArrowLeft size={20} />
          사이트로 돌아가기
        </div>
      </Link>
      <MobileNavigationDrawer />
    </header>
  );
};
