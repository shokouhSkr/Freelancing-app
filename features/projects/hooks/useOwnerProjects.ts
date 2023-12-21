import { useQuery } from "@tanstack/react-query";
import { getOwnerProjects } from "../services/projectsService";

export const useOwnerProjects = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-owner-projects"],
    queryFn: getOwnerProjects,
  });

  const { data: projects } = data || {};

  return { isLoading, projects };
};
