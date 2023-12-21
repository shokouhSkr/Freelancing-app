"use client";

import { ProposalsTable, SingleProjectHeader } from "@/features";
import { useSingleProject } from "@/features/projects/hooks/useSingleProject";

const SingleProjectPage = () => {
  const { isLoading, project } = useSingleProject();
  console.log("single project: ", project);

  if (isLoading) return <h1>loading...</h1>;

  return (
    <div>
      <SingleProjectHeader project={project} />
      <ProposalsTable proposals={project?.proposals} />
    </div>
  );
};

export default SingleProjectPage;
