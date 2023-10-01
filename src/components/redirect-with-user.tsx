"use client";

import { authApi } from "@/api/auth";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { ROUTE } from "@/lib/constants/route";
import { User, userActions } from "@/store/user";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

interface RedirectWithUserProps {
  user: User;
}

export const RedirectWithUser = ({ user }: RedirectWithUserProps) => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const login = useCallback(async () => {
    await authApi.login({ userId: String(user.id) });

    dispatch(userActions.setUser(user));
    router.replace(ROUTE.HOME);
  }, [dispatch, user, router]);

  useEffect(() => {
    login();
  }, [login]);

  return null;
};
