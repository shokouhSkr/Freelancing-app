"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { useChangeUserStatus } from "../../hooks/useChangeUserStatus";
import { ChangeUserStatusPropType } from "@/types";
import { Select } from "@/features";

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

const ChangeUserStatus = ({ userId, onClose }: ChangeUserStatusPropType) => {
  const { register, handleSubmit } = useForm();
  const { isUpdating, changeUserStatus } = useChangeUserStatus();

  const queryClient = useQueryClient();
  const onSubmit = (data: any) => {
    changeUserStatus(
      { userId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["all-users"] });
        },
      }
    );
    console.log("user status: ", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select name="status" label="تغییر وضعیت" register={register} required options={options} />
        <div className="!mt-8">
          <button type="submit" className="btn btn--primary w-full">
            {isUpdating ? <BeatLoader color="#333" size={8} /> : "تایید"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeUserStatus;
