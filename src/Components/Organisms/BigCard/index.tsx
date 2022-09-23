import React from "react";
import Typography from "Components/Atom/Typography";



import "./style.css";

interface BigCardProps {
  title?: string;
  topRightEle?: JSX.Element;
  cardData?: JSX.Element;
  className?: string;
}
const BigCard: React.FC<BigCardProps> = (props) => {
  // Props
  const { title, className, topRightEle, cardData } = props;

  // Data to render
  return (
    <div className={`bcd-wrapper ${className ? className : ""}`}>
      <div className="bcd-top">
        <Typography as="h4" className="hd-3" text={` ${title}`} />

        {topRightEle}
      </div>

      <div className="bcd-bottom">{cardData}</div>
    </div>
  );
};

export default BigCard;
