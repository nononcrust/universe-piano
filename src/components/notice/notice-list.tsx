"use client";

import { ROUTE } from "@/constants/route";
import { useNoticeList } from "@/features/notice";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { PageTitle } from "../layout/page-title";
import { NoticeListItem } from "./notice-list-item";

export const NoticeList = () => {
  const { data } = useNoticeList();

  return (
    <main className="container pb-16">
      <PageTitle title="공지사항" />
      <ul className="mt-8 flex flex-col divide-y">
        {data.map((item, index) => (
          <Link key={index} href={ROUTE.NOTICE.ANNOUNCEMENTS.DETAIL(String(item.id))}>
            <NoticeListItem title={item.title} createdAt={formatDate(item.createdAt)} />
          </Link>
        ))}
      </ul>
    </main>
  );
};
