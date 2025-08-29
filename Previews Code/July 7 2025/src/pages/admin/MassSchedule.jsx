import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiSearch, 
  FiFilter, 
  FiPlus, 
  FiDownload, 
  FiCalendar, 
  FiClock,
  FiUsers,
  FiChevronDown, 
  FiChevronUp,
  FiMapPin,
  FiUserCheck,
  FiUserX
} from 'react-icons/fi';

const MassSchedule = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const [filters, setFilters] = useState({
    massType: 'all',
    time: 'all',
    priest: 'all',
  });

  // Sample data
  const massSchedules = [
    {
      id: 'MS-001',
      date: '2023-06-20',
      time: '07:00 AM',
      type: 'Sunday Mass',
      priest: 'Fr. John Smith',
      location: 'Main Chapel',
      attendees: 125,
      capacity: 200,
      status: 'upcoming'
    },
    {
      id: 'MS-002',
      date: '2023-06-20',
      time: '09:00 AM',
      type: 'Sunday Mass',
      priest: 'Fr. Michael Johnson',
      location: 'Main Chapel',
      attendees: 180,
      capacity: 200,
      status: 'upcoming'
    },
    {
      id: 'MS-003',
      date: '2023-06-19',
      time: '06:00 PM',
      type: 'Weekday Mass',
      priest: 'Fr. Roberto Garcia',
      location: 'Main Chapel',
      attendees: 85,
      capacity: 200,
      status: 'completed'
    },
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const filteredSchedules = massSchedules.filter(schedule => {
    const matchesTab = activeTab === 'all' || schedule.status === activeTab;
    const matchesDate = selectedDate === '' || schedule.date === selectedDate;
    const matchesFilters = 
      (filters.massType === 'all' || schedule.type === filters.massType) &&
      (filters.time === 'all' || schedule.time === filters.time) &&
      (filters.priest === 'all' || schedule.priest === filters.priest);
    
    return matchesTab && matchesDate && matchesFilters;
  });

  const getStatusBadge = (status) => {
    const statusClasses = {
      upcoming: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusClasses[status] || 'bg-gray-100 text-gray-800'}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getAttendancePercentage = (current, total) => {
    return Math.round((current / total) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Mass Schedule</h1>
            <p className="text-gray-600">View and manage mass schedules and attendance</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50">
              <FiDownload className="mr-2" />
              Export
            </button>
            <button 
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              onClick={() => navigate('/mass-schedule/new')}
            >
              <FiPlus className="mr-2" />
              New Schedule
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6
```
