import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCalendar, FiUsers, FiDroplet, FiHome } from 'react-icons/fi';

const Attendance = () => {
  const navigate = useNavigate();

  const attendanceCards = [
    {
      id: 1,
      title: 'Baptism Class',
      icon: <FiDroplet className="w-12 h-12 text-blue-500" />,
      path: '/baptism-class',
      description: 'Track attendance for baptism classes and preparation sessions',
      buttonText: 'Manage Attendance',
      bgColor: 'bg-blue-50',
      hoverBgColor: 'hover:bg-blue-100',
      textColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
    },
    {
      id: 2,
      title: 'Mass Schedule',
      icon: <FiCalendar className="w-12 h-12 text-green-500" />,
      path: '/mass-schedule',
      description: 'Record and manage attendance for regular mass schedules',
      buttonText: 'View Schedule',
      bgColor: 'bg-green-50',
      hoverBgColor: 'hover:bg-green-100',
      textColor: 'text-green-600',
      iconBg: 'bg-green-100',
    },
    {
      id: 3,
      title: 'Ministry',
      icon: <FiUsers className="w-12 h-12 text-purple-500" />,
      path: '/ministry-attendance',
      description: 'Track participation and attendance for ministry activities',
      buttonText: 'View Ministry',
      bgColor: 'bg-purple-50',
      hoverBgColor: 'hover:bg-purple-100',
      textColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
    },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Attendance Tracker</h1>
          <p className="mt-2 text-gray-600">
            Manage and track attendance across different church activities and events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attendanceCards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.path)}
              className={`${card.bgColor} ${card.hoverBgColor} rounded-xl shadow-sm p-6 cursor-pointer transition-colors duration-200 border border-gray-100`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className={`${card.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {card.description}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button
                  className={`px-4 py-2 ${card.textColor} font-medium rounded-lg ${card.hoverBgColor} transition-colors`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(card.path);
                  }}
                >
                  {card.buttonText}
                </button>
                <span className="text-sm text-gray-500">
                  <FiHome className="inline mr-1" />
                  Church
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats Section */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <FiUsers className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Attendance</p>
                  <p className="text-2xl font-bold text-gray-900">1,245</p>
                  <p className="text-xs text-green-600">+12% from last month</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <FiCalendar className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">This Week</p>
                  <p className="text-2xl font-bold text-gray-900">187</p>
                  <p className="text-xs text-green-600">+8% from last week</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <FiDroplet className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Baptism This Month</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                  <p className="text-xs text-green-600">+3 from last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
            <button className="text-sm font-medium text-green-600 hover:text-green-700">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <FiUsers className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">New attendance recorded</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
