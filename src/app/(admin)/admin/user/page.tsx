"use client";

import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { userColumns } from "@/components/admin/data-table/columns/user-columns";
import { DataTable } from "@/components/admin/data-table/data-table";
import { useUserList } from "@/services/user";

export default function AdminUserListPage() {
  const { data } = useUserList();

  if (!data) return null;

  return (
    <main>
      <AdminPageTitle title="유저 목록" />
      <DataTable
        columns={userColumns}
        data={data}
        searchInputPlaceholder="이름으로 검색"
        searchColumnKey="name"
      />
    </main>
  );
}
