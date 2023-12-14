"use client";

import { useOwnerProjects } from "../hooks/useOwnerProjects";

const ProjectsTable = () => {
  const { projects, isLoading } = useOwnerProjects();
  console.log("projects owner: ", projects?.data?.projects);

  return <div>ProjectsTable</div>;
};

export default ProjectsTable;
