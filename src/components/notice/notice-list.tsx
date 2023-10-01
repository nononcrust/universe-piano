"use client";

import { noticeApi } from "@/api/notice";
import { GetNoticeListApiResponse } from "@/api/notice.type";
import { ROUTE } from "@/lib/constants/route";
import { formatDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { PageTitle } from "../layouts/page-title";
import { NoticeListItem } from "./notice-list-item";

interface NoticeListProps {
  initialData: GetNoticeListApiResponse;
}

export const NoticeList = ({ initialData }: NoticeListProps) => {
  const { data } = useQuery({
    queryFn: noticeApi.getNoticeList,
    queryKey: ["notice", "list"],
    initialData,
  });

  return (
    <main className="container pb-16">
      <PageTitle title="공지사항" />
      <ul className="mt-8 flex flex-col divide-y">
        {data?.map((item, index) => (
          <Link key={index} href={ROUTE.NOTICE_DETAIL(String(item.id))}>
            <NoticeListItem title={item.title} createdAt={formatDate(item.createdAt)} />
          </Link>
        ))}
      </ul>
    </main>
  );
};
