import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

function TransactionTable() {
  const transactions = [
    {
      id: 1,
      name: "Grocery Shopping",
      category: "Food",
      date: "Sep 02, 2026",
      amount: 1250,
      type: "expense",
    },
    {
      id: 2,
      name: "Monthly Salary",
      category: "Income",
      date: "Sep 01, 2026",
      amount: 75000,
      type: "income",
    },
    {
      id: 3,
      name: "Netflix Subscription",
      category: "Entertainment",
      date: "Aug 29, 2026",
      amount: 649,
      type: "expense",
    },
    {
      id: 4,
      name: "Electricity Bill",
      category: "Bills",
      date: "Aug 27, 2026",
      amount: 1850,
      type: "expense",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-slate-200">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Recent Transactions
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Your latest financial activity
          </p>
        </div>

        <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
          View All
        </button>
      </div>

      {/* Transactions */}
      <div className="divide-y divide-slate-100">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-5 hover:bg-slate-50 transition"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                  transaction.type === "income"
                    ? "bg-emerald-100"
                    : "bg-red-100"
                }`}
              >
                {transaction.type === "income" ? (
                  <ArrowDownLeft
                    size={20}
                    className="text-emerald-600"
                  />
                ) : (
                  <ArrowUpRight
                    size={20}
                    className="text-red-600"
                  />
                )}
              </div>

              <div>
                <h3 className="font-semibold text-slate-800">
                  {transaction.name}
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  {transaction.category} • {transaction.date}
                </p>
              </div>
            </div>

            {/* Amount */}
            <p
              className={`font-bold ${
                transaction.type === "income"
                  ? "text-emerald-600"
                  : "text-red-500"
              }`}
            >
              {transaction.type === "income" ? "+" : "-"}₹
              {transaction.amount.toLocaleString("en-IN")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionTable;