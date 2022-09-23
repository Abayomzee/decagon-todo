import React from "react";
import SideNav from "Components/Organisms/SideNav";
import TopNav from "Components/Organisms/TopNav";
import "./style.css";

interface DashboardProps {
  children?: JSX.Element;
}
const DashboardTemplate: React.FC<DashboardProps> = ({ children }) => {
  return (
    <div className="d-wrapper">
      <aside className="d-side">
        <SideNav />
      </aside>
      <main className="d-body">
        <TopNav />
        <>{children}</>
      </main>
    </div>
  );
};

export default DashboardTemplate;
