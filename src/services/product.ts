import { prisma } from "@/lib/prisma";
import { imagesSchema } from "@/schemas/form";
import { api } from "@/services/shared";
import { Prisma } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { queryKeys as meQueryKeys } from "./me";

export const productRepository = {
  getProductList: (category?: string) => {
    return prisma.product.findMany({
      where: {
        category: {
          name: category,
        },
      },
      include: {
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
        productReviews: true,
        category: true,
        faqs: true,
      },
      where: {
        id,
      },
    });
  },
  getProductReviewListById: (id: string) => {
    return prisma.productReview.findMany({
      where: {
        productId: id,
      },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },
};

export type ProductList = Prisma.PromiseReturnType<typeof productRepository.getProductList>;
export type ProductDetail = Prisma.PromiseReturnType<typeof productRepository.getProductById>;
export type ProductReviewList = Prisma.PromiseReturnType<
  typeof productRepository.getProductReviewListById
>;

export const productListRequestSchema = z.object({
  category: z.string().optional().nullable(),
});

export const productReviewCreateRequestSchema = z.object({
  rating: z.string(),
  content: z.string().min(1).max(1000),
  images: imagesSchema,
});

export type ProductReviewCreateRequest = z.infer<typeof productReviewCreateRequestSchema>;

const PRODUCT_ENDPOINT = "/product";
const REVIEW_ENDPOINT = "/product-review";

const productApi = {
  getProductList: async (params?: GetProductListParams) => {
    const response = await api.get<ProductList>(PRODUCT_ENDPOINT, { params });
    return response.data;
  },
  getProductById: async (data: { params: { id: string } }) => {
    const response = await api.get<ProductDetail>(`${PRODUCT_ENDPOINT}/${data.params.id}`);
    return response.data;
  },
  getProductReviewListById: async (data: { params: { id: string } }) => {
    const response = await api.get<ProductReviewList>(
      `${PRODUCT_ENDPOINT}/${data.params.id}/review`,
    );
    return response.data;
  },
  createProductReview: async (data: {
    params: { id: string };
    body: ProductReviewCreateRequest;
  }) => {
    const response = await api.postForm(`${PRODUCT_ENDPOINT}/${data.params.id}/review`, data.body);
    return response.data;
  },
  deleteProductReview: async (data: { params: { id: string } }) => {
    const response = await api.delete(`${REVIEW_ENDPOINT}/${data.params.id}`);
    return response.data;
  },
};

interface GetProductListParams {
  category?: string;
}

export const queryKeys = {
  all: () => [PRODUCT_ENDPOINT] as const,
  detail: (id?: string) => [...queryKeys.all(), id] as const,
  list: () => [...queryKeys.all(), "list"] as const,
  reviewList: (id?: string) => [...queryKeys.all(), "review-list", id] as const,
};

export const useProductList = (params?: GetProductListParams) => {
  return useQuery({
    queryKey: [...queryKeys.list(), params],
    queryFn: () => productApi.getProductList(params),
  });
};

export const useProductDetail = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: queryKeys.detail(id),
    queryFn: () => productApi.getProductById({ params: { id } }),
  });
};

export const useProductReviewList = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: queryKeys.reviewList(id),
    queryFn: () => productApi.getProductReviewListById({ params: { id } }),
  });
};

export const useCreateProductReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: productApi.createProductReview,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.reviewList(data.productId),
      });

      queryClient.invalidateQueries({
        queryKey: meQueryKeys.productReviewList(),
      });
    },
  });
};

export const useDeleteProductReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: productApi.deleteProductReview,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.reviewList(data.productId),
      });
    },
  });
};
