"use client";

import { BeatLoader } from "react-spinners";
import { useOwnerProjects } from "../hooks/useOwnerProjects";
import { Empty, ProjectRow } from "@/features";
import Table from "@/features/shared/components/Table";

const ProjectsTable = () => {
  const { projects, isLoading } = useOwnerProjects();
  // console.log("projects owner: ", projects);

  if (isLoading)
    return (
      <div className="text-center">
        <BeatLoader color="#a20ab6" size={8} />
      </div>
    );

  if (!projects) {
    return <Empty resourceName="پروژه ای" />;
  }

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه (تومان)</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th>درخواست ها</th>
      </Table.Header>

      <Table.Body>
        {projects.map((project: any, index: number) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProjectsTable;
