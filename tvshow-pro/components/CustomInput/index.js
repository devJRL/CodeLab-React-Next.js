const CustomInput = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange = () => {},
}) => {
  return (
    <div className="custom-input">
      <input
        type={type} // text, email, password
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
