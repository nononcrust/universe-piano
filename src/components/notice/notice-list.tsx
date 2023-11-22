"use client";

import { ROUTE } from "@/constants/route";
import { useNoticeList } from "@/features/notice";
import { usePagination } from "@/hooks/use-pagination";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { PageTitle } from "../layout/page-title";
import { Pagination } from "../pagination";
import { NoticeListItem } from "./notice-list-item";

export const NoticeList = () => {
  const pagination = usePagination();

  const { data: notices } = useNoticeList();

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
      <Pagination
        className="mt-8"
        currentPage={pagination.current}
        totalPage={totalPage}
        onChange={pagination.onChange}
      />
    </main>
  );
};
