"use client";

import { ROUTE } from "@/constants/route";
import { UserInfo, authApi, queryKeys } from "@/features/auth";
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
    await authApi.login(user);

    queryClient.setQueryData(queryKeys.userInfo(), user);

    router.replace(ROUTE.HOME);
  }, [router, user, queryClient]);

  useEffect(() => {
    login();
  }, [login]);

  return null;
};
