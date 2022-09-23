import React from "react";
import Table from "Components/Organisms/Table";
import ProgressBar from "Components/Molecules/ProgressBar";
import TableAction from "Components/Molecules/TableAction";
import EmptyData from "Components/Atom/EmptyData";
import { completeTodo, deleteData, getItem } from "Service/localStore";

interface TaskTableProps {
  data?: any;
  updateData?: () => void;
  setEditData?: (data: any) => void;
}

const TaskTable: React.FC<TaskTableProps> = ({
  data,
  updateData,
  setEditData,
}) => {
  const columns = [
    {
      label: "Name Of Task",
      path: "name",
    },
    {
      label: "Start Date",
      path: "startTime",
    },
    {
      label: "End Date",
      path: "endTime",
    },
    {
      label: "Hours",
      path: "hour",
    },
    {
      label: "Progress",
      path: "progress",
    },
    {
      label: "",
      path: "action",
    },
  ];

  // const data = [
  //   {
  //     id: "1",
  //     name: "User journey of the project",
  //     startDate: "Jan 1, 2022",
  //     endDate: "Jan 31, 2022",
  //     hours: "80",
  //     progress: <ProgressBar progress={30} />,
  //     action: <TableAction />,
  //   },
  //   {
  //     id: "2",
  //     name: "Wireframing the project",
  //     startDate: "Jan 1, 2022",
  //     endDate: "Jan 31, 2022",
  //     hours: "80",
  //     progress: <ProgressBar progress={60} />,
  //     action: <TableAction />,
  //   },
  // {
  //   id: "3",
  //   name: "User interface design",
  //   startDate: "Jan 1, 2022",
  //   endDate: "Jan 31, 2022",
  //   hours: "80",
  //   progress: <ProgressBar progress={40} />,
  //   action: <TableAction />,
  // },
  // ];

  const mappedData = data.map((dat: any) => ({
    ...dat,
    progress: <ProgressBar progress={dat.progress} />,
    action: (
      <TableAction
        handleComplete={() => {
          completeTodo(dat.id);
          updateData!();
        }}
        handleEdit={() => setEditData!(getItem(dat.id))}
        handleDelete={() => {
          deleteData(dat);
          updateData!();
        }}
      />
    ),
  }));

  return (
    <>
      {data.length ? (
        <Table data={mappedData} columns={columns} />
      ) : (
        <EmptyData />
      )}
    </>
  );
};

export default TaskTable;
