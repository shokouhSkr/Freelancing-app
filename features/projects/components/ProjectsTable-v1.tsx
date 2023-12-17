"use client";

import { BeatLoader } from "react-spinners";
import { useOwnerProjects } from "../hooks/useOwnerProjects";
import { Empty } from "@/features";
import { formatPrice, toLocalDateShort, truncateText } from "@/utils/helpers";

const ProjectsTable = () => {
  const { projects, isLoading } = useOwnerProjects();
  console.log("projects owner: ", projects?.data?.projects);

  if (isLoading)
    return (
      <div className="text-center">
        <BeatLoader color="#400606" size={8} />
      </div>
    );

  // if (projects?.data?.projects.length === 0) {
  //   return <Empty resourceName="پروژه ای" />;
  // }

  return (
    <div className="overflow-x-auto bg-secondary-0">
      <table className="table-auto w-full lg:mb-8">
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {projects.map((project: any, index: number) => {
            <tr key={project._id}>
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
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
