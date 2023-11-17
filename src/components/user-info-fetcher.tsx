import { COOKIE } from "@/constants/cookie";
import { UserInfo, queryKeys } from "@/features/auth";
import { accessTokenSchema, jwt } from "@/lib/jwt";
import { getQueryClient } from "@/lib/react-query";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";
import { PropsWithChildren } from "react";

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

  const user = decoded.data.user;

  const userInfo: UserInfo = {
    id: user.id,
    nickname: user.nickname,
    phone: user.phone,
    profileImage: user.profileImage,
    email: user.email,
  };

  return userInfo;
};

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
