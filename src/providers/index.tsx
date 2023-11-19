"use client";

import { ChannelProvider } from "@/lib/channel-io";
import { queryClientConfig } from "@/lib/react-query";
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
