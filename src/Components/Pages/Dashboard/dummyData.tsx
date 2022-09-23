import {
  DocsIcon,
  GraphGreen,
  GraphRed,
  GraphYellow,
  ListIcon,
  StarIcon,
} from "Components/Atom/SvgIcons";

export const overviewCards = [
  {
    id: "1",
    icon: <StarIcon />,
    title: "Task Completed",
    value: "08",
    graphIcon: <GraphGreen />,
    valueMore: "10",
  },
  {
    id: "2",
    icon: <DocsIcon />,
    title: "New Task",
    value: "10",
    graphIcon: <GraphYellow />,
    valueMore: "10",
  },
  {
    id: "3",
    icon: <ListIcon />,
    title: "Project Done",
    value: "10",
    graphIcon: <GraphRed />,
    valueMore: "08",
  },
];
