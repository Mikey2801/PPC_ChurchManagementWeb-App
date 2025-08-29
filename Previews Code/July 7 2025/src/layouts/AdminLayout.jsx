import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiUsers, 
  FiDroplet, 
  FiCalendar, 
  FiFileText, 
  FiDollarSign, 
  FiSettings,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi';

const menuItems = [
  { 
    title: 'Main Home', 
    icon: <FiHome className="w-5 h-5" />, 
    path: '/home',
    external: true
  },
  { 
    title: 'Dashboard', 
    icon: <FiHome className="w-5 h-5" />, 
    path: '/admin/dashboard' 
  },
  { 
    title: 'Members', 
    icon: <FiUsers className="w-5 h-5" />, 
    path: '/admin/members',
    subItems: [
      { title: 'All Members', path: '/admin/members' },
      { title: 'Add New Member', path: '/admin/members/add' },
      { title: 'Member Categories', path: '/admin/members/categories' }
    ]
  },
  { 
    title: 'Baptism', 
    icon: <FiDroplet className="w-5 h-5" />, 
    path: '/admin/baptism',
    subItems: [
      { title: 'Baptism Records', path: '/admin/baptism/records' },
      { title: 'Schedule Baptism', path: '/admin/baptism/schedule' },
      { title: 'Baptism Classes', path: '/admin/baptism/classes' }
    ]
  },
  { 
    title: 'Ministries', 
    icon: <FiUsers className="w-5 h-5" />, 
    path: '/admin/ministries',
    subItems: [
      { title: 'All Ministries', path: '/admin/ministries' },
      { title: 'Ministry Leaders', path: '/admin/ministries/leaders' },
      { title: 'Ministry Reports', path: '/admin/ministries/reports' }
    ]
  },
  { 
    title: 'Mass Schedule', 
    icon: <FiCalendar className="w-5 h-5" />, 
    path: '/admin/mass-schedule' 
  },
  { 
    title: 'Donations', 
    icon: <FiDollarSign className="w-5 h-5" />, 
    path: '/admin/donations' 
  },
  { 
    title: 'Certificates', 
    icon: <FiFileText className="w-5 h-5" />, 
    path: '/admin/certificates' 
  },
  { 
    title: 'Settings', 
    icon: <FiSettings className="w-5 h-5" />, 
    path: '/admin/settings' 
  },
];

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleSubMenu = (title) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const isActive = (path, exact = true) => {
    return exact 
      ? location.pathname === path 
      : location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-30 w-64 bg-green-800 text-white`}
      >
        <div className="flex items-center justify-between h-16 px-4 bg-green-900">
          <div className="text-xl font-bold">Church Admin</div>
          <button 
            onClick={toggleSidebar}
            className="lg:hidden text-white"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="mt-5 px-2 space-y-1">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.subItems ? (
                <div>
                  <button
                    onClick={() => toggleSubMenu(item.title)}
                    className={`group flex items-center w-full px-2 py-3 text-sm font-medium rounded-md ${isActive(item.path, false) ? 'bg-green-900 text-white' : 'text-green-100 hover:bg-green-700 hover:text-white'}`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span className="flex-1 text-left">{item.title}</span>
                    {expandedMenus[item.title] ? (
                      <FiChevronUp className="w-4 h-4" />
                    ) : (
                      <FiChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {expandedMenus[item.title] && (
                    <div className="mt-1 space-y-1 pl-11">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`block px-3 py-2 text-sm font-medium rounded-md ${isActive(subItem.path) ? 'bg-green-900 text-white' : 'text-green-100 hover:bg-green-700 hover:text-white'}`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.external ? (
                <a
                  href={item.path}
                  className="group flex items-center px-2 py-3 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <span className="flex items-center">
                    <span className="mr-3 text-gray-400 group-hover:text-gray-500">
                      {item.icon}
                    </span>
                    {item.title}
                  </span>
                </a>
              ) : (
                <Link
                  to={item.path}
                  className={`group flex items-center px-2 py-3 text-sm font-medium rounded-md ${isActive(item.path) ? 'bg-green-900 text-white' : 'text-green-100 hover:bg-green-700 hover:text-white'}`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:pl-64">
        {/* Top navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="lg:hidden text-gray-500 hover:text-gray-600"
              >
                <FiMenu className="w-6 h-6" />
              </button>
              <h1 className="ml-4 text-xl font-semibold text-gray-900">
                {menuItems.find(item => isActive(item.path, false))?.title || 'Dashboard'}
              </h1>
            </div>
            <div className="flex items-center">
              <button className="p-1 text-gray-400 hover:text-gray-500">
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    id="user-menu"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white font-medium">
                      AU
                    </div>
                    <span className="ml-2 hidden md:inline-block text-sm font-medium text-gray-700">
                      Admin User
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
