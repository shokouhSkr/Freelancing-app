import { useQuery } from "@tanstack/react-query";
import { getAllProjectsApi } from "@/features/projects/services/projectsService";

export const useAllProjects = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["all-projects"],
    queryFn: getAllProjectsApi,
  });

  const { projects: allProjects } = data || {};

  return { isLoading, allProjects };
};
