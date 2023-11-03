"use client";

import { siteConfig } from "@/configs/site";
import { ROUTE } from "@/constants/route";
import { useUserInfo } from "@/features/auth";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icon } from "../icon";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

export const NavigationMenuDialog = () => {
  const { data: user } = useUserInfo();

  return (
    <Sheet>
      <SheetTrigger className="outline-none md:hidden">
        <Icon.Menu />
      </SheetTrigger>
      <SheetContent side="right">
        <ListSection className="mt-4" title="유니버스 피아노">
          {/* {user && (
            <div className="mb-4 mt-2">
              <UserProfile />
            </div>
          )} */}
          {Object.values(siteConfig.contents).map((category, index) => (
            <ListCategory key={category.href} title={category.title}>
              {category.children.map((item) => (
                <ListItem key={item.href} href={item.href}>
                  {item.title}
                </ListItem>
              ))}
            </ListCategory>
          ))}
        </ListSection>
        {!user && (
          <div className="mt-8 flex gap-4">
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
  return (
    <div className="flex flex-col">
      <p className="mb-2 font-medium">{title}</p>
      {children}
    </div>
  );
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
          className="flex-1 cursor-pointer py-1 text-left text-muted-foreground"
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
        <p className="font-semibold">{user.nickname}</p>
        <p className="text-muted-foreground">{user.email}</p>
      </div>
    </div>
  );
};
