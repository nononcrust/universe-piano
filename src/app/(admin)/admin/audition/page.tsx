"use client";

import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { auditionColumns } from "@/components/admin/data-table/columns/audition-columns";
import { DataTable } from "@/components/admin/data-table/data-table";
import { useAuditionList } from "@/features/audition";

export default function AdminAuditionListPage() {
  const { data } = useAuditionList();

  if (!data) return null;

  return (
    <main>
      <AdminPageTitle title="오디션 결과 목록" />
      <DataTable
        columns={auditionColumns}
        data={data}
        searchColumnKey="title"
        searchInputPlaceholder="제목으로 검색"
      />
    </main>
  );
}
