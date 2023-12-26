"use client";

import { Select } from "@/features";
import { ChangeProposalStatusPropType } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useChangeProposalStatus } from "../hooks/useChangeProposalStatus";
import { useParams } from "next/navigation";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

const ChangeProposalStatus = ({ proposalId, onClose }: ChangeProposalStatusPropType) => {
  const { register, handleSubmit } = useForm();
  const { changeProposalStatus, isUpdatingStatus } = useChangeProposalStatus();
  const { projectId } = useParams();
  const queryClient = useQueryClient();

  // type StatusType = "0" | "1" | "2";

  const onSubmit = (data: any) => {
    changeProposalStatus(
      { id: proposalId, data }, // {projectId, proposalId, status}
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["project", projectId] }); // to update project data with this specific id
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select name="status" label="تغییر وضعیت" register={register} required options={options} />
        <div className="!mt-8">
          {isUpdatingStatus ? (
            <h1>loading...</h1>
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ChangeProposalStatus;
