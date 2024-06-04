import { useGetSession } from "@/services/auth";
import { Role } from "@prisma/client";

export const useSession = () => {
  const { data: session, fetchStatus } = useGetSession();

  const isUser =
    session?.user.role === Role.USER ||
    session?.user.role === Role.CREW ||
    session?.user.role === Role.ADMIN;
  const isCrew = session?.user.role === Role.CREW || session?.user.role === Role.ADMIN;
  const isAdmin = session?.user.role === Role.ADMIN;

  return {
    session,
    fetchStatus,
    isUser,
    isCrew,
    isAdmin,
  };
};
