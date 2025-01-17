import React from "react";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
const lineData = [
  { year: "2015", Asia: 50, America: 80 },
  { year: "2016", Asia: 70, America: 90 },
  { year: "2017", Asia: 100, America: 110 },
  { year: "2018", Asia: 130, America: 120 },
  { year: "2019", Asia: 150, America: 100 },
  { year: "2020", Asia: 170, America: 140 },
];

const LineChartBox = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-gray-600">Area Installed</h2>
      <div className="mt-4">
        <LineChart width={400} height={250} data={lineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Asia" stroke="#0088FE" />
          <Line type="monotone" dataKey="America" stroke="#FFBB28" />
        </LineChart>
      </div>
    </div>
  );
};

export default LineChartBox;
