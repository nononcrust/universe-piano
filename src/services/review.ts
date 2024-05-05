import { prisma } from "@/lib/prisma";
import { api } from "@/services/shared";
import { Prisma } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const reviewRepository = {
  getReviewList: () => {
    return prisma.productReview.findMany({
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
  getReviewList: async () => {
    const response = await api.get<ReviewList>(`${ENDPOINT}`);
    return response.data;
  },
  deleteReview: async (data: { params: { id: string } }) => {
    const response = await api.delete(`${ENDPOINT}/${data.params.id}`);
    return response.data;
  },
};

export const queryKeys = {
  all: () => [ENDPOINT] as const,
  detail: (id?: string) => [...queryKeys.all(), id] as const,
  list: () => [...queryKeys.all(), "list"] as const,
};

export const useReviewList = () => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: reviewApi.getReviewList,
  });
};

export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: reviewApi.deleteReview,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      });
    },
  });
};
