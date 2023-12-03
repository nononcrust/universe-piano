import { api } from "@/lib/axios";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
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
};

export const queryKeys = {
  list: () => [ENDPOINT, "list"] as const,
};

export const useSubscriptionList = () => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: subscriptionApi.getMySubscriptionList,
  });
};
