import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "B-Shine Omnichannel", progress: 85 },
  { name: "Project", progress: 62 },
  { name: "Project 3", progress: 40 },
  { name: "Project 4", progress: 90 },
  { name: "Project 5", progress: 10 },
];

function ProjectsProgressChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
      >
        <CartesianGrid
          stroke="var(--border)"
          horizontal={false}
          vertical={true}
          strokeDasharray="3 3"
        />

        <XAxis
          type="number"
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
          tick={{ fontSize: 16 }}
        />

        <YAxis
          type="category"
          dataKey="name"
          width={80}
          tick={{ fontSize: 16 }}
        />

        <Tooltip formatter={(value) => `${value}%`} />

        <Bar
          className="progress-bar"
          dataKey="progress"
          radius={0}
          barSize={30}
          fill="var(--border)"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ProjectsProgressChart;