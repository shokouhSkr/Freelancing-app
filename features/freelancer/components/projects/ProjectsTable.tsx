"use client";

import { Empty, Table } from "@/features";
import { useAllProjects } from "@/features/shared/hooks/useAllProjects";
import { BeatLoader } from "react-spinners";
import ProjectRow from "./ProjectRow";

const ProjectsTable = () => {
  const { allProjects, isLoading } = useAllProjects();
  console.log("all projects: ", allProjects);

  if (isLoading)
    return (
      <div className="text-center">
        <BeatLoader color="#a20ab6" size={8} />
      </div>
    );

  if (!allProjects.length) {
    return <Empty resourceName="پروژه ای" />;
  }

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه (تومان)</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>

      <Table.Body>
        {allProjects.map((project: any, index: number) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProjectsTable;
