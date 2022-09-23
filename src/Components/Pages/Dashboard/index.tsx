import React, { useState, useEffect } from "react";
import DashboardTemplate from "Components/Templates/Dashboard";
import "./style.css";
import TaskOverview from "Components/Organisms/TaskOverview";
import { overviewCards } from "./dummyData";
import BigCard from "Components/Organisms/BigCard";
import TabNav from "Components/Molecules/TabNav";
import CustomDropdown from "Components/Molecules/CustomDropdown";
import Graph from "Components/Molecules/Graph";
import TaskTable from "Components/Organisms/Table/Tables/TaskTable";
import Typography from "Components/Atom/Typography";
import { DotsVertical, ScheduleIcon } from "Components/Atom/SvgIcons";
import UserMessages from "Components/Organisms/UserMessages";
import Input from "Components/Atom/Inputs/Input";
import Button from "Components/Atom/Button/Button";
import Image from "Components/Atom/Image";
import { editData, saveData } from "Service/localStore";
import { delay } from "Utils/helper";
import Notiflix from "notiflix";
import useStore from "Utils/hooks/useStore";

interface DashboardProps {}
const Dashboard: React.FC<DashboardProps> = () => {
  // Store
  const [state, setState] = useState({
    id: "",
    name: "",
    startTime: "",
    endTime: "",
    hour: "",
    progress: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);

  //   Hooks
  const { todos, updateTodo } = useStore();

  //   Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: taskName, startTime, endTime, hour } = state;
    const canSubmit: any = !taskName && !startTime && !endTime && !hour;

    const { name, value } = e.target;
    setState((prevState: any) => ({ ...prevState, [name]: value }));
    console.log({ canSubmit });
    setDisableSubmit(canSubmit);
  };

  const reset = () => {
    setState({
      id: "",
      name: "",
      startTime: "",
      endTime: "",
      hour: "",
      progress: "",
    });
  };

  const handleSubmit = async () => {
    setDisableSubmit(false);

    if (isEditing) {
      await delay(editData(state));
      setDisableSubmit(true);
      reset();
      updateTodo();
      setIsEditing(false);
      Notiflix.Notify.success("Task Edited");
      return;
    }

    await delay(saveData(state));
    setDisableSubmit(true);
    reset();
    updateTodo();
    Notiflix.Notify.success("Task Saved");
  };

  const handleEditData = (data: any) => {
    setState(data);
    setDisableSubmit(false);
    setIsEditing(true);
  };

  //   Effects
  useEffect(() => {}, []);

  // Data to render
  return (
    <DashboardTemplate>
      <>
        <div className="das-wrapper">
          <main className="das-main">
            <div className="center">
              <TaskOverview tasks={overviewCards} className="mb-20" />

              <BigCard
                title="Task Done"
                className="mb-20"
                topRightEle={<TabNav navs={["Daily", "Weekely", "Monthly"]} />}
                cardData={<Graph />}
              />

              <BigCard
                title="Task"
                topRightEle={<CustomDropdown />}
                cardData={
                  <TaskTable
                    data={todos}
                    updateData={updateTodo}
                    setEditData={handleEditData}
                  />
                }
              />
            </div>
          </main>
          <aside className="das-aside">
            <div className="flex-row-jcbetween-aicenter mb-30">
              <Typography as="h3" className="hd-5" text="Today’s Scheudle" />
              <ScheduleIcon />
            </div>
            <div className="flex-row-jcbetween-aicenter mb-25">
              <Typography as="h3" className="hd-5" text="New Task" />
              <DotsVertical />
            </div>
            <Typography as="h4" className="hd-7 mb-20" text="Task Title" />
            <Input
              placeholder="Create new"
              className="mb-20"
              onChange={handleChange}
              name="name"
              value={state.name}
            />
            <Image src="smileys.png" defaultPath />
            <div className="das-dates-input">
              <Typography
                as="h4"
                className="hd-7 mb-20"
                text="Add Collaborators"
              />

              <div className="flex-row-jcbetween-aicenter">
                <Image src="collab-1.png" defaultPath />
                <Image src="collab-2.png" defaultPath />
                <Button>
                  <Image src="plus-circle.svg" defaultPath />
                </Button>
                <Button>
                  <Image src="Arrow-circle.svg" defaultPath />
                </Button>
              </div>
            </div>
            <div className="das-dates-input">
              <Typography as="h4" className="hd-7 mb-20" text="Task Title" />

              <Input
                type="date"
                placeholder="Start Date"
                className="mb-25"
                name="startTime"
                value={state.startTime}
                onChange={handleChange}
              />
              <Input
                type="date"
                placeholder="End Date"
                name="endTime"
                value={state.endTime}
                onChange={handleChange}
              />
            </div>

            <div className="das-dates-input">
              <Typography
                as="h4"
                className="hd-7 mb-20"
                text="Hours Budgeted"
              />

              <Input
                type="number"
                placeholder="Enter Hours"
                name="hour"
                value={state.hour}
                onChange={handleChange}
              />

              <Button
                disabled={disableSubmit}
                onClick={() => handleSubmit()}
                className="ml-auto display-block btn-md btn-primary mt-28"
              >
                Save
              </Button>
            </div>
            <UserMessages />
          </aside>
        </div>
      </>
    </DashboardTemplate>
  );
};

export default Dashboard;
