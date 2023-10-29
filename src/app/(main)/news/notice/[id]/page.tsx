import { NotFoundFallback } from "@/components/layout/not-found-fallback";
import { NoticeDetail } from "@/components/notice/notice-detail";
import { NoticeDetailFetcher } from "@/features/notice";

export default async function NoticeDetailPage({ params }: { params: { id: string } }) {
  return (
    <NoticeDetailFetcher noticeId={Number(params.id)} fallback={<NotFoundFallback />}>
      <NoticeDetail />
    </NoticeDetailFetcher>
  );
}
