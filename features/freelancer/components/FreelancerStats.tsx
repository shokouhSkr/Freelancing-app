import { Stat } from "@/features";
import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi";

const FreelancerStats = ({ proposals }: { proposals: any }) => {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((proposal: any) => proposal.status === 2);
  const balance = acceptedProposals.reduce((acc: any, cur: any) => acc + cur.price, 0);

  return (
    <div className="flex justify-between gap-[8%]">
      <Stat
        title="درخواست ها"
        value={numOfProposals}
        color="primary"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        title="درخواست های تایید شده"
        value={acceptedProposals.length}
        color="green"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
      <Stat
        title="کیف پول (تومان)"
        value={balance}
        color="yellow"
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
};

export default FreelancerStats;
