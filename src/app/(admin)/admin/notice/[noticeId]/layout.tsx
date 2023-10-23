import { ROUTE } from "@/constants/route";
import { NoticeDetailFetcher } from "@/features/notice";
import { redirect } from "next/navigation";

interface AdminNoticeEditLayoutProps {
  children: React.ReactNode;
  params: { noticeId: string };
}

export default function AdminNoticeEditLayout({ children, params }: AdminNoticeEditLayoutProps) {
  return (
    <NoticeDetailFetcher noticeId={Number(params.noticeId)} fallback={<Fallback />}>
      {children}
    </NoticeDetailFetcher>
  );
}

const Fallback = () => {
  return redirect(ROUTE.ADMIN.NOTICE.LIST);
};
