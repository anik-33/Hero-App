import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Rechart = ({ product }) => {
  


  const sortedRatings = [...product.ratings].sort((a, b) => {
  const aNum = parseInt(a.name);
  const bNum = parseInt(b.name);
  return bNum - aNum; // eita descending order korlam (5 to 1)
});
  return (
    <div className=" p-6 border-b border-gray-500 mb-4">
      <h2 className="font-semibold text-lg mb-4 ml-15">Ratings</h2>

      
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          layout="vertical"
        //   data={product.ratings}
            data={sortedRatings} 
          margin={{ top: 10, right: 30, left: 50, bottom: 10 }}
        >
          <CartesianGrid horizontal={false} strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip formatter={(value) => value.toLocaleString()} />
          <Bar
            dataKey="count"
            fill="#ff9500"
            barSize={25}
            radius={[5, 5, 5, 5]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
