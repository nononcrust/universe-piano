import { api } from "@/lib/axios";
import { Role, Tier } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import z from "zod";
import { userApi } from "./user";

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
export type Session = { user: UserInfo };

const ENDPOINT = "/auth";

export const authApi = {
  login: async (data: { body: UserInfo }) => {
    const response = await api.post(`${ENDPOINT}/login`, data.body);
    return response.data;
  },
  logout: async () => {
    const response = await api.get(`${ENDPOINT}/logout`);
    return response.data;
  },
  register: async (data: { body: RegisterBody }) => {
    const response = await api.post<UserInfo>(`${ENDPOINT}/register`, data.body);
    return response.data;
  },
  getSession: async () => {
    const response = await api.get<Session>(`${ENDPOINT}/session`);
    return response.data;
  },
  withdrawal: async () => {
    const response = await api.delete(`${ENDPOINT}/withdrawal`);
    return response.data;
  },
};

export const queryKeys = {
  all: () => [ENDPOINT] as const,
  session: () => [...queryKeys.all(), "session"] as const,
};

export const useSession = () => {
  return useQuery({
    queryKey: queryKeys.session(),
    queryFn: authApi.getSession,
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (session) => queryClient.setQueryData(queryKeys.session(), () => session),
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
