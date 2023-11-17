import { api } from "@/configs/axios";
import { contentSchema, titleSchema } from "@/schemas/form";
import { Audition } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

const ENDPOINT = "/audition";

export const auditionApi = {
  getAuditionList: async () => {
    const response = await api.get(ENDPOINT);
    return response.data;
  },
  getAuditionById: async (id: number) => {
    const response = await api.get<Audition>(`${ENDPOINT}/${id}`);
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

export const auditionRequestSchema = z.object({
  title: titleSchema,
  content: contentSchema,
  images: z.array(z.string()).optional(),
});

export type AuditionBody = z.infer<typeof auditionRequestSchema>;
