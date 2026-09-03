import { Trash2 } from "lucide-react";
function ExpenseList({ expenses, onDeleteExpense }) {
    return (
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">
                Recent Expenses
            </h2>

            {expenses.length === 0 ? (
                <p className="text-sm text-slate-500">
                    No expenses added yet.
                </p>
            ) : (
                <div className="space-y-3">
                    {expenses.map((expense) => (
                        <div
                            key={expense.id}
                            className="flex items-center justify-between border-b border-slate-100 pb-3"
                        >
                            <div>
                                <h3 className="font-medium text-slate-800">
                                    {expense.title}
                                </h3>

                                <p className="text-xs text-slate-500">
                                    {expense.category}
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <p className="font-bold text-red-500">
                                    -₹{Number(expense.amount).toLocaleString("en-IN")}
                                </p>

                                <button
                                    onClick={() => {
                                        if (window.confirm("Are you sure you want to delete this expense?")) {
                                            onDeleteExpense(expense.id);
                                        }
                                    }}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ExpenseList;