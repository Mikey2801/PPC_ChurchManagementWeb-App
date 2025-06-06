import React from 'react';
import { FaNewspaper, FaClipboardCheck, FaUsers } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">ONLINE SERVICES OFFERED</h1>
        <p className="text-center text-gray-600 mb-12">Select your registration form preference</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Baptismal Class Card */}
          <div className="bg-green-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <FaNewspaper className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Baptismal Class</h3>
              <p className="text-gray-600 mb-6">
                Discover the significance of baptism in our class - attend now to learn more!
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700">
                Register Now →
              </button>
            </div>
          </div>

          {/* Baptismal Form Card */}
          <div className="bg-green-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <FaClipboardCheck className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Baptismal Form</h3>
              <p className="text-gray-600 mb-6">
                Ready to take the plunge? Sign up for our baptism class and dive into a meaningful journey of faith.
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700">
                Fill Form →
              </button>
            </div>
          </div>

          {/* Church Members Card */}
          <div className="bg-green-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <FaUsers className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Church Members</h3>
              <p className="text-gray-600 mb-6">
                Already baptized? Sign up or fill out the form to participate in church events, even if you're not undergoing baptism again!
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700">
                Join Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 