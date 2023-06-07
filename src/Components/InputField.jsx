import React from 'react';

const InputField = ({ type, name, placeholder, required, autoFocus }) => {
  return <input className="info" type={type} name={name} placeholder={placeholder} required={required} autoFocus={autoFocus} />;
};

export default InputField;
