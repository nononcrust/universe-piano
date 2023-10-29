"use client";

import { PageTitle } from "@/components/layout/page-title";
import { ROUTE } from "@/constants/route";
import { useNoticeList } from "@/features/notice";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function NoticePage() {
  const { data } = useNoticeList();

  return (
    <main className="container pb-16">
      <PageTitle title="공지사항" />
      <ul className="mt-8 flex flex-col divide-y">
        {data?.map((item, index) => (
          <Link key={index} href={ROUTE.NEWS.NOTICE.DETAIL(String(item.id))}>
            <NoticeListItem title={item.title} createdAt={formatDate(item.createdAt)} />
          </Link>
        ))}
      </ul>
    </main>
  );
}

interface NoticeListItemProps {
  title: string;
  createdAt: string;
}

export const NoticeListItem = ({ title, createdAt }: NoticeListItemProps) => {
  return (
    <li className="flex cursor-pointer flex-col py-4">
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-sm text-muted-foreground">{createdAt}</p>
    </li>
  );
};
