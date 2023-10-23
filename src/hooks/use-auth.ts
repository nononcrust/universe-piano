import { authApi, queryKeys, useUserInfo } from "@/features/auth";
import { useQueryClient } from "@tanstack/react-query";

export const useAuth = () => {
  const { data: user } = useUserInfo();

  const queryClient = useQueryClient();

  const logout = () => {
    queryClient.setQueryData(queryKeys.all(), null);

    authApi.logout();
  };

  return { user, logout };
};
