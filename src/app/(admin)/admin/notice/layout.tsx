import { NoticeListFetcher } from "@/features/notice";

interface AdminNoticeEditLayoutProps {
  children: React.ReactNode;
}

export default function AdminNoticeListLayout({ children }: AdminNoticeEditLayoutProps) {
  return <NoticeListFetcher>{children}</NoticeListFetcher>;
}
