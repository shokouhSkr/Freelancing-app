import { useQuery } from "@tanstack/react-query";
import { getProject } from "../services/projectsService";
import { useParams } from "next/navigation";

export const useSingleProject = () => {
  // instead of using useParams in singleProject page, we use it here.
  const { projectId } = useParams();
  // console.log("projectId: ", projectId);

  const { data, isLoading } = useQuery({
    // so it depends to projectId too, and whenever projectId changes, queryKey changes and fetch fresh data.
    queryKey: ["project", projectId],
    queryFn: () => getProject(projectId),
    retry: false,
  });

  const { project } = data || {};

  return { isLoading, project };
};
