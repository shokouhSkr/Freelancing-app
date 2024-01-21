import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProject } from "../services/projectsService";
import toast from "react-hot-toast";

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutateAsync } = useMutation({
    mutationFn: createProject,
    onSuccess: (data) => {
      // this data comes from createProject automatically
      // console.log("data from removeProject: ", data);
      toast.success(data.message);

      // After creating a project, we need fresh data. so we invalidate queries to fetch data again
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isCreating, mutateAsync };
};
