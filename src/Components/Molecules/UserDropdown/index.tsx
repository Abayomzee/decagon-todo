import Image from "Components/Atom/Image";
import { CaretDownIcon } from "Components/Atom/SvgIcons";
import React from "react";
import "./style.css";

interface UserDropdownProps {}
const UserDropdown: React.FC<UserDropdownProps> = () => {
  return (
    <div className="ud-wrapper flex-row-aicenter">
      <Image src="user-icon.png" defaultPath />
      <CaretDownIcon />
    </div>
  );
};

export default UserDropdown;
