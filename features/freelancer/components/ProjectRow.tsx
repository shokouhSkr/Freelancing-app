import { Table } from "@/features";
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
  const { status } = project;

  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{persianPriceFormatter(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <button className="w-5 h-5 text-primary-900">
          <MdAssignmentAdd />
        </button>
      </td>
    </Table.Row>
  );
};

export default ProjectRow;
