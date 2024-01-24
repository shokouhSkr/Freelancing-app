"use client";

import { useState } from "react";
import { CreateProposal, Modal, Table } from "@/features";
import { persianPriceFormatter, toLocalDateShort, truncateText } from "@/utils/helpers";
import { MdAssignmentAdd } from "react-icons/md";

const projectStatus: { [key: string]: { label: string; className: string } } = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

const ProjectRow = ({ project, index }: { project: any; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, status, budget, deadline } = project;

  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{persianPriceFormatter(budget)}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <button onClick={() => setIsOpen(true)} className="w-5 h-5 text-primary-900">
          <MdAssignmentAdd />
        </button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={`درخواست انجام پروژه ${title}`}
        >
          <CreateProposal projectId={project._id} onClose={() => setIsOpen(false)} />
        </Modal>
      </td>
    </Table.Row>
  );
};

export default ProjectRow;
