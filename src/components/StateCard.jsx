import { FaAnglesUp } from "react-icons/fa6";
import { RiBarChartGroupedLine } from "react-icons/ri";

const StateCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
      <div>
      <h2 className="text-sm text-gray-600">Total Active Users</h2>
      <span className="text-green-500 text-sm flex items-center space-x-1 mt-2">
        <FaAnglesUp />
        <span>+2.6%</span>
      </span>
      <h3 className="text-2xl font-bold">18,765</h3>
      </div>
      <RiBarChartGroupedLine className="text-4xl text-green-300" />
    </div>
  );
};

export default StateCard;
