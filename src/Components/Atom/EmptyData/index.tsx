import React from "react";
import Typography from "../Typography";
import "./style.css";

interface EmptyDataProps {
  text?: string;
}
const EmptyData: React.FC<EmptyDataProps> = ({ text }) => {
  return (
    <div className="emdt-wrapper">
      <img src="/assets/images/no-data.svg" alt="" className="emdt-img" />
      <Typography
        as="h5"
        className="hd-4"
        text={text ? text : "No data found"}
      />
    </div>
  );
};

export default EmptyData;
