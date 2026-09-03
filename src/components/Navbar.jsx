import { Search, Bell, User } from "lucide-react";

function Navbar() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
      
      
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Dashboard
        </h2>
        <p className="text-sm text-slate-500">
          Here's your financial overview
        </p>
      </div>

    
      <div className="flex items-center gap-5">
        
        <div className="hidden md:flex items-center gap-2 bg-slate-100 px-4 py-2.5 rounded-xl">
          <Search size={18} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-32"
          />
        </div>

      
        <button className="relative p-2.5 rounded-xl hover:bg-slate-100 transition">
          <Bell size={20} className="text-slate-600" />

          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
            <User size={20} className="text-emerald-600" />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-800">
              My Account
            </p>
            <p className="text-xs text-slate-500">
              Personal
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;