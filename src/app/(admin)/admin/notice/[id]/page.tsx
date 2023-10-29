import { AdminPageTitle } from "@/components/admin/admin-page-title";
import { NoticeForm } from "@/components/admin/notice-form";
import { ROUTE } from "@/constants/route";
import { NoticeDetailFetcher } from "@/features/notice";
import { redirect } from "next/navigation";

export default async function AdminNoticeEditPage({ params }: { params: { id: string } }) {
  return (
    <main className="container">
      <NoticeDetailFetcher noticeId={Number(params.id)} fallback={<Fallback />}>
        <AdminPageTitle title="공지사항 수정" />
        <NoticeForm mode="edit" noticeId={Number(params.id)} />
      </NoticeDetailFetcher>
    </main>
  );
}

const Fallback = () => {
  return redirect(ROUTE.ADMIN.NOTICE.LIST);
};
