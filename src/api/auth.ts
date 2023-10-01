import { SignupApiBody } from "./auth.type";
import { api } from "./config";

const ENDPOINT = "/auth";

export const authApi = {
  login: async (body: { userId: string }) => {
    const response = await api.post(`${ENDPOINT}/login`, body);
    return response.data;
  },
  register: async (body: SignupApiBody) => {
    const response = await api.post(`${ENDPOINT}/register`, body);
    return response.data;
  },
};
