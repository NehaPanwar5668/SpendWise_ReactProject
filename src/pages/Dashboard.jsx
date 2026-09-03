import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PiggyBank,
} from "lucide-react";

import StatCard from "../components/StatCard";

function Dashboard() {
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
          amount={58450}
          icon={Wallet}
          iconBg="bg-emerald-100"
          iconColor="text-emerald-600"
          change="8.2% this month"
        />

        <StatCard
          title="Total Income"
          amount={75000}
          icon={TrendingUp}
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
          change="12.5% this month"
        />

        <StatCard
          title="Total Expenses"
          amount={16550}
          icon={TrendingDown}
          iconBg="bg-red-100"
          iconColor="text-red-600"
          change="4.8% this month"
        />

        <StatCard
          title="Total Savings"
          amount={58450}
          icon={PiggyBank}
          iconBg="bg-purple-100"
          iconColor="text-purple-600"
          change="15.3% this month"
        />

      </div>
    </div>
  );
}

export default Dashboard;