import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { NoticeForm } from "@/components/admin/notice-form";

export default async function AdminNoticeEditPage({ params }: { params: { noticeId: string } }) {
  return (
    <main className="container">
      <AdminPageTitle title="공지사항 수정" />
      <NoticeForm mode="edit" noticeId={Number(params.noticeId)} />
    </main>
  );
}
