"use client";

import { TextInput } from "@/features";
import { useCreateProposal } from "@/features/proposals/hooks/useCreateProposal";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";

const CreateProposal = ({ onClose, projectId }: { onClose: () => void; projectId: string }) => {
  const { createProposal, isCreating } = useCreateProposal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const newProposal = { ...data, projectId };
    // console.log("data from createProposal: ", newProposal);

    createProposal(newProposal, {
      onSuccess: () => onClose(),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <TextInput
        label="توضیحات"
        name="description"
        register={register}
        required
        error={errors}
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 10,
            message: "حداقل 10 کاراکتر را وارد کنید",
          },
        }}
      />
      <TextInput
        label="قیمت"
        name="price"
        type="number"
        register={register}
        required
        error={errors}
        validationSchema={{
          required: "قیمت ضروری است",
        }}
      />
      <TextInput
        label="مدت زمان (روز)"
        name="duration"
        type="number"
        register={register}
        required
        error={errors}
        validationSchema={{
          required: "مدت زمان ضروری است",
        }}
      />

      <div>
        <button type="submit" className="btn">
          {isCreating ? <BeatLoader color="#fff" className="translate-y-1" /> : "تایید"}
        </button>
      </div>
    </form>
  );
};

export default CreateProposal;
