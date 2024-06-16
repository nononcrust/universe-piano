import { CATEGORY } from "@/constants/enum";
import { prisma } from "@/lib/prisma";
import { Session } from "@/services/auth";
import { api } from "@/services/shared";
import { OrderStatus, Prisma } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

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
  getMyKitList: async (session: Session) => {
    return prisma.order
      .findMany({
        where: {
          userId: session.user.id,
          status: OrderStatus.PAYMENT_COMPLETED,
          orderItems: {
            some: {
              product: {
                published: true,
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
  getCrewOnlyKitList: async () => {
    return prisma.product.findMany({
      where: {
        published: true,
        category: {
          name: CATEGORY.KIT,
        },
        price: 0,
      },
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
export type MyKitList = Prisma.PromiseReturnType<typeof meRepository.getMyKitList>;
export type CrewOnlyKitList = Prisma.PromiseReturnType<typeof meRepository.getCrewOnlyKitList>;

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
    const response = await api.get<MyKitList>(`${ENDPOINT}/kits`);
    return response.data;
  },
  getCrewOnlyKitList: async () => {
    const response = await api.get<CrewOnlyKitList>(`${ENDPOINT}/crew-only-kits`);
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
  return useQuery({
    queryKey: queryKeys.purchasedProducts(),
    queryFn: meApi.getPurchasedProductList,
  });
};

export const useMyKitList = () => {
  return useQuery({
    queryKey: queryKeys.myKitList(),
    queryFn: meApi.getMyKitList,
  });
};

export const useMyOrderList = () => {
  return useQuery({
    queryKey: queryKeys.orderList(),
    queryFn: meApi.getMyOrderList,
  });
};

export const useMyProductReviewList = () => {
  return useQuery({
    queryKey: queryKeys.productReviewList(),
    queryFn: meApi.getMyProductReviewList,
  });
};

export const useCrewOnlyKitList = () => {
  return useQuery({
    queryKey: queryKeys.all(),
    queryFn: meApi.getCrewOnlyKitList,
  });
};
