import { prisma } from "@/lib/prisma";
import { api } from "@/services/shared";
import { Order, OrderStatus, Prisma } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

export const orderRepository = {
  getOrderList: () => {
    return prisma.order.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },
  getOrderById: (id: string, queries?: OrderRequestQueries) => {
    return prisma.order.findUnique({
      include: {
        user: true,
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
      where: {
        status: queries?.status,
        id,
      },
    });
  },
};

export type OrderList = Prisma.PromiseReturnType<typeof orderRepository.getOrderList>;
export type OrderDetail = Prisma.PromiseReturnType<typeof orderRepository.getOrderById>;

const orderProductSchema = z.object({
  productId: z.string(),
  amount: z.number(),
  price: z.number(),
});

export const orderRequestSchema = z.object({
  status: z.enum([Object.values(OrderStatus)[0], ...Object.values(OrderStatus).slice(1)]),
  products: z.array(orderProductSchema),
  point: z.number(),
});

export const orderUpdateRequestSchema = z.object({
  status: z
    .enum([Object.values(OrderStatus)[0], ...Object.values(OrderStatus).slice(1)])
    .optional(),
  products: z.array(orderProductSchema).optional(),
  point: z.number().optional(),
});

export type OrderRequest = z.infer<typeof orderRequestSchema>;
export type OrderUpdateRequest = z.infer<typeof orderUpdateRequestSchema>;

export type OrderRequestQueries = {
  status?: OrderStatus;
};

const ENDPOINT = "/order";

const orderApi = {
  getOrderList: async () => {
    const response = await api.get<OrderList>(ENDPOINT);
    return response.data;
  },

  getOrderById: async (data: { params: { id: string }; queries?: OrderRequestQueries }) => {
    const response = await api.get<OrderDetail>(`${ENDPOINT}/${data.params.id}`);
    return response.data;
  },
  createOrder: async (data: { body: OrderRequest }) => {
    const response = await api.post<Order>(ENDPOINT, data.body);
    return response.data;
  },
  updateOrder: async (data: { params: { id: string }; body: OrderUpdateRequest }) => {
    const response = await api.put(`${ENDPOINT}/${data.params.id}`, data.body);
    return response.data;
  },
  deleteOrder: async (data: { params: { id: string } }) => {
    const response = await api.delete(`${ENDPOINT}/${data.params.id}`);
    return response.data;
  },
};

export const queryKeys = {
  all: () => [ENDPOINT] as const,
  detail: (id?: string) => [...queryKeys.all(), id] as const,
  list: () => [...queryKeys.all(), "list"] as const,
};

export const useOrderList = () => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: orderApi.getOrderList,
  });
};

export const useOrderDetail = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: queryKeys.detail(id),
    queryFn: () => orderApi.getOrderById({ params: { id } }),
  });
};

interface CreateOrderData {
  productId: string;
  productPrice: number;
  point: number;
}

export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateOrderData) => {
      return orderApi.createOrder({
        body: {
          status: OrderStatus.PAYMENT_PENDING,
          point: data.point,
          products: [
            {
              productId: data.productId,
              amount: 1,
              price: data.productPrice - data.point,
            },
          ],
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      });
    },
  });
};

export const useUpdateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: orderApi.updateOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      });
    },
  });
};

export const useDeleteOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: orderApi.deleteOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      });
    },
  });
};
