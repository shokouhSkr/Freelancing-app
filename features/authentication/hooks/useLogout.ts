import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getLogoutApi } from "../services/authService";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: getLogoutApi,

    onSuccess: () => {
      queryClient.removeQueries(); // remove all queries and data

      router.replace("/auth");
    },
  });

  return { isPending, logout };
};
