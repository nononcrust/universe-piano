import { api } from "@/lib/axios";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

export const noticeRepository = {
  getNoticeList: () => {
    return prisma.notice.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  },
  getNoticeById: (id: string) => {
    return prisma.notice.findUnique({
      where: {
        id,
      },
    });
  },
};

export type NoticeList = Prisma.PromiseReturnType<typeof noticeRepository.getNoticeList>;
export type NoticeDetail = Prisma.PromiseReturnType<typeof noticeRepository.getNoticeById>;

export const noticeRequestSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1).max(1000),
  images: z.array(z.string().url()).optional(),
});

export type NoticeRequest = z.infer<typeof noticeRequestSchema>;

const ENDPOINT = "/notice";

const noticeApi = {
  getNoticeList: async () => {
    const response = await api.get<NoticeList>(`${ENDPOINT}`);
    return response.data;
  },
  getNoticeById: async (data: { id: string }) => {
    const response = await api.get<NoticeDetail>(`${ENDPOINT}/${data.id}`);
    return response.data;
  },
  createNotice: async (data: { body: NoticeRequest }) => {
    const response = await api.post(`${ENDPOINT}`, data.body);
    return response.data;
  },
  updateNotice: async (data: { id: string; body: Partial<NoticeRequest> }) => {
    const response = await api.put(`${ENDPOINT}/${data.id}`, data.body);
    return response.data;
  },
  deleteNotice: async (data: { id: string }) => {
    const response = await api.delete(`${ENDPOINT}/${data.id}`);
    return response.data;
  },
};

export const queryKeys = {
  all: () => [ENDPOINT] as const,
  detail: (id?: string) => [ENDPOINT, id] as const,
  list: () => [ENDPOINT, "list"] as const,
};

export const useNoticeList = () => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: noticeApi.getNoticeList,
  });
};

export const useNoticeDetail = (id: string) => {
  return useQuery({
    queryKey: queryKeys.detail(id),
    queryFn: () => noticeApi.getNoticeById({ id }),
  });
};

export const useCreateNotice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: noticeApi.createNotice,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      }),
  });
};

export const useUpdateNotice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: noticeApi.updateNotice,
    onSuccess: (data, variables) => {
      queryClient.setQueryData(queryKeys.detail(variables.id), data);
    },
  });
};

export const useDeleteNotice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: noticeApi.deleteNotice,
    onSuccess: (_, variables) => {
      queryClient.setQueryData(queryKeys.detail(variables.id), null);
    },
  });
};
