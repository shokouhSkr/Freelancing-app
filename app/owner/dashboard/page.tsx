"use client";

import { Loading, OwnerDashboardHeader, OwnerStats } from "@/features";
import { useOwnerProjects } from "@/features/projects/hooks/useOwnerProjects";

const OwnerDashboardPage = () => {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading size={10} color="#441cd4" />;

  return (
    <div>
      <OwnerDashboardHeader />
      <OwnerStats projects={projects} />
    </div>
  );
};

export default OwnerDashboardPage;
