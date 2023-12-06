import { api } from "@/lib/axios";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Session } from "./auth";

export const subscriptionRepository = {
  getMySubscriptionList: async (session: Session) => {
    return prisma.subscription.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        product: {
          include: {
            category: true,
            images: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },
};

export type SubscriptionList = Prisma.PromiseReturnType<
  typeof subscriptionRepository.getMySubscriptionList
>;

const ENDPOINT = "/subscription";

const subscriptionApi = {
  getMySubscriptionList: async () => {
    const response = await api.get<SubscriptionList>(ENDPOINT);
    return response.data;
  },
  createSubscription: async (data: { body: SubscriptionRequest }) => {
    const response = await api.post(ENDPOINT, data.body);
    return response.data;
  },
  updateSubscription: async (data: { params: { id: string }; body: SubscriptionRequest }) => {
    const response = await api.put(`${ENDPOINT}/${data.params.id}`, data.body);
    return response.data;
  },
};

export const queryKeys = {
  all: () => [ENDPOINT] as const,
  list: () => [...queryKeys.all(), "list"] as const,
};

export const useSubscriptionList = () => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: subscriptionApi.getMySubscriptionList,
  });
};

export const subscriptionRequestSchema = z.object({
  productId: z.string(),
  userId: z.string(),
  startDate: z.string(),
  endDate: z.string(),
});

export type SubscriptionRequest = z.infer<typeof subscriptionRequestSchema>;

export const useCreateSubscription = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: subscriptionApi.createSubscription,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      });
    },
  });
};

export const useUpdateSubscription = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: subscriptionApi.updateSubscription,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      });
    },
  });
};
