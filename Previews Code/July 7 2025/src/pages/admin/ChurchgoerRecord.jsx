import React, { useState } from 'react';
import { FiSearch, FiEdit2, FiTrash2, FiFilter } from 'react-icons/fi';

const ChurchgoerRecord = () => {
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  
  // Sample data
  const churchgoers = [
    { id: 1, applicationDate: '2022-02-14', name: 'John Doe', birthday: '1990-01-15', gender: 'Male', contactNo: '1234567890', streetBarangay: 'Sample St', townCity: 'Sample City', province: 'Sample Province' },
    { id: 2, applicationDate: '2022-02-15', name: 'Jane Smith', birthday: '1985-03-20', gender: 'Female', contactNo: '9876543210', streetBarangay: 'Test St', townCity: 'Test City', province: 'Test Province' },
    // Add more sample data as needed
  ];

  const tableFields = [
    { key: 'id', label: 'ID' },
    { key: 'applicationDate', label: 'Application Date' },
    { key: 'name', label: 'Name' },
    { key: 'birthday', label: 'Birthday' },
    { key: 'gender', label: 'Gender' },
    { key: 'contactNo', label: 'Contact No.' },
    { key: 'streetBarangay', label: 'Street/Barangay' },
    { key: 'townCity', label: 'Town/City' },
    { key: 'province', label: 'Province' },
  ];

  const filterOptions = ['Name', 'Age', 'Application Date'];

  const filteredChurchgoers = churchgoers.filter(churchgoer => 
    churchgoer.name.toLowerCase().includes(search.toLowerCase()) ||
    churchgoer.contactNo.includes(search)
  );

  const handleEdit = (item) => {
    console.log('Edit:', item);
    // Implement edit logic
  };

  const handleDelete = (item) => {
    if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
      console.log('Delete:', item);
      // Implement delete logic
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Churchgoer Record</h1>
        <div className="relative w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Search here..."
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2 w-64">
            <FiFilter className="text-gray-500" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              <option value="">Filter by</option>
              {filterOptions.map((option) => (
                <option key={option} value={option.toLowerCase().replace(' ', '')}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 text-gray-500 hover:text-green-600">
              <FiEdit2 size={20} />
            </button>
            <button className="p-2 text-gray-500 hover:text-red-600">
              <FiTrash2 size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {tableFields.map((field) => (
                  <th
                    key={field.key}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {field.label}
                  </th>
                ))}
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredChurchgoers.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  {tableFields.map((field) => (
                    <td key={`${item.id}-${field.key}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item[field.key]}
                    </td>
                  ))}
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-green-600 hover:text-green-900 mr-4"
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChurchgoerRecord;
