import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { NoticeForm } from "@/components/admin/notice-form";
import { ROUTE } from "@/constants/route";
import { noticeQuery } from "@/features/notice";
import { redirect } from "next/navigation";

export default async function AdminNoticeEditPage({ params }: { params: { noticeId: string } }) {
  const notice = await noticeQuery.getNoticeById(Number(params.noticeId));

  const initialData = notice && {
    title: notice.title,
    content: notice.content,
  };

  if (!initialData) {
    return redirect(ROUTE.ADMIN.NOTICE.LIST);
  }

  return (
    <main className="container">
      <AdminPageTitle title="공지사항 수정" />
      <NoticeForm mode="edit" initialData={initialData} noticeId={notice.id} />
    </main>
  );
}
