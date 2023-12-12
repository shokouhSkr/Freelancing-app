interface RadioInputPropType {
  label: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput = ({ label, value, checked, onChange }: RadioInputPropType) => {
  return (
    <div className="flex items-center gap-2 text-secondary-600">
      <input
        type="radio"
        name="role" // must all radio inputs that are related have same name attr
        value={value}
        id={value}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 cursor-pointer form-radio text-green-500 focus:ring-0 focus:ring-offset-0" /* form-radio comes from @tailwindcss/form plugin (that's why we can use text-green-500) */
      />
      <label htmlFor={value} className="cursor-pointer mt-2">
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
