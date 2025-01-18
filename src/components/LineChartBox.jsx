import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const lineData = [
  { year: "2015", Asia: 0, America: 10 },
  { year: "2016", Asia: 10, America: 0 },
  { year: "2017", Asia: 0, America: 50 },
  { year: "2018", Asia: 30, America: 120 },
  { year: "2019", Asia: 150, America: 100 },
  { year: "2020", Asia: 170, America: 140 },
];

const LineChartBox = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md lg:w-[69%]">
      <div className="flex  justify-between">
        <div>
          <h2 className="text-gray-800 font-semibold text-xl">
            Area Installed
          </h2>
          <p className="text-gray-500 font-semibold text-sm">
            {"(+43%)"} than last year
          </p>
        </div>
        <select className="bg-gray-200 rounded-md font-medium text-gray-600  inline-block h-8">
          <option value="">2019</option>
          <option value="">2020</option>
          <option value="">2021</option>
        </select>
      </div>
      <div className="mt-4 w-full h-44 lg:h-64">
        <ResponsiveContainer>
          <LineChart
            data={lineData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="1" />
            <XAxis dataKey="month" />
            <YAxis />
            <Line type="monotone" dataKey="Asia" stroke="#00C49F" dot={false} />
            <Line
              type="monotone"
              dataKey="America"
              stroke="#FFBB28"
              dot={false}
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartBox;
