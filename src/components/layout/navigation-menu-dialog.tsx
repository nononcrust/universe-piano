"use client";

import { siteContents } from "@/configs/site";
import { TIER_LABEL } from "@/constants/enum";
import { ROUTE } from "@/constants/route";
import { useUserInfo } from "@/features/auth";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../icon";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

export const NavigationMenuDialog = () => {
  const { data: user } = useUserInfo();
  const auth = useAuth();

  return (
    <Sheet>
      <SheetTrigger className="outline-none md:hidden" aria-label="menu-button">
        <Icon.Menu />
      </SheetTrigger>
      <SheetContent className="overflow-y-auto" side="right">
        <ListSection>
          {!user && (
            <div className="mb-4 flex gap-3">
              <Button variant="secondary" asChild className="h-12 flex-1">
                <Link href={ROUTE.LOGIN}>유니버스 피아노 로그인</Link>
              </Button>
              {/* <Button asChild className="h-12 flex-1">
                <Link href={ROUTE.LOGIN}>회원가입</Link>
              </Button> */}
            </div>
          )}
          {user && (
            <div className="mb-4 mt-2">
              <UserProfile />
            </div>
          )}
          {user && (
            <ListCategory title="">
              <ListItem href={ROUTE.MYPAGE.PROFILE}>MY 유니버스</ListItem>
            </ListCategory>
          )}
          {Object.values(siteContents)
            .filter((item) => item.href !== ROUTE.MYPAGE.HOME)
            .map((category, index) => (
              <ListCategory key={category.href} title={category.title}>
                {category.children.map((item) => (
                  <ListItem key={item.href} href={item.href}>
                    {item.title}
                  </ListItem>
                ))}
              </ListCategory>
            ))}
        </ListSection>
        {user && (
          <button className="mt-2 font-medium text-muted-foreground" onClick={auth.logout}>
            로그아웃
          </button>
        )}
      </SheetContent>
    </Sheet>
  );
};
interface ListSubHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const ListSection = ({ title, className, children }: ListSubHeaderProps) => {
  return (
    <div className={cn("mb-4", className)}>
      <div className="flex h-10 items-center justify-between">
        <Image
          priority
          className="w-[100px]"
          src="/images/text-logo.png"
          width={100}
          height={28.13}
          alt="사이트 로고"
        />
        <SheetClose className="outline-none">
          <Icon.X />
        </SheetClose>
      </div>
      <ul className="mt-4 flex flex-col gap-2">{children}</ul>
    </div>
  );
};

interface ListCategoryProps {
  title: string;
  children: React.ReactNode;
}

const ListCategory = ({ title, children }: ListCategoryProps) => {
  return <div className="mt-2 flex flex-col border-b border-gray-100 pb-3">{children}</div>;
};

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  href: string;
}

const ListItem = ({ children, href, onClick }: ListItemProps) => {
  return (
    <Link href={href}>
      <SheetClose className="flex w-full">
        <li
          className="flex-1 cursor-pointer py-3 text-left font-medium text-foreground"
          onClick={onClick}
        >
          {children}
        </li>
      </SheetClose>
    </Link>
  );
};

const UserProfile = () => {
  const { data: user } = useUserInfo();

  if (!user) return null;

  return (
    <div className="flex gap-4">
      <Avatar className="h-12 w-12">
        <AvatarImage src={user.profileImage} />
        <AvatarFallback resource={user.profileImage} />
      </Avatar>
      <div>
        <div className="flex items-center gap-2">
          <p className="text-lg font-medium">{user.nickname}</p>
          <Badge variant="secondary">{TIER_LABEL[user.tier]}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{user.email}</p>
      </div>
    </div>
  );
};
