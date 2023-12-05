import React from "react";

export const Input = ({ type, placeholder, value, name, onInputChange }) => {

  const handleChange = (e) => {
    const inputValue = e.target.value;
    onInputChange(name, inputValue)};

  return (
    <>
      <input
        className="form-control"
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </>
  );
};
