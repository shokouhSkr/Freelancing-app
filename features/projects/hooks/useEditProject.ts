import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProject } from "../services/projectsService";
import toast from "react-hot-toast";

export const useEditProject = () => {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutateAsync } = useMutation({
    mutationFn: editProject,

    onSuccess: (data) => {
      console.log("data from editProject: ", data);
      toast.success(data.message);

      // After editing a project, we need fresh data. so we invalidate queries to fetch data again
      queryClient.invalidateQueries({
        queryKey: ["get-owner-projects"],
      });
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isEditing, mutateAsync };
};
