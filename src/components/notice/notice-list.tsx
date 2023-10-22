"use client";

import { ROUTE } from "@/constants/route";
import { Notice, useNoticeList } from "@/features/notice";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { PageTitle } from "../layouts/page-title";
import { NoticeListItem } from "./notice-list-item";

interface NoticeListProps {
  initialData: Notice[];
}

export const NoticeList = ({ initialData }: NoticeListProps) => {
  const { data } = useNoticeList(initialData);

  return (
    <main className="container pb-16">
      <PageTitle title="공지사항" />
      <ul className="mt-8 flex flex-col divide-y">
        {data?.map((item, index) => (
          <Link key={index} href={ROUTE.NOTICE.DETAIL(String(item.id))}>
            <NoticeListItem title={item.title} createdAt={formatDate(item.createdAt)} />
          </Link>
        ))}
      </ul>
    </main>
  );
};
