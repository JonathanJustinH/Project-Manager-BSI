import {
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const data = [
  { name: "To do", value: 37 },
  { name: "In Progress", value: 12 },
  { name: "Not Started", value: 7 },
  { name: "Completed", value: 9 },
]

const COLORS = [
  "#3b82f6",
  "var(--accent)",
  "#9ca3af",
  "var(--border)",
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
                    formatter={(value) => {
                        const item = data.find((d) => d.name === value);
                        return (
                            <span>
                                <span style={{ color: "black", marginLeft: "10px"}}>
                                    {value} {item?.value}
                                </span>
                            </span>
                        );
                    }}
                />
            </PieChart>
        </ResponsiveContainer>
    )
}
export default TasksOverviewChart;