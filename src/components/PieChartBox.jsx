import React, { useCallback, useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const pieData = [
  { name: "Group D", value: 10, color: "#00C49F" },
  { name: "Group B", value: 30, color: "#0088FE" },
  { name: "Group C", value: 20, color: "#FFBB28" },
  { name: "Group A", value: 40, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md lg:w-[34%]">
      <h2 className="text-gray-800 font-semibold text-xl">Current Download</h2>
      <div
        className="flex justify-center items-center mt-4 relative w-full h-52 lg:h-64"
      >
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={1}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="text-center font-bold text-xl mt-2 absolute">
          <span className="text-sm font-normal text-gray-400">Total</span>{" "}
          <br /> 188,245
        </div>
      </div>
    </div>
  );
};

export default PieChartBox;
