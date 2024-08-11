import { auditionRepository, queryKeys } from "@/services/audition";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { AuditionDetail } from "./_components/audition-detail";

type Context = {
  params: {
    id: string;
  };
};

export default async function AuditionDetailPage(context: Context) {
  const queryClient = new QueryClient();

  const id = context.params.id;

  await queryClient.prefetchQuery({
    queryKey: queryKeys.detail(id),
    queryFn: () => auditionRepository.getAuditionById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AuditionDetail />
    </HydrationBoundary>
  );
}
