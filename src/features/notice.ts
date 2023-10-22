import { api } from "@/configs/api";
import { prisma } from "@/lib/prisma";
import { getQueryClient } from "@/lib/react-query";
import { dehydrate, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

const ENDPOINT = "/notice";

export const noticeApi = {
  getNoticeById: async (noticeId: number) => {
    const response = await api.get<Notice>(`${ENDPOINT}/${noticeId}`);
    return response.data;
  },
  getNoticeList: async () => {
    const response = await api.get<Notice[]>(`${ENDPOINT}`);
    return response.data;
  },
  createNotice: async (body: NoticeBody) => {
    const resposne = await api.post(`${ENDPOINT}`, body);
    return resposne.data;
  },
  updateNotice: async (data: { noticeId: number; body: Partial<NoticeBody> }) => {
    const response = await api.put(`${ENDPOINT}/${data.noticeId}`, data.body);
    return response.data;
  },
  deleteNotice: async (noticeId: number) => {
    const response = await api.delete(`${ENDPOINT}/${noticeId}`);
    return response.data;
  },
};

const queryKeys = {
  all: () => [ENDPOINT] as const,
  detail: (noticeId: number) => [ENDPOINT, noticeId] as const,
  list: () => [ENDPOINT, "list"] as const,
};

export const useNoticeList = (initialData?: Notice[]) => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: noticeApi.getNoticeList,
    initialData: initialData,
  });
};

export const useNoticeById = (noticeId: number, initialData: Notice) => {
  return useQuery({
    queryKey: queryKeys.detail(noticeId),
    queryFn: () => noticeApi.getNoticeById(noticeId),
    initialData: initialData,
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
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      }),
  });
};

export const useDeleteNotice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: noticeApi.deleteNotice,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      }),
  });
};

export const noticeQuery = {
  getNoticeList: async () => {
    const notices = await prisma.notice.findMany();

    const initialData = notices.map((item) => ({
      ...item,
      createdAt: item.createdAt.toISOString(),
      updatedAt: item.updatedAt.toISOString(),
    }));

    return initialData.reverse();
  },
  getNoticeById: async (id: number) => {
    const notice = await prisma.notice.findUnique({
      where: {
        id,
      },
    });

    const initialData = notice && {
      ...notice,
      createdAt: notice.createdAt.toISOString(),
      updatedAt: notice.updatedAt.toISOString(),
    };

    return initialData;
  },
};

export const prefetchNoticeList = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKeys.list(),
    queryFn: noticeQuery.getNoticeList,
  });

  const dehydratedState = dehydrate(queryClient);

  return dehydratedState;
};

export const prefetchNoticeById = async (noticeId: number) => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKeys.detail(noticeId),
    queryFn: () => noticeQuery.getNoticeById(noticeId),
  });

  const dehydratedState = dehydrate(queryClient);

  return dehydratedState;
};

export const noticeRequestSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1).max(1000),
});

export const noticeResponseSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Notice = z.infer<typeof noticeResponseSchema>;
export type NoticeBody = z.infer<typeof noticeRequestSchema>;
