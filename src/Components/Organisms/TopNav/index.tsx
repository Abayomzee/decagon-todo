import React from "react";
import SearchInput from "Components/Molecules/SearchInput";
import UserAndNotification from "Components/Molecules/UserAndNotification";

import "./style.css";

interface TopNavProps {}
const TopNav: React.FC<TopNavProps> = () => {
  return (
    <div className="tn-wrapper">
      <div className="center">
        <div className="tn-container flex-row-aicenter">
          <SearchInput className="ml-auto" />
          <UserAndNotification className="ml-auto" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
