import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", complaints: 120 },
  { month: "Feb", complaints: 160 },
  { month: "Mar", complaints: 180 },
  { month: "Apr", complaints: 220 },
  { month: "May", complaints: 260 },
  { month: "Jun", complaints: 240 },
];

function MonthlyComplaintsChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="complaints"
          stroke="#1976D2"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default MonthlyComplaintsChart;