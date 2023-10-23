"use client";

import { ROUTE } from "@/constants/route";
import { UserInfo, authApi } from "@/features/auth";
import { queryKeys } from "@/features/user";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

interface RedirectWithUserProps {
  user: UserInfo;
}

export const RedirectWithUser = ({ user }: RedirectWithUserProps) => {
  const queryClient = useQueryClient();

  const router = useRouter();

  const login = useCallback(async () => {
    await authApi.login({ user: user });

    queryClient.setQueryData(queryKeys.all(), () => user);

    router.replace(ROUTE.HOME);
  }, [router, user, queryClient]);

  useEffect(() => {
    login();
  }, [login]);

  return null;
};
