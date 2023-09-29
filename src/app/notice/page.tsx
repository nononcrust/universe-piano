"use client";

import { noticeApi } from "@/api/notice";
import { NoticeListItem } from "@/components/notice-list-item";
import { ROUTE } from "@/lib/constants/route";
import { formatDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const DUMMY_NOTICE_LIST = Array(10)
  .fill(0)
  .map(() => ({
    title: "공지사항 제목",
    createdAt: "2023.09.23",
  }));

export default function NoticePage() {
  const noticeListQuery = useQuery({
    queryFn: () => noticeApi.getNoticeList().then((res) => res.data),
    queryKey: ["notice", "list"],
  });

  console.log("@", noticeListQuery.data);

  return (
    <main className="container py-16">
      <h1 className="text-2xl font-bold text-foreground md:mt-8 md:text-3xl">공지사항</h1>
      <ul className="mt-8 flex flex-col divide-y">
        <Link href={ROUTE.NOTICE_DETAIL(String(0))}>
          <NoticeListItem title="유니버스 피아노 홈페이지 개설 안내" createdAt="2023.09.23" />
        </Link>
        {noticeListQuery.data?.map((item, index) => (
          <Link key={index} href={ROUTE.NOTICE_DETAIL(String(index))}>
            <NoticeListItem title={item.title} createdAt={formatDate(item.createdAt)} />
          </Link>
        ))}
      </ul>
    </main>
  );
}
