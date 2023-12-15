import Table from "@/features/shared/components/Table";
import { truncateText, formatPrice, toLocalDateShort } from "@/utils/helpers";

const ProjectRow = ({ project, index }: { project: any; index: number }) => {
  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{formatPrice(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex items-center flex-wrap gap-2 max-w-[200px]">
          {project.tags.map((tag: string) => (
            <span key={tag} className="badge badge--secondary">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project?.freelancer?.name || "-"}</td>
      <td>
        {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--error">بسته</span>
        )}
      </td>
      <td>...</td>
    </Table.Row>
  );
};

export default ProjectRow;
