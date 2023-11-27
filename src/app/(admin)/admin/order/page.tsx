import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { orderColumns } from "@/components/admin/data-table/columns/order-columns";
import { DataTable } from "@/components/admin/data-table/data-table";

export default function AdminOrderListPage() {
  return (
    <main>
      <AdminPageTitle title="주문 목록" />
      <DataTable
        columns={orderColumns}
        data={[]}
        searchColumnKey="title"
        searchInputPlaceholder="제목으로 검색"
      />
    </main>
  );
}
