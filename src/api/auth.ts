import { SignupApiBody } from "./auth.type";
import { api } from "./config";

const ENDPOINT = "/auth";

export const authApi = {
  signup: async (body: SignupApiBody) => {
    const response = await api.post(`${ENDPOINT}/register`, body);
    return response.data;
  },
};
