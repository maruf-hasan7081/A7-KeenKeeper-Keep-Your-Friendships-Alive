import { Link } from "react-router";

const statusColor = {
  overdue: "bg-red-100 text-red-600",
  "almost due": "bg-yellow-100 text-yellow-600",
  "on-track": "bg-green-100 text-green-600",
};

const FriendCard = ({ friend }) => {
  return (
    <Link to={`/friend/${friend.id}`}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-6 text-center">

        
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-16 h-16 mx-auto rounded-full object-cover"
        />

        
        <h2 className="mt-3 font-semibold text-gray-800">
          {friend.name}
        </h2>

        
        <p className="text-sm text-gray-400">
          {friend.days_since_contact}d ago
        </p>

        
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

       
        <div className="mt-3">
          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor[friend.status]}`}
          >
            {friend.status === "almost due"
              ? "Almost Due"
              : friend.status === "on-track"
              ? "On-Track"
              : "Overdue"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;