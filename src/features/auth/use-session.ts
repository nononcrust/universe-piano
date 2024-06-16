import { useGetSession } from "@/services/auth";
import { getAuthorization } from "./authorization";

export const useSession = () => {
  const { data: session, fetchStatus } = useGetSession();
  const { isUser, isCrew, isAdmin } = getAuthorization(session?.user.role);

  return {
    session,
    fetchStatus,
    isUser,
    isCrew,
    isAdmin,
  };
};
