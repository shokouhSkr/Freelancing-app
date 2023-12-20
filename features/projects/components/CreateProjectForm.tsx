"use client";

import { useState } from "react";
import { DatePickerField, Select, TextInput } from "@/features";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import { useCategories } from "../hooks/useCategories";

const CreateProjectForm = () => {
  // register => with this, we don't need to pass onChange, value, onBlur, ... to the form. it does automatically
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [tags, setTags] = useState<string[]>([]);
  const [date, setDate] = useState<Date>(new Date());
  const { categories } = useCategories();

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
      <Select label="دسته بندی" name="category" register={register} options={categories} required />

      <div>
        <label className="mb-2 block text-secondary-700">برچسب ها</label>
        <TagsInput name="tags" value={tags} onChange={setTags} />
      </div>

      <DatePickerField label="ددلاین" date={date} setDate={setDate} />

      <button type="submit" className="btn">
        تایید
      </button>
    </form>
  );
};

export default CreateProjectForm;
