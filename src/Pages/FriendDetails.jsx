import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const statusColor = {
  overdue: "bg-red-100 text-red-600",
  "almost due": "bg-yellow-100 text-yellow-600",
  "on-track": "bg-green-100 text-green-600",
};

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => f.id == id);
        setFriend(found);
      });
  }, [id]);

  
  const handleCheckIn = (type) => {
    const entry = {
      date: new Date().toLocaleDateString(),
      title: `${type} with ${friend.name}`,
      type,
    };

    const old = JSON.parse(localStorage.getItem("timeline")) || [];
    localStorage.setItem("timeline", JSON.stringify([entry, ...old]));

    toast.success(`${type} logged successfully`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  if (!friend) {
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">

      
      <div className="space-y-4">

        
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-20 h-20 mx-auto rounded-full object-cover"
          />

          <h2 className="mt-3 font-semibold text-lg">
            {friend.name}
          </h2>

          <span
            className={`text-xs px-3 py-1 rounded-full ${statusColor[friend.status]}`}
          >
            {friend.status}
          </span>

          
          <div className="flex justify-center gap-2 mt-3 flex-wrap">
            {friend.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>

          
          <p className="text-sm text-gray-500 mt-3 italic">
            "{friend.bio}"
          </p>

          
          <p className="text-sm text-gray-400 mt-2">
            {friend.email}
          </p>
        </div>

       
        <button className="btn w-full">⏰ Snooze 2 Weeks</button>
        <button className="btn w-full">📦 Archive</button>
        <button className="btn btn-error w-full">🗑️ Delete</button>
      </div>

      
      <div className="md:col-span-2 space-y-6">

       
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl text-center shadow-sm">
            <h2 className="text-xl font-bold">
              {friend.days_since_contact}
            </h2>
            <p className="text-sm text-gray-500">
              Days Since Contact
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl text-center shadow-sm">
            <h2 className="text-xl font-bold">
              {friend.goal}
            </h2>
            <p className="text-sm text-gray-500">
              Goal (Days)
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl text-center shadow-sm">
            <h2 className="text-xl font-bold">
              {friend.next_due_date}
            </h2>
            <p className="text-sm text-gray-500">
              Next Due
            </p>
          </div>
        </div>

        
        <div className="bg-white p-6 rounded-xl shadow-sm flex justify-between items-center">
          <div>
            <h3 className="font-semibold">
              Relationship Goal
            </h3>
            <p className="text-gray-500">
              Connect every{" "}
              <span className="font-bold">{friend.goal}</span> days
            </p>
          </div>

          <button className="btn btn-sm">Edit</button>
        </div>

        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-4">
            Quick Check-In
          </h3>

          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => handleCheckIn("Call")}
              className="p-4 border rounded-xl hover:bg-gray-100"
            >
              📞 <br /> Call
            </button>

            <button
              onClick={() => handleCheckIn("Text")}
              className="p-4 border rounded-xl hover:bg-gray-100"
            >
              💬 <br /> Text
            </button>

            <button
              onClick={() => handleCheckIn("Video")}
              className="p-4 border rounded-xl hover:bg-gray-100"
            >
              🎥 <br /> Video
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendDetails;