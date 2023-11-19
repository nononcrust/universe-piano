import { api } from "@/lib/axios";
import { prisma } from "@/lib/prisma";
import { contentSchema, imagesSchema, titleSchema } from "@/schemas/form";
import { Audition, AuditionComment, Prisma } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

const ENDPOINT = "/audition";

export const auditionApi = {
  getAuditionList: async () => {
    const response = await api.get<Audition[]>(ENDPOINT);
    return response.data;
  },
  getAuditionById: async (id: number) => {
    const response = await api.get<GetAuditionByIdResponse>(`${ENDPOINT}/${id}`);
    return response.data;
  },
  createAudition: async (body: AuditionBody) => {
    const response = await api.post(ENDPOINT, body);
    return response.data;
  },
  updateAudition: async (data: { id: number; body: Partial<AuditionBody> }) => {
    const response = await api.put(`${ENDPOINT}/${data.id}`, data.body);
    return response.data;
  },
  deleteAudition: async (id: number) => {
    const response = await api.delete(`${ENDPOINT}/${id}`);
    return response.data;
  },
  createAuditionComment: async (data: { id: number; body: AuditionCommentBody }) => {
    const response = await api.post(`${ENDPOINT}/${data.id}/comments`, data.body);
    return response.data;
  },
  deleteAuditionComment: async (id: number) => {
    const response = await api.delete<AuditionComment>(`${ENDPOINT}/comments/${id}`);
    return response.data;
  },
};

const queryKeys = {
  all: () => [ENDPOINT] as const,
  detail: (id?: number) => [ENDPOINT, id] as const,
  list: () => [ENDPOINT, "list"] as const,
};

export const useAuditionList = () => {
  return useQuery({
    queryKey: queryKeys.list(),
    queryFn: auditionApi.getAuditionList,
  });
};

export const useAuditionDetail = (id: number) => {
  return useQuery({
    queryKey: queryKeys.detail(id),
    queryFn: () => auditionApi.getAuditionById(id),
  });
};

export const useCreateAudition = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: auditionApi.createAudition,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      }),
  });
};

export const useUpdateAudition = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: auditionApi.updateAudition,
    onSuccess: (data, variables) => {
      queryClient.setQueryData(queryKeys.detail(variables.id), data);
    },
  });
};

export const useDeleteAudition = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: auditionApi.deleteAudition,
    onSuccess: (_, variables) => {
      queryClient.setQueryData(queryKeys.detail(variables), null);
    },
  });
};

export const useCreateAuditionComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: auditionApi.createAuditionComment,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.detail(variables.id),
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

export const getAuditionById = async (auditionId: number) => {
  const audition = await prisma.audition.findUnique({
    where: {
      id: auditionId,
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

  return audition;
};

export const auditionRequestSchema = z.object({
  title: titleSchema,
  content: contentSchema,
  images: imagesSchema,
});

export type AuditionBody = z.infer<typeof auditionRequestSchema>;

export const auditionCommentRequestSchema = z.object({
  content: contentSchema,
});

export type AuditionCommentBody = z.infer<typeof auditionCommentRequestSchema>;

type GetAuditionByIdResponse = Prisma.AuditionGetPayload<{
  include: {
    comments: {
      include: {
        user: true;
      };
    };
    _count: true;
  };
}>;
