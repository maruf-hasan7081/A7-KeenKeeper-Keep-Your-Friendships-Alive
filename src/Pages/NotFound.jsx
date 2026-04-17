import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-800 text-white px-4">

      
      <h1 className="text-7xl font-extrabold mb-4">404</h1>

      
      <h2 className="text-2xl md:text-3xl font-semibold mb-3">
        Page Not Found
      </h2>

      
      <p className="text-gray-200 text-center max-w-md mb-6">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      
      <Link to="/">
        <button className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Go Back Home
        </button>
      </Link>

      
      <div className="mt-10 text-gray-300 text-sm">
        KeenKeeper • Stay Connected
      </div>

    </div>
  );
};

export default NotFound;