import { MainNav } from "@/components/layouts/main-nav";
import { siteConfig } from "@/config/site";
import { ROUTE } from "@/lib/constants/route";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <Link href={ROUTE.LOGIN}>로그인</Link>
      </div>
    </header>
  );
};
