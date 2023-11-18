"use client";

import { useUserInfo } from "@/features/auth";

type AccessControlAction = "fallback";

interface AccessControlProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  action?: AccessControlAction;
}

export const AccessControl = ({
  children,
  action = "fallback",
  fallback = null,
}: AccessControlProps) => {
  const { data: user } = useUserInfo();

  if (!user && action === "fallback") {
    return fallback;
  }

  return <>{children}</>;
};
