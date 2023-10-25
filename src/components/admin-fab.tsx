"use client";

import { ROUTE } from "@/constants/route";
import { useAuth } from "@/hooks/use-auth";
import Link from "next/link";
import { Icon } from "./icon";
import { Button } from "./ui/button";

export const AdminFab = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <Button asChild className="rounded-full">
      <Link href={ROUTE.ADMIN.HOME} className="fixed bottom-4 right-4 flex gap-2">
        <Icon.Settings size={18} />
        사이트 관리
      </Link>
    </Button>
  );
};
