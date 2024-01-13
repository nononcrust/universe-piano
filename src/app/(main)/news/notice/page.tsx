"use client";

import { Pagination } from "@/components/common/pagination";
import { PageTitle } from "@/components/layout/page-title";
import { NoticeListItem } from "@/components/notice/notice-list-item";
import { ROUTE } from "@/constants/route";
import { useNoticeList } from "@/features/notice";
import { usePagination } from "@/hooks/use-pagination";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function NoticeListPage() {
  const pagination = usePagination();

  const { data: notices, isPending } = useNoticeList();

  const totalPage = notices ? Math.ceil(notices.length / 10) : 0;

  const paginatedNotices = notices?.slice((pagination.current - 1) * 10, pagination.current * 10);

  return (
    <main className="container pb-16">
      <PageTitle title="공지사항" />
      <ul className="mt-8 flex flex-col divide-y">
        {paginatedNotices?.map((item, index) => (
          <Link key={index} href={ROUTE.NEWS.NOTICE.DETAIL(String(item.id))}>
            <NoticeListItem title={item.title} createdAt={formatDate(item.createdAt)} />
          </Link>
        ))}
      </ul>
      {paginatedNotices?.length === 0 && (
        <div className="flex h-72 items-center justify-center">
          <p className="font-medium text-gray-400">등록된 공지사항이 없습니다.</p>
        </div>
      )}
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
