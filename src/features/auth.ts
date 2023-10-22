import { api } from "@/configs/api";
import z from "zod";

const ENDPOINT = "/auth";

export const authApi = {
  login: async (body: { userId: string }) => {
    const response = await api.post(`${ENDPOINT}/login`, body);
    return response.data;
  },
  register: async (body: RegisterBody) => {
    const response = await api.post(`${ENDPOINT}/register`, body);
    return response.data;
  },
};

export const registerRequestSchema = z.object({
  nickname: z.string().max(20).nonempty(),
  phone: z.string().min(10).max(13).nonempty(),
  kakaoId: z.string().nonempty(),
  profileImage: z.string().nonempty(),
});

export type RegisterBody = z.infer<typeof registerRequestSchema>;
