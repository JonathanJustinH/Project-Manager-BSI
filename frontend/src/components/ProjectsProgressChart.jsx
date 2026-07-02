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

function truncateLabel(label, maxLength = 18) {
  if (label.length <= maxLength) {
    return label;
  }

  return `${label.slice(0, maxLength - 1)}…`;
}

function ProjectTick({ x, y, payload }) {
  const label = String(payload.value);

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={4}
        textAnchor="end"
        fill="var(--text-h)"
        fontSize={14}
      >
        {truncateLabel(label)}
        <title>{label}</title>
      </text>
    </g>
  );
}

function ProjectsProgressChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
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
          width={120}
          tick={ProjectTick}
          tickLine={false}
          axisLine={false}
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