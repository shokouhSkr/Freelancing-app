"use client";

import { Table } from "@/features";
import { truncateText, persianPriceFormatter, toPersianNumbers } from "@/utils/helpers";

// status => 0: denied, 1:pending, 2:accepted
const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

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
