import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SpendingChart() {
  const data = [
    { month: "Apr", amount: 12500 },
    { month: "May", amount: 14800 },
    { month: "Jun", amount: 11200 },
    { month: "Jul", amount: 17600 },
    { month: "Aug", amount: 15200 },
    { month: "Sep", amount: 16550 },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6">
      
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-900">
          Monthly Spending
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Your spending over the last 6 months
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              formatter={(value) => [`₹${value.toLocaleString("en-IN")}`, "Spent"]}
            />
            <Bar
              dataKey="amount"
              fill="#10b981"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default SpendingChart;