import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { Paper, Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

  datasets: [
    {
      label: "Complaints",
      data: [5, 9, 6, 11, 8, 14],
      borderWidth: 3,
      tension: 0.4,
    },
  ],
};

function ComplaintTrendChart() {
  return (
    <Paper sx={{ p: 3, borderRadius: 4 }}>
      <Typography
        variant="h6"
        fontWeight="bold"
        mb={2}
      >
        Complaint Trend
      </Typography>

      <Line data={data} />
    </Paper>
  );
}

export default ComplaintTrendChart;