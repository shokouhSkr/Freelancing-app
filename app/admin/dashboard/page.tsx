"use client";

import { DashboardHeader, Loading } from "@/features";
import AdminStats from "@/features/admin/components/AdminStats";
import { useAllUsers } from "@/features/admin/hooks/useAllUsers";
import { useProposals } from "@/features/proposals/hooks/useProposals";
import { useAllProjects } from "@/features/shared/hooks/useAllProjects";

const AdminDashboardPage = () => {
  const { isLoading: isProposalsLoading, proposals } = useProposals();
  const { isLoading: isProjectsLoading, allProjects } = useAllProjects();
  const { isLoading: isUsersLoading, allUsers } = useAllUsers();

  if (isProposalsLoading || isProjectsLoading || isUsersLoading)
    return <Loading color="#900d64" size={10} />;

  return (
    <div>
      <DashboardHeader />
      <AdminStats
        numOfProposals={proposals.length}
        numOfProjects={allProjects.length}
        numOfUsers={allUsers.length}
      />
    </div>
  );
};

export default AdminDashboardPage;
