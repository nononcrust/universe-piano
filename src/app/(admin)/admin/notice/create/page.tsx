import { NoticeForm } from "@/components/admin/notice-form";
import { PageTitle } from "@/components/admin/page-title";

export default function AdminNoticeCreatePage() {
  return (
    <main className="container">
      <PageTitle title="공지사항 추가" />
      <NoticeForm type="create" />
    </main>
  );
}
