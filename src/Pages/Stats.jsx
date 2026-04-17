import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Stats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timeline = JSON.parse(localStorage.getItem("timeline")) || [];

    const count = {
      Call: 0,
      Text: 0,
      Video: 0,
    };

    timeline.forEach((item) => {
      count[item.type]++;
    });

    const chartData = [
      { name: "Call", value: count.Call },
      { name: "Text", value: count.Text },
      { name: "Video", value: count.Video },
    ];

    setData(chartData);
  }, []);

  const COLORS = ["#22c55e", "#a855f7", "#3b82f6"];

  return (
    <div className="max-w-4xl mx-auto py-10 text-center">
      <h1 className="text-2xl font-bold mb-6">
        Friendship Analytics
      </h1>

      <div className="flex justify-center">
        <PieChart width={300} height={300}>
          <Pie data={data} dataKey="value" outerRadius={100}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;