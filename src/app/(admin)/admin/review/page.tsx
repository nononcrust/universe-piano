"use client";

import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { reviewColumns } from "@/components/admin/data-table/columns/review-columns";
import { DataTable } from "@/components/admin/data-table/data-table";
import { useReviewList } from "@/services/review";

export default function AdminReviewListPage() {
  const { data } = useReviewList();

  if (!data) return null;

  return (
    <main>
      <AdminPageTitle title="후기 목록" />
      <DataTable
        columns={reviewColumns}
        data={data}
        searchInputPlaceholder="내용으로 검색"
        searchColumnKey="content"
      />
    </main>
  );
}
