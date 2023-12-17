import { TextFieldPropType } from "@/types";

const TextField = ({ label, name, value, type = "text", onChange }: TextFieldPropType) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        autoComplete="off"
        className="text-input"
      />
    </div>
  );
};

export default TextField;
