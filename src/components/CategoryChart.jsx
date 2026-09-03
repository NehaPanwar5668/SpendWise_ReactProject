import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function CategoryChart() {
  const data = [
    { name: "Food", value: 4500 },
    { name: "Bills", value: 3800 },
    { name: "Shopping", value: 3200 },
    { name: "Entertainment", value: 2500 },
    { name: "Transport", value: 2550 },
  ];

  const COLORS = [
    "#10b981",
    "#3b82f6",
    "#f59e0b",
    "#8b5cf6",
    "#ef4444",
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6">
      
      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-900">
          Spending by Category
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Where your money is going
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) =>
                `₹${value.toLocaleString("en-IN")}`
              }
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-3 mt-2">
        {data.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center gap-2 text-sm"
          >
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index] }}
            ></span>

            <span className="text-slate-600">
              {item.name}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default CategoryChart;