import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-center text-white">
      <FaExclamationTriangle className="text-7xl text-yellow-400 mb-4" />
      <h1 className="text-8xl font-extrabold">404</h1>
      <p className="text-2xl mt-4">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 px-8 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition duration-300 shadow-lg">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;