import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";

const pieData = [
  { name: "Group A", value: 40, color: "#FF8042" },
  { name: "Group B", value: 30, color: "#0088FE" },
  { name: "Group C", value: 20, color: "#FFBB28" },
  { name: "Group D", value: 10, color: "#00C49F" },
];

const PieChartBox = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-gray-600">Current Download</h2>
      <div className="flex justify-center items-center mt-4 relative">
        <PieChart width={300} height={300}>
          <Pie
            data={pieData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <div className="text-center font-bold text-xl mt-2 absolute">Total: <br /> 188,245</div>
      </div>
    </div>
  );
};

export default PieChartBox;
