import { COOKIE } from "@/constants/cookie";
import { UserInfo } from "@/features/auth";
import { api } from "@/lib/axios";
import { accessTokenSchema, jwt } from "@/lib/jwt";
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { cookies } from "next/headers";

const ENDPOINT = "/user";

export const userApi = {
  getUserList: async () => {
    const response = await api.get(ENDPOINT);
    return response.data;
  },
  getUserById: async (userId: number) => {
    const response = await api.get(`${ENDPOINT}/${userId}`);
    return response.data;
  },
  createUser: async (body: any) => {
    const response = await api.post(ENDPOINT, body);
    return response.data;
  },
  updateUser: async (data: { userId: number; body: any }) => {
    const response = await api.put(`${ENDPOINT}/${data.userId}`, data.body);
    return response.data;
  },
  deleteUser: async (userId: number) => {
    const response = await api.delete(`${ENDPOINT}/${userId}`);
    return response.data;
  },
};

export const queryKeys = {
  all: () => [ENDPOINT] as const,
  detail: (userId?: number) => [ENDPOINT, userId] as const,
  list: () => [ENDPOINT, "list"] as const,
};

export const useUserList = () => {
  return useSuspenseQuery({
    queryKey: queryKeys.list(),
    queryFn: userApi.getUserList,
  });
};

export const useUserById = (userId?: number) => {
  return useSuspenseQuery({
    queryKey: queryKeys.detail(userId),
    queryFn: () => (userId ? userApi.getUserById(userId) : null),
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userApi.createUser,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      }),
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userApi.updateUser,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      }),
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userApi.deleteUser,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.all(),
      }),
  });
};

export const getUserInfo = async () => {
  const cookie = cookies().get(COOKIE.ACCESS_TOKEN);

  if (!cookie) {
    return null;
  }

  const accessToken = cookie.value;

  const decoded = accessTokenSchema.safeParse(jwt.verify(accessToken));

  if (!decoded.success) {
    return null;
  }

  const user = decoded.data.user;

  const userInfo: UserInfo = {
    id: user.id,
    nickname: user.nickname,
    phone: user.phone,
    profileImage: user.profileImage,
    email: user.email,
  };

  return userInfo;
};
