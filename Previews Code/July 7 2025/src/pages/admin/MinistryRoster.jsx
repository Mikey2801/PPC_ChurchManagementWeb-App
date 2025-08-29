import React from 'react';
import { FiMusic, FiUsers, FiCoffee, FiBook, FiMic, FiHeart } from 'react-icons/fi';

const MinistryRoster = () => {
  const ministries = [
    {
      id: 1,
      title: 'Music Team',
      icon: <FiMusic size={48} className="text-green-600" />,
      description: 'Join our music ministry and use your talents to lead worship and praise.',
      members: 12,
    },
    {
      id: 2,
      title: 'Children Ministry',
      icon: <FiUsers size={48} className="text-blue-600" />,
      description: 'Help nurture the faith of our youngest members through teaching and activities.',
      members: 8,
    },
    {
      id: 3,
      title: 'Food Team',
      icon: <FiCoffee size={48} className="text-yellow-600" />,
      description: 'Serve the community through meal preparation and hospitality.',
      members: 15,
    },
    {
      id: 4,
      title: 'Bible Study',
      icon: <FiBook size={48} className="text-purple-600" />,
      description: 'Lead or facilitate Bible study groups for spiritual growth.',
      members: 6,
    },
    {
      id: 5,
      title: 'Audio/Visual',
      icon: <FiMic size={48} className="text-red-600" />,
      description: 'Support our services with technical expertise in sound and visuals.',
      members: 5,
    },
    {
      id: 6,
      title: 'Hospitality',
      icon: <FiHeart size={48} className="text-pink-600" />,
      description: 'Welcome and assist visitors and members during services and events.',
      members: 10,
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Ministry Roster</h1>
        <p className="text-gray-600">Manage and join various church ministries</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ministries.map((ministry) => (
          <div key={ministry.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  {ministry.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{ministry.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{ministry.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{ministry.members} members</span>
                <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Ministry Card */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border-2 border-dashed border-gray-300 p-8 text-center hover:border-green-500 transition-colors cursor-pointer">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Add New Ministry</h3>
          <p className="text-sm text-gray-500">Create a new ministry team</p>
        </div>
      </div>
    </div>
  );
};

export default MinistryRoster;
