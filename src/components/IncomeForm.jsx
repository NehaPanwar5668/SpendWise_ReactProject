import { useState } from "react";

function IncomeForm({ onAddIncome }) {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!source || !amount) {
      alert("Please fill all fields");
      return;
    }

    onAddIncome({
      source,
      amount,
    });

    setSource("");
    setAmount("");
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6">
      <h2 className="text-lg font-bold text-slate-900">
        Add Income
      </h2>

      <p className="text-sm text-slate-500 mt-1 mb-6">
        Record a new income
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Income source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition"
        >
          Add Income
        </button>
      </form>
    </div>
  );
}

export default IncomeForm;