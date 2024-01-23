"use client";

import { DashboardHeader, FreelancerStats, Loading } from "@/features";
import { useProposals } from "@/features/proposals/hooks/useProposals";

const FreelancerDashboardPage = () => {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading color="#900d64" size={10} />;

  return (
    <div>
      <DashboardHeader />
      <FreelancerStats proposals={proposals} />
    </div>
  );
};

export default FreelancerDashboardPage;
