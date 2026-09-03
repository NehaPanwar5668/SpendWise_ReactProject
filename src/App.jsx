import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      <Sidebar />

      <div className="ml-64">
        <Navbar />

        <main className="p-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Welcome to SpendWise 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your money smarter and achieve your financial goals.
          </p>
        </main>
      </div>

    </div>
  );
}

export default App;