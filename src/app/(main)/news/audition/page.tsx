import { AuditionList } from "@/components/audition/audition-list";
import { auditionRepository, queryKeys } from "@/features/audition";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

export default async function AuditionListPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKeys.list(),
    queryFn: auditionRepository.getAuditionList,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AuditionList />
    </HydrationBoundary>
  );
}
