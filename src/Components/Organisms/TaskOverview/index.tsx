import React from "react";
import TaskCard from "Components/Molecules/TaskCard";
import "./style.css";

interface TaskOverviewProps {
  tasks?: any;
  className?: string;
}
const TaskOverview: React.FC<TaskOverviewProps> = ({ tasks, className }) => {
  return (
    <div className={`to-wrapper ${className ? className : ""}`}>
      {tasks?.map((task: any) => (
        <TaskCard
          key={task.id}
          icon={task.icon}
          title={task.title}
          value={task.value}
          graphIcon={task.graphIcon}
          valueMore={task.valueMore}
        />
      ))}
    </div>
  );
};

export default TaskOverview;
