"use client";

import { PageTitle } from "@/components/layout/page-title";
import { NoticeListItem } from "@/components/notice/notice-list-item";
import { Pagination } from "@/components/pagination";
import { ROUTE } from "@/constants/route";
import { useNoticeList } from "@/features/notice";
import { useAnimateOnLoad } from "@/hooks/use-animate-on-load";
import { usePagination } from "@/hooks/use-pagination";
import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";

export default function NoticeListPage() {
  const pagination = usePagination();

  const { data: notices, isLoading } = useNoticeList();
  const { animating } = useAnimateOnLoad({ isLoading });

  const totalPage = notices ? Math.ceil(notices.length / 10) : 0;

  const paginatedNotices = notices?.slice((pagination.current - 1) * 10, pagination.current * 10);

  return (
    <main className="container pb-16">
      <PageTitle title="공지사항" />
      <ul className="mt-8 flex flex-col divide-y">
        {paginatedNotices?.map((item, index) => (
          <Link
            className={cn(animating && "animate-fade-in")}
            key={index}
            href={ROUTE.NEWS.NOTICE.DETAIL(String(item.id))}
          >
            <NoticeListItem title={item.title} createdAt={formatDate(item.createdAt)} />
          </Link>
        ))}
      </ul>
      {isLoading &&
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
