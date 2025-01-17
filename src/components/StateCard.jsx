import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

const StateCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-sm text-gray-600">Total Active Users</h2>
      <p className="text-2xl font-bold mt-2">18,765</p>
      <span className="text-green-500 text-sm flex items-center space-x-1">
        <HiOutlineArrowTrendingUp />
        <span>+2.6%</span>
      </span>
    </div>
  );
};

export default StateCard;
