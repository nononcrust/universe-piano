"use client";

import { noticeColumns } from "@/components/admin/data-table/columns/notice-columns";
import { DataTable } from "@/components/admin/data-table/data-table";
import { useAuditionList } from "@/features/audition";

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
