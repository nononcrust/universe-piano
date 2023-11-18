import { queryKeys } from "@/features/auth";
import { getQueryClient } from "@/lib/react-query";
import { getUserInfo } from "@/lib/server";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const prefetchUserInfo = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKeys.userInfo(),
    queryFn: getUserInfo,
  });

  const dehydratedState = dehydrate(queryClient);

  return { dehydratedState };
};

export const UserInfoFetcher = async ({ children }: PropsWithChildren) => {
  const { dehydratedState } = await prefetchUserInfo();

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>;
};
