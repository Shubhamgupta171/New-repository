import DashboardLayout from "./components/layout/DashboardLayout";
import DashboardContent from "./components/dashboard/DashboardContent";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <DashboardLayout>
        <DashboardContent />
      </DashboardLayout>
    </div>
  );
}

export default App;
