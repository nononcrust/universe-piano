import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { NoticeForm } from "@/components/admin/notice-form";
import { getNoticeById } from "@/features/notice";

type Context = {
  params: {
    id: string;
  };
};

export default async function AdminNoticeEditPage(context: Context) {
  const id = context.params.id;

  const notice = await getNoticeById(id);

  if (!notice) return null;

  return (
    <main className="container">
      <AdminPageTitle title="공지사항 수정" />
      <NoticeForm mode="edit" notice={notice} />
    </main>
  );
}
