"use client";

import { useAuditionList } from "@/features/audition";
import { noticeColumns } from "../data-table/columns/notice-columns";
import { DataTable } from "../data-table/data-table";

export const AuditionDataTable = () => {
  const { data } = useAuditionList();

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
