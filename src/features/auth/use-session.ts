import { useGetSession } from "@/services/auth";
import { Role } from "@prisma/client";

export const useSession = () => {
  const { data: session, fetchStatus } = useGetSession();

  const isUser =
    session &&
    (session.user.role === Role.USER ||
      session.user.role === Role.CREW ||
      session.user.role === Role.ADMIN);

  const isCrew =
    session &&
    (session.user.role === Role.CREW ||
      session.user.role === Role.MENTOR_CREW ||
      session.user.role === Role.TUTOR_CREW ||
      session.user.role === Role.ADMIN);

  const isAdmin = session && session.user.role === Role.ADMIN;

  return {
    session,
    fetchStatus,
    isUser,
    isCrew,
    isAdmin,
  };
};
