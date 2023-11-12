"use client";

import { COOKIE } from "@/constants/cookie";
import { ROUTE } from "@/constants/route";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface RedirectWithRegisterTokenProps {
  registerToken: string;
}

export const RedirectWithRegisterToken = ({ registerToken }: RedirectWithRegisterTokenProps) => {
  const router = useRouter();

  useEffect(() => {
    cookie.set(COOKIE.REGISTER_TOKEN, registerToken);

    router.replace(ROUTE.SIGNUP);
  }, [router, registerToken]);

  return null;
};
