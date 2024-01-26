"use client";

import { useSearchParams } from "next/navigation";
import { FilterPropType } from "@/types";

const FilterButtons = ({ filterField, options }: FilterPropType) => {
  const searchParams = useSearchParams();
  const currentFilterValue = searchParams.get(filterField) || options[0].value;

  // Update the browser history with the new URL
  const handleClick = (value: string) => {
    const updatedParams = new URLSearchParams(searchParams.toString());
    updatedParams.set(filterField, value);
    window.history.pushState(null, "", `?${updatedParams.toString()}`);
  };

  return (
    <div className="flex items-center gap-2 text-xs">
      <span>وضعیت</span>

      <div className="flex items-center gap-2 p-1 shadow border border-secondary-100 bg-secondary-0 rounded-lg">
        {options.map((item) => {
          const isActive = item.value === currentFilterValue;

          return (
            <button
              key={item.value}
              disabled={isActive} // so when is already active, we can't send request again
              onClick={() => handleClick(item.value)}
              className={`whitespace-nowrap rounded-md px-4 py-1 font-bold transition-all duration-300
             ${isActive ? "!bg-primary-900 text-white" : "bg-secondary-0 text-secondary-800"} 
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterButtons;
