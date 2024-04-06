"use client";

import { ROUTE } from "@/constants/route";
import { Session, User, authApi, queryKeys } from "@/services/auth";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

interface RedirectWithUserProps {
  user: User;
}

export const RedirectWithUser = ({ user }: RedirectWithUserProps) => {
  const queryClient = useQueryClient();

  const router = useRouter();

  const login = useCallback(async () => {
    await authApi.login({ body: user });

    const session: Session = {
      user,
    };

    queryClient.setQueryData(queryKeys.session(), session);

    router.replace(ROUTE.HOME);
  }, [router, user, queryClient]);

  useEffect(() => {
    login();
  }, [login]);

  return null;
};
