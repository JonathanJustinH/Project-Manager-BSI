import {
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const data = [
  { name: "To do", value: 21 },
  { name: "In Progress", value: 37 },
  { name: "Not Started", value: 4 },
  { name: "Completed", value: 42 },
]

const COLORS = [
  "#3b82f6",
  "var(--accent)",
  "#9ca3af",
  "var(--border",
];

function TasksOverviewChart() {
    return (
        <ResponsiveContainer width="100%" height={220}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="40%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={90}
                    paddingAngle={2}
                >
                    {data.map((entry, index) => (
                        <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend 
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                />
            </PieChart>
        </ResponsiveContainer>
    )
}
export default TasksOverviewChart;