import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleStatusProject } from "../services/projectsService";
import toast from "react-hot-toast";

export const useToggleProjectStatus = () => {
  const queryClient = useQueryClient();

  const { isPending: isToggling, mutateAsync } = useMutation({
    mutationFn: toggleStatusProject,

    onSuccess: (data) => {
      console.log("data from editProject: ", data);
      toast.success(data.message);

      // After toggling a project, we need fresh data. so we invalidate queries to fetch data again
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isToggling, mutateAsync };
};
