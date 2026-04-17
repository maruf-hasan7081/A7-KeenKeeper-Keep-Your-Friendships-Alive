import { useEffect, useState } from "react";
import FriendCard from "../Friend/FriendCard";

const Allfriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      });
  }, []);

  // 🔥 Summary হিসাব
  const total = friends.length;

  const onTrack = friends.filter(
    (f) => f.status === "on-track"
  ).length;

  const needAttention = friends.filter(
    (f) => f.status === "overdue" || f.status === "almost due"
  ).length;

  const interactions = 12; // later dynamic করতে পারো

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="mt-8">

      {/* 🔥 SUMMARY SECTION */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <h2 className="text-2xl font-bold text-green-700">{total}</h2>
          <p className="text-gray-500 text-sm">Total Friends</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <h2 className="text-2xl font-bold text-green-700">{onTrack}</h2>
          <p className="text-gray-500 text-sm">On Track</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <h2 className="text-2xl font-bold text-green-700">{needAttention}</h2>
          <p className="text-gray-500 text-sm">Need Attention</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <h2 className="text-2xl font-bold text-green-700">{interactions}</h2>
          <p className="text-gray-500 text-sm">
            Interactions This Month
          </p>
        </div>
      </div>

      {/* 🔥 TITLE */}
      <h2 className="text-xl font-semibold mb-6">Your Friends</h2>

      {/* 🔥 FRIEND GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Allfriends;