import { Stat } from "@/features";
import { HiCollection, HiOutlineViewGrid, HiUsers } from "react-icons/hi";

const AdminStats = ({
  numOfProposals,
  numOfProjects,
  numOfUsers,
}: {
  numOfProposals: number;
  numOfProjects: number;
  numOfUsers: number;
}) => {
  return (
    <div className="flex justify-between gap-[8%]">
      <Stat
        title="کاربران"
        value={numOfUsers}
        color="green"
        icon={<HiUsers className="w-20 h-20" />}
      />
      <Stat
        title="پروژه ها"
        value={numOfProjects}
        color="primary"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
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

export default AdminStats;
