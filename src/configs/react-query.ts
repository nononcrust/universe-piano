import { QueryClientConfig } from "@tanstack/react-query";

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      refetchOnReconnect: false,
      staleTime: 1000 * 60 * 5,
    },
  },
} satisfies QueryClientConfig;
