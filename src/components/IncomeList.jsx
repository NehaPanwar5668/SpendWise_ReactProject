import { Trash2 } from "lucide-react";

function IncomeList({ income, onDeleteIncome }) {
    return (
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">
                Recent Income
            </h2>

            {income.length === 0 ? (
                <p className="text-sm text-slate-500">
                    No income added yet.
                </p>
            ) : (
                <div className="space-y-3">
                    {income.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border-b border-slate-100 pb-3"
                        >
                            <div>
                                <h3 className="font-medium text-slate-800">
                                    {item.source}
                                </h3>

                                <p className="text-xs text-slate-500">
                                    Income
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <p className="font-bold text-green-500">
                                    +₹{Number(item.amount).toLocaleString("en-IN")}
                                </p>

                                <button
                                    onClick={() => {
                                        if (window.confirm("Are you sure you want to delete this income?")) {
                                            onDeleteIncome(item.id);
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

export default IncomeList;