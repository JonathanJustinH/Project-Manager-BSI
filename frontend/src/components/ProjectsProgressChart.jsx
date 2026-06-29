import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "1", progress: 85 },
  { name: "2", progress: 62 },
  { name: "3", progress: 40 },
];

function ProjectsProgressChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
      >
        <XAxis type="number" domain={[0, 100]} />
        <YAxis
          type="category"
          dataKey="name"
          width={80}
        />
        <Tooltip formatter={(value) => `${value}%`} />
        <Bar className="progress-bar" dataKey="progress" radius={[0, 6, 6, 0]} fill="var(--border)"/>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ProjectsProgressChart;