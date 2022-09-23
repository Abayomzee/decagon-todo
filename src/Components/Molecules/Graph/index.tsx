import React from "react";

import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

const data = {
  id: 1,
  // title: "Average response Time",
  // performance: "+4.14%",
  priorityType: 1,
  chart: {
    options: {
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        // y: {
        //   grid: {
        //     display: false,
        //   },
        // },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
    data: {
      labels: [
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
      ],
      datasets: [
        {
          label: "",
          data: [0, 15, 40, 17, 30, 25, 25, 23, 15, 40, 17, 30],
          borderColor: "#4BA8A8",
          backgroundColor: "#4ba8a88f",
          tension: 0.6,
        },
        {
          label: "",
          data: [3, 10, 30, 47, 20, 15, 5, 13, 2, 10, 30, 47],
          borderColor: "#F8B400",
          backgroundColor: "#f8b60081",
          tension: 0.6,
        },
      ],
    },
  },
};

interface GraphProps {}
const Graph: React.FC<GraphProps> = () => {
  return <Line options={data.chart.options} data={data.chart.data} />;

};

export default Graph;
