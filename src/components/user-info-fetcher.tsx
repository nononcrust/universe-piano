import { COOKIE } from "@/constants/cookie";
import { UserInfo, queryKeys } from "@/features/auth";
import { getUserById } from "@/features/user";
import { accessTokenSchema, jwt } from "@/lib/jwt";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";
import { PropsWithChildren } from "react";

const prefetchUserInfo = async () => {
  const queryClient = new QueryClient();

  const getUserInfo = async () => {
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

    const user = await getUserById(id);

    if (!user) {
      return null;
    }

    const userInfo: UserInfo = {
      id: user.id,
      nickname: user.nickname,
      phone: user.phone,
      email: user.email,
      profileImage: user.profileImage,
      tier: user.tier,
      role: user.role,
      point: user.point,
    };

    return userInfo;
  };

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
