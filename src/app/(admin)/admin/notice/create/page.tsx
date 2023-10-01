import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { NoticeForm } from "@/components/admin/notice-form";

export default function AdminNoticeCreatePage() {
  return (
    <main className="container">
      <AdminPageTitle title="공지사항 추가" />
      <NoticeForm mode="create" />
    </main>
  );
}
