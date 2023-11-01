import { authApi, queryKeys } from "@/features/auth";
import { useQueryClient } from "@tanstack/react-query";

export const useAuth = () => {
  const queryClient = useQueryClient();

  const logout = () => {
    queryClient.setQueryData(queryKeys.userInfo(), null);

    authApi.logout();
  };

  return { logout };
};
