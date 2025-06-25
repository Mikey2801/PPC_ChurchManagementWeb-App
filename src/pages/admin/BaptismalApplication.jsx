import React, { useState } from 'react';
import { FiSearch, FiEdit2, FiTrash2, FiFilter, FiPlus } from 'react-icons/fi';

const BaptismalApplication = () => {
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  
  // Sample data
  const applications = [
    { 
      id: 1, 
      applicationDate: '2022-02-14', 
      name: 'John Doe', 
      birthday: '1990-01-15', 
      gender: 'Male', 
      contactNo: '1234567890', 
      status: 'Pending',
      scheduledDate: '2022-03-15',
      parents: 'Juan & Maria Doe',
      address: 'Sample St, Sample City, Sample Province'
    },
    // Add more sample data as needed
  ];

  const tableFields = [
    { key: 'id', label: 'ID' },
    { key: 'applicationDate', label: 'Application Date' },
    { key: 'name', label: 'Name' },
    { key: 'birthday', label: 'Birthday' },
    { key: 'gender', label: 'Gender' },
    { key: 'contactNo', label: 'Contact No.' },
    { key: 'status', label: 'Status' },
    { key: 'scheduledDate', label: 'Scheduled Date' },
    { key: 'parents', label: 'Parents' },
    { key: 'address', label: 'Address' },
  ];

  const filterOptions = ['Name', 'Status', 'Scheduled Date'];
  const statusOptions = ['All', 'Pending', 'Approved', 'Rejected', 'Completed'];

  const filteredApplications = applications.filter(app => 
    app.name.toLowerCase().includes(search.toLowerCase()) ||
    app.contactNo.includes(search) ||
    app.status.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (item) => {
    console.log('Edit:', item);
    // Implement edit logic
  };

  const handleDelete = (item) => {
    if (window.confirm(`Are you sure you want to delete ${item.name}'s application?`)) {
      console.log('Delete:', item);
      // Implement delete logic
    }
  };

  const handleNewApplication = () => {
    console.log('New application');
    // Implement new application logic
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Baptismal Application</h1>
        <div className="flex items-center space-x-4">
          <div className="relative w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Search applications..."
            />
          </div>
          <button
            onClick={handleNewApplication}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors"
          >
            <FiPlus />
            <span>New Application</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
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
            <select
              className="block w-40 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status.toLowerCase()}>
                  {status}
                </option>
              ))}
            </select>
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
                    {field.key === 'status' ? (
                      <div className="flex items-center">
                        {field.label}
                        <svg
                          className="ml-1 h-4 w-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      </div>
                    ) : (
                      field.label
                    )}
                  </th>
                ))}
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredApplications.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  {tableFields.map((field) => (
                    <td 
                      key={`${item.id}-${field.key}`} 
                      className={`px-6 py-4 whitespace-nowrap text-sm ${
                        field.key === 'status' 
                          ? item.status === 'Pending' 
                            ? 'text-yellow-600 font-medium' 
                            : item.status === 'Approved' 
                              ? 'text-green-600 font-medium' 
                              : 'text-red-600 font-medium'
                          : 'text-gray-900'
                      }`}
                    >
                      {field.key === 'status' ? (
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          item.status === 'Pending' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : item.status === 'Approved' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                        }`}>
                          {item[field.key]}
                        </span>
                      ) : (
                        item[field.key]
                      )}
                    </td>
                  ))}
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-green-600 hover:text-green-900 mr-4"
                      title="Edit"
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
                      className="text-red-600 hover:text-red-900"
                      title="Delete"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                <span className="font-medium">20</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="z-10 bg-green-50 border-green-500 text-green-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  1
                </a>
                <a
                  href="#"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  2
                </a>
                <a
                  href="#"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  3
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaptismalApplication;
