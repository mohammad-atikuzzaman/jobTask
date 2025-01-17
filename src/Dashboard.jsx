
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StateCard from "./components/StateCard";
import PieChartBox from "./components/PieChartBox";
import LineChartBox from "./components/LineChartBox";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6">
        <Header/>
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mt-6">
         <StateCard/>
         <StateCard/>
         <StateCard/>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <PieChartBox/>
          <LineChartBox/>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
