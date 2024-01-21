import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeOwnerProject } from "../services/projectsService";
import toast from "react-hot-toast";

export const useRemoveProject = () => {
  const queryClient = useQueryClient();

  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: removeOwnerProject,
    onSuccess: (data) => {
      // this data comes from createProject automatically
      toast.success(data.message);

      // After deleting a project, we need fresh data. so we invalidate queries to fetch data again
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { removeProject, isDeleting };
};
