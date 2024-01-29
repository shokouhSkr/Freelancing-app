"use client";

import { Table } from "@/features";
import { statusStyle } from "@/utils/constants";
import { truncateText, persianPriceFormatter, toPersianNumbers } from "@/utils/helpers";

const ProposalRow = ({ proposal, index }: { proposal: any; index: number }) => {
  const { description, duration, price, status, _id } = proposal;

  return (
    <Table.Row key={_id}>
      <td>{index + 1}</td>
      <td>{truncateText(description, 60)}</td>
      <td>{toPersianNumbers(duration)} روز</td>
      <td>{persianPriceFormatter(price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
    </Table.Row>
  );
};

export default ProposalRow;
