import { Empty, ProposalRow } from "@/features";
import Table from "@/features/shared/components/Table";

const ProposalsTable = ({ proposals = [] }: { proposals: any }) => {
  if (!proposals.length) return <Empty resourceName="درخواستی" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه (تومان)</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>

      <Table.Body>
        {proposals.map((proposal: any, index: number) => {
          return <ProposalRow key={proposal._id} proposal={proposal} index={index} />;
        })}
      </Table.Body>
    </Table>
  );
};

export default ProposalsTable;
