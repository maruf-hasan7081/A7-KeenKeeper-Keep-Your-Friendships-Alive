import { useEffect, useState } from "react";
import { RiPhoneFill } from "react-icons/ri";
import { BsChatDotsFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";

const Timeline = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || [];
    setData(stored);
  }, []);

  const filteredData =
    filter === "all"
      ? data
      : data.filter((item) => item.type.toLowerCase() === filter);

  const iconMap = {
    call: <RiPhoneFill className="text-green-600" />,
    text: <BsChatDotsFill className="text-purple-600" />,
    video: <FaVideo className="text-blue-600" />,
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Timeline</h1>

      
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="select select-bordered mb-6"
      >
        <option value="all">All</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>

      
      <div className="space-y-4">
        {filteredData.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="text-xl">
              {iconMap[item.type.toLowerCase()]}
            </div>

            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-400">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;