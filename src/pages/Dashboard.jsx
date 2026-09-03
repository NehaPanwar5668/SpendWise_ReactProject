import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PiggyBank,
} from "lucide-react";

import { useState } from "react";

import StatCard from "../components/StatCard";
import TransactionTable from "../components/TransactionTable";
import SpendingChart from "../components/SpendingChart";
import CategoryChart from "../components/CategoryChart";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import IncomeForm from "../components/IncomeForm";
import IncomeList from "../components/IncomeList";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const totalExpenses = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );
  const totalIncome = income.reduce(
    (total, item) => total + Number(item.amount),
    0
  );
  const totalBalance = totalIncome - totalExpenses;

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      {
        ...expense,
        id: Date.now(),
      },
    ]);
  };
  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };
  const addIncome = (newIncome) => {
    setIncome((prevIncome) => [
      ...prevIncome,
      {
      ...expense,
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString("en-IN"),
      },
    ]);
  };
  const deleteIncome = (id) => {
    setIncome((prevIncome) =>
      prevIncome.filter((item) => item.id !== id)
    );
  };

  const totalSavings = totalIncome - totalExpenses;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Financial Overview
        </h1>

        <p className="text-slate-500 mt-1">
          Track your income, expenses and savings.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatCard
          title="Total Balance"
          amount={totalBalance}
          icon={Wallet}
          iconBg="bg-emerald-100"
          iconColor="text-emerald-600"
          change="8.2% this month"
        />

        <StatCard
          title="Total Income"
          amount={totalIncome}
          icon={TrendingUp}
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
          change="12.5% this month"
        />

        <StatCard
          title="Total Expenses"
          amount={totalExpenses}
          icon={TrendingDown}
          iconBg="bg-red-100"
          iconColor="text-red-600"
          change="4.8% this month"
        />

        <StatCard
          title="Total Savings"
          amount={totalSavings}
          icon={PiggyBank}
          iconBg="bg-purple-100"
          iconColor="text-purple-600"
          change="15.3% this month"
        />

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <ExpenseForm onAddExpense={addExpense} />

        <IncomeForm onAddIncome={addIncome} />
      </div>

      <div className="mt-6">
        <IncomeList
          income={income}
          onDeleteIncome={deleteIncome}
        />
      </div>


      <div className="mt-6">
        <ExpenseList
          expenses={expenses}
          onDeleteExpense={deleteExpense}
        />
      </div>

      <div className="mt-6">
        <TransactionTable />
      </div>

      <div className="mt-6">
        <SpendingChart />
      </div>

      <div className="mt-6">
        <CategoryChart />
      </div>

    </div>
  );
}

export default Dashboard;