function StatCard({ title, amount, icon: Icon, iconBg, iconColor, change }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition">
      
      <div className="flex items-center justify-between">
        
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-2">
            ₹{amount.toLocaleString("en-IN")}
          </h3>
        </div>

        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}
        >
          <Icon size={22} className={iconColor} />
        </div>

      </div>

      {change && (
        <p className="text-sm text-emerald-600 mt-4 font-medium">
          ↑ {change}
        </p>
      )}

    </div>
  );
}

export default StatCard;