"use client";

import { getQueryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";
import { RecoilRoot } from "recoil";

export const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(getQueryClient);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </RecoilRoot>
  );
};
