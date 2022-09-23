import React from "react";
import "./style.css";

interface InputProps {
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: any;
  value?: any;
}
const Input: React.FC<InputProps> = (props) => {
  // Props
  const { type, placeholder, className } = props;
  return (
    <input
      {...props}
      type={type ? type : "text"}
      placeholder={placeholder ? placeholder : ""}
      className={`inpt-control ${className ? className : ""}`}
    />
  );
};

export default Input;
