import {
  LayoutDashboard,
  Receipt,
  BarChart3,
  WalletCards,
  Target,
  Settings,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Transactions", icon: Receipt },
    { name: "Analytics", icon: BarChart3 },
    { name: "Budget", icon: WalletCards },
    { name: "Goals", icon: Target },
    { name: "Settings", icon: Settings },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-950 text-white p-6">
      
      
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-xl">
          ₹
        </div>

        <div>
          <h1 className="text-xl font-bold">SpendWise</h1>
          <p className="text-xs text-slate-400">Personal Finance</p>
        </div>
      </div>

    
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

     
      <div className="absolute bottom-6 left-6 right-6">
        <div className="rounded-xl bg-slate-900 p-4">
          <p className="text-sm text-slate-400">Your money,</p>
          <p className="text-sm font-semibold">your control.</p>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;