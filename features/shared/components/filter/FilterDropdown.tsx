"use client";

import { useSearchParams } from "next/navigation";
import { FilterPropType } from "@/types";
import CustomSelect from "./CustomSelect";

const FilterDropdown = ({ options, filterField }: FilterPropType) => {
  const searchParams = useSearchParams();
  const filterValue = searchParams.get(filterField) || "";

  // Update the browser history with the new URL (use-query does the rest)
  const handleSearch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const updatedParams = new URLSearchParams(searchParams.toString());
    updatedParams.set(filterField, e.target.value);
    window.history.pushState(null, "", `?${updatedParams.toString()}`);
  };

  return <CustomSelect value={filterValue} onChange={handleSearch} options={options} />;
};

export default FilterDropdown;
