import { api } from "@/lib/axios";
import { prisma } from "@/lib/prisma";
import { Prisma, Role, Tier } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

export const userRepository = {
  getUserList: () => {
    return prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  },
  getUserById: (id: string) => {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  },
};

export type UserList = Prisma.PromiseReturnType<typeof userRepository.getUserList>;
export type UserDetail = Prisma.PromiseReturnType<typeof userRepository.getUserById>;

export const userRequestSchema = z.object({
  nickname: z.string(),
  email: z.string().email(),
  role: z.enum([Object.values(Role)[0], ...Object.values(Role).slice(1)]),
  tier: z.enum([Object.values(Tier)[0], ...Object.values(Tier).slice(1)]),
  point: z.number().int(),
});

export const userUpdateRequestSchema = z.object({
  nickname: z.string().optional(),
  email: z.string().email().optional(),
  role: z.enum([Object.values(Role)[0], ...Object.values(Role).slice(1)]).optional(),
  tier: z.enum([Object.values(Tier)[0], ...Object.values(Tier).slice(1)]).optional(),
  point: z.number().int().optional(),
});

export type UserRequest = z.infer<typeof userRequestSchema>;

const ENDPOINT = "/user";

export const userApi = {
  getUserList: async () => {
    const response = await api.get<UserList>(ENDPOINT);
    return response.data;
  },
  getUserById: async (data: { id: string }) => {
    const response = await api.get<UserDetail>(`${ENDPOINT}/${data.id}`);
    return response.data;
  },
  updateUser: async (data: { id: string; body: Partial<UserRequest> }) => {
    const response = await api.put(`${ENDPOINT}/${data.id}`, data.body);
    return response.data;
  },
  deleteUser: async (data: { id: string }) => {
    const response = await api.delete(`${ENDPOINT}/${data.id}`);
    return response.data;
  },
};

export const queryKeys = {
  all: () => [ENDPOINT] as const,
  detail: (id?: string) => [...queryKeys.all(), id] as const,
  list: () => [...queryKeys.all(), "list"] as const,
};

export const useUserList = () => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: userApi.getUserList,
  });
};

export const useUserDetail = (id: string) => {
  return useQuery({
    queryKey: queryKeys.detail(id),
    queryFn: () => userApi.getUserById({ id }),
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userApi.updateUser,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      }),
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userApi.deleteUser,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      }),
  });
};
