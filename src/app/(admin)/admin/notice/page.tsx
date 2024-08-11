import { noticeColumns } from "@/app/(admin)/admin/notice/_components/notice-columns";
import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { DataTable } from "@/components/admin/data-table/data-table";
import { noticeRepository } from "@/services/notice";

export default async function AdminNoticeListPage() {
  const notices = await noticeRepository.getNoticeList();

  return (
    <main>
      <AdminPageTitle title="공지사항 목록" />
      <DataTable
        columns={noticeColumns}
        data={notices}
        searchColumnKey="title"
        searchInputPlaceholder="제목으로 검색"
      />
    </main>
  );
}
