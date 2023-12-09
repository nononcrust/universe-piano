import { COOKIE } from "@/constants/cookie";
import { Session, authRepository, queryKeys } from "@/features/auth";
import { accessTokenSchema, jwt } from "@/lib/jwt";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";
import { PropsWithChildren } from "react";

const prefetchUserInfo = async () => {
  const queryClient = new QueryClient();

  const getSession = async () => {
    const cookie = cookies().get(COOKIE.ACCESS_TOKEN);

    if (!cookie) {
      return null;
    }

    const accessToken = cookie.value;

    const decoded = accessTokenSchema.safeParse(jwt.verify(accessToken));

    if (!decoded.success) {
      return null;
    }

    const id = decoded.data.user.id;

    const user = await authRepository.getUserById(id);

    if (!user) {
      return null;
    }

    const session: Session = {
      user,
    };

    return session;
  };

  await queryClient.prefetchQuery({
    queryKey: queryKeys.session(),
    queryFn: getSession,
  });

  const dehydratedState = dehydrate(queryClient);

  return { dehydratedState };
};

export const UserInfoFetcher = async ({ children }: PropsWithChildren) => {
  const { dehydratedState } = await prefetchUserInfo();

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>;
};
