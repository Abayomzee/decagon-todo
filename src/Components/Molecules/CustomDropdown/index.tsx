import React, { useState, useRef } from "react";
import Button from "Components/Atom/Button/Button";
import "./style.css";
import Caret from "Components/Atom/SvgIcons/Caret";
import useOnClickOutside from "Utils/hooks/useOnClickOutside";

const data = [
  { id: "1", name: "Last day", value: "Last day" },
  { id: "2", name: "Last 7 days", value: "Last 7 days" },
  { id: "3", name: "Last 30 days", value: "Last 30 days" },
  { id: "4", name: "Last quarter", value: "Last quarter" },
  { id: "5", name: "Last year", value: "Last year" },
];

interface CustomDropdownProps {
  options?: any;
}
const CustomDropdown: React.FC<CustomDropdownProps> = (props) => {
  // Ref
  const menuRef = useRef<any>();

  // State
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Last 7 days");

  //   Props
  const { options = data } = props;

  // Hooks
  useOnClickOutside(menuRef, () => setShow(false));

  // Data to render
  return (
    <div className="cd-wrapper">
      <Button className={"btn-dropdown-toggle"} onClick={() => setShow(!show)}>
        {selectedOption} <Caret />
      </Button>
      {show && (
        <div ref={menuRef} className={`cd-dropdown animate-in `}>
          {options.map((option: any) => (
            <Button
              key={option.id}
              className={`cd-item ${
                selectedOption === option.value ? "active" : ""
              }`}
              onClick={() => {
                setSelectedOption(option.value);
                setShow(false);
              }}
            >
              <span className="cd-item-radio"></span>
              <span className="cd-item-label">{option.name}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
