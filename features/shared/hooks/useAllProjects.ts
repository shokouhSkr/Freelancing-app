import { useQuery } from "@tanstack/react-query";
import { getAllProjectsApi } from "@/features/projects/services/projectsService";
import { useSearchParams } from "next/navigation";
import queryString from "query-string";

export const useAllProjects = () => {
  const searchParams = useSearchParams().toString(); // status=ALL&category=print&sort=earliest
  const queryObject = queryString.parse(searchParams); // {category: 'projects', sort: 'latest', status: 'OPEN'}

  const { data, isLoading } = useQuery({
    queryKey: ["all-projects", queryObject], // so it is sensitive to search params obj too (check react-query devtools)
    queryFn: () => getAllProjectsApi(searchParams),
  });

  const { projects: allProjects } = data || {};

  return { isLoading, allProjects };
};
