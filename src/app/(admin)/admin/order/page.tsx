"use client";

import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { orderColumns } from "@/components/admin/data-table/columns/order-columns";
import { DataTable } from "@/components/admin/data-table/data-table";
import { useOrderList } from "@/features/order";

export default function AdminOrderListPage() {
  const { data: orders } = useOrderList();

  if (!orders) return null;

  return (
    <main>
      <AdminPageTitle title="주문 목록" />
      <DataTable
        columns={orderColumns}
        data={orders}
        searchColumnKey="number"
        searchInputPlaceholder="주문번호로 검색"
      />
    </main>
  );
}
