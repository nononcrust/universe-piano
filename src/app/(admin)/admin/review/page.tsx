"use client";

import { reviewColumns } from "@/app/(admin)/admin/review/_components/review-columns";
import { AdminPageTitle } from "@/components/admin/admin-page-title";
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
