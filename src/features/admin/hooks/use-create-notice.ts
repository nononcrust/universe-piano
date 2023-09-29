import { noticeApi } from "@/api/notice";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateNotice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: noticeApi.createNotice,
    onSuccess: () => queryClient.invalidateQueries(["notice"]),
  });
};
