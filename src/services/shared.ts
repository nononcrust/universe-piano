import { QueryClientConfig } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "/api";

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      retry: false,
    },
  },
} satisfies QueryClientConfig;
