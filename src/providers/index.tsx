"use client";

import { ChannelProvider } from "@/lib/channel-io";
import { queryClientConfig } from "@/lib/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient(queryClientConfig);

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChannelProvider>{children}</ChannelProvider>
    </QueryClientProvider>
  );
};
