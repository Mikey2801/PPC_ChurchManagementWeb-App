import React, { useState } from 'react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, Legend } from 'recharts';
import { HiOutlineSearch, HiOutlineBell, HiOutlineChatAlt } from 'react-icons/hi';
import { FiGrid, FiSearch, FiBell, FiMessageCircle, FiLogOut, FiChevronDown, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { FaUser, FaArrowDown as FaArrowDown2, FaArrowUp as FaArrowUp2, FaUsers, FaClipboardList, FaUserPlus, FaUserCircle, FaUsersCog, FaCertificate, FaHandHoldingHeart } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import DashboardBg from '../../assets/DashboardBg.png';

const donutChartData = [
  { name: 'Adult', value: 31, color: '#EAB222' },
  { name: 'Youth', value: 27, color: '#6EDD9E' },
  { name: 'Middle Age', value: 12, color: '#9A15A9' },
  { name: 'Young Professional', value: 22, color: '#23B9B1' },
  { name: 'Children', value: 8, color: '#A1F6C5' },
];

const lineChartData = [
  { name: 'Jan', Baptizees: 22 },
  { name: 'Feb', Baptizees: 28 },
  { name: 'Mar', Baptizees: 25 },
  { name: 'Apr', Baptizees: 30 },
  { name: 'May', Baptizees: 42 },
  { name: 'Jun', Baptizees: 24 },
  { name: 'Jul', Baptizees: 32 },
  { name: 'Aug', Baptizees: 28 },
  { name: 'Sep', Baptizees: 30 },
  { name: 'Oct', Baptizees: 32 },
  { name: 'Nov', Baptizees: 30 },
  { name: 'Dec', Baptizees: 23 },
];

const StatCard = ({ title, value, change, changeIcon, isDecreasing = false }) => (
  <div className="bg-white rounded-xl h-[146px] w-[318px] shadow-sm flex items-center">
    <div className="w-1 h-16 bg-[#6EDD9E] ml-2"></div>
    <div className="ml-6">
      <div className="text-[#666] text-[15px] font-normal">{title}</div>
      <div className="text-[36px] font-semibold text-black mt-1">{value}</div>
      {change && (
        <div className="flex items-center mt-1">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isDecreasing ? 'bg-red-100' : 'bg-green-100'}`}>
            {React.cloneElement(changeIcon, {
              size: 12,
              className: isDecreasing ? 'text-red-500' : 'text-green-500'
            })}
          </div>
          <span className={`ml-1 text-xs ${isDecreasing ? 'text-red-500' : 'text-green-500'}`}>
            {change}
          </span>
        </div>
      )}
    </div>
  </div>
);

const CustomPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="#222"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize="16"
      fontWeight="600"
      fontFamily="Inter"
    >
      {`${Math.round(percent * 100)}%`}
    </text>
  );
};

const NavLink = ({ href, icon, children, active = false }) => (
  <li className="mb-2">
    <a
      href={href}
      className={`flex items-center px-4 py-3 rounded-[37px] font-normal font-['Inter'] text-[15px] transition-colors w-full ${active ? 'bg-white/90 text-black shadow' : 'text-white/80 hover:bg-white/20'}`}
    >
      {icon}
      {children}
    </a>
  </li>
);

// Sample data for charts
const pieData = [
  { name: 'Adult', value: 31, color: '#76c893' },
  { name: 'Youth', value: 27, color: '#5ca4a9' },
  { name: 'Middle Age', value: 12, color: '#8e5a94' },
  { name: 'Young Professional', value: 22, color: '#4e9f91' },
  { name: 'Children', value: 8, color: '#c790be' },
];

const lineData = [
  { month: 'Jan', baptizees: 20 },
  { month: 'Feb', baptizees: 27 },
  { month: 'Mar', baptizees: 24 },
  { month: 'Apr', baptizees: 26 },
  { month: 'May', baptizees: 42 },
  { month: 'Jun', baptizees: 23 },
  { month: 'Jul', baptizees: 33 },
  { month: 'Aug', baptizees: 27 },
  { month: 'Sep', baptizees: 29 },
  { month: 'Oct', baptizees: 30 },
  { month: 'Nov', baptizees: 31 },
  { month: 'Dec', baptizees: 23 },
];

const navItems = [
  'Dashboard',
  'Churchgoer Record',
  'Baptismal Class List',
  'Baptismal Applicant',
  'Church Member Profile',
  'Ministry Roster',
  'Certification Request',
  'Donation',
];

export default function AdminDashboard() {
  const [role, setRole] = useState('Pastor');
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Dashboard stats
  const stats = [
    {
      title: 'Number of Churchgoers',
      value: 86,
      change: '2% from last month',
      changeIcon: <FiArrowDown />,
      isDecreasing: true,
    },
    {
      title: 'Total Church Members',
      value: '1,903',
      change: '5% from last month',
      changeIcon: <FiArrowUp size={14} />,
      changeColor: '#54b435',
    },
    {
      title: 'Number of Baptismal',
      subtitle: 'Certificate Request',
      value: '1,005',
      change: '12% from last month',
      changeIcon: <FiArrowUp size={14} />,
      changeColor: '#54b435',
    },
    {
      title: 'Person who apply as',
      subtitle: 'a ministry leader',
      value: 300,
      change: '8% from last month',
      changeIcon: <FiArrowUp size={14} />,
      changeColor: '#54b435',
    },
  ];

  return (
    <div className="flex h-screen font-['Inter'] bg-[#f9fafe]">
      {/* Sidebar */}
      <div className="w-[250px] bg-gradient-to-b from-[#d5f1d8] via-[#74bb89] to-[#398153] flex flex-col p-8 text-[#1a1a1a]">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-3 w-14 h-14 rounded-full bg-[#a5edb4] flex items-center justify-center">
            <svg width="40" height="40" fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <circle cx="12" cy="7" r="5" />
              <path d="M2 22c0-5 10-5 10-5s10 0 10 5v1H2v-1z" />
            </svg>
          </div>
          <select
            aria-label="Select role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 px-3 py-1 rounded-full border border-gray-400 bg-white font-semibold text-center w-full outline-none"
          >
            <option>Pastor</option>
            <option>Leader</option>
            <option>Member</option>
          </select>
        </div>
        <nav className="flex-1 flex flex-col gap-4">
          {navItems.map((item) => (
            <div
              key={item}
              onClick={() => setActiveNav(item)}
              className={`px-4 py-2 rounded-lg cursor-pointer font-medium flex items-center transition-colors ${activeNav === item ? 'bg-[#c9f4d0] text-[#245323]' : 'text-[#2d2d2d] hover:bg-[#c9f4d0]/60'}`}
            >
              {item === 'Dashboard' && (
                <FiGrid className="mr-2 text-[18px]" />
              )}
              {item}
            </div>
          ))}
        </nav>
        <button className="mt-auto bg-[#76c893] text-[#122d08] font-bold text-[16px] py-2 rounded-lg border-none cursor-pointer flex items-center justify-center">
          <FiLogOut className="mr-2" /> Log out
        </button>
      </div>
      {/* Main content */}
      <div className="flex-1 bg-white flex flex-col">
        {/* Header */}
        <header className="h-[70px] flex items-center px-8 shadow-sm justify-between">
          <div className="flex items-center bg-[#f7f9f9] rounded-full h-9 w-[270px]">
            <FiSearch size={18} className="ml-3 mr-1 text-gray-500" />
            <input
              type="text"
              placeholder="Search here"
              className="border-none bg-transparent h-full outline-none text-[14px] pl-1 w-full"
              aria-label="Search here"
            />
          </div>
          <div className="flex items-center gap-5">
            <button className="bg-[#eee] rounded-full h-9 w-9 flex items-center justify-center text-gray-600">
              <FiMessageCircle />
            </button>
            <button className="bg-[#eee] rounded-full h-9 w-9 flex items-center justify-center text-gray-600 relative">
              <FiBell />
              <span className="absolute top-2 right-2 h-2 w-2 bg-[#FF5B5B] rounded-full"></span>
            </button>
            <div
              className="flex items-center bg-[#f0f4f8] rounded-full px-3 py-1 cursor-pointer font-semibold text-[15px] text-[#222] relative"
              tabIndex={0}
              onBlur={() => setUserMenuOpen(false)}
              onClick={() => setUserMenuOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={userMenuOpen}
            >
              <svg width="28" height="28" fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2">
                <circle cx="12" cy="7" r="5" />
                <path d="M2 22c0-5 10-5 10-5s10 0 10 5v1H2v-1z" />
              </svg>
              Jameson Mike Dy
              <FiChevronDown className="ml-2" />
              {userMenuOpen && (
                <div className="absolute top-[110%] right-0 bg-white rounded-xl shadow-lg w-36 z-50">
                  <div className="px-4 py-2 cursor-pointer text-[14px] hover:bg-gray-100">Profile</div>
                  <div className="px-4 py-2 cursor-pointer text-[14px] hover:bg-gray-100">Settings</div>
                  <div className="px-4 py-2 cursor-pointer text-[14px] hover:bg-gray-100">Logout</div>
                </div>
              )}
            </div>
          </div>
        </header>
        {/* Dashboard content */}
        <section className="p-8 flex-1 overflow-y-auto bg-gray-50">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h1>
            <p className="text-gray-500">Welcome back, Pastor Jameson</p>
          </div>
          
          {/* Stats Grid */}
          <div className="flex flex-wrap gap-6 mb-8">
            {stats.map(({ title, value, change, changeIcon, isDecreasing }) => (
              <StatCard 
                key={title}
                title={title}
                value={value}
                change={change}
                changeIcon={changeIcon}
                isDecreasing={isDecreasing}
              />
            ))}
          </div>
          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Donut Chart */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Age Distribution of Baptized Members</h3>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value, name, props) => [
                        `${props.payload.name}: ${value} (${(props.payload.percent * 100).toFixed(1)}%)`,
                        'Count'
                      ]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Line Chart */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Annual Baptism Trends</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-green-50 text-green-700 rounded-lg">2024</button>
                  <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">2023</button>
                </div>
              </div>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6B7280' }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6B7280' }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
                      }}
                      labelStyle={{ color: '#4B5563', fontWeight: 'bold' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="baptizees"
                      stroke="#10B981"
                      strokeWidth={2}
                      dot={{
                        fill: '#10B981',
                        stroke: '#fff',
                        strokeWidth: 2,
                        r: 5,
                        fillOpacity: 1
                      }}
                      activeDot={{
                        r: 6,
                        stroke: '#fff',
                        strokeWidth: 2,
                        fill: '#059669'
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
