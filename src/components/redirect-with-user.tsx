"use client";

import { ROUTE } from "@/constants/route";
import { authApi } from "@/features/auth";
import { User, userState } from "@/store/user";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useSetRecoilState } from "recoil";

interface RedirectWithUserProps {
  user: User;
}

export const RedirectWithUser = ({ user }: RedirectWithUserProps) => {
  const setUser = useSetRecoilState(userState);

  const router = useRouter();

  const login = useCallback(async () => {
    await authApi.login({ userId: String(user.id) });

    setUser(user);
    router.replace(ROUTE.HOME);
  }, [router, setUser, user]);

  useEffect(() => {
    login();
  }, [login]);

  return null;
};
