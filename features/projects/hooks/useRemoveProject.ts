import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeOwnerProject } from "../services/projectService";
import toast from "react-hot-toast";

export const useRemoveProject = () => {
  const queryClient = useQueryClient();

  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: removeOwnerProject,
    onSuccess: (data) => {
      console.log("data from removeProject: ", data);
      toast.success("پروژه با موفقیت حذف شد.");

      // After deleting a project, we need fresh data. so we invalidate queries to fetch data again
      queryClient.invalidateQueries({
        queryKey: ["get-owner-projects"],
      });
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { removeProject, isDeleting };
};