import { api } from "@/lib/axios";
import { prisma } from "@/lib/prisma";
import { Prisma, Role, Tier } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import z from "zod";
import { userApi } from "./user";

const getUserArgs = {
  include: {
    orders: {
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    },
    subscriptions: true,
  },
};

export const authRepository = {
  getUserByKakaoId: (kakaoId: string) => {
    return prisma.user.findUnique({
      where: {
        kakaoId,
      },
      ...getUserArgs,
    });
  },
  getUserById: (id: string) => {
    return prisma.user.findUnique({
      where: {
        id,
      },
      ...getUserArgs,
    });
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

export const jwtPayloadSchema = z.object({
  id: z.string(),
  role: z.nativeEnum(Role),
  tier: z.nativeEnum(Tier),
});

export type JwtPayload = z.infer<typeof jwtPayloadSchema>;
export type SocialData = z.infer<typeof socialDataSchema>;
export type RegisterBody = z.infer<typeof registerRequestSchema>;
export type User = NonNullable<Prisma.PromiseReturnType<typeof authRepository.getUserById>>;
export type Session = { user: User };

const ENDPOINT = "/auth";

export const authApi = {
  login: async (data: { body: JwtPayload }) => {
    const response = await api.post(`${ENDPOINT}/login`, data.body);
    return response.data;
  },
  logout: async () => {
    const response = await api.get(`${ENDPOINT}/logout`);
    return response.data;
  },
  register: async (data: { body: RegisterBody }) => {
    const response = await api.post<User>(`${ENDPOINT}/register`, data.body);
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
    onSuccess: (data) => {
      const session: Session = {
        user: data,
      };

      queryClient.setQueryData(queryKeys.session(), session);
    },
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
