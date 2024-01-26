"use client";

import { FilterButtons, FilterDropdown } from "@/features";
import { useCategories } from "@/features/projects/hooks/useCategories";

const sortOptions = [
  { value: "latest", label: "جدیدترین" },
  { value: "earliest", label: "قدیمی ترین" },
];

const statusOptions = [
  { value: "ALL", label: "همه" },
  { value: "OPEN", label: "باز" },
  { value: "CLOSED", label: "بسته" },
];

const ProjectsHeader = () => {
  const { transformedCategories: categories } = useCategories();

  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>

      <FilterButtons filterField="status" options={statusOptions} />

      <div className="flex items-center gap-4">
        <FilterDropdown
          filterField="category"
          options={[{ value: "ALL", label: "همه دسته ها" }, ...categories]}
        />
        <FilterDropdown filterField="sort" options={sortOptions} />
      </div>
    </div>
  );
};

export default ProjectsHeader;
