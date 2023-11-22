import { AuditionList } from "@/components/audition/audition-list";
import { getAuditionList, queryKeys } from "@/features/audition";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

export default async function AuditionListPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKeys.list(),
    queryFn: getAuditionList,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AuditionList />
    </HydrationBoundary>
  );
}
