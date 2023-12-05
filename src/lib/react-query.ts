import { QueryClientConfig } from "@tanstack/react-query";

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      retry: false,
    },
  },
} satisfies QueryClientConfig;
