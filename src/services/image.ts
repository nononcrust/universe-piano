import { api } from "@/lib/axios";

const ENDPOINT = "/images";

export const imageApi = {
  uploadList: async (files: FileList, uploadFolder?: string) => {
    const response = await api.postForm<UploadListApiResponse>(ENDPOINT, files, {
      params: { uploadFolder },
    });
    return response.data;
  },
};

interface UploadListApiResponse {
  urls: string[];
}
