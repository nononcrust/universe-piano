import { api } from "@/lib/axios";
import { prisma } from "@/lib/prisma";
import { OrderStatus, Prisma } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

export const orderRepository = {
  getOrderList: () => {
    return prisma.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  },
  getOrderById: (id: string) => {
    return prisma.order.findUnique({
      include: {
        orderItems: {
          include: {
            product: {
              include: {
                images: true,
              },
            },
          },
        },
      },
      where: {
        id,
      },
    });
  },
};

export type OrderList = Prisma.PromiseReturnType<typeof orderRepository.getOrderList>;
export type OrderDetail = Prisma.PromiseReturnType<typeof orderRepository.getOrderById>;

const ENDPOINT = "/order";

export const orderApi = {
  getOrderList: async () => {
    const response = await api.get<OrderList>(ENDPOINT);
    return response.data;
  },
  getOrderById: async (data: { id: string }) => {
    const response = await api.get<OrderDetail>(`${ENDPOINT}/${data.id}`);
    return response.data;
  },
  createOrder: async (data: { body: OrderRequest }) => {
    const response = await api.post(ENDPOINT, data.body);
    return response.data;
  },
  updateOrder: async (data: { id: string; body: Partial<OrderRequest> }) => {
    const response = await api.put(`${ENDPOINT}/${data.id}`, data.body);
    return response.data;
  },
  deleteOrder: async (data: { id: string }) => {
    const response = await api.delete(`${ENDPOINT}/${data.id}`);
    return response.data;
  },
};

export const queryKeys = {
  all: () => [ENDPOINT] as const,
  detail: (id?: string) => [ENDPOINT, id] as const,
  list: () => [ENDPOINT, "list"] as const,
};

export const useOrderDetail = (id: string) => {
  return useQuery({
    queryKey: queryKeys.detail(id),
    queryFn: () => orderApi.getOrderById({ id }),
  });
};

const orderProductSchema = z.object({
  productId: z.string(),
  amount: z.number(),
  price: z.number(),
});

export const orderRequestSchema = z.object({
  status: z.enum([Object.values(OrderStatus)[0], ...Object.values(OrderStatus).slice(1)]),
  products: z.array(orderProductSchema),
});

export type OrderRequest = z.infer<typeof orderRequestSchema>;
