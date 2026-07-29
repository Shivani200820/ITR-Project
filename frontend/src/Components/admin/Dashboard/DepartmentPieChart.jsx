import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Road", value: 35 },
  { name: "Garbage", value: 25 },
  { name: "Water", value: 20 },
  { name: "Street Light", value: 12 },
  { name: "Parks", value: 8 },
];

const COLORS = [
  "#1976D2",
  "#2E7D32",
  "#ED6C02",
  "#9C27B0",
  "#D32F2F",
];

function DepartmentPieChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip />

        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default DepartmentPieChart;