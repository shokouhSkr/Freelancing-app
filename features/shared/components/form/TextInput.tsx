import { TextFieldPropType } from "@/types";

const TextField = ({
  label,
  name,
  register,
  validationSchema,
  required,
  error,
  type = "text",
}: TextFieldPropType) => {
  return (
    <div>
      <label htmlFor={name} className="text-secondary-700 mb-2 block">
        {label} {required && <span className="text-error">*</span>}
      </label>

      <input
        {...register(name, validationSchema)}
        id={name}
        type={type}
        autoComplete="off"
        className="text-input"
      />

      {error && error[name] && (
        <span className="text-error text-sm mt-2 block">{error[name]?.message}</span>
      )}
    </div>
  );
};

export default TextField;
