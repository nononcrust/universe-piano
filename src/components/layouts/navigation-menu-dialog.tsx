"use client";

import { useScrollLock } from "@/hooks/use-scroll-lock";
import { ROUTE } from "@/lib/constants/route";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icon } from "../icon";
import { ScrollArea } from "../ui/scroll-area";

interface NavigationMenuDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavigationMenuDialog = ({ isOpen, onClose }: NavigationMenuDialogProps) => {
  useScrollLock(isOpen);

  if (!isOpen) return null;

  return (
    <div className="overflow-contain fixed left-0 top-0 z-40 min-h-full min-w-full overflow-hidden overscroll-y-none bg-white">
      <div className="flex items-center justify-between border-b p-4">
        <h1 className="text-xl font-bold">유니버스 피아노</h1>
        <Icon.X className="cursor-pointer" onClick={onClose} />
      </div>
      <ScrollArea className="h-screen px-4">
        <ListSection className="mt-4" title="소개">
          <ListItem onClick={onClose} href={ROUTE.ABOUT}>
            처음 오신 분들께
          </ListItem>
          <ListItem onClick={onClose} href={ROUTE.ABOUT}>
            대표의 스토리
          </ListItem>
          <ListItem onClick={onClose} href={ROUTE.NOTICE}>
            공지사항
          </ListItem>
        </ListSection>
        {/* <ListSection title="서비스">
          <ListItem onClick={onClose} href={ROUTE.HOME}>
            미국 음대 입시 컨설팅
          </ListItem>
          <ListItem onClick={onClose} href={ROUTE.HOME}>
            A to Z 미국 응대 입시 과외
          </ListItem>
        </ListSection>
        <ListSection title="스터디">
          <ListItem onClick={onClose} href={ROUTE.HOME}>
            습관 형성 스터디 안내
          </ListItem>
          <ListItem onClick={onClose} href={ROUTE.HOME}>
            스터디 후기
          </ListItem>
        </ListSection>
        <ListSection title="후기">
          <ListItem onClick={onClose} href={ROUTE.HOME}>
            컨설팅 후기
          </ListItem>
          <ListItem onClick={onClose} href={ROUTE.HOME}>
            스터디 후기
          </ListItem>
        </ListSection>
        <ListSection title="커뮤니티">
          <ListItem onClick={onClose} href={ROUTE.HOME}>
            커뮤니티 가입 안내
          </ListItem>
          <ListItem onClick={onClose} href={ROUTE.HOME}>
            미국 응대 오디션 결과 발표
          </ListItem>
          <ListItem onClick={onClose} href={ROUTE.HOME}>
            커뮤니티 전용 게시판
          </ListItem>
        </ListSection>
        <ListSection className="pb-[240px]" title="Q&A">
          <ListItem onClick={onClose} href={ROUTE.HOME}>
            미국 응대 입시 Q&A
          </ListItem>
          <ListItem onClick={onClose} href={ROUTE.HOME}>
            영어 시험 Q&A
          </ListItem>
        </ListSection> */}
      </ScrollArea>
    </div>
  );
};

interface ListSubHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  children: React.ReactNode;
}

const ListSection = ({ title, className, children }: ListSubHeaderProps) => {
  return (
    <div className={cn("mb-4", className)}>
      <h2 className="mb-2 text-lg font-semibold text-foreground">{title}</h2>
      <ul className="flex flex-col gap-2">{children}</ul>
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
      <li className="cursor-pointer text-muted-foreground" onClick={onClick}>
        {children}
      </li>
    </Link>
  );
};
