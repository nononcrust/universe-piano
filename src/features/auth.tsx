import { api } from "@/configs/axios";
import { getQueryClient } from "@/lib/react-query";
import { HydrationBoundary, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import z from "zod";

const ENDPOINT = "/auth";

export const authApi = {
  login: async (body: { user: UserInfo }) => {
    const response = await api.post(`${ENDPOINT}/login`, body);
    return response.data;
  },
  logout: async () => {
    const response = await api.get(`${ENDPOINT}/logout`);
    return response.data;
  },
  register: async (body: RegisterBody) => {
    const response = await api.post<UserInfo>(`${ENDPOINT}/register`, body);
    return response.data;
  },
  getUserInfo: async () => {
    const response = await api.get<UserInfo>(`${ENDPOINT}/me`);
    return response.data;
  },
};

export const registerRequestSchema = z.object({
  nickname: z.string().max(20).nonempty(),
  phone: z.string().min(10).max(13).nonempty(),
  kakaoId: z.string().nonempty(),
  profileImage: z.string().nonempty(),
});

export const userInfoSchema = z.object({
  id: z.number(),
  nickname: z.string(),
  email: z.string(),
  profileImage: z.string(),
});

export type UserInfo = z.infer<typeof userInfoSchema>;

export type RegisterBody = z.infer<typeof registerRequestSchema>;

export const queryKeys = {
  all: () => [ENDPOINT] as const,
  userInfo: () => [...queryKeys.all(), "me"] as const,
};

export const useUserInfo = () => {
  return useQuery({
    queryKey: queryKeys.all(),
    queryFn: authApi.getUserInfo,
  });
};

export const prefetchUserInfo = async () => {
  const queryClient = getQueryClient();
  const dehydratedState = await queryClient.prefetchQuery({
    queryKey: queryKeys.all(),
    queryFn: authApi.getUserInfo,
  });

  return { dehydratedState };
};

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (user) => queryClient.setQueryData(queryKeys.userInfo(), () => user),
  });
};

export const UserInfoFetcher = async ({ children }: PropsWithChildren) => {
  const { dehydratedState } = await prefetchUserInfo();

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>;
};
