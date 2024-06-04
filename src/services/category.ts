import { prisma } from "@/lib/prisma";
import { api } from "@/services/shared";
import { Prisma } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

export const categoryRepository = {
  getCategoryList: () => {
    return prisma.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  },
};

export type CategoryList = Prisma.PromiseReturnType<typeof categoryRepository.getCategoryList>;

const ENDPOINT = "/category";

const categoryApi = {
  getCategoryList: async () => {
    const response = await api.get<CategoryList>(`${ENDPOINT}`);
    return response.data;
  },
};

export const queryKeys = {
  all: () => [ENDPOINT],
  detail: (id: string) => [...queryKeys.all(), "detail", id],
  list: () => [...queryKeys.all(), "list"],
} as const;

export const useCategoryList = () => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: categoryApi.getCategoryList,
  });
};
