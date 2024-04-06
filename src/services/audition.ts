import { api } from "@/lib/axios";
import { prisma } from "@/lib/prisma";
import { contentSchema, imagesSchema, titleSchema } from "@/schemas/form";
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
        images: true,
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

export const auditionRequestSchema = z.object({
  title: titleSchema,
  content: contentSchema,
  images: imagesSchema,
});

export type AuditionRequest = z.infer<typeof auditionRequestSchema>;

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
  getAuditionById: async (data: { params: { id: string } }) => {
    const response = await api.get<AuditionDetail>(`${ENDPOINT}/${data.params.id}`);
    return response.data;
  },
  createAudition: async (data: { body: AuditionRequest }) => {
    const response = await api.postForm(ENDPOINT, data.body);
    return response.data;
  },
  updateAudition: async (data: { params: { id: string }; body: Partial<AuditionRequest> }) => {
    const response = await api.put(`${ENDPOINT}/${data.params.id}`, data.body);
    return response.data;
  },
  deleteAudition: async (data: { params: { id: string } }) => {
    const response = await api.delete(`${ENDPOINT}/${data.params.id}`);
    return response.data;
  },
  createAuditionComment: async (data: { params: { id: string }; body: AuditionCommentRequest }) => {
    const response = await api.post(`${ENDPOINT}/${data.params.id}/comments`, data.body);
    return response.data;
  },
  deleteAuditionComment: async (data: { params: { id: string } }) => {
    const response = await api.delete<AuditionComment>(`${ENDPOINT}/comments/${data.params.id}`);
    return response.data;
  },
};

export const queryKeys = {
  all: () => [ENDPOINT] as const,
  detail: (id?: string) => [queryKeys.all(), id] as const,
  list: () => [queryKeys.all(), "list"] as const,
};

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
    enabled: !!id,
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
    onSuccess: (data, variables) => {
      queryClient.setQueryData(queryKeys.detail(variables.params.id), data);
    },
  });
};

export const useDeleteAudition = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: auditionApi.deleteAudition,
    onSuccess: (_, variables) => {
      queryClient.setQueryData(queryKeys.detail(variables.params.id), null);
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
