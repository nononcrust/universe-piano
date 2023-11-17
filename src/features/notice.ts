import { api } from "@/configs/axios";
import { Notice } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

const ENDPOINT = "/notice";

export const noticeApi = {
  getNoticeById: async (id: number) => {
    const response = await api.get<Notice>(`${ENDPOINT}/${id}`);
    return response.data;
  },
  getNoticeList: async () => {
    const response = await api.get<Notice[]>(`${ENDPOINT}`);
    return response.data;
  },
  createNotice: async (body: NoticeBody) => {
    const response = await api.post(`${ENDPOINT}`, body);
    return response.data;
  },
  updateNotice: async (data: { id: number; body: Partial<NoticeBody> }) => {
    const response = await api.put(`${ENDPOINT}/${data.id}`, data.body);
    return response.data;
  },
  deleteNotice: async (id: number) => {
    const response = await api.delete(`${ENDPOINT}/${id}`);
    return response.data;
  },
};

const queryKeys = {
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

export const useNoticeById = (id: number) => {
  return useQuery({
    queryKey: queryKeys.detail(id),
    queryFn: () => noticeApi.getNoticeById(id),
    enabled: !!id,
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
      queryClient.setQueryData(queryKeys.detail(variables), null);
    },
  });
};

export const noticeRequestSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1).max(1000),
});

export type NoticeBody = z.infer<typeof noticeRequestSchema>;
