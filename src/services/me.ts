import { CATEGORY } from "@/constants/enum";
import { prisma } from "@/lib/prisma";
import { api } from "@/services/shared";
import { OrderStatus, Prisma } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { Session, useSession } from "./auth";

export const meRepository = {
  getPurchasedProductList: async (session: Session) => {
    return prisma.order
      .findMany({
        where: {
          userId: session.user.id,
          status: OrderStatus.PAYMENT_COMPLETED,
        },
        include: {
          orderItems: {
            include: {
              product: true,
            },
          },
        },
      })
      .then((orders) => {
        return orders.flatMap((order) => order.orderItems.map((orderItem) => orderItem.product));
      });
  },
  getMyOrderList: (session: Session) => {
    return prisma.order.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        orderItems: {
          include: {
            product: {
              include: {
                category: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },
  getMyProductReviewList: (session: Session) => {
    return prisma.productReview.findMany({
      where: {
        userId: session.user.id,
      },
    });
  },
  getMyKitList: (session: Session) => {
    return prisma.order
      .findMany({
        where: {
          userId: session.user.id,
          status: OrderStatus.PAYMENT_COMPLETED,
          orderItems: {
            some: {
              product: {
                category: {
                  name: CATEGORY.KIT,
                },
              },
            },
          },
        },
        include: {
          orderItems: {
            include: {
              product: true,
            },
          },
        },
      })
      .then((orders) => {
        return orders.flatMap((order) => order.orderItems.map((orderItem) => orderItem.product));
      });
  },
};

export type PurchasedProductList = Prisma.PromiseReturnType<
  typeof meRepository.getPurchasedProductList
>;
export type MyOrderList = Prisma.PromiseReturnType<typeof meRepository.getMyOrderList>;
export type MyProductReviewList = Prisma.PromiseReturnType<
  typeof meRepository.getMyProductReviewList
>;

const ENDPOINT = "/me";

export const meApi = {
  getPurchasedProductList: async () => {
    const response = await api.get<PurchasedProductList>(`${ENDPOINT}/products`);
    return response.data;
  },
  getMyOrderList: async () => {
    const response = await api.get<MyOrderList>(`${ENDPOINT}/orders`);
    return response.data;
  },
  getMyProductReviewList: async () => {
    const response = await api.get<MyProductReviewList>(`${ENDPOINT}/reviews`);
    return response.data;
  },
  getMyKitList: async () => {
    const response = await api.get<PurchasedProductList>(`${ENDPOINT}/kits`);
    return response.data;
  },
};

export const queryKeys = {
  all: () => [ENDPOINT] as const,
  purchasedProducts: () => [...queryKeys.all(), "purchased-products"] as const,
  orderList: () => [...queryKeys.all(), "order-list"] as const,
  productReviewList: () => [...queryKeys.all(), "product-review-list"] as const,
  myKitList: () => [...queryKeys.all(), "kit-list"] as const,
};

export const usePurchasedProductList = () => {
  const session = useSession();

  return useQuery({
    queryKey: queryKeys.purchasedProducts(),
    queryFn: meApi.getPurchasedProductList,
    enabled: !!session.data,
  });
};

export const useMyKitList = () => {
  const session = useSession();

  return useQuery({
    queryKey: queryKeys.myKitList(),
    queryFn: meApi.getMyKitList,
    enabled: !!session.data,
  });
};

export const useMyOrderList = () => {
  const session = useSession();

  return useQuery({
    queryKey: queryKeys.orderList(),
    queryFn: meApi.getMyOrderList,
    enabled: !!session.data,
  });
};

export const useMyProductReviewList = () => {
  const session = useSession();

  return useQuery({
    queryKey: queryKeys.productReviewList(),
    queryFn: meApi.getMyProductReviewList,
    enabled: !!session.data,
  });
};
