import React from 'react';
import { FaBell, FaComments } from 'react-icons/fa';
import logo from '../../assets/PPC_logo-removebg-preview2.png';

const MemberHome = () => {
  const userName = "Juan Sanchez"; // This should come from your auth context

  return (
    <div className="flex-1 p-8">
      {/* Header with notifications */}
      <div className="flex justify-end mb-8 space-x-4">
        <button className="p-2 text-gray-600 hover:text-green-600">
          <FaComments className="text-xl" />
        </button>
        <button className="p-2 text-gray-600 hover:text-green-600 relative">
          <FaBell className="text-xl" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">{userName}</span>
          <button className="p-1">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="text-center mb-12">
        <img src={logo} alt="PPC Logo" className="w-32 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-2">Brethren, welcome to</h1>
        <h2 className="text-4xl font-bold mb-4">Pamukid Presbyterian Church</h2>
        <p className="text-xl text-gray-600">
          Transforming Lives, Restoring Hope,<br />
          You were made for more!
        </p>
        <button className="mt-6 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default MemberHome; 