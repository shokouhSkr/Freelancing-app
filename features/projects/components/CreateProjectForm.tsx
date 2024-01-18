"use client";

import { useState } from "react";
import { DatePickerField, Select, TextInput } from "@/features";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import { useCategories } from "../hooks/useCategories";
import { useCreateProject } from "../hooks/useCreateProject";
import { CreateProjectFormPropType } from "@/types";
import { useEditProject } from "../hooks/useEditProject";

const CreateProjectForm = ({ onClose, projectToEdit = {} }: CreateProjectFormPropType) => {
  const { _id: editId } = projectToEdit;
  const isEditingSession = Boolean(editId);

  const { title, description, budget, category, deadline, tags: projectTags } = projectToEdit;
  let editValues = {};
  if (isEditingSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  // register => with this, we don't need to pass onChange, value, onBlur, ... to the form. it does automatically
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: editValues });

  const [tags, setTags] = useState<string[]>(projectTags || []);
  const [date, setDate] = useState<Date>(new Date(deadline || ""));
  const { newCategories: categories } = useCategories();
  const { isCreating, mutateAsync: createProject } = useCreateProject();
  const { isEditing, mutateAsync: editProject } = useEditProject();

  const onSubmit = async (data: any) => {
    // console.log(data);

    const newProject = { ...data, deadline: new Date(date).toISOString(), tags };

    if (isEditingSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
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

      <div>
        <button type="submit" className="btn">
          {isCreating ? "..." : "تایید"}
        </button>
      </div>
    </form>
  );
};

export default CreateProjectForm;
