interface TextFieldPropType {
  label: string;
  name: string;
}

const TextField = ({ label, name }: TextFieldPropType) => {
  return (
    <div>
      <label className="text-primary-300" htmlFor={name}>
        {label}
      </label>
      <input type="text" name={name} id={name} autoComplete="off" className="text-input" />
    </div>
  );
};

export default TextField;
