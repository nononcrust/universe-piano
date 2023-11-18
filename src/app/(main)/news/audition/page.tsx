"use client";

import { PageTitle } from "@/components/layout/page-title";
import { NoticeListItem } from "@/components/notice/notice-list-item";
import { NoticeListSkeleton } from "@/components/notice/notice-list-skeleton";
import { ROUTE } from "@/constants/route";
import { useAuditionList } from "@/features/audition";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function AuditionListPage() {
  const auditionListQuery = useAuditionList();

  return (
    <main className="container pb-16">
      <PageTitle title="오디션 결과 발표" />
      <ul className="mt-8 flex flex-col divide-y">
        {auditionListQuery.data?.map((item, index) => (
          <Link key={index} href={ROUTE.NEWS.AUDITION.DETAIL(String(item.id))}>
            <NoticeListItem title={item.title} createdAt={formatDate(item.createdAt)} />
          </Link>
        ))}
      </ul>
      {!auditionListQuery.isFetched && (
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
