import React from "react";
import UserDropdown from "Components/Molecules/UserDropdown";
import { BellIcon } from "Components/Atom/SvgIcons";

// Style
import "./style.css";

interface UserAndNotificationProps {
  className?: string;
}
const UserAndNotification: React.FC<UserAndNotificationProps> = ({
  className,
}) => {
  return (
    <div
      className={`uad-wrapper flex-row-aicenter ${className ? className : ""}`}
    >
      <BellIcon />
      <UserDropdown />
    </div>
  );
};

export default UserAndNotification;
