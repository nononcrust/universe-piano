"use client";

import { useNoticeList } from "@/features/notice";
import { noticeColumns } from "../data-table/columns/notice-columns";
import { DataTable } from "../data-table/data-table";

export const NoticeDataTable = () => {
  const { data } = useNoticeList();

  if (!data) return null;

  return (
    <DataTable
      columns={noticeColumns}
      data={data}
      searchColumnKey="title"
      searchInputPlaceholder="제목으로 검색"
    />
  );
};
