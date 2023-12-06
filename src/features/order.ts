import { api } from "@/lib/axios";
import { prisma } from "@/lib/prisma";
import { Order, OrderStatus, Prisma } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Session } from "./auth";

export const orderRepository = {
  getMyOrderList: (session: Session) => {
    return prisma.order.findMany({
      where: {
        userId: session.user.id,
        status: {
          not: OrderStatus.CHECKING,
        },
      },
      include: {
        orderItems: {
          include: {
            product: {
              include: {
                category: true,
                images: true,
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
  getOrderList: () => {
    return prisma.order.findMany({
      where: {
        status: {
          not: OrderStatus.CHECKING,
        },
      },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },
  getCheckoutOrder: (id: string) => {
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
        status: OrderStatus.CHECKING,
        id,
      },
    });
  },
  getOrderById: (id: string, queries?: OrderRequestQueries) => {
    return prisma.order.findUnique({
      include: {
        user: {
          include: {
            subscriptions: true,
          },
        },
        orderItems: {
          include: {
            product: {
              include: {
                category: true,
                images: true,
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

export type MyOrderList = Prisma.PromiseReturnType<typeof orderRepository.getMyOrderList>;
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
  getMyOrderList: async () => {
    const response = await api.get<MyOrderList>(`/my${ENDPOINT}`);
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
  myList: () => [...queryKeys.all(), "myList"] as const,
};

export const useMyOrderList = () => {
  return useQuery({
    queryKey: queryKeys.myList(),
    queryFn: orderApi.getMyOrderList,
  });
};

export const useOrderList = () => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: orderApi.getOrderList,
  });
};

export const useOrderDetail = ({ params }: { params: { id: string } }) => {
  return useQuery({
    queryKey: queryKeys.detail(params.id),
    queryFn: () => orderApi.getOrderById({ params }),
  });
};

export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: orderApi.createOrder,
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
    onSuccess: (_, variables) => {
      queryClient.setQueryData(queryKeys.detail(variables.params.id), null);
    },
  });
};
