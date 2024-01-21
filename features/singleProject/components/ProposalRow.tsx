"use client";

import { useState } from "react";
import { ChangeProposalStatus, Modal } from "@/features";
import Table from "@/features/shared/components/Table";
import { ProposalPropType } from "@/types";
import { persianPriceFormatter, truncateText } from "@/utils/helpers";

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

const ProposalRow = ({ proposal, index }: ProposalPropType) => {
  const [open, setOpen] = useState<boolean>(false);
  const { user, duration, description, price, status } = proposal;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name || "نام تستی"}</td>
      <td>
        <p>{truncateText(description, 50)}</p>
      </td>
      <td>{duration} روز</td>
      <td>{persianPriceFormatter(price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal title="تغییر وضعیت درخواست" isOpen={open} onClose={() => setOpen(false)}>
          <ChangeProposalStatus proposalId={proposal._id} onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.Row>
  );
};

export default ProposalRow;
