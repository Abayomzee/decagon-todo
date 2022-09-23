import { LensIcon } from "Components/Atom/SvgIcons";
import React from "react";
import "./style.css";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
}
const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  className,
}) => {
  return (
    <div
      className={`si-wrapper flex-row-aicenter ${className ? className : ""}`}
    >
      <input
        type="text"
        placeholder={placeholder ? placeholder : "Search anything..."}
        className="si-input"
      />
      <LensIcon className="cursor-pointer" />
    </div>
  );
};

export default SearchInput;
