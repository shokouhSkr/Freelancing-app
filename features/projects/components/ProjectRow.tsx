"use client";

import { useState } from "react";
import { ConfirmDelete, CreateProjectForm, Modal, ToggleProjectStatus, Table } from "@/features";
import { truncateText, persianPriceFormatter, toLocalDateShort } from "@/utils/helpers";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import { useRemoveProject } from "../hooks/useRemoveProject";
import Link from "next/link";

const ProjectRow = ({ project, index }: { project: any; index: number }) => {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const { removeProject, isDeleting } = useRemoveProject();

  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{persianPriceFormatter(project.budget)}</td>
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
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex items-center gap-4">
          {/* edit project */}
          <button onClick={() => setIsEditOpen(true)}>
            <TbPencilMinus className="w-5 h-5 text-primary-900" />
          </button>
          <Modal
            isOpen={isEditOpen}
            title={`ویرایش ${project.title}`}
            onClose={() => setIsEditOpen(false)}
          >
            <CreateProjectForm projectToEdit={project} onClose={() => setIsEditOpen(false)} />
          </Modal>

          {/* delete project */}
          <button onClick={() => setIsDeleteOpen(true)}>
            <HiOutlineTrash className="w-5 h-5 text-error" />
          </button>
          <Modal
            isOpen={isDeleteOpen}
            title={`حذف ${project.title}`}
            onClose={() => setIsDeleteOpen(false)}
          >
            <ConfirmDelete
              resourceName={project.title}
              onClose={() => setIsDeleteOpen(false)}
              onConfirm={() =>
                // first argument always is the argument that the function need (like id)
                // if we need more than one argument, put them in a {}
                removeProject(project._id, {
                  onSuccess: () => setIsDeleteOpen(false),
                })
              }
              disabled={false}
            />
          </Modal>
        </div>
      </td>
      <td>
        <Link href={`/owner/projects/${project._id}`} className="flex justify-center">
          <HiEye className="w-5 h-5 text-primary-800" />
        </Link>
      </td>
    </Table.Row>
  );
};

export default ProjectRow;
