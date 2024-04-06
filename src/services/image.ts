import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

const ENDPOINT = "/images";

export const imageApi = {
  upload: async (body: UploadRequest) => {
    const response = await api.postForm<UploadApiResponse>(ENDPOINT, body);
    return response.data;
  },
};

export const uploadRequestSchema = z.object({
  file: z.any(),
  uploadFolder: z.string().optional(),
});

type UploadRequest = z.infer<typeof uploadRequestSchema>;

interface UploadApiResponse {
  urls: string[];
}

export const useUploadImage = () => {
  return useMutation({
    mutationFn: imageApi.upload,
  });
};
