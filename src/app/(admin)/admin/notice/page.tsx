import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { noticeColumns } from "@/components/admin/data-table/columns/notice-columns";
import { DataTable } from "@/components/admin/data-table/data-table";
import { noticeQuery } from "@/features/notice";
import { formatDate } from "@/lib/utils";

export default async function AdminNoticeListPage() {
  const noticeList = await noticeQuery.getNoticeList();

  const data = noticeList.map((item) => ({
    id: item.id,
    title: item.title,
    createdAt: formatDate(item.createdAt),
  }));

  return (
    <main>
      <AdminPageTitle title="공지사항 목록" />
      <DataTable
        columns={noticeColumns}
        data={data}
        searchColumnKey="title"
        searchInputPlaceholder="제목으로 검색"
      />
    </main>
  );
}
