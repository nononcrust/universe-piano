import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

export const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
          refetchOnReconnect: false,
          staleTime: 1000 * 60 * 5,
        },
      },
    }),
);
