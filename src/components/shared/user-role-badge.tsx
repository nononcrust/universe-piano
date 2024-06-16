import { USER_ROLE_LABEL } from "@/constants/enum";
import { useSession } from "@/features/auth/use-session";
import { cn } from "@/lib/utils";
import { Role } from "@prisma/client";
import { cva } from "class-variance-authority";

const userRoleBadgeVariants = cva(
  cn("flex h-[22px] items-center justify-center rounded-full px-2 text-xs font-semibold"),
  {
    variants: {
      variant: {
        [Role.USER]: "text-main bg-content",
        [Role.CREW]: "text-white bg-primary",
        [Role.MENTOR_CREW]: "text-white bg-orange-500",
        [Role.TUTOR_CREW]: "text-white bg-blue-500",
        [Role.ADMIN]: "text-white bg-rose-600",
      },
    },
  },
);

export const UserRoleBadge = () => {
  const { session } = useSession();

  if (!session) return null;

  return (
    <span className={userRoleBadgeVariants({ variant: session.user.role })}>
      {USER_ROLE_LABEL[session.user.role]}
    </span>
  );
};
