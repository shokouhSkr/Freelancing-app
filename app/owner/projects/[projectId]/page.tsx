"use client";

import { Loading, ProposalsTable, SingleProjectHeader } from "@/features";
import { useSingleProject } from "@/features/projects/hooks/useSingleProject";

const SingleProjectPage = () => {
  const { isLoading, project } = useSingleProject();
  console.log("single project: ", project);

  if (isLoading) return <Loading color="#6d0909" size={11} />;

  return (
    <div>
      <SingleProjectHeader project={project} />
      <ProposalsTable proposals={project?.proposals} />
    </div>
  );
};

export default SingleProjectPage;
