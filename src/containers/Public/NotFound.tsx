import React from 'react';
import { Link } from 'react-router-dom';
const NotFound: React.FC = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white">404</h1>
        <p className="text-2xl text-white mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-lg text-white mt-2">
          But don't worry, you can find your way back home. Hehehe :D
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
