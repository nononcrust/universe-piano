"use client";

import { useUserInfo } from "@/features/auth";
import { Role, Tier } from "@prisma/client";

type AccessControlAction = "fallback";

interface AccessControlProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  action?: AccessControlAction;
  role?: Role;
  tier?: Tier;
}

export const AccessControl = ({
  children,
  action = "fallback",
  fallback = null,
  role = Role.USER,
}: AccessControlProps) => {
  const { data: user } = useUserInfo();

  if (action === "fallback") {
    if (role === Role.USER && !user) return fallback;
    if (role === Role.ADMIN && user?.role !== Role.ADMIN) return fallback;

    return fallback;
  }

  return <>{children}</>;
};
