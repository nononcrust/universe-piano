"use client";

import { useSession } from "@/features/auth";
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
  const { data: session } = useSession();

  if (action === "fallback") {
    if (role === Role.USER && !session) return fallback;
    if (role === Role.ADMIN && session?.user.role !== Role.ADMIN) return fallback;
  }

  return <>{children}</>;
};
