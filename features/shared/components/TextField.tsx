interface TextFieldPropType {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({ label, name, value, onChange }: TextFieldPropType) => {
  return (
    <div>
      <label className="text-primary-300" htmlFor={name}>
        {label}
      </label>
      <input
        type="number"
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
