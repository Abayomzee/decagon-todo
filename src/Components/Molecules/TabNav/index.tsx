import Button from "Components/Atom/Button/Button";
import React, { useState } from "react";
import "./style.css";

interface TabNavProps {
  navs?: Array<string>;
}
const TabNav: React.FC<TabNavProps> = (props) => {
  // State
  const [activeTab, setActiveTab] = useState<number>(0);

  // Props
  const { navs } = props;

  //   Data to render
  return (
    <nav className="tnv-wrapper">
      {navs?.map((nav, idx) => (
        <Button
          key={idx}
          className={`btn-tab ${activeTab === idx ? "active" : ""}`}
          onClick={() => setActiveTab(idx)}
        >
          {nav}
        </Button>
      ))}
    </nav>
  );
};

export default TabNav;
