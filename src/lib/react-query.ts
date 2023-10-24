import { queryClientConfig } from "@/configs/react-query";
import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

export const getQueryClient = cache(() => new QueryClient(queryClientConfig));
