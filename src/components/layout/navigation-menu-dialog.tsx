"use client";

import { siteConfig } from "@/configs/site";
import { TIER_LABEL } from "@/constants/enum";
import { ROUTE } from "@/constants/route";
import { useUserInfo } from "@/features/auth";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icon } from "../icon";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

export const NavigationMenuDialog = () => {
  const { data: user } = useUserInfo();
  const { logout } = useAuth();

  return (
    <Sheet>
      <SheetTrigger className="outline-none md:hidden">
        <Icon.Menu />
      </SheetTrigger>
      <SheetContent className="overflow-y-auto" side="right">
        <ListSection title="유니버스 피아노">
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
          {Object.values(siteConfig.contents)
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
          <button className="mt-2 font-medium text-muted-foreground" onClick={logout}>
            로그아웃
          </button>
        )}
        {!user && (
          <div className="my-4 flex gap-4">
            <Button asChild className="h-14 flex-1">
              <Link href={ROUTE.LOGIN}>유니버스 피아노 시작하기</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
interface ListSubHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  children: React.ReactNode;
}

const ListSection = ({ title, className, children }: ListSubHeaderProps) => {
  return (
    <div className={cn("mb-4", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
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
          <p className="text-lg font-semibold">{user.nickname}</p>
          <Badge variant="secondary">{TIER_LABEL[user.tier]}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{user.email}</p>
      </div>
    </div>
  );
};
