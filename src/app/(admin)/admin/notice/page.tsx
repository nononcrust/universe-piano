import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { NoticeDataTable } from "@/components/admin/notice/notice-data-table";

export default async function AdminNoticeListPage() {
  return (
    <main>
      <AdminPageTitle title="공지사항 목록" />
      <NoticeDataTable />
    </main>
  );
}
