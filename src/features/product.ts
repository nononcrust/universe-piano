import { api } from "@/lib/axios";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

export const productRepository = {
  getProductList: () => {
    return prisma.product.findMany({
      include: {
        images: true,
        productReviews: true,
        _count: {
          select: {
            productReviews: true,
          },
        },
      },
    });
  },
  getProductById: (id: string) => {
    return prisma.product.findUnique({
      include: {
        images: true,
        productReviews: true,
        category: true,
      },
      where: {
        id,
      },
    });
  },
};

export type ProductList = Prisma.PromiseReturnType<typeof productRepository.getProductList>;
export type ProductDetail = Prisma.PromiseReturnType<typeof productRepository.getProductById>;

const ENDPOINT = "/product";

const productApi = {
  getProductList: async () => {
    const response = await api.get<ProductList>(ENDPOINT);
    return response.data;
  },
  getProductById: async (data: { id: string }) => {
    const response = await api.get<ProductDetail>(`${ENDPOINT}/${data.id}`);
    return response.data;
  },
};

export const queryKeys = {
  all: () => [ENDPOINT] as const,
  detail: (id?: string) => [...queryKeys.all(), id] as const,
  list: () => [...queryKeys.all(), "list"] as const,
};

export const useProductList = () => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: productApi.getProductList,
  });
};

export const useProductDetail = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: queryKeys.detail(id),
    queryFn: () => productApi.getProductById({ id }),
  });
};
