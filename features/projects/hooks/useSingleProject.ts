import { useQuery } from "@tanstack/react-query";
import { getProject } from "../services/projectsService";
import { useParams } from "next/navigation";

export const useSingleProject = () => {
  const id = useParams();

  const { data, isLoading } = useQuery({
    // so it depends to id too, and whenever id changes, queryKey changes and fetch fresh data
    queryKey: ["project", id],
    queryFn: () => getProject(id),
    retry: false,
  });

  const { project } = data || {};

  return { isLoading, project };
};
