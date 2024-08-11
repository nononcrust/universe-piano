import { NoticeDetail } from "@/app/(main)/news/notice/[id]/_components/notice-detail";
import { noticeRepository, queryKeys } from "@/services/notice";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

type Context = {
  params: {
    id: string;
  };
};

export default async function NoticeDetailPage(context: Context) {
  const id = context.params.id;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKeys.detail(id),
    queryFn: () => noticeRepository.getNoticeById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoticeDetail />
    </HydrationBoundary>
  );
}
