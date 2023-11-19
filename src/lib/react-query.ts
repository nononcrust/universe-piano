import { QueryClient, QueryClientConfig } from "@tanstack/react-query";
import { cache } from "react";

export const queryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
} satisfies QueryClientConfig;

export const getQueryClient = cache(() => new QueryClient(queryClientConfig));
