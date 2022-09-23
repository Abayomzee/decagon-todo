import React from "react";
import Typography from "Components/Atom/Typography";

// Style
import "./style.css";

interface TaskCardProps {
  icon?: JSX.Element;
  title?: string;
  value?: string;
  graphIcon?: JSX.Element;
  valueMore?: string;
}
const TaskCard: React.FC<TaskCardProps> = (props) => {
  // Props
  const { icon, title, value, graphIcon, valueMore } = props;

  //   Data to render
  return (
    <div className="tc-wrapper">
      <div className="flex-row-jcbetween-aicenter tc-top">
        <div className="flex-row-aicenter tc-top-left">
          {icon}
          <Typography as="h5" className="hd-1" text={title} />
        </div>

        <Typography as="h3" className="hd-2" text={value} />
      </div>
      <div className="flex-row-jcbetween-aicenter tc-bottom">
        <div>{graphIcon}</div>
        <div>
          <Typography as="h5" className="hd-1 text-right">
            <span className="color-7">{`${valueMore}+`}</span> more
          </Typography>
          <Typography as="h5" className="hd-1" text="from last week" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
