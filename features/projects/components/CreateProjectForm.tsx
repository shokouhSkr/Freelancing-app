"use client";

import { TextInput } from "@/features";
import { useForm } from "react-hook-form";

const CreateProjectForm = () => {
  // register => with this, we don't need to pass onChange, value, onBlur, ... to the form. it does automatically
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <TextInput
        label="پروژه"
        name="title"
        register={register}
        required
        error={errors}
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "حداقل تعداد کارکترها 10 است",
          },
        }}
      />
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
        label="بودجه"
        name="budget"
        type="number"
        register={register}
        required
        error={errors}
        validationSchema={{
          required: "بودجه ضروری است",
        }}
      />

      <button type="submit" className="btn">
        تایید
      </button>
    </form>
  );
};

export default CreateProjectForm;
