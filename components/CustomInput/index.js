import { useState } from "react";

const CustomInput = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange = () => {},
  onBlur = () => {},
}) => {
  const [error, setError] = useState("");

  const handleBlur = () => {
    const isValid = onBlur && onBlur(value);
    isValid ? setError("") : setError(`Invalid ${name}`);
  };

  return (
    <div className="custom-input">
      <input
        type={type} // text, email, password
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        onKeyPress={handleBlur}
      />

      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default CustomInput;
