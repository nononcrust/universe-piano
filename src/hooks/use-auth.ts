import { authApi, queryKeys } from "@/features/auth";
import { useQueryClient } from "@tanstack/react-query";

export const useAuth = () => {
  const queryClient = useQueryClient();

  const logout = async () => {
    await authApi.logout();

    queryClient.setQueryData(queryKeys.userInfo(), null);
  };

  const withdrawal = async () => {
    await authApi.withdrawal();

    queryClient.setQueryData(queryKeys.userInfo(), null);
  };

  return { logout, withdrawal };
};
