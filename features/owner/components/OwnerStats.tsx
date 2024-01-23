import { Stat } from "@/features";
import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi";

const OwnerStats = ({ projects }: { projects: any }) => {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((project: any) => project.status === 2).length;
  const numOfProposals = projects.reduce((acc: any, cur: any) => cur.proposals?.length + acc, 0);

  return (
    <div className="flex justify-between gap-[8%]">
      <Stat
        title="پروژه ها"
        value={numOfProjects}
        color="primary"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        title="پروژه های واگذار شده"
        value={numOfAcceptedProjects}
        color="green"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
      <Stat
        title="درخواست ها"
        value={numOfProposals}
        color="yellow"
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
};

export default OwnerStats;
