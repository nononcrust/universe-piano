import { prisma } from "@/lib/prisma";
import { api } from "@/services/shared";
import { Prisma } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { queryKeys as productQueryKeys } from "./product";

export type ReviewFilter = {
  userId?: string;
};

export const reviewRepository = {
  getReviewList: (filter?: ReviewFilter) => {
    return prisma.productReview.findMany({
      where: {
        userId: filter?.userId,
      },
      include: {
        product: true,
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },
};

export type ReviewList = Prisma.PromiseReturnType<typeof reviewRepository.getReviewList>;

const ENDPOINT = "/review";

const reviewApi = {
  getReviewList: async (request?: GetReviewListRequest) => {
    const response = await api.get<ReviewList>(`${ENDPOINT}`, { params: request?.query });
    return response.data;
  },
  deleteReview: async (request: { params: { id: string } }) => {
    const response = await api.delete(`${ENDPOINT}/${request.params.id}`);
    return response.data;
  },
};

export const getReviewListRequestSchema = z.object({
  query: z
    .object({
      userId: z.string().optional(),
    })
    .optional(),
});
export type GetReviewListRequest = z.infer<typeof getReviewListRequestSchema>;

export const queryKeys = {
  all: () => [ENDPOINT] as const,
  detail: (id?: string) => [...queryKeys.all(), id] as const,
  list: () => [...queryKeys.all(), "list"] as const,
};

export const useReviewList = (request?: GetReviewListRequest) => {
  return useQuery({
    queryKey: [queryKeys.list(), request],
    queryFn: () => reviewApi.getReviewList(request),
  });
};

export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: reviewApi.deleteReview,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.all(), productQueryKeys.all()],
      });
    },
  });
};
