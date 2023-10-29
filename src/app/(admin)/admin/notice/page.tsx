import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { NoticeDataTable } from "@/components/admin/notice/notice-data-table";
import { NoticeListFetcher } from "@/features/notice";

export default async function AdminNoticeListPage() {
  return (
    <main>
      <NoticeListFetcher>
        <AdminPageTitle title="공지사항 목록" />
        <NoticeDataTable />
      </NoticeListFetcher>
    </main>
  );
}
