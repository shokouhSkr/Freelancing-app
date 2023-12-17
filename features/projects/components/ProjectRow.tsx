"use client";

import { useState } from "react";
import { ConfirmDelete, Modal } from "@/features";
import Table from "@/features/shared/components/Table";
import { truncateText, formatPrice, toLocalDateShort } from "@/utils/helpers";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import { useRemoveProject } from "../hooks/useRemoveProject";

const ProjectRow = ({ project, index }: { project: any; index: number }) => {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const { removeProject, isDeleting } = useRemoveProject();

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
      <td>
        <div className="flex items-center gap-4">
          {/* edit project */}
          <button onClick={() => setIsEditOpen(true)}>
            <TbPencilMinus className="w-5 h-5 text-primary-900" />
          </button>
          <Modal
            open={isEditOpen}
            title={`ویرایش ${project.title}`}
            onClose={() => setIsEditOpen(false)}
          >
            this is modal from editing
          </Modal>

          {/* delete project */}
          <button onClick={() => setIsDeleteOpen(true)}>
            <HiOutlineTrash className="w-5 h-5 text-error" />
          </button>
          <Modal
            open={isDeleteOpen}
            title={`حذف ${project.title}`}
            onClose={() => setIsDeleteOpen(false)}
          >
            <ConfirmDelete
              resourceName={project.title}
              onClose={() => setIsDeleteOpen(false)}
              onConfirm={() =>
                removeProject(project._id, {
                  onSuccess: () => setIsDeleteOpen(false),
                })
              }
              disabled={false}
            />
          </Modal>
        </div>
      </td>
    </Table.Row>
  );
};

export default ProjectRow;
