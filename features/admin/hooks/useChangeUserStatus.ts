import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeUserStatusApi } from "../services/usersService";

export const useChangeUserStatus = () => {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutateAsync: changeUserStatus } = useMutation({
    mutationFn: changeUserStatusApi,

    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["all-users"],
      });
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isUpdating, changeUserStatus };
};
