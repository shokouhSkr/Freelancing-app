"use client";

import { BeatLoader } from "react-spinners";
import { Empty, Table } from "@/features";
import { useProposals } from "@/features/proposals/hooks/useProposals";
import ProposalRow from "./ProposalRow";

const ProposalsTable = () => {
  const { proposals, isLoading } = useProposals();

  if (isLoading)
    return (
      <div className="text-center">
        <BeatLoader color="#a20ab6" size={8} />
      </div>
    );

  if (!proposals) {
    return <Empty resourceName="درخواستی" />;
  }

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه (تومان)</th>
        <th>وضعیت</th>
      </Table.Header>

      <Table.Body>
        {proposals.map((proposal: any, index: number) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProposalsTable;
