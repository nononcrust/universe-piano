"use client";

import { noticeApi } from "@/api/notice";
import { NoticeListItem } from "@/components/notice-list-item";
import { ROUTE } from "@/lib/constants/route";
import { formatDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function NoticePage() {
  const { data } = useQuery({
    queryFn: noticeApi.getNoticeList,
    queryKey: ["notice", "list"],
  });

  console.log("@공지사항 목록", data);

  return (
    <main className="container py-16">
      <h1 className="text-2xl font-bold text-foreground md:mt-8 md:text-3xl">공지사항</h1>
      <ul className="mt-8 flex flex-col divide-y">
        {data &&
          data.map((item, index) => (
            <Link key={index} href={ROUTE.NOTICE_DETAIL(String(item.id))}>
              <NoticeListItem title={item.title} createdAt={formatDate(item.createdAt)} />
            </Link>
          ))}
      </ul>
    </main>
  );
}
