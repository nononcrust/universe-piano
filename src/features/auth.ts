import { api } from "@/lib/axios";
import { Role, Tier } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import z from "zod";
import { userApi } from "./user";

const ENDPOINT = "/auth";

export const authApi = {
  login: async (body: UserInfo) => {
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

export const socialDataSchema = z.object({
  id: z.string(),
  nickname: z.string(),
  profileImage: z.string(),
  email: z.string().email(),
});

export const registerRequestSchema = z.object({
  nickname: z.string().max(20),
  phone: z.string().min(10).max(13),
  kakaoId: z.string(),
  profileImage: z.string(),
  email: z.string().email(),
});

export const userInfoSchema = z.object({
  id: z.string(),
  nickname: z.string(),
  phone: z.string(),
  email: z.string(),
  profileImage: z.string(),
  tier: z.enum([Object.values(Tier)[0], ...Object.values(Tier).slice(1)]),
  role: z.enum([Object.values(Role)[0], ...Object.values(Role).slice(1)]),
  point: z.number(),
});

export type SocialData = z.infer<typeof socialDataSchema>;

export type UserInfo = z.infer<typeof userInfoSchema>;

export type RegisterBody = z.infer<typeof registerRequestSchema>;

export const queryKeys = {
  all: () => [ENDPOINT] as const,
  userInfo: () => [...queryKeys.all(), "me"] as const,
};

export const useUserInfo = () => {
  return useQuery({
    queryKey: queryKeys.userInfo(),
    queryFn: authApi.getUserInfo,
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (user) => queryClient.setQueryData(queryKeys.userInfo(), () => user),
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userApi.updateUser,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      }),
  });
};
