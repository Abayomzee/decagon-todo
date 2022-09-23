import React from "react";
import Logo from "Components/Atom/Logo";
import {
  BarsIcon,
  BookIcon,
  DashboardActiveIcon,
  FolderIcon,
  SettingsIcon,
  ShareIcon,
} from "Components/Atom/SvgIcons";

// Style
import "./style.css";

interface SideNavProps {}
const SideNav: React.FC<SideNavProps> = () => {
  return (
    <nav className="sn-wrapper">
      <Logo />

      <div className="sn-links">
        <DashboardActiveIcon className="active" />
        <BarsIcon />
        <BookIcon />
        <SettingsIcon />
        <ShareIcon />
        <FolderIcon />
      </div>
    </nav>
  );
};

export default SideNav;
