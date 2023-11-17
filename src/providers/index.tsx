"use client";

import { queryClientConfig } from "@/configs/react-query";
import { ChannelProvider } from "@/lib/channel-io";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig));

  return (
    <ChannelProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ChannelProvider>
  );
};
