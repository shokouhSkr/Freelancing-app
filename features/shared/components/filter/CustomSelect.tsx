import { CustomSelectPropType } from "@/types";

const CustomSelect = ({ value, onChange, options }: CustomSelectPropType) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="px-2 py-1 w-32 text-sm shadow rounded-lg bg-secondary-0 focus:outline-none"
    >
      {options.map((item: any) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
