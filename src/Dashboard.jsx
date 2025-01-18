import Sidebar from "./components/Sidebar";
import StateCard from "./components/StateCard";
import PieChartBox from "./components/PieChartBox";
import LineChartBox from "./components/LineChartBox";
import Banner from "./components/Banner";
import Header from "./components/Header";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6">
        <Header/>
        <Banner />
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <StateCard />
          <StateCard />
          <StateCard />
        </div>

        {/* Charts Section */}
        <div className="flex flex-col lg:flex-row gap-4 mt-6">
          <PieChartBox />
          <LineChartBox />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
