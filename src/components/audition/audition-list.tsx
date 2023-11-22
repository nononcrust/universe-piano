"use client";

import { ROUTE } from "@/constants/route";
import { useAuditionList } from "@/features/audition";
import { usePagination } from "@/hooks/use-pagination";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { PageTitle } from "../layout/page-title";
import { NoticeListItem } from "../notice/notice-list-item";
import { Pagination } from "../pagination";

export const AuditionList = () => {
  const { data } = useAuditionList();
  const pagination = usePagination();

  const totalPage = data ? Math.ceil(data.length / 10) : 0;

  const paginatedAuditions = data?.slice((pagination.current - 1) * 10, pagination.current * 10);

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
      <Pagination
        className="mt-8"
        currentPage={pagination.current}
        totalPage={totalPage}
        onChange={pagination.onChange}
      />
    </main>
  );
};
