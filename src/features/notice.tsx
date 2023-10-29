import { api } from "@/configs/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

const ENDPOINT = "/notice";

export const noticeApi = {
  getNoticeById: async (noticeId: number) => {
    const response = await api.get<Notice>(`${ENDPOINT}/${noticeId}`);
    return noticeResponseSchema.parse(response.data);
  },
  getNoticeList: async () => {
    const response = await api.get<Notice[]>(`${ENDPOINT}`);
    return noticeListResponseSchema.parse(response.data);
  },
  createNotice: async (body: NoticeBody) => {
    const response = await api.post(`${ENDPOINT}`, body);
    return response.data;
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
  detail: (noticeId?: number) => [ENDPOINT, noticeId] as const,
  list: () => [ENDPOINT, "list"] as const,
};

export const useNoticeList = () => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: noticeApi.getNoticeList,
  });
};

export const useNoticeById = (noticeId: number) => {
  return useQuery({
    queryKey: queryKeys.detail(noticeId),
    queryFn: () => noticeApi.getNoticeById(noticeId),
    enabled: !!noticeId,
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
      queryClient.setQueryData(queryKeys.detail(variables.noticeId), data);
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

export const noticeQuery = {
  getNoticeList: async () => {},
  getNoticeById: async (id: number) => {},
};

// export const prefetchNoticeList = async () => {
//   const queryClient = getQueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: queryKeys.list(),
//     queryFn: noticeQuery.getNoticeList,
//   });

//   const dehydratedState = dehydrate(queryClient);

//   return { dehydratedState };
// };

// export const prefetchNoticeDetail = async (noticeId: number) => {
//   const queryClient = getQueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: queryKeys.detail(noticeId),
//     queryFn: () => noticeQuery.getNoticeById(noticeId),
//   });

//   const dehydratedState = dehydrate(queryClient);

//   return { dehydratedState };
// };

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

export const noticeListResponseSchema = z.array(noticeResponseSchema);

export type Notice = z.infer<typeof noticeResponseSchema>;
export type NoticeBody = z.infer<typeof noticeRequestSchema>;

// export const NoticeListFetcher = async ({ children }: PropsWithChildren) => {
//   const { dehydratedState } = await prefetchNoticeList();

//   return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>;
// };

// interface NoticeDetailFetcherProps {
//   children: React.ReactNode;
//   noticeId: number;
//   fallback: React.ReactNode;
// }

// export const NoticeDetailFetcher = async ({
//   children,
//   noticeId,
//   fallback,
// }: NoticeDetailFetcherProps) => {
//   const { dehydratedState } = await prefetchNoticeDetail(noticeId);

//   if (!dehydratedState.queries[0].state.data) return <>{fallback}</>;

//   return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>;
// };
