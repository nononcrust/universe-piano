import { prisma } from "@/lib/prisma";
import { contentSchema, imagesSchema, titleSchema } from "@/schemas/form";
import { api } from "@/services/shared";
import { Prisma } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

export const auditionRepository = {
  getAuditionList: () => {
    return prisma.audition.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  },
  getAuditionById: (id: string) => {
    return prisma.audition.findUnique({
      where: {
        id,
      },
      include: {
        comments: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        _count: true,
      },
    });
  },
};

export type AuditionList = Prisma.PromiseReturnType<typeof auditionRepository.getAuditionList>;
export type AuditionDetail = Prisma.PromiseReturnType<typeof auditionRepository.getAuditionById>;
export type AuditionComment = NonNullable<AuditionDetail>["comments"][number];

export const auditionRequestBodySchema = z.object({
  title: titleSchema,
  content: contentSchema,
  images: imagesSchema,
});

export type AuditionRequestBody = z.infer<typeof auditionRequestBodySchema>;

export const auditionCommentRequestSchema = z.object({
  content: contentSchema,
});

export type AuditionCommentRequest = z.infer<typeof auditionCommentRequestSchema>;

const ENDPOINT = "/audition";

const auditionApi = {
  getAuditionList: async () => {
    const response = await api.get<AuditionList>(ENDPOINT);
    return response.data;
  },
  getAuditionById: async (request: { params: { id: string } }) => {
    const response = await api.get<AuditionDetail>(`${ENDPOINT}/${request.params.id}`);
    return response.data;
  },
  createAudition: async (request: { body: AuditionRequestBody }) => {
    const response = await api.postForm(ENDPOINT, request.body);
    return response.data;
  },
  updateAudition: async (request: {
    params: { id: string };
    body: Partial<AuditionRequestBody>;
  }) => {
    const response = await api.put(`${ENDPOINT}/${request.params.id}`, request.body);
    return response.data;
  },
  deleteAudition: async (request: { params: { id: string } }) => {
    const response = await api.delete(`${ENDPOINT}/${request.params.id}`);
    return response.data;
  },
  createAuditionComment: async (request: {
    params: { id: string };
    body: AuditionCommentRequest;
  }) => {
    const response = await api.post(`${ENDPOINT}/${request.params.id}/comments`, request.body);
    return response.data;
  },
  deleteAuditionComment: async (request: { params: { id: string } }) => {
    const response = await api.delete<AuditionComment>(`${ENDPOINT}/comments/${request.params.id}`);
    return response.data;
  },
};

export const queryKeys = {
  all: () => [ENDPOINT],
  detail: (id: string) => [queryKeys.all(), "detail", id],
  list: () => [queryKeys.all(), "list"],
} as const;

export const useAuditionList = () => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: auditionApi.getAuditionList,
  });
};

export const useAuditionDetail = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: queryKeys.detail(id),
    queryFn: () => auditionApi.getAuditionById({ params: { id } }),
  });
};

export const useCreateAudition = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: auditionApi.createAudition,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.list(),
      });
    },
  });
};

export const useUpdateAudition = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: auditionApi.updateAudition,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      });
    },
  });
};

export const useDeleteAudition = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: auditionApi.deleteAudition,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      });
    },
  });
};

export const useCreateAuditionComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: auditionApi.createAuditionComment,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.detail(variables.params.id),
      });
    },
  });
};

export const useDeleteAuditionComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: auditionApi.deleteAuditionComment,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.detail(data.auditionId),
      });
    },
  });
};
