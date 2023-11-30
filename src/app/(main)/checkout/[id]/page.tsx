import { CheckoutForm } from "@/components/order/checkout-form";
import { noticeRepository } from "@/features/notice";
import { queryKeys } from "@/features/order";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

type Context = {
  params: {
    id: string;
  };
};

export default async function CheckoutPage(context: Context) {
  const id = context.params.id;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKeys.detail(id),
    queryFn: () => noticeRepository.getNoticeById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CheckoutForm />
    </HydrationBoundary>
  );
}
