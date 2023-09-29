"use client";

import { ROUTE, Route } from "@/lib/constants/route";
import Link from "next/link";
import { Icon } from "../icon";
import { ScrollArea } from "../ui/scroll-area";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

export const NavigationDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Icon.Menu />
      </SheetTrigger>
      <SheetContent side="left">
        <h1 className="mb-4 text-xl font-bold">유니버스 피아노</h1>
        <ScrollArea>
          <ListSection title="소개">
            <ListItem href={ROUTE.ABOUT}>처음 오신 분들께</ListItem>
            <ListItem href={ROUTE.ABOUT}>대표의 스토리</ListItem>
          </ListSection>
          <ListSection title="서비스">
            <ListItem href={ROUTE.HOME}>미국 음대 입시 컨설팅</ListItem>
            <ListItem href={ROUTE.HOME}>A to Z 미국 응대 입시 과외</ListItem>
          </ListSection>
          <ListSection title="스터디">
            <ListItem href={ROUTE.HOME}>습관 형성 스터디 안내</ListItem>
            <ListItem href={ROUTE.HOME}>스터디 후기</ListItem>
          </ListSection>
          <ListSection title="후기">
            <ListItem href={ROUTE.HOME}>컨설팅 후기</ListItem>
            <ListItem href={ROUTE.HOME}>스터디 후기</ListItem>
          </ListSection>
          <ListSection title="후기">
            <ListItem href={ROUTE.HOME}>컨설팅 후기</ListItem>
            <ListItem href={ROUTE.HOME}>스터디 후기</ListItem>
          </ListSection>
          <ListSection title="후기">
            <ListItem href={ROUTE.HOME}>컨설팅 후기</ListItem>
            <ListItem href={ROUTE.HOME}>스터디 후기</ListItem>
          </ListSection>
          <ListSection title="커뮤니티">
            <ListItem href={ROUTE.HOME}>커뮤니티 가입 안내</ListItem>
            <ListItem href={ROUTE.HOME}>미국 응대 오디션 결과 발표</ListItem>
            <ListItem href={ROUTE.HOME}>커뮤니티 전용 게시판</ListItem>
          </ListSection>
          <ListSection title="Q&A">
            <ListItem href={ROUTE.HOME}>미국 응대 입시 Q&A</ListItem>
            <ListItem href={ROUTE.HOME}>영어 시험 Q&A</ListItem>
          </ListSection>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

interface ListSubHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  children: React.ReactNode;
}

const ListSection = ({ title, children }: ListSubHeaderProps) => {
  return (
    <div className="mb-4">
      <h2 className="mb-2 text-lg font-semibold text-foreground">{title}</h2>
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
};

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  href: Route;
}

const ListItem = ({ children, href }: ListItemProps) => {
  return (
    <Link href={href}>
      <SheetClose>
        <li className="cursor-pointer list-none text-muted-foreground">{children}</li>
      </SheetClose>
    </Link>
  );
};
