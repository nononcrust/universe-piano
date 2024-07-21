"use client";

import { queryClientConfig } from "@/services/shared";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig));

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
