import { NotFoundFallback } from "@/components/layouts/not-found-fallback";
import { NoticeDetail } from "@/components/notice/notice-detail";
import { NoticeDetailFetcher } from "@/features/notice";

export default async function NoticeDetailPage({ params }: { params: { noticeId: string } }) {
  return (
    <NoticeDetailFetcher noticeId={Number(params.noticeId)} fallback={<NotFoundFallback />}>
      <NoticeDetail />
    </NoticeDetailFetcher>
  );
}
