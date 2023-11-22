import { NoticeDetail } from "@/components/notice/notice-detail";
import { getNoticeById, queryKeys } from "@/features/notice";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

type Context = {
  params: {
    id: string;
  };
};

export default async function NoticeDetailPage(context: Context) {
  const id = Number(context.params.id);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKeys.detail(id),
    queryFn: () => getNoticeById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoticeDetail />
    </HydrationBoundary>
  );
}
