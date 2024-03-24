"use client";

import { PageTitle } from "@/components/layout/page-title";
import { NoticeListItem } from "@/components/notice/notice-list-item";
import { Pagination } from "@/components/shared/pagination";
import { ROUTE } from "@/constants/route";
import { useAuditionList } from "@/features/audition";
import { usePagination } from "@/hooks/use-pagination";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function AuditionListPage() {
  const { data: auditions, isPending } = useAuditionList();

  const pagination = usePagination();

  const totalPage = auditions ? Math.ceil(auditions.length / 10) : 0;

  const paginatedAuditions = auditions?.slice(
    (pagination.current - 1) * 10,
    pagination.current * 10,
  );

  return (
    <main className="container pb-16">
      <PageTitle title="오디션 결과 발표" />
      <ul className="mt-8 flex flex-col divide-y">
        {paginatedAuditions?.map((item, index) => (
          <Link key={index} href={ROUTE.NEWS.AUDITION.DETAIL(String(item.id))}>
            <NoticeListItem title={item.title} createdAt={formatDate(item.createdAt)} />
          </Link>
        ))}
      </ul>
      {isPending &&
        Array(5)
          .fill(0)
          .map((_, index) => <NoticeListItem.Skeleton key={index} />)}
      <Pagination
        className="mt-8"
        currentPage={pagination.current}
        totalPage={totalPage}
        onChange={pagination.onChange}
      />
    </main>
  );
}
