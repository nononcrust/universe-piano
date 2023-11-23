import { api } from "@/lib/axios";
import { prisma } from "@/lib/prisma";
import { Notice } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

const ENDPOINT = "/notice";

export const getNoticeList = () => {
  return prisma.notice.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getNoticeById = (id: number) => {
  return prisma.notice.findUnique({
    where: {
      id,
    },
  });
};

export const noticeApi = {
  getNoticeById: async (data: { id: number }) => {
    const response = await api.get<Notice>(`${ENDPOINT}/${data.id}`);
    return response.data;
  },
  getNoticeList: async () => {
    const response = await api.get<Notice[]>(`${ENDPOINT}`);
    return response.data;
  },
  createNotice: async (data: { body: NoticeRequest }) => {
    const response = await api.post(`${ENDPOINT}`, data.body);
    return response.data;
  },
  updateNotice: async (data: { id: number; body: Partial<NoticeRequest> }) => {
    const response = await api.put(`${ENDPOINT}/${data.id}`, data.body);
    return response.data;
  },
  deleteNotice: async (data: { id: number }) => {
    const response = await api.delete(`${ENDPOINT}/${data.id}`);
    return response.data;
  },
};

export const queryKeys = {
  all: () => [ENDPOINT] as const,
  detail: (id?: number) => [ENDPOINT, id] as const,
  list: () => [ENDPOINT, "list"] as const,
};

export const useNoticeList = () => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: noticeApi.getNoticeList,
  });
};

export const useNoticeDetail = (id: number) => {
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

export const noticeRequestSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1).max(1000),
  images: z.array(z.string().url()).optional(),
});

export type NoticeRequest = z.infer<typeof noticeRequestSchema>;
