import { NoticeList } from "@/components/notice/notice-list";
import { noticeRepository, queryKeys } from "@/features/notice";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

export default async function NoticeListPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKeys.list(),
    queryFn: noticeRepository.getNoticeList,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoticeList />
    </HydrationBoundary>
  );
}
