import { USER_ROLE_LABEL } from "@/constants/enum";
import { cn } from "@/lib/utils";
import { useSession } from "@/services/auth";
import { Role } from "@prisma/client";
import { cva } from "class-variance-authority";

const userRoleBadgeVariants = cva(
  cn("flex h-[22px] items-center justify-center rounded-full px-2 text-xs font-semibold"),
  {
    variants: {
      variant: {
        [Role.USER]: "text-main bg-content",
        [Role.CREW]: "text-white bg-primary",
        [Role.ADMIN]: "text-white bg-rose-600",
      },
    },
  },
);

export const UserRoleBadge = () => {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <span className={userRoleBadgeVariants({ variant: session.user.role })}>
      {USER_ROLE_LABEL[session.user.role]}
    </span>
  );
};
