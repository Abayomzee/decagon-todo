import Typography from "Components/Atom/Typography";
import React from "react";
import "./style.css";

interface ProgressBArProps {
  progress?: number | string;
}
const ProgressBar: React.FC<ProgressBArProps> = ({ progress }) => {
  return (
    <div className="pb-wrapper">
      <Typography
        as="h6"
        className="hd-4 mb-5"
        text={`${progress ? progress : 60}% complete`}
      />
      <div className="pb-bg">
        <div className="pb-progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
