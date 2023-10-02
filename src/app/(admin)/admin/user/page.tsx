import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { User, userColumns } from "@/components/admin/data-table/columns/user-columns";
import { DataTable } from "@/components/admin/data-table/data-table";

const DUMMY_USER_LIST: User[] = Array(30)
  .fill(0)
  .map((_, index) => ({
    id: index + 1,
    name: "신상호",
    phone: "010-2125-2207",
    type: "admin",
  }));

export default function AdminUserListPage() {
  return (
    <main>
      <AdminPageTitle title="유저 목록" />
      <DataTable
        columns={userColumns}
        data={DUMMY_USER_LIST}
        searchInputPlaceholder="이름으로 검색"
        searchColumnKey="name"
      />
    </main>
  );
}
