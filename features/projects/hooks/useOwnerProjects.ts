import { useQuery } from "@tanstack/react-query";
import { getOwnerProjects } from "../services/projectsService";

export const useOwnerProjects = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjects,
  });

  const { projects } = data || {};

  return { isLoading, projects };
};
