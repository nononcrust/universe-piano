"use client";

import { PageTitle } from "@/components/layout/page-title";
import { NoticeListItem } from "@/components/notice/notice-list-item";
import { NoticeListSkeleton } from "@/components/notice/notice-list-skeleton";
import { ROUTE } from "@/constants/route";
import { useNoticeList } from "@/features/notice";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function NoticePage() {
  const { data, isFetched } = useNoticeList();

  return (
    <main className="container pb-16">
      <PageTitle title="공지사항" />
      <ul className="mt-8 flex flex-col divide-y">
        {isFetched &&
          data?.map((item, index) => (
            <Link key={index} href={ROUTE.NEWS.NOTICE.DETAIL(String(item.id))}>
              <NoticeListItem title={item.title} createdAt={formatDate(item.createdAt)} />
            </Link>
          ))}
      </ul>
      {!isFetched && (
        <>
          <NoticeListSkeleton />
          <NoticeListSkeleton />
          <NoticeListSkeleton />
          <NoticeListSkeleton />
        </>
      )}
    </main>
  );
}
