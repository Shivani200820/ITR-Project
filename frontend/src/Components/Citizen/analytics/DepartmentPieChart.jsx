import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";
import { Paper, Typography } from "@mui/material";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Road",
    "Garbage",
    "Water",
    "Electricity",
  ],

  datasets: [
    {
      data: [8, 5, 6, 5],
    },
  ],
};

function DepartmentPieChart() {
  return (
    <Paper sx={{ p: 3, borderRadius: 4 }}>
      <Typography
        variant="h6"
        fontWeight="bold"
        mb={2}
      >
        Department Distribution
      </Typography>

      <Pie data={data} />
    </Paper>
  );
}

export default DepartmentPieChart;